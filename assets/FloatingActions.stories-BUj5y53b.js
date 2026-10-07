import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{F as r}from"./FloatingActions-CQe26Bj4.js";import{R as i}from"./refresh-cw-CGqbG-AS.js";import{D as c}from"./download-BiTzWxBw.js";import{S as s}from"./send-CdHCFn30.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./plus-a76MUymE.js";import"./createLucideIcon-B_AfoRjS.js";const u={title:"Organisms/FloatingActions",component:r},a={render:()=>t.jsxs("div",{className:"relative h-96 w-full border border-dashed rounded-card p-4",children:[t.jsx("p",{className:"text-secondary-500 text-sm",children:"Click the bottom right button to expand floating actions."}),t.jsx(r,{actions:[{actionName:"sync",actionLabel:"Trigger Sync",actionIcon:t.jsx(i,{className:"w-4 h-4 text-primary-600"}),onClick:()=>alert("Sync triggered!")},{actionName:"export",actionLabel:"Export CSV",actionIcon:t.jsx(c,{className:"w-4 h-4 text-secondary-600"}),onClick:()=>alert("Exporting data...")},{actionName:"notify",actionLabel:"Send Notification",actionIcon:t.jsx(s,{className:"w-4 h-4 text-accent-600"}),onClick:()=>alert("Notification queued")}]})]})};var o,e,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="relative h-96 w-full border border-dashed rounded-card p-4">
      <p className="text-secondary-500 text-sm">
        Click the bottom right button to expand floating actions.
      </p>
      <FloatingActions actions={[{
      actionName: 'sync',
      actionLabel: 'Trigger Sync',
      actionIcon: <RefreshCw className="w-4 h-4 text-primary-600" />,
      onClick: () => alert('Sync triggered!')
    }, {
      actionName: 'export',
      actionLabel: 'Export CSV',
      actionIcon: <Download className="w-4 h-4 text-secondary-600" />,
      onClick: () => alert('Exporting data...')
    }, {
      actionName: 'notify',
      actionLabel: 'Send Notification',
      actionIcon: <Send className="w-4 h-4 text-accent-600" />,
      onClick: () => alert('Notification queued')
    }]} />
    </div>
}`,...(n=(e=a.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,u as default};
