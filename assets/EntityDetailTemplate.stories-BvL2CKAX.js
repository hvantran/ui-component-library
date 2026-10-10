import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as h}from"./index-Bc2G9s8g.js";import{P as o}from"./DynamicForm-BeH_LtCD.js";import{E as s}from"./EntityDetailTemplate-CxqZABDP.js";import{c as T}from"./createLucideIcon-B_AfoRjS.js";import"./cn-DOIGBiOF.js";import"./CodeEditor-DtOq6-2E.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./info-BsSq_3Pd.js";import"./Card-C-7XTUWd.js";import"./Tabs-BbqbLFpu.js";import"./FloatingActions-CQe26Bj4.js";import"./plus-a76MUymE.js";import"./PageHeader-DLSUzz-b.js";import"./Button-CHA6iI3F.js";import"./Breadcrumbs-DO4WTt5L.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=T("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),j={title:"Templates/EntityDetailTemplate",component:s},e={render:()=>{const[i,l]=h.useState([{propName:"endpointName",propLabel:"Endpoint Name",propType:o.InputText,propValue:"Shopee Order Ingestion",isRequired:!0,colSpan:6},{propName:"method",propLabel:"Method",propType:o.Selection,propValue:"GET",colSpan:6,selectionMeta:{selections:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}]}},{propName:"url",propLabel:"URL",propType:o.InputText,propValue:"https://partner.shopeemobile.com/api/v2/order/get_order_list",colSpan:12}]),m=(c,d)=>{l(u=>u.map(p=>p.propName===c?{...p,propValue:d}:p))};return r.jsx(s,{pageTitle:"Endpoint Configuration",breadcrumbs:[{label:"Endpoints",href:"/endpoints"},{label:"Shopee Order Ingestion"}],headerActions:[{actionName:"save",actionLabel:"Save Changes",actionIcon:r.jsx(S,{className:"w-4 h-4"}),onClick:()=>alert("Changes saved!")}],properties:i,onPropertyChange:m})}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,j as default};
