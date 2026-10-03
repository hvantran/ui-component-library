import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as H}from"./index-Bc2G9s8g.js";import{c as D}from"./cn-DOIGBiOF.js";const J={ACTIVE:"bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",PAUSED:"bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",FAILED:"bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",DELETED:"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",primary:"bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",secondary:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",success:"bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",warning:"bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",danger:"bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",neutral:"bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"},K={ACTIVE:"bg-green-500",PAUSED:"bg-yellow-500",FAILED:"bg-red-500",DELETED:"bg-gray-400",primary:"bg-blue-500",secondary:"bg-gray-500",success:"bg-green-500",warning:"bg-yellow-500",danger:"bg-red-500",neutral:"bg-gray-500"},a=H.forwardRef(({variant:O,status:g,count:r,max:m,dot:W=!1,className:$,children:p,...z},G)=>{const E=g||O||"neutral";let t=p;return r!==void 0?m!==void 0&&typeof r=="number"&&r>m?t=`${m}+`:t=r:p===void 0&&g&&(t=g),e.jsxs("span",{ref:G,className:D("inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold leading-none whitespace-nowrap",J[E],$),...z,children:[W&&e.jsx("span",{className:D("h-1.5 w-1.5 rounded-full",K[E]),"aria-hidden":"true"}),t]})});a.displayName="Badge";a.__docgenInfo={description:`Atom — Badge

Status indicator and numeric badge counter adhering to BDD specifications.
Supports status codes (ACTIVE, PAUSED, FAILED, DELETED) and numeric counter caps.`,methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'warning'
| 'danger'
| 'neutral'
| BadgeStatus`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"},{name:"union",raw:"'ACTIVE' | 'PAUSED' | 'FAILED' | 'DELETED'",elements:[{name:"literal",value:"'ACTIVE'"},{name:"literal",value:"'PAUSED'"},{name:"literal",value:"'FAILED'"},{name:"literal",value:"'DELETED'"}]}]},description:"Visual variant or action status"},status:{required:!1,tsType:{name:"union",raw:"'ACTIVE' | 'PAUSED' | 'FAILED' | 'DELETED'",elements:[{name:"literal",value:"'ACTIVE'"},{name:"literal",value:"'PAUSED'"},{name:"literal",value:"'FAILED'"},{name:"literal",value:"'DELETED'"}]},description:"Optional status enum shorthand"},count:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Numeric count to display with optional max cutoff"},max:{required:!1,tsType:{name:"number"},description:"Cutoff for counts, renders `${max}+`"},dot:{required:!1,tsType:{name:"boolean"},description:"Optional dot indicator before label",defaultValue:{value:"false",computed:!1}}}};const Y={title:"Atoms/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["ACTIVE","PAUSED","FAILED","DELETED"]},variant:{control:"select",options:["primary","secondary","success","warning","danger","neutral"]},dot:{control:"boolean"}}},s={args:{status:"ACTIVE"}},n={args:{status:"PAUSED"}},o={args:{status:"FAILED"}},d={args:{status:"DELETED"}},l={args:{status:"ACTIVE",dot:!0}},u={args:{variant:"primary",count:24}},i={args:{variant:"danger",count:142,max:99}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(a,{status:"ACTIVE",dot:!0}),e.jsx(a,{status:"PAUSED",dot:!0}),e.jsx(a,{status:"FAILED",dot:!0}),e.jsx(a,{status:"DELETED",dot:!0}),e.jsx(a,{variant:"primary",children:"Custom Label"})]})};var y,b,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'ACTIVE'
  }
}`,...(A=(b=s.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var x,f,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'PAUSED'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,T,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'FAILED'
  }
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,w,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'DELETED'
  }
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,V,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: 'ACTIVE',
    dot: true
  }
}`,...(F=(V=l.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var P,B,h;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    count: 24
  }
}`,...(h=(B=u.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var U,N,j;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    count: 142,
    max: 99
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,R,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge status="ACTIVE" dot />
      <Badge status="PAUSED" dot />
      <Badge status="FAILED" dot />
      <Badge status="DELETED" dot />
      <Badge variant="primary">Custom Label</Badge>
    </div>
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Z=["StatusActive","StatusPaused","StatusFailed","StatusDeleted","WithDot","NumericCounter","NumericCounterCapped","AllStatuses"];export{c as AllStatuses,u as NumericCounter,i as NumericCounterCapped,s as StatusActive,d as StatusDeleted,o as StatusFailed,n as StatusPaused,l as WithDot,Z as __namedExportsOrder,Y as default};
