(this.webpackJsonpkeyword_validation_tool=this.webpackJsonpkeyword_validation_tool||[]).push([[0],{63:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(19),l=a.n(c),i=a(111),u=a(112),s=a(113),m=a(76),p=a(114),f=a(95),d=a(58),E=a(8),v=a.n(E),g=a(10),b=a(97),h=a(52),O=a.n(h),w=a(9),C=function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){var e=n.result;if("string"===typeof e){var r=JSON.parse(e);t(r)}else a("Expected string file content")},n.onerror=a,n.readAsText(e)}))},k="http://localhost:5000",j=function(){var e=Object(g.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"/",{signal:null===t||void 0===t?void 0:t.signal});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k+"/"+t,{signal:null===a||void 0===a?void 0:a.signal});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();!function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ERROR=1]="ERROR"}(n||(n={}));var R=function(e,t){return{type:e,status:n.SUCCESS,payload:t}},S=function(e,t){return{type:e,status:n.ERROR,error:t}},N=function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"CLEAN_STATE_WORDS"}),t.next=4,C(e);case 4:n=t.sent,a(R("LOAD_LOCAL_FILE",n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(S("LOAD_LOCAL_FILE",t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return{type:"CHANGE_RECORD_KEPT_STATE",word:e,kept:t}},T=Object(f.a)((function(e){return{button:{margin:e.spacing(1)},fileInput:{display:"none"}}})),_=function(){var e=T(),t=Object(w.b)(),a=function(){var e=Object(g.a)(v.a.mark((function e(a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=a.target.files)&&t(N(n[0]));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{variant:"contained",color:"default",component:"label",className:e.button,startIcon:o.a.createElement(O.a,null)},"Upload",o.a.createElement("input",{type:"file",className:e.fileInput,onChange:a})))},F=Object(f.a)((function(e){return{root:{marginTop:e.spacing(2),padding:e.spacing(2)}}})),A=function(){var e=F();return o.a.createElement(d.a,{elevation:3,className:e.root},o.a.createElement(m.a,{variant:"h3"},"File upload"),o.a.createElement(_,null))},L=a(4),D=a(99),U=a(100),I=a(101),W=a(102),B=a(103),H=a(104),M=a(105),P=a(35),G=a(34),J=a(98),K=Object(f.a)((function(e){return{root:{marginTop:e.spacing(2)},table:{minWidth:650},head:{backgroundColor:e.palette.primary.main},headCell:{color:e.palette.common.white},keptRow:{backgroundColor:e.palette.success.light},removeRow:{backgroundColor:e.palette.error.light},buttonBox:{width:"30vh"}}})),z=Object(L.a)((function(e){return{root:{color:e.palette.getContrastText(P.a[500]),backgroundColor:P.a[500],"&:hover":{backgroundColor:P.a[700]},marginRight:"8px"}}}))(b.a),V=Object(L.a)((function(e){return{root:{color:e.palette.getContrastText(G.a[500]),backgroundColor:G.a[500],"&:hover":{backgroundColor:G.a[700]}}}}))(b.a),$=Object(L.a)((function(e){return{root:{color:e.palette.getContrastText(J.a[500]),backgroundColor:J.a[500],"&:hover":{backgroundColor:J.a[700]}}}}))(b.a),q=function(e){var t=e.word,a=e.info,n=K(),r=Object(w.b)(),c=null;c=void 0===a.kept?o.a.createElement(o.a.Fragment,null,o.a.createElement(z,{variant:"contained",onClick:function(){r(x(t,!0))}},"OK"),o.a.createElement(V,{variant:"contained",onClick:function(){r(x(t,!1))}},"Reject")):o.a.createElement(o.a.Fragment,null,o.a.createElement($,{variant:"contained",onClick:function(){r(x(t,void 0))}},"Restore"));var l="";return!0===a.kept?l=n.keptRow:!1===a.kept&&(l=n.removeRow),o.a.createElement(D.a,{className:l},o.a.createElement(U.a,{align:"left"},t),o.a.createElement(U.a,{align:"right"},a.score),o.a.createElement(U.a,{align:"right",className:n.buttonBox},c))},Q=function(e){var t=e.canBeEmpty,a=K(),n=Object(w.c)((function(e){return e.words}));return o.a.createElement(I.a,{component:d.a,className:a.root,elevation:3},o.a.createElement(W.a,{className:a.table,"aria-label":"simple table"},o.a.createElement(B.a,null,o.a.createElement(D.a,{className:a.head},o.a.createElement(U.a,{align:"left",className:a.headCell},"Word"),o.a.createElement(U.a,{align:"right",className:a.headCell},"Score"),o.a.createElement(U.a,null))),o.a.createElement(H.a,null,Object.keys(n).map((function(e){return o.a.createElement(q,{key:e,word:e,info:n[e]})})))),!t&&0===Object.keys(n).length&&o.a.createElement(M.a,null))},X=a(53),Y=a.n(X),Z=Object(f.a)((function(e){return{button:{margin:e.spacing(1)},fileInput:{display:"none"}}})),ee=function(e){var t=e.fileName,a=e.data,n=Z(),r="data:text/plain;charset=utf-8,"+a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{variant:"contained",component:"a",color:"default",download:t,href:r,className:n.button,startIcon:o.a.createElement(Y.a,null)},"Download"))},te=Object(f.a)((function(e){return{root:{padding:e.spacing(2),marginTop:e.spacing(2)}}})),ae=function(){var e=te(),t=Object(w.c)((function(e){return e.words})),a={};for(var n in t){t[n].kept&&(a[n]=t[n].score)}return o.a.createElement(d.a,{elevation:3,className:e.root},o.a.createElement(m.a,{variant:"h3"},"Output"),o.a.createElement(ee,{fileName:"output.json",data:JSON.stringify(a)}))},ne=a(116),re=a(106),oe=a(21),ce=function(e){var t=e.path;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne.a,{"aria-label":"breadcrumb"},o.a.createElement(re.a,{color:"inherit",component:oe.b,to:"/"},"Source Documents"),t&&o.a.createElement(m.a,{color:"textPrimary"},t)))},le=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{path:"manual"}),o.a.createElement(A,null),o.a.createElement(Q,{canBeEmpty:!0}),o.a.createElement(ae,null))},ie=a(22),ue=a(42),se=a(115),me=a(107),pe=a(108),fe=a(109),de=a(110),Ee=Object(f.a)((function(e){return{gridContainer:{marginTop:e.spacing(1)}}})),ve=function(){var e=Ee(),t=Object(r.useState)([]),a=Object(ue.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(null),i=Object(ue.a)(l,2),u=i[0],s=i[1];return Object(r.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(g.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:a=t.sent,c(a),s(null),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"AbortError"!==t.t0.name&&(s(t.t0.message),c([]));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.abort()}}),[]),o.a.createElement(o.a.Fragment,null,u&&o.a.createElement(se.a,{severity:"error"},u),o.a.createElement(b.a,{color:"secondary",variant:"contained",component:oe.b,to:"/manual"},"Manual"),o.a.createElement(me.a,{container:!0,spacing:2,className:e.gridContainer},n.map((function(e,t){return o.a.createElement(me.a,{item:!0,xs:12,sm:4,lg:3,key:t},o.a.createElement(pe.a,{elevation:3},o.a.createElement(fe.a,null,o.a.createElement(m.a,{variant:"h5",component:"h2"},e.name)),o.a.createElement(de.a,null,o.a.createElement(b.a,{size:"small",color:"primary",variant:"contained",component:oe.b,to:"/".concat(e.id)},"Go"))))}))))},ge=a(55),be=a.n(ge),he=Object(f.a)((function(e){return{root:{padding:e.spacing(2),marginTop:e.spacing(2)},button:{margin:e.spacing(1)}}})),Oe=function(e){var t=e.id,a=he(),n=Object(w.c)((function(e){return e.words})),r={},c=!1;for(var l in n){var i=n[l];void 0!==i.kept&&(c=!0),!0===i.kept&&(r[l]=i.score)}if(!c)return null;return o.a.createElement(d.a,{elevation:3,className:a.root},o.a.createElement(b.a,{variant:"contained",color:"default",className:a.button,startIcon:o.a.createElement(be.a,null),onClick:function(){console.log(t,r)}},"Publish"))},we=function(){var e=Object(w.b)(),t=Object(ie.f)().id,a=t?parseInt(t):null;Object(r.useEffect)((function(){a&&e(function(e){return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"CLEAN_STATE_WORDS"}),t.next=4,y(e);case 4:n=t.sent,a(R("FETCH_SOURCE_DOCUMENT",n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(S("FETCH_SOURCE_DOCUMENT",t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[e,a]);var n=Object(w.c)((function(e){return e.currentFileName}));return a?o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{path:n}),o.a.createElement(Q,null),o.a.createElement(Oe,{id:a})):null},Ce=Object(f.a)((function(e){return{title:{flexGrow:1},container:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(36),je={words:{},error:void 0},ye=function(e){var t={};for(var a in e)t[a]={score:e[a],kept:void 0};return t},Re=function(e){return{words:ye(e.data),currentFileName:e.name}},Se=a(24),Ne=a(56),xe=a(57),Te=Object(Se.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAN_STATE_WORDS":return{currentFileName:void 0,error:void 0,words:{}};case"LOAD_LOCAL_FILE":switch(t.status){case n.SUCCESS:return{words:ye(t.payload),error:void 0};case n.ERROR:return{words:{},error:t.error};default:return e}case"FETCH_SOURCE_DOCUMENT":switch(t.status){case n.SUCCESS:return Object(ke.a)({},Re(t.payload),{error:void 0});case n.ERROR:return{words:{},error:t.error};default:return e}case"CHANGE_RECORD_KEPT_STATE":var a=Object(ke.a)({},e.words);return a[t.word].kept=t.kept,Object(ke.a)({},e,{error:void 0,words:a});default:return e}}),Object(Ne.composeWithDevTools)(Object(Se.applyMiddleware)(xe.a)));l.a.render(o.a.createElement(w.a,{store:Te},o.a.createElement((function(){var e=Ce();return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null),o.a.createElement(u.a,{position:"sticky"},o.a.createElement(s.a,null,o.a.createElement(m.a,{variant:"h6",className:e.title},"Keyword Validation Tool"))),o.a.createElement(p.a,{fixed:!0,className:e.container},o.a.createElement(oe.a,null,o.a.createElement(ie.c,null,o.a.createElement(ie.a,{exact:!0,path:"/"},o.a.createElement(ve,null)),o.a.createElement(ie.a,{path:"/manual"},o.a.createElement(le,null)),o.a.createElement(ie.a,{path:"/:id"},o.a.createElement(we,null))))))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.74a4d5db.chunk.js.map