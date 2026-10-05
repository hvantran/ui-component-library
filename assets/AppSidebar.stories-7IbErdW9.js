import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as o}from"./index-Bc2G9s8g.js";import{B as m}from"./Badge-An41I-r3.js";import{A as n,F as g}from"./AppSidebar-BXtrNBNB.js";import{L as v}from"./layout-dashboard-BBesCYSx.js";import{A as h}from"./activity-CqX9Hcxv.js";import{B as b}from"./bell-L6GYhVNW.js";import{S as x}from"./settings-fcItWnOe.js";import"./cn-DOIGBiOF.js";import"./createLucideIcon-B_AfoRjS.js";import"./chevron-right-CbamweGA.js";const y={title:"Organisms/AppSidebar",component:n},t={render:()=>{const[i,r]=o.useState(!1),[s,a]=o.useState("templates"),p=[{heading:"Overview",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(v,{className:"w-4 h-4"}),active:s==="dashboard",onClick:()=>a("dashboard")}]},{heading:"Applications",items:[{id:"templates",label:"Template Manager",icon:e.jsx(g,{className:"w-4 h-4"}),badge:e.jsx(m,{size:"sm",children:"6"}),active:s==="templates",onClick:()=>a("templates")},{id:"endpoints",label:"Endpoint Collector",icon:e.jsx(h,{className:"w-4 h-4"}),active:s==="endpoints",onClick:()=>a("endpoints")},{id:"actions",label:"Action Manager",icon:e.jsx(b,{className:"w-4 h-4"}),active:s==="actions",onClick:()=>a("actions")}]},{heading:"System",items:[{id:"settings",label:"Settings",icon:e.jsx(x,{className:"w-4 h-4"}),active:s==="settings",onClick:()=>a("settings")}]}];return e.jsxs("div",{className:"h-[480px] flex border rounded-card overflow-hidden",children:[e.jsx(n,{groups:p,isCollapsed:i,onToggleCollapse:()=>r(!i)}),e.jsxs("div",{className:"flex-1 p-6 bg-slate-50 dark:bg-slate-900 text-sm",children:["Active page: ",e.jsx("strong",{children:s})]})]})}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeId, setActiveId] = useState('templates');
    const groups = [{
      heading: 'Overview',
      items: [{
        id: 'dashboard',
        label: 'Dashboard',
        icon: <LayoutDashboard className="w-4 h-4" />,
        active: activeId === 'dashboard',
        onClick: () => setActiveId('dashboard')
      }]
    }, {
      heading: 'Applications',
      items: [{
        id: 'templates',
        label: 'Template Manager',
        icon: <FileText className="w-4 h-4" />,
        badge: <Badge size="sm">6</Badge>,
        active: activeId === 'templates',
        onClick: () => setActiveId('templates')
      }, {
        id: 'endpoints',
        label: 'Endpoint Collector',
        icon: <Activity className="w-4 h-4" />,
        active: activeId === 'endpoints',
        onClick: () => setActiveId('endpoints')
      }, {
        id: 'actions',
        label: 'Action Manager',
        icon: <Bell className="w-4 h-4" />,
        active: activeId === 'actions',
        onClick: () => setActiveId('actions')
      }]
    }, {
      heading: 'System',
      items: [{
        id: 'settings',
        label: 'Settings',
        icon: <Settings className="w-4 h-4" />,
        active: activeId === 'settings',
        onClick: () => setActiveId('settings')
      }]
    }];
    return <div className="h-[480px] flex border rounded-card overflow-hidden">
        <AppSidebar groups={groups} isCollapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} />
        <div className="flex-1 p-6 bg-slate-50 dark:bg-slate-900 text-sm">
          Active page: <strong>{activeId}</strong>
        </div>
      </div>;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,y as default};
