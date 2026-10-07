import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{r as a}from"./index-Bc2G9s8g.js";import{P as e}from"./DynamicForm-BTNkXq5M.js";import{W as l}from"./WizardStepper-CAVkJKAg.js";import"./cn-DOIGBiOF.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./createLucideIcon-B_AfoRjS.js";import"./Button-CHA6iI3F.js";import"./check-My_ONosZ.js";const R={title:"Organisms/WizardStepper",component:l},N=[{name:"general",label:"General Information",description:"Provide basic workflow metadata",properties:[{propName:"workflowName",propLabel:"Workflow Name",propType:e.InputText,propValue:"Inventory Sync",isRequired:!0,colSpan:6},{propName:"cronExpression",propLabel:"Cron Expression",propType:e.InputText,propValue:"0 */15 * * * *",colSpan:6}]},{name:"auth",label:"Authentication",description:"Configure endpoint access credentials",properties:[{propName:"enableAuth",propLabel:"Requires Token",propType:e.Switcher,propValue:!0},{propName:"bearerToken",propLabel:"Bearer Token",propType:e.InputText,propValue:"",colSpan:12,dependOn:[{propName:"enableAuth",equals:!0}]}]},{name:"review",label:"Confirmation",description:"Review and activate workflow",properties:[{propName:"notes",propLabel:"Deployment Notes",propType:e.Textarea,propValue:"Ready for production deployment.",colSpan:12}]}],p={render:()=>{const[m,c]=a.useState(N),[u,d]=a.useState(0),S=(x,f,v)=>{c(h=>h.map((r,y)=>y!==x?r:{...r,properties:r.properties.map(t=>t.propName===f?{...t,propValue:v}:t)}))};return o.jsx("div",{className:"p-6 max-w-4xl",children:o.jsx(l,{steps:m,activeStep:u,onStepChange:d,onPropertyChange:S,onFinish:()=>alert("Wizard completed successfully!"),onCancel:()=>alert("Wizard cancelled")})})}};var s,n,i;p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [steps, setSteps] = useState(sampleSteps);
    const [activeStep, setActiveStep] = useState(0);
    const handlePropChange = (stepIdx: number, propName: string, value: any) => {
      setSteps(prev => prev.map((step, idx) => {
        if (idx !== stepIdx) return step;
        return {
          ...step,
          properties: step.properties.map(p => p.propName === propName ? {
            ...p,
            propValue: value
          } : p)
        };
      }));
    };
    return <div className="p-6 max-w-4xl">
        <WizardStepper steps={steps} activeStep={activeStep} onStepChange={setActiveStep} onPropertyChange={handlePropChange} onFinish={() => alert('Wizard completed successfully!')} onCancel={() => alert('Wizard cancelled')} />
      </div>;
  }
}`,...(i=(n=p.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const j=["Default"];export{p as Default,j as __namedExportsOrder,R as default};
