import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as i}from"./cn-DOIGBiOF.js";import"./index-Bc2G9s8g.js";const r=({orientation:f="horizontal",label:d,className:n,...o})=>f==="vertical"?e.jsx("div",{role:"separator","aria-orientation":"vertical",className:i("inline-block w-px self-stretch bg-secondary-200 dark:bg-secondary-800",n),...o}):d?e.jsxs("div",{role:"separator","aria-orientation":"horizontal",className:i("flex items-center text-xs text-secondary-500 my-4",n),...o,children:[e.jsx("span",{className:"flex-grow border-t border-secondary-200 dark:border-secondary-800"}),e.jsx("span",{className:"px-3 font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500",children:d}),e.jsx("span",{className:"flex-grow border-t border-secondary-200 dark:border-secondary-800"})]}):e.jsx("hr",{role:"separator","aria-orientation":"horizontal",className:i("border-0 border-t border-secondary-200 dark:border-secondary-800 my-4",n),...o});r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Atoms/Divider",component:r},a={render:()=>e.jsxs("div",{className:"w-64",children:[e.jsx("p",{className:"text-sm",children:"Content Above"}),e.jsx(r,{}),e.jsx("p",{className:"text-sm",children:"Content Below"})]})},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{label:"OR"})})},t={render:()=>e.jsxs("div",{className:"flex items-center h-8 gap-4 text-sm",children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Right"})]})};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <p className="text-sm">Content Above</p>
      <Divider />
      <p className="text-sm">Content Below</p>
    </div>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,x,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Divider label="OR" />
    </div>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex items-center h-8 gap-4 text-sm">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const w=["Horizontal","WithLabel","Vertical"];export{a as Horizontal,t as Vertical,s as WithLabel,w as __namedExportsOrder,g as default};
