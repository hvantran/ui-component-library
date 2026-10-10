import{j as p}from"./jsx-runtime-DFAAy_2V.js";import{r as T}from"./index-Bc2G9s8g.js";import{D as s,P as e}from"./DynamicForm-BeH_LtCD.js";import"./cn-DOIGBiOF.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./info-BsSq_3Pd.js";import"./createLucideIcon-B_AfoRjS.js";const D={title:"Organisms/DynamicForm",component:s},g=[{propName:"endpointName",propLabel:"Endpoint Name",propType:e.InputText,propValue:"Lazada Stock Poller",isRequired:!0,colSpan:6,info:"Unique system name of this external endpoint."},{propName:"method",propLabel:"HTTP Method",propType:e.Selection,propValue:"POST",colSpan:6,selectionMeta:{selections:[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"DELETE",value:"DELETE"}]}},{propName:"url",propLabel:"Target URL",propType:e.InputText,propValue:"https://api.lazada.vn/rest/stock",colSpan:12},{propName:"useCustomHeaders",propLabel:"Use Custom Headers",propType:e.Switcher,propValue:!0},{propName:"headersJson",propLabel:"Headers (JSON)",propType:e.CodeEditor,propValue:`{
  "Authorization": "Bearer secret-token",
  "Content-Type": "application/json"
}`,colSpan:12,codeEditorMeta:{codeLanguages:["json"],height:"180px"},dependOn:[{propName:"useCustomHeaders",equals:!0}]},{propName:"notes",propLabel:"Internal Notes",propType:e.Textarea,propValue:"Requires proxy rotation in staging.",colSpan:12}],r={render:()=>{const[i,l]=T.useState(g),m=(d,c)=>{l(u=>u.map(a=>a.propName===d?{...a,propValue:c}:a))};return p.jsx("div",{className:"p-6 max-w-3xl border rounded-card bg-surface-card-light dark:bg-surface-card-dark",children:p.jsx(s,{properties:i,onChange:m})})}};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [props, setProps] = useState(initialProperties);
    const handleChange = (name: string, val: any) => {
      setProps(prev => prev.map(item => item.propName === name ? {
        ...item,
        propValue: val
      } : item));
    };
    return <div className="p-6 max-w-3xl border rounded-card bg-surface-card-light dark:bg-surface-card-dark">
        <DynamicForm properties={props} onChange={handleChange} />
      </div>;
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const V=["Default"];export{r as Default,V as __namedExportsOrder,D as default};
