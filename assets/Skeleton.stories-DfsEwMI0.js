import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as _}from"./index-Bc2G9s8g.js";import{c as q}from"./cn-DOIGBiOF.js";const E={text:"h-4 w-full rounded",circular:"rounded-full",rectangular:"rounded-none",rounded:"rounded-md"},V={pulse:"animate-pulse",wave:"relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",none:""},a=_.forwardRef(({variant:b="text",animation:y="pulse",width:r,height:t,rounded:k,className:S,style:j,...N},T)=>{const C=b??(k?"rounded":"rectangular"),R={...r!==void 0?{width:typeof r=="number"?`${r}px`:r}:{},...t!==void 0?{height:typeof t=="number"?`${t}px`:t}:{},...j};return e.jsx("div",{ref:T,role:"status","aria-label":"Loading...",className:q("bg-gray-200 dark:bg-gray-700",E[C],V[y],S),style:R,...N,children:e.jsx("span",{className:"sr-only",children:"Loading..."})})});a.displayName="Skeleton";a.__docgenInfo={description:`Atom — Skeleton

Framework-agnostic placeholder loading state replacement for MUI Skeleton.
Emits zero dependencies, full Tailwind styling, and dark mode compliance.`,methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"Visual shape of skeleton placeholder",defaultValue:{value:"'text'",computed:!1}},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"Animation style",defaultValue:{value:"'pulse'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Explicit width, e.g. '100%', 200, '4rem'"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Explicit height, e.g. 16, '2rem'"},rounded:{required:!1,tsType:{name:"boolean"},description:"Legacy boolean for rounded corners"}}};const P={title:"Atoms/Skeleton",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},animation:{control:"select",options:["pulse","wave","none"]}}},n={args:{variant:"text",width:250}},s={args:{variant:"circular",width:48,height:48}},o={args:{variant:"rectangular",width:300,height:150}},i={render:()=>e.jsxs("div",{className:"w-72 space-y-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(a,{variant:"circular",width:40,height:40}),e.jsxs("div",{className:"space-y-1.5 flex-1",children:[e.jsx(a,{variant:"text",width:"60%"}),e.jsx(a,{variant:"text",width:"40%"})]})]}),e.jsx(a,{variant:"rounded",width:"100%",height:120}),e.jsx(a,{variant:"text",width:"80%"})]})};var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 250
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 300,
    height: 150
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,f,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-72 space-y-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center space-x-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-1.5 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={120} />
      <Skeleton variant="text" width="80%" />
    </div>
}`,...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const $=["Text","Circular","Rectangular","CardPlaceholder"];export{i as CardPlaceholder,s as Circular,o as Rectangular,n as Text,$ as __namedExportsOrder,P as default};
