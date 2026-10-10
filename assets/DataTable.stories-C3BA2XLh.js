import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as t}from"./index-Bc2G9s8g.js";import{B as E}from"./Badge-An41I-r3.js";import{D as r}from"./DataTable-C8mZM1eV.js";import{E as A}from"./eye-BBDNTHZV.js";import{T as f}from"./trash-2-DVbRFama.js";import"./cn-DOIGBiOF.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./createLucideIcon-B_AfoRjS.js";import"./Pagination-BSX9E1Zt.js";import"./chevron-left-CKd1PQWo.js";import"./chevron-right-DDBX69dD.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";const J={title:"Organisms/DataTable",component:r},L=[{id:"ACT-001",name:"Lazada Poller",type:"HTTP_POLL",status:"ACTIVE",items:120},{id:"ACT-002",name:"Hasaki Poller",type:"HTTP_POLL",status:"ACTIVE",items:85},{id:"ACT-003",name:"Email Digest",type:"BATCH_JOB",status:"PAUSED",items:0},{id:"ACT-004",name:"Cleanup Old Logs",type:"MAINTENANCE",status:"COMPLETED",items:450}],s={render:()=>{const[S,h]=t.useState(0),[C,b]=t.useState(10),[w,P]=t.useState("name"),[o,T]=t.useState(""),l=L.filter(e=>e.name.toLowerCase().includes(o.toLowerCase())),y=[{id:"id",label:"ID",isKeyColumn:!0,minWidth:"100px"},{id:"name",label:"Action Name",isSortable:!0},{id:"type",label:"Type"},{id:"status",label:"Status",format:e=>{const n=e==="ACTIVE"?"success":e==="PAUSED"?"warning":"neutral";return a.jsx(E,{variant:n,children:e})}},{id:"items",label:"Processed",align:"right"},{id:"actions",label:"Actions",align:"center",actions:[{actionName:"view",actionLabel:"View details",actionIcon:a.jsx(A,{className:"w-3.5 h-3.5"}),onClick:e=>()=>alert(`Viewing ${e.name}`)},{actionName:"delete",actionLabel:"Delete action",actionIcon:a.jsx(f,{className:"w-3.5 h-3.5 text-error-500"}),onClick:e=>()=>alert(`Deleting ${e.name}`)}]}];return a.jsx("div",{className:"p-6",children:a.jsx(r,{name:"Action Workflows",columns:y,keyColumn:"id",visibleSearchbar:!0,searchPlaceholder:"Search actions...",pagingResult:{totalElements:l.length,content:l},pagingOptions:{pageIndex:S,pageSize:C,orderBy:w,searchText:o,onPageChange:(e,n,D,x)=>{h(e),b(n),P(D),T(x)}}})})}},i={render:()=>a.jsx("div",{className:"p-6",children:a.jsx(r,{name:"Loading Data",loading:!0,columns:[{id:"id",label:"ID",isKeyColumn:!0},{id:"title",label:"Title"}],keyColumn:"id",pagingResult:{totalElements:0,content:[]},pagingOptions:{pageIndex:0,pageSize:5,orderBy:"id",onPageChange:()=>{}}})})};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [orderBy, setOrderBy] = useState('name');
    const [search, setSearch] = useState('');
    const filtered = sampleData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    const columns = [{
      id: 'id',
      label: 'ID',
      isKeyColumn: true,
      minWidth: '100px'
    }, {
      id: 'name',
      label: 'Action Name',
      isSortable: true
    }, {
      id: 'type',
      label: 'Type'
    }, {
      id: 'status',
      label: 'Status',
      format: (val: string) => {
        const variant = val === 'ACTIVE' ? 'success' : val === 'PAUSED' ? 'warning' : 'neutral';
        return <Badge variant={variant}>{val}</Badge>;
      }
    }, {
      id: 'items',
      label: 'Processed',
      align: 'right' as const
    }, {
      id: 'actions',
      label: 'Actions',
      align: 'center' as const,
      actions: [{
        actionName: 'view',
        actionLabel: 'View details',
        actionIcon: <Eye className="w-3.5 h-3.5" />,
        onClick: row => () => alert(\`Viewing \${row.name}\`)
      }, {
        actionName: 'delete',
        actionLabel: 'Delete action',
        actionIcon: <Trash2 className="w-3.5 h-3.5 text-error-500" />,
        onClick: row => () => alert(\`Deleting \${row.name}\`)
      }]
    }];
    return <div className="p-6">
        <DataTable name="Action Workflows" columns={columns} keyColumn="id" visibleSearchbar searchPlaceholder="Search actions..." pagingResult={{
        totalElements: filtered.length,
        content: filtered
      }} pagingOptions={{
        pageIndex: page,
        pageSize: pageSize,
        orderBy: orderBy,
        searchText: search,
        onPageChange: (newPage, newPageSize, newOrder, newSearch) => {
          setPage(newPage);
          setPageSize(newPageSize);
          setOrderBy(newOrder);
          setSearch(newSearch);
        }
      }} />
      </div>;
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,p,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <DataTable name="Loading Data" loading columns={[{
      id: 'id',
      label: 'ID',
      isKeyColumn: true
    }, {
      id: 'title',
      label: 'Title'
    }]} keyColumn="id" pagingResult={{
      totalElements: 0,
      content: []
    }} pagingOptions={{
      pageIndex: 0,
      pageSize: 5,
      orderBy: 'id',
      onPageChange: () => {}
    }} />
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const q=["Default","LoadingState"];export{s as Default,i as LoadingState,q as __namedExportsOrder,J as default};
