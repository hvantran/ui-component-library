import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{E as p}from"./EntitySummaryTemplate-DA9uCbVL.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./Tabs-BbqbLFpu.js";import"./DataTable-C8mZM1eV.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination-BSX9E1Zt.js";import"./chevron-left-CKd1PQWo.js";import"./chevron-right-DDBX69dD.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const a=({pageTitle:n="Template Task Summary",...o})=>r.jsx(p,{pageTitle:n,...o});a.displayName="TemplateTaskSummaryTemplate";a.__docgenInfo={description:"",methods:[],displayName:"TemplateTaskSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Template Task Summary'",computed:!1}}},composes:["Omit"]};const I={title:"Templates/TemplateTaskSummaryTemplate",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>r.jsx(a,{breadcrumbs:[{label:"Home",href:"#"},{label:"Template Tasks"}],tableProps:{name:"Template Tasks",columns:[{id:"taskName",label:"Task Name",isSortable:!0},{id:"status",label:"Status"}],keyColumn:"taskName",pagingResult:{totalElements:1,content:[{taskName:"Price Extraction Task",status:"SUCCESS"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"taskName",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var t,m,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <TemplateTaskSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'Template Tasks'
  }]} tableProps={{
    name: 'Template Tasks',
    columns: [{
      id: 'taskName',
      label: 'Task Name',
      isSortable: true
    }, {
      id: 'status',
      label: 'Status'
    }],
    keyColumn: 'taskName',
    pagingResult: {
      totalElements: 1,
      content: [{
        taskName: 'Price Extraction Task',
        status: 'SUCCESS'
      }]
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'taskName',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const R=["Default"];export{e as Default,R as __namedExportsOrder,I as default};
