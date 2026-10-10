import{j as n}from"./jsx-runtime-DFAAy_2V.js";import{W as m}from"./WizardCreationTemplate-l7UY4BCH.js";import{P as r}from"./DynamicForm-BeH_LtCD.js";import"./index-Bc2G9s8g.js";import"./cn-DOIGBiOF.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";import"./WizardStepper-CievZDox.js";import"./check-My_ONosZ.js";import"./createLucideIcon-B_AfoRjS.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./info-BsSq_3Pd.js";const o=({pageTitle:i="Create Job",...s})=>n.jsx(m,{pageTitle:i,...s});o.displayName="JobCreationTemplate";o.__docgenInfo={description:"",methods:[],displayName:"JobCreationTemplate",props:{pageTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Create Job'",computed:!1}}},composes:["Omit"]};const V={title:"Templates/JobCreationTemplate",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>n.jsx(o,{breadcrumbs:[{label:"Jobs",href:"#"},{label:"New Job"}],steps:[{name:"general",label:"Job Configuration",properties:[{propName:"actionId",propValue:"",propType:r.Selection,propLabel:"Associated Action"},{propName:"triggerType",propValue:"MANUAL",propType:r.Selection,propLabel:"Trigger Type"}]}],activeStep:0,onStepChange:()=>{},onPropertyChange:()=>{},onFinish:()=>{}})};var p,t,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <JobCreationTemplate breadcrumbs={[{
    label: 'Jobs',
    href: '#'
  }, {
    label: 'New Job'
  }]} steps={[{
    name: 'general',
    label: 'Job Configuration',
    properties: [{
      propName: 'actionId',
      propValue: '',
      propType: PropType.Selection,
      propLabel: 'Associated Action'
    }, {
      propName: 'triggerType',
      propValue: 'MANUAL',
      propType: PropType.Selection,
      propLabel: 'Trigger Type'
    }]
  }]} activeStep={0} onStepChange={() => {}} onPropertyChange={() => {}} onFinish={() => {}} />
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,V as default};
