import{j as i}from"./jsx-runtime-DFAAy_2V.js";import{r as l}from"./index-Bc2G9s8g.js";import{T as r}from"./ThemeModeToggle-Dt27pN6y.js";import"./ThemeProvider-UX4W3fwv.js";import"./cn-DOIGBiOF.js";import"./sun-CdeBiqXE.js";import"./createLucideIcon-B_AfoRjS.js";const S={title:"Molecules/ThemeModeToggle",component:r,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>{const[t,s]=l.useState("system");return i.jsx(r,{mode:t,onModeChange:s,variant:"button"})}},o={render:()=>{const[t,s]=l.useState("system");return i.jsx(r,{mode:t,onModeChange:s,variant:"segmented"})}};var a,n,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState<ThemeMode>('system');
    return <ThemeModeToggle mode={mode} onModeChange={setMode} variant="button" />;
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState<ThemeMode>('system');
    return <ThemeModeToggle mode={mode} onModeChange={setMode} variant="segmented" />;
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const y=["DefaultButton","Segmented"];export{e as DefaultButton,o as Segmented,y as __namedExportsOrder,S as default};
