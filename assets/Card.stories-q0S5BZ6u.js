import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as O}from"./index-Bc2G9s8g.js";import{c as V}from"./cn-DOIGBiOF.js";const q={default:"border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800",outlined:"border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800",elevated:"border border-transparent bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-transparent"},R={none:"p-0",sm:"p-3",md:"p-4",lg:"p-6"},l=O.forwardRef(({variant:N="default",padding:k="md",interactive:C=!1,selected:j=!1,className:S,children:I,...T},E)=>e.jsx("div",{ref:E,className:V("w-full rounded-card transition duration-150 ease-in-out text-gray-900 dark:text-gray-100",q[N],R[k],C&&"cursor-pointer hover:shadow-lg hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500",j&&"border-blue-500 ring-2 ring-blue-500 bg-blue-50/40 dark:bg-blue-900/20",S),...T,children:I}));l.displayName="Card";l.__docgenInfo={description:`Atom — Card

Universal surface container supporting atomic design and Tailwind styling.
Mobile-first responsive (full width by default) with configurable elevation and padding.`,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Internal padding",defaultValue:{value:"'md'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"Enable hover elevation and cursor pointer",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Highlight border for selectable cards",defaultValue:{value:"false",computed:!1}}}};const D={title:"Atoms/Card",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"]},padding:{control:"select",options:["none","sm","md","lg"]},interactive:{control:"boolean"},selected:{control:"boolean"}}},a={args:{variant:"default",padding:"md",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Standard Card"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"This is a default card with subtle shadow and border."})]})}},t={args:{variant:"outlined",padding:"md",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Outlined Card"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Outlined card without shadow."})]})}},r={args:{variant:"elevated",padding:"lg",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Elevated Card"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Card with prominent shadow and hover elevation."})]})}},d={args:{variant:"default",interactive:!0,padding:"md",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Interactive Card"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Hover over me to see the elevated shadow and blue border transition."})]})}},s={args:{variant:"default",selected:!0,padding:"md",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Selected Card"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Indicates an active or checked state."})]})}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    padding: 'md',
    children: <div>
        <h3 className="text-lg font-semibold mb-1">Standard Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is a default card with subtle shadow and border.
        </p>
      </div>
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    padding: 'md',
    children: <div>
        <h3 className="text-lg font-semibold mb-1">Outlined Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Outlined card without shadow.
        </p>
      </div>
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,p,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    padding: 'lg',
    children: <div>
        <h3 className="text-lg font-semibold mb-1">Elevated Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Card with prominent shadow and hover elevation.
        </p>
      </div>
  }
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var h,b,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    interactive: true,
    padding: 'md',
    children: <div>
        <h3 className="text-lg font-semibold mb-1">Interactive Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Hover over me to see the elevated shadow and blue border transition.
        </p>
      </div>
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    selected: true,
    padding: 'md',
    children: <div>
        <h3 className="text-lg font-semibold mb-1">Selected Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Indicates an active or checked state.
        </p>
      </div>
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const M=["Default","Outlined","Elevated","Interactive","Selected"];export{a as Default,r as Elevated,d as Interactive,t as Outlined,s as Selected,M as __namedExportsOrder,D as default};
