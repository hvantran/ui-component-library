import{j as s}from"./jsx-runtime-DFAAy_2V.js";import{r as i}from"./index-Bc2G9s8g.js";import{D as a}from"./DarkModeToggle-D0wMpeAm.js";import"./cn-DOIGBiOF.js";import"./sun-PuEiAdbO.js";import"./createLucideIcon-B_AfoRjS.js";import"./moon-BstY4RHq.js";const M={title:"Molecules/DarkModeToggle",component:a,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>{const[e,r]=i.useState(!1);return s.jsx(a,{isDark:e,onToggle:()=>r(!e)})}},o={render:()=>{const[e,r]=i.useState(!1);return s.jsx(a,{variant:"button",isDark:e,onToggle:()=>r(!e)})}},n={render:()=>{const[e,r]=i.useState(!0);return s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(a,{size:"sm",isDark:e,onToggle:()=>r(!e)}),s.jsx(a,{size:"md",isDark:e,onToggle:()=>r(!e)}),s.jsx(a,{size:"lg",isDark:e,onToggle:()=>r(!e)})]})}};var g,D,c;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />;
  }
}`,...(c=(D=t.parameters)==null?void 0:D.docs)==null?void 0:c.source}}};var k,l,m;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return <DarkModeToggle variant="button" isDark={isDark} onToggle={() => setIsDark(!isDark)} />;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isDark, setIsDark] = useState(true);
    return <div className="flex items-center gap-4">
        <DarkModeToggle size="sm" isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <DarkModeToggle size="md" isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <DarkModeToggle size="lg" isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </div>;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default","ButtonVariant","Sizes"];export{o as ButtonVariant,t as Default,n as Sizes,v as __namedExportsOrder,M as default};
