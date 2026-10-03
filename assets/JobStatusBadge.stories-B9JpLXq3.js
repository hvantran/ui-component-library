import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as g}from"./cn-DOIGBiOF.js";import{T as B}from"./Tooltip-DRcnShFR.js";import{c as s}from"./createLucideIcon-B_AfoRjS.js";import{C as J}from"./clock-CNNG55KQ.js";import"./index-Bc2G9s8g.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=s("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=s("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=s("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=s("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),x={SUCCESS:{label:"Success",icon:F,iconClass:"text-green-600 dark:text-green-400",badgeClass:"bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800"},FAILURE:{label:"Failed",icon:T,iconClass:"text-red-600 dark:text-red-400",badgeClass:"bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800"},FAILED:{label:"Failed",icon:z,iconClass:"text-red-600 dark:text-red-400",badgeClass:"bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800"},RUNNING:{label:"Running",icon:p,iconClass:"text-blue-600 dark:text-blue-400 animate-spin",badgeClass:"bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",spin:!0},PROCESSING:{label:"Processing",icon:p,iconClass:"text-blue-600 dark:text-blue-400 animate-spin",badgeClass:"bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",spin:!0},PENDING:{label:"Pending",icon:J,iconClass:"text-amber-600 dark:text-amber-400",badgeClass:"bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800"},CANCELLED:{label:"Cancelled",icon:P,iconClass:"text-secondary-500 dark:text-secondary-400",badgeClass:"bg-secondary-50 text-secondary-700 border-secondary-200 dark:bg-secondary-900/40 dark:text-secondary-300 dark:border-secondary-800"}},N={sm:{badge:"px-2 py-0.5 text-xs gap-1",icon:"w-3.5 h-3.5"},md:{badge:"px-2.5 py-1 text-xs gap-1.5",icon:"w-4 h-4"},lg:{badge:"px-3 py-1.5 text-sm gap-2",icon:"w-4.5 h-4.5"}},a=({status:o,size:i="md",showLabel:D=!0,label:R,tooltip:c=!0,className:v})=>{const u=(o==null?void 0:o.toUpperCase())||"PENDING",t=x[u]||x.PENDING,A=t.icon,m=R||t.label,w=typeof c=="string"?c:m,b=e.jsxs("span",{"data-testid":"job-status-badge","data-status":u,className:g("inline-flex items-center font-medium rounded-full border whitespace-nowrap transition-colors shrink-0",N[i].badge,t.badgeClass,v),children:[e.jsx(A,{"aria-hidden":"true",className:g(N[i].icon,t.iconClass)}),D&&e.jsx("span",{children:m})]});return c?e.jsx(B,{content:w,children:b}):b};a.displayName="JobStatusBadge";a.__docgenInfo={description:"",methods:[],displayName:"JobStatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:`| 'SUCCESS'
| 'FAILURE'
| 'FAILED'
| 'RUNNING'
| 'PROCESSING'
| 'PENDING'
| 'CANCELLED'`,elements:[{name:"literal",value:"'SUCCESS'"},{name:"literal",value:"'FAILURE'"},{name:"literal",value:"'FAILED'"},{name:"literal",value:"'RUNNING'"},{name:"literal",value:"'PROCESSING'"},{name:"literal",value:"'PENDING'"},{name:"literal",value:"'CANCELLED'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Molecules/JobStatusBadge",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{status:"SUCCESS"}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{status:"SUCCESS"}),e.jsx(a,{status:"RUNNING"}),e.jsx(a,{status:"PROCESSING"}),e.jsx(a,{status:"PENDING"}),e.jsx(a,{status:"FAILED"}),e.jsx(a,{status:"FAILURE"}),e.jsx(a,{status:"CANCELLED"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{status:"RUNNING",size:"sm"}),e.jsx(a,{status:"RUNNING",size:"md"}),e.jsx(a,{status:"RUNNING",size:"lg"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{status:"SUCCESS",showLabel:!1}),e.jsx(a,{status:"RUNNING",showLabel:!1}),e.jsx(a,{status:"PENDING",showLabel:!1}),e.jsx(a,{status:"FAILED",showLabel:!1}),e.jsx(a,{status:"CANCELLED",showLabel:!1})]})};var C,S,E;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: 'SUCCESS'
  }
}`,...(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var f,y,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <JobStatusBadge status="SUCCESS" />
      <JobStatusBadge status="RUNNING" />
      <JobStatusBadge status="PROCESSING" />
      <JobStatusBadge status="PENDING" />
      <JobStatusBadge status="FAILED" />
      <JobStatusBadge status="FAILURE" />
      <JobStatusBadge status="CANCELLED" />
    </div>
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,L,h;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <JobStatusBadge status="RUNNING" size="sm" />
      <JobStatusBadge status="RUNNING" size="md" />
      <JobStatusBadge status="RUNNING" size="lg" />
    </div>
}`,...(h=(L=n.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var U,G,j;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <JobStatusBadge status="SUCCESS" showLabel={false} />
      <JobStatusBadge status="RUNNING" showLabel={false} />
      <JobStatusBadge status="PENDING" showLabel={false} />
      <JobStatusBadge status="FAILED" showLabel={false} />
      <JobStatusBadge status="CANCELLED" showLabel={false} />
    </div>
}`,...(j=(G=d.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const K=["Default","AllStatuses","Sizes","IconOnly"];export{l as AllStatuses,r as Default,d as IconOnly,n as Sizes,K as __namedExportsOrder,H as default};
