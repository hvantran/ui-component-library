import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{A as m}from"./AppFooter-Bd6g7NtB.js";import{A as v,L as h,F as x}from"./AppSidebar-BF6VnUnO.js";import{A as N}from"./AppTopBar-CfxyCSZw.js";import{c as b}from"./cn-DOIGBiOF.js";import{A as u}from"./activity-CqX9Hcxv.js";import{B as f}from"./bell-L6GYhVNW.js";import"./createLucideIcon-B_AfoRjS.js";import"./chevron-right-CdjD70iK.js";import"./sun-CdeBiqXE.js";const i=({topBar:s,sidebar:o,children:t,footer:a,className:d})=>e.jsxs("div",{className:b("min-h-screen flex flex-col bg-surface-card-light dark:bg-surface-card-dark font-sans",d),children:[s,e.jsxs("div",{className:"flex-1 flex overflow-hidden",children:[o,e.jsx("main",{role:"main",className:"flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-secondary-50/50 dark:bg-secondary-900/30",children:t})]}),a&&a]});i.displayName="DashboardTemplate";i.__docgenInfo={description:"",methods:[],displayName:"DashboardTemplate",props:{topBar:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sidebar:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Templates/DashboardTemplate",component:i},r={render:()=>{const[s,o]=c.useState(!1),[t,a]=c.useState("templates");return e.jsx(i,{topBar:e.jsx(N,{title:"Monorepo Console",onMenuToggle:()=>o(!s)}),sidebar:e.jsx(v,{isCollapsed:s,onToggleCollapse:()=>o(!s),groups:[{heading:"Navigation",items:[{id:"overview",label:"Overview",icon:e.jsx(h,{className:"w-4 h-4"}),active:t==="overview",onClick:()=>a("overview")},{id:"templates",label:"Templates",icon:e.jsx(x,{className:"w-4 h-4"}),active:t==="templates",onClick:()=>a("templates")},{id:"endpoints",label:"Endpoints",icon:e.jsx(u,{className:"w-4 h-4"}),active:t==="endpoints",onClick:()=>a("endpoints")},{id:"actions",label:"Actions",icon:e.jsx(f,{className:"w-4 h-4"}),active:t==="actions",onClick:()=>a("actions")}]}]}),footer:e.jsx(m,{appName:"Project Management Console"}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-secondary-900 dark:text-white",children:"Welcome to the Microservices Workspace"}),e.jsx("p",{className:"text-secondary-600 dark:text-secondary-300 text-sm",children:"This dashboard shell integrates AppTopBar, AppSidebar, content area, and AppFooter."})]})})}};var l,n,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState('templates');
    return <DashboardTemplate topBar={<AppTopBar title="Monorepo Console" onMenuToggle={() => setCollapsed(!collapsed)} />} sidebar={<AppSidebar isCollapsed={collapsed} onToggleCollapse={() => setCollapsed(!collapsed)} groups={[{
      heading: 'Navigation',
      items: [{
        id: 'overview',
        label: 'Overview',
        icon: <LayoutDashboard className="w-4 h-4" />,
        active: active === 'overview',
        onClick: () => setActive('overview')
      }, {
        id: 'templates',
        label: 'Templates',
        icon: <FileText className="w-4 h-4" />,
        active: active === 'templates',
        onClick: () => setActive('templates')
      }, {
        id: 'endpoints',
        label: 'Endpoints',
        icon: <Activity className="w-4 h-4" />,
        active: active === 'endpoints',
        onClick: () => setActive('endpoints')
      }, {
        id: 'actions',
        label: 'Actions',
        icon: <Bell className="w-4 h-4" />,
        active: active === 'actions',
        onClick: () => setActive('actions')
      }]
    }]} />} footer={<AppFooter appName="Project Management Console" />}>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-secondary-900 dark:text-white">
            Welcome to the Microservices Workspace
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
            This dashboard shell integrates AppTopBar, AppSidebar, content area, and AppFooter.
          </p>
        </div>
      </DashboardTemplate>;
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,S as default};
