import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as g}from"./index-Bc2G9s8g.js";import{c as o}from"./cn-DOIGBiOF.js";import{L}from"./layout-grid-Cgbzx6dM.js";import"./createLucideIcon-B_AfoRjS.js";const k=[{id:"template-manager",name:"Templates",url:"/templates",iconSrc:"/template-manager.png"},{id:"action-manager",name:"Actions",url:"/actions",iconSrc:"/action-manager.png"},{id:"endpoint-collector",name:"Collector",url:"/endpoints",iconSrc:"/data-collection.png"},{id:"exam-integrity",name:"Exam Integrity",url:"/",iconSrc:"/exam-integrity.png"}],t=({items:l=k,currentAppId:n,title:N="Applications",onNavigate:x,className:I,triggerClassName:E,popoverClassName:T})=>{const[a,s]=g.useState(!1),m=g.useRef(null);g.useEffect(()=>{function e(u){m.current&&!m.current.contains(u.target)&&s(!1)}function i(u){u.key==="Escape"&&s(!1)}return a&&(document.addEventListener("mousedown",e),document.addEventListener("keydown",i)),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",i)}},[a]);const C=e=>{s(!1),x?x(e):window.location.href=e.url};return r.jsxs("div",{className:o("relative",I),ref:m,children:[r.jsx("button",{type:"button",title:"App switcher","aria-label":"App switcher","aria-expanded":a,onClick:()=>s(e=>!e),className:o("p-2 rounded-btn text-secondary-500 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors",a&&"bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white",E),children:r.jsx(L,{className:"w-5 h-5"})}),a&&r.jsxs("div",{role:"dialog","aria-label":"Application Switcher",className:o("absolute right-0 mt-2 w-80 p-4 rounded-xl border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-xl z-50",T),children:[r.jsx("div",{className:"text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wider mb-3 px-1",children:N}),r.jsx("div",{className:"grid grid-cols-2 gap-3",children:l.map(e=>{const i=e.isCurrentApp??(n!==void 0&&e.id===n);return r.jsxs("button",{type:"button",onClick:()=>C(e),className:o("flex flex-col items-center gap-2 p-3 rounded-lg border transition text-center group cursor-pointer",i?"border-primary-500 bg-primary-50/70 dark:bg-primary-950/40 text-primary-900 dark:text-primary-100 ring-1 ring-primary-500":"border-secondary-100 dark:border-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-800/60 text-secondary-900 dark:text-secondary-100"),children:[e.icon?r.jsx("div",{className:"w-10 h-10 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-105 transition-transform",children:e.icon}):e.iconSrc?r.jsx("img",{alt:e.name,src:e.iconSrc,className:"w-10 h-10 object-contain group-hover:scale-105 transition-transform"}):r.jsx("div",{className:"w-10 h-10 rounded-lg bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center font-bold text-sm text-secondary-600 dark:text-secondary-300 group-hover:scale-105 transition-transform",children:e.name.slice(0,2).toUpperCase()}),r.jsx("span",{className:"text-xs font-medium truncate max-w-full",children:e.name})]},e.id)})})]})]})};t.displayName="AppSwitcher";t.__docgenInfo={description:"",methods:[],displayName:"AppSwitcher",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AppSwitcherItem"}],raw:"AppSwitcherItem[]"},description:"",defaultValue:{value:`[
  {
    id: 'template-manager',
    name: 'Templates',
    url: '/templates',
    iconSrc: '/template-manager.png',
  },
  {
    id: 'action-manager',
    name: 'Actions',
    url: '/actions',
    iconSrc: '/action-manager.png',
  },
  {
    id: 'endpoint-collector',
    name: 'Collector',
    url: '/endpoints',
    iconSrc: '/data-collection.png',
  },
  {
    id: 'exam-integrity',
    name: 'Exam Integrity',
    url: '/',
    iconSrc: '/exam-integrity.png',
  },
]`,computed:!1}},currentAppId:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Applications'",computed:!1}},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: AppSwitcherItem) => void",signature:{arguments:[{type:{name:"AppSwitcherItem"},name:"item"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},triggerClassName:{required:!1,tsType:{name:"string"},description:""},popoverClassName:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Organisms/AppSwitcher",component:t},c={render:()=>r.jsx("div",{className:"p-8 bg-slate-50 min-h-[300px] flex items-start justify-end",children:r.jsx(t,{currentAppId:"template-manager"})})},d={render:()=>r.jsx("div",{className:"dark p-8 bg-slate-900 min-h-[300px] flex items-start justify-end",children:r.jsx(t,{currentAppId:"exam-integrity"})})},p={render:()=>{const l=[...k,{id:"analytics-dashboard",name:"Analytics",url:"/analytics"}];return r.jsx("div",{className:"p-8 bg-slate-50 min-h-[300px] flex items-start justify-end",children:r.jsx(t,{items:l,currentAppId:"action-manager",onNavigate:n=>alert(`Navigating to: ${n.name} (${n.url})`)})})}};var y,f,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-8 bg-slate-50 min-h-[300px] flex items-start justify-end">
        <AppSwitcher currentAppId="template-manager" />
      </div>;
  }
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,A,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div className="dark p-8 bg-slate-900 min-h-[300px] flex items-start justify-end">
        <AppSwitcher currentAppId="exam-integrity" />
      </div>;
  }
}`,...(b=(A=d.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var w,S,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const customApps = [...DEFAULT_PLATFORM_APPS, {
      id: 'analytics-dashboard',
      name: 'Analytics',
      url: '/analytics'
    }];
    return <div className="p-8 bg-slate-50 min-h-[300px] flex items-start justify-end">
        <AppSwitcher items={customApps} currentAppId="action-manager" onNavigate={app => alert(\`Navigating to: \${app.name} (\${app.url})\`)} />
      </div>;
  }
}`,...(j=(S=p.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const F=["Default","DarkMode","CustomApplications"];export{p as CustomApplications,d as DarkMode,c as Default,F as __namedExportsOrder,R as default};
