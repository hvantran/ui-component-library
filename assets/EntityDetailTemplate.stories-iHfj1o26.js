import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as h}from"./index-Bc2G9s8g.js";import{P as o}from"./DynamicForm-BeH_LtCD.js";import{E as s}from"./EntityDetailTemplate-CxqZABDP.js";import{S as T}from"./save-BE_mo5no.js";import"./cn-DOIGBiOF.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./info-BsSq_3Pd.js";import"./createLucideIcon-B_AfoRjS.js";import"./Card-C-7XTUWd.js";import"./Tabs-BbqbLFpu.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";const k={title:"Templates/EntityDetailTemplate",component:s},e={render:()=>{const[i,l]=h.useState([{propName:"endpointName",propLabel:"Endpoint Name",propType:o.InputText,propValue:"Shopee Order Ingestion",isRequired:!0,colSpan:6},{propName:"method",propLabel:"Method",propType:o.Selection,propValue:"GET",colSpan:6,selectionMeta:{selections:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}]}},{propName:"url",propLabel:"URL",propType:o.InputText,propValue:"https://partner.shopeemobile.com/api/v2/order/get_order_list",colSpan:12}]),m=(c,d)=>{l(u=>u.map(p=>p.propName===c?{...p,propValue:d}:p))};return r.jsx(s,{pageTitle:"Endpoint Configuration",breadcrumbs:[{label:"Endpoints",href:"/endpoints"},{label:"Shopee Order Ingestion"}],headerActions:[{actionName:"save",actionLabel:"Save Changes",actionIcon:r.jsx(T,{className:"w-4 h-4"}),onClick:()=>alert("Changes saved!")}],properties:i,onPropertyChange:m})}};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [properties, setProperties] = useState([{
      propName: 'endpointName',
      propLabel: 'Endpoint Name',
      propType: PropType.InputText,
      propValue: 'Shopee Order Ingestion',
      isRequired: true,
      colSpan: 6 as const
    }, {
      propName: 'method',
      propLabel: 'Method',
      propType: PropType.Selection,
      propValue: 'GET',
      colSpan: 6 as const,
      selectionMeta: {
        selections: [{
          label: 'GET',
          value: 'GET'
        }, {
          label: 'POST',
          value: 'POST'
        }]
      }
    }, {
      propName: 'url',
      propLabel: 'URL',
      propType: PropType.InputText,
      propValue: 'https://partner.shopeemobile.com/api/v2/order/get_order_list',
      colSpan: 12 as const
    }]);
    const handlePropChange = (name: string, val: any) => {
      setProperties(prev => prev.map(p => p.propName === name ? {
        ...p,
        propValue: val
      } : p));
    };
    return <EntityDetailTemplate pageTitle="Endpoint Configuration" breadcrumbs={[{
      label: 'Endpoints',
      href: '/endpoints'
    }, {
      label: 'Shopee Order Ingestion'
    }]} headerActions={[{
      actionName: 'save',
      actionLabel: 'Save Changes',
      actionIcon: <Save className="w-4 h-4" />,
      onClick: () => alert('Changes saved!')
    }]} properties={properties} onPropertyChange={handlePropChange} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,k as default};
