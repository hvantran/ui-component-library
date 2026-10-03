import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{c as g}from"./cn-DOIGBiOF.js";import"./index-Bc2G9s8g.js";const n=({items:c,separator:p="/",className:b,...h})=>a.jsx("nav",{"aria-label":"Breadcrumb",className:g("flex items-center text-sm font-medium",b),...h,children:a.jsx("ol",{className:"inline-flex items-center space-x-1 md:space-x-2",children:c.map((e,s)=>{const x=s===c.length-1,f=e.active??x;return a.jsxs("li",{className:"inline-flex items-center",children:[s>0&&a.jsx("span",{className:"mx-1 text-gray-400 dark:text-gray-600 select-none","aria-hidden":"true",children:p}),f?a.jsx("span",{"aria-current":"page",className:"text-gray-900 dark:text-white font-semibold",children:e.label}):e.href?a.jsx("a",{href:e.href,onClick:e.onClick,className:"text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors",children:e.label}):a.jsx("button",{type:"button",onClick:e.onClick,className:"text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors",children:e.label})]},s)})})});n.displayName="Breadcrumbs";n.__docgenInfo={description:'Molecule — Breadcrumbs\n\nAccessible breadcrumb navigation (`<nav aria-label="Breadcrumb">`)\nwith semantic `<ol>` and `<li>` elements, supporting links and active states.',methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Ordered breadcrumb hierarchy items"},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom separator node, defaults to `/`",defaultValue:{value:"'/'",computed:!1}}}};const N={title:"Molecules/Breadcrumbs",component:n,parameters:{layout:"padded"},tags:["autodocs"]},r={args:{items:[{label:"Home",href:"/"},{label:"Actions",href:"/actions"},{label:"Sync Lazada Inventory",active:!0}]}},t={args:{separator:">",items:[{label:"Workspaces",href:"#"},{label:"Action Manager",href:"#"},{label:"Settings",active:!0}]}};var l,o,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Actions',
      href: '/actions'
    }, {
      label: 'Sync Lazada Inventory',
      active: true
    }]
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    separator: '>',
    items: [{
      label: 'Workspaces',
      href: '#'
    }, {
      label: 'Action Manager',
      href: '#'
    }, {
      label: 'Settings',
      active: true
    }]
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["Default","CustomSeparator"];export{t as CustomSeparator,r as Default,j as __namedExportsOrder,N as default};
