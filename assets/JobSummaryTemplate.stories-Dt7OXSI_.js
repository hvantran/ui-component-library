import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{E as l}from"./EntitySummaryTemplate-DA9uCbVL.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./Tabs-BbqbLFpu.js";import"./DataTable-C8mZM1eV.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination-BSX9E1Zt.js";import"./chevron-left-CKd1PQWo.js";import"./chevron-right-DDBX69dD.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const t=({pageTitle:s="Job Summary",...m})=>r.jsx(l,{pageTitle:s,...m});t.displayName="JobSummaryTemplate";t.__docgenInfo={description:"",methods:[],displayName:"JobSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Job Summary'",computed:!1}}},composes:["Omit"]};const C={title:"Templates/JobSummaryTemplate",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>r.jsx(t,{breadcrumbs:[{label:"Home",href:"#"},{label:"Jobs"}],tableProps:{name:"Jobs",columns:[{id:"jobId",label:"Job ID",isSortable:!0},{id:"actionName",label:"Action"},{id:"status",label:"Status"},{id:"startedAt",label:"Started At"}],keyColumn:"jobId",pagingResult:{totalElements:2,content:[{jobId:"job-101",actionName:"Lazada Poller",status:"COMPLETED",startedAt:"2026-10-05 10:00"},{jobId:"job-102",actionName:"Hasaki Poller",status:"RUNNING",startedAt:"2026-10-05 10:15"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"jobId",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <JobSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'Jobs'
  }]} tableProps={{
    name: 'Jobs',
    columns: [{
      id: 'jobId',
      label: 'Job ID',
      isSortable: true
    }, {
      id: 'actionName',
      label: 'Action'
    }, {
      id: 'status',
      label: 'Status'
    }, {
      id: 'startedAt',
      label: 'Started At'
    }],
    keyColumn: 'jobId',
    pagingResult: {
      totalElements: 2,
      content: [{
        jobId: 'job-101',
        actionName: 'Lazada Poller',
        status: 'COMPLETED',
        startedAt: '2026-10-05 10:00'
      }, {
        jobId: 'job-102',
        actionName: 'Hasaki Poller',
        status: 'RUNNING',
        startedAt: '2026-10-05 10:15'
      }]
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'jobId',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,C as default};
