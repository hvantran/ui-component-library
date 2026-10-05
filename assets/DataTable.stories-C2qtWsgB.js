import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as t}from"./index-Bc2G9s8g.js";import{B as v}from"./Badge-An41I-r3.js";import{D as r}from"./DataTable-udgpyq1D.js";import{c as h}from"./createLucideIcon-B_AfoRjS.js";import"./cn-DOIGBiOF.js";import"./Skeleton-BFTnpoLa.js";import"./Tooltip-DRcnShFR.js";import"./EmptyState-D1RQUAPS.js";import"./Pagination--hraVaWA.js";import"./chevron-right-CbamweGA.js";import"./SearchBar-CT5KQg-V.js";import"./x-DiakLl4d.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=h("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=h("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),W={title:"Organisms/DataTable",component:r},f=[{id:"ACT-001",name:"Lazada Poller",type:"HTTP_POLL",status:"ACTIVE",items:120},{id:"ACT-002",name:"Hasaki Poller",type:"HTTP_POLL",status:"ACTIVE",items:85},{id:"ACT-003",name:"Email Digest",type:"BATCH_JOB",status:"PAUSED",items:0},{id:"ACT-004",name:"Cleanup Old Logs",type:"MAINTENANCE",status:"COMPLETED",items:450}],s={render:()=>{const[y,S]=t.useState(0),[C,w]=t.useState(10),[b,x]=t.useState("name"),[o,P]=t.useState(""),l=f.filter(e=>e.name.toLowerCase().includes(o.toLowerCase())),T=[{id:"id",label:"ID",isKeyColumn:!0,minWidth:"100px"},{id:"name",label:"Action Name",isSortable:!0},{id:"type",label:"Type"},{id:"status",label:"Status",format:e=>{const i=e==="ACTIVE"?"success":e==="PAUSED"?"warning":"neutral";return a.jsx(v,{variant:i,children:e})}},{id:"items",label:"Processed",align:"right"},{id:"actions",label:"Actions",align:"center",actions:[{actionName:"view",actionLabel:"View details",actionIcon:a.jsx(A,{className:"w-3.5 h-3.5"}),onClick:e=>()=>alert(`Viewing ${e.name}`)},{actionName:"delete",actionLabel:"Delete action",actionIcon:a.jsx(L,{className:"w-3.5 h-3.5 text-error-500"}),onClick:e=>()=>alert(`Deleting ${e.name}`)}]}];return a.jsx("div",{className:"p-6",children:a.jsx(r,{name:"Action Workflows",columns:T,keyColumn:"id",visibleSearchbar:!0,searchPlaceholder:"Search actions...",pagingResult:{totalElements:l.length,content:l},pagingOptions:{pageIndex:y,pageSize:C,orderBy:b,searchText:o,onPageChange:(e,i,D,E)=>{S(e),w(i),x(D),P(E)}}})})}},n={render:()=>a.jsx("div",{className:"p-6",children:a.jsx(r,{name:"Loading Data",loading:!0,columns:[{id:"id",label:"ID",isKeyColumn:!0},{id:"title",label:"Title"}],keyColumn:"id",pagingResult:{totalElements:0,content:[]},pagingOptions:{pageIndex:0,pageSize:5,orderBy:"id",onPageChange:()=>{}}})})};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,p,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const $=["Default","LoadingState"];export{s as Default,n as LoadingState,$ as __namedExportsOrder,W as default};
