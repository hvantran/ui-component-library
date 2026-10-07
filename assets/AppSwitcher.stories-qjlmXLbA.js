import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{A as s,D as g}from"./AppSwitcher-Bq3QF9-7.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./layout-grid-Cgbzx6dM.js";import"./createLucideIcon-B_AfoRjS.js";const S={title:"Organisms/AppSwitcher",component:s},r={render:()=>e.jsx("div",{className:"p-8 bg-slate-50 min-h-[300px] flex items-start justify-end",children:e.jsx(s,{currentAppId:"template-manager"})})},t={render:()=>e.jsx("div",{className:"dark p-8 bg-slate-900 min-h-[300px] flex items-start justify-end",children:e.jsx(s,{currentAppId:"exam-integrity"})})},a={render:()=>{const x=[...g,{id:"analytics-dashboard",name:"Analytics",url:"/analytics"}];return e.jsx("div",{className:"p-8 bg-slate-50 min-h-[300px] flex items-start justify-end",children:e.jsx(s,{items:x,currentAppId:"action-manager",onNavigate:n=>alert(`Navigating to: ${n.name} (${n.url})`)})})}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <div className="p-8 bg-slate-50 min-h-[300px] flex items-start justify-end">
        <AppSwitcher currentAppId="template-manager" />
      </div>;
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,o,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <div className="dark p-8 bg-slate-900 min-h-[300px] flex items-start justify-end">
        <AppSwitcher currentAppId="exam-integrity" />
      </div>;
  }
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,u,A;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const customApps = [...DEFAULT_PLATFORM_APPS, {
      id: 'analytics-dashboard',
      name: 'Analytics',
      url: '/analytics'
    }];
    return <div className="p-8 bg-slate-50 min-h-[300px] flex items-start justify-end">
        <AppSwitcher items={customApps} currentAppId="action-manager" onNavigate={app => alert(\`Navigating to: \${app.name} (\${app.url})\`)} />
      </div>;
  }
}`,...(A=(u=a.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};const b=["Default","DarkMode","CustomApplications"];export{a as CustomApplications,t as DarkMode,r as Default,b as __namedExportsOrder,S as default};
