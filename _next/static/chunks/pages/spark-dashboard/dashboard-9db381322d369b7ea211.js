_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"8oxB":function(n,e){var t,r,c=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(n){if(t===setTimeout)return setTimeout(n,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(n){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(n){r=i}}();var a,s=[],l=!1,d=-1;function b(){l&&a&&(l=!1,a.length?s=a.concat(s):d=-1,s.length&&j())}function j(){if(!l){var n=u(b);l=!0;for(var e=s.length;e;){for(a=s,s=[];++d<e;)a&&a[d].run();d=-1,e=s.length}a=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function f(n,e){this.fun=n,this.array=e}function h(){}c.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];s.push(new f(n,e)),1!==s.length||l||u(j)},f.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=h,c.addListener=h,c.once=h,c.off=h,c.removeListener=h,c.removeAllListeners=h,c.emit=h,c.prependListener=h,c.prependOnceListener=h,c.listeners=function(n){return[]},c.binding=function(n){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(n){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},BsWD:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("a3WO");function c(n,e){if(n){if("string"===typeof n)return Object(r.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(n,e):void 0}}},ODXe:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("BsWD");function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,c=!1,o=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(a){c=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}return t}}(n,e)||Object(r.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Qetd:function(n,e,t){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},a3WO:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,"a",(function(){return r}))},rePB:function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",(function(){return r}))},sp6S:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spark-dashboard/dashboard",function(){return t("xbqN")}])},xbqN:function(n,e,t){"use strict";t.r(e);var r=t("h4VS"),c=t("nKUr"),o=t("q1tI"),i=t.n(o),u=t("qhky"),a=t("ZHh6"),s=t("ODXe"),l=t("vOnD");function d(){var n=Object(r.a)(["\n    ul {\n        display: flex;\n        flex-direction: row;\n        list-style-type: none;\n        justify-content: space-around; \n    }\n"]);return d=function(){return n},n}var b=l.a.section(d());var j=function(){var n=i.a.useState(0),e=Object(s.a)(n,2),t=e[0],r=(e[1],i.a.useState(0)),o=Object(s.a)(r,2),u=o[0],a=(o[1],i.a.useState(0)),l=Object(s.a)(a,2),d=l[0];return l[1],Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[t," Cores"]}),Object(c.jsxs)("li",{children:[u," MB"]}),Object(c.jsxs)("li",{children:[d," MB"]})]})})})},f=t("S/4Z");var h=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"NebulaStats"}),Object(c.jsx)(j,{}),Object(c.jsx)(f.a,{ionName:"Jakob's Handy",ionStatus:!0})]})};function x(){var n=Object(r.a)(["\n    background-color: red;\n    border-radius: 2px;\n    border: none;\n    width: 80px;\n    height: 20px;\n    color: white;\n  "]);return x=function(){return n},n}function p(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return p=function(){return n},n}function O(){var n=Object(r.a)(["\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  "]);return O=function(){return n},n}function m(){var n=Object(r.a)(["\n    background-color: #404040;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n  "]);return m=function(){return n},n}function y(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n      justify-content: space-between;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n  "]);return y=function(){return n},n}var g=function(){var n=l.a.section(y()),e=l.a.hr(m()),t=l.a.section(O()),r=l.a.div(p()),i=l.a.button(x()),u=Object(o.useState)("s"),a=u[0],s=u[1],d=Object(o.useState)("s"),b=d[0],j=d[1];return Object(o.useRef)(null),Object(o.useEffect)((function(){s("s"),j("")})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"loadingbar"}),Object(c.jsx)("li",{children:"my-spark-1"}),Object(c.jsxs)("li",{children:[4," Ion",a]}),Object(c.jsxs)("li",{children:[1," min",b]}),Object(c.jsx)("li",{children:Object(c.jsx)(t,{children:Object(c.jsx)(r,{children:Object(c.jsx)(i,{onClick:function(n){window.confirm("Are your sure you want to cancel spark ".concat("my-spark-1","?"))&&console.log("OK")},children:"Cancel"})})})})]})}),Object(c.jsx)(e,{})]})};function v(){var n=Object(r.a)(["\n    display: flex;\n    \n\n    button {\n      width: 45px;\n      height: 20px;\n      color: white;\n      background-color: #4287f5;\n      border: none;\n      border-radius: 2px;\n      margin-right: 4px;\n      margin-bottom: 2px;\n    }\n\n    #download {\n      width: 75px;\n    }\n\n    em {\n      font-style: normal;\n      margin-right: 240px;\n    }\n\n    #outputLogs {\n      margin-right: 251px;\n    }\n  "]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n    background-color: red;\n    border-radius: 2px;\n    border: none;\n    width: 80px;\n    height: 20px;\n    color: white;\n  "]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return k=function(){return n},n}function S(){var n=Object(r.a)(["\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  "]);return S=function(){return n},n}function T(){var n=Object(r.a)(["\n    position: relative;\n    font-weight: 400;\n    font-size: 14px;\n    padding: 18px;\n    height: 200px;\n\n    textarea {\n      resize: none;\n      width: 400px;\n      height: 60px;\n    }\n  "]);return T=function(){return n},n}function E(){var n=Object(r.a)(["\n    background-color: white;\n    overflow: hidden;\n    transition: max-height 0.6s ease;\n  "]);return E=function(){return n},n}function C(){var n=Object(r.a)(["\n    background-color: #404040;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n  "]);return C=function(){return n},n}function L(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n      justify-content: space-between;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n  "]);return L=function(){return n},n}var _=function(){var n=l.a.section(L()),e=l.a.hr(C()),t=l.a.div(E()),r=l.a.div(T()),i=l.a.section(S()),u=l.a.div(k()),a=l.a.button(w()),s=l.a.div(v()),d=Object(o.useState)(""),b=d[0],j=d[1],f=Object(o.useState)("0px"),h=f[0],x=f[1],p=Object(o.useState)("More"),O=p[0],m=p[1],y=Object(o.useState)("s"),g=y[0],_=y[1],A=Object(o.useState)("s"),B=A[0],I=A[1],N=Object(o.useRef)(null),R=Object(o.useRef)(null),D=Object(o.useRef)(null);return Object(o.useEffect)((function(){_(""),I("s")})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"loadingbar"}),Object(c.jsx)("li",{children:"my-spark-1"}),Object(c.jsxs)("li",{children:[1," Ion",g]}),Object(c.jsxs)("li",{children:[2," min",B]}),Object(c.jsx)("li",{children:Object(c.jsx)(i,{children:Object(c.jsx)(u,{children:Object(c.jsx)(a,{onClick:function(){j(""===b?"active":""),x("active"===b?"0px":"".concat(N.current.scrollHeight,"px")),m("active"===b?"More":"Less")},children:O})})})})]})}),Object(c.jsx)(t,{ref:N,style:{maxHeight:"".concat(h)},children:Object(c.jsxs)(r,{children:[Object(c.jsxs)(s,{children:[Object(c.jsx)("em",{children:"Output"}),Object(c.jsx)("button",{onClick:function(n){R.current.select(),document.execCommand("copy"),n.target.focus()},children:"Copy"}),Object(c.jsx)("button",{id:"download",onClick:function(){var n=document.createElement("a"),e=new Blob([document.getElementById("output").value],{type:"text/plain"});n.href=URL.createObjectURL(e),n.download="".concat("my-spark-1","-output.json"),document.body.appendChild(n),n.click()},children:"Download"})]}),Object(c.jsx)("textarea",{id:"output",ref:R,readOnly:!0,children:'{"sum": 3}'}),Object(c.jsxs)(s,{children:[Object(c.jsx)("em",{id:"outputLogs",children:"Logs"}),Object(c.jsx)("button",{onClick:function(n){D.current.select(),document.execCommand("copy"),n.target.focus()},children:"Copy"}),Object(c.jsx)("button",{id:"download",onClick:function(){var n=document.createElement("a"),e=new Blob([document.getElementById("logs").value],{type:"text/plain"});n.href=URL.createObjectURL(e),n.download="".concat("my-spark-1","-logs.txt"),document.body.appendChild(n),n.click()},children:"Download"})]}),Object(c.jsx)("textarea",{id:"logs",ref:D,readOnly:!0,children:"200: OK"})]})}),Object(c.jsx)(e,{})]})};function A(){var n=Object(r.a)(["\n  \n"]);return A=function(){return n},n}var B=l.a.section(A());var I=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(B,{children:[Object(c.jsx)("h1",{children:"Running Sparks"}),Object(c.jsx)(g,{}),Object(c.jsx)("h1",{children:"Recent Sparks"}),Object(c.jsx)(_,{})]})})};function N(){var n=Object(r.a)(["\n  * {\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n    position: relative;\n  }\n"]);return N=function(){return n},n}var R=l.a.section(N());e.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(u.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),Object(c.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(c.jsx)("meta",{name:"HandheldFriendly",content:"true"})]}),Object(c.jsxs)(R,{children:[Object(c.jsx)(a.a,{nebulaID:"woody-wood-wood"}),Object(c.jsx)(h,{}),Object(c.jsx)(I,{})]})]})}},yLpj:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}n.exports=t}},[["sp6S",0,1,6]]]);