_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("YFqc"),c=n.n(o);n("q1tI");t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Nebulark"}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/examples/compute",children:"Compute Examples"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/examples/networking",children:"Networking Examples"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/examples/discovery",children:"Discovery Examples"})}),Object(r.jsx)("li",{children:Object(r.jsx)(c.a,{href:"/mission-control/control",children:"Mission Control"})})]})})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,i=o(n("q1tI")),a=n("elyg"),s=n("nOHt"),l=new Map,f=window.IntersectionObserver,u={};var p=function(e,t){var n=c||(f?c=new f((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,a.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),u[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),c=o[0],l=o[1],h=(0,s.useRouter)(),v=h&&h.pathname||"/",j=i.default.useMemo((function(){var t=(0,a.resolveHref)(v,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(v,e.as):c||o}}),[v,e.href,e.as]),b=j.href,w=j.as;i.default.useEffect((function(){if(t&&f&&c&&c.tagName&&(0,a.isLocalURL)(b)&&!u[b+"%"+w])return p(c,(function(){d(h,b,w)}))}),[t,c,b,w,h]);var x=e.children,m=e.replace,y=e.shallow,E=e.scroll;"string"===typeof x&&(x=i.default.createElement("a",null,x));var O=i.Children.only(x),g={ref:function(e){e&&l(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,b,w,m,y,E)}};return t&&(g.onMouseEnter=function(e){(0,a.isLocalURL)(b)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(h,b,w,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(g.href=(0,a.addBasePath)((0,a.addLocale)(w,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(O,g)};t.default=h},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);