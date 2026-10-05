import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as n}from"./index-Bc2G9s8g.js";import{B as b}from"./Badge-An41I-r3.js";import{E as r}from"./EntitySummaryTemplate-DkNtTRJ8.js";import{P as i}from"./plus-a76MUymE.js";import"./cn-DOIGBiOF.js";import"./Tabs-BbqbLFpu.js";import"./DataTable-udgpyq1D.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";import"./FloatingActions-CQe26Bj4.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const D={title:"Templates/EntitySummaryTemplate",component:r},t={render:()=>{const[c,p]=n.useState(0),[m,d]=n.useState("all");return a.jsx(r,{pageTitle:"External Endpoints",breadcrumbs:[{label:"Dashboard",href:"/"},{label:"Endpoint Collector",href:"/collector"},{label:"Endpoints"}],headerActions:[{actionName:"new-endpoint",actionLabel:"New Endpoint",actionIcon:a.jsx(i,{className:"w-4 h-4"}),onClick:()=>alert("New endpoint clicked")}],tabs:[{name:"all",label:"All Endpoints"},{name:"active",label:"Active (2)"},{name:"disabled",label:"Disabled (1)"}],activeTab:m,onTabChange:d,tableProps:{name:"Registered API Endpoints",keyColumn:"id",visibleSearchbar:!0,columns:[{id:"id",label:"ID",isKeyColumn:!0},{id:"name",label:"Endpoint Name",isSortable:!0},{id:"url",label:"URL"},{id:"status",label:"Status",format:e=>a.jsx(b,{variant:e==="ONLINE"?"success":"neutral",children:e})}],pagingResult:{totalElements:2,content:[{id:"EP-1",name:"Lazada Stock",url:"https://api.lazada.vn/stock",status:"ONLINE"},{id:"EP-2",name:"Hasaki Price",url:"https://api.hasaki.vn/price",status:"ONLINE"}]},pagingOptions:{pageIndex:c,pageSize:10,orderBy:"name",rowsPerPageOptions:[10,20],onPageChange:e=>p(e)}},floatingActions:[{actionName:"refresh",actionLabel:"Refresh Endpoints",actionIcon:a.jsx(i,{className:"w-4 h-4"}),onClick:()=>alert("Refreshed")}]})}};var s,o,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,D as default};
