import d from"./CTNwIyJm.js";import _ from"./VJFiI_rq.js";import y from"./CVYvFl41.js";import f from"./B_5QcCB8.js";import k from"./CaXCK0Oi.js";import{useLayout as b}from"./yXaOlmbx.js";import{r as h,G as M,c as g,v as C,x as r,z as i,W as A,N as L,i as S,t as E}from"./DRtWvKfJ.js";import"./CFcFeTBy.js";import"./Bl_ZW1Xh.js";import"./BKuF8g-Y.js";import"./BMCLKWyE.js";import"./CDQwIvYz.js";import"./B7nXBdam.js";import"./BPIn4_kN.js";import"./lXe9j5XU.js";import"./e2o5KJyy.js";import"./B-WZqzsx.js";import"./XrWOLLJc.js";import"./Cm7Dkme4.js";import"./CwRw2352.js";import"./B5fdn047.js";import"./RfUbfTV3.js";import"./CGlsgAZL.js";import"./Db4mELQW.js";const N={class:"layout-sidebar"},w={class:"layout-main-container"},$={class:"layout-main"},x=r("div",{class:"layout-mask"},null,-1),at={__name:"AppLayout",setup(B){const{layoutConfig:e,layoutState:o,isSidebarActive:n}=b(),a=h(null);M(n,t=>{t?u():m()});const c=g(()=>({"layout-theme-light":e.darkTheme.value==="light","layout-theme-dark":e.darkTheme.value==="dark","layout-overlay":e.menuMode.value==="overlay","layout-static":e.menuMode.value==="static","layout-static-inactive":o.staticMenuDesktopInactive.value&&e.menuMode.value==="static","layout-overlay-active":o.overlayMenuActive.value,"layout-mobile-active":o.staticMenuMobileActive.value,"p-ripple-disabled":e.ripple.value===!1})),u=()=>{a.value||(a.value=t=>{p(t)&&(o.overlayMenuActive.value=!1,o.staticMenuMobileActive.value=!1,o.menuHoverActive.value=!1)},document.addEventListener("click",a.value))},m=()=>{a.value&&(document.removeEventListener("click",a),a.value=null)},p=t=>{const l=document.querySelector(".layout-sidebar"),s=document.querySelector(".layout-menu-button");return!(l.isSameNode(t.target)||l.contains(t.target)||s.isSameNode(t.target)||s.contains(t.target))};return(t,l)=>{const s=S("router-view"),v=d;return E(),C(L,null,[r("div",{class:A(["layout-wrapper",c.value])},[i(_),r("div",N,[i(f)]),r("div",w,[r("div",$,[i(s)]),i(y)]),i(k),x],2),i(v,{position:"bottom-right"})],64)}}};export{at as default};