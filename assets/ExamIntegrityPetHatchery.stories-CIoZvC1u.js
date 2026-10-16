import{D as a,a as le,E as ce}from"./ExamIntegrityPetHatchery-BxCyTs7i.js";import{A as oe,a as te,c as se,b as ie,d as pe,e as ge,f as re,g as me,h as de,i as ue,j as E,k as Se,l as Ee,m as Pe,n as ne,o as Te,p as Ae,q as S,r as fe,s as ve}from"./petsData-C_Fx2Vks.js";import"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";import"./Button-CHA6iI3F.js";import"./cn-DOIGBiOF.js";import"./ProgressBar-COXiRCBm.js";import"./ThreeEggViewer-Bemp2L8i.js";import"./sparkles-DyW_OlUX.js";import"./createLucideIcon-B_AfoRjS.js";import"./check-My_ONosZ.js";import"./lock-CoqgIRC9.js";import"./refresh-cw-CGqbG-AS.js";import"./clock-CNNG55KQ.js";import"./chevron-right-DDBX69dD.js";import"./eye-BBDNTHZV.js";import"./sun-CdeBiqXE.js";import"./zap-Aj5EZB9c.js";import"./info-BsSq_3Pd.js";import"./x-DiakLl4d.js";const Oe={title:"Organisms/ExamIntegrityPetHatchery",component:ce,parameters:{layout:"fullscreen"},tags:["autodocs"]},t=[...[1,2,3].map(e=>se(e,e===1)),...[1,2,3].map(e=>ie(e,!1)),...[1,2,3].map(e=>pe(e,!1)),...[1,2,3].map(e=>ge(e,!1)),...[1,2,3,4].map(e=>re(e,!1)),...[1,2,3,4].map(e=>me(e,!1)),...[1,2,3,4].map(e=>de(e,!1)),...[1,2,3,4].map(e=>ue(e,!1)),...[1,2,3,4,5].map(e=>E(e,!1)),...[1,2,3,4,5].map(e=>Se(e,!1)),...[1,2,3,4,5].map(e=>Ee(e,!1)),...[1,2,3,4,5].map(e=>Pe(e,!1)),...[1,2,3,4,5,6].map(e=>ne(e,!1)),...[1,2,3,4,5,6].map(e=>Te(e,!1)),...[1,2,3,4,5,6].map(e=>Ae(e,!1)),...[1,2,3,4,5,6,7,8].map(e=>S(e,!1)),...[1,2,3,4,5,6,7,8].map(e=>fe(e,!1)),...[1,2,3,4,5,6,7,8].map(e=>ve(e,!1))],s={name:"All Pets - All Stages (Sanctuary)",args:{starBalance:9999,defaultTab:"pets",incubatingEggs:a,pets:t}},r={name:"All Pets - All Stages (Codex)",args:{starBalance:9999,defaultTab:"codex",incubatingEggs:a,pets:t}},n={args:{starBalance:450,incubatingEggs:a,pets:le}},l={args:{starBalance:800,incubatingEggs:[{id:"egg-celestial",name:"Astral Constellation Egg",tier:"celestial",crackProgress:.8,hatchedPetName:"Nova",hatchedSpecies:"Nova Lynx",isEquipped:!1,equipCostInStars:25}],pets:[{id:"pet-apex",name:"Solarius Prime",species:"Solar Dragon",tier:"dragon",element:"Solar Light",level:8,maxLevel:10,currentExp:420,expNeeded:600,growthCostInStars:100,stats:{vitality:98,wisdom:95,integrityBond:99,solarRadiance:90},avatarEmoji:"🐲",stageLevel:3,stageName:"Mythic Guardian",isEquipped:!0}]}},c={args:{starBalance:3e3,defaultTab:"pets",incubatingEggs:a,pets:[S(8,!0)]}},o={args:{starBalance:3e3,defaultTab:"pets",incubatingEggs:a,pets:[S(1,!0)]}},i={args:{starBalance:2500,defaultTab:"pets",incubatingEggs:a,pets:oe}},p={args:{starBalance:5e3,defaultTab:"pets",incubatingEggs:a,pets:te}},g={args:{starBalance:3500,defaultTab:"pets",incubatingEggs:a,pets:[{...E(10,!0),level:10,maxLevel:10,currentExp:500,expNeeded:500}]}},m={args:{starBalance:500,defaultTab:"pets",incubatingEggs:a,pets:[{id:"pet-shadowpanther-server",name:"Umbra (Umbral Eclipse Panther)",species:"Umbral Eclipse Panther",rarity:"Epic",tier:"dragon",element:"Shadow / Cosmic",level:6,maxLevel:10,currentExp:385,expNeeded:448,growthCostInStars:25,stageLevel:3,stageName:"Eclipsefang",avatarEmoji:"🐆",stats:{vitality:85,wisdom:85,integrityBond:90,solarRadiance:80}}]}},d={args:{starBalance:1500,defaultTab:"pets",incubatingEggs:a,pets:te}},u={args:{starBalance:2500,defaultTab:"pets",incubatingEggs:a,pets:[se(1,!1),re(1,!1),E(1,!0),ne(1,!1),S(1,!1)]}};var P,T,A;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`[
// Common (3 stages each)
...[1, 2, 3].map(lvl => createSproutlingPet(lvl, lvl === 1)), ...[1, 2, 3].map(lvl => createPipflickPet(lvl, false)), ...[1, 2, 3].map(lvl => createEmbersqueakPet(lvl, false)), ...[1, 2, 3].map(lvl => createZephyrpuffPet(lvl, false)),
// Rare (4 stages each)
...[1, 2, 3, 4].map(lvl => createFrostpawPet(lvl, false)), ...[1, 2, 3, 4].map(lvl => createMagmafangPet(lvl, false)), ...[1, 2, 3, 4].map(lvl => createVoltwingPet(lvl, false)), ...[1, 2, 3, 4].map(lvl => createThundercatPet(lvl, false)),
// Epic (5 stages each)
...[1, 2, 3, 4, 5].map(lvl => createFirePhoenixPet(lvl, false)), ...[1, 2, 3, 4, 5].map(lvl => createChronoChimeraPet(lvl, false)), ...[1, 2, 3, 4, 5].map(lvl => createShadowpantherPet(lvl, false)), ...[1, 2, 3, 4, 5].map(lvl => createStormstagPet(lvl, false)),
// Legendary (6 stages each)
...[1, 2, 3, 4, 5, 6].map(lvl => createAstralDragonPet(lvl, false)), ...[1, 2, 3, 4, 5, 6].map(lvl => createAstralLeviathanPet(lvl, false)), ...[1, 2, 3, 4, 5, 6].map(lvl => createSolarWyvernPet(lvl, false)),
// Mythic (8 stages each)
...[1, 2, 3, 4, 5, 6, 7, 8].map(lvl => createVoidDragonPet(lvl, false)), ...[1, 2, 3, 4, 5, 6, 7, 8].map(lvl => createChronoDracoPet(lvl, false)), ...[1, 2, 3, 4, 5, 6, 7, 8].map(lvl => createAegisPaladinPet(lvl, false))]`,...(A=(T=t.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var f,v,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'All Pets - All Stages (Sanctuary)',
  args: {
    starBalance: 9999,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_PETS_ALL_STAGES
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var L,b,_;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'All Pets - All Stages (Codex)',
  args: {
    starBalance: 9999,
    defaultTab: 'codex',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_PETS_ALL_STAGES
  }
}`,...(_=(b=r.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var G,N,B;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    starBalance: 450,
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS
  }
}`,...(B=(N=n.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var y,x,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    starBalance: 800,
    incubatingEggs: [{
      id: 'egg-celestial',
      name: 'Astral Constellation Egg',
      tier: 'celestial',
      crackProgress: 0.8,
      hatchedPetName: 'Nova',
      hatchedSpecies: 'Nova Lynx',
      isEquipped: false,
      equipCostInStars: 25
    }],
    pets: [{
      id: 'pet-apex',
      name: 'Solarius Prime',
      species: 'Solar Dragon',
      tier: 'dragon',
      element: 'Solar Light',
      level: 8,
      maxLevel: 10,
      currentExp: 420,
      expNeeded: 600,
      growthCostInStars: 100,
      stats: {
        vitality: 98,
        wisdom: 95,
        integrityBond: 99,
        solarRadiance: 90
      },
      avatarEmoji: '🐲',
      stageLevel: 3,
      stageName: 'Mythic Guardian',
      isEquipped: true
    }]
  }
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var U,C,I;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createVoidDragonPet(8, true)]
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var F,R,w;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createVoidDragonPet(1, true)]
  }
}`,...(w=(R=o.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var V,k,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    starBalance: 2500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_SHOP_STARTER_PETS
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var M,O,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    starBalance: 5000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_ROSTER_STARTER_PETS
  }
}`,...(H=(O=p.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var j,W,z;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    starBalance: 3500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [{
      ...createFirePhoenixPet(10, true),
      level: 10,
      maxLevel: 10,
      currentExp: 500,
      expNeeded: 500
    }]
  }
}`,...(z=(W=g.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var Z,J,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    starBalance: 500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [{
      id: 'pet-shadowpanther-server',
      name: 'Umbra (Umbral Eclipse Panther)',
      species: 'Umbral Eclipse Panther',
      rarity: 'Epic',
      tier: 'dragon',
      element: 'Shadow / Cosmic',
      level: 6,
      maxLevel: 10,
      currentExp: 385,
      expNeeded: 448,
      growthCostInStars: 25,
      stageLevel: 3,
      stageName: 'Eclipsefang',
      avatarEmoji: '🐆',
      stats: {
        vitality: 85,
        wisdom: 85,
        integrityBond: 90,
        solarRadiance: 80
      }
    }]
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    starBalance: 1500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_ROSTER_STARTER_PETS
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    starBalance: 2500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createSproutlingPet(1, false), createFrostpawPet(1, false), createFirePhoenixPet(1, true), createAstralDragonPet(1, false), createVoidDragonPet(1, false)]
  }
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const He=["ALL_PETS_ALL_STAGES","AllPetsAllStagesSanctuary","AllPetsAllStagesCodex","Default","HighStagePets","VoidDragonAbilities","VoidDragonLockedAbilities","AllShopPetsSanctuary","Full18PetRosterSanctuary","MaxLevelCompanionPet","UmbraServerDTOWithoutStages","StandardizedElementsSanctuary","MultiElementAndSpeciesTypeSanctuary"];export{t as ALL_PETS_ALL_STAGES,r as AllPetsAllStagesCodex,s as AllPetsAllStagesSanctuary,i as AllShopPetsSanctuary,n as Default,p as Full18PetRosterSanctuary,l as HighStagePets,g as MaxLevelCompanionPet,u as MultiElementAndSpeciesTypeSanctuary,d as StandardizedElementsSanctuary,m as UmbraServerDTOWithoutStages,c as VoidDragonAbilities,o as VoidDragonLockedAbilities,He as __namedExportsOrder,Oe as default};
