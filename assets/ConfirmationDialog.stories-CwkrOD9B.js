import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import{C as a}from"./ConfirmationDialog-DrYCGSqF.js";import{B as m}from"./Button-CHA6iI3F.js";import"./Modal-COnLWL7L.js";import"./cn-DOIGBiOF.js";const O={title:"Molecules/ConfirmationDialog",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{positiveVariant:{control:"select",options:["primary","secondary","danger","ghost","outlined"]},negativeVariant:{control:"select",options:["primary","secondary","danger","ghost","outlined"]},loading:{control:"boolean"},isOpen:{control:"boolean"}}},o={render:()=>{const[r,e]=d.useState(!1);return t.jsxs("div",{children:[t.jsx(m,{onClick:()=>e(!0),children:"Trigger Confirmation"}),t.jsx(a,{isOpen:r,title:"Confirm Action",content:"Are you sure you want to proceed with this operation?",positiveText:"Proceed",negativeText:"Cancel",onConfirm:()=>{alert("Confirmed!"),e(!1)},onCancel:()=>e(!1)})]})}},n={render:()=>{const[r,e]=d.useState(!1);return t.jsxs("div",{children:[t.jsx(m,{variant:"danger",onClick:()=>e(!0),children:"Delete Resource"}),t.jsx(a,{isOpen:r,title:"Delete Confirmation",content:"This action cannot be undone. Are you sure you want to delete this resource?",positiveText:"Delete",positiveVariant:"danger",negativeText:"Keep Resource",onConfirm:()=>{alert("Deleted!"),e(!1)},onCancel:()=>e(!1)})]})}};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Trigger Confirmation</Button>
        <ConfirmationDialog isOpen={open} title="Confirm Action" content="Are you sure you want to proceed with this operation?" positiveText="Proceed" negativeText="Cancel" onConfirm={() => {
        alert('Confirmed!');
        setOpen(false);
      }} onCancel={() => setOpen(false)} />
      </div>;
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Resource
        </Button>
        <ConfirmationDialog isOpen={open} title="Delete Confirmation" content="This action cannot be undone. Are you sure you want to delete this resource?" positiveText="Delete" positiveVariant="danger" negativeText="Keep Resource" onConfirm={() => {
        alert('Deleted!');
        setOpen(false);
      }} onCancel={() => setOpen(false)} />
      </div>;
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["Default","DangerDelete"];export{n as DangerDelete,o as Default,h as __namedExportsOrder,O as default};
