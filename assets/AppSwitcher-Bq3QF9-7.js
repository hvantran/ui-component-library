import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{c as s}from"./cn-DOIGBiOF.js";import{L as h}from"./layout-grid-Cgbzx6dM.js";const b=[{id:"template-manager",name:"Templates",url:"/templates",iconSrc:"/template-manager.png"},{id:"action-manager",name:"Actions",url:"/actions",iconSrc:"/action-manager.png"},{id:"endpoint-collector",name:"Collector",url:"/endpoints",iconSrc:"/data-collection.png"},{id:"exam-integrity",name:"Exam Integrity",url:"/",iconSrc:"/exam-integrity.png"}],p=({items:m=b,currentAppId:d,title:u="Applications",onNavigate:l,className:g,triggerClassName:y,popoverClassName:x})=>{const[n,t]=c.useState(!1),i=c.useRef(null);c.useEffect(()=>{function e(o){i.current&&!i.current.contains(o.target)&&t(!1)}function a(o){o.key==="Escape"&&t(!1)}return n&&(document.addEventListener("mousedown",e),document.addEventListener("keydown",a)),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",a)}},[n]);const f=e=>{t(!1),l?l(e):window.location.href=e.url};return r.jsxs("div",{className:s("relative",g),ref:i,children:[r.jsx("button",{type:"button",title:"App switcher","aria-label":"App switcher","aria-expanded":n,onClick:()=>t(e=>!e),className:s("p-2 rounded-btn text-secondary-500 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors",n&&"bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white",y),children:r.jsx(h,{className:"w-5 h-5"})}),n&&r.jsxs("div",{role:"dialog","aria-label":"Application Switcher",className:s("absolute right-0 mt-2 w-80 p-4 rounded-xl border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-xl z-50",x),children:[r.jsx("div",{className:"text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wider mb-3 px-1",children:u}),r.jsx("div",{className:"grid grid-cols-2 gap-3",children:m.map(e=>{const a=e.isCurrentApp??(d!==void 0&&e.id===d);return r.jsxs("button",{type:"button",onClick:()=>f(e),className:s("flex flex-col items-center gap-2 p-3 rounded-lg border transition text-center group cursor-pointer",a?"border-primary-500 bg-primary-50/70 dark:bg-primary-950/40 text-primary-900 dark:text-primary-100 ring-1 ring-primary-500":"border-secondary-100 dark:border-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-800/60 text-secondary-900 dark:text-secondary-100"),children:[e.icon?r.jsx("div",{className:"w-10 h-10 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-105 transition-transform",children:e.icon}):e.iconSrc?r.jsx("img",{alt:e.name,src:e.iconSrc,className:"w-10 h-10 object-contain group-hover:scale-105 transition-transform"}):r.jsx("div",{className:"w-10 h-10 rounded-lg bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center font-bold text-sm text-secondary-600 dark:text-secondary-300 group-hover:scale-105 transition-transform",children:e.name.slice(0,2).toUpperCase()}),r.jsx("span",{className:"text-xs font-medium truncate max-w-full",children:e.name})]},e.id)})})]})]})};p.displayName="AppSwitcher";p.__docgenInfo={description:"",methods:[],displayName:"AppSwitcher",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AppSwitcherItem"}],raw:"AppSwitcherItem[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},currentAppId:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Applications'",computed:!1}},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: AppSwitcherItem) => void",signature:{arguments:[{type:{name:"AppSwitcherItem"},name:"item"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},triggerClassName:{required:!1,tsType:{name:"string"},description:""},popoverClassName:{required:!1,tsType:{name:"string"},description:""}}};export{p as A,b as D};
