import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{r as u}from"./index-Bc2G9s8g.js";import{c as q}from"./cn-DOIGBiOF.js";const c=({children:e,hasMore:a=!1,isLoading:t=!1,onLoadMore:o,className:w,loader:j,endMessage:A,rootMargin:g="160px",...M})=>{const l=u.useRef(null);return u.useEffect(()=>{if(!o||!a||t||!l.current||typeof IntersectionObserver>"u")return;const p=new IntersectionObserver(S=>{const[i]=S;i!=null&&i.isIntersecting&&a&&!t&&o()},{root:null,rootMargin:g,threshold:0});return p.observe(l.current),()=>p.disconnect()},[a,t,o,g]),r.jsxs("div",{className:q("relative",w),...M,children:[e,a&&r.jsx("div",{ref:l,className:"h-1 w-full","aria-hidden":"true"}),r.jsx("div",{className:"flex justify-center mt-6 min-h-6 text-sm text-gray-500 dark:text-gray-400",children:t?j??r.jsx("span",{children:"Loading more…"}):a?null:A??null})]})};c.displayName="ScrollArea";c.__docgenInfo={description:`Molecule — ScrollArea

Infinite-scroll container with IntersectionObserver sentinel.
Automatically triggers \`onLoadMore\` when scrolling near bottom,
and renders accessible loading or end-of-list status indicators.`,methods:[],displayName:"ScrollArea",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Scrollable content elements"},hasMore:{required:!1,tsType:{name:"boolean"},description:"Whether additional data pages can be loaded",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether asynchronous fetch is currently in flight",defaultValue:{value:"false",computed:!1}},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when bottom sentinel enters viewport"},loader:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom spinner or loading element"},endMessage:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Message displayed when all items have been fetched"},rootMargin:{required:!1,tsType:{name:"string"},description:"Root margin for intersection observer trigger",defaultValue:{value:"'160px'",computed:!1}}}};const L={title:"Molecules/ScrollArea",component:c,tags:["autodocs"],parameters:{layout:"padded"}},m=Array.from({length:8},(e,a)=>`Question item #${a+1}`),s={args:{hasMore:!0,isLoading:!1,children:r.jsx("div",{className:"flex flex-col gap-2",children:m.map(e=>r.jsx("div",{className:"rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200",children:e},e))})}},n={args:{hasMore:!0,isLoading:!0,children:r.jsx("div",{className:"flex flex-col gap-2",children:m.map(e=>r.jsx("div",{className:"rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200",children:e},e))})}},d={args:{hasMore:!1,endMessage:r.jsx("span",{className:"text-gray-500",children:"All results loaded"}),children:r.jsx("div",{className:"flex flex-col gap-2",children:m.map(e=>r.jsx("div",{className:"rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200",children:e},e))})}};var f,x,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    hasMore: true,
    isLoading: false,
    children: <div className="flex flex-col gap-2">
        {items.map(item => <div key={item} className="rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200">
            {item}
          </div>)}
      </div>
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,b,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    hasMore: true,
    isLoading: true,
    children: <div className="flex flex-col gap-2">
        {items.map(item => <div key={item} className="rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200">
            {item}
          </div>)}
      </div>
  }
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var N,k,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    hasMore: false,
    endMessage: <span className="text-gray-500">All results loaded</span>,
    children: <div className="flex flex-col gap-2">
        {items.map(item => <div key={item} className="rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200">
            {item}
          </div>)}
      </div>
  }
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const _=["Default","Loading","EndReached"];export{s as Default,d as EndReached,n as Loading,_ as __namedExportsOrder,L as default};
