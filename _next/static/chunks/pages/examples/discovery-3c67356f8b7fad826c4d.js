_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("a3WO");function a(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},"C/mO":function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s,u=n("KQm4"),l=n("o0o1"),f=n.n(l),b=n("HaE+"),p=n("ODXe"),h=n("nKUr"),d=n("YFqc"),j=n.n(d),O=n("q1tI"),v=n.n(O),w=n("1OyB"),m=n("rePB"),y=n("U2S/"),g=n("m9EI"),x=n("m1br"),k=n.n(x),M=new WeakMap,S=new WeakMap,E=new WeakMap,C=new WeakMap,W=new WeakMap,P=new WeakMap,T=new WeakMap,_=function e(t,n,r,a,c,o){var i=this;Object(w.a)(this,e),M.set(this,{writable:!0,value:""}),S.set(this,{writable:!0,value:""}),E.set(this,{writable:!0,value:""}),C.set(this,{writable:!0,value:void 0}),W.set(this,{writable:!0,value:function(){}}),P.set(this,{writable:!0,value:function(){}}),T.set(this,{writable:!0,value:function(){}}),Object(m.a)(this,"connect",Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g.a,e.t1=i,e.t2=C,e.next=5,k.a.create({repo:"".concat(Object(y.a)(i,S),"-repo-").concat(Math.random().toString(36).substring(7)),config:{Addresses:{Swarm:[Object(y.a)(i,M)]}}});case 5:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),Object(y.a)(i,C).libp2p.on("peer:discovery",Object(y.a)(i,W)),Object(y.a)(i,C).libp2p.connectionManager.on("peer:connect",Object(y.a)(i,P)),Object(y.a)(i,C).libp2p.connectionManager.on("peer:disconnect",Object(y.a)(i,T));case 10:case"end":return e.stop()}}),e)})))),Object(m.a)(this,"ChannelBuilder",(function(){var e,t,n=Object(y.a)(i,S),r=(Object(y.a)(i,E),Object(y.a)(i,C));return new(e=new WeakMap,t=new WeakMap,function(){return function a(){var c=this;Object(w.a)(this,a),e.set(this,{writable:!0,value:function(){}}),t.set(this,{writable:!0,value:""}),Object(m.a)(this,"setOnReceiveMessage",(function(t){return Object(g.a)(c,e,t),c})),Object(m.a)(this,"setSuffix",(function(e){return Object(g.a)(c,t,"".concat(n,":").concat(e)),c})),Object(m.a)(this,"build",(function(){return{subscribe:function(){var n=Object(b.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.pubsub.subscribe(Object(y.a)(c,t),Object(y.a)(c,e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),publish:function(){var e=Object(b.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.pubsub.publish(Object(y.a)(c,t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unsubscribe:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.pubsub.unsubscribe(Object(y.a)(c,t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}))}}())})),Object(g.a)(this,M,t),Object(g.a)(this,S,n),Object(g.a)(this,E,r),Object(g.a)(this,T,a),Object(g.a)(this,P,c),Object(g.a)(this,W,o)};Object(m.a)(_,"Builder",(r=new WeakMap,a=new WeakMap,c=new WeakMap,o=new WeakMap,i=new WeakMap,s=new WeakMap,function(){return function e(){var t=this;Object(w.a)(this,e),r.set(this,{writable:!0,value:""}),a.set(this,{writable:!0,value:""}),c.set(this,{writable:!0,value:""}),o.set(this,{writable:!0,value:function(){}}),i.set(this,{writable:!0,value:function(){}}),s.set(this,{writable:!0,value:function(){}}),Object(m.a)(this,"setSwarmMultiaddr",(function(e){return Object(g.a)(t,r,e),t})),Object(m.a)(this,"setPrefix",(function(e){return Object(g.a)(t,a,e),t})),Object(m.a)(this,"setSecretKey",(function(e){return Object(g.a)(t,c,e),t})),Object(m.a)(this,"setOnDiscoverPeer",(function(e){return Object(g.a)(t,o,e),t})),Object(m.a)(this,"setOnConnectPeer",(function(e){return Object(g.a)(t,i,e),t})),Object(m.a)(this,"setOnDisconnectPeer",(function(e){return Object(g.a)(t,s,e),t})),Object(m.a)(this,"build",(function(){return new _(Object(y.a)(t,r),Object(y.a)(t,a),Object(y.a)(t,c),Object(y.a)(t,o),Object(y.a)(t,i),Object(y.a)(t,s))}))}}()));t.default=function(){var e=v.a.useState(),t=Object(p.a)(e,2),n=t[0],r=t[1],a=v.a.useState("/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"),c=Object(p.a)(a,2),o=c[0],i=c[1],s=v.a.useState(""),l=Object(p.a)(s,2),d=l[0],O=l[1],w=v.a.useState(!1),m=Object(p.a)(w,2),y=m[0],g=m[1],x=v.a.useState(),k=Object(p.a)(x,2),M=k[0],S=k[1],E=v.a.useState(""),C=Object(p.a)(E,2),W=C[0],P=C[1],T=v.a.useState(""),D=Object(p.a)(T,2),B=D[0],A=D[1],R=v.a.useState(""),I=Object(p.a)(R,2),L=I[0],N=I[1],K=v.a.useState([]),U=Object(p.a)(K,2),J=U[0],F=U[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{href:"/",children:"\ud83d\udd19 Back"}),Object(h.jsx)("h1",{children:"Nebulark Discovery Examples"}),Object(h.jsx)("section",{id:"instructions",children:Object(h.jsxs)("em",{children:["Please ensure that you are in a ",Object(h.jsx)("strong",{children:"secure context"})," (i.e. a HTTPS secured page or localhost), otherwise the examples below might not work. Please also note that if you use the public WebRTC star below, the initial connection establishment might take a very long time (multiple minutes) or maybe not even work at all. For more information and solutions, please check out the"," ",Object(h.jsx)("a",{href:"https://github.com/pojntfx/nebulark#discovery",children:"README"}),"."]})}),Object(h.jsxs)("section",{id:"broadcast-room",children:[Object(h.jsx)("h2",{children:"Network Connection"}),Object(h.jsx)("input",{type:"text",placeholder:"Swarm multiaddr",value:o,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Secret key",value:d,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("button",{onClick:Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new _.Builder).setSwarmMultiaddr(o).setPrefix("nebulark-discovery-examples").setSecretKey(d).setOnDiscoverPeer((function(e){return console.log("discovered peer",e)})).setOnConnectPeer((function(e){return console.log("connected to peer",e)})).setOnDisconnectPeer((function(e){return console.log("disconnected from peer",e)})).build(),e.next=3,t.connect();case 3:r(t),g(!0);case 5:case"end":return e.stop()}}),e)}))),children:"Connect"}),Object(h.jsx)("span",{children:y?"\u2705 Connected":"\u274c Disconnected"}),y&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Room Connection"}),Object(h.jsx)("input",{type:"text",placeholder:"Room name",value:W,onChange:function(e){return P(e.target.value)}}),Object(h.jsx)("button",{onClick:Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.ChannelBuilder().setOnReceiveMessage(function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("received message"),F((function(e){return[].concat(Object(u.a)(e),[(new TextDecoder).decode(t.data)])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).setSuffix(W).build(),e.next=3,t.subscribe();case 3:S(t),A(!0);case 5:case"end":return e.stop()}}),e)}))),children:"Join room"}),Object(h.jsx)("span",{children:B?"\u2705 Joined":"\u274c Not yet joined"}),Object(h.jsx)("br",{}),B&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{type:"text",placeholder:"Message content",value:L,onChange:function(e){return N(e.target.value)}}),Object(h.jsx)("button",{onClick:Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.group("sending message"),e.next=3,M.publish((new TextEncoder).encode(L));case 3:N("");case 4:case"end":return e.stop()}}),e)}))),children:"Send message"}),Object(h.jsx)("h3",{children:"Messages"}),Object(h.jsx)("ul",{children:J.map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))})]})]})]})]})}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("a3WO");var a=n("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("BsWD");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"U2S/":function(e,t,n){"use strict";function r(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}n.d(t,"a",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c,o=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var b=function(e,t){var n=c||(l?c=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),c=a[0],u=a[1],h=(0,s.useRouter)(),d=h&&h.pathname||"/",j=o.default.useMemo((function(){var t=(0,i.resolveHref)(d,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(d,e.as):c||a}}),[d,e.href,e.as]),O=j.href,v=j.as;o.default.useEffect((function(){if(t&&l&&c&&c.tagName&&(0,i.isLocalURL)(O)&&!f[O+"%"+v])return b(c,(function(){p(h,O,v)}))}),[t,c,O,v,h]);var w=e.children,m=e.replace,y=e.shallow,g=e.scroll;"string"===typeof w&&(w=o.default.createElement("a",null,w));var x=o.Children.only(w),k={ref:function(e){e&&u(e),x&&"object"===typeof x&&x.ref&&("function"===typeof x.ref?x.ref(e):"object"===typeof x.ref&&(x.ref.current=e))},onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,O,v,m,y,g)}};return t&&(k.onMouseEnter=function(e){(0,i.isLocalURL)(O)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(h,O,v,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(v,h&&h.locale,h&&h.defaultLocale))),o.default.cloneElement(x,k)};t.default=h},g3bu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/discovery",function(){return n("C/mO")}])},m9EI:function(e,t,n){"use strict";function r(e,t,n){var r=t.get(e);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(e,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}n.d(t,"a",(function(){return r}))},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["g3bu",0,2,5,1,3,4,6]]]);