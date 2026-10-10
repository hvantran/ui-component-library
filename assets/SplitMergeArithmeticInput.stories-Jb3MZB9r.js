import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as w}from"./index-Bc2G9s8g.js";import{S as n}from"./SplitMergeArithmeticInput-B4pjuku-.js";import{a as M}from"./mathFormulaAnalyzer-oHcIP2l3.js";const z={title:"Molecules/MathInput/SplitMergeArithmeticInput",component:n,parameters:{layout:"centered"},tags:["autodocs"]},i=({formulaText:s,mode:j,disabled:A})=>{const[I,b]=w.useState(""),T=M(s);return e.jsx("div",{className:"w-[420px]",children:e.jsx(n,{formula:T,value:I,disabled:A,onChange:b,mode:j})})},r={render:()=>e.jsx(i,{formulaText:"3 + 2 = ?"})},t={render:()=>e.jsx(i,{formulaText:"5 - 2 = ?"})},a={render:()=>{const s=M("4 + 5 = ?");return e.jsx("div",{className:"w-[420px]",children:e.jsx(n,{formula:s,value:"9",onChange:()=>{}})})}},o={render:()=>e.jsx(i,{formulaText:"6 + 3 = ?",disabled:!0})};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <InteractiveSplitMerge formulaText="3 + 2 = ?" />
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <InteractiveSplitMerge formulaText="5 - 2 = ?" />
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,S,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const formula = analyzeFormula('4 + 5 = ?');
    return <div className="w-[420px]">
        <SplitMergeArithmeticInput formula={formula} value="9" onChange={() => {}} />
      </div>;
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var f,h,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <InteractiveSplitMerge formulaText="6 + 3 = ?" disabled={true} />
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const D=["AdditionMerge","SubtractionSplit","AdditionWithPrepopulatedAnswer","DisabledState"];export{r as AdditionMerge,a as AdditionWithPrepopulatedAnswer,o as DisabledState,t as SubtractionSplit,D as __namedExportsOrder,z as default};
