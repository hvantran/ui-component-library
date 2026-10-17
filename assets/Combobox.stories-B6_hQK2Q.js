import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{r as p}from"./index-Bc2G9s8g.js";import{C as o}from"./Combobox-DSkH8rgj.js";import"./cn-DOIGBiOF.js";import"./x-DiakLl4d.js";import"./createLucideIcon-B_AfoRjS.js";import"./check-My_ONosZ.js";const f={title:"Molecules/Combobox",component:o,parameters:{layout:"centered"},tags:["autodocs"]},d=[{value:"react",label:"React.js"},{value:"vue",label:"Vue.js"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid.js"},{value:"qwik",label:"Qwik",disabled:!0}],e={render:()=>{const[t,r]=p.useState("");return s.jsx("div",{className:"w-72",children:s.jsx(o,{options:d,value:t,onChange:r,placeholder:"Select framework..."})})}},a={render:()=>{const[t,r]=p.useState("react");return s.jsx("div",{className:"w-72",children:s.jsx(o,{options:d,value:t,onChange:r})})}};var l,u,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-72">
        <Combobox options={sampleOptions} value={value} onChange={setValue} placeholder="Select framework..." />
      </div>;
  }
}`,...(n=(u=e.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('react');
    return <div className="w-72">
        <Combobox options={sampleOptions} value={value} onChange={setValue} />
      </div>;
  }
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const h=["Default","Preselected"];export{e as Default,a as Preselected,h as __namedExportsOrder,f as default};
