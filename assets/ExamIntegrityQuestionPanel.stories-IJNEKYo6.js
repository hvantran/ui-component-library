import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as c}from"./Skeleton-BFTnpoLa.js";import{E as le}from"./ExamIntegrityStudentQuestionPanelHeader-0KrnfkTn.js";import{R as de}from"./index-Bc2G9s8g.js";import{M as R}from"./MathQuestionInput-CpEffS00.js";import"./SplitMergeArithmeticInput-B4pjuku-.js";import"./BridgeTenArithmeticInput-Dg3QYGiq.js";import{a as $}from"./mathFormulaAnalyzer-D_WA29dh.js";import"./cn-DOIGBiOF.js";import"./Button-CHA6iI3F.js";import"./flag-BUX11eTT.js";import"./createLucideIcon-B_AfoRjS.js";const me="      ..................................................",ue=/^(.+?)\s*(?:\.{2,}|…+|\?|_{2,})\s*(.+)$/u,ce=/^[\d\s()+\-*/xX×÷:.,]+$/u,pe=/^(?:\d+(?:[.,]\d+)?\s*(?:kg|g|mg|t|km|m|cm|mm|dm|l|ml|dl|cl|h|min|s)\s*)+$/iu;function F(s){const r=s.trim();return!r||/^[.…_?]+$/u.test(r)?!1:pe.test(r)?!0:/[\p{L}]/u.test(r.replace(/[xX]/g,""))?!1:ce.test(r)}function G(s,r){if(!s||typeof s!="string")return null;const m=s.trim().replace(/^[a-zA-Z\d]+[.,:\)\-]\s+/,"").trim().match(ue);if(!m)return null;const u=m[1].replace(/^[.…_?\s]+|[.…_?\s]+$/g,"").trim(),n=m[2].replace(/^[.…_?\s]+|[.…_?\s]+$/g,"").trim();return!u||!n||!F(u)||!F(n)||/[=]$/.test(u)||/^=/.test(n)?null:{left:u,right:n}}const ge=["<","=",">"],D=({left:s,right:r,value:i,disabled:m,onChange:u})=>e.jsxs("div",{className:"flex items-center justify-center gap-3 flex-wrap",children:[e.jsx("span",{className:"text-base font-mono font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 whitespace-nowrap",children:s}),e.jsx("div",{className:"flex gap-2",children:ge.map(n=>{const g=i===n;return e.jsx("button",{type:"button",disabled:m,onClick:()=>u(n),className:`w-11 h-11 rounded-xl border-2 text-lg font-bold transition-all duration-150 select-none
              ${g?"border-sky-500 bg-sky-500 text-white shadow-[0_4px_12px_-4px_rgba(14,165,233,0.6)]":"border-slate-300 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50"}
              ${m?"cursor-not-allowed opacity-50":"cursor-pointer"}
            `,children:n},n)})}),e.jsx("span",{className:"text-base font-mono font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 whitespace-nowrap",children:r})]}),xe={A:{bg:"bg-amber-100",text:"text-amber-900",border:"border-amber-300"},B:{bg:"bg-sky-100",text:"text-sky-900",border:"border-sky-300"},C:{bg:"bg-emerald-100",text:"text-emerald-900",border:"border-emerald-300"},D:{bg:"bg-rose-100",text:"text-rose-900",border:"border-rose-300"}},se=({questionNumber:s,questionText:r,questionStem:i,questionType:m,options:u,questionParts:n,selectedAnswer:g,selectedAnswerParts:M,disabled:d=!1,onAnswerChange:b,onAnswerPartsChange:T,imageData:A,gradeLevel:p,subject:v})=>{const S=m==="MCQ",f=m==="ESSAY_LONG",w=!S&&((n==null?void 0:n.length)??0)>0,y=new Map((M??[]).map(t=>[t.key,t.answer])),[x,j]=de.useState(!1),Q=p==null?void 0:p.match(/(?:grade|lop|lớp)\s*(\d+)/iu),L=Q?Number(Q[1]):null,P=L!==null&&L<=5,oe=!!(v&&/(?:english|tiếng anh|reading)/iu.test(v)),O=(t,o)=>{!n||!T||T(n.map(l=>({key:l.key,answer:l.key===t?o:y.get(l.key)??""})))},ie=()=>{if(typeof window<"u"&&"speechSynthesis"in window)if(x)window.speechSynthesis.cancel(),j(!1);else{const t=[i,r].filter(Boolean).join(". "),o=new SpeechSynthesisUtterance(t);o.rate=.9,o.onend=()=>j(!1),o.onerror=()=>j(!1),j(!0),window.speechSynthesis.speak(o)}};return e.jsxs(e.Fragment,{children:[P&&oe&&e.jsxs("div",{className:"mb-4 flex items-center justify-between gap-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-900",children:[e.jsx("span",{children:"📖 Reading Tools:"}),e.jsx("span",{className:"px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-950 font-bold",children:"Story Mode"})]}),e.jsx("button",{type:"button",onClick:ie,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition shadow-sm ${x?"bg-amber-400 text-amber-950 ring-2 ring-amber-300 animate-pulse":"bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100"}`,children:e.jsx("span",{children:x?"⏹️ Stop Reading":"🔊 Read Aloud"})})]}),(!w||i)&&e.jsx("div",{className:`${P?"text-lg md:text-xl font-medium leading-relaxed text-slate-900 mb-6 p-4 rounded-2xl bg-amber-50/40 border border-amber-100/80":"text-base md:text-[17px] font-normal leading-7 text-slate-900 mb-6"} break-words whitespace-pre-line`,children:w?i:r}),A&&e.jsx("div",{className:"mb-6 flex justify-center bg-slate-50 border border-slate-200 rounded-xl p-2 md:p-3",children:e.jsx("img",{src:A,alt:"Question",className:"max-h-72 object-contain rounded"})}),S&&u?(()=>{const t=u.filter(l=>l.text.trim()!==""),o=t.length===3?"grid-cols-3":"grid-cols-1 sm:grid-cols-2";return e.jsx("div",{className:`grid ${o} gap-4`,children:t.map((l,h)=>{const a=l.key??l.label??String(h+1),N=g===a,I=xe[a.toUpperCase()]??{bg:"bg-slate-100",text:"text-slate-800",border:"border-slate-300"};return P?e.jsxs("button",{type:"button",disabled:d,onClick:()=>b(a),className:`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-150 min-h-[64px] select-none ${N?"border-emerald-500 bg-emerald-50 text-emerald-950 shadow-[0_4px_0_#059669] ring-2 ring-emerald-200 -translate-y-0.5":"border-amber-200/90 bg-white hover:border-amber-400 hover:bg-amber-50/50 shadow-[0_4px_0_#e2e8f0] active:translate-y-1 active:shadow-none"} ${d?"cursor-not-allowed opacity-60":"cursor-pointer"}`,children:[e.jsx("div",{className:`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm ${N?"bg-emerald-600 text-white border-emerald-700":`${I.bg} ${I.text} ${I.border}`}`,children:N?"✓":a}),e.jsx("span",{className:"text-base font-semibold leading-relaxed text-slate-900 flex-1",children:l.text})]},a):e.jsxs("label",{className:`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${N?"border-sky-500 bg-sky-50 shadow-[0_8px_20px_-18px_rgba(14,165,233,0.8)]":"border-slate-300 bg-white"} ${d?"cursor-not-allowed opacity-60":"hover:border-sky-400 hover:bg-slate-50"}`,children:[e.jsx("input",{type:"radio",name:`question-${s}`,value:a,checked:N,disabled:d,onChange:()=>b(a),className:"mt-1 accent-sky-600 flex-shrink-0"}),e.jsxs("span",{className:"text-sm leading-6 text-slate-900",children:[e.jsxs("strong",{children:[a,"."]})," ",l.text]})]},a)})})})():w?e.jsx("div",{className:"flex flex-wrap gap-4",children:n==null?void 0:n.map(t=>e.jsxs("section",{className:"rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 p-3.5 sm:p-4 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.45)] w-full sm:flex-1 sm:min-w-[calc(50%-0.5rem)] min-w-0 overflow-hidden",children:[e.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[e.jsx("div",{className:"min-w-9 h-9 px-2 rounded-full bg-sky-600 text-white text-sm font-bold flex items-center justify-center uppercase shadow-sm",children:t.key}),e.jsx("div",{className:"pt-1 min-w-0",children:e.jsx("p",{className:"text-sm md:text-[15px] leading-6 text-slate-900 break-words",children:t.prompt})})]}),(()=>{const o=G(t.prompt);if(o&&!f)return e.jsx(D,{left:o.left,right:o.right,value:y.get(t.key)??"",disabled:d,onChange:a=>O(t.key,a)});const l=$(t.prompt);return["SIMPLE_ADDITION","SIMPLE_SUBTRACTION","SIMPLE_MULTIPLICATION","SIMPLE_DIVISION","COMPLEX_FORMULA"].includes(l.type)&&!f?e.jsx(R,{questionText:t.prompt,value:y.get(t.key)??"",disabled:d,tags:p?[p]:[],onChange:a=>O(t.key,a)}):e.jsx("textarea",{rows:4,placeholder:"Nhập câu trả lời cho phần này",value:y.get(t.key)??"",disabled:d,onChange:a=>O(t.key,a.target.value),className:"w-full text-sm leading-6 border border-slate-300 rounded-xl p-3 bg-white resize-vertical text-slate-900 outline-none focus:border-sky-400"})})()]},t.key))}):(()=>{const t=G(r);if(t&&!f)return e.jsx(D,{left:t.left,right:t.right,value:g??"",disabled:d,onChange:h=>b(h)});const o=$(r);return["SIMPLE_ADDITION","SIMPLE_SUBTRACTION","SIMPLE_MULTIPLICATION","SIMPLE_DIVISION","COMPLEX_FORMULA"].includes(o.type)&&!f?e.jsx(R,{questionText:r,value:g??"",disabled:d,tags:p?[p]:[],onChange:h=>b(h)}):e.jsx("div",{className:"border-l-4 border-slate-300 pl-4",children:e.jsx("textarea",{rows:7,placeholder:Array(7).fill(me).join(`
`),value:g??"",disabled:d,onChange:h=>b(h.target.value),className:"w-full font-mono text-center text-sm leading-6 border border-dashed border-slate-300 rounded-xl p-3 bg-white resize-vertical text-slate-900 outline-none focus:border-sky-400"})})})()]})};se.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityQuestionPanelContent",props:{questionNumber:{required:!0,tsType:{name:"number"},description:""},questionText:{required:!0,tsType:{name:"string"},description:""},questionStem:{required:!1,tsType:{name:"string"},description:""},questionType:{required:!0,tsType:{name:"union",raw:"'MCQ' | 'ESSAY_SHORT' | 'ESSAY_LONG'",elements:[{name:"literal",value:"'MCQ'"},{name:"literal",value:"'ESSAY_SHORT'"},{name:"literal",value:"'ESSAY_LONG'"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionOption"}],raw:"QuestionOption[]"},description:""},questionParts:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionPart"}],raw:"QuestionPart[]"},description:""},selectedAnswer:{required:!1,tsType:{name:"string"},description:""},selectedAnswerParts:{required:!1,tsType:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAnswerChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAnswerPartsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(parts: AnswerPart[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},name:"parts"}],return:{name:"void"}}},description:""},imageData:{required:!1,tsType:{name:"string"},description:""},gradeLevel:{required:!1,tsType:{name:"string"},description:""},subject:{required:!1,tsType:{name:"string"},description:""}}};const he=s=>{if(!s)return null;const r=s.match(/(?:grade|lop|lớp)\s*(\d+)/iu);if(!r)return null;const i=Number(r[1]);return Number.isFinite(i)?i:null},be=s=>{const r=he(s);return r!==null&&r<=5?"elementary":r!==null&&r<=9?"middle":"high"},ae=({questionNumber:s,subject:r,gradeLevel:i,questionText:m,questionStem:u,questionType:n,options:g,questionParts:M,selectedAnswer:d,selectedAnswerParts:b,isFlagged:T=!1,disabled:A=!1,onAnswerChange:p,onAnswerPartsChange:v,onFlag:S,imageData:f,isLoading:w=!1})=>{const y=be(i),x={elementary:{card:"border-cyan-200 border-l-cyan-500 shadow-[0_18px_40px_-28px_rgba(6,182,212,0.5)]",divider:"border-cyan-100"},middle:{card:"border-emerald-200 border-l-emerald-600 shadow-[0_18px_40px_-28px_rgba(16,185,129,0.5)]",divider:"border-emerald-100"},high:{card:"border-slate-200 border-l-sky-600 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)]",divider:"border-slate-200"}}[y];return w?e.jsxs("div",{className:`bg-white w-full border border-l-4 rounded-2xl p-4 sm:p-6 md:p-8 ${x.card}`,children:[e.jsxs("div",{className:"flex items-start justify-between gap-3 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-4 min-w-0 flex-1",children:[e.jsx(c,{width:40,height:40,variant:"rounded"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(c,{width:140,height:14,className:"mb-2"}),e.jsx(c,{width:180,height:12})]})]}),e.jsx(c,{width:96,height:36,variant:"rounded"})]}),e.jsx("div",{className:`border-b mb-5 ${x.divider}`}),e.jsx(c,{width:"96%",height:18,className:"mb-2"}),e.jsx(c,{width:"88%",height:18,className:"mb-2"}),e.jsx(c,{width:"62%",height:18,className:"mb-6"}),e.jsx(c,{width:"100%",height:52,className:"mb-3"}),e.jsx(c,{width:"100%",height:52,className:"mb-3"}),e.jsx(c,{width:"100%",height:52,className:"mb-3"}),e.jsx(c,{width:"100%",height:52})]}):e.jsxs("div",{className:`bg-white w-full border border-l-4 rounded-2xl p-4 sm:p-6 md:p-8 ${x.card}`,children:[e.jsx(le,{questionNumber:s,subject:r,gradeLevel:i,tone:y,isFlagged:T,onFlag:S}),e.jsx("div",{className:`border-b mb-5 ${x.divider}`}),e.jsx(se,{questionNumber:s,questionText:m,questionStem:u,questionType:n,options:g,questionParts:M,selectedAnswer:d,selectedAnswerParts:b,disabled:A,onAnswerChange:p,onAnswerPartsChange:v,imageData:f,gradeLevel:i,subject:r})]})};ae.__docgenInfo={description:`Organism — ExamIntegrityQuestionPanel

Exam question paper presentation organism with grade tone styling,
question panel header, and interactive question content (MCQ/Essay/Math).`,methods:[],displayName:"ExamIntegrityQuestionPanel",props:{questionNumber:{required:!0,tsType:{name:"number"},description:""},subject:{required:!1,tsType:{name:"string"},description:""},gradeLevel:{required:!1,tsType:{name:"string"},description:""},questionText:{required:!0,tsType:{name:"string"},description:""},questionStem:{required:!1,tsType:{name:"string"},description:""},questionType:{required:!0,tsType:{name:"union",raw:"'MCQ' | 'ESSAY_SHORT' | 'ESSAY_LONG'",elements:[{name:"literal",value:"'MCQ'"},{name:"literal",value:"'ESSAY_SHORT'"},{name:"literal",value:"'ESSAY_LONG'"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionOption"}],raw:"QuestionOption[]"},description:""},questionParts:{required:!1,tsType:{name:"Array",elements:[{name:"QuestionPart"}],raw:"QuestionPart[]"},description:""},selectedAnswer:{required:!1,tsType:{name:"string"},description:""},selectedAnswerParts:{required:!1,tsType:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},description:""},isFlagged:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAnswerChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onAnswerPartsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(parts: AnswerPart[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"AnswerPart"}],raw:"AnswerPart[]"},name:"parts"}],return:{name:"void"}}},description:""},onFlag:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},imageData:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ce={title:"Organisms/ExamIntegrityQuestionPanel",component:ae,parameters:{layout:"padded"},tags:["autodocs"]},k={args:{questionNumber:1,subject:"Math",gradeLevel:"Grade 3",questionText:"Tính: 25 + 17 = ?",questionType:"MCQ",options:[{key:"A",text:"42"},{key:"B",text:"32"},{key:"C",text:"52"},{key:"D",text:"40"}],selectedAnswer:"A",onAnswerChange:()=>{},onFlag:()=>{}}},_={args:{questionNumber:5,subject:"Science",gradeLevel:"Grade 8",questionText:"Which organelle is known as the powerhouse of the cell?",questionType:"MCQ",options:[{key:"A",text:"Nucleus"},{key:"B",text:"Mitochondria"},{key:"C",text:"Ribosome"},{key:"D",text:"Endoplasmic Reticulum"}],selectedAnswer:"",onAnswerChange:()=>{},onFlag:()=>{}}},q={args:{questionNumber:2,subject:"Literature",gradeLevel:"Grade 10",questionText:'Nêu cảm nhận của em về bài thơ "Đoàn thuyền đánh cá" của Huy Cận.',questionType:"ESSAY_LONG",selectedAnswer:"",onAnswerChange:()=>{},onFlag:()=>{}}},C={args:{questionNumber:1,questionText:"",questionType:"MCQ",isLoading:!0,onAnswerChange:()=>{}}},E={args:{questionNumber:1,subject:"Toán",gradeLevel:"Grade 1",questionStem:"Số?",questionText:"Số?",questionType:"ESSAY_SHORT",questionParts:[{key:"A",prompt:"6 + 8 = ........."},{key:"B",prompt:"18 - 6 = ........."},{key:"C",prompt:"12 - 9 = ........."},{key:"D",prompt:"7 + 5 = ........."},{key:"E",prompt:"12 - 9 = ........."},{key:"F",prompt:"15 - 7 = ........."}],selectedAnswerParts:[],onAnswerChange:()=>{},onAnswerPartsChange:()=>{},onFlag:()=>{}}};var Y,B,H;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(H=(B=k.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var U,V,z;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(V=_.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var X,W,K;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(W=q.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var Z,J,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    questionNumber: 1,
    questionText: '',
    questionType: 'MCQ',
    isLoading: true,
    onAnswerChange: () => {}
  }
}`,...(ee=(J=C.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};var te,re,ne;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const Ee=["MultipleChoiceElementary","MultipleChoiceMiddle","EssayQuestion","LoadingState","Grade1MultiPartMathQuestion"];export{q as EssayQuestion,E as Grade1MultiPartMathQuestion,C as LoadingState,k as MultipleChoiceElementary,_ as MultipleChoiceMiddle,Ee as __namedExportsOrder,Ce as default};
