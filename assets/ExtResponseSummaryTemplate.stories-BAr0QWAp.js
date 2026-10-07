import{j as p}from"./jsx-runtime-DFAAy_2V.js";import{E as m}from"./EntitySummaryTemplate-DeYzHzUA.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./Tabs-BbqbLFpu.js";import"./DataTable-DqXuCFCE.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const t=({pageTitle:a="Collected Responses",...r})=>p.jsx(m,{pageTitle:a,...r});t.displayName="ExtResponseSummaryTemplate";t.__docgenInfo={description:"",methods:[],displayName:"ExtResponseSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Collected Responses'",computed:!1}}},composes:["Omit"]};const j={title:"Templates/ExtResponseSummaryTemplate",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>p.jsx(t,{breadcrumbs:[{label:"Home",href:"#"},{label:"Collected Responses"}],tableProps:{name:"Responses",columns:[{id:"responseId",label:"Response ID",isSortable:!0},{id:"endpoint",label:"Endpoint"},{id:"statusCode",label:"Status Code"},{id:"timestamp",label:"Timestamp"}],keyColumn:"responseId",pagingResult:{totalElements:2,content:[{responseId:"resp-001",endpoint:"https://api.example.com/v1",statusCode:200,timestamp:"2026-10-05 10:00:00"},{responseId:"resp-002",endpoint:"https://api.example.com/v2",statusCode:500,timestamp:"2026-10-05 10:05:00"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"responseId",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <ExtResponseSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'Collected Responses'
  }]} tableProps={{
    name: 'Responses',
    columns: [{
      id: 'responseId',
      label: 'Response ID',
      isSortable: true
    }, {
      id: 'endpoint',
      label: 'Endpoint'
    }, {
      id: 'statusCode',
      label: 'Status Code'
    }, {
      id: 'timestamp',
      label: 'Timestamp'
    }],
    keyColumn: 'responseId',
    pagingResult: {
      totalElements: 2,
      content: [{
        responseId: 'resp-001',
        endpoint: 'https://api.example.com/v1',
        statusCode: 200,
        timestamp: '2026-10-05 10:00:00'
      }, {
        responseId: 'resp-002',
        endpoint: 'https://api.example.com/v2',
        statusCode: 500,
        timestamp: '2026-10-05 10:05:00'
      }]
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'responseId',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,j as default};
