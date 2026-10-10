import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as h}from"./index-Bc2G9s8g.js";import{c as w}from"./cn-DOIGBiOF.js";const S={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"},z={primary:"text-primary-600 dark:text-primary-400",secondary:"text-secondary-600 dark:text-secondary-400",neutral:"text-neutral-500 dark:text-neutral-400",white:"text-white"},a=h.forwardRef(({size:x="md",variant:v="primary",className:y,...g},f)=>e.jsxs("svg",{ref:f,role:"status","aria-label":"Loading",className:w("animate-spin inline-block",S[x],z[v],y),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",...g,children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}));a.displayName="Spinner";a.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'neutral' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const V={title:"Atoms/Spinner",component:a,argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},variant:{control:"select",options:["primary","secondary","neutral","white"]}}},r={args:{size:"md",variant:"primary"}},s={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm"}),e.jsx(a,{size:"md"}),e.jsx(a,{size:"lg"}),e.jsx(a,{size:"xl"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4 bg-slate-800 p-4 rounded-card",children:[e.jsx(a,{variant:"primary"}),e.jsx(a,{variant:"secondary"}),e.jsx(a,{variant:"neutral"}),e.jsx(a,{variant:"white"})]})};var t,i,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary'
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var o,m,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-card">
      <Spinner variant="primary" />
      <Spinner variant="secondary" />
      <Spinner variant="neutral" />
      <Spinner variant="white" />
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const b=["Default","Sizes","Variants"];export{r as Default,s as Sizes,n as Variants,b as __namedExportsOrder,V as default};
