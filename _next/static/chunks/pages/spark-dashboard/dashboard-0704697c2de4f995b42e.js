_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"8oxB":function(n,t){var e,r,i=n.exports={};function c(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(e===setTimeout)return setTimeout(n,0);if((e===c||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:c}catch(n){e=c}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(n){r=o}}();var u,s=[],l=!1,d=-1;function b(){l&&u&&(l=!1,u.length?s=u.concat(s):d=-1,s.length&&j())}function j(){if(!l){var n=a(b);l=!0;for(var t=s.length;t;){for(u=s,s=[];++d<t;)u&&u[d].run();d=-1,t=s.length}u=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function f(n,t){this.fun=n,this.array=t}function x(){}i.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new f(n,t)),1!==s.length||l||a(j)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=x,i.addListener=x,i.once=x,i.off=x,i.removeListener=x,i.removeAllListeners=x,i.emit=x,i.prependListener=x,i.prependOnceListener=x,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},BsWD:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("a3WO");function i(n,t){if(n){if("string"===typeof n)return Object(r.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(n,t):void 0}}},ODXe:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("BsWD");function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,i=!1,c=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(u){i=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw c}}return e}}(n,t)||Object(r.a)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Qetd:function(n,t,e){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},a3WO:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},rePB:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,"a",(function(){return r}))},sp6S:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spark-dashboard/dashboard",function(){return e("xbqN")}])},xbqN:function(n,t,e){"use strict";e.r(t);var r=e("h4VS"),i=e("nKUr"),c=e("q1tI"),o=e.n(c),a=e("qhky"),u=e("ZHh6"),s=e("ODXe"),l=e("vOnD");function d(){var n=Object(r.a)(["\n  ul {\n    display: flex;\n    flex-direction: row;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 80px;\n    margin-top: 60px;\n  }\n  li {\n    margin-right: 40px;\n  }\n"]);return d=function(){return n},n}var b=l.a.section(d());var j=function(){var n=o.a.useState(0),t=Object(s.a)(n,2),e=t[0],r=t[1],a=o.a.useState(0),u=Object(s.a)(a,2),l=u[0],d=u[1],j=o.a.useState(0),f=Object(s.a)(j,2),x=f[0],h=f[1],p=Object(c.useState)("s"),O=p[0],m=p[1];return Object(c.useEffect)((function(){r(1),d(233),h(4),m(1===e?"":"s")})),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(b,{children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[e," Core",O]}),Object(i.jsxs)("li",{children:[l," MB"]}),Object(i.jsxs)("li",{children:[x," MB"]})]})})})},f=e("S/4Z");function x(){var n=Object(r.a)(["\n  position: relative;\n  margin-top: 70px;\n  margin-left: 14px;\n"]);return x=function(){return n},n}var h=l.a.section(x());var p=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{children:"NebulaStats"}),Object(i.jsx)(j,{}),Object(i.jsx)(f.a,{ionName:"Jakob's MoBilTelEfOn",ionStatus:!0})]})})};function O(){var n=Object(r.a)(["\n    background-color: red;\n    border-radius: 2px;\n    border: none;\n    width: 80px;\n    height: 20px;\n    color: white;\n  "]);return O=function(){return n},n}function m(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  "]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n    background-color: #404240;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n    max-width: 500px;\n    margin-left: 0px;\n  "]);return v=function(){return n},n}function w(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n    }\n    li {\n      margin-right: 40px;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n    img {\n      height: 25px;\n      width: 25px;\n    }\n  "]);return w=function(){return n},n}var y=function(){var n=l.a.section(w()),t=l.a.hr(v()),e=l.a.section(g()),r=l.a.div(m()),o=l.a.button(O()),a=Object(c.useState)("s"),u=a[0],s=a[1],d=Object(c.useState)("s"),b=d[0],j=d[1];return Object(c.useEffect)((function(){s("s"),j("")})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(n,{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("img",{src:"/loadingSpinner.svg"})}),Object(i.jsx)("li",{children:"my-spark-1"}),Object(i.jsxs)("li",{children:[4," Ion",u]}),Object(i.jsxs)("li",{children:[1," min",b]}),Object(i.jsx)("li",{children:Object(i.jsx)(e,{children:Object(i.jsx)(r,{children:Object(i.jsx)(o,{onClick:function(n){window.confirm("Are your sure you want to cancel spark ".concat("my-spark-1","?"))&&console.log("OK")},children:"Cancel"})})})})]})}),Object(i.jsx)(t,{})]})};function k(){var n=Object(r.a)(["\n    margin-top: 25px;\n  "]);return k=function(){return n},n}function S(){var n=Object(r.a)(["\n    display: flex;\n    \n\n    button {\n      width: 45px;\n      height: 20px;\n      color: white;\n      background-color: #404240;\n      border: none;\n      border-radius: 2px;\n      margin-right: 4px;\n      margin-bottom: 2px;\n    }\n\n    #download {\n      width: 75px;\n    }\n\n    em {\n      font-style: normal;\n      margin-right: 240px;\n    }\n\n    #outputLogs {\n      margin-right: 251px;\n    }\n  "]);return S=function(){return n},n}function T(){var n=Object(r.a)(["\n    background-color: red;\n    border-radius: 2px;\n    border: none;\n    width: 80px;\n    height: 20px;\n    color: white;\n  "]);return T=function(){return n},n}function E(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return E=function(){return n},n}function C(){var n=Object(r.a)(["\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  "]);return C=function(){return n},n}function L(){var n=Object(r.a)(["\n    position: relative;\n    font-weight: 400;\n    padding: 18px;\n    height: 200px;\n\n    textarea {\n      resize: none;\n      width: 400px;\n      height: 60px;\n    }\n  "]);return L=function(){return n},n}function _(){var n=Object(r.a)(["\n    background-color: white;\n    overflow: hidden;\n    transition: max-height 0.6s ease;\n  "]);return _=function(){return n},n}function A(){var n=Object(r.a)(["\n    background-color: #404240;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n    max-width: 500px;\n    margin-left: 0px;\n    margin-top: 0px;\n  "]);return A=function(){return n},n}function B(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n    }\n    li {\n      margin-right: 40px;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n    img {\n      height: 25px;\n      width: 25px;\n    }\n  "]);return B=function(){return n},n}var I=function(){var n=l.a.section(B()),t=l.a.hr(A()),e=l.a.div(_()),r=l.a.div(L()),o=l.a.section(C()),a=l.a.div(E()),u=l.a.button(T()),s=l.a.div(S()),d=l.a.section(k()),b=Object(c.useState)(""),j=b[0],f=b[1],x=Object(c.useState)("0px"),h=x[0],p=x[1],O=Object(c.useState)("More"),m=O[0],g=O[1],v=Object(c.useState)("s"),w=v[0],y=v[1],I=Object(c.useState)("s"),N=I[0],R=I[1],D=Object(c.useRef)(null),F=Object(c.useRef)(null),U=Object(c.useRef)(null);return Object(c.useEffect)((function(){y(""),R("s")})),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d,{children:[Object(i.jsx)(n,{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("img",{src:"/success.svg"})}),Object(i.jsx)("li",{children:"my-spark-1"}),Object(i.jsxs)("li",{children:[1," Ion",w]}),Object(i.jsxs)("li",{children:[2," min",N]}),Object(i.jsx)("li",{children:Object(i.jsx)(o,{children:Object(i.jsx)(a,{children:Object(i.jsx)(u,{onClick:function(){f(""===j?"active":""),p("active"===j?"0px":"".concat(D.current.scrollHeight,"px")),g("active"===j?"More":"Less")},children:m})})})})]})}),Object(i.jsx)(e,{ref:D,style:{maxHeight:"".concat(h)},children:Object(i.jsxs)(r,{children:[Object(i.jsxs)(s,{children:[Object(i.jsx)("em",{children:"Output"}),Object(i.jsx)("button",{onClick:function(n){F.current.select(),document.execCommand("copy"),n.target.focus()},children:"Copy"}),Object(i.jsx)("button",{id:"download",onClick:function(){var n=document.createElement("a"),t=new Blob([document.getElementById("output").value],{type:"text/plain"});n.href=URL.createObjectURL(t),n.download="".concat("my-spark-1","-output.json"),document.body.appendChild(n),n.click()},children:"Download"})]}),Object(i.jsx)("textarea",{id:"output",ref:F,readOnly:!0,children:'{"sum": 3}'}),Object(i.jsxs)(s,{children:[Object(i.jsx)("em",{id:"outputLogs",children:"Logs"}),Object(i.jsx)("button",{onClick:function(n){U.current.select(),document.execCommand("copy"),n.target.focus()},children:"Copy"}),Object(i.jsx)("button",{id:"download",onClick:function(){var n=document.createElement("a"),t=new Blob([document.getElementById("logs").value],{type:"text/plain"});n.href=URL.createObjectURL(t),n.download="".concat("my-spark-1","-logs.txt"),document.body.appendChild(n),n.click()},children:"Download"})]}),Object(i.jsx)("textarea",{id:"logs",ref:U,readOnly:!0,children:"200: OK"})]})}),Object(i.jsx)(t,{})]})})};function N(){var n=Object(r.a)(["\n  margin-left: 390px;\n  margin-top: -528px;  \n"]);return N=function(){return n},n}var R=l.a.section(N());var D=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(R,{children:[Object(i.jsx)("h1",{children:"Running Sparks"}),Object(i.jsx)(y,{}),Object(i.jsx)("h1",{children:"Recent Sparks"}),Object(i.jsx)(I,{}),Object(i.jsx)(I,{}),Object(i.jsx)(I,{})]})})};function F(){var n=Object(r.a)(["\n"]);return F=function(){return n},n}function U(){var n=Object(r.a)(["\n  margin-left: 375px;\n  margin-top: 11em;\n  \n  @media (max-width: 768px) {\n    margin-left: 0;\n    margin-top: 12em;\n  }\n"]);return U=function(){return n},n}function H(){var n=Object(r.a)(["\n  max-width: 900px;\n  margin: 50px auto;\n  padding: 0 0px 0px 0;\n  position: relative;\n  min-width: 768px;\n"]);return H=function(){return n},n}function M(){var n=Object(r.a)(["\n  display: inline-block;\n  border-left: 5px solid #404240;\n  height: 500px;\n  border-radius: 2px;\n  margin-left: 301px;\n  margin-top: -192.5px;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);return M=function(){return n},n}function q(){var n=Object(r.a)(["\n  * {\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n    position: relative;\n    color: #404240;\n  }\n\n  margin: 8px;\n"]);return q=function(){return n},n}var X=l.a.section(q()),P=l.a.span(M()),W=l.a.div(H()),z=Object(l.a)(D)(U()),J=Object(l.a)(p)(F());t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(a.a,{children:[Object(i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),Object(i.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(i.jsx)("meta",{name:"HandheldFriendly",content:"true"})]}),Object(i.jsxs)(X,{children:[Object(i.jsx)(u.a,{nebulaID:"woody-wood-wood",category:"Setup"}),Object(i.jsxs)(W,{children:[Object(i.jsx)(J,{}),Object(i.jsx)(P,{}),Object(i.jsx)(z,{})]})]})]})}},yLpj:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}n.exports=e}},[["sp6S",0,1,6]]]);