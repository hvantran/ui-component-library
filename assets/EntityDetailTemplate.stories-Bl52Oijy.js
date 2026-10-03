import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as f}from"./index-Bc2G9s8g.js";import{D as S,P as c}from"./DynamicForm-Dpn8QGe_.js";import{c as x}from"./cn-DOIGBiOF.js";import{C as N}from"./Card-C-7XTUWd.js";import{T as P}from"./Tabs-BbqbLFpu.js";import{F as E}from"./FloatingActions-CQe26Bj4.js";import{P as C}from"./PageHeader-CMULAMrS.js";import{c as I}from"./createLucideIcon-B_AfoRjS.js";import"./CodeEditor-C8htClxd.js";import"./Input-DJtXJ0bQ.js";import"./Select-MzxQnoU9.js";import"./Switch-B9flQ6e_.js";import"./Textarea-C-ymwUfL.js";import"./Tooltip-DRcnShFR.js";import"./plus-a76MUymE.js";import"./Button-D_NtnFls.js";import"./Breadcrumbs-DO4WTt5L.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=I("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]),n=({pageTitle:o,breadcrumbs:s,headerActions:i,tabs:a,activeTab:l,onTabChange:t,properties:r,onPropertyChange:g,floatingActions:m,disabled:h=!1,className:b,errors:v})=>e.jsxs("div",{role:"main",className:x("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans",b),children:[e.jsx(C,{title:o,breadcrumbs:s,actions:i}),a&&a.length>0&&t&&e.jsx("div",{className:"mb-6",children:e.jsx(P,{tabs:a.map(d=>({id:d.name,label:d.label||d.name})),activeTab:l||a[0].name,onChange:t})}),e.jsx(N,{variant:"outlined",className:"p-6",children:e.jsx(S,{properties:r,onChange:g,disabled:h,errors:v})}),m&&m.length>0&&e.jsx(E,{actions:m})]});n.displayName="EntityDetailTemplate";n.__docgenInfo={description:"",methods:[],displayName:"EntityDetailTemplate",props:{pageTitle:{required:!0,tsType:{name:"string"},description:""},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"GenericActionMetadata"}],raw:"GenericActionMetadata[]"},description:""},tabs:{required:!1,tsType:{name:"Array",elements:[{name:"TabMetadata"}],raw:"TabMetadata[]"},description:""},activeTab:{required:!1,tsType:{name:"string"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},properties:{required:!0,tsType:{name:"Array",elements:[{name:"PropertyMetadata"}],raw:"PropertyMetadata[]"},description:""},onPropertyChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(propName: string, value: any) => void",signature:{arguments:[{type:{name:"string"},name:"propName"},{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},floatingActions:{required:!1,tsType:{name:"Array",elements:[{name:"SpeedDialActionMetadata"}],raw:"SpeedDialActionMetadata[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},errors:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};const K={title:"Templates/EntityDetailTemplate",component:n},p={render:()=>{const[o,s]=f.useState([{propName:"endpointName",propLabel:"Endpoint Name",propType:c.InputText,propValue:"Shopee Order Ingestion",isRequired:!0,colSpan:6},{propName:"method",propLabel:"Method",propType:c.Selection,propValue:"GET",colSpan:6,selectionMeta:{selections:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}]}},{propName:"url",propLabel:"URL",propType:c.InputText,propValue:"https://partner.shopeemobile.com/api/v2/order/get_order_list",colSpan:12}]),i=(a,l)=>{s(t=>t.map(r=>r.propName===a?{...r,propValue:l}:r))};return e.jsx(n,{pageTitle:"Endpoint Configuration",breadcrumbs:[{label:"Endpoints",href:"/endpoints"},{label:"Shopee Order Ingestion"}],headerActions:[{actionName:"save",actionLabel:"Save Changes",actionIcon:e.jsx(M,{className:"w-4 h-4"}),onClick:()=>alert("Changes saved!")}],properties:o,onPropertyChange:i})}};var u,y,T;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(y=p.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const Q=["Default"];export{p as Default,Q as __namedExportsOrder,K as default};
