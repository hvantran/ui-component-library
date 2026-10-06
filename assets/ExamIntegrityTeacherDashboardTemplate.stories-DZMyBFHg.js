import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as b}from"./index-Bc2G9s8g.js";import{c as w}from"./cn-DOIGBiOF.js";import{A as O}from"./AppTopBar-CfxyCSZw.js";import{B as _}from"./Button-CHA6iI3F.js";import{C as F}from"./ConfirmationDialog-DrYCGSqF.js";import{B as G}from"./bell-L6GYhVNW.js";import{C as J,L as K}from"./log-out-DehKGll6.js";import{C as X}from"./circle-plus-CYouhRyA.js";import{S as Y}from"./settings-fcItWnOe.js";import{H as Z}from"./house-BEAfKVH-.js";import{U as $}from"./upload-DYBEGjPC.js";import{c as f}from"./createLucideIcon-B_AfoRjS.js";import{C as ee}from"./chart-no-axes-column-CyYxYu0I.js";import{C as m}from"./Card-C-7XTUWd.js";import"./sun-CdeBiqXE.js";import"./Modal-COnLWL7L.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=f("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=f("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=f("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),re=[{section:"dashboard",icon:e.jsx(Z,{size:18}),label:"Dashboard"},{section:"ingestion",icon:e.jsx($,{size:18}),label:"Upload Exam"},{section:"review",icon:e.jsx(ae,{size:18}),label:"Review"},{section:"scoring",icon:e.jsx(se,{size:18}),label:"Scoring"},{section:"question-bank",icon:e.jsx(te,{size:18}),label:"Question Bank"},{section:"reports",icon:e.jsx(ee,{size:18}),label:"Reports"}],s=({userName:a="Teacher",userRole:t="Teacher",appTitle:u="Exam Integrity Platform",activeSection:i="dashboard",onNavigate:x,onCreateExam:v,onSettings:N,onLogout:o,onSearch:k,onNotifications:p,onHelp:g,headerTitle:y,headerSubtitle:j,headerActionsSlot:h,filtersSlot:S,sidebar:M,children:Q,className:B,syncDialogState:r,onConfirmSync:W,onCancelSync:T,isSyncingQuestions:C=!1})=>e.jsxs("div",{className:w("min-h-screen bg-gray-50 dark:bg-gray-900",B),children:[e.jsx(O,{title:u,searchSlot:k&&e.jsx("input",{type:"text",placeholder:"Search...",onChange:n=>k(n.target.value),className:"w-full text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 focus:outline-none"}),actionsSlot:(p||g)&&e.jsxs("div",{className:"flex items-center gap-1",children:[p&&e.jsx("button",{type:"button","aria-label":"Notifications",onClick:p,className:"p-2 rounded-btn text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800",children:e.jsx(G,{size:18})}),g&&e.jsx("button",{type:"button","aria-label":"Help",onClick:g,className:"p-2 rounded-btn text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800",children:e.jsx(J,{size:18})})]}),userSlot:e.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200",children:[e.jsx("span",{className:"font-semibold",children:a}),t&&e.jsxs("span",{className:"text-xs text-gray-500",children:["(",t,")"]}),o&&e.jsx("button",{type:"button",onClick:o,className:"ml-2 text-xs text-blue-600 hover:underline dark:text-blue-400",children:"Logout"})]})}),e.jsxs("div",{className:"flex pt-16",children:[e.jsx("aside",{className:"w-64 fixed inset-y-16 left-0 z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between py-6",children:M||e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-4 px-4",children:[v&&e.jsxs(_,{variant:"primary",className:"w-full flex items-center justify-center gap-2 text-sm",onClick:v,children:[e.jsx(X,{size:16}),e.jsx("span",{children:"Create Exam"})]}),e.jsx("nav",{className:"space-y-1",children:re.map(({section:n,icon:V,label:U})=>{const H=i===n;return e.jsxs("button",{type:"button",onClick:()=>x==null?void 0:x(n),className:w("w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",H?"bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300":"text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"),children:[V,e.jsx("span",{children:U})]},n)})})]}),e.jsxs("div",{className:"px-4 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-1",children:[N&&e.jsxs("button",{type:"button",onClick:N,className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 text-left",children:[e.jsx(Y,{size:18}),e.jsx("span",{children:"Settings"})]}),o&&e.jsxs("button",{type:"button",onClick:o,className:"w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-left",children:[e.jsx(K,{size:18}),e.jsx("span",{children:"Logout"})]})]})]})}),e.jsx("main",{className:"ml-64 flex-1 min-h-[calc(100vh-4rem)] p-6 overflow-y-auto",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[(y||h)&&e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2",children:[e.jsxs("div",{children:[y&&e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:y}),j&&e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-1",children:j})]}),h&&e.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:h})]}),S&&e.jsx("div",{children:S}),Q]})})]}),r&&e.jsx(F,{open:!!r,title:"Sync Questions from Bank",positiveText:C?"Syncing…":"Sync Questions",negativeText:"Cancel",loading:C,positiveAction:W,negativeAction:T,onClose:T,positiveVariant:"primary",children:e.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-300",children:[e.jsxs("p",{children:["Are you sure you want to synchronize questions for"," ",e.jsx("strong",{className:"text-gray-900 dark:text-gray-100",children:r.examTitle})," ","with the latest question bank data?"]}),typeof r.linkedQuestionCount=="number"&&e.jsxs("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:["Linked questions eligible for sync: ",r.linkedQuestionCount]}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"Any modifications made in the question bank (content, options, answer key, rubric, points) will overwrite the corresponding questions in this exam."})]})})]});s.displayName="ExamIntegrityTeacherDashboardTemplate";s.__docgenInfo={description:"",methods:[],displayName:"ExamIntegrityTeacherDashboardTemplate",props:{userName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Teacher'",computed:!1}},userRole:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Teacher'",computed:!1}},appTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Exam Integrity Platform'",computed:!1}},activeSection:{required:!1,tsType:{name:"union",raw:`| 'dashboard'
| 'ingestion'
| 'review'
| 'scoring'
| 'question-bank'
| 'reports'`,elements:[{name:"literal",value:"'dashboard'"},{name:"literal",value:"'ingestion'"},{name:"literal",value:"'review'"},{name:"literal",value:"'scoring'"},{name:"literal",value:"'question-bank'"},{name:"literal",value:"'reports'"}]},description:"",defaultValue:{value:"'dashboard'",computed:!1}},onNavigate:{required:!1,tsType:{name:"signature",type:"function",raw:"(section: ExamIntegrityDashboardSection) => void",signature:{arguments:[{type:{name:"union",raw:`| 'dashboard'
| 'ingestion'
| 'review'
| 'scoring'
| 'question-bank'
| 'reports'`,elements:[{name:"literal",value:"'dashboard'"},{name:"literal",value:"'ingestion'"},{name:"literal",value:"'review'"},{name:"literal",value:"'scoring'"},{name:"literal",value:"'question-bank'"},{name:"literal",value:"'reports'"}]},name:"section"}],return:{name:"void"}}},description:""},onCreateExam:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSettings:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onNotifications:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onHelp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},headerTitle:{required:!1,tsType:{name:"string"},description:""},headerSubtitle:{required:!1,tsType:{name:"string"},description:""},headerActionsSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},filtersSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},syncDialogState:{required:!1,tsType:{name:"union",raw:"SyncExamDialogState | null",elements:[{name:"SyncExamDialogState"},{name:"null"}]},description:"State for inner sync questions confirmation dialog"},onConfirmSync:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when teacher confirms sync in inner dialog"},onCancelSync:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when teacher cancels or dismisses sync dialog"},isSyncingQuestions:{required:!1,tsType:{name:"boolean"},description:"Whether question sync operation is currently in progress",defaultValue:{value:"false",computed:!1}}}};const ke={title:"Templates/ExamIntegrityTeacherDashboardTemplate",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},l={render:()=>{const[a,t]=b.useState("dashboard");return e.jsx(s,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",activeSection:a,onNavigate:t,onCreateExam:()=>alert("Create Exam clicked"),onSettings:()=>alert("Settings clicked"),onLogout:()=>alert("Logout clicked"),children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:["Teacher Dashboard (",a,")"]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Monitor live student telemetry and automated anomaly flags."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(m,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Active Students"}),e.jsx("p",{className:"text-3xl font-bold mt-2",children:"128"})]}),e.jsxs(m,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Anomalies Detected"}),e.jsx("p",{className:"text-3xl font-bold text-amber-600 mt-2",children:"4"})]}),e.jsxs(m,{className:"p-5",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"Completed Submissions"}),e.jsx("p",{className:"text-3xl font-bold text-green-600 mt-2",children:"84"})]})]})]})})}},c={render:()=>e.jsx(s,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",sidebar:e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider",children:"Custom Menu"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium text-sm",children:"Dashboard"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm",children:"Active Sessions"})]}),onLogout:()=>{},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:"Custom Sidebar Layout"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Using the custom sidebar slot override."})]})})},d={render:()=>{const[a,t]=b.useState({examId:"exam-101",examTitle:"Midterm Calculus 2026",linkedQuestionCount:15}),[u,i]=b.useState(!1);return e.jsx(s,{userName:"Prof. Alexander Wright",userRole:"Lead Proctor",headerTitle:"Dashboard",headerSubtitle:"Exams in the system, including drafts and published exams",syncDialogState:a,isSyncingQuestions:u,onConfirmSync:()=>{i(!0),setTimeout(()=>{i(!1),t(null),alert("Synced successfully!")},1e3)},onCancelSync:()=>t(null),children:e.jsxs(m,{className:"p-6",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Click to reopen sync dialog for exam:"}),e.jsx("button",{type:"button",className:"mt-3 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",onClick:()=>t({examId:"exam-101",examTitle:"Midterm Calculus 2026",linkedQuestionCount:15}),children:"Trigger Sync Dialog"})]})})}};var q,D,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,R,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var L,z,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(z=d.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const je=["Default","CustomSidebar","WithSyncQuestionsWorkflow"];export{c as CustomSidebar,l as Default,d as WithSyncQuestionsWorkflow,je as __namedExportsOrder,ke as default};
