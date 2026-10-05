import{j as n}from"./jsx-runtime-DFAAy_2V.js";import{E as l}from"./EntitySummaryTemplate-DkNtTRJ8.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./Tabs-BbqbLFpu.js";import"./DataTable-udgpyq1D.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const t=({pageTitle:p="Template Summary",...o})=>n.jsx(l,{pageTitle:p,...o});t.displayName="TemplateSummaryTemplate";t.__docgenInfo={description:"",methods:[],displayName:"TemplateSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Template Summary'",computed:!1}}},composes:["Omit"]};const k={title:"Templates/TemplateSummaryTemplate",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>n.jsx(t,{breadcrumbs:[{label:"Home",href:"#"},{label:"Templates"}],tableProps:{name:"Templates",columns:[{id:"templateName",label:"Template Name",isSortable:!0},{id:"description",label:"Description"},{id:"updatedAt",label:"Last Updated",isSortable:!0}],keyColumn:"templateName",pagingResult:{totalElements:2,content:[{templateName:"Lazada Poller",description:"Price monitoring template",updatedAt:"2026-10-01"},{templateName:"Hasaki Poller",description:"Product sync poller",updatedAt:"2026-10-03"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"-updatedAt",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var a,m,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <TemplateSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'Templates'
  }]} tableProps={{
    name: 'Templates',
    columns: [{
      id: 'templateName',
      label: 'Template Name',
      isSortable: true
    }, {
      id: 'description',
      label: 'Description'
    }, {
      id: 'updatedAt',
      label: 'Last Updated',
      isSortable: true
    }],
    keyColumn: 'templateName',
    pagingResult: {
      totalElements: 2,
      content: [{
        templateName: 'Lazada Poller',
        description: 'Price monitoring template',
        updatedAt: '2026-10-01'
      }, {
        templateName: 'Hasaki Poller',
        description: 'Product sync poller',
        updatedAt: '2026-10-03'
      }]
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: '-updatedAt',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(r=(m=e.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,k as default};
