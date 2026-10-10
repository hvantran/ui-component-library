import{j as y}from"./jsx-runtime-DFAAy_2V.js";import{r as a}from"./index-Bc2G9s8g.js";import{P as r}from"./DynamicForm-BeH_LtCD.js";import{W as m}from"./WizardCreationTemplate-l7UY4BCH.js";import"./cn-DOIGBiOF.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./info-BsSq_3Pd.js";import"./createLucideIcon-B_AfoRjS.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";import"./WizardStepper-CievZDox.js";import"./check-My_ONosZ.js";const q={title:"Templates/WizardCreationTemplate",component:m},e={render:()=>{const[l,n]=a.useState(0),[c,d]=a.useState([{name:"info",label:"General Information",description:"Template metadata and target application",properties:[{propName:"templateName",propLabel:"Template Name",propType:r.InputText,propValue:"Default Email Notification",isRequired:!0}]},{name:"body",label:"Template Content",description:"Compose default email body",properties:[{propName:"content",propLabel:"HTML / Text Content",propType:r.Textarea,propValue:"Hello {{user}}, your order has shipped!"}]}]),u=(T,f,b)=>{d(C=>C.map((t,h)=>h===T?{...t,properties:t.properties.map(p=>p.propName===f?{...p,propValue:b}:p)}:t))};return y.jsx(m,{pageTitle:"Create Notification Template",breadcrumbs:[{label:"Templates",href:"/templates"},{label:"Create"}],steps:c,activeStep:l,onStepChange:n,onPropertyChange:u,onFinish:()=>alert("Template created successfully!")})}};var o,s,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,q as default};
