import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{A as p}from"./AppSwitcher-Bq3QF9-7.js";import{c as u}from"./cn-DOIGBiOF.js";import{M as g}from"./menu-2aDT6BCZ.js";const x=[{id:"template-manager",name:"Templates",url:"/templates",iconSrc:"/template-manager.png"},{id:"action-manager",name:"Actions",url:"/actions",iconSrc:"/action-manager.png"},{id:"endpoint-collector",name:"Collector",url:"/endpoints",iconSrc:"/data-collection.png"},{id:"exam-integrity",name:"Exam Integrity",url:"/",iconSrc:"/exam-integrity.png"}],o=({appTitle:m="Academic Management",userName:t,starCount:a,onLogout:r,onMenuToggle:i,appSwitcherItems:l=x,onNavigateApp:s,className:d})=>{const c=t?t.trim().split(/\s+/).map(n=>n[0]).slice(0,2).join("").toUpperCase():"U";return e.jsxs("header",{className:u("fixed top-0 left-0 right-0 h-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-3 sm:px-6 font-sans",d),children:[e.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 min-w-0",children:[i&&e.jsx("button",{type:"button","aria-label":"Toggle navigation menu",onClick:i,className:"p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none lg:hidden",children:e.jsx(g,{className:"w-5 h-5"})}),e.jsx("span",{className:"font-bold text-lg sm:text-2xl text-blue-700 dark:text-blue-400 select-none tracking-tight truncate",children:m})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[a!==void 0&&e.jsxs("div",{"data-testid":"star-counter-badge",className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 font-bold text-sm shadow-xs select-none",children:[e.jsx("span",{className:"text-base leading-none",children:"⭐"}),e.jsx("span",{children:a})]}),t&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200 text-sm",children:t}),e.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm",children:c}),r&&e.jsx("button",{type:"button",onClick:r,className:"ml-1 text-xs text-rose-600 hover:underline dark:text-rose-400 font-medium",children:"Logout"})]}),e.jsx(p,{items:l,currentAppId:"exam-integrity",onNavigate:n=>{s?s(n):window.location.href=n.url}})]})]})};o.displayName="ExamIntegrityTopBar";o.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityTopBar",props:{appTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Academic Management'",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},starCount:{required:!1,tsType:{name:"number"},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onNotifications:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHelp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMenuToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},appSwitcherItems:{required:!1,tsType:{name:"Array",elements:[{name:"AppSwitcherItem"}],raw:"AppSwitcherItem[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},onNavigateApp:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: AppSwitcherItem) => void",signature:{arguments:[{type:{name:"AppSwitcherItem"},name:"app"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{o as E};
