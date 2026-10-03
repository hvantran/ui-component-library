import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{r as n}from"./index-Bc2G9s8g.js";import{P as g}from"./Pagination-BEH2llnY.js";import"./cn-DOIGBiOF.js";import"./createLucideIcon-B_AfoRjS.js";const P={title:"Molecules/Pagination",component:g,args:{totalElements:125}},e={render:i=>{const[t,c]=n.useState(0),[p,d]=n.useState(10);return a.jsxs("div",{className:"p-4 border rounded-card",children:[a.jsxs("div",{className:"p-8 text-center text-secondary-500",children:["Showing content for page ",t+1]}),a.jsx(g,{...i,pageIndex:t,pageSize:p,onPageChange:c,onPageSizeChange:d})]})}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    return <div className="p-4 border rounded-card">
        <div className="p-8 text-center text-secondary-500">
          Showing content for page {page + 1}
        </div>
        <Pagination {...args} pageIndex={page} pageSize={pageSize} onPageChange={setPage} onPageSizeChange={setPageSize} />
      </div>;
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,P as default};
