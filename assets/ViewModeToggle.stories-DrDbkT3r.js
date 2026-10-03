import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as y}from"./index-Bc2G9s8g.js";import{c as l}from"./cn-DOIGBiOF.js";import{c as d}from"./createLucideIcon-B_AfoRjS.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=d("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=d("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=d("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]),T={sm:"px-2 py-1 text-xs gap-1",md:"px-3 py-1.5 text-sm gap-1.5",lg:"px-4 py-2 text-base gap-2"};function s({mode:t,modes:r,onChange:b,size:x="md",className:v,ariaLabel:M="View mode toggle"}){return e.jsx("div",{role:"group","aria-label":M,className:l("inline-flex items-center p-1 rounded-card bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700/60 font-sans",v),children:r.map(a=>{const i=a.value===t;return e.jsxs("button",{type:"button",role:"radio","aria-checked":i,onClick:()=>b(a.value),className:l("inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500/20 whitespace-nowrap",T[x],i?"bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white shadow-sm font-semibold":"text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-secondary-700/50"),children:[a.icon&&e.jsx("span",{className:"shrink-0",children:a.icon}),e.jsx("span",{children:a.label})]},a.value)})})}s.displayName="ViewModeToggle";s.__docgenInfo={description:"",methods:[],displayName:"ViewModeToggle",props:{mode:{required:!0,tsType:{name:"T"},description:""},modes:{required:!0,tsType:{name:"Array",elements:[{name:"ViewModeOption",elements:[{name:"T"}],raw:"ViewModeOption<T>"}],raw:"ViewModeOption<T>[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(mode: T) => void",signature:{arguments:[{type:{name:"T"},name:"mode"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'View mode toggle'",computed:!1}}}};const L={title:"Molecules/ViewModeToggle",component:s,parameters:{layout:"centered"},tags:["autodocs"]},j=[{value:"table",label:"Table",icon:e.jsx(w,{className:"w-4 h-4"})},{value:"board",label:"Kanban",icon:e.jsx(f,{className:"w-4 h-4"})},{value:"list",label:"List",icon:e.jsx(k,{className:"w-4 h-4"})}],n={render:()=>{const[t,r]=y.useState("table");return e.jsx(s,{mode:t,modes:j,onChange:r})}},o={render:()=>{const[t,r]=y.useState("grid");return e.jsx(s,{mode:t,modes:[{value:"grid",label:"Grid"},{value:"list",label:"List"},{value:"compact",label:"Compact"}],onChange:r})}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState('table');
    return <ViewModeToggle mode={mode} modes={modesWithIcons} onChange={setMode} />;
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const z=["Default","TextOnly"];export{n as Default,o as TextOnly,z as __namedExportsOrder,L as default};
