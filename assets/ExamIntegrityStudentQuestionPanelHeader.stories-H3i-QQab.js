import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as b}from"./Button-CHA6iI3F.js";import{c as r}from"./cn-DOIGBiOF.js";import{F as j}from"./flag-BUX11eTT.js";import"./index-Bc2G9s8g.js";import"./createLucideIcon-B_AfoRjS.js";const n=({questionNumber:i,subject:l,gradeLevel:d,tone:h="high",isFlagged:s=!1,onFlag:o,className:y})=>{const m={elementary:{badge:"bg-cyan-500",label:"text-cyan-700 dark:text-cyan-300"},middle:{badge:"bg-emerald-600",label:"text-emerald-700 dark:text-emerald-300"},high:{badge:"bg-sky-600",label:"text-slate-500 dark:text-gray-400"}}[h];return e.jsxs("div",{className:r("flex items-start justify-between gap-3 mb-4",y),children:[e.jsxs("div",{className:"flex items-center gap-4 min-w-0",children:[e.jsx("div",{className:r("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm",m.badge),children:e.jsx("span",{className:"text-white text-sm font-bold",children:i})}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsxs("span",{className:r("text-xs uppercase tracking-wide font-semibold",m.label),children:["Question ",i]}),(l||d)&&e.jsx("span",{className:"text-slate-500 dark:text-gray-400 text-xs font-medium truncate",children:[l,d].filter(Boolean).join(" · ")})]})]}),e.jsx("div",{className:"flex items-start gap-3",children:o&&e.jsx(b,{variant:s?"warning":"neutral",icon:e.jsx(j,{size:16,className:s?"text-amber-700":"text-slate-500"}),onClick:o,className:"shrink-0",children:s?"Unflag":"Flag"})})]})};n.displayName="ExamIntegrityStudentQuestionPanelHeader";n.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentQuestionPanelHeader",props:{questionNumber:{required:!0,tsType:{name:"number"},description:""},subject:{required:!1,tsType:{name:"string"},description:""},gradeLevel:{required:!1,tsType:{name:"string"},description:""},tone:{required:!1,tsType:{name:"union",raw:"'elementary' | 'middle' | 'high'",elements:[{name:"literal",value:"'elementary'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'high'"}]},description:"",defaultValue:{value:"'high'",computed:!1}},isFlagged:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onFlag:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Organisms/ExamIntegrityStudentQuestionPanelHeader",component:n,parameters:{layout:"padded"},tags:["autodocs"]},a={args:{questionNumber:3,subject:"Mathematics",gradeLevel:"Grade 10",tone:"high",isFlagged:!1,onFlag:()=>{}}},t={args:{questionNumber:7,subject:"Physics",gradeLevel:"Grade 11",tone:"middle",isFlagged:!0,onFlag:()=>{}}};var c,u,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    questionNumber: 3,
    subject: 'Mathematics',
    gradeLevel: 'Grade 10',
    tone: 'high',
    isFlagged: false,
    onFlag: () => {}
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,x,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    questionNumber: 7,
    subject: 'Physics',
    gradeLevel: 'Grade 11',
    tone: 'middle',
    isFlagged: true,
    onFlag: () => {}
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const E=["Default","Flagged"];export{a as Default,t as Flagged,E as __namedExportsOrder,T as default};
