import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{C as r}from"./Chip-fSVeVCeF.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const z={title:"Atoms/Chip",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined"]},color:{control:"select",options:["default","primary","secondary","warning","error","success"]},size:{control:"select",options:["sm","md"]},disabled:{control:"boolean"}}},a={args:{label:"Default Chip",variant:"filled",color:"default",size:"sm"}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{label:"Default",color:"default"}),e.jsx(r,{label:"Primary",color:"primary"}),e.jsx(r,{label:"Secondary",color:"secondary"}),e.jsx(r,{label:"Success",color:"success"}),e.jsx(r,{label:"Warning",color:"warning"}),e.jsx(r,{label:"Error",color:"error"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(r,{label:"Default",variant:"outlined",color:"default"}),e.jsx(r,{label:"Primary",variant:"outlined",color:"primary"}),e.jsx(r,{label:"Secondary",variant:"outlined",color:"secondary"}),e.jsx(r,{label:"Success",variant:"outlined",color:"success"}),e.jsx(r,{label:"Warning",variant:"outlined",color:"warning"}),e.jsx(r,{label:"Error",variant:"outlined",color:"error"})]})},s={args:{label:"Removable Tag",color:"primary",onDelete:()=>alert("Deleted")}},n={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{label:"Small (sm)",size:"sm",color:"primary"}),e.jsx(r,{label:"Medium (md)",size:"md",color:"primary"})]})};var i,c,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip',
    variant: 'filled',
    color: 'default',
    size: 'sm'
  }
}`,...(t=(c=a.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var d,m,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Error" color="error" />
    </div>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Chip label="Default" variant="outlined" color="default" />
      <Chip label="Primary" variant="outlined" color="primary" />
      <Chip label="Secondary" variant="outlined" color="secondary" />
      <Chip label="Success" variant="outlined" color="success" />
      <Chip label="Warning" variant="outlined" color="warning" />
      <Chip label="Error" variant="outlined" color="error" />
    </div>
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,g,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Removable Tag',
    color: 'primary',
    onDelete: () => alert('Deleted')
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,C,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Chip label="Small (sm)" size="sm" color="primary" />
      <Chip label="Medium (md)" size="md" color="primary" />
    </div>
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const E=["Default","Colors","OutlinedColors","Removable","Sizes"];export{l as Colors,a as Default,o as OutlinedColors,s as Removable,n as Sizes,E as __namedExportsOrder,z as default};
