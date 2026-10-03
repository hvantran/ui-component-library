import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{I as r}from"./Input-DJtXJ0bQ.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const W={title:"Atoms/Input",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search"]},disabled:{control:"boolean"},required:{control:"boolean"}}},a={args:{placeholder:"Enter your action name..."}},t={args:{label:"Action Name",placeholder:"e.g. Sync Customer Database",required:!0}},s={args:{label:"Cron Schedule",placeholder:"0 0 * * *",helperText:"Standard 5-part cron syntax representing minute, hour, day, month, day of week."}},o={args:{label:"Action Name",value:"A",error:"Action name must be between 2 and 255 characters"}},n={args:{label:"Immutable Identifier",value:"act_109283948",disabled:!0}},l={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(r,{label:"Text",type:"text",placeholder:"Regular text input"}),e.jsx(r,{label:"Email",type:"email",placeholder:"john.doe@example.com"}),e.jsx(r,{label:"Password",type:"password",value:"secretpassword",readOnly:!0}),e.jsx(r,{label:"Number",type:"number",placeholder:"42"})]})};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your action name...'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Action Name',
    placeholder: 'e.g. Sync Customer Database',
    required: true
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var b,h,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Cron Schedule',
    placeholder: '0 0 * * *',
    helperText: 'Standard 5-part cron syntax representing minute, hour, day, month, day of week.'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,g,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Action Name',
    value: 'A',
    error: 'Action name must be between 2 and 255 characters'
  }
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var I,S,f;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Immutable Identifier',
    value: 'act_109283948',
    disabled: true
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,v,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">
      <Input label="Text" type="text" placeholder="Regular text input" />
      <Input label="Email" type="email" placeholder="john.doe@example.com" />
      <Input label="Password" type="password" value="secretpassword" readOnly />
      <Input label="Number" type="number" placeholder="42" />
    </div>
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const C=["Default","WithLabel","WithHelperText","WithError","Disabled","InputTypes"];export{a as Default,n as Disabled,l as InputTypes,o as WithError,s as WithHelperText,t as WithLabel,C as __namedExportsOrder,W as default};
