import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{E as m}from"./EntitySummaryTemplate-DeYzHzUA.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./Tabs-BbqbLFpu.js";import"./DataTable-DqXuCFCE.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const e=({pageTitle:p="External Endpoints",...s})=>r.jsx(m,{pageTitle:p,...s});e.displayName="ExtEndpointSummaryTemplate";e.__docgenInfo={description:"",methods:[],displayName:"ExtEndpointSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'External Endpoints'",computed:!1}}},composes:["Omit"]};const R={title:"Templates/ExtEndpointSummaryTemplate",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}},t={render:()=>r.jsx(e,{breadcrumbs:[{label:"Home",href:"#"},{label:"External Endpoints"}],tableProps:{name:"Endpoints",columns:[{id:"endpointUrl",label:"Endpoint URL",isSortable:!0},{id:"method",label:"Method"},{id:"status",label:"Status"}],keyColumn:"endpointUrl",pagingResult:{totalElements:2,content:[{endpointUrl:"https://api.example.com/v1/data",method:"GET",status:"ACTIVE"},{endpointUrl:"https://api.example.com/v1/events",method:"POST",status:"PAUSED"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"endpointUrl",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <ExtEndpointSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'External Endpoints'
  }]} tableProps={{
    name: 'Endpoints',
    columns: [{
      id: 'endpointUrl',
      label: 'Endpoint URL',
      isSortable: true
    }, {
      id: 'method',
      label: 'Method'
    }, {
      id: 'status',
      label: 'Status'
    }],
    keyColumn: 'endpointUrl',
    pagingResult: {
      totalElements: 2,
      content: [{
        endpointUrl: 'https://api.example.com/v1/data',
        method: 'GET',
        status: 'ACTIVE'
      }, {
        endpointUrl: 'https://api.example.com/v1/events',
        method: 'POST',
        status: 'PAUSED'
      }]
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'endpointUrl',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,R as default};
