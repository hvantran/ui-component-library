import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{M as i}from"./Modal-COnLWL7L.js";import{B as o}from"./Button-D_NtnFls.js";import"./cn-DOIGBiOF.js";const x={title:"Atoms/Modal",component:i,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[l,t]=c.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(i,{isOpen:l,onClose:()=>t(!1),title:"Confirm Action Deletion",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"danger",onClick:()=>t(!1),children:"Delete Action"})]}),children:e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Are you sure you want to delete this action? This operation will terminate all running jobs associated with this action and cannot be undone."})})]})}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm Action Deletion" footer={<>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Delete Action
              </Button>
            </>}>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Are you sure you want to delete this action? This operation will terminate all running
            jobs associated with this action and cannot be undone.
          </p>
        </Modal>
      </div>;
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,x as default};
