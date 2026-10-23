import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as _}from"./index-Bc2G9s8g.js";import{E as w,t as y,s as F,k as R,c as G,V}from"./mockPets-D9-uc_iu.js";import"./cn-DOIGBiOF.js";import"./sparkles-DyW_OlUX.js";import"./createLucideIcon-B_AfoRjS.js";import"./x-DiakLl4d.js";const B=""+new URL("void-dragon-stage-8-B1s1TMZ5.png",import.meta.url).href,M=""+new URL("sproutling-stage-1-CpWiIOkG.png",import.meta.url).href,E=""+new URL("phoenix-stage-5-7xLBTJh7.png",import.meta.url).href,N=""+new URL("chronodraco-stage-8-DoO2zMMW.png",import.meta.url).href,z=""+new URL("aegispaladin-stage-8-CzSHeE5H.png",import.meta.url).href,o=({skill:s,posterUrl:e,locked:r=!1})=>{const[v,T]=_.useState(!1);return t.jsx("div",{className:"max-w-sm p-6",children:t.jsx(w,{skill:s,posterUrl:e,locked:r,open:v,onOpenChange:T})})},q={title:"Organisms/ExamIntegrityPetSkill",component:w,parameters:{layout:"fullscreen"},tags:["autodocs"]},l={render:()=>t.jsx(o,{skill:V,posterUrl:B})},n={render:()=>{var r;const e=(r=G(1,!1).skills)==null?void 0:r[0];return e?t.jsx(o,{skill:e,posterUrl:M}):null}},i={render:()=>{var r;const e=(r=R(5,!0).skills)==null?void 0:r[4];return e?t.jsx(o,{skill:e,posterUrl:E}):null}},a={render:()=>{var r;const e=(r=F(8,!1).skills)==null?void 0:r[7];return e?t.jsx(o,{skill:e,posterUrl:N}):null}},c={render:()=>{var r;const e=(r=y(8,!1).skills)==null?void 0:r[7];return e?t.jsx(o,{skill:e,posterUrl:z}):null}},p={render:()=>{var r;const e=(r=R(1,!0).skills)==null?void 0:r[4];return e?t.jsx(o,{skill:e,posterUrl:E,locked:!0}):null}};var u,d,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ControlledPetSkill skill={VOID_SINGULARITY_SKILL} posterUrl={voidDragonPoster} />
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var k,P,g;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const pet = createSproutlingPet(1, false);
    const skill = pet.skills?.[0];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={sproutlingPoster} />;
  }
}`,...(g=(P=n.parameters)==null?void 0:P.docs)==null?void 0:g.source}}};var S,f,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const pet = createFirePhoenixPet(5, true);
    const skill = pet.skills?.[4];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={firePhoenixPoster} />;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,U,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const pet = createChronoDracoPet(8, false);
    const skill = pet.skills?.[7];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={chronoDracoPoster} />;
  }
}`,...(C=(U=a.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var L,D,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const pet = createAegisPaladinPet(8, false);
    const skill = pet.skills?.[7];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={aegisPaladinPoster} />;
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var j,A,O;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const pet = createFirePhoenixPet(1, true);
    const skill = pet.skills?.[4];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={firePhoenixPoster} locked={true} />;
  }
}`,...(O=(A=p.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const Q=["VoidSingularity","SproutlingSeedlingSprout","FirePhoenixPrimordialSolarCorona","ChronoDracoLordOfAllTimelines","AegisPaladinGalacticAegisBastion","LockedSkillPreview"];export{c as AegisPaladinGalacticAegisBastion,a as ChronoDracoLordOfAllTimelines,i as FirePhoenixPrimordialSolarCorona,p as LockedSkillPreview,n as SproutlingSeedlingSprout,l as VoidSingularity,Q as __namedExportsOrder,q as default};
