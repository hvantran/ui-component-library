import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r}from"./index-Bc2G9s8g.js";import{E as o}from"./ExamIntegrityTeacherDashboardTemplate-CawZsp8S.js";import{C as s}from"./Card-C-7XTUWd.js";import"./cn-DOIGBiOF.js";import"./AppTopBar-ZuxxwDsI.js";import"./ThemeModeToggle-CMxNUeVk.js";import"./ThemeProvider-UX4W3fwv.js";import"./sun-CdeBiqXE.js";import"./createLucideIcon-B_AfoRjS.js";import"./menu-2aDT6BCZ.js";import"./Button-CHA6iI3F.js";import"./ConfirmationDialog-DrYCGSqF.js";import"./Modal-COnLWL7L.js";import"./ExamIntegrityTeacherDashboardSidebar-C7JMhtph.js";import"./chevron-right-DDBX69dD.js";import"./settings-fcItWnOe.js";import"./pin-BoLPiBs2.js";import"./house-BEAfKVH-.js";import"./upload-DYBEGjPC.js";import"./clipboard-pen-T1q2-2n7.js";import"./book-open-ChD5BcpV.js";import"./chart-no-axes-column-CyYxYu0I.js";import"./bell-L6GYhVNW.js";import"./circle-help-B2eb56TI.js";import"./circle-plus-CYouhRyA.js";const X={title:"Templates/ExamIntegrityTeacherDashboardTemplate",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}},c={render:()=>{const[t,a]=r.useState("dashboard");return e.jsx(o,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",activeSection:t,onNavigate:a,onCreateExam:()=>alert("Create Exam clicked"),onSettings:()=>alert("Settings clicked"),onLogout:()=>alert("Logout clicked"),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:["Teacher Dashboard (",t,")"]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Monitor live student telemetry and automated anomaly flags."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(s,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Active Students"}),e.jsx("p",{className:"text-3xl font-bold mt-2",children:"128"})]}),e.jsxs(s,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Anomalies Detected"}),e.jsx("p",{className:"text-3xl font-bold text-amber-600 mt-2",children:"4"})]}),e.jsxs(s,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Completed Submissions"}),e.jsx("p",{className:"text-3xl font-bold text-green-600 mt-2",children:"84"})]})]})]})})}},i={render:()=>e.jsx(o,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",sidebar:e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:"Custom Menu"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium text-sm",children:"Dashboard"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm",children:"Active Sessions"})]}),onLogout:()=>{},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:"Custom Sidebar Layout"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Using the custom sidebar slot override."})]})})},l={render:()=>{const[t,a]=r.useState({examId:"exam-101",examTitle:"Midterm Calculus 2026",linkedQuestionCount:15}),[m,n]=r.useState(!1);return e.jsx(o,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",headerTitle:"Dashboard",headerSubtitle:"Exams in the system, including drafts and published exams",syncDialogState:t,isSyncingQuestions:m,onConfirmSync:()=>{n(!0),setTimeout(()=>{n(!1),a(null),alert("Synced successfully!")},1e3)},onCancelSync:()=>a(null),children:e.jsxs(s,{className:"p-6",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Click to reopen sync dialog for exam:"}),e.jsx("button",{type:"button",className:"mt-3 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",onClick:()=>a({examId:"exam-101",examTitle:"Midterm Calculus 2026",linkedQuestionCount:15}),children:"Trigger Sync Dialog"})]})})}},d={render:()=>{const[t,a]=r.useState("pinned"),[m,n]=r.useState("dashboard");return e.jsx(o,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",activeSection:m,onNavigate:n,dockMode:t,onDockModeChange:a,onCreateExam:()=>alert("Create Exam clicked"),onSettings:()=>alert("Settings clicked"),onLogout:()=>alert("Logout clicked"),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:["Teacher Dashboard (Mode: ",t,")"]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Switch between Pin, Dock (mini-rail 72px), and Auto-hide modes using the controls at the bottom of the sidebar."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(s,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Active Students"}),e.jsx("p",{className:"text-3xl font-bold mt-2",children:"128"})]}),e.jsxs(s,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Anomalies Detected"}),e.jsx("p",{className:"text-3xl font-bold text-amber-600 mt-2",children:"4"})]}),e.jsxs(s,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Completed Submissions"}),e.jsx("p",{className:"text-3xl font-bold text-green-600 mt-2",children:"84"})]})]})]})})}};var x,p,g;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [section, setSection] = useState<ExamIntegrityDashboardSection>('dashboard');
    return <ExamIntegrityTeacherDashboardTemplate userName="Prof. Alexander Wright" userRole="Lead Proctor" activeSection={section} onNavigate={setSection} onCreateExam={() => alert('Create Exam clicked')} onSettings={() => alert('Settings clicked')} onLogout={() => alert('Logout clicked')}>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Teacher Dashboard ({section})
            </h1>
            <p className="text-sm text-gray-500">Monitor live student telemetry and automated anomaly flags.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-5">
              <p className="text-sm text-gray-500">Active Students</p>
              <p className="text-3xl font-bold mt-2">128</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-gray-500">Anomalies Detected</p>
              <p className="text-3xl font-bold text-amber-600 mt-2">4</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-gray-500">Completed Submissions</p>
              <p className="text-3xl font-bold text-green-600 mt-2">84</p>
            </Card>
          </div>
        </div>
      </ExamIntegrityTeacherDashboardTemplate>;
  }
}`,...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ExamIntegrityTeacherDashboardTemplate userName="Prof. Alexander Wright" userRole="Lead Proctor" sidebar={<div className="p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Custom Menu</div>
          <a href="#" className="block px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium text-sm">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm">Active Sessions</a>
        </div>} onLogout={() => {}}>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Custom Sidebar Layout</h1>
        <p className="text-sm text-gray-500">Using the custom sidebar slot override.</p>
      </div>
    </ExamIntegrityTeacherDashboardTemplate>
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,N,S;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [syncTarget, setSyncTarget] = useState<{
      examId: string;
      examTitle: string;
      linkedQuestionCount: number;
    } | null>({
      examId: 'exam-101',
      examTitle: 'Midterm Calculus 2026',
      linkedQuestionCount: 15
    });
    const [isSyncing, setIsSyncing] = useState(false);
    return <ExamIntegrityTeacherDashboardTemplate userName="Prof. Alexander Wright" userRole="Lead Proctor" headerTitle="Dashboard" headerSubtitle="Exams in the system, including drafts and published exams" syncDialogState={syncTarget} isSyncingQuestions={isSyncing} onConfirmSync={() => {
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        setSyncTarget(null);
        alert('Synced successfully!');
      }, 1000);
    }} onCancelSync={() => setSyncTarget(null)}>
        <Card className="p-6">
          <p className="text-sm text-gray-600">
            Click to reopen sync dialog for exam:
          </p>
          <button type="button" className="mt-3 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700" onClick={() => setSyncTarget({
          examId: 'exam-101',
          examTitle: 'Midterm Calculus 2026',
          linkedQuestionCount: 15
        })}>
            Trigger Sync Dialog
          </button>
        </Card>
      </ExamIntegrityTeacherDashboardTemplate>;
  }
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var f,C,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [dockMode, setDockMode] = useState<ExamIntegrityNavDockMode>('pinned');
    const [section, setSection] = useState<ExamIntegrityDashboardSection>('dashboard');
    return <ExamIntegrityTeacherDashboardTemplate userName="Prof. Alexander Wright" userRole="Lead Proctor" activeSection={section} onNavigate={setSection} dockMode={dockMode} onDockModeChange={setDockMode} onCreateExam={() => alert('Create Exam clicked')} onSettings={() => alert('Settings clicked')} onLogout={() => alert('Logout clicked')}>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Teacher Dashboard (Mode: {dockMode})
            </h1>
            <p className="text-sm text-gray-500">
              Switch between Pin, Dock (mini-rail 72px), and Auto-hide modes using the controls at the bottom of the sidebar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-5">
              <p className="text-sm text-gray-500">Active Students</p>
              <p className="text-3xl font-bold mt-2">128</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-gray-500">Anomalies Detected</p>
              <p className="text-3xl font-bold text-amber-600 mt-2">4</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-gray-500">Completed Submissions</p>
              <p className="text-3xl font-bold text-green-600 mt-2">84</p>
            </Card>
          </div>
        </div>
      </ExamIntegrityTeacherDashboardTemplate>;
  }
}`,...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const Y=["Default","CustomSidebar","WithSyncQuestionsWorkflow","InteractiveDocking"];export{i as CustomSidebar,c as Default,d as InteractiveDocking,l as WithSyncQuestionsWorkflow,Y as __namedExportsOrder,X as default};
