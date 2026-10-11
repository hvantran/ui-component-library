import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r}from"./index-Bc2G9s8g.js";import{E as s}from"./ExamIntegrityStudentLandingTemplate-CZlHj7dZ.js";import{C as u}from"./Card-C-7XTUWd.js";import{B as x}from"./Button-CHA6iI3F.js";import{S as g}from"./StatusChip-Bq9SfrHW.js";import"./cn-DOIGBiOF.js";import"./AppTopBar-XPleiBES.js";import"./menu-2aDT6BCZ.js";import"./createLucideIcon-B_AfoRjS.js";import"./sun-PuEiAdbO.js";import"./moon-BstY4RHq.js";import"./bell-L6GYhVNW.js";import"./chevron-right-DDBX69dD.js";import"./circle-help-B2eb56TI.js";import"./pin-BoLPiBs2.js";import"./layout-dashboard-BBesCYSx.js";import"./clipboard-list-CwZuq8yN.js";import"./chart-no-axes-column-CyYxYu0I.js";import"./shopping-bag-Bt0r38ar.js";import"./sparkles-DyW_OlUX.js";const X={title:"Templates/ExamIntegrityStudentLandingTemplate",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},i={render:()=>{const[t,a]=r.useState("dashboard"),[o,n]=r.useState("all");return e.jsx(s,{studentName:"Jane Doe",studentRole:"Student ID: 2026-9042",activeSection:t,onNavigate:a,filters:[{label:"All Exams",value:"all"},{label:"Upcoming",value:"upcoming"},{label:"Completed",value:"completed"}],activeFilter:o,onFilterChange:n,onHelp:()=>alert("Help clicked"),onLogout:()=>alert("Logout clicked"),children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(u,{className:"p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-100",children:"CS301: Advanced Operating Systems"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Duration: 120 mins • Questions: 25"})]}),e.jsx(g,{label:"READY",variant:"success"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Final examination covering concurrency, virtual memory, and distributed file systems."}),e.jsx("div",{className:"pt-2 flex justify-end",children:e.jsx(x,{variant:"primary",children:"Start Exam"})})]}),e.jsxs(u,{className:"p-6 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-100",children:"MATH202: Discrete Mathematics"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Duration: 90 mins • Questions: 15"})]}),e.jsx(g,{label:"COMPLETED",variant:"default"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"Graph theory, combinatorics, and proof by induction."}),e.jsx("div",{className:"pt-2 flex justify-end",children:e.jsx(x,{variant:"outline",disabled:!0,children:"Submitted"})})]})]})})}},d={render:()=>{const[t,a]=r.useState("dashboard");return e.jsx(s,{studentName:"Alex Rivera",studentRole:"Grade 5 Adventurer",starCount:125,activeSection:t,onNavigate:a,children:e.jsxs("div",{className:"p-8 bg-amber-50 rounded-2xl border-2 border-amber-200 text-center",children:[e.jsx("h2",{className:"text-xl font-bold text-amber-900",children:"Elementary Quest Dashboard"}),e.jsx("p",{className:"text-amber-700 mt-1",children:"Total stars earned: 125 ⭐"})]})})}},c={render:()=>{const[t,a]=r.useState("dashboard");return e.jsx(s,{studentName:"Alex Rivera",studentRole:"Grade 5 Adventurer",starCount:125,activeSection:t,onNavigate:a,pageTitle:"Learning Quests 🌟",pageSubtitle:"Choose a fun learning quest below!",bannerSlot:e.jsxs("div",{className:"rounded-3xl border-2 border-amber-300 bg-amber-100/80 p-6 shadow-md flex items-center gap-4",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-3xl",children:"🦁"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"Welcome back, Alex! 🚀"}),e.jsx("p",{className:"text-sm text-slate-700",children:"Ready for today's learning adventures?"})]})]}),children:e.jsx("div",{className:"p-8 bg-white rounded-2xl border border-gray-200 text-center",children:e.jsx("p",{className:"text-gray-700",children:"Learning Quests content"})})})}},l={render:()=>{const[t,a]=r.useState("dashboard"),[o,n]=r.useState("docked");return e.jsx(s,{studentName:"Jane Doe",studentRole:"Grade 10",activeSection:t,onNavigate:a,dockMode:o,onDockModeChange:n,children:e.jsxs("div",{className:"p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Docked Mini-Rail Mode"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Navigation is compacted into a 72px rail on the left, maximizing content area."})]})})}},m={render:()=>{const[t,a]=r.useState("dashboard"),[o,n]=r.useState("auto-hide");return e.jsx(s,{studentName:"Jane Doe",studentRole:"Grade 10",activeSection:t,onNavigate:a,dockMode:o,onDockModeChange:n,children:e.jsxs("div",{className:"p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{className:"text-lg font-bold",children:"Auto-Hide Mode"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Navigation hides off-screen. Hover over the left edge tab to reveal the full drawer."})]})})}};var p,v,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState<StudentPortalSection>('dashboard');
    const [filter, setFilter] = useState('all');
    return <ExamIntegrityStudentLandingTemplate studentName="Jane Doe" studentRole="Student ID: 2026-9042" activeSection={activeSection} onNavigate={setActiveSection} filters={[{
      label: 'All Exams',
      value: 'all'
    }, {
      label: 'Upcoming',
      value: 'upcoming'
    }, {
      label: 'Completed',
      value: 'completed'
    }]} activeFilter={filter} onFilterChange={setFilter} onHelp={() => alert('Help clicked')} onLogout={() => alert('Logout clicked')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">CS301: Advanced Operating Systems</h3>
                <p className="text-sm text-gray-500">Duration: 120 mins • Questions: 25</p>
              </div>
              <StatusChip label="READY" variant="success" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Final examination covering concurrency, virtual memory, and distributed file systems.
            </p>
            <div className="pt-2 flex justify-end">
              <Button variant="primary">Start Exam</Button>
            </div>
          </Card>
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">MATH202: Discrete Mathematics</h3>
                <p className="text-sm text-gray-500">Duration: 90 mins • Questions: 15</p>
              </div>
              <StatusChip label="COMPLETED" variant="default" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Graph theory, combinatorics, and proof by induction.
            </p>
            <div className="pt-2 flex justify-end">
              <Button variant="outline" disabled>Submitted</Button>
            </div>
          </Card>
        </div>
      </ExamIntegrityStudentLandingTemplate>;
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,S,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState<StudentPortalSection>('dashboard');
    return <ExamIntegrityStudentLandingTemplate studentName="Alex Rivera" studentRole="Grade 5 Adventurer" starCount={125} activeSection={activeSection} onNavigate={setActiveSection}>
        <div className="p-8 bg-amber-50 rounded-2xl border-2 border-amber-200 text-center">
          <h2 className="text-xl font-bold text-amber-900">Elementary Quest Dashboard</h2>
          <p className="text-amber-700 mt-1">Total stars earned: 125 ⭐</p>
        </div>
      </ExamIntegrityStudentLandingTemplate>;
  }
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var N,f,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState<StudentPortalSection>('dashboard');
    return <ExamIntegrityStudentLandingTemplate studentName="Alex Rivera" studentRole="Grade 5 Adventurer" starCount={125} activeSection={activeSection} onNavigate={setActiveSection} pageTitle="Learning Quests 🌟" pageSubtitle="Choose a fun learning quest below!" bannerSlot={<div className="rounded-3xl border-2 border-amber-300 bg-amber-100/80 p-6 shadow-md flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-3xl">🦁</div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Welcome back, Alex! 🚀</h2>
              <p className="text-sm text-slate-700">Ready for today's learning adventures?</p>
            </div>
          </div>}>
        <div className="p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <p className="text-gray-700">Learning Quests content</p>
        </div>
      </ExamIntegrityStudentLandingTemplate>;
  }
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var k,D,A;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState<StudentPortalSection>('dashboard');
    const [dockMode, setDockMode] = useState<ExamIntegrityNavDockMode>('docked');
    return <ExamIntegrityStudentLandingTemplate studentName="Jane Doe" studentRole="Grade 10" activeSection={activeSection} onNavigate={setActiveSection} dockMode={dockMode} onDockModeChange={setDockMode}>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold">Docked Mini-Rail Mode</h2>
          <p className="text-sm text-gray-500 mt-1">
            Navigation is compacted into a 72px rail on the left, maximizing content area.
          </p>
        </div>
      </ExamIntegrityStudentLandingTemplate>;
  }
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,E,C;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [activeSection, setActiveSection] = useState<StudentPortalSection>('dashboard');
    const [dockMode, setDockMode] = useState<ExamIntegrityNavDockMode>('auto-hide');
    return <ExamIntegrityStudentLandingTemplate studentName="Jane Doe" studentRole="Grade 10" activeSection={activeSection} onNavigate={setActiveSection} dockMode={dockMode} onDockModeChange={setDockMode}>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold">Auto-Hide Mode</h2>
          <p className="text-sm text-gray-500 mt-1">
            Navigation hides off-screen. Hover over the left edge tab to reveal the full drawer.
          </p>
        </div>
      </ExamIntegrityStudentLandingTemplate>;
  }
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};const Z=["Default","WithStarCounter","WithBannerSlot","DockedMiniRail","AutoHideMode"];export{m as AutoHideMode,i as Default,l as DockedMiniRail,c as WithBannerSlot,d as WithStarCounter,Z as __namedExportsOrder,X as default};
