import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{E as d}from"./EntityDetailTemplate-BAPUEo2x.js";import{D as u}from"./DataTable-udgpyq1D.js";import{L as b}from"./list-BwDpmaGF.js";import{C as y}from"./circle-plus-CYouhRyA.js";import{P as t}from"./DynamicForm-Dpn8QGe_.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./Card-C-7XTUWd.js";import"./Tabs-BbqbLFpu.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./createLucideIcon-B_AfoRjS.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";import"./CodeEditor-C8htClxd.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";const n=({pageTitle:l="Action Details",jobsTableProps:a,onAddJob:r,children:m,...c})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{pageTitle:l,...c}),a&&e.jsxs("div",{className:"w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 font-sans -mt-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-semibold text-secondary-900 dark:text-white flex items-center gap-2",children:[e.jsx(b,{className:"w-5 h-5 text-primary-600"}),"Jobs in this Action"]}),e.jsx("p",{className:"text-xs text-secondary-500",children:"Manage and monitor jobs linked to this action definition"})]}),r&&e.jsxs("button",{type:"button",onClick:r,className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-btn bg-primary-600 text-white hover:bg-primary-700 font-medium text-xs shadow-sm transition-colors",children:[e.jsx(y,{className:"w-4 h-4"}),e.jsx("span",{children:"Add Job"})]})]}),e.jsx(u,{...a})]}),m]});n.displayName="ActionDetailTemplate";n.__docgenInfo={description:"",methods:[],displayName:"ActionDetailTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Action Details'",computed:!1}},jobsTableProps:{required:!1,tsType:{name:"DataTableProps",elements:[{name:"any"}],raw:"DataTableProps<any>"},description:""},onAddJob:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};const G={title:"Templates/ActionDetailTemplate",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}},o={render:()=>e.jsx(n,{breadcrumbs:[{label:"Actions",href:"#"},{label:"Action Details"}],properties:[{propName:"name",propValue:"Daily Inventory Sync",propType:t.InputText,propLabel:"Action Name"},{propName:"type",propValue:"HTTP_REQUEST_MONITOR",propType:t.Selection,propLabel:"Action Type"},{propName:"schedule",propValue:"0 0 * * *",propType:t.InputText,propLabel:"Cron Schedule"},{propName:"status",propValue:"ENABLED",propType:t.Selection,propLabel:"Status"}],onPropertyChange:()=>{},onAddJob:()=>alert("Add job clicked"),jobsTableProps:{name:"Action Jobs",columns:[{id:"jobId",label:"Job ID",isSortable:!0},{id:"name",label:"Job Name"},{id:"status",label:"Status"}],keyColumn:"jobId",pagingResult:{totalElements:1,content:[{jobId:"job-1",name:"Poller Instance 1",status:"RUNNING"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"jobId",searchText:"",rowsPerPageOptions:[10,20],onPageChange:()=>{}}}})};var p,s,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ActionDetailTemplate breadcrumbs={[{
    label: 'Actions',
    href: '#'
  }, {
    label: 'Action Details'
  }]} properties={[{
    propName: 'name',
    propValue: 'Daily Inventory Sync',
    propType: PropType.InputText,
    propLabel: 'Action Name'
  }, {
    propName: 'type',
    propValue: 'HTTP_REQUEST_MONITOR',
    propType: PropType.Selection,
    propLabel: 'Action Type'
  }, {
    propName: 'schedule',
    propValue: '0 0 * * *',
    propType: PropType.InputText,
    propLabel: 'Cron Schedule'
  }, {
    propName: 'status',
    propValue: 'ENABLED',
    propType: PropType.Selection,
    propLabel: 'Status'
  }]} onPropertyChange={() => {}} onAddJob={() => alert('Add job clicked')} jobsTableProps={{
    name: 'Action Jobs',
    columns: [{
      id: 'jobId',
      label: 'Job ID',
      isSortable: true
    }, {
      id: 'name',
      label: 'Job Name'
    }, {
      id: 'status',
      label: 'Status'
    }],
    keyColumn: 'jobId',
    pagingResult: {
      totalElements: 1,
      content: [{
        jobId: 'job-1',
        name: 'Poller Instance 1',
        status: 'RUNNING'
      }]
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'jobId',
      searchText: '',
      rowsPerPageOptions: [10, 20],
      onPageChange: () => {}
    }
  }} />
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const H=["Default"];export{o as Default,H as __namedExportsOrder,G as default};
