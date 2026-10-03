import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{r as i}from"./index-Bc2G9s8g.js";import{S as d}from"./SearchBar-TQSMVXhG.js";import"./cn-DOIGBiOF.js";import"./createLucideIcon-B_AfoRjS.js";const S={title:"Molecules/SearchBar",component:d,args:{placeholder:"Filter items..."}},e={render:l=>{const[a,p]=i.useState("");return s.jsxs("div",{className:"p-4 max-w-md",children:[s.jsx(d,{...l,value:a,onChange:p}),s.jsxs("p",{className:"mt-2 text-xs text-secondary-500",children:["Current query: ",a||"(empty)"]})]})}},r={args:{disabled:!0,value:"Disabled search query"}};var t,o,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState('');
    return <div className="p-4 max-w-md">
        <SearchBar {...args} value={query} onChange={setQuery} />
        <p className="mt-2 text-xs text-secondary-500">Current query: {query || '(empty)'}</p>
      </div>;
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,m,n;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled search query'
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const v=["Default","Disabled"];export{e as Default,r as Disabled,v as __namedExportsOrder,S as default};
