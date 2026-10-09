import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{A as c}from"./AppSwitcher-Bq3QF9-7.js";import{c as d}from"./cn-DOIGBiOF.js";const f=64,p=[{id:"template-manager",name:"Templates",url:"/templates",iconSrc:"/template-manager.png"},{id:"action-manager",name:"Actions",url:"/actions",iconSrc:"/action-manager.png"},{id:"endpoint-collector",name:"Collector",url:"/endpoints",iconSrc:"/data-collection.png"},{id:"exam-integrity",name:"Exam Integrity",url:"/",iconSrc:"/exam-integrity.png"}],i=({appTitle:s="Academic Management",userName:n,starCount:a,appSwitcherItems:o=p,onNavigateApp:r,className:m})=>{const l=n?n.trim().split(/\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase():"U";return e.jsxs("header",{className:d("fixed top-0 left-0 right-0 h-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 font-sans",m),children:[e.jsx("span",{className:"font-bold text-2xl text-blue-700 dark:text-blue-400 select-none tracking-tight",children:s}),e.jsxs("div",{className:"flex items-center gap-4",children:[a!==void 0&&e.jsxs("div",{"data-testid":"star-counter-badge",className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 font-bold text-sm shadow-xs select-none",children:[e.jsx("span",{className:"text-base leading-none",children:"⭐"}),e.jsx("span",{children:a})]}),n&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200 text-sm",children:n}),e.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm",children:l})]}),e.jsx(c,{items:o,currentAppId:"exam-integrity",onNavigate:t=>{r?r(t):window.location.href=t.url}})]})]})};i.displayName="ExamIntegrityTopBar";i.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityTopBar",props:{appTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Academic Management'",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},starCount:{required:!1,tsType:{name:"number"},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onNotifications:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHelp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},appSwitcherItems:{required:!1,tsType:{name:"Array",elements:[{name:"AppSwitcherItem"}],raw:"AppSwitcherItem[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},onNavigateApp:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: AppSwitcherItem) => void",signature:{arguments:[{type:{name:"AppSwitcherItem"},name:"app"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{f as E,i as a};
