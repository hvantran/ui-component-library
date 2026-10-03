import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as r}from"./Skeleton-BFTnpoLa.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const k={title:"Atoms/Skeleton",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},animation:{control:"select",options:["pulse","wave","none"]}}},a={args:{variant:"text",width:250}},t={args:{variant:"circular",width:48,height:48}},s={args:{variant:"rectangular",width:300,height:150}},n={render:()=>e.jsxs("div",{className:"w-72 space-y-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(r,{variant:"circular",width:40,height:40}),e.jsxs("div",{className:"space-y-1.5 flex-1",children:[e.jsx(r,{variant:"text",width:"60%"}),e.jsx(r,{variant:"text",width:"40%"})]})]}),e.jsx(r,{variant:"rounded",width:"100%",height:120}),e.jsx(r,{variant:"text",width:"80%"})]})};var i,o,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 250
  }
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,l,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 300,
    height: 150
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,x,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const f=["Text","Circular","Rectangular","CardPlaceholder"];export{n as CardPlaceholder,t as Circular,s as Rectangular,a as Text,f as __namedExportsOrder,k as default};
