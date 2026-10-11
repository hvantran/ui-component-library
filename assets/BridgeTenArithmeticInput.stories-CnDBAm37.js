import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as y}from"./index-Bc2G9s8g.js";import{B as I}from"./BridgeTenArithmeticInput-Dg3QYGiq.js";import{a as D}from"./mathFormulaAnalyzer-D_WA29dh.js";const F={title:"Molecules/MathInput/BridgeTenArithmeticInput",component:I,parameters:{layout:"centered"},tags:["autodocs"]},r=({formulaText:A,disabled:M,className:k="w-[500px] max-w-full"})=>{const[C,E]=y.useState(""),R=D(A);return e.jsx("div",{className:k,children:e.jsx(I,{formula:R,value:C,disabled:M,onChange:E})})},a={render:()=>e.jsx(r,{formulaText:"9 + 8 = ?"})},t={render:()=>e.jsx(r,{formulaText:"15 - 6 = ?"})},s={render:()=>e.jsx(r,{formulaText:"8 + 5 = ?"})},n={render:()=>e.jsx(r,{formulaText:"13 - 7 = ?"})},o={render:()=>e.jsx(r,{formulaText:"9 + 8 = ?",disabled:!0})},c={render:()=>e.jsxs("div",{className:"w-full max-w-[760px] p-4 bg-slate-100 rounded-3xl",children:[e.jsx("h3",{className:"text-base font-bold text-slate-800 mb-4",children:"Số? (Hai cột mô phỏng màn hình thi)"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(r,{formulaText:"12 - 9 = ?",className:"w-full"}),e.jsx(r,{formulaText:"7 + 5 = ?",className:"w-full"}),e.jsx(r,{formulaText:"12 - 9 = ?",className:"w-full"}),e.jsx(r,{formulaText:"15 - 7 = ?",className:"w-full"})]})]})};var l,d,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <InteractiveBridgeTen formulaText="9 + 8 = ?" />
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <InteractiveBridgeTen formulaText="15 - 6 = ?" />
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var p,T,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <InteractiveBridgeTen formulaText="8 + 5 = ?" />
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var g,h,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <InteractiveBridgeTen formulaText="13 - 7 = ?" />
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,b,j;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <InteractiveBridgeTen formulaText="9 + 8 = ?" disabled={true} />
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,S,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-full max-w-[760px] p-4 bg-slate-100 rounded-3xl">
        <h3 className="text-base font-bold text-slate-800 mb-4">
          Số? (Hai cột mô phỏng màn hình thi)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InteractiveBridgeTen formulaText="12 - 9 = ?" className="w-full" />
          <InteractiveBridgeTen formulaText="7 + 5 = ?" className="w-full" />
          <InteractiveBridgeTen formulaText="12 - 9 = ?" className="w-full" />
          <InteractiveBridgeTen formulaText="15 - 7 = ?" className="w-full" />
        </div>
      </div>;
  }
}`,...(N=(S=c.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const O=["AdditionMakeTen","SubtractionBridgeTen","AnotherAdditionMakeTen","AnotherSubtractionBridgeTen","DisabledState","ResponsiveTwoColumnGrid"];export{a as AdditionMakeTen,s as AnotherAdditionMakeTen,n as AnotherSubtractionBridgeTen,o as DisabledState,c as ResponsiveTwoColumnGrid,t as SubtractionBridgeTen,O as __namedExportsOrder,F as default};
