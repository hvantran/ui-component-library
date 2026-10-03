import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{B as a}from"./Badge-An41I-r3.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const _={title:"Atoms/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["ACTIVE","PAUSED","FAILED","DELETED"]},variant:{control:"select",options:["primary","secondary","success","warning","danger","neutral"]},dot:{control:"boolean"}}},r={args:{status:"ACTIVE"}},t={args:{status:"PAUSED"}},e={args:{status:"FAILED"}},o={args:{status:"DELETED"}},n={args:{status:"ACTIVE",dot:!0}},c={args:{variant:"primary",count:24}},u={args:{variant:"danger",count:142,max:99}},d={render:()=>s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsx(a,{status:"ACTIVE",dot:!0}),s.jsx(a,{status:"PAUSED",dot:!0}),s.jsx(a,{status:"FAILED",dot:!0}),s.jsx(a,{status:"DELETED",dot:!0}),s.jsx(a,{variant:"primary",children:"Custom Label"})]})};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'ACTIVE'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var g,l,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'PAUSED'
  }
}`,...(E=(l=t.parameters)==null?void 0:l.docs)==null?void 0:E.source}}};var D,S,A;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: 'FAILED'
  }
}`,...(A=(S=e.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var x,C,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'DELETED'
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var v,I,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    status: 'ACTIVE',
    dot: true
  }
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var B,j,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    count: 24
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,F,P;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    count: 142,
    max: 99
  }
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,N,U;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge status="ACTIVE" dot />
      <Badge status="PAUSED" dot />
      <Badge status="FAILED" dot />
      <Badge status="DELETED" dot />
      <Badge variant="primary">Custom Label</Badge>
    </div>
}`,...(U=(N=d.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const O=["StatusActive","StatusPaused","StatusFailed","StatusDeleted","WithDot","NumericCounter","NumericCounterCapped","AllStatuses"];export{d as AllStatuses,c as NumericCounter,u as NumericCounterCapped,r as StatusActive,o as StatusDeleted,e as StatusFailed,t as StatusPaused,n as WithDot,O as __namedExportsOrder,_ as default};
