import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as j,R as d}from"./index-Bc2G9s8g.js";import{c as C}from"./cn-DOIGBiOF.js";import{V as O}from"./ViewModeToggle-D4HFJqYL.js";import{D as I}from"./DataTable-C8mZM1eV.js";import{B}from"./BoardView-BJ3JOmHF.js";import{F as D}from"./FloatingActions-CQe26Bj4.js";import{P as M}from"./PageHeader-DLSUzz-b.js";import{L as E}from"./layout-grid-Cgbzx6dM.js";import{L as R}from"./list-BwDpmaGF.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination-BSX9E1Zt.js";import"./chevron-left-CKd1PQWo.js";import"./chevron-right-DDBX69dD.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";import"./BoardColumn-CjAsaD2B.js";import"./Badge-An41I-r3.js";import"./plus-a76MUymE.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const q=[{value:"board",label:"Board",icon:d.createElement(E,{size:16})},{value:"list",label:"List",icon:d.createElement(R,{size:16})}],a=({pageTitle:T="Action Summary",breadcrumbs:x,headerActions:S,tableProps:A,boardProps:o,defaultViewMode:P="board",onViewModeChange:i,floatingActions:l,className:w})=>{const[n,v]=j.useState(P),h=m=>{v(m),i==null||i(m)};return e.jsxs("div",{role:"main",className:C("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans",w),children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[e.jsx(M,{title:T,breadcrumbs:x,actions:S}),o&&e.jsx("div",{className:"shrink-0 self-start sm:self-center",children:e.jsx(O,{mode:n,modes:q,onChange:h})})]}),e.jsx("div",{className:"w-full",children:n==="board"&&o?e.jsx(B,{...o}):e.jsx(I,{...A})}),l&&l.length>0&&e.jsx(D,{actions:l})]})};a.displayName="ActionSummaryTemplate";a.__docgenInfo={description:"",methods:[],displayName:"ActionSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Action Summary'",computed:!1}},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"GenericActionMetadata"}],raw:"GenericActionMetadata[]"},description:""},tableProps:{required:!0,tsType:{name:"DataTableProps",elements:[{name:"T"}],raw:"DataTableProps<T>"},description:""},boardProps:{required:!1,tsType:{name:"BoardViewProps"},description:""},defaultViewMode:{required:!1,tsType:{name:"union",raw:"'board' | 'list'",elements:[{name:"literal",value:"'board'"},{name:"literal",value:"'list'"}]},description:"",defaultValue:{value:"'board'",computed:!1}},onViewModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(mode: 'board' | 'list') => void",signature:{arguments:[{type:{name:"union",raw:"'board' | 'list'",elements:[{name:"literal",value:"'board'"},{name:"literal",value:"'list'"}]},name:"mode"}],return:{name:"void"}}},description:""},floatingActions:{required:!1,tsType:{name:"Array",elements:[{name:"SpeedDialActionMetadata"}],raw:"SpeedDialActionMetadata[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const le={title:"Templates/ActionSummaryTemplate",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}},y=[{id:"todo",title:"To Do",cardIds:["1"]},{id:"in_progress",title:"In Progress",cardIds:["2"]},{id:"done",title:"Done",cardIds:["3"]}],r={1:{id:"1",title:"Run database migration",subtitle:"Ops Team",status:"TODO"},2:{id:"2",title:"Sync product inventory",subtitle:"Poller Service",status:"IN_PROGRESS"},3:{id:"3",title:"Backup cluster volumes",subtitle:"Infra",status:"DONE"}},t={render:()=>e.jsx(a,{breadcrumbs:[{label:"Home",href:"#"},{label:"Action Board"}],defaultViewMode:"board",boardProps:{columns:y,cards:r,onCardClick:()=>{}},tableProps:{name:"Actions",columns:[{id:"id",label:"Action ID",isSortable:!0},{id:"title",label:"Title"},{id:"status",label:"Status"}],keyColumn:"id",pagingResult:{totalElements:3,content:Object.values(r)},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"id",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})},s={render:()=>e.jsx(a,{breadcrumbs:[{label:"Home",href:"#"},{label:"Action List"}],defaultViewMode:"list",boardProps:{columns:y,cards:r},tableProps:{name:"Actions",columns:[{id:"id",label:"Action ID",isSortable:!0},{id:"title",label:"Title"},{id:"status",label:"Status"}],keyColumn:"id",pagingResult:{totalElements:3,content:Object.values(r)},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"id",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ActionSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'Action Board'
  }]} defaultViewMode="board" boardProps={{
    columns: sampleColumns,
    cards: sampleCards,
    onCardClick: () => {}
  }} tableProps={{
    name: 'Actions',
    columns: [{
      id: 'id',
      label: 'Action ID',
      isSortable: true
    }, {
      id: 'title',
      label: 'Title'
    }, {
      id: 'status',
      label: 'Status'
    }],
    keyColumn: 'id',
    pagingResult: {
      totalElements: 3,
      content: Object.values(sampleCards)
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'id',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <ActionSummaryTemplate breadcrumbs={[{
    label: 'Home',
    href: '#'
  }, {
    label: 'Action List'
  }]} defaultViewMode="list" boardProps={{
    columns: sampleColumns,
    cards: sampleCards
  }} tableProps={{
    name: 'Actions',
    columns: [{
      id: 'id',
      label: 'Action ID',
      isSortable: true
    }, {
      id: 'title',
      label: 'Title'
    }, {
      id: 'status',
      label: 'Status'
    }],
    keyColumn: 'id',
    pagingResult: {
      totalElements: 3,
      content: Object.values(sampleCards)
    },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'id',
      searchText: '',
      rowsPerPageOptions: [10, 20, 50],
      onPageChange: () => {}
    }
  }} />
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ne=["BoardMode","ListMode"];export{t as BoardMode,s as ListMode,ne as __namedExportsOrder,le as default};
