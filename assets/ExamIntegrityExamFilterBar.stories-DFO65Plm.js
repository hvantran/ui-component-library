import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as s}from"./cn-DOIGBiOF.js";import"./index-Bc2G9s8g.js";const n=({title:m="Filter exams",subtitle:i,options:y,selectedKey:c,onSelectKey:p,className:x})=>e.jsxs("div",{className:s("flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 shadow-sm",x),children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100",children:m}),i&&e.jsx("div",{className:"text-xs text-gray-500 dark:text-gray-400",children:i})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:y.map(r=>{const a=c===r.key;return e.jsxs("button",{type:"button","aria-pressed":a,onClick:()=>p(r.key),className:s("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-150",a?"border-primary-600 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300":"border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"),children:[e.jsx("span",{children:r.label}),e.jsx("span",{className:s("inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-[11px] font-semibold",a?"bg-primary-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"),children:r.count})]},r.key)})})]});n.displayName="ExamIntegrityExamFilterBar";n.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityExamFilterBar",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Filter exams'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"FilterOption",elements:[{name:"T"}],raw:"FilterOption<T>"}],raw:"FilterOption<T>[]"},description:""},selectedKey:{required:!0,tsType:{name:"T"},description:""},onSelectKey:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: T) => void",signature:{arguments:[{type:{name:"T"},name:"key"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Organisms/ExamIntegrityExamFilterBar",component:n,tags:["autodocs"]},t={args:{title:"Filter exams",subtitle:"Showing 12 of 15 exams",options:[{key:"all",label:"All",count:15},{key:"published",label:"Published",count:12},{key:"draft",label:"Draft",count:3}],selectedKey:"all",onSelectKey:()=>{}}};var l,d,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Filter exams',
    subtitle: 'Showing 12 of 15 exams',
    options: [{
      key: 'all',
      label: 'All',
      count: 15
    }, {
      key: 'published',
      label: 'Published',
      count: 12
    }, {
      key: 'draft',
      label: 'Draft',
      count: 3
    }],
    selectedKey: 'all',
    onSelectKey: () => {}
  }
}`,...(o=(d=t.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,f as default};
