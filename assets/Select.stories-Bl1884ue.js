import{S as O}from"./Select-MzxQnoU9.js";import"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const e=[{value:"active",label:"Active"},{value:"paused",label:"Paused"},{value:"completed",label:"Completed"},{value:"archived",label:"Archived",disabled:!0}],y={title:"Atoms/Select",component:O,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{options:e,placeholder:"Choose status..."}},t={args:{label:"Action Status",options:e,required:!0}},s={args:{label:"Action Status",options:e,error:"Please select a valid action status"}},o={args:{label:"Action Status",options:e,helperText:"Controls execution lifecycle in the poller engine."}},r={args:{label:"Action Status",options:e,disabled:!0,value:"active"}};var l,n,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Choose status...'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Action Status',
    options: sampleOptions,
    required: true
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Action Status',
    options: sampleOptions,
    error: 'Please select a valid action status'
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,h,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Action Status',
    options: sampleOptions,
    helperText: 'Controls execution lifecycle in the poller engine.'
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var v,A,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Action Status',
    options: sampleOptions,
    disabled: true,
    value: 'active'
  }
}`,...(x=(A=r.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};const D=["Default","WithLabel","WithError","WithHelperText","Disabled"];export{a as Default,r as Disabled,s as WithError,o as WithHelperText,t as WithLabel,D as __namedExportsOrder,y as default};
