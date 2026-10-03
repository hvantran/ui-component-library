import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as n}from"./index-Bc2G9s8g.js";import{B as c}from"./Badge-An41I-r3.js";import{T as i}from"./Tabs-BbqbLFpu.js";import"./cn-DOIGBiOF.js";const p={title:"Molecules/Tabs",component:i},s={render:()=>{const[t,d]=n.useState("summary");return e.jsxs("div",{className:"p-4",children:[e.jsx(i,{activeTab:t,onChange:d,tabs:[{id:"summary",label:"Summary"},{id:"tasks",label:"Tasks",badge:e.jsx(c,{size:"sm",children:"5"})},{id:"logs",label:"Execution Logs"},{id:"settings",label:"Settings",disabled:!0}]}),e.jsxs("div",{className:"p-6 text-sm text-secondary-600 dark:text-secondary-300",children:["Showing tab content for: ",e.jsx("strong",{children:t})]})]})}};var a,r,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('summary');
    return <div className="p-4">
        <Tabs activeTab={active} onChange={setActive} tabs={[{
        id: 'summary',
        label: 'Summary'
      }, {
        id: 'tasks',
        label: 'Tasks',
        badge: <Badge size="sm">5</Badge>
      }, {
        id: 'logs',
        label: 'Execution Logs'
      }, {
        id: 'settings',
        label: 'Settings',
        disabled: true
      }]} />
        <div className="p-6 text-sm text-secondary-600 dark:text-secondary-300">
          Showing tab content for: <strong>{active}</strong>
        </div>
      </div>;
  }
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,p as default};
