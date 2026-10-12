import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{C as N}from"./Chip-fSVeVCeF.js";import{S as o}from"./Skeleton-BFTnpoLa.js";import{T as q}from"./triangle-alert-6PYshL0S.js";import{T as P}from"./trash-2-DVbRFama.js";import{I as Y}from"./image-BiFBNdzW.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./createLucideIcon-B_AfoRjS.js";const A=/([.…_]{3,})/g;function j(s){const n=s.split(A);return e.jsx(e.Fragment,{children:n.map((r,t)=>A.test(r)?e.jsx("span",{className:"inline-block min-w-[72px] border-b-2 border-blue-600 mx-1 align-bottom h-[1.15em]"},t):e.jsx("span",{children:r},t))})}function $(s){return/\d/.test(s)&&/[+\-x×÷:]/.test(s)}function V(s){return s.split(/[;\n]/).map(n=>n.trim()).filter(Boolean)}const G=["A","B","C","D","E","F"];function H({q:s,selectedAnswer:n,onCorrectAnswerChange:r}){return e.jsxs("div",{children:[e.jsx("p",{className:"text-[0.95rem] font-medium text-slate-800 mb-4 whitespace-pre-wrap leading-relaxed",children:j(s.content)}),e.jsx("div",{className:"flex flex-col gap-2",children:(s.options??[]).map((t,a)=>{const i=G[a]??String(a+1),u=n&&n===i||s.correctAnswer===i||s.correctAnswer===t||(s.correctAnswer??"").toUpperCase().startsWith(i),p=t.startsWith("data:image/"),h=t.includes("data:image/");let c=t,d=null;if(p)c="",d=t;else if(h){const g=t.indexOf("data:image/");c=t.substring(0,g).trim(),d=t.substring(g).trim()}return e.jsxs("div",{className:`flex items-start gap-3 px-4 py-2 rounded-lg border transition-all ${u?"border-blue-600 bg-blue-50 text-blue-950":"border-slate-200 bg-slate-50 text-slate-800"} ${r?"cursor-pointer hover:border-blue-400":"cursor-default"}`,onClick:()=>r==null?void 0:r(i),children:[e.jsx("div",{className:`min-w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${u?"border-blue-600 bg-blue-600 text-white":"border-slate-300 text-slate-600"}`,children:e.jsx("span",{className:"text-[0.72rem] font-bold",children:i})}),e.jsxs("div",{className:"flex-1 flex flex-col gap-1.5 pt-0.5",children:[c?e.jsx("span",{className:"text-[0.9rem] leading-relaxed",children:j(c)}):null,d?e.jsx("div",{className:"rounded border border-slate-200 overflow-hidden bg-white max-h-36 max-w-xs flex items-center justify-center p-1",children:e.jsx("img",{src:d,alt:`Option ${i}`,className:"max-h-32 object-contain"})}):null]})]},a)})})]})}function K({q:s}){const n=V(s.content),r=n.length>0&&!$(n[0])?n[0]:null,t=r?n.slice(1):n;return e.jsxs("div",{children:[r&&e.jsx("p",{className:"text-[0.95rem] font-medium text-slate-800 mb-3",children:r}),e.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3",children:t.map((a,i)=>e.jsx("div",{className:"p-3 rounded-lg border border-slate-200 bg-slate-50 font-mono text-[0.9rem] text-slate-800 leading-loose break-words",children:j(a)},i))})]})}function U({q:s}){var r;const n=((r=s.rubric)==null?void 0:r.keywords)??[];return e.jsxs("div",{children:[e.jsx("p",{className:"text-[0.95rem] font-medium text-slate-800 whitespace-pre-wrap leading-relaxed mb-4",children:j(s.content)}),n.length>0&&e.jsxs("div",{className:"flex flex-wrap gap-1.5 items-center",children:[e.jsx("span",{className:"text-xs text-slate-500",children:"Rubric keywords:"}),n.map(t=>e.jsx(N,{label:t,size:"sm",variant:"outlined"},t))]})]})}const W=({question:s,index:n,isLoading:r=!1,questionScore:t="",onQuestionScoreChange:a,onQuestionScoreBlur:i,questionImageData:u,onQuestionImageUpload:p,onQuestionImageRemove:h,selectedCorrectAnswer:c,onCorrectAnswerChange:d,onCorrectAnswerBlur:g})=>{if(r)return e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(o,{height:22,width:92}),e.jsx(o,{height:22,width:108}),e.jsx(o,{height:22,width:56})]}),e.jsxs("div",{className:"p-4 rounded-lg border border-slate-200 bg-white",children:[e.jsx(o,{height:18,width:"88%",className:"mb-2"}),e.jsx(o,{height:18,width:"96%",className:"mb-2"}),e.jsx(o,{height:18,width:"64%",className:"mb-4"}),e.jsx(o,{height:46,width:"100%",className:"mb-2"}),e.jsx(o,{height:46,width:"100%",className:"mb-2"}),e.jsx(o,{height:46,width:"100%"})]})]});const z=s.type==="MCQ"?"Multiple Choice":s.type==="ESSAY_SHORT"?"Short Answer":s.type==="ESSAY_LONG"?"Long Answer":"Essay / Calculation",F=s.type!=="MCQ"&&(s.content.includes(";")||/\d[^a-zA-ZÀ-ỹ]{0,10}[.…_]{3,}/.test(s.content)||/[+\-x×÷:]\s*\d.*[.…_]{3,}/.test(s.content)),C=s.parserWarnings??[],S=(s.parserConfidence??1)<.7,y=!!u;return e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center flex-wrap gap-2",children:[e.jsx("div",{className:"px-3 py-0.5 rounded-lg bg-blue-50 border border-blue-200",children:e.jsx("span",{className:"text-xs font-bold text-blue-700",children:`Question ${s.questionNumber>0?s.questionNumber:n+1}`})}),e.jsx(N,{label:z,size:"sm",variant:"outlined",className:"text-[0.7rem] h-[22px]"}),S&&e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(q,{size:15,className:"text-amber-500"}),e.jsxs("span",{className:"text-[0.7rem] text-amber-600",children:["Low confidence (",Math.round((s.parserConfidence??0)*100),"%)"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[a&&e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-600",children:"Score:"}),e.jsx("input",{type:"number",min:.5,step:.5,value:t,onChange:m=>{const l=m.target.value;if(l===""){a("");return}const x=Number(l);Number.isFinite(x)&&a(Math.max(0,x))},onBlur:i,className:"w-14 px-1.5 py-1 border border-slate-300 rounded text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),p&&e.jsxs("div",{className:"flex items-center gap-1",children:[y&&h&&e.jsx("button",{type:"button",onClick:h,className:"p-1 text-red-500 hover:text-red-700 transition",title:"Remove image",children:e.jsx(P,{size:16})}),e.jsxs("label",{className:"flex items-center gap-1 cursor-pointer px-2 py-1 rounded border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition",children:[e.jsx(Y,{size:14}),e.jsx("input",{type:"file",accept:"image/*",onChange:m=>{var x;const l=(x=m.target.files)==null?void 0:x[0];l&&p&&p(l),m.currentTarget.value=""},className:"hidden"}),e.jsx("span",{children:y?"Change":"Upload"})]})]})]})]}),e.jsxs("div",{className:`p-4 rounded-lg border bg-white ${S?"border-amber-300":"border-slate-200"}`,children:[y&&e.jsx("div",{className:"mb-4",children:e.jsx("img",{src:u,alt:"Question",className:"max-h-48 max-w-full rounded border border-slate-200 object-contain"})}),s.type==="MCQ"?e.jsx("div",{onBlur:g,children:e.jsx(H,{q:s,selectedAnswer:c,onCorrectAnswerChange:d})}):F?e.jsx(K,{q:s}):e.jsx(U,{q:s})]}),C.length>0&&e.jsx("div",{className:"mt-2 flex flex-wrap gap-1",children:C.map((m,l)=>e.jsx(N,{icon:e.jsx(q,{size:13}),label:m,size:"sm",color:"warning",variant:"outlined",className:"text-[0.7rem] h-[22px]"},l))})]})};W.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityQuestionDisplay",props:{question:{required:!0,tsType:{name:"DraftQuestionDTO"},description:""},index:{required:!0,tsType:{name:"number"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},questionScore:{required:!1,tsType:{name:"union",raw:"number | ''",elements:[{name:"number"},{name:"literal",value:"''"}]},description:"",defaultValue:{value:"''",computed:!1}},onQuestionScoreChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | '') => void",signature:{arguments:[{type:{name:"union",raw:"number | ''",elements:[{name:"number"},{name:"literal",value:"''"}]},name:"value"}],return:{name:"void"}}},description:""},onQuestionScoreBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},questionImageData:{required:!1,tsType:{name:"string"},description:""},onQuestionImageUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},onQuestionImageRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedCorrectAnswer:{required:!1,tsType:{name:"string"},description:""},onCorrectAnswerChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onCorrectAnswerBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ae={title:"Organisms/ExamIntegrityQuestionDisplay",component:W,parameters:{layout:"padded"},tags:["autodocs"]},f={args:{index:0,question:{id:"q-1",questionNumber:1,content:"Chữ số 5 trong số 45 678 có giá trị là bao nhiêu?",type:"MCQ",points:1,options:["5","50","500","5000"],correctAnswer:"D",parserConfidence:.95,truncated:!1},questionScore:1,selectedCorrectAnswer:"D"}},b={args:{index:1,question:{id:"q-2",questionNumber:2,content:`Đặt tính rồi tính;
125 + 345;
678 - 234`,type:"ESSAY_SHORT",points:2,parserConfidence:.88,truncated:!1},questionScore:2}},w={args:{index:2,question:{id:"q-3",questionNumber:3,content:"Nêu ý nghĩa lịch sử của chiến thắng Điện Biên Phủ.",type:"ESSAY_LONG",points:3,rubric:{keywords:["lừng lẫy năm châu","chấn động địa cầu","1954","thực dân Pháp"]},parserConfidence:.65,parserWarnings:["Low OCR confidence on source page 4"],truncated:!1},questionScore:3}},v={args:{index:3,question:{id:"q-4",questionNumber:4,content:"Chọn biển báo chỉ dẫn hướng đi bắt buộc:",type:"MCQ",points:1,options:['Biển 1 data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" fill="%232563eb"/><path d="M25 40h30M45 30l10 10-10 10" stroke="%23ffffff" stroke-width="6" fill="none"/></svg>','Biển 2 data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" fill="%23dc2626"/><path d="M25 25l30 30M55 25l-30 30" stroke="%23ffffff" stroke-width="6"/></svg>'],correctAnswer:"A",parserConfidence:.99,truncated:!1},questionScore:1,selectedCorrectAnswer:"A"}};var M,T,k;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    index: 0,
    question: {
      id: 'q-1',
      questionNumber: 1,
      content: 'Chữ số 5 trong số 45 678 có giá trị là bao nhiêu?',
      type: 'MCQ',
      points: 1,
      options: ['5', '50', '500', '5000'],
      correctAnswer: 'D',
      parserConfidence: 0.95,
      truncated: false
    },
    questionScore: 1,
    selectedCorrectAnswer: 'D'
  }
}`,...(k=(T=f.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var B,E,O;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    index: 1,
    question: {
      id: 'q-2',
      questionNumber: 2,
      content: 'Đặt tính rồi tính;\\n125 + 345;\\n678 - 234',
      type: 'ESSAY_SHORT',
      points: 2,
      parserConfidence: 0.88,
      truncated: false
    },
    questionScore: 2
  }
}`,...(O=(E=b.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var Q,_,L;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    index: 2,
    question: {
      id: 'q-3',
      questionNumber: 3,
      content: 'Nêu ý nghĩa lịch sử của chiến thắng Điện Biên Phủ.',
      type: 'ESSAY_LONG',
      points: 3,
      rubric: {
        keywords: ['lừng lẫy năm châu', 'chấn động địa cầu', '1954', 'thực dân Pháp']
      },
      parserConfidence: 0.65,
      parserWarnings: ['Low OCR confidence on source page 4'],
      truncated: false
    },
    questionScore: 3
  }
}`,...(L=(_=w.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var D,I,R;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    index: 3,
    question: {
      id: 'q-4',
      questionNumber: 4,
      content: 'Chọn biển báo chỉ dẫn hướng đi bắt buộc:',
      type: 'MCQ',
      points: 1,
      options: ['Biển 1 data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" fill="%232563eb"/><path d="M25 40h30M45 30l10 10-10 10" stroke="%23ffffff" stroke-width="6" fill="none"/></svg>', 'Biển 2 data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" fill="%23dc2626"/><path d="M25 25l30 30M55 25l-30 30" stroke="%23ffffff" stroke-width="6"/></svg>'],
      correctAnswer: 'A',
      parserConfidence: 0.99,
      truncated: false
    },
    questionScore: 1,
    selectedCorrectAnswer: 'A'
  }
}`,...(R=(I=v.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const oe=["MultipleChoice","Calculation","EssayWithRubric","MultipleChoiceWithOptionsImages"];export{b as Calculation,w as EssayWithRubric,f as MultipleChoice,v as MultipleChoiceWithOptionsImages,oe as __namedExportsOrder,ae as default};
