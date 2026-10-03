import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import{B as E}from"./Badge-An41I-r3.js";import{c as T}from"./cn-DOIGBiOF.js";import{T as y}from"./Tabs-BbqbLFpu.js";import{D as N}from"./DataTable--NyCpYPp.js";import{F as P}from"./FloatingActions-CQe26Bj4.js";import{P as v}from"./PageHeader-CQ-KDVzf.js";import{P as p}from"./plus-a76MUymE.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination-CCYkTVBc.js";import"./chevron-right-CdjD70iK.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";import"./Button-DUc58pJe.js";import"./Breadcrumbs-DO4WTt5L.js";function s({pageTitle:r,breadcrumbs:i,headerActions:l,tabs:a,activeTab:t,onTabChange:c,tableProps:h,floatingActions:o,className:f}){return e.jsxs("div",{role:"main",className:T("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans",f),children:[e.jsx(v,{title:r,breadcrumbs:i,actions:l}),a&&a.length>0&&c&&e.jsx("div",{className:"mb-6",children:e.jsx(y,{tabs:a.map(m=>({id:m.name,label:m.label||m.name})),activeTab:t||a[0].name,onChange:c})}),e.jsx("div",{className:"w-full",children:e.jsx(N,{...h})}),o&&o.length>0&&e.jsx(P,{actions:o})]})}s.displayName="EntitySummaryTemplate";s.__docgenInfo={description:"",methods:[],displayName:"EntitySummaryTemplate",props:{pageTitle:{required:!0,tsType:{name:"string"},description:""},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"GenericActionMetadata"}],raw:"GenericActionMetadata[]"},description:""},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"TabMetadata"}],raw:"TabMetadata[]"},description:""},activeTab:{required:!1,tsType:{name:"string"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},tableProps:{required:!0,tsType:{name:"DataTableProps",elements:[{name:"T"}],raw:"DataTableProps<T>"},description:""},floatingActions:{required:!1,tsType:{name:"Array",elements:[{name:"SpeedDialActionMetadata"}],raw:"SpeedDialActionMetadata[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Templates/EntitySummaryTemplate",component:s},n={render:()=>{const[r,i]=d.useState(0),[l,a]=d.useState("all");return e.jsx(s,{pageTitle:"External Endpoints",breadcrumbs:[{label:"Dashboard",href:"/"},{label:"Endpoint Collector",href:"/collector"},{label:"Endpoints"}],headerActions:[{actionName:"new-endpoint",actionLabel:"New Endpoint",actionIcon:e.jsx(p,{className:"w-4 h-4"}),onClick:()=>alert("New endpoint clicked")}],tabs:[{name:"all",label:"All Endpoints"},{name:"active",label:"Active (2)"},{name:"disabled",label:"Disabled (1)"}],activeTab:l,onTabChange:a,tableProps:{name:"Registered API Endpoints",keyColumn:"id",visibleSearchbar:!0,columns:[{id:"id",label:"ID",isKeyColumn:!0},{id:"name",label:"Endpoint Name",isSortable:!0},{id:"url",label:"URL"},{id:"status",label:"Status",format:t=>e.jsx(E,{variant:t==="ONLINE"?"success":"neutral",children:t})}],pagingResult:{totalElements:2,content:[{id:"EP-1",name:"Lazada Stock",url:"https://api.lazada.vn/stock",status:"ONLINE"},{id:"EP-2",name:"Hasaki Price",url:"https://api.hasaki.vn/price",status:"ONLINE"}]},pagingOptions:{pageIndex:r,pageSize:10,orderBy:"name",rowsPerPageOptions:[10,20],onPageChange:t=>i(t)}},floatingActions:[{actionName:"refresh",actionLabel:"Refresh Endpoints",actionIcon:e.jsx(p,{className:"w-4 h-4"}),onClick:()=>alert("Refreshed")}]})}};var u,b,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(0);
    const [activeTab, setActiveTab] = useState('all');
    return <EntitySummaryTemplate pageTitle="External Endpoints" breadcrumbs={[{
      label: 'Dashboard',
      href: '/'
    }, {
      label: 'Endpoint Collector',
      href: '/collector'
    }, {
      label: 'Endpoints'
    }]} headerActions={[{
      actionName: 'new-endpoint',
      actionLabel: 'New Endpoint',
      actionIcon: <Plus className="w-4 h-4" />,
      onClick: () => alert('New endpoint clicked')
    }]} tabs={[{
      name: 'all',
      label: 'All Endpoints'
    }, {
      name: 'active',
      label: 'Active (2)'
    }, {
      name: 'disabled',
      label: 'Disabled (1)'
    }]} activeTab={activeTab} onTabChange={setActiveTab} tableProps={{
      name: 'Registered API Endpoints',
      keyColumn: 'id',
      visibleSearchbar: true,
      columns: [{
        id: 'id',
        label: 'ID',
        isKeyColumn: true
      }, {
        id: 'name',
        label: 'Endpoint Name',
        isSortable: true
      }, {
        id: 'url',
        label: 'URL'
      }, {
        id: 'status',
        label: 'Status',
        format: (val: string) => <Badge variant={val === 'ONLINE' ? 'success' : 'neutral'}>{val}</Badge>
      }],
      pagingResult: {
        totalElements: 2,
        content: [{
          id: 'EP-1',
          name: 'Lazada Stock',
          url: 'https://api.lazada.vn/stock',
          status: 'ONLINE'
        }, {
          id: 'EP-2',
          name: 'Hasaki Price',
          url: 'https://api.hasaki.vn/price',
          status: 'ONLINE'
        }]
      },
      pagingOptions: {
        pageIndex: page,
        pageSize: 10,
        orderBy: 'name',
        rowsPerPageOptions: [10, 20],
        onPageChange: newPage => setPage(newPage)
      }
    }} floatingActions={[{
      actionName: 'refresh',
      actionLabel: 'Refresh Endpoints',
      actionIcon: <Plus className="w-4 h-4" />,
      onClick: () => alert('Refreshed')
    }]} />;
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const K=["Default"];export{n as Default,K as __namedExportsOrder,G as default};
