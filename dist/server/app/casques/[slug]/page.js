(()=>{var e={};e.id=676,e.ids=[676],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},43972:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>u});var r=s(50482),n=s(69108),a=s(62563),i=s.n(a),o=s(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let u=["",{children:["casques",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,12029)),"D:\\equip-velo-for-nextjs\\app\\casques\\[slug]\\page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,78967)),"D:\\equip-velo-for-nextjs\\app\\casques\\[slug]\\layout.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,93384)),"D:\\equip-velo-for-nextjs\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\equip-velo-for-nextjs\\app\\casques\\[slug]\\page.js"],d="/casques/[slug]/page",p={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/casques/[slug]/page",pathname:"/casques/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},68242:(e,t,s)=>{Promise.resolve().then(s.bind(s,12976))},12976:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(95344),n=s(3729),a=s(8428),i=s(5955);let o=function(){let{slug:e}=(0,a.useParams)(),[t,s]=(0,n.useState)({});return(0,n.useEffect)(()=>{fetch("../helmets.json").then(e=>e.json()).then(t=>{s(t.find(t=>t.slug===e))}).catch(e=>{console.error("Erreur :",e)})},[e]),r.jsx("div",{children:t?(0,i.i)(t):r.jsx("p",{children:"Chargement en cours..."})})};s(57110);var l=s(35024),u=s(615),c=s(89410);let d=function(){let[e,t]=(0,n.useState)(null),[s]=(0,l.fP)(["token"]),i=s.token,{slug:d}=(0,a.useParams)(),p=(0,a.useRouter)();return(0,n.useEffect)(()=>{fetch(`${u.F}/article/${d}`).then(e=>{if(console.log(e),!e.ok)throw Error("404 Not Found");return e.json()}).then(e=>{if(console.log(e),"casques"===e.tag)t(e);else throw Error("404 Not Found")}).catch(e=>{"404 Not Found"===e.message&&(console.error("Article introuvable : ",e),p.push("/error"))})},[d,p]),r.jsx("section",{className:"backarticle",children:e&&(0,r.jsxs)("div",{className:"article",children:[r.jsx("h2",{className:"article__title",children:e.title}),(0,r.jsxs)("div",{className:"article__date",children:["Publi\xe9 le : ",e.createdAt]}),r.jsx(c.default,{className:"article__file",src:e.file,alt:`${e.content.replace(/<[^>]*>/g,"").substring(0,20)}...`,width:100,height:100,unoptimized:!0}),r.jsx(o,{}),r.jsx("div",{className:"article__text",dangerouslySetInnerHTML:{__html:e.content}}),i?r.jsx("button",{onClick:()=>{fetch(`${u.F}/article/${d}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}}).then(e=>e.json()).then(()=>{t(e=>e.filter(e=>e.id!==d)),p.push("/")})},children:"DELETE"}):""]})})}},78967:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,generateMetadata:()=>a});var r=s(12029),n=s(71018);async function a({params:e}){let t=e.slug,s=await fetch(`${n.F}/article/${t}`),r=await s.json();return{title:`${r.title} - \xc9quipement V\xe9lo`,description:r.content.replace(/<[^>]*>/g,"").substring(0,150)}}let i=r.default},12029:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>i});let r=(0,s(86843).createProxy)(String.raw`D:\equip-velo-for-nextjs\app\casques\[slug]\page.js`),{__esModule:n,$$typeof:a}=r,i=r.default}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,168,337,24,136],()=>s(43972));module.exports=r})();