import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as v}from"./index-Bc2G9s8g.js";import{M as B}from"./Modal-COnLWL7L.js";import{B as o}from"./Button-CHA6iI3F.js";import{c as S}from"./cn-DOIGBiOF.js";const t=({open:n,isOpen:a,title:y,content:C,children:x,positiveText:h="Confirm",negativeText:T="Cancel",positiveAction:w,onConfirm:D,negativeAction:b,onCancel:O,onClose:s,positiveVariant:R="primary",negativeVariant:q="outlined",loading:l=!1,maxWidth:V="sm",className:j})=>{const A=n??a??!1,N=w??D,c=b??O??s,k=e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:q,size:"md",onClick:c,disabled:l,children:T}),e.jsx(o,{variant:R,size:"md",onClick:N,loading:l,children:h})]});return e.jsx(B,{isOpen:A,onClose:s??c??(()=>{}),title:y,maxWidth:V,footer:k,className:S("shadow-2xl",j),children:e.jsx("div",{className:"text-sm leading-6 text-gray-600 dark:text-gray-300",children:C??x})})};t.displayName="ConfirmationDialog";t.__docgenInfo={description:`Molecule — ConfirmationDialog

Reusable confirmation and alert prompt dialog adhering to Atomic Design.
Composes Modal and Button atoms to provide unified confirmation flows across microservices.`,methods:[],displayName:"ConfirmationDialog",props:{open:{required:!1,tsType:{name:"boolean"},description:"Visibility state (supports both open and isOpen)"},isOpen:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Dialog heading title"},content:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Confirmation message content"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Body children as alternative to content"},positiveText:{required:!1,tsType:{name:"string"},description:"Primary / confirm button label",defaultValue:{value:"'Confirm'",computed:!1}},negativeText:{required:!1,tsType:{name:"string"},description:"Secondary / cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},positiveAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary / confirm action callback"},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Alias for positiveAction"},negativeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary / cancel action callback"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Alias for negativeAction"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Modal close callback"},positiveVariant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'danger'
| 'ghost'
| 'outlined'
| 'neutral'
| 'accent'
| 'warning'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'warning'"}]},description:"Visual variant for primary confirmation button",defaultValue:{value:"'primary'",computed:!1}},negativeVariant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'danger'
| 'ghost'
| 'outlined'
| 'neutral'
| 'accent'
| 'warning'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'warning'"}]},description:"Visual variant for cancel button",defaultValue:{value:"'outlined'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state on confirm button",defaultValue:{value:"false",computed:!1}},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Max width dialog size",defaultValue:{value:"'sm'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra container className"}}};const K={title:"Molecules/ConfirmationDialog",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{positiveVariant:{control:"select",options:["primary","secondary","danger","ghost","outlined"]},negativeVariant:{control:"select",options:["primary","secondary","danger","ghost","outlined"]},loading:{control:"boolean"},isOpen:{control:"boolean"}}},r={render:()=>{const[n,a]=v.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>a(!0),children:"Trigger Confirmation"}),e.jsx(t,{isOpen:n,title:"Confirm Action",content:"Are you sure you want to proceed with this operation?",positiveText:"Proceed",negativeText:"Cancel",onConfirm:()=>{alert("Confirmed!"),a(!1)},onCancel:()=>a(!1)})]})}},i={render:()=>{const[n,a]=v.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{variant:"danger",onClick:()=>a(!0),children:"Delete Resource"}),e.jsx(t,{isOpen:n,title:"Delete Confirmation",content:"This action cannot be undone. Are you sure you want to delete this resource?",positiveText:"Delete",positiveVariant:"danger",negativeText:"Keep Resource",onConfirm:()=>{alert("Deleted!"),a(!1)},onCancel:()=>a(!1)})]})}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,f,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const F=["Default","DangerDelete"];export{i as DangerDelete,r as Default,F as __namedExportsOrder,K as default};
