import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{B as l}from"./Button-DUc58pJe.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const K={title:"Atoms/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","danger","ghost","outlined"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{variant:"primary",children:"Primary Action"}},a={args:{variant:"secondary",children:"Secondary Action"}},n={args:{variant:"danger",children:"Delete Action"}},s={args:{variant:"outlined",children:"Outlined Action"}},t={args:{variant:"ghost",children:"Ghost Action"}},o={args:{variant:"primary",loading:!0,children:"Submitting..."}},i={args:{variant:"primary",disabled:!0,children:"Disabled Button"}},c={args:{variant:"primary",icon:r.jsx("span",{children:"+"}),children:"New Endpoint"}},d={args:{variant:"secondary",icon:r.jsx("span",{children:"→"}),iconPlacement:"right",children:"Next Step"}},m={render:()=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(l,{size:"sm",children:"Small"}),r.jsx(l,{size:"md",children:"Medium"}),r.jsx(l,{size:"lg",children:"Large"})]})};var p,u,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Action'
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Action'
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,x,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete Action'
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var A,B,z;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: 'Outlined Action'
  }
}`,...(z=(B=s.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var j,D,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Action'
  }
}`,...(f=(D=t.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var N,P,O;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Submitting...'
  }
}`,...(O=(P=o.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var W,E,G;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(G=(E=i.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var I,L,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: <span>+</span>,
    children: 'New Endpoint'
  }
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var w,M,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: <span>→</span>,
    iconPlacement: 'right',
    children: 'Next Step'
  }
}`,...(_=(M=d.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var T,k,q;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const Q=["Primary","Secondary","Danger","Outlined","Ghost","Loading","Disabled","WithIcon","WithIconRight","Sizes"];export{n as Danger,i as Disabled,t as Ghost,o as Loading,s as Outlined,e as Primary,a as Secondary,m as Sizes,c as WithIcon,d as WithIconRight,Q as __namedExportsOrder,K as default};
