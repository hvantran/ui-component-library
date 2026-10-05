import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{S as r}from"./StatusChip-Bq9SfrHW.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const k={title:"Atoms/StatusChip",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["proctoring","pending","draft","published","active","neutral","success","warning","error"]},size:{control:"select",options:["small","medium"]}}},e={args:{label:"Proctoring Active",variant:"proctoring"}},t={args:{label:"2 Pending",variant:"pending"}},s={args:{label:"Draft",variant:"draft"}},n={args:{label:"Published",variant:"published"}},i={args:{label:"Active",variant:"active"}},l={args:{label:"Needs Grading",variant:"neutral"}},o={args:{label:"Deletable Status",variant:"warning",onDelete:()=>alert("Status removed")}},c={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{label:"Proctoring",variant:"proctoring"}),a.jsx(r,{label:"Pending",variant:"pending"}),a.jsx(r,{label:"Draft",variant:"draft"}),a.jsx(r,{label:"Published",variant:"published"}),a.jsx(r,{label:"Active",variant:"active"}),a.jsx(r,{label:"Neutral",variant:"neutral"}),a.jsx(r,{label:"Success",variant:"success"}),a.jsx(r,{label:"Warning",variant:"warning"}),a.jsx(r,{label:"Error",variant:"error"})]})};var p,d,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Proctoring Active',
    variant: 'proctoring'
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,m,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: '2 Pending',
    variant: 'pending'
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,S,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Draft',
    variant: 'draft'
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var f,x,P;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Published',
    variant: 'published'
  }
}`,...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var j,A,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    variant: 'active'
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var D,N,w;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Needs Grading',
    variant: 'neutral'
  }
}`,...(w=(N=l.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var E,R,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Deletable Status',
    variant: 'warning',
    onDelete: () => alert('Status removed')
  }
}`,...(y=(R=o.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var G,V,W;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <StatusChip label="Proctoring" variant="proctoring" />
      <StatusChip label="Pending" variant="pending" />
      <StatusChip label="Draft" variant="draft" />
      <StatusChip label="Published" variant="published" />
      <StatusChip label="Active" variant="active" />
      <StatusChip label="Neutral" variant="neutral" />
      <StatusChip label="Success" variant="success" />
      <StatusChip label="Warning" variant="warning" />
      <StatusChip label="Error" variant="error" />
    </div>
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const q=["Proctoring","Pending","Draft","Published","Active","Neutral","Removable","AllVariants"];export{i as Active,c as AllVariants,s as Draft,l as Neutral,t as Pending,e as Proctoring,n as Published,o as Removable,q as __namedExportsOrder,k as default};
