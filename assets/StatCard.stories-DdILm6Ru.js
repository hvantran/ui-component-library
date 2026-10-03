import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as d}from"./cn-DOIGBiOF.js";import{C as k}from"./Card-C-7XTUWd.js";import{c as i}from"./createLucideIcon-B_AfoRjS.js";import{A as w}from"./activity-CqX9Hcxv.js";import{C as N}from"./clock-CNNG55KQ.js";import"./index-Bc2G9s8g.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=i("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=i("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=i("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),t=({title:v,value:y,change:s,icon:n,description:o,footer:l,variant:f="outlined",className:h})=>e.jsxs(k,{variant:f,className:d("p-5 flex flex-col justify-between font-sans",h),children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between text-sm font-medium text-secondary-500 dark:text-secondary-400",children:[e.jsx("span",{children:v}),n&&e.jsx("div",{className:"p-2 rounded-btn bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300",children:n})]}),e.jsxs("div",{className:"mt-3 flex items-baseline gap-3",children:[e.jsx("span",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-secondary-900 dark:text-white",children:y}),s&&e.jsxs("div",{className:d("inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full",s.isPositive?"bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300":"bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300"),children:[s.isPositive?e.jsx(C,{className:"w-3 h-3 mr-1"}):e.jsx(b,{className:"w-3 h-3 mr-1"}),e.jsx("span",{children:s.value})]})]}),o&&e.jsx("p",{className:"mt-1 text-xs text-secondary-500 dark:text-secondary-400",children:o})]}),l&&e.jsx("div",{className:"mt-4 pt-3 border-t border-secondary-200 dark:border-secondary-800 text-xs text-secondary-500 dark:text-secondary-400",children:l})]});t.displayName="StatCard";t.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},change:{required:!1,tsType:{name:"StatCardChange"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Molecules/StatCard",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{title:"Total Templates",value:"2,845",change:{value:"+8.4%",isPositive:!0},description:"Active templates in system",icon:e.jsx(w,{className:"w-5 h-5"})}},r={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl",children:[e.jsx(t,{title:"Completed Tasks",value:"14,290",change:{value:"+15.2%",isPositive:!0},icon:e.jsx(j,{className:"w-5 h-5 text-green-500"}),footer:"Updated 5m ago"}),e.jsx(t,{title:"Avg. Latency",value:"142ms",change:{value:"-3.8%",isPositive:!0},icon:e.jsx(T,{className:"w-5 h-5 text-blue-500"}),footer:"Across 12 endpoints"}),e.jsx(t,{title:"Pending Retries",value:"18",change:{value:"+4.1%",isPositive:!1},icon:e.jsx(N,{className:"w-5 h-5 text-amber-500"}),footer:"Requires attention"})]})};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Total Templates',
    value: '2,845',
    change: {
      value: '+8.4%',
      isPositive: true
    },
    description: 'Active templates in system',
    icon: <Activity className="w-5 h-5" />
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,x,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <StatCard title="Completed Tasks" value="14,290" change={{
      value: '+15.2%',
      isPositive: true
    }} icon={<CheckCircle className="w-5 h-5 text-green-500" />} footer="Updated 5m ago" />
      <StatCard title="Avg. Latency" value="142ms" change={{
      value: '-3.8%',
      isPositive: true
    }} icon={<Zap className="w-5 h-5 text-blue-500" />} footer="Across 12 endpoints" />
      <StatCard title="Pending Retries" value="18" change={{
      value: '+4.1%',
      isPositive: false
    }} icon={<Clock className="w-5 h-5 text-amber-500" />} footer="Requires attention" />
    </div>
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const U=["Default","MetricsRow"];export{a as Default,r as MetricsRow,U as __namedExportsOrder,L as default};
