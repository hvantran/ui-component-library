import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{A as c}from"./AppSwitcher-Bq3QF9-7.js";import{c as p}from"./cn-DOIGBiOF.js";const f=64,l=[{id:"template-manager",name:"Templates",url:"/templates",iconSrc:"/template-manager.png"},{id:"action-manager",name:"Actions",url:"/actions",iconSrc:"/action-manager.png"},{id:"endpoint-collector",name:"Collector",url:"/endpoints",iconSrc:"/data-collection.png"},{id:"exam-integrity",name:"Exam Integrity",url:"/",iconSrc:"/exam-integrity.png"}],r=({appTitle:i="Academic Management",userName:n,appSwitcherItems:s=l,onNavigateApp:a,className:o})=>{const m=n?n.trim().split(/\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase():"U";return e.jsxs("header",{className:p("fixed top-0 left-0 right-0 h-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 font-sans",o),children:[e.jsx("span",{className:"font-bold text-2xl text-blue-700 dark:text-blue-400 select-none tracking-tight",children:i}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(c,{items:s,currentAppId:"exam-integrity",onNavigate:t=>{a?a(t):window.location.href=t.url}}),n&&e.jsxs("div",{className:"ml-2 flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-gray-700 dark:text-gray-200 text-sm",children:n}),e.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm",children:m})]})]})]})};r.displayName="ExamIntegrityTopBar";r.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityTopBar",props:{appTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Academic Management'",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onNotifications:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHelp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},appSwitcherItems:{required:!1,tsType:{name:"Array",elements:[{name:"AppSwitcherItem"}],raw:"AppSwitcherItem[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},onNavigateApp:{required:!1,tsType:{name:"signature",type:"function",raw:"(app: AppSwitcherItem) => void",signature:{arguments:[{type:{name:"AppSwitcherItem"},name:"app"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{f as E,r as a};
