import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{B as m}from"./Badge-An41I-r3.js";import{B as n}from"./Button-CHA6iI3F.js";import{S as d}from"./SearchBar-BWr813Dc.js";import{A as i}from"./AppTopBar-CfxyCSZw.js";import{B as p}from"./bell-L6GYhVNW.js";import"./cn-DOIGBiOF.js";import"./search-BA6qmz_L.js";import"./createLucideIcon-B_AfoRjS.js";import"./x-DiakLl4d.js";import"./sun-CdeBiqXE.js";const k={title:"Organisms/AppTopBar",component:i},s={render:()=>{const[r,l]=c.useState(!1);return e.jsx("div",{className:r?"dark bg-slate-900 min-h-[160px]":"bg-slate-50 min-h-[160px]",children:e.jsx(i,{title:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-bold text-primary-600",children:"PM"}),e.jsx("span",{children:"Microservices"})]}),searchSlot:e.jsx(d,{placeholder:"Search resources... (Press /)"}),isDarkMode:r,onThemeToggle:()=>l(!r),actionsSlot:e.jsx(n,{variant:"ghost",size:"sm","aria-label":"Notifications",children:e.jsx(p,{className:"w-4 h-4"})}),userSlot:e.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold",children:"HT"}),e.jsx(m,{variant:"success",size:"sm",children:"Admin"})]})})})}};var a,t,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [darkMode, setDarkMode] = useState(false);
    return <div className={darkMode ? 'dark bg-slate-900 min-h-[160px]' : 'bg-slate-50 min-h-[160px]'}>
        <AppTopBar title={<div className="flex items-center gap-2">
              <span className="font-bold text-primary-600">PM</span>
              <span>Microservices</span>
            </div>} searchSlot={<SearchBar placeholder="Search resources... (Press /)" />} isDarkMode={darkMode} onThemeToggle={() => setDarkMode(!darkMode)} actionsSlot={<Button variant="ghost" size="sm" aria-label="Notifications">
              <Bell className="w-4 h-4" />
            </Button>} userSlot={<div className="flex items-center gap-2 text-xs">
              <div className="w-7 h-7 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                HT
              </div>
              <Badge variant="success" size="sm">Admin</Badge>
            </div>} />
      </div>;
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,k as default};
