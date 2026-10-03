import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as y}from"./index-Bc2G9s8g.js";import{P as T}from"./DynamicForm-Dpn8QGe_.js";import{c as S}from"./cn-DOIGBiOF.js";import{P as v}from"./PageHeader-CQ-KDVzf.js";import{W as C}from"./WizardStepper-BYkeci3L.js";import"./CodeEditor-C8htClxd.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./createLucideIcon-B_AfoRjS.js";import"./Button-DUc58pJe.js";import"./Breadcrumbs-DO4WTt5L.js";const r=({pageTitle:p,breadcrumbs:n,steps:o,activeStep:s,onStepChange:i,onFinish:m,onPropertyChange:l,onCancel:d,loading:u=!1,className:e})=>t.jsxs("div",{role:"main",className:S("w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans",e),children:[t.jsx(v,{title:p,breadcrumbs:n}),t.jsx("div",{className:"w-full mt-2",children:t.jsx(C,{steps:o,activeStep:s,onStepChange:i,onFinish:m,onPropertyChange:l,onCancel:d,loading:u})})]});r.displayName="WizardCreationTemplate";r.__docgenInfo={description:"",methods:[],displayName:"WizardCreationTemplate",props:{pageTitle:{required:!0,tsType:{name:"string"},description:""},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepMetadata"}],raw:"StepMetadata[]"},description:""},activeStep:{required:!0,tsType:{name:"number"},description:""},onStepChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(newStepIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"newStepIndex"}],return:{name:"void"}}},description:""},onFinish:{required:!0,tsType:{name:"signature",type:"function",raw:"(steps: StepMetadata[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"StepMetadata"}],raw:"StepMetadata[]"},name:"steps"}],return:{name:"void"}}},description:""},onPropertyChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(stepIndex: number, propName: string, value: any) => void",signature:{arguments:[{type:{name:"number"},name:"stepIndex"},{type:{name:"string"},name:"propName"},{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Templates/WizardCreationTemplate",component:r},a={render:()=>{const[p,n]=y.useState(0),[o,s]=y.useState([{name:"info",label:"General Information",description:"Template metadata and target application",properties:[{propName:"templateName",propLabel:"Template Name",propType:T.InputText,propValue:"Default Email Notification",isRequired:!0}]},{name:"body",label:"Template Content",description:"Compose default email body",properties:[{propName:"content",propLabel:"HTML / Text Content",propType:T.Textarea,propValue:"Hello {{user}}, your order has shipped!"}]}]),i=(m,l,d)=>{s(u=>u.map((e,x)=>x===m?{...e,properties:e.properties.map(c=>c.propName===l?{...c,propValue:d}:c)}:e))};return t.jsx(r,{pageTitle:"Create Notification Template",breadcrumbs:[{label:"Templates",href:"/templates"},{label:"Create"}],steps:o,activeStep:p,onStepChange:n,onPropertyChange:i,onFinish:()=>alert("Template created successfully!")})}};var f,g,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState<StepMetadata[]>([{
      name: 'info',
      label: 'General Information',
      description: 'Template metadata and target application',
      properties: [{
        propName: 'templateName',
        propLabel: 'Template Name',
        propType: PropType.InputText,
        propValue: 'Default Email Notification',
        isRequired: true
      }]
    }, {
      name: 'body',
      label: 'Template Content',
      description: 'Compose default email body',
      properties: [{
        propName: 'content',
        propLabel: 'HTML / Text Content',
        propType: PropType.Textarea,
        propValue: 'Hello {{user}}, your order has shipped!'
      }]
    }]);
    const handlePropChange = (stepIdx: number, propName: string, value: any) => {
      setSteps(prev => prev.map((step, idx) => idx === stepIdx ? {
        ...step,
        properties: step.properties.map(p => p.propName === propName ? {
          ...p,
          propValue: value
        } : p)
      } : step));
    };
    return <WizardCreationTemplate pageTitle="Create Notification Template" breadcrumbs={[{
      label: 'Templates',
      href: '/templates'
    }, {
      label: 'Create'
    }]} steps={steps} activeStep={activeStep} onStepChange={setActiveStep} onPropertyChange={handlePropChange} onFinish={() => alert('Template created successfully!')} />;
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,D as default};
