(function(e){function t(t){for(var a,c,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={index:0},o={index:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1fb3aa5d":1,"chunk-50ab797a":1,"chunk-ff4818f0":1,"chunk-3bddc606":1,"chunk-f4e44914":1,"chunk-56bfc1e1":1,"chunk-593d700c":1,"chunk-2b6840ea":1,"chunk-829f4c26":1,"chunk-238f14a8":1,"chunk-68c6ed17":1,"chunk-2e4305fd":1,"chunk-448594c3":1,"chunk-57cc3794":1,"chunk-5fed373c":1,"chunk-7c77c1e2":1,"chunk-377903a4":1,"chunk-586caf0d":1,"chunk-44a48fcb":1,"chunk-1c76f7fe":1,"chunk-4ba4f37c":1,"chunk-66546a30":1,"chunk-11167d93":1,"chunk-1ed85d30":1,"chunk-7cc860f7":1,"chunk-f742bcf2":1,"chunk-049e28b4":1,"chunk-4d0d7446":1,"chunk-b2383f76":1,"chunk-84a82956":1,"chunk-f8d17ac2":1,"chunk-2f037878":1,"chunk-cb06fb70":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var l=r[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],m.parentNode.removeChild(m),n(r)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("4239")},"0d87":function(e,t,n){"use strict";n("477e")},1:function(e,t){},"29d9":function(e,t,n){},4239:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,c,o=n("2b0e"),r=n("969b"),u=n("498ac"),i=n("51c2"),l=n("dbbe"),s=n("ed09"),d=n("ae40"),m=n("77f9"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",class:[e.skinClasses],attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1),e.enableScrollToTop?n("scroll-to-top"):e._e()],1)},h=[],f=(n("d3b7"),n("3ca3"),n("ddb0"),n("498a"),n("a9e3"),n("fb6a"),n("b0c0"),n("caad"),n("2532"),n("e9c4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-scroll-to-top",class:{show:e.y>250}},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"primary"},on:{click:e.scrollToTop}},[n("feather-icon",{attrs:{icon:"ArrowUpIcon",size:"16"}})],1)],1)}),b=[],g=n("5550"),k=n("1947"),x=n("e009"),v={directives:{Ripple:x["a"]},components:{BButton:k["a"]},setup:function(){var e=Object(g["b"])(),t=e.y,n=function(){var e=document.documentElement;e.scrollTo({top:0,behavior:"smooth"})};return{y:t,scrollToTop:n}}},T=v,y=(n("0d87"),n("2877")),P=Object(y["a"])(T,f,b,!1,null,"1731478d",null),O=P.exports,C=n("94c8"),D=n("04b0"),E=n("939c"),S=n("f33c"),A=n("4328"),j=function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-255299ca"),n.e("chunk-829f4c26"),n.e("chunk-238f14a8")]).then(n.bind(null,"aea6"))},L=function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-255299ca"),n.e("chunk-829f4c26"),n.e("chunk-68c6ed17")]).then(n.bind(null,"3215"))},N=function(){return n.e("chunk-2d2082cb").then(n.bind(null,"a457"))},w={components:{LayoutHorizontal:L,LayoutVertical:j,LayoutFull:N,ScrollToTop:O},setup:function(){var e=Object(E["a"])(),t=e.skin,n=e.skinClasses,a=C["c"].layout.enableScrollToTop;"dark"===t.value&&document.body.classList.add("dark-layout"),Object(D["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),m["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var c=Object(g["c"])(),o=c.width;return Object(s["watch"])(o,(function(e){m["a"].commit("app/UPDATE_WINDOW_WIDTH",e)})),{skinClasses:n,enableScrollToTop:a}},computed:{layout:function(){return"full"===this.$route.meta.layout?"layout-full":"layout-".concat(this.contentLayoutType)},contentLayoutType:function(){return this.$store.state.appConfig.layout.type}},beforeCreate:function(){for(var e=["primary","secondary","success","info","warning","danger","light","dark"],t=0,n=e.length;t<n;t++)C["b"][e[t]]=Object(g["a"])("--".concat(e[t]),document.documentElement).value.trim();for(var a=["xs","sm","md","lg","xl"],c=0,o=a.length;c<o;c++)C["a"][a[c]]=Number(Object(g["a"])("--breakpoint-".concat(a[c]),document.documentElement).value.slice(0,-2));var r=C["c"].layout.isRTL;document.documentElement.setAttribute("dir",r?"rtl":"ltr")},created:function(){this.getZelIdLoginPhrase()},methods:{getZelIdLoginPhrase:function(){var e=this;S["a"].loginPhrase().then((function(t){console.log(t),"error"===t.data.status?"MongoNetworkError"===t.data.data.name?e.errorMessage="Failed to connect to MongoDB.":JSON.stringify(t.data.data).includes("CONN")?e.getEmergencyLoginPhrase():e.errorMessage=t.data.data.message:e.loginPhrase=t.data.data})).catch((function(t){console.log(t),e.errorMessage="Error connecting to Flux Backend"}))},getEmergencyLoginPhrase:function(){var e=this;S["a"].emergencyLoginPhrase().then((function(t){console.log(t),"error"===t.data.status?e.errorMessage=t.data.data.message:e.loginPhrase=t.data.data})).catch((function(t){console.log(t),e.errorMessage="Error connecting to Flux Backend"}))},activeLoginPhrases:function(){var e=localStorage.getItem("zelidauth"),t=A.parse(e);console.log(t),S["a"].activeLoginPhrases(e).then((function(e){console.log(e),e.data.status})).catch((function(e){console.log(e),console.log(e.code)}))}}},_=w,I=Object(y["a"])(_,p,h,!1,null,null,null),B=I.exports,F=n("5530"),R=n("0a35"),U={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-primary"}},render:function(e,t){var n=t.props,a=t.data,c=e(R[n.icon],Object(F["a"])({props:{size:n.size}},a));if(!n.badge)return c;var o=e("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return e("span",{staticClass:"feather-icon position-relative"},[c,o])}},M=U,G=(n("58f9"),Object(y["a"])(M,a,c,!1,null,null,null)),z=G.exports,V=n("849c");n("d06d");o["default"].component(z.name,z),o["default"].component("VIcon",V["a"]);n("aa9e");var W=n("2b88"),H=n.n(W);o["default"].use(H.a);var Z=n("6c42");n("b062");o["default"].use(Z["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),o["default"].use(r["a"],{breakpoints:["xs","sm","md","lg","xl","xxl"]}),o["default"].use(u["a"]),o["default"].use(i["a"]),o["default"].use(l["a"]),o["default"].use(s["default"]),n("6bbe"),n("29d9"),o["default"].config.productionTip=!1,new o["default"]({router:d["a"],store:m["a"],render:function(e){return e(B)}}).$mount("#app")},"477e":function(e,t,n){},"58f9":function(e,t,n){"use strict";n("fdc2")},"6bbe":function(e,t,n){},"77f9":function(e,t,n){"use strict";var a=n("2b0e"),c=n("2f62"),o=n("94c8"),r={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1},getters:{currentBreakPoint:function(e){var t=e.windowWidth;return t>=o["a"].xl?"xl":t>=o["a"].lg?"lg":t>=o["a"].md?"md":t>=o["a"].sm?"sm":"xs"}},mutations:{UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},TOGGLE_OVERLAY:function(e,t){e.shallShowOverlay=void 0!==t?t:!e.shallShowOverlay}},actions:{}},u=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:o["c"].layout.isRTL,skin:localStorage.getItem("vuexy-skin")||o["c"].layout.skin,routerTransition:o["c"].layout.routerTransition,type:o["c"].layout.type,contentWidth:o["c"].layout.contentWidth,menu:{hidden:o["c"].layout.menu.hidden,collapsed:"true"===localStorage.getItem("menu-itemsCollapsed")||o["c"].layout.menu.itemsCollapsed},navbar:{type:o["c"].layout.navbar.type,backgroundColor:o["c"].layout.navbar.backgroundColor},footer:{type:o["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(e){e.layout.isRTL=!e.layout.isRTL,document.documentElement.setAttribute("dir",e.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(e,t){e.layout.skin=t,localStorage.setItem("vuexy-skin",t),"dark"===t?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(e,t){e.layout.routerTransition=t},UPDATE_LAYOUT_TYPE:function(e,t){e.layout.type=t},UPDATE_CONTENT_WIDTH:function(e,t){e.layout.contentWidth=t},UPDATE_NAV_MENU_HIDDEN:function(e,t){e.layout.menu.hidden=t},UPDATE_NAVBAR_CONFIG:function(e,t){Object.assign(e.layout.navbar,t)},UPDATE_FOOTER_CONFIG:function(e,t){Object.assign(e.layout.footer,t)},UPDATE_MENU_COLLAPSED:function(e,t){e.layout.menu.collapsed=t,localStorage.setItem("menu-itemsCollapsed",t)}},actions:{}}),i={namespaced:!0,state:{isVerticalMenuCollapsed:"true"===localStorage.getItem("menu-isCollapsed")||o["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(e,t){e.isVerticalMenuCollapsed=t,localStorage.setItem("menu-isCollapsed",t)}},actions:{}},l=n("b641"),s=n.n(l),d={namespaced:!0,state:{userconfig:{zelid:"",externalip:""},config:{apiPort:s.a.server.apiport,fluxTeamZelId:s.a.fluxTeamZelId},privilege:"none",fluxVersion:"",xdaoOpen:0},getters:{xdaoOpen:function(e){return e.xdaoOpen}},mutations:{setPrivilege:function(e,t){e.privilege=t},setFluxVersion:function(e,t){e.fluxVersion=t},setUserZelid:function(e,t){e.userconfig.zelid=t},setUserIp:function(e,t){e.userconfig.externalip=t},setXDAOOpen:function(e,t){e.xdaoOpen=t}},actions:{}};a["default"].use(c["a"]);t["a"]=new c["a"].Store({modules:{app:r,appConfig:u,verticalMenu:i,flux:d},strict:Object({NODE_ENV:"production",BASE_URL:"/"}).DEV})},"939c":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ed09"),c=n("77f9");function o(){var e=Object(a["computed"])({get:function(){return c["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){c["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),t=Object(a["computed"])({get:function(){return c["a"].state.flux.xdaoOpen},set:function(e){c["a"].commit("flux/setXDAOOpen",e)}}),n=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.isRTL},set:function(e){c["a"].commit("appConfig/TOGGLE_RTL",e)}}),o=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.skin},set:function(e){c["a"].commit("appConfig/UPDATE_SKIN",e)}}),r=Object(a["computed"])((function(){return"bordered"===o.value?"bordered-layout":"semi-dark"===o.value?"semi-dark-layout":null})),u=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.routerTransition},set:function(e){c["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",e)}}),i=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.type},set:function(e){c["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",e)}});Object(a["watch"])(i,(function(e){"horizontal"===e&&"semi-dark"===o.value&&(o.value="light")}));var l=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.contentWidth},set:function(e){c["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",e)}}),s=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.menu.hidden},set:function(e){c["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",e)}}),d=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.menu.collapsed},set:function(e){c["a"].commit("appConfig/UPDATE_MENU_COLLAPSED",e)}}),m=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.navbar.backgroundColor},set:function(e){c["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:e})}}),p=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.navbar.type},set:function(e){c["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:e})}}),h=Object(a["computed"])({get:function(){return c["a"].state.appConfig.layout.footer.type},set:function(e){c["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:e})}});return{isVerticalMenuCollapsed:e,isRTL:n,skin:o,skinClasses:r,routerTransition:u,navbarBackgroundColor:m,navbarType:p,footerType:h,layoutType:i,contentWidth:l,isNavMenuHidden:s,isNavMenuCollapsed:d,xdaoOpenProposals:t}}},"94c8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o}));var a={},c={},o={app:{appName:"FluxOS",appLogoImageDark:n("c287"),appLogoImage:n("faeb")},layout:{isRTL:!1,skin:"dark",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!1,itemsCollapsed:!0},navbar:{type:"sticky",backgroundColor:""},footer:{type:"static"},customizer:!0,enableScrollToTop:!0}}},aa9e:function(e,t,n){"use strict";var a=n("2b0e"),c=n("bc3a"),o=n.n(c),r=o.a.create({});a["default"].prototype.$http=r,t["a"]=r},ae40:function(e,t,n){"use strict";var a=n("1da1"),c=n("2909"),o=(n("96cf"),n("99af"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b0e")),r=n("8c4f"),u=n("77f9"),i=n("f33c"),l=[{path:"/dashboard/overview",name:"dashboard-overview",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-7db479ac"),n.e("chunk-ceeb5c8c")]).then(n.bind(null,"e2b7"))},meta:{pageTitle:"Overview",breadcrumb:[{text:"Dashboard"},{text:"Overview",active:!0}]}},{path:"/dashboard/resources",name:"dashboard-resources",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-7db479ac"),n.e("chunk-45eb91e0")]).then(n.bind(null,"b9de"))},meta:{pageTitle:"Resources",breadcrumb:[{text:"Dashboard"},{text:"Resources",active:!0}]}},{path:"/dashboard/map",name:"dashboard-map",component:function(){return Promise.all([n.e("chunk-7db479ac"),n.e("chunk-cb06fb70")]).then(n.bind(null,"b595"))},meta:{pageTitle:"Map",breadcrumb:[{text:"Dashboard"},{text:"Map",active:!0}]}},{path:"/dashboard/economics",name:"dashboard-economics",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-7db479ac"),n.e("chunk-ff4818f0")]).then(n.bind(null,"f03d"))},meta:{pageTitle:"Economics",breadcrumb:[{text:"Dashboard"},{text:"Economics",active:!0}]}},{path:"/dashboard/list",name:"dashboard-list",component:function(){return Promise.all([n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-18c81973"),n.e("chunk-2a15b404"),n.e("chunk-49419389")]).then(n.bind(null,"03da"))},meta:{pageTitle:"List",breadcrumb:[{text:"Dashboard"},{text:"List",active:!0}]}}],s=[{path:"/daemon/control/getinfo",name:"daemon-control-getinfo",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-7a1a851d")]).then(n.bind(null,"d586"))},meta:{pageTitle:"Get Info",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Get Info",active:!0}]}},{path:"/daemon/control/help",name:"daemon-control-help",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-f8d17ac2")]).then(n.bind(null,"7665"))},meta:{pageTitle:"Help",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Help",active:!0}]}},{path:"/daemon/control/rescanblockchain",name:"daemon-control-rescanblockchain",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-593d700c"),n.e("chunk-70d6337e")]).then(n.bind(null,"7bb2"))},meta:{pageTitle:"Rescan Blockchain",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Rescan Blockchain",active:!0}],privilege:["admin"]}},{path:"/daemon/control/reindexblockchain",name:"daemon-control-reindexblockchain",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-650d0bfc")]).then(n.bind(null,"9681"))},meta:{pageTitle:"Reindex Blockchain",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Reindex Blockchain",active:!0}],privilege:["admin"]}},{path:"/daemon/control/start",name:"daemon-control-start",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-276a226b")]).then(n.bind(null,"1734"))},meta:{pageTitle:"Start",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Start",active:!0}],privilege:["admin","fluxteam"]}},{path:"/daemon/control/stop",name:"daemon-control-stop",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-207cf88f")]).then(n.bind(null,"34bd"))},meta:{pageTitle:"Stop",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Stop",active:!0}],privilege:["admin"]}},{path:"/daemon/control/restart",name:"daemon-control-restart",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-08f30e46")]).then(n.bind(null,"8d11"))},meta:{pageTitle:"Restart",breadcrumb:[{text:"Daemon"},{text:"Control"},{text:"Restart",active:!0}],privilege:["admin","fluxteam"]}}],d=[{path:"/daemon/fluxnode/getnodestatus",name:"daemon-fluxnode-getstatus",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-d4fcbd38")]).then(n.bind(null,"1b05"))},meta:{pageTitle:"Node Status",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"Get Node Status",active:!0}]}},{path:"/daemon/fluxnode/listfluxnodes",name:"daemon-fluxnode-listfluxnodes",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-18c81973"),n.e("chunk-3bddc606")]).then(n.bind(null,"3710"))},meta:{pageTitle:"List FluxNodes",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"List FluxNodes",active:!0}]}},{path:"/daemon/fluxnode/viewfluxnodelist",name:"daemon-fluxnode-viewfluxnodelist",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-18c81973"),n.e("chunk-f4e44914")]).then(n.bind(null,"2bb7"))},meta:{pageTitle:"View Deterministic FluxNodes",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"View FluxNode List",active:!0}]}},{path:"/daemon/fluxnode/getfluxnodecount",name:"daemon-fluxnode-getfluxnodecount",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-292e506e")]).then(n.bind(null,"139a"))},meta:{pageTitle:"Get FluxNode Count",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"Get FluxNode Count",active:!0}]}},{path:"/daemon/fluxnode/getstartlist",name:"daemon-fluxnode-getstartlist",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-7fc4780e"),n.e("chunk-18c81973"),n.e("chunk-2a15b404"),n.e("chunk-b2383f76")]).then(n.bind(null,"4922"))},meta:{pageTitle:"Get Start List",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"Get Start List",active:!0}]}},{path:"/daemon/fluxnode/getdoslist",name:"daemon-fluxnode-getdoslist",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-7fc4780e"),n.e("chunk-18c81973"),n.e("chunk-2a15b404"),n.e("chunk-4d0d7446")]).then(n.bind(null,"34e3"))},meta:{pageTitle:"Get DOS List",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"Get DOS List",active:!0}]}},{path:"/daemon/fluxnode/currentwinner",name:"daemon-fluxnode-currentwinner",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-56bfc1e1")]).then(n.bind(null,"fbc0"))},meta:{pageTitle:"Current Winner",breadcrumb:[{text:"Daemon"},{text:"FluxNode"},{text:"Current Winner",active:!0}]}}],m=[{path:"/daemon/benchmarks/getbenchmarks",name:"daemon-benchmarks-getbenchmarks",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-6fff6798")]).then(n.bind(null,"0875"))},meta:{pageTitle:"Get Benchmarks",breadcrumb:[{text:"Daemon"},{text:"Benchmarks"},{text:"Get Benchmarks",active:!0}]}},{path:"/daemon/benchmarks/getstatus",name:"daemon-benchmarks-getstatus",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-64f322df")]).then(n.bind(null,"99c4"))},meta:{pageTitle:"Get Bench Status",breadcrumb:[{text:"Daemon"},{text:"Benchmarks"},{text:"Get Status",active:!0}]}},{path:"/daemon/benchmarks/startbenchmark",name:"daemon-benchmarks-start",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-52d08741")]).then(n.bind(null,"cef5"))},meta:{pageTitle:"Start Benchmark",breadcrumb:[{text:"Daemon"},{text:"Benchmarks"},{text:"Start Benchmark",active:!0}],privilege:["admin","fluxteam"]}},{path:"/daemon/benchmarks/stopbenchmark",name:"daemon-benchmarks-stop",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-3775d85b")]).then(n.bind(null,"b9ff"))},meta:{pageTitle:"Stop Benchmark",breadcrumb:[{text:"Daemon"},{text:"Benchmarks"},{text:"Stop Benchmark",active:!0}],privilege:["admin","fluxteam"]}}],p=[{path:"/daemon/blockchain/getblockchaininfo",name:"daemon-blockchain-getchaininfo",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-5b67c44c")]).then(n.bind(null,"84f5"))},meta:{pageTitle:"Get Blockchain Info",breadcrumb:[{text:"Daemon"},{text:"Get Blockchain Info",active:!0}]}}],h=[{path:"/daemon/mining/getmininginfo",name:"daemon-mining-getmininginfo",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-f8b79a3e")]).then(n.bind(null,"a4a2"))},meta:{pageTitle:"Get Mining Info",breadcrumb:[{text:"Daemon"},{text:"Get Mining Info",active:!0}]}}],f=[{path:"/daemon/network/getnetworkinfo",name:"daemon-network-getnetworkinfo",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-e696eef4")]).then(n.bind(null,"a36c"))},meta:{pageTitle:"Get Network Info",breadcrumb:[{text:"Daemon"},{text:"Get Network Info",active:!0}]}}],b=[{path:"/daemon/transaction/getrawtransaction",name:"daemon-transaction-getrawtransaction",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-0fdab1f5")]).then(n.bind(null,"7656"))},meta:{pageTitle:"Get Raw Transaction",breadcrumb:[{text:"Daemon"},{text:"Get Raw Transaction",active:!0}]}}],g=[{path:"/daemon/validateaddress",name:"daemon-util-validateaddress",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-0c9d4aae")]).then(n.bind(null,"8563"))},meta:{pageTitle:"Validate Address",breadcrumb:[{text:"Daemon"},{text:"Validate Address",active:!0}]}}],k=[{path:"/daemon/getwalletinfo",name:"daemon-wallet-getwalletinfo",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-cb4887ac")]).then(n.bind(null,"e5e3"))},meta:{pageTitle:"Get Wallet Info",breadcrumb:[{text:"Daemon"},{text:"Get Wallet Info",active:!0}],privilege:["user","admin","fluxteam"]}}],x=[].concat(Object(c["a"])(s),Object(c["a"])(d),Object(c["a"])(m),Object(c["a"])(p),Object(c["a"])(h),Object(c["a"])(f),Object(c["a"])(b),Object(c["a"])(g),Object(c["a"])(k),[{path:"/daemon/debug",name:"daemon-debug",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-5a60f0de"),n.e("chunk-4ba4f37c")]).then(n.bind(null,"c26b"))},meta:{pageTitle:"Debug",breadcrumb:[{text:"Daemon"},{text:"Debug",active:!0}],privilege:["admin","fluxteam"]}}]),v=[{path:"/benchmark/control/help",name:"benchmark-control-help",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-84a82956")]).then(n.bind(null,"e986"))},meta:{pageTitle:"Help",breadcrumb:[{text:"Benchmark"},{text:"Control"},{text:"Help",active:!0}]}},{path:"/benchmark/control/start",name:"benchmark-control-start",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-7bf0b7cc")]).then(n.bind(null,"6c13"))},meta:{pageTitle:"Start",breadcrumb:[{text:"Benchmark"},{text:"Control"},{text:"Start",active:!0}],privilege:["admin","fluxteam"]}},{path:"/benchmark/control/stop",name:"benchmark-control-stop",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-3f1b13c2")]).then(n.bind(null,"65eb"))},meta:{pageTitle:"Stop",breadcrumb:[{text:"Benchmark"},{text:"Control"},{text:"Stop",active:!0}],privilege:["admin"]}},{path:"/benchmark/control/restart",name:"benchmark-control-restart",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-377903a4")]).then(n.bind(null,"acef"))},meta:{pageTitle:"Restart",breadcrumb:[{text:"Benchmark"},{text:"Control"},{text:"Restart",active:!0}],privilege:["admin","fluxteam"]}}],T=[{path:"/benchmark/fluxnode/getbenchmarks",name:"benchmark-fluxnode-getbenchmarks",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2dcd0dfb")]).then(n.bind(null,"3838"))},meta:{pageTitle:"Get Benchmarks",breadcrumb:[{text:"Benchmark"},{text:"FluxNode"},{text:"Get Benchmarks",active:!0}]}},{path:"/benchmark/fluxnode/getinfo",name:"benchmark-fluxnode-getinfo",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-72cac487")]).then(n.bind(null,"aa31"))},meta:{pageTitle:"Get Info",breadcrumb:[{text:"Benchmark"},{text:"FluxNode"},{text:"Get Info",active:!0}]}}],y=[{path:"/benchmark/benchmarks/getstatus",name:"benchmark-benchmarks-getstatus",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-623dc2e1")]).then(n.bind(null,"a3a3"))},meta:{pageTitle:"Get Status",breadcrumb:[{text:"Benchmark"},{text:"Benchmarks"},{text:"Get Status",active:!0}]}},{path:"/benchmark/benchmarks/restartbenchmarks",name:"benchmark-benchmarks-restartbenchmarks",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-586caf0d")]).then(n.bind(null,"2282"))},meta:{pageTitle:"Restart Node Benchmarks",breadcrumb:[{text:"Benchmark"},{text:"Benchmarks"},{text:"Restart Node Benchmarks",active:!0}],privilege:["admin","fluxteam"]}},{path:"/benchmark/benchmarks/signtransaction",name:"benchmark-benchmarks-signtransaction",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-2928c9ba"),n.e("chunk-41b45156")]).then(n.bind(null,"8297"))},meta:{pageTitle:"Sign FluxNode Transaction",breadcrumb:[{text:"Benchmark"},{text:"Benchmarks"},{text:"Sign Transaction",active:!0}],privilege:["admin"]}}],P=[].concat(Object(c["a"])(v),Object(c["a"])(T),Object(c["a"])(y),[{path:"/benchmark/debug",name:"benchmark-debug",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-5a60f0de"),n.e("chunk-66546a30")]).then(n.bind(null,"d5072"))},meta:{pageTitle:"Debug",breadcrumb:[{text:"Benchmark"},{text:"Debug",active:!0}],privilege:["admin","fluxteam"]}}]),O=[{path:"/flux/nodestatus",name:"flux-nodestatus",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-1d267246")]).then(n.bind(null,"a00b"))},meta:{pageTitle:"Node Status",breadcrumb:[{text:"Flux"},{text:"Node Status",active:!0}]}},{path:"/flux/fluxnetwork",name:"flux-fluxnetwork",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-2e4305fd")]).then(n.bind(null,"89b7"))},meta:{pageTitle:"Flux Network",breadcrumb:[{text:"Flux"},{text:"Flux Network",active:!0}]}},{path:"/flux/debug",name:"flux-debug",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-5a60f0de"),n.e("chunk-1c76f7fe")]).then(n.bind(null,"761b"))},meta:{pageTitle:"Debug",breadcrumb:[{text:"Flux"},{text:"Debug",active:!0}],privilege:["admin","fluxteam"]}}],C=[{path:"/apps/localapps",name:"apps-localapps",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-5fed373c")]).then(n.bind(null,"238b"))},meta:{pageTitle:"Local Apps",breadcrumb:[{text:"Apps"},{text:"Local Apps",active:!0}]}},{path:"/apps/globalapps",name:"apps-globalapps",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-57cc3794")]).then(n.bind(null,"075b"))},meta:{pageTitle:"Global Apps",breadcrumb:[{text:"Apps"},{text:"Global Apps",active:!0}]}},{path:"/apps/registerapp",name:"apps-registerapp",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-7fc4780e"),n.e("chunk-1ed85d30")]).then(n.bind(null,"f3ab"))},meta:{pageTitle:"Register Flux App",breadcrumb:[{text:"Apps"},{text:"Register Flux App",active:!0}]}},{path:"/apps/fluxsharestorage",name:"apps-fluxsharestorage",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-7fc4780e"),n.e("chunk-18c81973"),n.e("chunk-11167d93")]).then(n.bind(null,"5e18"))},meta:{pageTitle:"My FluxShare Storage",breadcrumb:[{text:"Apps"},{text:"My FluxShare Storage",active:!0}],privilege:["admin"]}}],D=[{path:"/fluxadmin/loggedsessions",name:"fluxadmin-loggedsessions",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-7c77c1e2")]).then(n.bind(null,"f5cc"))},meta:{pageTitle:"Logged Sessions",breadcrumb:[{text:"Flux Admin"},{text:"Logged Sessions",active:!0}],privilege:["admin","fluxteam"]}},{path:"/fluxadmin/manageflux",name:"fluxadmin-manageflux",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-255299ca"),n.e("chunk-593d700c"),n.e("chunk-2b6840ea")]).then(n.bind(null,"3eb4"))},meta:{pageTitle:"Manage Flux",breadcrumb:[{text:"Flux Admin"},{text:"Manage Flux",active:!0}],privilege:["admin","fluxteam"]}},{path:"/fluxadmin/managedaemon",name:"fluxadmin-managedaemon",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-593d700c"),n.e("chunk-44a48fcb")]).then(n.bind(null,"e189"))},meta:{pageTitle:"Manage Daemon",breadcrumb:[{text:"Flux Admin"},{text:"Manage Daemon",active:!0}],privilege:["admin","fluxteam"]}},{path:"/fluxadmin/managebenchmark",name:"fluxadmin-managebenchmark",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-f742bcf2")]).then(n.bind(null,"8e4c"))},meta:{pageTitle:"Manage Benchmark",breadcrumb:[{text:"Flux Admin"},{text:"Manage Benchmark",active:!0}],privilege:["admin","fluxteam"]}},{path:"/fluxadmin/manageusers",name:"fluxadmin-manageusers",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-2928c9ba"),n.e("chunk-7fc4780e"),n.e("chunk-448594c3")]).then(n.bind(null,"45c0"))},meta:{pageTitle:"Manage Users",breadcrumb:[{text:"Flux Admin"},{text:"Manage Users",active:!0}],privilege:["admin","fluxteam"]}}],E=(n("caad"),n("4de4"),[{path:"/xdao-app",name:"xdao-app",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-7fc4780e"),n.e("chunk-7db479ac"),n.e("chunk-7cc860f7")]).then(n.bind(null,"2a14"))},meta:{contentRenderer:"sidebar-left",contentClass:"xdao-application"}},{path:"/xdao-app/:filter",name:"xdao-app-filter",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-7fc4780e"),n.e("chunk-7db479ac"),n.e("chunk-7cc860f7")]).then(n.bind(null,"2a14"))},meta:{contentRenderer:"sidebar-left",contentClass:"xdao-application",navActiveLink:"xdao-app"},beforeEnter:function(e,t,n){["open","passed","unpaid","rejected"].includes(e.params.filter)?n():n({name:"error-404"})}},{path:"/xdao-app/tag/:tag",name:"xdao-app-tag",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-69bcc4fe"),n.e("chunk-7fc4780e"),n.e("chunk-7db479ac"),n.e("chunk-7cc860f7")]).then(n.bind(null,"2a14"))},meta:{contentRenderer:"sidebar-left",contentClass:"xdao-application",navActiveLink:"xdao-app"},beforeEnter:function(e,t,n){["team","low","medium","high","update"].includes(e.params.tag)?n():n({name:"error-404"})}}]),S=n("4328");o["default"].use(r["a"]);var A=new r["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-7fc4780e"),n.e("chunk-049e28b4")]).then(n.bind(null,"aa3c"))},meta:{pageTitle:"Home",breadcrumb:[{text:"Home",active:!0}]}},{path:"/explorer",name:"explorer",component:function(){return Promise.all([n.e("chunk-1fb3aa5d"),n.e("chunk-2928c9ba"),n.e("chunk-18c81973"),n.e("chunk-50ab797a")]).then(n.bind(null,"9be1"))},meta:{pageTitle:"Explorer",breadcrumb:[{text:"Explorer",active:!0}]}}].concat(Object(c["a"])(l),Object(c["a"])(x),Object(c["a"])(P),Object(c["a"])(O),Object(c["a"])(C),Object(c["a"])(D),Object(c["a"])(E),[{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-2f037878").then(n.bind(null,"8cac"))},meta:{layout:"full"}},{path:"*",redirect:"error-404"}])});A.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){var c,o,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=localStorage.getItem("zelidauth"),o=S.parse(c),u["a"].commit("flux/setPrivilege","none"),!(o&&o.zelid&&o.signature)){e.next=16;break}return e.prev=4,e.next=7,i["a"].checkUserLogged(o.zelid,o.signature);case 7:r=e.sent,l=r.data.data.message,u["a"].commit("flux/setPrivilege",l),"none"===l&&localStorage.removeItem("zelidauth"),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](4),console.log(e.t0);case 16:t.meta&&t.meta.privilege?t.meta.privilege.some((function(e){return e===u["a"].state.flux.privilege}))?a():a("/"):a();case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n,a){return e.apply(this,arguments)}}()),A.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")}));t["a"]=A},b062:function(e,t,n){},b4c0:function(e,t,n){"use strict";n.d(t,"b",(function(){return f}));n("ac1f"),n("466d"),n("1276"),n("a15b9");var a=n("bc3a"),c=n.n(a),o=n("b641"),r=n.n(o),u=n("8ded"),i=r.a.server.apiport,l=window.location,s=l.protocol,d=l.hostname,m="";m+=s,m+="//";var p=/[A-Za-z]/g;if(d.match(p)){var h=d.split(".");h[0]="api",m+=h.join(".")}else m+=d,m+=":",m+=i;var f=c.a.CancelToken.source();t["a"]=function(){return c.a.create({baseURL:u.get("backendURL")||m})}},b641:function(e,t){e.exports={server:{homeport:16126,apiport:16127,apiporthttps:16128},database:{url:"127.0.0.1",port:27017,local:{database:"zelfluxlocal",collections:{loggedUsers:"loggedusers",activeLoginPhrases:"activeloginphrases",activeSignatures:"activesignatures"}},daemon:{database:"zelcashdata",collections:{scannedHeight:"scannedheight",utxoIndex:"utxoindex",addressTransactionIndex:"addresstransactionindex",fluxTransactions:"zelnodetransactions",appsHashes:"zelappshashes",coinbaseFusionIndex:"coinbasefusionindex"}},appslocal:{database:"localzelapps",collections:{appsInformation:"zelappsinformation"}},appsglobal:{database:"globalzelapps",collections:{appsMessages:"zelappsmessages",appsInformation:"zelappsinformation",appsTemporaryMessages:"zelappstemporarymessages",appsLocations:"zelappslocation"}},fluxshare:{database:"zelshare",collections:{shared:"shared"}}},benchmark:{port:16225,rpcport:16224,porttestnet:26225,rpcporttestnet:26224},daemon:{chainValidHeight:77e4,port:16125,rpcport:16124,porttestnet:26125,rpcporttestnet:26124},fluxTeamZelId:"1hjy4bCYBJr4mny4zCE85J94RXa8W6q37",fluxapps:{price:[{height:0,cpu:3,ram:1,hdd:.5,minPrice:1},{height:983e3,cpu:.3,ram:.1,hdd:.05,minPrice:.1},{height:1004e3,cpu:.06,ram:.02,hdd:.01,minPrice:.01}],appSpecsEnforcementHeights:{1:0,2:0,3:983e3,4:1004e3},address:"t1LUs6quf7TB2zVZmexqPQdnqmrFMGZGjV6",epochstart:694e3,publicepochstart:705e3,portMin:31e3,portMax:39999,maxImageSize:5e8,minimumInstances:3,maximumInstances:100,maximumAdditionalInstances:5,minOutgoing:5,minIncoming:2,installation:{probability:100,delay:120},removal:{probability:25,delay:300},redeploy:{probability:2,delay:30,composedDelay:5},blocksLasting:22e3,expireFluxAppsPeriod:100,updateFluxAppsPeriod:9,removeFluxAppsPeriod:11},lockedSystemResources:{cpu:10,ram:2e3,hdd:30},fluxSpecifics:{cpu:{basic:20,super:40,bamf:80},ram:{basic:3e3,super:7e3,bamf:3e4},hdd:{basic:50,super:150,bamf:600},collateral:{basic:1e4,super:25e3,bamf:1e5}}}},c287:function(e,t,n){e.exports=n.p+"img/logo.svg"},f33c:function(e,t,n){"use strict";var a=n("b4c0"),c=n("4328");t["a"]={loginPhrase:function(){return Object(a["a"])().get("/id/loginphrase")},emergencyLoginPhrase:function(){return Object(a["a"])().get("/id/emergencyphrase")},verifyLogin:function(e){return Object(a["a"])().post("/id/verifylogin",c.stringify(e))},loggedSessions:function(e){return Object(a["a"])().get("/id/loggedsessions?timestamp=".concat((new Date).getTime()),{headers:{zelidauth:e}})},loggedUsers:function(e){return Object(a["a"])().get("/id/loggedusers?timestamp=".concat((new Date).getTime()),{headers:{zelidauth:e}})},activeLoginPhrases:function(e){return Object(a["a"])().get("/id/activeloginphrases",{headers:{zelidauth:e}})},logoutCurrentSession:function(e){return Object(a["a"])().get("/id/logoutcurrentsession",{headers:{zelidauth:e}})},logoutSpecificSession:function(e,t){var n={loginPhrase:t},o={headers:{zelidauth:e}};return Object(a["a"])().post("/id/logoutspecificsession",c.stringify(n),o)},logoutAllSessions:function(e){return Object(a["a"])().get("/id/logoutallsessions",{headers:{zelidauth:e}})},logoutAllUsers:function(e){return Object(a["a"])().get("/id/logoutallusers",{headers:{zelidauth:e}})},checkUserLogged:function(e,t){var n={zelid:e,signature:t};return Object(a["a"])().post("/id/checkprivilege",c.stringify(n))}}},faeb:function(e,t,n){e.exports=n.p+"img/logo_light.svg"},fdc2:function(e,t,n){}});