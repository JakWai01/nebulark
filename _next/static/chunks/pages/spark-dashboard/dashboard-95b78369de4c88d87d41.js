_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"8oxB":function(n,e){var t,r,c=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(t===setTimeout)return setTimeout(n,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(n){t=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var u,s=[],l=!1,d=-1;function b(){l&&u&&(l=!1,u.length?s=u.concat(s):d=-1,s.length&&j())}function j(){if(!l){var n=a(b);l=!0;for(var e=s.length;e;){for(u=s,s=[];++d<e;)u&&u[d].run();d=-1,e=s.length}u=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function f(n,e){this.fun=n,this.array=e}function h(){}c.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];s.push(new f(n,e)),1!==s.length||l||a(j)},f.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=h,c.addListener=h,c.once=h,c.off=h,c.removeListener=h,c.removeAllListeners=h,c.emit=h,c.prependListener=h,c.prependOnceListener=h,c.listeners=function(n){return[]},c.binding=function(n){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(n){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},BsWD:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("a3WO");function c(n,e){if(n){if("string"===typeof n)return Object(r.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(n,e):void 0}}},ODXe:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("BsWD");function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,c=!1,i=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(c)throw i}}return t}}(n,e)||Object(r.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Qetd:function(n,e,t){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},a3WO:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,"a",(function(){return r}))},rePB:function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",(function(){return r}))},sp6S:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spark-dashboard/dashboard",function(){return t("xbqN")}])},xbqN:function(n,e,t){"use strict";t.r(e);var r=t("h4VS"),c=t("nKUr"),i=t("q1tI"),o=t.n(i),a=t("qhky"),u=t("ZHh6"),s=t("ODXe"),l=t("vOnD");function d(){var n=Object(r.a)(["\n    ul {\n        display: flex;\n        flex-direction: row;\n        list-style-type: none;\n        justify-content: space-around; \n    }\n"]);return d=function(){return n},n}var b=l.a.section(d());var j=function(){var n=o.a.useState(0),e=Object(s.a)(n,2),t=e[0],r=(e[1],o.a.useState(0)),i=Object(s.a)(r,2),a=i[0],u=(i[1],o.a.useState(0)),l=Object(s.a)(u,2),d=l[0];return l[1],Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[t," Cores"]}),Object(c.jsxs)("li",{children:[a," MB"]}),Object(c.jsxs)("li",{children:[d," MB"]})]})})})},f=t("S/4Z");var h=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"NebulaStats"}),Object(c.jsx)(j,{}),Object(c.jsx)(f.a,{ionName:"Jakob's Handy",ionStatus:!0})]})};function x(){var n=Object(r.a)(["\n  background-color: red;\n  border-radius: 2px;\n  border: none;\n  width: 80px;\n  height: 20px;\n  color: white;\n"]);return x=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return n},n}function O(){var n=Object(r.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(r.a)(["\n  position: relative;\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n  height: 200px;\n"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n  background-color: white;\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n"]);return g=function(){return n},n}function m(){var n=Object(r.a)(["\n    background-color: #404040;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n  "]);return m=function(){return n},n}function y(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n      justify-content: space-between;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n  "]);return y=function(){return n},n}var w=function(){var n=l.a.section(y()),e=(l.a.hr(m()),l.a.div(g())),t=l.a.div(v()),r=l.a.section(O()),o=l.a.div(p()),a=l.a.button(x()),u=Object(i.useState)(""),s=u[0],d=u[1],b=Object(i.useState)("0px"),j=b[0],f=b[1],h=Object(i.useState)("accordion_icon"),w=(h[0],h[1]),S=Object(i.useRef)(null);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"loadingbar"}),Object(c.jsx)("li",{children:"my-spark-1"}),Object(c.jsxs)("li",{children:[4," Ions"]}),Object(c.jsx)("li",{children:"7 mins"}),Object(c.jsx)("li",{children:Object(c.jsx)(r,{children:Object(c.jsx)(o,{children:Object(c.jsx)(a,{onClick:function(){d(""===s?"active":""),f("active"===s?"0px":"".concat(S.current.scrollHeight,"px")),w("active"==s?"accordion__icon":"accordion_icon rotate"),console.log(S.current.scrollHeight)},children:"Cancel"})})})})]})}),Object(c.jsx)(e,{ref:S,style:{maxHeight:"".concat(j)},children:Object(c.jsx)(t,{children:"Do you really want to stop this spark?"})})]})};function S(){var n=Object(r.a)(["\n  background-color: red;\n  border-radius: 2px;\n  border: none;\n  width: 80px;\n  height: 20px;\n  color: white;\n"]);return S=function(){return n},n}function k(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return k=function(){return n},n}function T(){var n=Object(r.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return T=function(){return n},n}function _(){var n=Object(r.a)(["\n  position: relative;\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n  height: 200px;\n"]);return _=function(){return n},n}function E(){var n=Object(r.a)(["\n  background-color: white;\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n"]);return E=function(){return n},n}function H(){var n=Object(r.a)(["\n    background-color: #404040;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n  "]);return H=function(){return n},n}function A(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n      justify-content: space-between;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n  "]);return A=function(){return n},n}var N=function(){var n=l.a.section(A()),e=l.a.hr(H()),t=l.a.div(E()),r=l.a.div(_()),o=l.a.section(T()),a=l.a.div(k()),u=l.a.button(S()),s=Object(i.useState)(""),d=s[0],b=s[1],j=Object(i.useState)("0px"),f=j[0],h=j[1],x=Object(i.useState)("accordion_icon"),p=(x[0],x[1]),O=Object(i.useRef)(null);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"loadingbar"}),Object(c.jsx)("li",{children:"my-spark-1"}),Object(c.jsxs)("li",{children:[4," Ions"]}),Object(c.jsx)("li",{children:"7 mins"}),Object(c.jsx)("li",{children:Object(c.jsx)(o,{children:Object(c.jsx)(a,{children:Object(c.jsx)(u,{onClick:function(){b(""===d?"active":""),h("active"===d?"0px":"".concat(O.current.scrollHeight,"px")),p("active"==d?"accordion__icon":"accordion_icon rotate"),console.log(O.current.scrollHeight)},children:"More"})})})})]})}),Object(c.jsx)(t,{ref:O,style:{maxHeight:"".concat(f)},children:Object(c.jsx)(r,{children:"Output and Logs WIP"})}),Object(c.jsx)(e,{})]})};function I(){var n=Object(r.a)(["\n  \n"]);return I=function(){return n},n}var F=l.a.section(I());var D=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(F,{children:[Object(c.jsx)("h1",{children:"Running Sparks"}),Object(c.jsx)(w,{}),Object(c.jsx)("h1",{children:"Recent Sparks"}),Object(c.jsx)(N,{})]})})};function L(){var n=Object(r.a)(["\n  * {\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n    position: relative;\n  }\n"]);return L=function(){return n},n}var B=l.a.section(L());e.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),Object(c.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(c.jsx)("meta",{name:"HandheldFriendly",content:"true"})]}),Object(c.jsxs)(B,{children:[Object(c.jsx)(u.a,{nebulaID:"woody-wood-wood"}),Object(c.jsx)(h,{}),Object(c.jsx)(D,{})]})]})}},yLpj:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}n.exports=t}},[["sp6S",0,1,6]]]);