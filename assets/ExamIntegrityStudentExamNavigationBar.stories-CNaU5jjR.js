import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as a}from"./Button-CHA6iI3F.js";import{c as E}from"./cn-DOIGBiOF.js";import{c as v}from"./createLucideIcon-B_AfoRjS.js";import{C as k}from"./clipboard-pen-T1q2-2n7.js";import"./index-Bc2G9s8g.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=v("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=v("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),o=({canGoPrev:w,canGoNext:N,isLastQuestion:i=!1,onPrevious:h,onNext:j,onSubmit:b,flaggedCount:u=0,onReviewFlagged:n,className:G})=>{const C=i&&u>0&&!!n;return e.jsx("section",{className:E("w-full rounded-2xl border border-slate-200 dark:border-gray-800 bg-gradient-to-r from-white to-slate-50/70 dark:from-gray-900 dark:to-gray-850 p-3 md:p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.5)]",G),"aria-label":"Exam question actions",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx(a,{variant:"accent",icon:e.jsx(q,{size:18,className:"text-white/90"}),onClick:h,disabled:!w,className:"w-full sm:w-auto min-w-0 sm:min-w-[122px] justify-center",children:"Previous"}),e.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 justify-end flex-wrap sm:flex-nowrap",children:[C&&n&&e.jsx(a,{variant:"warning",icon:e.jsx(k,{size:18,className:"text-amber-700"}),onClick:n,className:"flex-1 sm:flex-none justify-center text-xs sm:text-sm",children:`Review Flagged (${u})`}),e.jsx(a,{variant:"accent",icon:e.jsx(L,{size:18,className:"text-white/90"}),iconPlacement:"right",onClick:j,disabled:!N,className:"flex-1 sm:flex-none min-w-0 sm:min-w-[122px] justify-center",children:"Next"}),i&&e.jsx(a,{variant:"danger",onClick:b,className:"w-full sm:w-auto justify-center",children:"Submit Exam"})]})]})})};o.displayName="ExamIntegrityStudentExamNavigationBar";o.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentExamNavigationBar",props:{canGoPrev:{required:!0,tsType:{name:"boolean"},description:""},canGoNext:{required:!0,tsType:{name:"boolean"},description:""},isLastQuestion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},flaggedCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReviewFlagged:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Organisms/ExamIntegrityStudentExamNavigationBar",component:o,parameters:{layout:"padded"},tags:["autodocs"]},t={args:{canGoPrev:!0,canGoNext:!0,isLastQuestion:!1,flaggedCount:2}},r={args:{canGoPrev:!1,canGoNext:!0,isLastQuestion:!1,flaggedCount:0}},s={args:{canGoPrev:!0,canGoNext:!1,isLastQuestion:!0,flaggedCount:3,onReviewFlagged:()=>{}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    canGoPrev: true,
    canGoNext: true,
    isLastQuestion: false,
    flaggedCount: 2
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    canGoPrev: false,
    canGoNext: true,
    isLastQuestion: false,
    flaggedCount: 0
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,x,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    canGoPrev: true,
    canGoNext: false,
    isLastQuestion: true,
    flaggedCount: 3,
    onReviewFlagged: () => {}
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const I=["Default","FirstQuestion","LastQuestionWithFlagged"];export{t as Default,r as FirstQuestion,s as LastQuestionWithFlagged,I as __namedExportsOrder,F as default};
