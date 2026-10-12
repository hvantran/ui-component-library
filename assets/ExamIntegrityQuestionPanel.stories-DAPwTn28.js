import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as u}from"./Skeleton-BFTnpoLa.js";import{E as fe}from"./ExamIntegrityStudentQuestionPanelHeader-0KrnfkTn.js";import{R as we}from"./index-Bc2G9s8g.js";import{M as G}from"./MathQuestionInput-CpEffS00.js";import"./SplitMergeArithmeticInput-B4pjuku-.js";import"./BridgeTenArithmeticInput-Dg3QYGiq.js";import{a as $}from"./mathFormulaAnalyzer-D_WA29dh.js";import"./cn-DOIGBiOF.js";import"./Button-CHA6iI3F.js";import"./flag-BUX11eTT.js";import"./createLucideIcon-B_AfoRjS.js";const Ae="      ..................................................",ve=/^(.+?)\s*(?:\.{2,}|…+|\?|_{2,})\s*(.+)$/u,Te=/^[\d\s()+\-*/xX×÷:.,]+$/u,Ee=/^(?:\d+(?:[.,]\d+)?\s*(?:kg|g|mg|t|km|m|cm|mm|dm|l|ml|dl|cl|h|min|s)\s*)+$/iu;function F(a){const n=a.trim();return!n||/^[.…_?]+$/u.test(n)?!1:Ee.test(n)?!0:/[\p{L}]/u.test(n.replace(/[xX]/g,""))?!1:Te.test(n)}function Y(a,n){if(!a||typeof a!="string")return null;const m=a.trim().replace(/^[a-zA-Z\d]+[.,:\)\-]\s+/,"").trim().match(ve);if(!m)return null;const c=m[1].replace(/^[.…_?\s]+|[.…_?\s]+$/g,"").trim(),r=m[2].replace(/^[.…_?\s]+|[.…_?\s]+$/g,"").trim();return!c||!r||!F(c)||!F(r)||/[=]$/.test(c)||/^=/.test(r)?null:{left:c,right:r}}const Se=["<","=",">"],D=({left:a,right:n,value:l,disabled:m,onChange:c})=>e.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap",children:[e.jsx("span",{className:"text-base font-mono font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 whitespace-nowrap",children:a}),e.jsx("div",{className:"flex gap-2",children:Se.map(r=>{const g=l===r;return e.jsx("button",{type:"button",disabled:m,onClick:()=>c(r),className:`w-11 h-11 rounded-xl border-2 text-lg font-bold transition-all duration-150 select-none
              ${g?"border-sky-500 bg-sky-500 text-white shadow-[0_4px_12px_-4px_rgba(14,165,233,0.6)]":"border-slate-300 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50"}
              ${m?"cursor-not-allowed opacity-50":"cursor-pointer"}
            `,children:r},r)})}),e.jsx("span",{className:"text-base font-mono font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 whitespace-nowrap",children:n})]}),Ne={A:{bg:"bg-amber-100",text:"text-amber-900",border:"border-amber-300"},B:{bg:"bg-sky-100",text:"text-sky-900",border:"border-sky-300"},C:{bg:"bg-emerald-100",text:"text-emerald-900",border:"border-emerald-300"},D:{bg:"bg-rose-100",text:"text-rose-900",border:"border-rose-300"}},ue=({questionNumber:a,questionText:n,questionStem:l,questionType:m,options:c,questionParts:r,selectedAnswer:g,selectedAnswerParts:P,disabled:d=!1,onAnswerChange:y,onAnswerPartsChange:v,imageData:T,gradeLevel:p,subject:E})=>{const S=m==="MCQ",f=m==="ESSAY_LONG",w=!S&&((r==null?void 0:r.length)??0)>0,b=new Map((P??[]).map(t=>[t.key,t.answer])),[x,N]=we.useState(!1),B=p==null?void 0:p.match(/(?:grade|lop|lớp)\s*(\d+)/iu),Q=B?Number(B[1]):null,L=Q!==null&&Q<=5,ye=!!(E&&/(?:english|tiếng anh|reading)/iu.test(E)),R=(t,o)=>{!r||!v||v(r.map(s=>({key:s.key,answer:s.key===t?o:b.get(s.key)??""})))},be=()=>{if(typeof window<"u"&&"speechSynthesis"in window)if(x)window.speechSynthesis.cancel(),N(!1);else{const t=[l,n].filter(Boolean).join(". "),o=new SpeechSynthesisUtterance(t);o.rate=.9,o.onend=()=>N(!1),o.onerror=()=>N(!1),N(!0),window.speechSynthesis.speak(o)}};return e.jsxs(e.Fragment,{children:[L&&ye&&e.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-900",children:[e.jsx("span",{children:"📖 Reading Tools:"}),e.jsx("span",{className:"px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-950 font-bold",children:"Story Mode"})]}),e.jsx("button",{type:"button",onClick:be,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition shadow-sm ${x?"bg-amber-400 text-amber-950 ring-2 ring-amber-300 animate-pulse":"bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100"}`,children:e.jsx("span",{children:x?"⏹️ Stop Reading":"🔊 Read Aloud"})})]}),(!w||l)&&e.jsx("div",{className:`${L?"text-lg md:text-xl font-medium leading-relaxed text-slate-900 mb-6 p-4 rounded-2xl bg-amber-50/40 border border-amber-100/80":"text-base md:text-[17px] font-normal leading-7 text-slate-900 mb-6"} break-words whitespace-pre-line`,children:w?l:n}),T&&e.jsx("div",{className:"mb-6 flex justify-center bg-slate-50 border border-slate-200 rounded-xl p-2 md:p-3",children:e.jsx("img",{src:T,alt:"Question",className:"max-h-72 object-contain rounded"})}),S&&c?(()=>{const t=c.filter(s=>s.text.trim()!==""||!!s.imageBase64),o=t.length===3?"grid-cols-3":"grid-cols-1 sm:grid-cols-2";return e.jsx("div",{className:`grid ${o} gap-4`,children:t.map((s,h)=>{const i=s.key??s.label??String(h+1),A=g===i,I=Ne[i.toUpperCase()]??{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"};return L?e.jsxs("button",{type:"button",disabled:d,onClick:()=>y(i),className:`flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-150 min-h-[64px] select-none ${A?"border-emerald-500 bg-emerald-50 text-emerald-950 shadow-[0_4px_0_#059669] ring-2 ring-emerald-200 -translate-y-0.5":"border-amber-200/90 bg-white hover:border-amber-400 hover:bg-amber-50/50 shadow-[0_4px_0_#e2e8f0] active:translate-y-1 active:shadow-none"} ${d?"cursor-not-allowed opacity-60":"cursor-pointer"}`,children:[e.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[e.jsx("div",{className:`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm ${A?"bg-emerald-600 text-white border-emerald-700":`${I.bg} ${I.text} ${I.border}`}`,children:A?"✓":i}),s.text&&e.jsx("span",{className:"text-base font-semibold leading-relaxed text-slate-900 flex-1 sm:hidden",children:s.text})]}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2 w-full",children:[s.text&&e.jsx("span",{className:"text-base font-semibold leading-relaxed text-slate-900 hidden sm:inline",children:s.text}),s.imageBase64&&e.jsx("div",{className:"rounded-xl overflow-hidden bg-slate-50 border border-slate-200 max-h-40 flex items-center justify-center p-1",children:e.jsx("img",{src:s.imageBase64,alt:`Option ${i}`,className:"max-h-36 max-w-full object-contain rounded-lg"})})]})]},i):e.jsxs("label",{className:`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${A?"border-sky-500 bg-sky-50 shadow-[0_8px_20px_-18px_rgba(14,165,233,0.8)]":"border-slate-300 bg-white"} ${d?"cursor-not-allowed opacity-60":"hover:border-sky-400 hover:bg-slate-50"}`,children:[e.jsx("input",{type:"radio",name:`question-${a}`,value:i,checked:A,disabled:d,onChange:()=>y(i),className:"mt-1 accent-sky-600 flex-shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("span",{className:"text-sm leading-6 text-slate-900 block",children:[e.jsxs("strong",{children:[i,"."]}),s.text?e.jsxs(e.Fragment,{children:[" ",s.text]}):null]}),s.imageBase64&&e.jsx("div",{className:"mt-2 rounded-lg overflow-hidden bg-slate-50 border border-slate-200 max-h-40 flex items-center justify-center p-1",children:e.jsx("img",{src:s.imageBase64,alt:`Option ${i}`,className:"max-h-36 max-w-full object-contain rounded"})})]})]},i)})})})():w?e.jsx("div",{className:"flex flex-wrap gap-4",children:r==null?void 0:r.map(t=>e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 p-3.5 sm:p-4 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.45)] w-full sm:flex-1 sm:min-w-[calc(50%-0.5rem)] min-w-0 overflow-hidden",children:[e.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[e.jsx("div",{className:"min-w-9 h-9 px-2 rounded-full bg-sky-600 text-white text-sm font-bold flex items-center justify-center uppercase shadow-sm",children:t.key}),e.jsx("div",{className:"pt-1 min-w-0",children:e.jsx("p",{className:"text-sm md:text-[15px] leading-6 text-slate-900 break-words",children:t.prompt})})]}),(()=>{const o=Y(t.prompt);if(o&&!f)return e.jsx(D,{left:o.left,right:o.right,value:b.get(t.key)??"",disabled:d,onChange:i=>R(t.key,i)});const s=$(t.prompt);return["SIMPLE_ADDITION","SIMPLE_SUBTRACTION","SIMPLE_MULTIPLICATION","SIMPLE_DIVISION","COMPLEX_FORMULA"].includes(s.type)&&!f?e.jsx(G,{questionText:t.prompt,value:b.get(t.key)??"",disabled:d,tags:p?[p]:[],onChange:i=>R(t.key,i)}):e.jsx("textarea",{rows:4,placeholder:"Nhập câu trả lời cho phần này",value:b.get(t.key)??"",disabled:d,onChange:i=>R(t.key,i.target.value),className:"w-full text-sm leading-6 border border-slate-300 rounded-xl p-3 bg-white resize-vertical text-slate-900 outline-none focus:border-sky-400"})})()]},t.key))}):(()=>{const t=Y(n);if(t&&!f)return e.jsx(D,{left:t.left,right:t.right,value:g??"",disabled:d,onChange:h=>y(h)});const o=$(n);return["SIMPLE_ADDITION","SIMPLE_SUBTRACTION","SIMPLE_MULTIPLICATION","SIMPLE_DIVISION","COMPLEX_FORMULA"].includes(o.type)&&!f?e.jsx(G,{questionText:n,value:g??"",disabled:d,tags:p?[p]:[],onChange:h=>y(h)}):e.jsx("div",{className:"border-l-4 border-slate-300 pl-4",children:e.jsx("textarea",{rows:7,placeholder:Array(7).fill(Ae).join(`
`),value:g??"",disabled:d,onChange:h=>y(h.target.value),className:"w-full font-mono text-center text-sm leading-6 border border-dashed border-slate-300 rounded-xl p-3 bg-white resize-vertical text-slate-900 outline-none focus:border-sky-400"})})})()]})};ue.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityQuestionPanelContent",props:{questionNumber:{required:!0,tsType:{name:"number"},description:""},questionText:{required:!0,tsType:{name:"string"},description:""},questionStem:{required:!1,tsType:{name:"string"},description:""},questionType:{required:!0,tsType:{name:"union",raw:"'MCQ' | 'ESSAY_SHORT' | 'ESSAY_LONG'",elements:[{name:"literal",value:"'MCQ'"},{name:"literal",value:"'ESSAY_SHORT'"},{name:"literal",value:"'ESSAY_LONG'"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionOption"}],raw:"QuestionOption[]"},description:""},questionParts:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionPart"}],raw:"QuestionPart[]"},description:""},selectedAnswer:{required:!1,tsType:{name:"string"},description:""},selectedAnswerParts:{required:!1,tsType:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAnswerChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAnswerPartsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(parts: AnswerPart[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},name:"parts"}],return:{name:"void"}}},description:""},imageData:{required:!1,tsType:{name:"string"},description:""},gradeLevel:{required:!1,tsType:{name:"string"},description:""},subject:{required:!1,tsType:{name:"string"},description:""}}};const ke=a=>{if(!a)return null;const n=a.match(/(?:grade|lop|lớp)\s*(\d+)/iu);if(!n)return null;const l=Number(n[1]);return Number.isFinite(l)?l:null},_e=a=>{const n=ke(a);return n!==null&&n<=5?"elementary":n!==null&&n<=9?"middle":"high"},pe=({questionNumber:a,subject:n,gradeLevel:l,questionText:m,questionStem:c,questionType:r,options:g,questionParts:P,selectedAnswer:d,selectedAnswerParts:y,isFlagged:v=!1,disabled:T=!1,onAnswerChange:p,onAnswerPartsChange:E,onFlag:S,imageData:f,isLoading:w=!1})=>{const b=_e(l),x={elementary:{card:"border-cyan-200 border-l-cyan-500 shadow-[0_18px_40px_-28px_rgba(6,182,212,0.5)]",divider:"border-cyan-100"},middle:{card:"border-emerald-200 border-l-emerald-600 shadow-[0_18px_40px_-28px_rgba(16,185,129,0.5)]",divider:"border-emerald-100"},high:{card:"border-slate-200 border-l-sky-600 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)]",divider:"border-slate-200"}}[b];return w?e.jsxs("div",{className:`bg-white w-full border border-l-4 rounded-2xl p-4 sm:p-6 md:p-8 ${x.card}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-4 min-w-0 flex-1",children:[e.jsx(u,{width:40,height:40,variant:"rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(u,{width:140,height:14,className:"mb-2"}),e.jsx(u,{width:180,height:12})]})]}),e.jsx(u,{width:96,height:36,variant:"rounded"})]}),e.jsx("div",{className:`border-b mb-5 ${x.divider}`}),e.jsx(u,{width:"96%",height:18,className:"mb-2"}),e.jsx(u,{width:"88%",height:18,className:"mb-2"}),e.jsx(u,{width:"62%",height:18,className:"mb-6"}),e.jsx(u,{width:"100%",height:52,className:"mb-3"}),e.jsx(u,{width:"100%",height:52,className:"mb-3"}),e.jsx(u,{width:"100%",height:52,className:"mb-3"}),e.jsx(u,{width:"100%",height:52})]}):e.jsxs("div",{className:`bg-white w-full border border-l-4 rounded-2xl p-4 sm:p-6 md:p-8 ${x.card}`,children:[e.jsx(fe,{questionNumber:a,subject:n,gradeLevel:l,tone:b,isFlagged:v,onFlag:S}),e.jsx("div",{className:`border-b mb-5 ${x.divider}`}),e.jsx(ue,{questionNumber:a,questionText:m,questionStem:c,questionType:r,options:g,questionParts:P,selectedAnswer:d,selectedAnswerParts:y,disabled:T,onAnswerChange:p,onAnswerPartsChange:E,imageData:f,gradeLevel:l,subject:n})]})};pe.__docgenInfo={description:`Organism — ExamIntegrityQuestionPanel

Exam question paper presentation organism with grade tone styling,
question panel header, and interactive question content (MCQ/Essay/Math).`,methods:[],displayName:"ExamIntegrityQuestionPanel",props:{questionNumber:{required:!0,tsType:{name:"number"},description:""},subject:{required:!1,tsType:{name:"string"},description:""},gradeLevel:{required:!1,tsType:{name:"string"},description:""},questionText:{required:!0,tsType:{name:"string"},description:""},questionStem:{required:!1,tsType:{name:"string"},description:""},questionType:{required:!0,tsType:{name:"union",raw:"'MCQ' | 'ESSAY_SHORT' | 'ESSAY_LONG'",elements:[{name:"literal",value:"'MCQ'"},{name:"literal",value:"'ESSAY_SHORT'"},{name:"literal",value:"'ESSAY_LONG'"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionOption"}],raw:"QuestionOption[]"},description:""},questionParts:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionPart"}],raw:"QuestionPart[]"},description:""},selectedAnswer:{required:!1,tsType:{name:"string"},description:""},selectedAnswerParts:{required:!1,tsType:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},description:""},isFlagged:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAnswerChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAnswerPartsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(parts: AnswerPart[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},name:"parts"}],return:{name:"void"}}},description:""},onFlag:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},imageData:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Fe={title:"Organisms/ExamIntegrityQuestionPanel",component:pe,parameters:{layout:"padded"},tags:["autodocs"]},k={args:{questionNumber:1,subject:"Math",gradeLevel:"Grade 3",questionText:"Tính: 25 + 17 = ?",questionType:"MCQ",options:[{key:"A",text:"42"},{key:"B",text:"32"},{key:"C",text:"52"},{key:"D",text:"40"}],selectedAnswer:"A",onAnswerChange:()=>{},onFlag:()=>{}}},_={args:{questionNumber:5,subject:"Science",gradeLevel:"Grade 8",questionText:"Which organelle is known as the powerhouse of the cell?",questionType:"MCQ",options:[{key:"A",text:"Nucleus"},{key:"B",text:"Mitochondria"},{key:"C",text:"Ribosome"},{key:"D",text:"Endoplasmic Reticulum"}],selectedAnswer:"",onAnswerChange:()=>{},onFlag:()=>{}}},j={args:{questionNumber:2,subject:"Literature",gradeLevel:"Grade 10",questionText:'Nêu cảm nhận của em về bài thơ "Đoàn thuyền đánh cá" của Huy Cận.',questionType:"ESSAY_LONG",selectedAnswer:"",onAnswerChange:()=>{},onFlag:()=>{}}},M={args:{questionNumber:1,questionText:"",questionType:"MCQ",isLoading:!0,onAnswerChange:()=>{}}},C={args:{questionNumber:1,subject:"Toán",gradeLevel:"Grade 1",questionStem:"Số?",questionText:"Số?",questionType:"ESSAY_SHORT",questionParts:[{key:"A",prompt:"6 + 8 = ........."},{key:"B",prompt:"18 - 6 = ........."},{key:"C",prompt:"12 - 9 = ........."},{key:"D",prompt:"7 + 5 = ........."},{key:"E",prompt:"12 - 9 = ........."},{key:"F",prompt:"15 - 7 = ........."}],selectedAnswerParts:[],onAnswerChange:()=>{},onAnswerPartsChange:()=>{},onFlag:()=>{}}},ge='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="%2338bdf8" stroke="%230284c7" stroke-width="4"/></svg>',xe='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect x="15" y="15" width="90" height="90" fill="%23f472b6" stroke="%23db2777" stroke-width="4" rx="8"/></svg>',he='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><polygon points="60,15 105,105 15,105" fill="%23facc15" stroke="%23ca8a04" stroke-width="4"/></svg>',je='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><polygon points="60,10 75,45 112,48 83,72 92,108 60,88 28,108 37,72 8,48 45,45" fill="%234ade80" stroke="%2316a34a" stroke-width="3"/></svg>',q={args:{questionNumber:4,subject:"Geometry",gradeLevel:"Grade 7",questionText:"Which shape represents a regular hexagon with equal sides and angles?",questionType:"MCQ",options:[{key:"A",text:"Circle",imageBase64:ge},{key:"B",text:"Square",imageBase64:xe},{key:"C",text:"Triangle",imageBase64:he},{key:"D",text:"Star polygon",imageBase64:je}],selectedAnswer:"B",onAnswerChange:()=>{},onFlag:()=>{}}},O={args:{questionNumber:3,subject:"Toán",gradeLevel:"Grade 2",questionText:"Hình nào dưới đây là hình tròn?",questionType:"MCQ",options:[{key:"A",text:"Hình tròn",imageBase64:ge},{key:"B",text:"Hình vuông",imageBase64:xe},{key:"C",text:"Hình tam giác",imageBase64:he}],selectedAnswer:"A",onAnswerChange:()=>{},onFlag:()=>{}}};var H,U,W;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    questionNumber: 1,
    subject: 'Math',
    gradeLevel: 'Grade 3',
    questionText: 'Tính: 25 + 17 = ?',
    questionType: 'MCQ',
    options: [{
      key: 'A',
      text: '42'
    }, {
      key: 'B',
      text: '32'
    }, {
      key: 'C',
      text: '52'
    }, {
      key: 'D',
      text: '40'
    }],
    selectedAnswer: 'A',
    onAnswerChange: () => {},
    onFlag: () => {}
  }
}`,...(W=(U=k.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var V,z,X;_.parameters={..._.parameters,docs:{...(V=_.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    questionNumber: 5,
    subject: 'Science',
    gradeLevel: 'Grade 8',
    questionText: 'Which organelle is known as the powerhouse of the cell?',
    questionType: 'MCQ',
    options: [{
      key: 'A',
      text: 'Nucleus'
    }, {
      key: 'B',
      text: 'Mitochondria'
    }, {
      key: 'C',
      text: 'Ribosome'
    }, {
      key: 'D',
      text: 'Endoplasmic Reticulum'
    }],
    selectedAnswer: '',
    onAnswerChange: () => {},
    onFlag: () => {}
  }
}`,...(X=(z=_.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var K,Z,J;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    questionNumber: 2,
    subject: 'Literature',
    gradeLevel: 'Grade 10',
    questionText: 'Nêu cảm nhận của em về bài thơ "Đoàn thuyền đánh cá" của Huy Cận.',
    questionType: 'ESSAY_LONG',
    selectedAnswer: '',
    onAnswerChange: () => {},
    onFlag: () => {}
  }
}`,...(J=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var ee,te,ne;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    questionNumber: 1,
    questionText: '',
    questionType: 'MCQ',
    isLoading: true,
    onAnswerChange: () => {}
  }
}`,...(ne=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,re,ae;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    questionNumber: 1,
    subject: 'Toán',
    gradeLevel: 'Grade 1',
    questionStem: 'Số?',
    questionText: 'Số?',
    questionType: 'ESSAY_SHORT',
    questionParts: [{
      key: 'A',
      prompt: '6 + 8 = .........'
    }, {
      key: 'B',
      prompt: '18 - 6 = .........'
    }, {
      key: 'C',
      prompt: '12 - 9 = .........'
    }, {
      key: 'D',
      prompt: '7 + 5 = .........'
    }, {
      key: 'E',
      prompt: '12 - 9 = .........'
    }, {
      key: 'F',
      prompt: '15 - 7 = .........'
    }],
    selectedAnswerParts: [],
    onAnswerChange: () => {},
    onAnswerPartsChange: () => {},
    onFlag: () => {}
  }
}`,...(ae=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ie,oe,le;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    questionNumber: 4,
    subject: 'Geometry',
    gradeLevel: 'Grade 7',
    questionText: 'Which shape represents a regular hexagon with equal sides and angles?',
    questionType: 'MCQ',
    options: [{
      key: 'A',
      text: 'Circle',
      imageBase64: SAMPLE_GEOMETRY_CIRCLE
    }, {
      key: 'B',
      text: 'Square',
      imageBase64: SAMPLE_GEOMETRY_SQUARE
    }, {
      key: 'C',
      text: 'Triangle',
      imageBase64: SAMPLE_GEOMETRY_TRIANGLE
    }, {
      key: 'D',
      text: 'Star polygon',
      imageBase64: SAMPLE_GEOMETRY_STAR
    }],
    selectedAnswer: 'B',
    onAnswerChange: () => {},
    onFlag: () => {}
  }
}`,...(le=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var de,me,ce;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    questionNumber: 3,
    subject: 'Toán',
    gradeLevel: 'Grade 2',
    questionText: 'Hình nào dưới đây là hình tròn?',
    questionType: 'MCQ',
    options: [{
      key: 'A',
      text: 'Hình tròn',
      imageBase64: SAMPLE_GEOMETRY_CIRCLE
    }, {
      key: 'B',
      text: 'Hình vuông',
      imageBase64: SAMPLE_GEOMETRY_SQUARE
    }, {
      key: 'C',
      text: 'Hình tam giác',
      imageBase64: SAMPLE_GEOMETRY_TRIANGLE
    }],
    selectedAnswer: 'A',
    onAnswerChange: () => {},
    onFlag: () => {}
  }
}`,...(ce=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};const Ye=["MultipleChoiceElementary","MultipleChoiceMiddle","EssayQuestion","LoadingState","Grade1MultiPartMathQuestion","MultipleChoiceWithOptionsImagesStandard","MultipleChoiceWithOptionsImagesElementary"];export{j as EssayQuestion,C as Grade1MultiPartMathQuestion,M as LoadingState,k as MultipleChoiceElementary,_ as MultipleChoiceMiddle,O as MultipleChoiceWithOptionsImagesElementary,q as MultipleChoiceWithOptionsImagesStandard,Ye as __namedExportsOrder,Fe as default};
