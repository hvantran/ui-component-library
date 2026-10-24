import{E as pe}from"./ExamIntegrityPetHatchery-FnUKzElR.js";import{D as a,A as ge,a as me,b as le,c as oe,d as ue,e as de,f as Se,g as ce,h as Ee,i as Pe,j as Te,k as P,l as Ae,m as fe,n as ve,o as ie,p as he,q as Le,r as E,s as be,t as _e}from"./mockPets-bEkV5xrs.js";import"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";import"./Button-CHA6iI3F.js";import"./cn-DOIGBiOF.js";import"./ProgressBar-COXiRCBm.js";import"./ThreeEggViewer-Bemp2L8i.js";import"./sparkles-DyW_OlUX.js";import"./createLucideIcon-B_AfoRjS.js";import"./check-My_ONosZ.js";import"./refresh-cw-CGqbG-AS.js";import"./chevron-right-DDBX69dD.js";import"./lock-CoqgIRC9.js";import"./clock-CNNG55KQ.js";import"./zap-Aj5EZB9c.js";import"./sun-CdeBiqXE.js";import"./eye-BBDNTHZV.js";import"./x-DiakLl4d.js";import"./info-BsSq_3Pd.js";const ze={title:"Organisms/ExamIntegrityPetHatchery",component:pe,parameters:{layout:"fullscreen"},tags:["autodocs"]},t=[...[1,2,3].map(e=>oe(e,e===1)),...[1,2,3].map(e=>ue(e,!1)),...[1,2,3].map(e=>de(e,!1)),...[1,2,3].map(e=>Se(e,!1)),...[1,2,3,4].map(e=>ce(e,!1)),...[1,2,3,4].map(e=>Ee(e,!1)),...[1,2,3,4].map(e=>Pe(e,!1)),...[1,2,3,4].map(e=>Te(e,!1)),...[1,2,3,4,5].map(e=>P(e,!1)),...[1,2,3,4,5].map(e=>Ae(e,!1)),...[1,2,3,4,5].map(e=>fe(e,!1)),...[1,2,3,4,5].map(e=>ve(e,!1)),...[1,2,3,4,5,6].map(e=>ie(e,!1)),...[1,2,3,4,5,6].map(e=>he(e,!1)),...[1,2,3,4,5,6].map(e=>Le(e,!1)),...[1,2,3,4,5,6,7,8].map(e=>E(e,!1)),...[1,2,3,4,5,6,7,8].map(e=>be(e,!1)),...[1,2,3,4,5,6,7,8].map(e=>_e(e,!1))],r={name:"All Pets - All Stages (Sanctuary)",args:{starBalance:9999,defaultTab:"pets",incubatingEggs:a,pets:t}},s={name:"All Pets - All Stages (Evolution Tree)",args:{starBalance:9999,defaultTab:"pets",incubatingEggs:a,pets:t}},n=s,l={args:{starBalance:450,incubatingEggs:a,pets:me}},o={args:{starBalance:800,incubatingEggs:[{id:"egg-celestial",name:"Astral Constellation Egg",tier:"celestial",crackProgress:.8,hatchedPetName:"Nova",hatchedSpecies:"Nova Lynx",isEquipped:!1,equipCostInStars:25}],pets:[{id:"pet-apex",name:"Solarius Prime",species:"Solar Dragon",tier:"dragon",element:"Solar Light",level:8,maxLevel:10,currentExp:420,expNeeded:600,growthCostInStars:100,stats:{vitality:98,wisdom:95,integrityBond:99,solarRadiance:90},avatarEmoji:"🐲",stageLevel:3,stageName:"Mythic Guardian",isEquipped:!0}]}},c={args:{starBalance:3e3,defaultTab:"pets",incubatingEggs:a,pets:[E(8,!0)]}},i={args:{starBalance:3e3,defaultTab:"pets",incubatingEggs:a,pets:[E(1,!0)]}},p={args:{starBalance:2500,defaultTab:"pets",incubatingEggs:a,pets:ge}},g={args:{starBalance:5e3,defaultTab:"pets",incubatingEggs:a,pets:le}},m={args:{starBalance:3500,defaultTab:"pets",incubatingEggs:a,pets:[{...P(10,!0),level:10,maxLevel:10,currentExp:500,expNeeded:500}]}},u={args:{starBalance:500,defaultTab:"pets",incubatingEggs:a,pets:[{id:"pet-shadowpanther-server",name:"Umbra (Umbral Eclipse Panther)",species:"Umbral Eclipse Panther",rarity:"Epic",tier:"dragon",element:"Shadow / Cosmic",level:6,maxLevel:10,currentExp:385,expNeeded:448,growthCostInStars:25,stageLevel:3,stageName:"Eclipsefang",avatarEmoji:"🐆",stats:{vitality:85,wisdom:85,integrityBond:90,solarRadiance:80}}]}},d={args:{starBalance:1500,defaultTab:"pets",incubatingEggs:a,pets:le}},S={args:{starBalance:2500,defaultTab:"pets",incubatingEggs:a,pets:[oe(1,!1),ce(1,!1),P(1,!0),ie(1,!1),E(1,!1)]}};var T,A,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`[
// Common (3 stages each)
...[1, 2, 3].map(lvl => createSproutlingPet(lvl, lvl === 1)), ...[1, 2, 3].map(lvl => createPipflickPet(lvl, false)), ...[1, 2, 3].map(lvl => createEmbersqueakPet(lvl, false)), ...[1, 2, 3].map(lvl => createZephyrpuffPet(lvl, false)),
// Rare (4 stages each)
...[1, 2, 3, 4].map(lvl => createFrostpawPet(lvl, false)), ...[1, 2, 3, 4].map(lvl => createMagmafangPet(lvl, false)), ...[1, 2, 3, 4].map(lvl => createVoltwingPet(lvl, false)), ...[1, 2, 3, 4].map(lvl => createThundercatPet(lvl, false)),
// Epic (5 stages each)
...[1, 2, 3, 4, 5].map(lvl => createFirePhoenixPet(lvl, false)), ...[1, 2, 3, 4, 5].map(lvl => createChronoChimeraPet(lvl, false)), ...[1, 2, 3, 4, 5].map(lvl => createShadowpantherPet(lvl, false)), ...[1, 2, 3, 4, 5].map(lvl => createStormstagPet(lvl, false)),
// Legendary (6 stages each)
...[1, 2, 3, 4, 5, 6].map(lvl => createAstralDragonPet(lvl, false)), ...[1, 2, 3, 4, 5, 6].map(lvl => createAstralLeviathanPet(lvl, false)), ...[1, 2, 3, 4, 5, 6].map(lvl => createSolarWyvernPet(lvl, false)),
// Mythic (8 stages each)
...[1, 2, 3, 4, 5, 6, 7, 8].map(lvl => createVoidDragonPet(lvl, false)), ...[1, 2, 3, 4, 5, 6, 7, 8].map(lvl => createChronoDracoPet(lvl, false)), ...[1, 2, 3, 4, 5, 6, 7, 8].map(lvl => createAegisPaladinPet(lvl, false))]`,...(f=(A=t.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var v,h,L;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'All Pets - All Stages (Sanctuary)',
  args: {
    starBalance: 9999,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_PETS_ALL_STAGES
  }
}`,...(L=(h=r.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var b,_,G;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'All Pets - All Stages (Evolution Tree)',
  args: {
    starBalance: 9999,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_PETS_ALL_STAGES
  }
}`,...(G=(_=s.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var N,B,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:"AllPetsAllStagesEvolutionTree",...(y=(B=n.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var D,U,x;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    starBalance: 450,
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS
  }
}`,...(x=(U=l.parameters)==null?void 0:U.docs)==null?void 0:x.source}}};var C,I,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(I=o.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var R,w,V;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createVoidDragonPet(8, true)]
  }
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var k,q,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createVoidDragonPet(1, true)]
  }
}`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var O,H,j;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    starBalance: 2500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_SHOP_STARTER_PETS
  }
}`,...(j=(H=p.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var W,z,Z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    starBalance: 5000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_ROSTER_STARTER_PETS
  }
}`,...(Z=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Z.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,$;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...($=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,te;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    starBalance: 1500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_ROSTER_STARTER_PETS
  }
}`,...(te=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,re,ne;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    starBalance: 2500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createSproutlingPet(1, false), createFrostpawPet(1, false), createFirePhoenixPet(1, true), createAstralDragonPet(1, false), createVoidDragonPet(1, false)]
  }
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ze=["ALL_PETS_ALL_STAGES","AllPetsAllStagesSanctuary","AllPetsAllStagesEvolutionTree","AllPetsAllStagesCodex","Default","HighStagePets","VoidDragonAbilities","VoidDragonLockedAbilities","AllShopPetsSanctuary","Full18PetRosterSanctuary","MaxLevelCompanionPet","UmbraServerDTOWithoutStages","StandardizedElementsSanctuary","MultiElementAndSpeciesTypeSanctuary"];export{t as ALL_PETS_ALL_STAGES,n as AllPetsAllStagesCodex,s as AllPetsAllStagesEvolutionTree,r as AllPetsAllStagesSanctuary,p as AllShopPetsSanctuary,l as Default,g as Full18PetRosterSanctuary,o as HighStagePets,m as MaxLevelCompanionPet,S as MultiElementAndSpeciesTypeSanctuary,d as StandardizedElementsSanctuary,u as UmbraServerDTOWithoutStages,c as VoidDragonAbilities,i as VoidDragonLockedAbilities,Ze as __namedExportsOrder,ze as default};
