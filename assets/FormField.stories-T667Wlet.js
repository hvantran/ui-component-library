import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as v}from"./cn-DOIGBiOF.js";import{I as y}from"./Input-DJtXJ0bQ.js";import{S as I}from"./Select-MzxQnoU9.js";import"./index-Bc2G9s8g.js";const o=({label:i,htmlFor:x,required:f,error:s,helperText:l,className:F,children:P})=>e.jsxs("div",{className:v("flex flex-col gap-1 w-full",F),children:[i&&e.jsxs("label",{htmlFor:x,className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:[i,f&&e.jsx("span",{className:"ml-1 text-red-500",children:"*"})]}),P,s?e.jsx("p",{className:"text-xs text-red-600 dark:text-red-400 mt-0.5",children:s}):l?e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-0.5",children:l}):null]});o.displayName="FormField";o.__docgenInfo={description:`Molecule — FormField

Composes a standard label, required indicator, child control slot,
and accessible error/helper messaging.`,methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label for the field"},htmlFor:{required:!1,tsType:{name:"string"},description:"HTML ID of target input for accessible label linking"},required:{required:!1,tsType:{name:"boolean"},description:"Marks field as mandatory with asterisk"},error:{required:!1,tsType:{name:"string"},description:"Error message displayed beneath input"},helperText:{required:!1,tsType:{name:"string"},description:"Explanatory helper text beneath input"},className:{required:!1,tsType:{name:"string"},description:"Additional container styling"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Child form element"}}};const E={title:"Molecules/FormField",component:o,parameters:{layout:"padded"},tags:["autodocs"]},r={args:{label:"Action Target Host",htmlFor:"host-input",required:!0,helperText:"FQDN or IPv4 of the remote target server.",children:e.jsx(y,{id:"host-input",placeholder:"e.g. backend.lazada.vn"})}},t={args:{label:"Execution Port",htmlFor:"port-input",required:!0,error:"Port must be between 1 and 65535",children:e.jsx(y,{id:"port-input",type:"number",value:"99999",error:"Port must be between 1 and 65535",readOnly:!0})}},a={args:{label:"Job Priority",htmlFor:"priority-select",children:e.jsx(I,{id:"priority-select",options:[{value:"HIGH",label:"High Priority"},{value:"MEDIUM",label:"Medium Priority"},{value:"LOW",label:"Low Priority"}]})}};var n,d,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Action Target Host',
    htmlFor: 'host-input',
    required: true,
    helperText: 'FQDN or IPv4 of the remote target server.',
    children: <Input id="host-input" placeholder="e.g. backend.lazada.vn" />
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Execution Port',
    htmlFor: 'port-input',
    required: true,
    error: 'Port must be between 1 and 65535',
    children: <Input id="port-input" type="number" value="99999" error="Port must be between 1 and 65535" readOnly />
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Job Priority',
    htmlFor: 'priority-select',
    children: <Select id="priority-select" options={[{
      value: 'HIGH',
      label: 'High Priority'
    }, {
      value: 'MEDIUM',
      label: 'Medium Priority'
    }, {
      value: 'LOW',
      label: 'Low Priority'
    }]} />
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["WithInput","WithError","WithSelect"];export{t as WithError,r as WithInput,a as WithSelect,M as __namedExportsOrder,E as default};
