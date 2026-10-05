import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as j,R as m}from"./index-Bc2G9s8g.js";import{c as C}from"./cn-DOIGBiOF.js";import{V as I}from"./ViewModeToggle-D4HFJqYL.js";import{D as O}from"./DataTable-udgpyq1D.js";import{B}from"./BoardView-BJ3JOmHF.js";import{F as D}from"./FloatingActions-CQe26Bj4.js";import{P as M}from"./PageHeader-DLSUzz-b.js";import{c as k}from"./createLucideIcon-B_AfoRjS.js";import{L as E}from"./list-BwDpmaGF.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";import"./BoardColumn-CjAsaD2B.js";import"./Badge-An41I-r3.js";import"./plus-a76MUymE.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=k("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),R=[{value:"board",label:"Board",icon:m.createElement(L,{size:16})},{value:"list",label:"List",icon:m.createElement(E,{size:16})}],a=({pageTitle:x="Action Summary",breadcrumbs:T,headerActions:h,tableProps:S,boardProps:o,defaultViewMode:A="board",onViewModeChange:i,floatingActions:l,className:P})=>{const[n,w]=j.useState(A),v=d=>{w(d),i==null||i(d)};return e.jsxs("div",{role:"main",className:C("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans",P),children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",children:[e.jsx(M,{title:x,breadcrumbs:T,actions:h}),o&&e.jsx("div",{className:"shrink-0 self-start sm:self-center",children:e.jsx(I,{mode:n,modes:R,onChange:v})})]}),e.jsx("div",{className:"w-full",children:n==="board"&&o?e.jsx(B,{...o}):e.jsx(O,{...S})}),l&&l.length>0&&e.jsx(D,{actions:l})]})};a.displayName="ActionSummaryTemplate";a.__docgenInfo={description:"",methods:[],displayName:"ActionSummaryTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Action Summary'",computed:!1}},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"GenericActionMetadata"}],raw:"GenericActionMetadata[]"},description:""},tableProps:{required:!0,tsType:{name:"DataTableProps",elements:[{name:"T"}],raw:"DataTableProps<T>"},description:""},boardProps:{required:!1,tsType:{name:"BoardViewProps"},description:""},defaultViewMode:{required:!1,tsType:{name:"union",raw:"'board' | 'list'",elements:[{name:"literal",value:"'board'"},{name:"literal",value:"'list'"}]},description:"",defaultValue:{value:"'board'",computed:!1}},onViewModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(mode: 'board' | 'list') => void",signature:{arguments:[{type:{name:"union",raw:"'board' | 'list'",elements:[{name:"literal",value:"'board'"},{name:"literal",value:"'list'"}]},name:"mode"}],return:{name:"void"}}},description:""},floatingActions:{required:!1,tsType:{name:"Array",elements:[{name:"SpeedDialActionMetadata"}],raw:"SpeedDialActionMetadata[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Templates/ActionSummaryTemplate",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}},f=[{id:"todo",title:"To Do",cardIds:["1"]},{id:"in_progress",title:"In Progress",cardIds:["2"]},{id:"done",title:"Done",cardIds:["3"]}],s={1:{id:"1",title:"Run database migration",subtitle:"Ops Team",status:"TODO"},2:{id:"2",title:"Sync product inventory",subtitle:"Poller Service",status:"IN_PROGRESS"},3:{id:"3",title:"Backup cluster volumes",subtitle:"Infra",status:"DONE"}},t={render:()=>e.jsx(a,{breadcrumbs:[{label:"Home",href:"#"},{label:"Action Board"}],defaultViewMode:"board",boardProps:{columns:f,cards:s,onCardClick:()=>{}},tableProps:{name:"Actions",columns:[{id:"id",label:"Action ID",isSortable:!0},{id:"title",label:"Title"},{id:"status",label:"Status"}],keyColumn:"id",pagingResult:{totalElements:3,content:Object.values(s)},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"id",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})},r={render:()=>e.jsx(a,{breadcrumbs:[{label:"Home",href:"#"},{label:"Action List"}],defaultViewMode:"list",boardProps:{columns:f,cards:s},tableProps:{name:"Actions",columns:[{id:"id",label:"Action ID",isSortable:!0},{id:"title",label:"Title"},{id:"status",label:"Status"}],keyColumn:"id",pagingResult:{totalElements:3,content:Object.values(s)},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"id",searchText:"",rowsPerPageOptions:[10,20,50],onPageChange:()=>{}}}})};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const ie=["BoardMode","ListMode"];export{t as BoardMode,r as ListMode,ie as __namedExportsOrder,oe as default};
