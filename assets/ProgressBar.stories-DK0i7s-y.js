import{P}from"./ProgressBar-COXiRCBm.js";import"./jsx-runtime-DFAAy_2V.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const S={title:"Atoms/ProgressBar",component:P,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},variant:{control:"select",options:["primary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},showPercentage:{control:"boolean"}}},e={args:{value:65,showPercentage:!0,label:"Job Execution Progress"}},r={args:{value:100,variant:"success",showPercentage:!0,label:"Sync Completed"}},a={args:{value:80,variant:"warning",showPercentage:!0,label:"Rate Limit Threshold"}},s={args:{value:25,variant:"danger",showPercentage:!0,label:"Retry Budget Remaining"}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: 65,
    showPercentage: true,
    label: 'Job Execution Progress'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    showPercentage: true,
    label: 'Sync Completed'
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 80,
    variant: 'warning',
    showPercentage: true,
    label: 'Rate Limit Threshold'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 25,
    variant: 'danger',
    showPercentage: true,
    label: 'Retry Budget Remaining'
  }
}`,...(v=(d=s.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const R=["Default","Success","Warning","Danger"];export{s as Danger,e as Default,r as Success,a as Warning,R as __namedExportsOrder,S as default};
