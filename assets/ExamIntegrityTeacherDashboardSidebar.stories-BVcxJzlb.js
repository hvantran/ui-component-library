import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as i}from"./index-Bc2G9s8g.js";import{E as L}from"./ExamIntegrityTeacherDashboardSidebar-DkrXOB9B.js";import"./Button-CHA6iI3F.js";import"./cn-DOIGBiOF.js";import"./chevron-right-DDBX69dD.js";import"./createLucideIcon-B_AfoRjS.js";import"./circle-plus-CYouhRyA.js";import"./settings-fcItWnOe.js";import"./pin-BoLPiBs2.js";import"./house-BEAfKVH-.js";import"./upload-DYBEGjPC.js";import"./clipboard-pen-T1q2-2n7.js";import"./chart-no-axes-column-CyYxYu0I.js";const F={title:"Organisms/ExamIntegrityTeacherDashboardSidebar",component:L,parameters:{layout:"fullscreen"},tags:["autodocs"]},o={args:{activeSection:"dashboard",userName:"John Doe",userRole:"Teacher",dockMode:"pinned"}},t={args:{activeSection:"dashboard",userName:"Prof. Wright",userRole:"Lead Proctor",dockMode:"docked"}},a={args:{activeSection:"dashboard",userName:"Prof. Wright",userRole:"Lead Proctor",dockMode:"auto-hide"}},s={render:()=>{const[r,P]=i.useState("pinned"),[R,I]=i.useState("dashboard");return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-950 p-4",children:[e.jsx(L,{activeSection:R,onNavigate:I,userName:"Prof. Alexander Wright",userRole:"Lead Proctor",dockMode:r,onDockModeChange:P,onCreateExam:()=>alert("Create Exam clicked"),onSettings:()=>alert("Settings clicked"),onLogout:()=>alert("Logout clicked")}),e.jsxs("div",{className:"transition-all duration-300 p-8",style:{marginLeft:r==="auto-hide"?0:r==="docked"?72:256},children:[e.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"Interactive Teacher Docking Test"}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Current mode: ",e.jsx("strong",{className:"font-mono text-blue-600",children:r})]})]})]})}},n={args:{activeSection:"review",userName:"Jane Smith"}},c={args:{activeSection:"question-bank",userName:"Dr. Johnson"}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    activeSection: 'dashboard',
    userName: 'John Doe',
    userRole: 'Teacher',
    dockMode: 'pinned'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,l,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    activeSection: 'dashboard',
    userName: 'Prof. Wright',
    userRole: 'Lead Proctor',
    dockMode: 'docked'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,S,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    activeSection: 'dashboard',
    userName: 'Prof. Wright',
    userRole: 'Lead Proctor',
    dockMode: 'auto-hide'
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var k,v,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState<ExamIntegrityNavDockMode>('pinned');
    const [section, setSection] = useState<ExamIntegrityDashboardSection>('dashboard');
    return <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
        <ExamIntegrityTeacherDashboardSidebar activeSection={section} onNavigate={setSection} userName="Prof. Alexander Wright" userRole="Lead Proctor" dockMode={mode} onDockModeChange={setMode} onCreateExam={() => alert('Create Exam clicked')} onSettings={() => alert('Settings clicked')} onLogout={() => alert('Logout clicked')} />
        <div className="transition-all duration-300 p-8" style={{
        marginLeft: mode === 'auto-hide' ? 0 : mode === 'docked' ? 72 : 256
      }}>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Interactive Teacher Docking Test
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Current mode: <strong className="font-mono text-blue-600">{mode}</strong>
          </p>
        </div>
      </div>;
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var N,f,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeSection: 'review',
    userName: 'Jane Smith'
  }
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var y,M,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    activeSection: 'question-bank',
    userName: 'Dr. Johnson'
  }
}`,...(E=(M=c.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const G=["Default","Docked","AutoHide","InteractiveDocking","ReviewSection","QuestionBankSection"];export{a as AutoHide,o as Default,t as Docked,s as InteractiveDocking,c as QuestionBankSection,n as ReviewSection,G as __namedExportsOrder,F as default};
