import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cn } from '../../../utils/cn';

export type EggTier = 'dragon' | 'celestial' | 'forest';

export interface ThreeEggViewerProps {
  eggTier?: EggTier;
  crackProgress?: number; // 0 to 1
  isHatched?: boolean;
  interactive?: boolean;
  autoRotate?: boolean;
  onTap?: () => void;
  className?: string;
  width?: number | string;
  height?: number | string;
  showDais?: boolean;
}

interface EggThemeConfig {
  gradient: [string, string, string, string, string];
  scaleColors: [string, string, string][];
  crackColor: string;
  shadowColor: string;
  specular: number;
  emissive: number;
  hornColor: number;
  bandColors: number[];
  auraColor: number;
  firePalette: [number, number, number][];
  lightColors: {
    ambient: number;
    sun: number;
    fire: number;
    accent: number;
  };
}

const EGG_THEMES: Record<EggTier, EggThemeConfig> = {
  dragon: {
    gradient: ['#360f06', '#6a230e', '#8b2e10', '#b43b0c', '#683d0a'],
    scaleColors: [
      ['#d97706', '#c2410c', '#5a1d09'],
      ['#ea580c', '#991b1b', '#3b0b0b'],
      ['#f59e0b', '#c2410c', '#782710'],
      ['#b45309', '#854d0e', '#381604'],
    ],
    crackColor: '#f59e0b',
    shadowColor: '#c2410c',
    specular: 0xd97706,
    emissive: 0x7c2d12,
    hornColor: 0xb45309,
    bandColors: [0xb45309, 0xc2410c, 0xd97706],
    auraColor: 0xc2410c,
    firePalette: [
      [0.85, 0.45, 0.1],
      [0.9, 0.3, 0.05],
      [0.8, 0.18, 0.08],
      [0.85, 0.55, 0.15],
      [0.95, 0.65, 0.3],
    ],
    lightColors: {
      ambient: 0xffecd0,
      sun: 0xffedd5,
      fire: 0xea580c,
      accent: 0xd97706,
    },
  },
  celestial: {
    gradient: ['#090d16', '#1e1b4b', '#312e81', '#1e3a8a', '#0369a1'],
    scaleColors: [
      ['#00c4ff', '#3b82f6', '#1e1b4b'],
      ['#8b5cf6', '#6366f1', '#1e1b4b'],
      ['#38bdf8', '#0284c7', '#0f172a'],
      ['#c084fc', '#7c3aed', '#1e1b4b'],
    ],
    crackColor: '#38bdf8',
    shadowColor: '#6366f1',
    specular: 0x00c4ff,
    emissive: 0x1e1b4b,
    hornColor: 0x8b5cf6,
    bandColors: [0x00c4ff, 0x8b5cf6, 0x38bdf8],
    auraColor: 0x00c4ff,
    firePalette: [
      [0.0, 0.77, 1.0],
      [0.55, 0.36, 0.96],
      [0.22, 0.74, 0.97],
      [0.75, 0.52, 0.99],
      [0.9, 0.95, 1.0],
    ],
    lightColors: {
      ambient: 0xe0e7ff,
      sun: 0xf0f9ff,
      fire: 0x00c4ff,
      accent: 0x8b5cf6,
    },
  },
  forest: {
    gradient: ['#022c22', '#064e3b', '#065f46', '#047857', '#0f766e'],
    scaleColors: [
      ['#10b981', '#059669', '#022c22'],
      ['#34d399', '#10b981', '#064e3b'],
      ['#84cc16', '#65a30d', '#14532d'],
      ['#14b8a6', '#0d9488', '#042f2e'],
    ],
    crackColor: '#34d399',
    shadowColor: '#059669',
    specular: 0x10b981,
    emissive: 0x064e3b,
    hornColor: 0x059669,
    bandColors: [0x10b981, 0x059669, 0x84cc16],
    auraColor: 0x10b981,
    firePalette: [
      [0.06, 0.73, 0.51],
      [0.2, 0.83, 0.6],
      [0.52, 0.8, 0.09],
      [0.08, 0.72, 0.65],
      [0.85, 0.98, 0.85],
    ],
    lightColors: {
      ambient: 0xecfdf5,
      sun: 0xf0fdf4,
      fire: 0x10b981,
      accent: 0x059669,
    },
  },
};

function createProceduralEggTexture(theme: EggThemeConfig): THREE.CanvasTexture | null {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 512, 512);
  bgGrad.addColorStop(0, theme.gradient[0]);
  bgGrad.addColorStop(0.3, theme.gradient[1]);
  bgGrad.addColorStop(0.6, theme.gradient[2]);
  bgGrad.addColorStop(0.85, theme.gradient[3]);
  bgGrad.addColorStop(1, theme.gradient[4]);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 512, 512);

  // Scales pattern
  const rows = 20;
  const cols = 20;
  const scaleW = 512 / cols;
  const scaleH = 512 / rows;

  for (let r = 0; r < rows; r++) {
    const y = r * scaleH;
    const isOdd = r % 2 === 1;
    const xOffset = isOdd ? scaleW * 0.5 : 0;

    for (let c = -1; c <= cols + 1; c++) {
      const x = c * scaleW + xOffset;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + scaleW * 0.5, y - scaleH * 0.35, x + scaleW, y);
      ctx.quadraticCurveTo(x + scaleW * 0.85, y + scaleH * 0.9, x + scaleW * 0.5, y + scaleH * 1.15);
      ctx.quadraticCurveTo(x + scaleW * 0.15, y + scaleH * 0.9, x, y);
      ctx.closePath();

      const paletteIndex = (r * 7 + c * 3) % theme.scaleColors.length;
      const palette = theme.scaleColors[paletteIndex >= 0 ? paletteIndex : 0];

      const sGrad = ctx.createRadialGradient(
        x + scaleW * 0.5,
        y + scaleH * 0.4,
        2,
        x + scaleW * 0.5,
        y + scaleH * 0.5,
        scaleW * 0.7
      );
      sGrad.addColorStop(0, palette[0]);
      sGrad.addColorStop(0.5, palette[1]);
      sGrad.addColorStop(1, palette[2]);

      ctx.fillStyle = sGrad;
      ctx.fill();

      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.stroke();
      ctx.restore();
    }
  }

  // Glowing cracks
  ctx.lineWidth = 3.0;
  ctx.strokeStyle = theme.crackColor;
  ctx.shadowColor = theme.shadowColor;
  ctx.shadowBlur = 10;

  const crackPts: { x: number; y: number }[] = [];
  for (let i = 0; i < 24; i++) {
    crackPts.push({
      x: (Math.sin(i * 1.63) * 0.42 + 0.5) * 512,
      y: (Math.cos(i * 2.21) * 0.42 + 0.5) * 512,
    });
  }

  ctx.beginPath();
  for (let i = 0; i < crackPts.length; i++) {
    const p1 = crackPts[i];
    for (let j = i + 1; j < crackPts.length; j++) {
      const p2 = crackPts[j];
      const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      if (dist < 110) {
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo((p1.x + p2.x) * 0.5, (p1.y + p2.y) * 0.5, p2.x, p2.y);
      }
    }
  }
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export const ThreeEggViewer: React.FC<ThreeEggViewerProps> = ({
  eggTier = 'dragon',
  crackProgress = 0,
  isHatched = false,
  interactive = true,
  autoRotate = true,
  onTap,
  className,
  width = '100%',
  height = '100%',
  showDais = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const animationFrameRef = useRef<number | null>(null);

  // References for dynamic updates
  const eggMatRef = useRef<THREE.MeshPhongMaterial | null>(null);
  const auraMatRef = useRef<THREE.MeshPhongMaterial | null>(null);
  const lightRef = useRef<THREE.PointLight | null>(null);
  const wobbleIntensityRef = useRef<number>(0);

  // Handle crack progress update
  useEffect(() => {
    if (eggMatRef.current) {
      eggMatRef.current.emissiveIntensity = 0.38 + crackProgress * 1.8;
    }
    if (auraMatRef.current) {
      auraMatRef.current.opacity = 0.18 + crackProgress * 0.45;
    }
    if (lightRef.current) {
      lightRef.current.intensity = 4.0 + crackProgress * 12.0;
    }
  }, [crackProgress]);

  const handleTap = () => {
    wobbleIntensityRef.current = 0.35;
    if (onTap) {
      onTap();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === 'undefined') return;

    // Detect WebGL capability safely
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebGlSupported(false);
      return;
    }

    const theme = EGG_THEMES[eggTier] || EGG_THEMES.dragon;
    const w = container.clientWidth || 320;
    const h = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(theme.lightColors.ambient, 1.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(theme.lightColors.sun, 2.5);
    sunLight.position.set(5, 8, 6);
    scene.add(sunLight);

    const fireLight = new THREE.PointLight(theme.lightColors.fire, 3.8, 25);
    fireLight.position.set(-6, 3, -1);
    scene.add(fireLight);

    const coreLight = new THREE.PointLight(theme.lightColors.accent, 4.0, 16);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);
    lightRef.current = coreLight;

    // Master Group
    const eggGroup = new THREE.Group();
    scene.add(eggGroup);

    // Egg Geometry (tapered parametric sphere)
    const eggGeo = new THREE.SphereGeometry(1.68, 48, 48);
    const posAttr = eggGeo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < posAttr.count; i++) {
      v.fromBufferAttribute(posAttr, i);
      const normalizedY = (v.y + 1.68) / 3.36;
      const factor = 1.0 - 0.28 * Math.pow(normalizedY, 1.55) + 0.12 * Math.sin(normalizedY * Math.PI);
      v.x *= factor;
      v.z *= factor;
      v.y *= 1.28;
      posAttr.setXYZ(i, v.x, v.y, v.z);
    }
    eggGeo.computeVertexNormals();

    const eggTexture = createProceduralEggTexture(theme);

    const eggMat = new THREE.MeshPhongMaterial({
      map: eggTexture,
      color: 0xfaf0e6,
      specular: theme.specular,
      shininess: 95,
      emissive: theme.emissive,
      emissiveIntensity: 0.38 + crackProgress * 1.8,
    });
    eggMatRef.current = eggMat;

    const eggMesh = new THREE.Mesh(eggGeo, eggMat);
    eggGroup.add(eggMesh);

    // Draconic Spines / Horns
    const hornGeo = new THREE.ConeGeometry(0.16, 0.72, 16);
    hornGeo.translate(0, 0.36, 0);

    const hornMat = new THREE.MeshPhongMaterial({
      color: theme.hornColor,
      emissive: theme.emissive,
      emissiveIntensity: 0.45,
      specular: 0xfed7aa,
      shininess: 110,
    });

    const leftHorn = new THREE.Mesh(hornGeo, hornMat);
    leftHorn.position.set(-0.78, 1.25, 0);
    leftHorn.rotation.z = 0.55;
    leftHorn.rotation.x = -0.25;
    eggGroup.add(leftHorn);

    const rightHorn = new THREE.Mesh(hornGeo, hornMat);
    rightHorn.position.set(0.78, 1.25, 0);
    rightHorn.rotation.z = -0.55;
    rightHorn.rotation.x = -0.25;
    eggGroup.add(rightHorn);

    // Ribbons
    const bandsCount = theme.bandColors.length;
    for (let b = 0; b < bandsCount; b++) {
      const curvePts: THREE.Vector3[] = [];
      const rotOffset = (b * Math.PI * 2) / bandsCount;
      for (let t = -1.65; t <= 1.85; t += 0.08) {
        const norm = (t + 1.65) / 3.5;
        const r = (1.7 - 0.28 * Math.pow(norm, 1.45)) * 1.05;
        const angle = t * 2.2 + rotOffset;
        curvePts.push(new THREE.Vector3(Math.cos(angle) * r, t * 1.28, Math.sin(angle) * r));
      }
      const curve = new THREE.CatmullRomCurve3(curvePts);
      const tubeGeo = new THREE.TubeGeometry(curve, 60, 0.048, 8, false);
      const tubeMat = new THREE.MeshPhongMaterial({
        color: theme.bandColors[b],
        emissive: theme.bandColors[b],
        emissiveIntensity: 0.45,
        specular: 0xfed7aa,
        shininess: 100,
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      eggGroup.add(tubeMesh);
    }

    // Aura
    const auraGeo = eggGeo.clone();
    const auraMat = new THREE.MeshPhongMaterial({
      color: theme.auraColor,
      emissive: theme.auraColor,
      emissiveIntensity: 0.65,
      transparent: true,
      opacity: 0.18 + crackProgress * 0.45,
      side: THREE.FrontSide,
    });
    auraMatRef.current = auraMat;
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    auraMesh.scale.set(1.05, 1.05, 1.05);
    eggGroup.add(auraMesh);

    // Floating Embers
    const particleCount = 100;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSpeeds: { orbitSpeed: number; yFloat: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rad = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.95;
      particlePositions[i * 3] = rad * Math.cos(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = rad * Math.sin(phi);
      particlePositions[i * 3 + 2] = rad * Math.cos(phi) * Math.sin(theta);

      const col = theme.firePalette[i % theme.firePalette.length];
      particleColors[i * 3] = col[0];
      particleColors[i * 3 + 1] = col[1];
      particleColors[i * 3 + 2] = col[2];

      particleSpeeds.push({
        orbitSpeed: (Math.random() * 0.015 + 0.006) * (Math.random() > 0.5 ? 1 : -1),
        yFloat: Math.random() * 0.02 + 0.01,
      });
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Dais Platform
    if (showDais) {
      const daisGroup = new THREE.Group();
      daisGroup.position.y = -2.3;
      scene.add(daisGroup);

      for (let r = 0; r < 2; r++) {
        const rGeo = new THREE.RingGeometry(1.5 + r * 0.45, 1.8 + r * 0.45, 48);
        const rMat = new THREE.MeshBasicMaterial({
          color: theme.bandColors[r % theme.bandColors.length],
          transparent: true,
          opacity: 0.28 - r * 0.08,
          side: THREE.DoubleSide,
        });
        const rMesh = new THREE.Mesh(rGeo, rMat);
        rMesh.rotation.x = Math.PI / 2;
        daisGroup.add(rMesh);
      }
    }

    // Interaction state
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0.05;

    const dom = renderer.domElement;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive || !isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      targetRotY += deltaX * 0.008;
      targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX + deltaY * 0.005));
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    dom.addEventListener('mousedown', onPointerDown);
    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const currentW = container.clientWidth || 320;
      const currentH = container.clientHeight || 320;
      camera.aspect = currentW / currentH;
      camera.updateProjectionMatrix();
      renderer.setSize(currentW, currentH);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let clock = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      clock += 0.02;

      if (autoRotate && !isDragging) {
        targetRotY += 0.007;
      }

      // Wobble decay
      if (wobbleIntensityRef.current > 0.001) {
        wobbleIntensityRef.current *= 0.92;
      } else {
        wobbleIntensityRef.current = 0;
      }

      const wobbleOffset = Math.sin(clock * 18) * wobbleIntensityRef.current;

      eggGroup.rotation.y += (targetRotY - eggGroup.rotation.y) * 0.08 + wobbleOffset * 0.2;
      eggGroup.rotation.x += (targetRotX - eggGroup.rotation.x) * 0.08;
      eggGroup.rotation.z = wobbleOffset * 0.3;

      // Floating particles orbit
      const pAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let px = pAttr.getX(i);
        let py = pAttr.getY(i);
        let pz = pAttr.getZ(i);

        const speed = particleSpeeds[i];
        const cos = Math.cos(speed.orbitSpeed);
        const sin = Math.sin(speed.orbitSpeed);
        const nx = px * cos - pz * sin;
        const nz = px * sin + pz * cos;

        py += speed.yFloat;
        if (py > 2.8) py = -2.2;

        pAttr.setXYZ(i, nx, py, nz);
      }
      pAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
      dom.removeEventListener('mousedown', onPointerDown);
      dom.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else if (obj.material) {
            obj.material.dispose();
          }
        }
      });
      if (eggTexture) eggTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [eggTier, autoRotate, interactive, showDais]);

  if (!webGlSupported) {
    // Stylized Fallback preview when WebGL is unavailable (e.g. Node/SSR/jsdom)
    return (
      <div
        data-testid="three-egg-fallback"
        onClick={handleTap}
        style={{ width, height }}
        className={cn(
          'relative flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-amber-950/40 via-stone-900 to-amber-950/60 p-6 border border-amber-500/20 shadow-inner select-none cursor-pointer',
          className
        )}
      >
        <div className="relative w-36 h-48 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-amber-500 via-orange-600 to-amber-900 shadow-2xl flex items-center justify-center border-2 border-amber-300/60">
          <div className="absolute inset-2 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] border-2 border-dashed border-amber-200/40 animate-pulse" />
          <span className="text-3xl filter drop-shadow">🥚</span>
          {crackProgress > 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-amber-200 bg-black/60 px-2 py-0.5 rounded-full">
                {Math.round(crackProgress * 100)}%
              </span>
            </div>
          )}
        </div>
        <p className="mt-3 text-xs font-semibold text-amber-300/80 uppercase tracking-wider">
          {eggTier} Egg 3D Preview
        </p>
      </div>
    );
  }

  return (
    <div
      data-testid="three-egg-viewer"
      style={{ width, height }}
      onClick={handleTap}
      className={cn(
        'relative overflow-hidden flex items-center justify-center select-none cursor-grab active:cursor-grabbing',
        className
      )}
    >
      <div ref={containerRef} className="w-full h-full" />
      {isHatched && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="text-5xl animate-bounce">✨🐣✨</div>
          <p className="mt-2 text-sm font-extrabold text-amber-300">Egg Hatched!</p>
        </div>
      )}
    </div>
  );
};

