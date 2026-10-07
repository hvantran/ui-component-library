import{j as S}from"./jsx-runtime-DFAAy_2V.js";import{r as C}from"./index-Bc2G9s8g.js";import{C as n}from"./CodeEditor-DtOq6-2E.js";import"./cn-DOIGBiOF.js";const x=`// GraalJS Transformation Script
function transform(payload) {
  const parsed = JSON.parse(payload);
  return {
    eventId: parsed.id,
    processedAt: new Date().toISOString(),
    status: 'PROCESSED'
  };
}`,E=`{
  "action": "SYNC_LAZADA_ORDERS",
  "endpoint": "https://api.lazada.vn/orders",
  "timeout": 5000,
  "retry": {
    "maxAttempts": 3,
    "backoff": "EXPONENTIAL"
  }
}`,j={title:"Atoms/CodeEditor",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{language:{control:"select",options:["javascript","json"]},theme:{control:"select",options:["light","dark"]},readOnly:{control:"boolean"}}},e={render:()=>{const[o,t]=C.useState(x);return S.jsx(n,{label:"GraalJS Execution Script",language:"javascript",value:o,onChange:t,height:"220px"})}},r={render:()=>{const[o,t]=C.useState(E);return S.jsx(n,{label:"HTTP Configuration Payload",language:"json",value:o,onChange:t,height:"220px"})}},a={args:{label:"Malformed JavaScript Script",value:"function broken() { return ",language:"javascript",error:"SyntaxError: Unexpected end of input"}};var s,c,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [code, setCode] = useState(sampleJs);
    return <CodeEditor label="GraalJS Execution Script" language="javascript" value={code} onChange={setCode} height="220px" />;
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [jsonCode, setJsonCode] = useState(sampleJson);
    return <CodeEditor label="HTTP Configuration Payload" language="json" value={jsonCode} onChange={setJsonCode} height="220px" />;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Malformed JavaScript Script',
    value: 'function broken() { return ',
    language: 'javascript',
    error: 'SyntaxError: Unexpected end of input'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const b=["JavaScript","JSONViewer","WithError"];export{r as JSONViewer,e as JavaScript,a as WithError,b as __namedExportsOrder,j as default};
