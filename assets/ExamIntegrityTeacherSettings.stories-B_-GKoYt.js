import{j as g}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{E as n}from"./ExamIntegrityTeacherSettings-C6uCLvwP.js";import"./Button-CHA6iI3F.js";import"./cn-DOIGBiOF.js";import"./Input-DJtXJ0bQ.js";import"./ThemeModeToggle-Dt27pN6y.js";import"./ThemeProvider-UX4W3fwv.js";import"./sun-CdeBiqXE.js";import"./createLucideIcon-B_AfoRjS.js";import"./settings-fcItWnOe.js";import"./save-BE_mo5no.js";import"./sparkles-DyW_OlUX.js";const R={title:"Organisms/ExamIntegrityTeacherSettings",component:n,tags:["autodocs"]},e={render:()=>{const[o,_]=c.useState({egg_shop_price_stars:250,egg_hatch_duration_hours:8,strike_crack_star_cost:25,equip_egg_star_cost:25,pet_grow_star_cost:25,pet_grow_exp_gain:60,pet_max_level:10,pet_base_exp_needed:100,stars_per_score_point:1,stars_per_user_level:20});return g.jsx(n,{settings:o,onSettingsChange:(t,p)=>_(i=>({...i,[t]:p})),onSave:t=>{t.preventDefault(),alert("Settings saved!")},onResetDefaults:()=>alert("Reset to defaults")})}};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState<SystemSettingsData>({
      egg_shop_price_stars: 250,
      egg_hatch_duration_hours: 8,
      strike_crack_star_cost: 25,
      equip_egg_star_cost: 25,
      pet_grow_star_cost: 25,
      pet_grow_exp_gain: 60,
      pet_max_level: 10,
      pet_base_exp_needed: 100,
      stars_per_score_point: 1.0,
      stars_per_user_level: 20
    });
    return <ExamIntegrityTeacherSettings settings={settings} onSettingsChange={(key, val) => setSettings(prev => ({
      ...prev,
      [key]: val
    }))} onSave={e => {
      e.preventDefault();
      alert('Settings saved!');
    }} onResetDefaults={() => alert('Reset to defaults')} />;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,R as default};
