import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as t}from"./index-Bc2G9s8g.js";import{B as E}from"./Badge-An41I-r3.js";import{D as r}from"./DataTable-DqXuCFCE.js";import{c as A}from"./createLucideIcon-B_AfoRjS.js";import{T as L}from"./trash-2-DVbRFama.js";import"./cn-DOIGBiOF.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-BWr813Dc.js";import"./search-BA6qmz_L.js";import"./x-DiakLl4d.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=A("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),U={title:"Organisms/DataTable",component:r},I=[{id:"ACT-001",name:"Lazada Poller",type:"HTTP_POLL",status:"ACTIVE",items:120},{id:"ACT-002",name:"Hasaki Poller",type:"HTTP_POLL",status:"ACTIVE",items:85},{id:"ACT-003",name:"Email Digest",type:"BATCH_JOB",status:"PAUSED",items:0},{id:"ACT-004",name:"Cleanup Old Logs",type:"MAINTENANCE",status:"COMPLETED",items:450}],s={render:()=>{const[h,S]=t.useState(0),[C,y]=t.useState(10),[b,w]=t.useState("name"),[o,P]=t.useState(""),l=I.filter(e=>e.name.toLowerCase().includes(o.toLowerCase())),T=[{id:"id",label:"ID",isKeyColumn:!0,minWidth:"100px"},{id:"name",label:"Action Name",isSortable:!0},{id:"type",label:"Type"},{id:"status",label:"Status",format:e=>{const i=e==="ACTIVE"?"success":e==="PAUSED"?"warning":"neutral";return a.jsx(E,{variant:i,children:e})}},{id:"items",label:"Processed",align:"right"},{id:"actions",label:"Actions",align:"center",actions:[{actionName:"view",actionLabel:"View details",actionIcon:a.jsx(f,{className:"w-3.5 h-3.5"}),onClick:e=>()=>alert(`Viewing ${e.name}`)},{actionName:"delete",actionLabel:"Delete action",actionIcon:a.jsx(L,{className:"w-3.5 h-3.5 text-error-500"}),onClick:e=>()=>alert(`Deleting ${e.name}`)}]}];return a.jsx("div",{className:"p-6",children:a.jsx(r,{name:"Action Workflows",columns:T,keyColumn:"id",visibleSearchbar:!0,searchPlaceholder:"Search actions...",pagingResult:{totalElements:l.length,content:l},pagingOptions:{pageIndex:h,pageSize:C,orderBy:b,searchText:o,onPageChange:(e,i,D,x)=>{S(e),y(i),w(D),P(x)}}})})}},n={render:()=>a.jsx("div",{className:"p-6",children:a.jsx(r,{name:"Loading Data",loading:!0,columns:[{id:"id",label:"ID",isKeyColumn:!0},{id:"title",label:"Title"}],keyColumn:"id",pagingResult:{totalElements:0,content:[]},pagingOptions:{pageIndex:0,pageSize:5,orderBy:"id",onPageChange:()=>{}}})})};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,p,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const J=["Default","LoadingState"];export{s as Default,n as LoadingState,J as __namedExportsOrder,U as default};
