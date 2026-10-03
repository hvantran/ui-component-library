import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as B}from"./index-Bc2G9s8g.js";import{c as o}from"./cn-DOIGBiOF.js";const N={primary:"bg-blue-600 dark:bg-blue-500",success:"bg-green-500 dark:bg-green-400",warning:"bg-yellow-500 dark:bg-yellow-400",danger:"bg-red-500 dark:bg-red-400"},q={sm:"h-1.5",md:"h-2.5",lg:"h-4"},i=B.forwardRef(({value:P,variant:S="primary",size:j="md",label:t,showPercentage:c=!1,className:R,...T},k)=>{const l=Math.min(100,Math.max(0,P));return e.jsxs("div",{ref:k,className:o("w-full flex flex-col gap-1.5",R),...T,children:[(t||c)&&e.jsxs("div",{className:"flex items-center justify-between text-xs font-medium text-gray-700 dark:text-gray-300",children:[t&&e.jsx("span",{children:t}),c&&e.jsxs("span",{children:[Math.round(l),"%"]})]}),e.jsx("div",{role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,className:o("w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",q[j]),children:e.jsx("div",{className:o("h-full rounded-full transition-all duration-300 ease-out",N[S]),style:{width:`${l}%`}})})]})});i.displayName="ProgressBar";i.__docgenInfo={description:`Atom — ProgressBar

Universal progress indicator for jobs, sync status, and multi-step workflows.`,methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Progress percentage between 0 and 100"},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"Visual variant matching status",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size dimension",defaultValue:{value:"'md'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Show label above or inside"},showPercentage:{required:!1,tsType:{name:"boolean"},description:"Show numeric percentage text",defaultValue:{value:"false",computed:!1}}}};const E={title:"Atoms/ProgressBar",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},variant:{control:"select",options:["primary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},showPercentage:{control:"boolean"}}},a={args:{value:65,showPercentage:!0,label:"Job Execution Progress"}},r={args:{value:100,variant:"success",showPercentage:!0,label:"Sync Completed"}},s={args:{value:80,variant:"warning",showPercentage:!0,label:"Rate Limit Threshold"}},n={args:{value:25,variant:"danger",showPercentage:!0,label:"Retry Budget Remaining"}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 65,
    showPercentage: true,
    label: 'Job Execution Progress'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,p,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    showPercentage: true,
    label: 'Sync Completed'
  }
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,h,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 80,
    variant: 'warning',
    showPercentage: true,
    label: 'Rate Limit Threshold'
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var b,y,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 25,
    variant: 'danger',
    showPercentage: true,
    label: 'Retry Budget Remaining'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const _=["Default","Success","Warning","Danger"];export{n as Danger,a as Default,r as Success,s as Warning,_ as __namedExportsOrder,E as default};
