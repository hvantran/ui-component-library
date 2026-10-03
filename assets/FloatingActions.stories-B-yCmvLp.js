import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{F as c}from"./FloatingActions-CQe26Bj4.js";import{R as r}from"./refresh-cw-CGqbG-AS.js";import{c as i}from"./createLucideIcon-B_AfoRjS.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./plus-a76MUymE.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=i("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=i("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),g={title:"Organisms/FloatingActions",component:c},a={render:()=>t.jsxs("div",{className:"relative h-96 w-full border border-dashed rounded-card p-4",children:[t.jsx("p",{className:"text-secondary-500 text-sm",children:"Click the bottom right button to expand floating actions."}),t.jsx(c,{actions:[{actionName:"sync",actionLabel:"Trigger Sync",actionIcon:t.jsx(r,{className:"w-4 h-4 text-primary-600"}),onClick:()=>alert("Sync triggered!")},{actionName:"export",actionLabel:"Export CSV",actionIcon:t.jsx(s,{className:"w-4 h-4 text-secondary-600"}),onClick:()=>alert("Exporting data...")},{actionName:"notify",actionLabel:"Send Notification",actionIcon:t.jsx(l,{className:"w-4 h-4 text-accent-600"}),onClick:()=>alert("Notification queued")}]})]})};var e,o,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const N=["Default"];export{a as Default,N as __namedExportsOrder,g as default};
