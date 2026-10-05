import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{r as m}from"./index-Bc2G9s8g.js";import{E as d}from"./EntityDetailTemplate-BAPUEo2x.js";import{E as c}from"./EntitySummaryTemplate-DkNtTRJ8.js";import{P as p}from"./DynamicForm-Dpn8QGe_.js";import"./cn-DOIGBiOF.js";import"./Card-C-7XTUWd.js";import"./Tabs-BbqbLFpu.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./createLucideIcon-B_AfoRjS.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";import"./DataTable-udgpyq1D.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";import"./CodeEditor-C8htClxd.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";const o=({pageTitle:t="Endpoint Details",tableProps:a,...e})=>e.activeTab&&e.activeTab!=="Details"&&a?s.jsx(c,{pageTitle:t,breadcrumbs:e.breadcrumbs,headerActions:e.headerActions,tabs:e.tabs,activeTab:e.activeTab,onTabChange:e.onTabChange,tableProps:a,floatingActions:e.floatingActions,className:e.className}):s.jsx(d,{pageTitle:t,...e});o.displayName="ExtEndpointDetailsTemplate";o.__docgenInfo={description:"",methods:[],displayName:"ExtEndpointDetailsTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Endpoint Details'",computed:!1}},tableProps:{required:!1,tsType:{name:"DataTableProps",elements:[{name:"any"}],raw:"DataTableProps<any>"},description:""}},composes:["Omit"]};const B={title:"Templates/ExtEndpointDetailsTemplate",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},n={render:()=>{const[t,a]=m.useState("Details");return s.jsx(o,{breadcrumbs:[{label:"Endpoints",href:"#"},{label:"Endpoint Details"}],tabs:[{name:"Details",label:"Details"},{name:"Responses",label:"Responses"}],activeTab:t,onTabChange:a,properties:[{propName:"url",propValue:"https://api.example.com/v1/data",propType:p.InputText,propLabel:"Endpoint URL"},{propName:"method",propValue:"GET",propType:p.Selection,propLabel:"HTTP Method"}],onPropertyChange:()=>{},tableProps:{name:"Response Values",columns:[{id:"id",label:"Response ID",isSortable:!0},{id:"status",label:"Status"}],keyColumn:"id",pagingResult:{totalElements:1,content:[{id:"resp-1",status:"200 OK"}]},pagingOptions:{pageIndex:0,pageSize:10,orderBy:"id",searchText:"",rowsPerPageOptions:[10,20],onPageChange:()=>{}}}})}};var r,i,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('Details');
    return <ExtEndpointDetailsTemplate breadcrumbs={[{
      label: 'Endpoints',
      href: '#'
    }, {
      label: 'Endpoint Details'
    }]} tabs={[{
      name: 'Details',
      label: 'Details'
    }, {
      name: 'Responses',
      label: 'Responses'
    }]} activeTab={activeTab} onTabChange={setActiveTab} properties={[{
      propName: 'url',
      propValue: 'https://api.example.com/v1/data',
      propType: PropType.InputText,
      propLabel: 'Endpoint URL'
    }, {
      propName: 'method',
      propValue: 'GET',
      propType: PropType.Selection,
      propLabel: 'HTTP Method'
    }]} onPropertyChange={() => {}} tableProps={{
      name: 'Response Values',
      columns: [{
        id: 'id',
        label: 'Response ID',
        isSortable: true
      }, {
        id: 'status',
        label: 'Status'
      }],
      keyColumn: 'id',
      pagingResult: {
        totalElements: 1,
        content: [{
          id: 'resp-1',
          status: '200 OK'
        }]
      },
      pagingOptions: {
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'id',
        searchText: '',
        rowsPerPageOptions: [10, 20],
        onPageChange: () => {}
      }
    }} />;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const G=["Default"];export{n as Default,G as __namedExportsOrder,B as default};
