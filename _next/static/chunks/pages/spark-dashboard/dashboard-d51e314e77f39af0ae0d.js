_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{BsWD:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("a3WO");function c(n,e){if(n){if("string"===typeof n)return Object(r.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(n,e):void 0}}},ODXe:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("BsWD");function c(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,c=!1,i=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(c)throw i}}return t}}(n,e)||Object(r.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Qetd:function(n,e,t){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},a3WO:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}t.d(e,"a",(function(){return r}))},rePB:function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",(function(){return r}))},sp6S:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spark-dashboard/dashboard",function(){return t("xbqN")}])},xbqN:function(n,e,t){"use strict";t.r(e);var r=t("h4VS"),c=t("nKUr"),i=t("q1tI"),o=t.n(i),a=t("qhky"),u=t("ZHh6"),s=t("ODXe"),l=t("vOnD");function d(){var n=Object(r.a)(["\n  ul {\n    display: flex;\n    flex-direction: row;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 112px;\n    margin-top: 30px;\n    \n    @media (max-width: 840px) {\n      margin-bottom: 131px;\n    }\n  }\n  li {\n    margin-right: 40px;\n  }\n"]);return d=function(){return n},n}var j=l.a.section(d());var b=function(){var n=o.a.useState(0),e=Object(s.a)(n,2),t=e[0],r=e[1],a=o.a.useState(0),u=Object(s.a)(a,2),l=u[0],d=u[1],b=o.a.useState(0),x=Object(s.a)(b,2),h=x[0],p=x[1],f=Object(i.useState)("s"),O=f[0],m=f[1];return Object(i.useEffect)((function(){r(1),d(233),p(4),m(1===t?"":"s")})),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(j,{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[t," Core",O]}),Object(c.jsxs)("li",{children:[l," MB"]}),Object(c.jsxs)("li",{children:[h," MB"]})]})})})},x=t("S/4Z");function h(){var n=Object(r.a)(["\n  margin-top: 15.5px;\n"]);return h=function(){return n},n}function p(){var n=Object(r.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);return p=function(){return n},n}var f=l.a.section(p()),O=Object(l.a)(x.a)(h());var m=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(f,{children:[Object(c.jsx)("h1",{children:"NebulaStats"}),Object(c.jsx)(b,{}),Object(c.jsx)(O,{ionName:"John's Phone",ionStatus:!0})]})})};function g(){var n=Object(r.a)(["\n    background-color: red;\n    border-radius: 2px;\n    border: none;\n    width: 80px;\n    height: 20px;\n    color: white;\n  "]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return v=function(){return n},n}function y(){var n=Object(r.a)(["\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  "]);return y=function(){return n},n}function w(){var n=Object(r.a)(["\n    background-color: #404240;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n    max-width: 500px;\n    margin-left: 0px;\n  "]);return w=function(){return n},n}function k(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n    }\n    li {\n      margin-right: 40px;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n    img {\n      height: 25px;\n      width: 25px;\n    }\n  "]);return k=function(){return n},n}var S=function(){var n=l.a.section(k()),e=l.a.hr(w()),t=l.a.section(y()),r=l.a.div(v()),o=l.a.button(g()),a=Object(i.useState)("s"),u=a[0],s=a[1],d=Object(i.useState)("s"),j=d[0],b=d[1];return Object(i.useEffect)((function(){s("s"),b("")})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"/loadingSpinner.svg"})}),Object(c.jsx)("li",{children:"my-spark-1"}),Object(c.jsxs)("li",{children:[4," Ion",u]}),Object(c.jsxs)("li",{children:[1," min",j]}),Object(c.jsx)("li",{children:Object(c.jsx)(t,{children:Object(c.jsx)(r,{children:Object(c.jsx)(o,{onClick:function(n){window.confirm("Are your sure you want to cancel spark ".concat("my-spark-1","?"))&&console.log("OK")},children:"Cancel"})})})})]})}),Object(c.jsx)(e,{})]})};function C(){var n=Object(r.a)(["\n    margin-left: -4px;\n  "]);return C=function(){return n},n}function E(){var n=Object(r.a)(["\n    margin-left: -6px;\n  "]);return E=function(){return n},n}function _(){var n=Object(r.a)(["\n    margin-top: 25px;\n  "]);return _=function(){return n},n}function N(){var n=Object(r.a)(["\n    display: flex;\n\n    button {\n      width: 45px;\n      height: 20px;\n      color: white;\n      background-color: #404240;\n      border: none;\n      border-radius: 2px;\n      margin-right: 4px;\n      margin-bottom: 2px;\n    }\n\n    #download {\n      width: 75px;\n    }\n\n    em {\n      font-style: normal;\n      margin-right: 240px;\n    }\n\n    #outputLogs {\n      margin-right: 251px;\n    }\n  "]);return N=function(){return n},n}function I(){var n=Object(r.a)(["\n    background-color: red;\n    border-radius: 2px;\n    border: none;\n    width: 80px;\n    height: 20px;\n    color: white;\n  "]);return I=function(){return n},n}function A(){var n=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n  "]);return A=function(){return n},n}function B(){var n=Object(r.a)(["\n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  "]);return B=function(){return n},n}function L(){var n=Object(r.a)(["\n    position: relative;\n    font-weight: 400;\n    padding: 18px;\n    height: 200px;\n    margin-left: 44px;\n    textarea {\n      resize: none;\n      width: 400px;\n      height: 60px;\n    }\n  "]);return L=function(){return n},n}function R(){var n=Object(r.a)(["\n    background-color: white;\n    overflow: hidden;\n    transition: max-height 0.6s ease;\n  "]);return R=function(){return n},n}function D(){var n=Object(r.a)(["\n    background-color: #404240;\n    height: 3px;\n    border: none;\n    border-radius: 2px;\n    max-width: 500px;\n    margin-left: 0px;\n    margin-top: 0px;\n  "]);return D=function(){return n},n}function F(){var n=Object(r.a)(["\n    ul {\n      display: flex;\n      list-style-type: none;\n    }\n    li {\n      margin-right: 40px;\n    }\n    button {\n      background-color: red;\n      border-radius: 2px;\n      border: none;\n      width: 80px;\n      height: 20px;\n      color: white;\n    }\n    img {\n      height: 25px;\n      width: 25px;\n    }\n  "]);return F=function(){return n},n}var U=function(){var n=l.a.section(F()),e=l.a.hr(D()),t=l.a.div(R()),r=l.a.div(L()),o=l.a.section(B()),a=l.a.div(A()),u=l.a.button(I()),s=l.a.div(N()),d=l.a.section(_()),j=l.a.section(E()),b=l.a.section(C()),x=Object(i.useState)(""),h=x[0],p=x[1],f=Object(i.useState)("0px"),O=f[0],m=f[1],g=Object(i.useState)("More"),v=g[0],y=g[1],w=Object(i.useState)("s"),k=w[0],S=w[1],U=Object(i.useState)("s"),H=U[0],q=U[1],M=Object(i.useRef)(null),P=Object(i.useRef)(null),X=Object(i.useRef)(null);return Object(i.useEffect)((function(){S(""),q("s")})),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(d,{children:[Object(c.jsx)(n,{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("img",{src:"/success.svg"})}),Object(c.jsx)("li",{children:"my-spark-1"}),Object(c.jsxs)("li",{children:[1," Ion",k]}),Object(c.jsxs)("li",{children:[2," min",H]}),Object(c.jsx)("li",{children:Object(c.jsx)(o,{children:Object(c.jsx)(a,{children:Object(c.jsx)(u,{onClick:function(){p(""===h?"active":""),m("active"===h?"0px":"".concat(M.current.scrollHeight,"px")),y("active"===h?"More":"Less")},children:v})})})})]})}),Object(c.jsx)(t,{ref:M,style:{maxHeight:"".concat(O)},children:Object(c.jsxs)(r,{children:[Object(c.jsxs)(s,{children:[Object(c.jsx)("em",{children:"Output"}),Object(c.jsxs)(j,{children:[Object(c.jsx)("button",{onClick:function(n){P.current.select(),document.execCommand("copy"),n.target.focus()},children:"Copy"}),Object(c.jsx)("button",{id:"download",onClick:function(){var n=document.createElement("a"),e=new Blob([document.getElementById("output").value],{type:"text/plain"});n.href=URL.createObjectURL(e),n.download="".concat("my-spark-1","-output.json"),document.body.appendChild(n),n.click()},children:"Download"})]})]}),Object(c.jsx)("textarea",{id:"output",ref:P,readOnly:!0,children:'{"sum": 3}'}),Object(c.jsxs)(s,{children:[Object(c.jsx)("em",{id:"outputLogs",children:"Logs"}),Object(c.jsxs)(b,{children:[Object(c.jsx)("button",{onClick:function(n){X.current.select(),document.execCommand("copy"),n.target.focus()},children:"Copy"}),Object(c.jsx)("button",{id:"download",onClick:function(){var n=document.createElement("a"),e=new Blob([document.getElementById("logs").value],{type:"text/plain"});n.href=URL.createObjectURL(e),n.download="".concat("my-spark-1","-logs.txt"),document.body.appendChild(n),n.click()},children:"Download"})]})]}),Object(c.jsx)("textarea",{id:"logs",ref:X,readOnly:!0,children:"200: OK"})]})}),Object(c.jsx)(e,{})]})})};function H(){var n=Object(r.a)([" \n  display: flex;\n  flex-direction: column;\n"]);return H=function(){return n},n}var q=l.a.section(H());var M=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(q,{children:[Object(c.jsx)("h1",{children:"Running Sparks"}),Object(c.jsx)(S,{}),Object(c.jsx)("h1",{children:"Recent Sparks"}),Object(c.jsx)(U,{}),Object(c.jsx)(U,{}),Object(c.jsx)(U,{})]})})};function P(){var n=Object(r.a)(["\n  display: inline-block;\n  border-left: 5px solid #404240;\n  height: 500px;\n  border-radius: 2px;\n \n  @media (max-width: 840px) {\n    display: none;\n  }\n"]);return P=function(){return n},n}function X(){var n=Object(r.a)(['\n    display: grid;\n    grid-template-columns: 260px 50px 510px;\n    grid-auto-rows: minmax(120px, auto);\n    grid-template-areas: "header header header";\n    justify-content: center;\n    \n\n    .header {\n      grid-area: header;\n    }\n\n    * {\n      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n      position: relative;\n      color: #404240;\n    }\n\n    @media (max-width: 840px) {\n      grid-template: "header";\n      grid-template-columns: 1fr;\n    }\n']);return X=function(){return n},n}var W=l.a.div(X()),z=l.a.span(P());e.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),Object(c.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(c.jsx)("meta",{name:"HandheldFriendly",content:"true"})]}),Object(c.jsxs)(W,{children:[Object(c.jsx)(u.a,{className:"header",nebulaID:"woody-wood-wood",category:"Setup"}),Object(c.jsx)(m,{}),Object(c.jsx)(z,{}),Object(c.jsx)(M,{})]})]})}},yLpj:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}n.exports=t}},[["sp6S",0,1,5,7]]]);