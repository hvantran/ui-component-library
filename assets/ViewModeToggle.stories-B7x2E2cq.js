import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as u}from"./index-Bc2G9s8g.js";import{V as r}from"./ViewModeToggle-D4HFJqYL.js";import{c as p}from"./createLucideIcon-B_AfoRjS.js";import{L as h}from"./list-BwDpmaGF.js";import"./cn-DOIGBiOF.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=p("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=p("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]),w={title:"Molecules/ViewModeToggle",component:r,parameters:{layout:"centered"},tags:["autodocs"]},M=[{value:"table",label:"Table",icon:e.jsx(g,{className:"w-4 h-4"})},{value:"board",label:"Kanban",icon:e.jsx(b,{className:"w-4 h-4"})},{value:"list",label:"List",icon:e.jsx(h,{className:"w-4 h-4"})}],a={render:()=>{const[o,s]=u.useState("table");return e.jsx(r,{mode:o,modes:M,onChange:s})}},t={render:()=>{const[o,s]=u.useState("grid");return e.jsx(r,{mode:o,modes:[{value:"grid",label:"Grid"},{value:"list",label:"List"},{value:"compact",label:"Compact"}],onChange:s})}};var n,d,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState('table');
    return <ViewModeToggle mode={mode} modes={modesWithIcons} onChange={setMode} />;
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,m,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState('grid');
    return <ViewModeToggle mode={mode} modes={[{
      value: 'grid',
      label: 'Grid'
    }, {
      value: 'list',
      label: 'List'
    }, {
      value: 'compact',
      label: 'Compact'
    }]} onChange={setMode} />;
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const k=["Default","TextOnly"];export{a as Default,t as TextOnly,k as __namedExportsOrder,w as default};
