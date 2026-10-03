import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as l}from"./index-Bc2G9s8g.js";import{B as m}from"./Badge-An41I-r3.js";import{A as n,L as v,F as g,a as h}from"./AppSidebar-Hhp6sX-x.js";import{B as b}from"./bell-L6GYhVNW.js";import{c as x}from"./createLucideIcon-B_AfoRjS.js";import"./cn-DOIGBiOF.js";import"./chevron-right-CdjD70iK.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=x("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),j={title:"Organisms/AppSidebar",component:n},t={render:()=>{const[i,r]=l.useState(!1),[a,s]=l.useState("templates"),p=[{heading:"Overview",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(v,{className:"w-4 h-4"}),active:a==="dashboard",onClick:()=>s("dashboard")}]},{heading:"Applications",items:[{id:"templates",label:"Template Manager",icon:e.jsx(g,{className:"w-4 h-4"}),badge:e.jsx(m,{size:"sm",children:"6"}),active:a==="templates",onClick:()=>s("templates")},{id:"endpoints",label:"Endpoint Collector",icon:e.jsx(h,{className:"w-4 h-4"}),active:a==="endpoints",onClick:()=>s("endpoints")},{id:"actions",label:"Action Manager",icon:e.jsx(b,{className:"w-4 h-4"}),active:a==="actions",onClick:()=>s("actions")}]},{heading:"System",items:[{id:"settings",label:"Settings",icon:e.jsx(u,{className:"w-4 h-4"}),active:a==="settings",onClick:()=>s("settings")}]}];return e.jsxs("div",{className:"h-[480px] flex border rounded-card overflow-hidden",children:[e.jsx(n,{groups:p,isCollapsed:i,onToggleCollapse:()=>r(!i)}),e.jsxs("div",{className:"flex-1 p-6 bg-slate-50 dark:bg-slate-900 text-sm",children:["Active page: ",e.jsx("strong",{children:a})]})]})}};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,j as default};
