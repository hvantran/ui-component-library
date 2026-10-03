import{j as b}from"./jsx-runtime-DFAAy_2V.js";import{r as k}from"./index-Bc2G9s8g.js";import{S as m}from"./Switch-B9flQ6e_.js";import"./cn-DOIGBiOF.js";const E={title:"Atoms/Switch",component:m,args:{label:"Enable feature"}},e={render:h=>{const[u,g]=k.useState(!1);return b.jsx(m,{...h,checked:u,onChange:f=>g(f.target.checked)})}},r={args:{label:"Email Notifications",description:"Receive alerts when workflow state changes."}},s={args:{label:"Disabled option",disabled:!0}};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,n,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Email Notifications',
    description: 'Receive alerts when workflow state changes.'
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Disabled option',
    disabled: true
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const C=["Default","WithDescription","Disabled"];export{e as Default,s as Disabled,r as WithDescription,C as __namedExportsOrder,E as default};
