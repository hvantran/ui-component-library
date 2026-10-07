import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as a}from"./Button-CHA6iI3F.js";import{c as E}from"./cn-DOIGBiOF.js";import{c as y}from"./createLucideIcon-B_AfoRjS.js";import{C as k}from"./clipboard-pen-T1q2-2n7.js";import"./index-Bc2G9s8g.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=y("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),o=({canGoPrev:h,canGoNext:N,isLastQuestion:i=!1,onPrevious:w,onNext:b,onSubmit:j,flaggedCount:d=0,onReviewFlagged:n,className:G})=>{const C=i&&d>0&&!!n;return e.jsx("section",{className:E("w-full rounded-2xl border border-slate-200 dark:border-gray-800 bg-gradient-to-r from-white to-slate-50/70 dark:from-gray-900 dark:to-gray-850 p-3 md:p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.5)]",G),"aria-label":"Exam question actions",children:e.jsxs("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:justify-between",children:[e.jsx(a,{variant:"accent",icon:e.jsx(q,{size:18,className:"text-white/90"}),onClick:w,disabled:!h,className:"min-w-[122px] self-start",children:"Previous"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2 md:gap-3 md:justify-end",children:[C&&n&&e.jsx(a,{variant:"warning",icon:e.jsx(k,{size:18,className:"text-amber-700"}),onClick:n,children:`Review Flagged (${d})`}),e.jsx(a,{variant:"accent",icon:e.jsx(L,{size:18,className:"text-white/90"}),iconPlacement:"right",onClick:b,disabled:!N,className:"min-w-[122px]",children:"Next"}),i&&e.jsx(a,{variant:"danger",onClick:j,children:"Submit Exam"})]})]})})};o.displayName="ExamIntegrityStudentExamNavigationBar";o.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentExamNavigationBar",props:{canGoPrev:{required:!0,tsType:{name:"boolean"},description:""},canGoNext:{required:!0,tsType:{name:"boolean"},description:""},isLastQuestion:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},flaggedCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onPrevious:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReviewFlagged:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Organisms/ExamIntegrityStudentExamNavigationBar",component:o,parameters:{layout:"padded"},tags:["autodocs"]},t={args:{canGoPrev:!0,canGoNext:!0,isLastQuestion:!1,flaggedCount:2}},r={args:{canGoPrev:!1,canGoNext:!0,isLastQuestion:!1,flaggedCount:0}},s={args:{canGoPrev:!0,canGoNext:!1,isLastQuestion:!0,flaggedCount:3,onReviewFlagged:()=>{}}};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    canGoPrev: true,
    canGoNext: true,
    isLastQuestion: false,
    flaggedCount: 2
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var l,g,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    canGoPrev: false,
    canGoNext: true,
    isLastQuestion: false,
    flaggedCount: 0
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,x,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    canGoPrev: true,
    canGoNext: false,
    isLastQuestion: true,
    flaggedCount: 3,
    onReviewFlagged: () => {}
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const I=["Default","FirstQuestion","LastQuestionWithFlagged"];export{t as Default,r as FirstQuestion,s as LastQuestionWithFlagged,I as __namedExportsOrder,F as default};
