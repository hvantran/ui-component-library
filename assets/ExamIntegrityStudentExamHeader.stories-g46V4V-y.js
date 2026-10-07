import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as k}from"./Button-CHA6iI3F.js";import{P as E}from"./ProgressBar-COXiRCBm.js";import{T as P}from"./TimerDisplay-CBS_2x-y.js";import{c as d}from"./cn-DOIGBiOF.js";import{S as Q}from"./settings-fcItWnOe.js";import"./index-Bc2G9s8g.js";import"./clock-CNNG55KQ.js";import"./createLucideIcon-B_AfoRjS.js";const a=({brandName:v="ExamIntegrity",currentQuestion:i,totalQuestions:n,remainingSeconds:o,isProctoringActive:c=!0,onSettings:m,className:N})=>{const S=n>0?Math.round(i/n*100):0,j=o<=300;return e.jsxs("div",{className:d("w-full",N),children:[e.jsx(E,{value:S,variant:j?"danger":"primary",size:"sm",className:"rounded-none h-1"}),e.jsx("header",{className:"bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800",children:e.jsxs("div",{className:"flex items-center min-h-[56px] gap-2 px-4 md:px-8",children:[e.jsx("span",{className:"font-bold text-base text-blue-600 dark:text-blue-400 shrink-0 tracking-tight",children:v}),e.jsxs("span",{className:"text-sm font-semibold text-gray-900 dark:text-white shrink-0 ml-4",children:["Question ",i," / ",n]}),e.jsx("div",{className:"flex-1"}),e.jsxs("span",{className:"hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mr-2 border transition-colors bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",children:[e.jsx("span",{className:d("w-2 h-2 rounded-full shrink-0",c?"bg-green-500 animate-pulse":"bg-gray-400")}),c?"Proctoring Active":"Proctoring Off"]}),e.jsx("span",{className:"mr-2",children:e.jsx(P,{remainingSeconds:o})}),m&&e.jsx(k,{onClick:m,variant:"ghost",size:"sm",icon:e.jsx(Q,{size:16,className:"text-slate-400"}),className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500","aria-label":"Settings"})]})})]})};a.displayName="ExamIntegrityStudentExamHeader";a.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentExamHeader",props:{brandName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ExamIntegrity'",computed:!1}},currentQuestion:{required:!0,tsType:{name:"number"},description:""},totalQuestions:{required:!0,tsType:{name:"number"},description:""},remainingSeconds:{required:!0,tsType:{name:"number"},description:""},isProctoringActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onSettings:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Organisms/ExamIntegrityStudentExamHeader",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={args:{currentQuestion:5,totalQuestions:20,remainingSeconds:1800,isProctoringActive:!0}},t={args:{currentQuestion:19,totalQuestions:20,remainingSeconds:120,isProctoringActive:!0}},s={args:{currentQuestion:1,totalQuestions:10,remainingSeconds:3600,isProctoringActive:!1}};var u,l,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentQuestion: 5,
    totalQuestions: 20,
    remainingSeconds: 1800,
    isProctoringActive: true
  }
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,x,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentQuestion: 19,
    totalQuestions: 20,
    remainingSeconds: 120,
    isProctoringActive: true
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var y,b,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    currentQuestion: 1,
    totalQuestions: 10,
    remainingSeconds: 3600,
    isProctoringActive: false
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const D=["Default","UrgentTime","ProctoringOff"];export{r as Default,s as ProctoringOff,t as UrgentTime,D as __namedExportsOrder,B as default};
