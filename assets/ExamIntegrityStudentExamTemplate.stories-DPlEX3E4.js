import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as w}from"./index-Bc2G9s8g.js";import{c as l}from"./cn-DOIGBiOF.js";import{c as j}from"./createLucideIcon-B_AfoRjS.js";import{X as k}from"./x-DiakLl4d.js";import{C as c}from"./Card-C-7XTUWd.js";import{B as d}from"./Button-CHA6iI3F.js";import{T as S}from"./TimerDisplay-CBS_2x-y.js";import"./clock-CNNG55KQ.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=j("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]),t=({headerSlot:n,contentSlot:a,navigationSlot:x,sidebarSlot:r,footerSlot:m,children:p,className:g})=>{const[u,i]=w.useState(!1);return p?e.jsx("div",{className:l("min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#e9eef6] dark:from-gray-900 dark:to-gray-800",g),children:p}):e.jsxs("div",{className:l("min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900",g),children:[n&&e.jsx("header",{className:"sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800",children:n}),x&&e.jsx("nav",{className:"w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 px-3 sm:px-4 py-2",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:x})}),e.jsxs("div",{className:"flex-1 flex w-full max-w-7xl mx-auto p-3 sm:p-6 gap-6",children:[e.jsx("main",{className:"flex-1 min-w-0",children:a}),r&&e.jsx("aside",{className:"w-80 shrink-0 hidden lg:block",children:r})]}),r&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button","data-testid":"mobile-sidebar-toggle-btn",onClick:()=>i(!0),"aria-label":"Open exam tools and flagged questions",className:"fixed bottom-20 right-4 z-30 lg:hidden p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-transform active:scale-95 flex items-center gap-1.5 text-xs font-bold",children:[e.jsx(E,{size:16}),e.jsx("span",{children:"Overview"})]}),u&&e.jsx("div",{"data-testid":"mobile-exam-sidebar-backdrop",onClick:()=>i(!1),className:"fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity","aria-hidden":"true"}),e.jsxs("aside",{"data-testid":"mobile-exam-sidebar",className:l("fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-gray-800 p-4 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col",u?"translate-x-0":"translate-x-full"),children:[e.jsxs("div",{className:"flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-gray-700 shrink-0",children:[e.jsx("span",{className:"font-bold text-sm text-gray-900 dark:text-gray-100",children:"Exam Overview & Tools"}),e.jsx("button",{type:"button",onClick:()=>i(!1),className:"p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700","aria-label":"Close sidebar",children:e.jsx(k,{size:18})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:r})]})]}),m&&e.jsx("footer",{className:"sticky bottom-0 z-30 w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 py-3 px-3 sm:px-6 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:m})})]})};t.displayName="ExamIntegrityStudentExamTemplate";t.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentExamTemplate",props:{headerSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},navigationSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sidebarSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footerSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"Templates/ExamIntegrityStudentExamTemplate",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},s={render:()=>e.jsx(t,{headerSlot:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[e.jsx("div",{className:"font-semibold text-lg text-gray-900 dark:text-gray-100",children:"CS301: Advanced Operating Systems Final"}),e.jsx(S,{initialSeconds:3540})]}),navigationSlot:e.jsx("div",{className:"flex items-center gap-2 overflow-x-auto",children:Array.from({length:10}).map((n,a)=>e.jsx("button",{className:`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center ${a===2?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:a+1},a))}),contentSlot:e.jsxs(c,{className:"p-6 space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-gray-100",children:"Question 3 of 10"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Explain the difference between preemptive and cooperative multitasking in modern kernels."}),e.jsx("textarea",{rows:8,className:"w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700",placeholder:"Type your answer here..."})]}),sidebarSlot:e.jsxs(c,{className:"p-4 space-y-3",children:[e.jsx("h4",{className:"font-semibold text-sm text-gray-700 dark:text-gray-200",children:"Exam Instructions"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Ensure webcam is visible at all times. Do not switch browser tabs or open external developer tools."})]}),footerSlot:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"secondary",children:"Previous"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(d,{variant:"outline",children:"Save Draft"}),e.jsx(d,{variant:"primary",children:"Next Question"})]})]})})},o={render:()=>e.jsx(t,{children:e.jsxs("div",{className:"max-w-4xl mx-auto py-12 px-6 space-y-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Exam Session Active"}),e.jsx(c,{className:"p-6",children:e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"This mode matches the exact StudentManExamLayout container used across exam sessions."})})]})})};var y,f,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ExamIntegrityStudentExamTemplate headerSlot={<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            CS301: Advanced Operating Systems Final
          </div>
          <TimerDisplay initialSeconds={3540} />
        </div>} navigationSlot={<div className="flex items-center gap-2 overflow-x-auto">
          {Array.from({
      length: 10
    }).map((_, i) => <button key={i} className={\`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center \${i === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}>
              {i + 1}
            </button>)}
        </div>} contentSlot={<Card className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Question 3 of 10</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Explain the difference between preemptive and cooperative multitasking in modern kernels.
          </p>
          <textarea rows={8} className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700" placeholder="Type your answer here..." />
        </Card>} sidebarSlot={<Card className="p-4 space-y-3">
          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Exam Instructions</h4>
          <p className="text-xs text-gray-500">
            Ensure webcam is visible at all times. Do not switch browser tabs or open external developer tools.
          </p>
        </Card>} footerSlot={<>
          <Button variant="secondary">Previous</Button>
          <div className="flex gap-3">
            <Button variant="outline">Save Draft</Button>
            <Button variant="primary">Next Question</Button>
          </div>
        </>} />
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,v,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ExamIntegrityStudentExamTemplate>
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Exam Session Active</h1>
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300">
            This mode matches the exact StudentManExamLayout container used across exam sessions.
          </p>
        </Card>
      </div>
    </ExamIntegrityStudentExamTemplate>
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const A=["Default","LayoutWrapperMode"];export{s as Default,o as LayoutWrapperMode,A as __namedExportsOrder,M as default};
