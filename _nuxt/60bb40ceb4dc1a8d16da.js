(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(t,e,n){"use strict";var r=n(42);n.n(r).a},132:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0\n}\n.__nuxt-error-page .error{max-width:450px\n}\n.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px\n}\n.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px\n}\n.__nuxt-error-page a{color:#7f828b!important;text-decoration:none\n}\n.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed\n}",""])},139:function(t,e,n){"use strict";var r=n(43);n.n(r).a},140:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.nuxt-progress{background-color:#efc14e;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .2s,opacity .4s;width:0;z-index:999999\n}",""])},143:function(t,e,n){var r=n(144);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("4c23333d",r,!1,{sourceMap:!1})},144:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"body{background:#181818!important;color:silver!important;margin:0}",""])},155:function(t,e,n){"use strict";var r=n(45);n.n(r).a},156:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.navbar[data-v-b979e65a]{box-shadow:0 5px 5px -5px #000;height:50px\n}\n.my-nav-item[data-v-b979e65a]{border:none;border-radius:0;height:50px;outline:none\n}\n.my-nav-item[data-v-b979e65a]:focus{box-shadow:none;outline:none\n}\ninput[data-v-b979e65a]{background:hsla(0,0%,100%,.08);color:silver!important;padding-left:60px;width:300px\n}\ninput[data-v-b979e65a]:focus,input[data-v-b979e65a]:hover{background:hsla(0,0%,100%,.18)\n}\ninput~span[data-v-b979e65a]{color:#7f7f7f;margin:10px 15px;position:absolute\n}\n.login-btn[data-v-b979e65a]{background:transparent;color:silver\n}\n.login-btn[data-v-b979e65a]:hover{background:hsla(0,0%,100%,.18)\n}\n.login-btn[data-v-b979e65a] svg{margin-right:5px\n}",""])},158:function(t,e,n){"use strict";var r=n(46);n.n(r).a},159:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\ndiv[data-v-061e31e2]{background-color:#444;border-radius:5px;bottom:20px;cursor:pointer;height:55px;opacity:0;position:fixed;right:-55px;text-align:center;transition:all .3s ease-in;width:55px\n}\ndiv[data-v-061e31e2]:hover{background-color:#007bff\n}\ndiv[data-v-061e31e2]:hover svg{color:#fff\n}\ndiv[data-v-061e31e2] svg{color:#181818\n}\n.show[data-v-061e31e2]{opacity:1;right:20px\n}",""])},160:function(t,e,n){"use strict";var r=n(47);n.n(r).a},161:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"\n.my-page-wrapper[data-v-91902d56]{margin:0 auto;max-width:1200px;padding:20px\n}",""])},188:function(t,e,n){"use strict";n.r(e);n(66),n(73),n(76);var r=n(25),o=n.n(r),a=(n(49),n(110),n(8)),i=n.n(a),s=(n(77),n(31),n(58),n(60),n(32),n(61),n(78),n(116),n(128),n(0)),u={},c=n(26),p=n.n(c),l=n(95),f=n.n(l),h=n(64),d=function(){return n.e(1).then(n.bind(null,192)).then(function(t){return t.default||t})};s.a.use(h.a),window.history.scrollRestoration="manual";var v=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var m=n(96),x=n.n(m).a,g={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,p={};y.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var l={};b.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t].bind(a))});var f=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(a,t)};var h=[t("router-view",r)];return void 0!==o.keepAlive&&(h=[t("keep-alive",h)]),t("transition",{props:p,on:l},h)}},y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],b=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],w={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])};_._withStripped=!0;var C={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},$=(n(131),n(7)),k=Object($.a)(C,_,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);k.options.__file="nuxt-error.vue";var E=k.exports,R=(n(133),n(134),n(136),n(138),n(88),function(){return{}});function T(t,e){var n=t.options.data||R;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),p()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function S(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function A(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function j(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function q(t){return Promise.all(j(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=S(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function O(t){return P.apply(this,arguments)}function P(){return(P=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:return t.abrupt("return",p()({},e,{meta:A(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function N(t,e){return M.apply(this,arguments)}function M(){return(M=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/vue-github/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=B(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,O(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,O(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function L(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function H(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?U:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(p=s(l[f]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===f?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=I.exec(t));){var u=n[0],c=n[1],p=n.index;if(i+=t.slice(a,p),a=p+u.length,c)i+=c[1];else{var l=t[a],f=n[2],h=n[3],d=n[4],v=n[5],m=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=f&&null!=l&&l!==f,y="+"===m||"*"===m,b="?"===m||"*"===m,w=n[2]||s,_=d||v;r.push({name:h||o++,prefix:f||"",delimiter:w,optional:b,repeat:y,partial:g,asterisk:!!x,pattern:_?J(_):x?".*":"[^"+F(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function z(t,e){var n={},r=p()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var I=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function U(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function F(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function J(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var K={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||H(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:g,NuxtError:E}},Q=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};Q._withStripped=!0;var V={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#FFFFFF",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},G=(n(139),Object($.a)(V,Q,[],!1,null,null,null));G.options.__file="nuxt-loading.vue";var X=G.exports,W=(n(141),n(143),function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header-view"),this._v(" "),e("div",{staticClass:"my-page-wrapper"},[e("nuxt")],1),this._v(" "),e("scroll-top")],1)});W._withStripped=!0;var Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/#/home"}},[t._v("\n      "+t._s(t.brand)+"\n    ")]),t._v(" "),n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("div",{staticClass:"input-group"},[n("input",{staticClass:"my-nav-item",attrs:{type:"text",placeholder:"搜索","aria-label":"搜索"}}),t._v(" "),n("span",[n("v-icon",{attrs:{name:"brands/github-alt",scale:"2"}})],1)])]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false"}},[n("v-icon",{attrs:{inverse:!0,name:"align-justify"}})],1),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"}),t._v(" "),n("button",{staticClass:"btn my-nav-item login-btn"},[n("v-icon",{attrs:{name:"user"}}),t._v(" 登陆\n      ")],1)])])])};Y._withStripped=!0;n(145),n(153),n(154);var Z={data:function(){return{brand:"Vue-Github"}}},tt=(n(155),Object($.a)(Z,Y,[],!1,null,"b979e65a",null));tt.options.__file="header.vue";var et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{show:t.isActive},on:{click:function(e){t.scrollTop(t.step)}}},[n("v-icon",{attrs:{name:"caret-up",scale:"3"}})],1)};nt._withStripped=!0;n(89),n(157);var rt={props:{step:{type:Number,default:100}},data:function(){return{isActive:!1}},created:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;t.isActive=e>500}},methods:{scrollTop:function(t){var e=this;if(document.body.scrollTop=document.documentElement.scrollTop-=t,(document.documentElement.scrollTop||document.body.scrollTop)>0)var n=setTimeout(function(){return e.scrollTop(t)},16);else clearTimeout(n)}}},ot=(n(158),Object($.a)(rt,nt,[],!1,null,"061e31e2",null));ot.options.__file="scrollTop.vue";var at={components:{HeaderView:et,ScrollTop:ot.exports}},it=(n(160),Object($.a)(at,W,[],!1,null,"91902d56",null));it.options.__file="default.vue";var st={_default:it.exports},ut={head:{title:"vue-github",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"The Github base on nuxt."}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&st["_"+t]||(t="default"),this.layoutName=t,this.layout=st["_"+t],this.layout},loadLayout:function(t){return t&&st["_"+t]||(t="default"),Promise.resolve(st["_"+t])}},components:{NuxtLoading:X}},ct=n(98);s.a.use(ct.a);for(var pt=n(97),lt=n.n(pt),ft={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var u=i.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},ht=["request","delete","get","head","options","post","put","patch"],dt=function(){var t=ht[vt];ft["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},vt=0;vt<ht.length;vt++)dt();var mt=function(t,e){var n={baseURL:"https://api.github.com",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=lt.a.create(n);!function(t){for(var e in ft)t[e]=ft[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)},xt=n(14);s.a.component("v-icon",xt.a);var gt=function(t){var e=t.$axios;t.redirect;e.setHeader("Accept","application/vnd.github.v3+json"),e.setHeader("Content-Type","application/json")};s.a.component(x.name,x),s.a.component(g.name,g),s.a.component(w.name,w),s.a.component(K.name,K),s.a.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var yt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function bt(){return(bt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new h.a({mode:"history",base:"/vue-github/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:v,routes:[{path:"/",component:d,name:"index"}],fallback:!1});case 2:return n=t.sent,r=p()({router:n,nuxt:{defaultTransition:yt,transitions:[yt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},yt,{name:t}):Object.assign({},yt,t):yt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ut),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=L(n.options.base),a=n.resolve(i).route),t.next=8,N(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},t.next=12;break;case 12:if("function"!=typeof mt){t.next=15;break}return t.next=15,mt(r.context,u);case 15:t.next=18;break;case 18:if("function"!=typeof gt){t.next=21;break}return t.next=21,gt(r.context,u);case 21:t.next=24;break;case 24:return t.abrupt("return",{app:r,router:n});case 25:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var wt,_t,Ct=[],$t=window.__NUXT__||{};Object.assign(s.a.config,{silent:!0,performance:!1});var kt=s.a.config.errorHandler;function Et(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Rt(t,e,n){return Tt.apply(this,arguments)}function Tt(){return(Tt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!wt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?z(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,q(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function St(t,e){return $t.serverRendered&&e&&T(t,e),t._Ctor=t,t}function At(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof u[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),u[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():D(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function jt(t,e,n){return qt.apply(this,arguments)}function qt(){return(qt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,p,l,f,h,d,v,m,x,g,y,b,w=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Ct=e===n?[]:A(n,o=[]).map(function(t,e){return H(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&w.$loading.finish&&w.$loading.finish(),n.path!==t.path&&w.$loading.pause&&w.$loading.pause(),a||(a=!0,r(t))},t.next=7,N(wt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=wt.nuxt.dateErr,this._hadError=!!wt.nuxt.err,(c=A(e,u=[])).length){t.next=25;break}return t.next=14,At.call(this,c,wt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof E.layout?E.layout(wt.context):E.layout);case 18:return p=t.sent,t.next=21,At.call(this,c,wt.context,p);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return wt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Et(c,e,n)),t.prev=27,t.next=30,At.call(this,c,wt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!wt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(l=c[0].options.layout)&&(l=l(wt.context)),t.next=38,this.loadLayout(l);case 38:return l=t.sent,t.next=41,At.call(this,c,wt.context,l);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!wt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,v=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(h=(x=m.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(wt.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,v=t.t0;case 70:t.prev=70,t.prev=71,h||null==m.return||m.return();case 73:if(t.prev=73,!d){t.next=76;break}throw v;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=H(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,w._pathChanged&&w._queryChanged||t._path!==Ct[n])t._dataRefresh=!0;else if(!w._pathChanged&&w._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return w._diffQuery[t]}))}if(!w._hadError&&w._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=D(t.options.asyncData,wt.context).then(function(e){T(t,e),w.$loading.increase&&w.$loading.increase(s)});o.push(c)}if(w.$loading.manual=!1===t.options.loading,i){var p=t.options.fetch(wt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){w.$loading.increase&&w.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return Ct=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,_=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(b=E.layout)&&(b=b(wt.context)),t.next=108,this.loadLayout(b);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Ot(t,e){j(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Pt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?E.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(wt.context)),this.setLayout(e)}function Nt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=A(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Pt.call(n,t)})}function Mt(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),_t.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Dt(){return(Dt=i()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return wt=e.app,_t=e.router,t.next=4,Promise.all((void 0,u=L((a=_t).options.base,a.options.mode),j(a.match(u),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=St(S(e),$t.data?$t.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new s.a(wt),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Mt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Et(n,_t.currentRoute)),Ct=_t.currentRoute.matched.map(function(t){return H(t.path)(_t.currentRoute.params)})),r.$loading={},$t.error&&r.error($t.error),_t.beforeEach(Rt.bind(r)),_t.beforeEach(jt.bind(r)),_t.afterEach(Ot),_t.afterEach(Nt.bind(r)),!$t.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:jt.call(r,_t.currentRoute,_t.currentRoute,function(t){if(!t)return Ot(_t.currentRoute,_t.currentRoute),Pt.call(r,_t.currentRoute),void o();_t.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}var a,u},t,this)}))).apply(this,arguments)}s.a.config.errorHandler=function(t,e,n){var r={statusCode:t.statusCode||t.name||"Whoops!",message:t.message||t.toString()},o=null;if("function"==typeof kt){for(var a=arguments.length,i=new Array(a>3?a-3:0),s=3;s<a;s++)i[s-3]=arguments[s];o=kt.apply(void 0,[t,e,n].concat(i))}return!0===o?o:(e&&e.$root&&e.$root.$nuxt&&e.$root.$nuxt.error&&"render function"!==n&&e.$root.$nuxt.error(r),"function"==typeof kt?o:void console.error(t.message||r.message))},function(t){return bt.apply(this,arguments)}().then(function(t){return Dt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},42:function(t,e,n){var r=n(132);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("45b1ddea",r,!1,{sourceMap:!1})},43:function(t,e,n){var r=n(140);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("fd547dac",r,!1,{sourceMap:!1})},45:function(t,e,n){var r=n(156);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("2053c198",r,!1,{sourceMap:!1})},46:function(t,e,n){var r=n(159);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("2ebccc22",r,!1,{sourceMap:!1})},47:function(t,e,n){var r=n(161);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(4).default)("334e2072",r,!1,{sourceMap:!1})},99:function(t,e,n){t.exports=n(188)}},[[99,4,2,3]]]);