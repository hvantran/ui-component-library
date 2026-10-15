import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{r as V}from"./index-Bc2G9s8g.js";import{E as v,s as w,t as G,r as T,u as N,j as E,v as _,c as R,w as B,x as K,V as Y}from"./petsData-BaSWX81N.js";import"./cn-DOIGBiOF.js";import"./sparkles-DyW_OlUX.js";import"./createLucideIcon-B_AfoRjS.js";import"./x-DiakLl4d.js";const l=({skill:t,posterUrl:e,locked:r=!1})=>{const[y,F]=V.useState(!1);return s.jsx("div",{className:"max-w-sm p-6",children:s.jsx(v,{skill:t,posterUrl:e,locked:r,open:y,onOpenChange:F})})},W={title:"Organisms/ExamIntegrityPetSkill",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"]},o={render:()=>s.jsx(l,{skill:Y,posterUrl:K})},n={render:()=>{var r;const e=(r=R(1,!1).skills)==null?void 0:r[0];return e?s.jsx(l,{skill:e,posterUrl:B}):null}},i={render:()=>{var r;const e=(r=E(5,!0).skills)==null?void 0:r[4];return e?s.jsx(l,{skill:e,posterUrl:_}):null}},a={render:()=>{var r;const e=(r=T(8,!1).skills)==null?void 0:r[7];return e?s.jsx(l,{skill:e,posterUrl:N}):null}},c={render:()=>{var r;const e=(r=w(8,!1).skills)==null?void 0:r[7];return e?s.jsx(l,{skill:e,posterUrl:G}):null}},p={render:()=>{var r;const e=(r=E(1,!0).skills)==null?void 0:r[4];return e?s.jsx(l,{skill:e,posterUrl:_,locked:!0}):null}};var u,d,k;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ControlledPetSkill skill={VOID_SINGULARITY_SKILL} posterUrl={voidDragonPoster} />
}`,...(k=(d=o.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var m,P,S;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const pet = createSproutlingPet(1, false);
    const skill = pet.skills?.[0];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={sproutlingPoster} />;
  }
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var g,f,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const pet = createFirePhoenixPet(5, true);
    const skill = pet.skills?.[4];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={firePhoenixPoster} />;
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,C,U;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const pet = createChronoDracoPet(8, false);
    const skill = pet.skills?.[7];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={chronoDracoPoster} />;
  }
}`,...(U=(C=a.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var j,A,D;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const pet = createAegisPaladinPet(8, false);
    const skill = pet.skills?.[7];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={aegisPaladinPoster} />;
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var I,L,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const pet = createFirePhoenixPet(1, true);
    const skill = pet.skills?.[4];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={firePhoenixPoster} locked={true} />;
  }
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const X=["VoidSingularity","SproutlingSeedlingSprout","FirePhoenixPrimordialSolarCorona","ChronoDracoLordOfAllTimelines","AegisPaladinGalacticAegisBastion","LockedSkillPreview"];export{c as AegisPaladinGalacticAegisBastion,a as ChronoDracoLordOfAllTimelines,i as FirePhoenixPrimordialSolarCorona,p as LockedSkillPreview,n as SproutlingSeedlingSprout,o as VoidSingularity,X as __namedExportsOrder,W as default};
