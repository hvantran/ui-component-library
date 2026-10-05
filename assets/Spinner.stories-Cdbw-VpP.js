import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as r}from"./Spinner-C2aUPMhl.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const z={title:"Atoms/Spinner",component:r,argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},variant:{control:"select",options:["primary","secondary","neutral","white"]}}},s={args:{size:"md",variant:"primary"}},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4 bg-slate-800 p-4 rounded-card",children:[e.jsx(r,{variant:"primary"}),e.jsx(r,{variant:"secondary"}),e.jsx(r,{variant:"neutral"}),e.jsx(r,{variant:"white"})]})};var i,t,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary'
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,x;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-card">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="neutral" />
      <Spinner variant="white" />
    </div>
}`,...(x=(l=n.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const j=["Default","Sizes","Variants"];export{s as Default,a as Sizes,n as Variants,j as __namedExportsOrder,z as default};
