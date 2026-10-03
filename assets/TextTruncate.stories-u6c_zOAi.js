import{j as i}from"./jsx-runtime-DFAAy_2V.js";import{T as v}from"./Tooltip-DRcnShFR.js";import{c as j}from"./cn-DOIGBiOF.js";import"./index-Bc2G9s8g.js";function q(e,t){const o=Array.from(e);return o.length>t?`${o.slice(0,t).join("")}...`:e}const c=({text:e,maxLength:t,maxTextLength:o,tooltipVisible:y,tooltipVisiable:L,className:l})=>{if(!e)return i.jsx("span",{className:l});const a=t??o??30,S=(y??L??!0)&&e.length>a,A=e.length>a,w=q(e,a),p=i.jsx("span",{className:j("inline-block truncate max-w-full align-bottom",l),children:w});return A&&S?i.jsx(v,{content:e,children:p}):p};c.displayName="TextTruncate";c.__docgenInfo={description:`Molecule — TextTruncate

Truncates overflowing strings with an ellipsis and renders an accessible
Tooltip displaying the complete string on hover/focus.`,methods:[],displayName:"TextTruncate",props:{text:{required:!1,tsType:{name:"string"},description:"Input text to truncate"},maxLength:{required:!1,tsType:{name:"number"},description:"Maximum number of characters before truncation"},maxTextLength:{required:!1,tsType:{name:"number"},description:"Alias for maxLength (backwards compatibility)"},tooltipVisible:{required:!1,tsType:{name:"boolean"},description:"Whether to show full text in tooltip on hover/focus"},tooltipVisiable:{required:!1,tsType:{name:"boolean"},description:"Typo alias for tooltipVisible"},className:{required:!1,tsType:{name:"string"},description:"Additional container class name"}}};const N={title:"Molecules/TextTruncate",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{maxLength:{control:"number"},tooltipVisible:{control:"boolean"}}},r={args:{text:"A very long identifier or commit SHA that needs to be truncated for UI presentation",maxLength:24}},n={args:{text:"Short string",maxLength:24}},s={args:{text:"A long string without tooltip display on hover",maxLength:20,tooltipVisible:!1}};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'A very long identifier or commit SHA that needs to be truncated for UI presentation',
    maxLength: 24
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Short string',
    maxLength: 24
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,T,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'A long string without tooltip display on hover',
    maxLength: 20,
    tooltipVisible: false
  }
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const W=["Default","ShortText","WithoutTooltip"];export{r as Default,n as ShortText,s as WithoutTooltip,W as __namedExportsOrder,N as default};
