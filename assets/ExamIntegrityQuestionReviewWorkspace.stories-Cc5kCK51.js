import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as o}from"./Button-CHA6iI3F.js";import{c as N}from"./cn-DOIGBiOF.js";import"./index-Bc2G9s8g.js";const p=({questions:m=[],currentIndex:t,onSelectIndex:n,onPrev:x,onNext:g,saveError:d,children:b,className:y})=>{const r=m.length;return e.jsxs("div",{className:N("p-4",y),children:[d&&e.jsx("div",{className:"mb-3 p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-xs",children:d}),r>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:m.map((s,i)=>e.jsx(o,{type:"button",onClick:()=>n(i),variant:t===i?"primary":"neutral",size:"sm",className:"!px-3 !py-1 text-xs",children:`Question ${s.questionNumber&&s.questionNumber>0?s.questionNumber:i+1}`},s.id))}),b,e.jsxs("div",{className:"flex gap-2 mt-4 items-center",children:[e.jsx(o,{variant:"neutral",size:"sm",disabled:t===0,onClick:x??(()=>n(Math.max(0,t-1))),className:"!px-3 !py-1 text-xs",children:"← Prev"}),e.jsx("span",{className:"flex-1 text-center text-xs text-gray-500 dark:text-gray-400",children:r>0?`${t+1} / ${r}`:"No questions"}),e.jsx(o,{variant:"neutral",size:"sm",disabled:t>=r-1,onClick:g??(()=>n(Math.min(r-1,t+1))),className:"!px-3 !py-1 text-xs",children:"Next →"})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityQuestionReviewWorkspace",props:{questions:{required:!1,tsType:{name:"Array",elements:[{name:"ReviewQuestionItem"}],raw:"ReviewQuestionItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},currentIndex:{required:!0,tsType:{name:"number"},description:""},onSelectIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onPrev:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},saveError:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Organisms/ExamIntegrityQuestionReviewWorkspace",component:p,parameters:{layout:"padded"}},a={args:{questions:[{id:"q1",questionNumber:1},{id:"q2",questionNumber:2},{id:"q3",questionNumber:3}],currentIndex:0,onSelectIndex:()=>{},children:e.jsx("div",{className:"p-4 bg-gray-50 rounded",children:"Question content display"})}};var u,c,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    questions: [{
      id: 'q1',
      questionNumber: 1
    }, {
      id: 'q2',
      questionNumber: 2
    }, {
      id: 'q3',
      questionNumber: 3
    }],
    currentIndex: 0,
    onSelectIndex: () => {},
    children: <div className="p-4 bg-gray-50 rounded">Question content display</div>
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,w as default};
