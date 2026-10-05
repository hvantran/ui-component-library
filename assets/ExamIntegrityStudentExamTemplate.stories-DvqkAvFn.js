import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as p}from"./cn-DOIGBiOF.js";import{C as i}from"./Card-C-7XTUWd.js";import{B as n}from"./Button-CHA6iI3F.js";import{T as N}from"./TimerDisplay-CBS_2x-y.js";import"./index-Bc2G9s8g.js";import"./clock-CNNG55KQ.js";import"./createLucideIcon-B_AfoRjS.js";const t=({headerSlot:o,contentSlot:a,navigationSlot:l,sidebarSlot:d,footerSlot:c,children:m,className:x})=>m?e.jsx("div",{className:p("min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#e9eef6] dark:from-gray-900 dark:to-gray-800",x),children:m}):e.jsxs("div",{className:p("min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900",x),children:[o&&e.jsx("header",{className:"sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800",children:o}),l&&e.jsx("nav",{className:"w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 px-4 py-2",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:l})}),e.jsxs("div",{className:"flex-1 flex w-full max-w-7xl mx-auto p-4 sm:p-6 gap-6",children:[e.jsx("main",{className:"flex-1 min-w-0",children:a}),d&&e.jsx("aside",{className:"w-80 shrink-0 hidden lg:block",children:d})]}),c&&e.jsx("footer",{className:"sticky bottom-0 z-30 w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 py-3 px-6 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:c})})]});t.displayName="ExamIntegrityStudentExamTemplate";t.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityStudentExamTemplate",props:{headerSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},contentSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},navigationSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sidebarSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footerSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Templates/ExamIntegrityStudentExamTemplate",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={render:()=>e.jsx(t,{headerSlot:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[e.jsx("div",{className:"font-semibold text-lg text-gray-900 dark:text-gray-100",children:"CS301: Advanced Operating Systems Final"}),e.jsx(N,{initialSeconds:3540})]}),navigationSlot:e.jsx("div",{className:"flex items-center gap-2 overflow-x-auto",children:Array.from({length:10}).map((o,a)=>e.jsx("button",{className:`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center ${a===2?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:a+1},a))}),contentSlot:e.jsxs(i,{className:"p-6 space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-gray-100",children:"Question 3 of 10"}),e.jsx("p",{className:"text-gray-700 dark:text-gray-300",children:"Explain the difference between preemptive and cooperative multitasking in modern kernels."}),e.jsx("textarea",{rows:8,className:"w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700",placeholder:"Type your answer here..."})]}),sidebarSlot:e.jsxs(i,{className:"p-4 space-y-3",children:[e.jsx("h4",{className:"font-semibold text-sm text-gray-700 dark:text-gray-200",children:"Exam Instructions"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Ensure webcam is visible at all times. Do not switch browser tabs or open external developer tools."})]}),footerSlot:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"secondary",children:"Previous"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(n,{variant:"outline",children:"Save Draft"}),e.jsx(n,{variant:"primary",children:"Next Question"})]})]})})},s={render:()=>e.jsx(t,{children:e.jsxs("div",{className:"max-w-4xl mx-auto py-12 px-6 space-y-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"Exam Session Active"}),e.jsx(i,{className:"p-6",children:e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"This mode matches the exact StudentManExamLayout container used across exam sessions."})})]})})};var y,g,u;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const I=["Default","LayoutWrapperMode"];export{r as Default,s as LayoutWrapperMode,I as __namedExportsOrder,C as default};
