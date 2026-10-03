import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as w}from"./cn-DOIGBiOF.js";import{B as i}from"./Button-DUc58pJe.js";import{c as g}from"./createLucideIcon-B_AfoRjS.js";import{R as v}from"./refresh-cw-CGqbG-AS.js";import"./index-Bc2G9s8g.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=g("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=g("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),a=({statusCode:f="500",title:x="Something went wrong",message:h="An unexpected error occurred while processing your request.",details:s,onRetry:o,onHome:n,className:y})=>e.jsx("main",{role:"main",className:w("min-h-[80vh] flex flex-col items-center justify-center p-6 text-center font-sans",y),children:e.jsxs("div",{className:"w-full max-w-md p-8 rounded-card border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-card",children:[e.jsx("div",{className:"w-14 h-14 mx-auto mb-4 rounded-full bg-error-50 dark:bg-error-950/40 text-error-600 dark:text-error-400 flex items-center justify-center",children:e.jsx(N,{className:"w-7 h-7","aria-hidden":"true"})}),e.jsx("span",{className:"text-4xl font-extrabold text-secondary-900 dark:text-white tracking-tight",children:f}),e.jsx("h1",{className:"mt-2 text-lg font-bold text-secondary-900 dark:text-white",children:x}),e.jsx("p",{className:"mt-2 text-sm text-secondary-600 dark:text-secondary-300",children:h}),s&&e.jsx("div",{className:"mt-4 p-3 rounded-btn bg-secondary-100 dark:bg-secondary-800 text-left overflow-x-auto whitespace-pre-wrap text-xs font-mono text-secondary-700 dark:text-secondary-300",children:s}),e.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-center gap-3",children:[o&&e.jsx(i,{variant:"secondary",onClick:o,icon:e.jsx(v,{className:"w-4 h-4"}),children:"Try Again"}),n&&e.jsx(i,{variant:"primary",onClick:n,icon:e.jsx(k,{className:"w-4 h-4"}),children:"Return Home"})]})]})});a.displayName="ErrorPageTemplate";a.__docgenInfo={description:"",methods:[],displayName:"ErrorPageTemplate",props:{statusCode:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"'500'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Something went wrong'",computed:!1}},message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'An unexpected error occurred while processing your request.'",computed:!1}},details:{required:!1,tsType:{name:"string"},description:""},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHome:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Templates/ErrorPageTemplate",component:a},r={args:{statusCode:"500",title:"Internal Server Error",message:"Kafka consumer cluster temporarily unavailable.",details:"Error: Connection timeout to kafka:9092 after 30000ms",onRetry:()=>alert("Retrying..."),onHome:()=>alert("Navigating home...")}},t={args:{statusCode:"404",title:"Resource Not Found",message:"The requested action workflow does not exist or was deleted.",onHome:()=>alert("Navigating home...")}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    statusCode: '500',
    title: 'Internal Server Error',
    message: 'Kafka consumer cluster temporarily unavailable.',
    details: 'Error: Connection timeout to kafka:9092 after 30000ms',
    onRetry: () => alert('Retrying...'),
    onHome: () => alert('Navigating home...')
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    statusCode: '404',
    title: 'Resource Not Found',
    message: 'The requested action workflow does not exist or was deleted.',
    onHome: () => alert('Navigating home...')
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const H=["ServerError500","NotFound404"];export{t as NotFound404,r as ServerError500,H as __namedExportsOrder,R as default};
