_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"C/mO":function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s,u=n("KQm4"),l=n("o0o1"),b=n.n(l),f=n("HaE+"),p=n("ODXe"),h=n("nKUr"),d=n("YFqc"),j=n.n(d),O=n("q1tI"),w=n.n(O),v=n("1OyB"),m=n("rePB"),x=n("U2S/"),g=n("m9EI"),y=n("m1br"),k=n.n(y),M=new WeakMap,S=new WeakMap,E=new WeakMap,C=new WeakMap,P=new WeakMap,W=new WeakMap,T=new WeakMap,_=function e(t,n,r,a,c,o){var i=this;Object(v.a)(this,e),M.set(this,{writable:!0,value:""}),S.set(this,{writable:!0,value:""}),E.set(this,{writable:!0,value:""}),C.set(this,{writable:!0,value:void 0}),P.set(this,{writable:!0,value:function(){}}),W.set(this,{writable:!0,value:function(){}}),T.set(this,{writable:!0,value:function(){}}),Object(m.a)(this,"connect",Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g.a,e.t1=i,e.t2=C,e.next=5,k.a.create({repo:"".concat(Object(x.a)(i,S),"-repo-").concat(Math.random().toString(36).substring(7)),config:{Addresses:{Swarm:[Object(x.a)(i,M)]}}});case 5:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),Object(x.a)(i,C).libp2p.on("peer:discovery",Object(x.a)(i,P)),Object(x.a)(i,C).libp2p.connectionManager.on("peer:connect",Object(x.a)(i,W)),Object(x.a)(i,C).libp2p.connectionManager.on("peer:disconnect",Object(x.a)(i,T));case 10:case"end":return e.stop()}}),e)})))),Object(m.a)(this,"ChannelBuilder",(function(){var e,t,n=Object(x.a)(i,S),r=(Object(x.a)(i,E),Object(x.a)(i,C));return new(e=new WeakMap,t=new WeakMap,function(){return function a(){var c=this;Object(v.a)(this,a),e.set(this,{writable:!0,value:function(){}}),t.set(this,{writable:!0,value:""}),Object(m.a)(this,"setOnReceiveMessage",(function(t){return Object(g.a)(c,e,t),c})),Object(m.a)(this,"setSuffix",(function(e){return Object(g.a)(c,t,"".concat(n,":").concat(e)),c})),Object(m.a)(this,"build",(function(){return{subscribe:function(){var n=Object(f.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.pubsub.subscribe(Object(x.a)(c,t),Object(x.a)(c,e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),publish:function(){var e=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.pubsub.publish(Object(x.a)(c,t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unsubscribe:function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.pubsub.unsubscribe(Object(x.a)(c,t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}))}}())})),Object(g.a)(this,M,t),Object(g.a)(this,S,n),Object(g.a)(this,E,r),Object(g.a)(this,T,a),Object(g.a)(this,W,c),Object(g.a)(this,P,o)};Object(m.a)(_,"Builder",(r=new WeakMap,a=new WeakMap,c=new WeakMap,o=new WeakMap,i=new WeakMap,s=new WeakMap,function(){return function e(){var t=this;Object(v.a)(this,e),r.set(this,{writable:!0,value:""}),a.set(this,{writable:!0,value:""}),c.set(this,{writable:!0,value:""}),o.set(this,{writable:!0,value:function(){}}),i.set(this,{writable:!0,value:function(){}}),s.set(this,{writable:!0,value:function(){}}),Object(m.a)(this,"setSwarmMultiaddr",(function(e){return Object(g.a)(t,r,e),t})),Object(m.a)(this,"setPrefix",(function(e){return Object(g.a)(t,a,e),t})),Object(m.a)(this,"setSecretKey",(function(e){return Object(g.a)(t,c,e),t})),Object(m.a)(this,"setOnDiscoverPeer",(function(e){return Object(g.a)(t,o,e),t})),Object(m.a)(this,"setOnConnectPeer",(function(e){return Object(g.a)(t,i,e),t})),Object(m.a)(this,"setOnDisconnectPeer",(function(e){return Object(g.a)(t,s,e),t})),Object(m.a)(this,"build",(function(){return new _(Object(x.a)(t,r),Object(x.a)(t,a),Object(x.a)(t,c),Object(x.a)(t,o),Object(x.a)(t,i),Object(x.a)(t,s))}))}}()));t.default=function(){var e=w.a.useState(),t=Object(p.a)(e,2),n=t[0],r=t[1],a=w.a.useState("/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"),c=Object(p.a)(a,2),o=c[0],i=c[1],s=w.a.useState(""),l=Object(p.a)(s,2),d=l[0],O=l[1],v=w.a.useState(!1),m=Object(p.a)(v,2),x=m[0],g=m[1],y=w.a.useState(),k=Object(p.a)(y,2),M=k[0],S=k[1],E=w.a.useState(""),C=Object(p.a)(E,2),P=C[0],W=C[1],T=w.a.useState(""),R=Object(p.a)(T,2),B=R[0],D=R[1],L=w.a.useState(""),N=Object(p.a)(L,2),K=N[0],I=N[1],J=w.a.useState([]),U=Object(p.a)(J,2),A=U[0],F=U[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{href:"/",children:"\ud83d\udd19 Back"}),Object(h.jsx)("h1",{children:"Nebulark Discovery Examples"}),Object(h.jsx)("section",{id:"instructions",children:Object(h.jsxs)("em",{children:["Please ensure that you are in a ",Object(h.jsx)("strong",{children:"secure context"})," (i.e. a HTTPS secured page or localhost), otherwise the examples below might not work. Please also note that if you use the public WebRTC star below, the initial connection establishment might take a very long time (multiple minutes) or maybe not even work at all. For more information and solutions, please check out the"," ",Object(h.jsx)("a",{href:"https://github.com/pojntfx/nebulark#discovery",children:"README"}),"."]})}),Object(h.jsxs)("section",{id:"broadcast-room",children:[Object(h.jsx)("h2",{children:"Network Connection"}),Object(h.jsx)("input",{type:"text",placeholder:"Swarm multiaddr",value:o,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Secret key",value:d,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("button",{onClick:Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new _.Builder).setSwarmMultiaddr(o).setPrefix("nebulark-discovery-examples").setSecretKey(d).setOnDiscoverPeer((function(e){return console.log("discovered peer",e)})).setOnConnectPeer((function(e){return console.log("connected to peer",e)})).setOnDisconnectPeer((function(e){return console.log("disconnected from peer",e)})).build(),e.next=3,t.connect();case 3:r(t),g(!0);case 5:case"end":return e.stop()}}),e)}))),children:"Connect"}),Object(h.jsx)("span",{children:x?"\u2705 Connected":"\u274c Disconnected"}),x&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Room Connection"}),Object(h.jsx)("input",{type:"text",placeholder:"Room name",value:P,onChange:function(e){return W(e.target.value)}}),Object(h.jsx)("button",{onClick:Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.ChannelBuilder().setOnReceiveMessage(function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("received message"),F((function(e){return[].concat(Object(u.a)(e),[(new TextDecoder).decode(t.data)])}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).setSuffix(P).build(),e.next=3,t.subscribe();case 3:S(t),D(!0);case 5:case"end":return e.stop()}}),e)}))),children:"Join room"}),Object(h.jsx)("span",{children:B?"\u2705 Joined":"\u274c Not yet joined"}),Object(h.jsx)("br",{}),B&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{type:"text",placeholder:"Message content",value:K,onChange:function(e){return I(e.target.value)}}),Object(h.jsx)("button",{onClick:Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.group("sending message"),e.next=3,M.publish((new TextEncoder).encode(K));case 3:I("");case 4:case"end":return e.stop()}}),e)}))),children:"Send message"}),Object(h.jsx)("h3",{children:"Messages"}),Object(h.jsx)("ul",{children:A.map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))})]})]})]})]})}},KQm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("a3WO");var a=n("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"U2S/":function(e,t,n){"use strict";function r(e,t){var n=t.get(e);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(e):n.value}n.d(t,"a",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c,o=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,b={};var f=function(e,t){var n=c||(l?c=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),b[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),c=a[0],u=a[1],h=(0,s.useRouter)(),d=h&&h.pathname||"/",j=o.default.useMemo((function(){var t=(0,i.resolveHref)(d,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,i.resolveHref)(d,e.as):c||a}}),[d,e.href,e.as]),O=j.href,w=j.as;o.default.useEffect((function(){if(t&&l&&c&&c.tagName&&(0,i.isLocalURL)(O)&&!b[O+"%"+w])return f(c,(function(){p(h,O,w)}))}),[t,c,O,w,h]);var v=e.children,m=e.replace,x=e.shallow,g=e.scroll;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),k={ref:function(e){e&&u(e),y&&"object"===typeof y&&y.ref&&("function"===typeof y.ref?y.ref(e):"object"===typeof y.ref&&(y.ref.current=e))},onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,O,w,m,x,g)}};return t&&(k.onMouseEnter=function(e){(0,i.isLocalURL)(O)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(h,O,w,{priority:!0}))}),(e.passHref||"a"===y.type&&!("href"in y.props))&&(k.href=(0,i.addBasePath)((0,i.addLocale)(w,h&&h.locale,h&&h.defaultLocale))),o.default.cloneElement(y,k)};t.default=h},g3bu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/discovery",function(){return n("C/mO")}])},m9EI:function(e,t,n){"use strict";function r(e,t,n){var r=t.get(e);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(e,n);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=n}return n}n.d(t,"a",(function(){return r}))},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["g3bu",0,2,5,1,3,4,6]]]);