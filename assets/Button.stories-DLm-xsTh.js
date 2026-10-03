import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{B as d}from"./Button-D_NtnFls.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const k={title:"Atoms/Button",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","ghost","outlined"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{variant:"primary",children:"Primary Action"}},a={args:{variant:"secondary",children:"Secondary Action"}},n={args:{variant:"danger",children:"Delete Action"}},s={args:{variant:"outlined",children:"Outlined Action"}},t={args:{variant:"ghost",children:"Ghost Action"}},o={args:{variant:"primary",loading:!0,children:"Submitting..."}},i={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},c={render:()=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(d,{size:"sm",children:"Small"}),r.jsx(d,{size:"md",children:"Medium"}),r.jsx(d,{size:"lg",children:"Large"})]})};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Action'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Action'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,v,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete Action'
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,A,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Action'
  }
}`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var x,z,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Action'
  }
}`,...(D=(z=t.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var f,j,O;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Submitting...'
  }
}`,...(O=(j=o.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var G,L,P;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var E,M,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const q=["Primary","Secondary","Danger","Outlined","Ghost","Loading","Disabled","Sizes"];export{n as Danger,i as Disabled,t as Ghost,o as Loading,s as Outlined,e as Primary,a as Secondary,c as Sizes,q as __namedExportsOrder,k as default};
