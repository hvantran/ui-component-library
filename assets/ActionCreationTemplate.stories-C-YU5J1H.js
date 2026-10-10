import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{W as s}from"./WizardCreationTemplate-l7UY4BCH.js";import{P as t}from"./DynamicForm-BeH_LtCD.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";import"./WizardStepper-CievZDox.js";import"./check-My_ONosZ.js";import"./createLucideIcon-B_AfoRjS.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./info-BsSq_3Pd.js";const o=({pageTitle:i="Create Action",...m})=>a.jsx(s,{pageTitle:i,...m});o.displayName="ActionCreationTemplate";o.__docgenInfo={description:"",methods:[],displayName:"ActionCreationTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create Action'",computed:!1}}},composes:["Omit"]};const j={title:"Templates/ActionCreationTemplate",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>a.jsx(o,{breadcrumbs:[{label:"Actions",href:"#"},{label:"New Action"}],steps:[{name:"config",label:"Action Configuration",properties:[{propName:"name",propValue:"",propType:t.InputText,propLabel:"Action Name"},{propName:"cron",propValue:"0 * * * *",propType:t.InputText,propLabel:"Schedule"}]}],activeStep:0,onStepChange:()=>{},onPropertyChange:()=>{},onFinish:()=>{}})};var p,r,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ActionCreationTemplate breadcrumbs={[{
    label: 'Actions',
    href: '#'
  }, {
    label: 'New Action'
  }]} steps={[{
    name: 'config',
    label: 'Action Configuration',
    properties: [{
      propName: 'name',
      propValue: '',
      propType: PropType.InputText,
      propLabel: 'Action Name'
    }, {
      propName: 'cron',
      propValue: '0 * * * *',
      propType: PropType.InputText,
      propLabel: 'Schedule'
    }]
  }]} activeStep={0} onStepChange={() => {}} onPropertyChange={() => {}} onFinish={() => {}} />
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,j as default};
