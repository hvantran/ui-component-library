import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{T as t}from"./Tooltip-DRcnShFR.js";import{B as n}from"./Button-D_NtnFls.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";const h={title:"Atoms/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},disabled:{control:"boolean"}}},i={args:{content:"Helpful information",position:"top",children:o.jsx(n,{size:"sm",children:"Hover or Focus Me"})}},e={render:()=>o.jsxs("div",{className:"flex items-center gap-6 p-12",children:[o.jsx(t,{content:"Tooltip on Top",position:"top",children:o.jsx(n,{size:"sm",variant:"outlined",children:"Top"})}),o.jsx(t,{content:"Tooltip on Bottom",position:"bottom",children:o.jsx(n,{size:"sm",variant:"outlined",children:"Bottom"})}),o.jsx(t,{content:"Tooltip on Left",position:"left",children:o.jsx(n,{size:"sm",variant:"outlined",children:"Left"})}),o.jsx(t,{content:"Tooltip on Right",position:"right",children:o.jsx(n,{size:"sm",variant:"outlined",children:"Right"})})]})};var s,r,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    content: 'Helpful information',
    position: 'top',
    children: <Button size="sm">Hover or Focus Me</Button>
  }
}`,...(p=(r=i.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var a,l,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-12">
      <Tooltip content="Tooltip on Top" position="top">
        <Button size="sm" variant="outlined">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" position="bottom">
        <Button size="sm" variant="outlined">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Left" position="left">
        <Button size="sm" variant="outlined">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Right" position="right">
        <Button size="sm" variant="outlined">Right</Button>
      </Tooltip>
    </div>
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Default","Positions"];export{i as Default,e as Positions,x as __namedExportsOrder,h as default};
