import{_ as u}from"./preload-helper-a4192956.js";let r,l,h,p=(async()=>{const c=new Set(["Module","__esModule","default","_export_sfc"]);let d={"./Input":()=>(r([]),f("./__federation_expose_Input-14ba8db8.js").then(e=>Object.keys(e).every(t=>c.has(t))?()=>e.default:()=>e))},o;o={},r=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const s=t.substring(0,t.lastIndexOf("remoteEntry.js"));e.forEach(_=>{const n=s+_;if(n in o)return;o[n]=!0;const a=document.head.appendChild(document.createElement("link"));a.href=n,a.rel="stylesheet"})};async function f(e){return u(()=>import(e).then(async t=>(await t.__tla,t)),[],import.meta.url)}l=e=>d[e](),h=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,s])=>{const _=Object.keys(s)[0],n=Object.values(s)[0],a=n.scope||"default";globalThis.__federation_shared__[a]=globalThis.__federation_shared__[a]||{};const i=globalThis.__federation_shared__[a];(i[t]=i[t]||{})[_]=n})}})();export{p as __tla,r as dynamicLoadingCss,l as get,h as init};
