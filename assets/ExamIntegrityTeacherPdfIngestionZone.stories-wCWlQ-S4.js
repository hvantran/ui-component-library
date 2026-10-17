import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as N}from"./index-Bc2G9s8g.js";import{P as q}from"./ProgressBar-COXiRCBm.js";import{c as R}from"./cn-DOIGBiOF.js";const t=N.forwardRef(({onFileSelect:y,isProcessing:h=!1,isSuccess:S=!1,error:o=null,processingMessage:I="Processing PDF…",successMessage:T="Upload successful! Redirecting to review page…",className:E,accept:b=".pdf"},j)=>e.jsxs("div",{"data-testid":"teacher-pdf-ingestion-zone",className:R("p-6 text-center bg-surface text-on-surface",E),children:[e.jsx("input",{type:"file",accept:b,ref:j,hidden:!0,onChange:y,"data-testid":"pdf-file-input"}),h&&e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsx(q,{value:100,className:"animate-pulse"}),e.jsx("div",{className:"text-on-surface text-sm",children:I})]}),S&&e.jsx("div",{role:"alert",className:"mt-2 p-3 rounded-lg border border-green-200 bg-green-50 text-green-800 text-sm font-medium",children:T}),o&&e.jsx("div",{role:"alert",className:"mt-2 p-3 rounded-lg border border-red-200 bg-red-50 text-red-800 text-sm font-medium",children:o})]}));t.displayName="ExamIntegrityTeacherPdfIngestionZone";t.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityTeacherPdfIngestionZone",props:{onFileSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},isProcessing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSuccess:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},processingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Processing PDF…'",computed:!1}},successMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Upload successful! Redirecting to review page…'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'.pdf'",computed:!1}}}};const C={title:"Organisms/ExamIntegrityTeacherPdfIngestionZone",component:t,tags:["autodocs"],argTypes:{onFileSelect:{action:"fileSelected"}}},s={args:{isProcessing:!1,isSuccess:!1,error:null}},r={args:{isProcessing:!0,isSuccess:!1,error:null}},a={args:{isProcessing:!1,isSuccess:!0,error:null}},n={args:{isProcessing:!1,isSuccess:!1,error:"Invalid file format. Please upload a standard PDF document."}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isProcessing: false,
    isSuccess: false,
    error: null
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isProcessing: true,
    isSuccess: false,
    error: null
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isProcessing: false,
    isSuccess: true,
    error: null
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var P,x,v;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isProcessing: false,
    isSuccess: false,
    error: 'Invalid file format. Please upload a standard PDF document.'
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const D=["Idle","Processing","Success","WithError"];export{s as Idle,r as Processing,a as Success,n as WithError,D as __namedExportsOrder,C as default};
