import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as D}from"./cn-DOIGBiOF.js";import{B as S}from"./Button-CHA6iI3F.js";import{L as i}from"./layout-dashboard-BBesCYSx.js";import{U as M}from"./upload-DYBEGjPC.js";import{C}from"./clipboard-list-CwZuq8yN.js";import{c as I}from"./createLucideIcon-B_AfoRjS.js";import{C as L}from"./chart-no-axes-column-CyYxYu0I.js";import{S as R}from"./settings-fcItWnOe.js";import"./index-Bc2G9s8g.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=I("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),a=({icon:j,label:l,active:N=!1,collapsed:n=!1,onClick:k,className:z,title:w})=>e.jsxs(S,{type:"button",className:D("w-full flex gap-3 py-2.5 border-none text-left transition-all duration-150 rounded",n?"px-3 justify-center":"px-4 justify-start",N?"bg-blue-50 text-blue-700 border-l-[3px] border-l-blue-600 dark:bg-blue-950/50 dark:text-blue-300 dark:border-l-blue-400 font-semibold":"bg-transparent text-gray-600 border-l-[3px] border-l-transparent hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 font-normal",z),variant:"ghost",size:"md",onClick:k,title:w||(n?l:void 0),children:[e.jsx("span",{className:"flex items-center justify-center shrink-0",children:j}),!n&&e.jsx("span",{className:"text-sm leading-5 whitespace-nowrap",children:l})]});a.displayName="NavMenuItem";a.__docgenInfo={description:`Molecule — NavMenuItem

Sidebar navigation item used in admin, proctor, and teacher dashboards.
Displays icon + label, collapses gracefully to icon-only mode with tooltips,
and highlights active routes with accent borders.`,methods:[],displayName:"NavMenuItem",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Leading icon element"},label:{required:!0,tsType:{name:"string"},description:"Text label"},active:{required:!1,tsType:{name:"boolean"},description:"Active / selected state",defaultValue:{value:"false",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:"Collapsed icon-only state for compact sidebars",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click callback"},className:{required:!1,tsType:{name:"string"},description:"Custom additional CSS classes"},title:{required:!1,tsType:{name:"string"},description:"Tooltip / title attribute override"}}};const G={title:"Molecules/NavMenuItem",component:a,tags:["autodocs"],parameters:{layout:"centered"}},r={args:{icon:e.jsx(i,{size:18}),label:"Dashboard",active:!1}},s={args:{icon:e.jsx(i,{size:18}),label:"Dashboard",active:!0}},t={args:{icon:e.jsx(i,{size:18}),label:"Dashboard",collapsed:!0}},o={render:()=>e.jsxs("div",{className:"w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 flex flex-col gap-1",children:[e.jsx(a,{icon:e.jsx(i,{size:18}),label:"Overview",active:!0}),e.jsx(a,{icon:e.jsx(M,{size:18}),label:"Upload Exam"}),e.jsx(a,{icon:e.jsx(C,{size:18}),label:"Review Submissions"}),e.jsx(a,{icon:e.jsx(T,{size:18}),label:"Question Bank"}),e.jsx(a,{icon:e.jsx(L,{size:18}),label:"Reports"}),e.jsx(a,{icon:e.jsx(R,{size:18}),label:"Settings"})]})};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    active: false
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    active: true
  }
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,x,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    collapsed: true
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,y,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 flex flex-col gap-1">
      <NavMenuItem icon={<LayoutDashboard size={18} />} label="Overview" active />
      <NavMenuItem icon={<Upload size={18} />} label="Upload Exam" />
      <NavMenuItem icon={<ClipboardList size={18} />} label="Review Submissions" />
      <NavMenuItem icon={<Database size={18} />} label="Question Bank" />
      <NavMenuItem icon={<BarChart2 size={18} />} label="Reports" />
      <NavMenuItem icon={<Settings size={18} />} label="Settings" />
    </div>
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const H=["Default","Active","Collapsed","FullSidebar"];export{s as Active,t as Collapsed,r as Default,o as FullSidebar,H as __namedExportsOrder,G as default};
