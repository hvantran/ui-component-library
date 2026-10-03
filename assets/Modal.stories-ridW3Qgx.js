import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as u}from"./index-Bc2G9s8g.js";import{c as g}from"./cn-DOIGBiOF.js";import{B as o}from"./Button-D_NtnFls.js";const h={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"},r=({isOpen:a,onClose:t,title:s,maxWidth:p="md",children:x,footer:i,className:y})=>(u.useEffect(()=>{const l=f=>{f.key==="Escape"&&a&&t()};return a&&(document.body.style.overflow="hidden",window.addEventListener("keydown",l)),()=>{document.body.style.overflow="",window.removeEventListener("keydown",l)}},[a,t]),a?e.jsxs("div",{role:"dialog","aria-modal":"true",className:"fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 transition-opacity backdrop-blur-sm",onClick:t,"aria-hidden":"true"}),e.jsxs("div",{className:g("relative w-full rounded-card bg-white p-6 shadow-modal transition-all","dark:bg-gray-800 dark:border dark:border-gray-700 text-gray-900 dark:text-gray-100",h[p],y),children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700",children:[s&&e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:s}),e.jsx("button",{type:"button",onClick:t,"aria-label":"Close modal",className:"ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition",children:e.jsx("span",{className:"text-xl leading-none",children:"×"})})]}),e.jsx("div",{className:"py-4",children:x}),i&&e.jsx("div",{className:"flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700",children:i})]})]}):null);r.displayName="Modal";r.__docgenInfo={description:`Atom — Modal

Accessible modal dialog with backdrop overlay, Escape key detection,
and responsive centering.`,methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Open visibility state"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback triggered when user clicks backdrop, close icon, or hits Escape"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal header title"},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Max width constraint: 'sm' | 'md' | 'lg' | 'xl'",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal body content"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal footer action buttons"},className:{required:!1,tsType:{name:"string"},description:"Extra container className"}}};const j={title:"Atoms/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[a,t]=u.useState(!1);return e.jsxs("div",{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(r,{isOpen:a,onClose:()=>t(!1),title:"Confirm Action Deletion",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"secondary",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"danger",onClick:()=>t(!1),children:"Delete Action"})]}),children:e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Are you sure you want to delete this action? This operation will terminate all running jobs associated with this action and cannot be undone."})})]})}};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["Default"];export{n as Default,N as __namedExportsOrder,j as default};
