import{j as i}from"./jsx-runtime-DFAAy_2V.js";import{r as k}from"./index-Bc2G9s8g.js";import{E as q}from"./ExamIntegrityTeacherDashboardTemplate-dR95fTJp.js";import{E as w}from"./ExamIntegrityTeacherSettings-bcJBWosT.js";import"./cn-DOIGBiOF.js";import"./AppTopBar-Bd34hX38.js";import"./menu-2aDT6BCZ.js";import"./createLucideIcon-B_AfoRjS.js";import"./sun-CdeBiqXE.js";import"./Button-CHA6iI3F.js";import"./ConfirmationDialog-DrYCGSqF.js";import"./Modal-COnLWL7L.js";import"./ExamIntegrityTeacherDashboardSidebar-C7JMhtph.js";import"./chevron-right-DDBX69dD.js";import"./settings-fcItWnOe.js";import"./pin-BoLPiBs2.js";import"./house-BEAfKVH-.js";import"./upload-DYBEGjPC.js";import"./clipboard-pen-T1q2-2n7.js";import"./book-open-ChD5BcpV.js";import"./chart-no-axes-column-CyYxYu0I.js";import"./bell-L6GYhVNW.js";import"./circle-help-B2eb56TI.js";import"./circle-plus-CYouhRyA.js";import"./Input-DJtXJ0bQ.js";import"./save-BE_mo5no.js";import"./sparkles-DyW_OlUX.js";const o=({userName:a="",userRole:r,onNavigate:e,onCreateExam:s,onSettings:n,onLogout:u,dockMode:d="pinned",onDockModeChange:g,className:c,settings:_,onSettingsChange:v,onSave:f,onResetDefaults:h,isLoading:y=!1,isSaving:x=!1,pageTitle:S,pageSubtitle:T})=>i.jsx(q,{userName:a,userRole:r,activeSection:"settings",onNavigate:e,onCreateExam:s,onSettings:n,onLogout:u,dockMode:d,onDockModeChange:g,className:c,children:i.jsx(w,{settings:_,onSettingsChange:v,onSave:f,onResetDefaults:h,isLoading:y,isSaving:x,pageTitle:S,pageSubtitle:T})});o.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityTeacherSettingsTemplate",props:{userName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},userRole:{required:!1,tsType:{name:"string"},description:""},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(section: ExamIntegrityDashboardSection) => void",signature:{arguments:[{type:{name:"union",raw:`| 'dashboard'
| 'ingestion'
| 'review'
| 'scoring'
| 'question-bank'
| 'reports'
| 'settings'`,elements:[{name:"literal",value:"'dashboard'"},{name:"literal",value:"'ingestion'"},{name:"literal",value:"'review'"},{name:"literal",value:"'scoring'"},{name:"literal",value:"'question-bank'"},{name:"literal",value:"'reports'"},{name:"literal",value:"'settings'"}]},name:"section"}],return:{name:"void"}}},description:""},onCreateExam:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSettings:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},dockMode:{required:!1,tsType:{name:"union",raw:"'pinned' | 'docked' | 'auto-hide'",elements:[{name:"literal",value:"'pinned'"},{name:"literal",value:"'docked'"},{name:"literal",value:"'auto-hide'"}]},description:"",defaultValue:{value:"'pinned'",computed:!1}},onDockModeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(mode: ExamIntegrityNavDockMode) => void",signature:{arguments:[{type:{name:"union",raw:"'pinned' | 'docked' | 'auto-hide'",elements:[{name:"literal",value:"'pinned'"},{name:"literal",value:"'docked'"},{name:"literal",value:"'auto-hide'"}]},name:"mode"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},isSaving:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const $={title:"Templates/ExamIntegrityTeacherSettingsTemplate",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},t={render:()=>{const[a,r]=k.useState({egg_shop_price_stars:250,egg_hatch_duration_hours:8,strike_crack_star_cost:25,equip_egg_star_cost:25,pet_grow_star_cost:25,pet_grow_exp_gain:60,pet_max_level:10,pet_base_exp_needed:100,stars_per_score_point:1,stars_per_user_level:20});return i.jsx(o,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",settings:a,onSettingsChange:(e,s)=>r(n=>({...n,[e]:s})),onSave:e=>{e.preventDefault(),alert("Saved!")},onResetDefaults:()=>alert("Reset to defaults!")})}};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    return <ExamIntegrityTeacherSettingsTemplate userName="Prof. Alexander Wright" userRole="Lead Proctor" settings={settings} onSettingsChange={(key, val) => setSettings(prev => ({
      ...prev,
      [key]: val
    }))} onSave={e => {
      e.preventDefault();
      alert('Saved!');
    }} onResetDefaults={() => alert('Reset to defaults!')} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const ee=["Default"];export{t as Default,ee as __namedExportsOrder,$ as default};
