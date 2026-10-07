import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as f}from"./Button-CHA6iI3F.js";import{c as o}from"./cn-DOIGBiOF.js";import{F as h}from"./flag-BUX11eTT.js";import"./index-Bc2G9s8g.js";import"./createLucideIcon-B_AfoRjS.js";const d=({flaggedMap:b,onJumpTo:x,currentQuestion:i,className:y})=>{const s=Object.entries(b).filter(([r,n])=>n).map(([r])=>Number(r)).sort((r,n)=>r-n);return e.jsx("div",{className:o("p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 shadow-sm",y),children:s.length===0?e.jsx("div",{className:"text-gray-500 dark:text-gray-400 text-sm font-medium",children:"No flagged questions"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("span",{className:"font-semibold text-sm text-gray-800 dark:text-gray-200 mr-2",children:"Flagged Questions"}),e.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 ml-1",children:s.length})]}),e.jsx("ul",{className:"space-y-1",children:s.map(r=>e.jsx("li",{children:e.jsxs(f,{type:"button",variant:"ghost",size:"md",icon:e.jsx(h,{size:16,className:o("mr-2",r===i?"text-blue-600 dark:text-blue-400":"text-amber-600")}),className:o("w-full flex items-center px-3 py-2 rounded-lg transition text-left text-sm",r===i?"bg-blue-50 dark:bg-blue-950/40 border border-blue-500 text-blue-700 dark:text-blue-300 font-semibold":"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"),onClick:()=>x(r),children:["Question ",r]})},r))})]})})};d.displayName="ExamIntegrityStudentFlaggedSidebar";d.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentFlaggedSidebar",props:{flaggedMap:{required:!0,tsType:{name:"Record",elements:[{name:"number"},{name:"boolean"}],raw:"Record<number, boolean>"},description:""},totalQuestions:{required:!0,tsType:{name:"number"},description:""},onJumpTo:{required:!0,tsType:{name:"signature",type:"function",raw:"(questionNumber: number) => void",signature:{arguments:[{type:{name:"number"},name:"questionNumber"}],return:{name:"void"}}},description:""},currentQuestion:{required:!0,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Organisms/ExamIntegrityStudentFlaggedSidebar",component:d,parameters:{layout:"padded"},tags:["autodocs"]},t={args:{flaggedMap:{1:!1,2:!0,3:!1,4:!0,5:!0},totalQuestions:10,currentQuestion:2}},a={args:{flaggedMap:{},totalQuestions:10,currentQuestion:1}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    flaggedMap: {
      1: false,
      2: true,
      3: false,
      4: true,
      5: true
    },
    totalQuestions: 10,
    currentQuestion: 2
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,c,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    flaggedMap: {},
    totalQuestions: 10,
    currentQuestion: 1
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const E=["Default","Empty"];export{t as Default,a as Empty,E as __namedExportsOrder,v as default};
