(function(e){function t(t){for(var r,a,s=t[0],i=t[1],l=t[2],c=0,f=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({"layout-components-Navigation-vue":"layout-components-Navigation-vue","layout-layouts-auth-vue":"layout-layouts-auth-vue","layout-layouts-default-vue":"layout-layouts-default-vue"}[e]||e)+"."+{"layout-components-Navigation-vue":"421edeb0","layout-layouts-auth-vue":"c29d3949","layout-layouts-default-vue":"95df1253"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"layout-components-Navigation-vue":1,"layout-layouts-default-vue":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"layout-components-Navigation-vue":"layout-components-Navigation-vue","layout-layouts-auth-vue":"layout-layouts-auth-vue","layout-layouts-default-vue":"layout-layouts-default-vue"}[e]||e)+"."+{"layout-components-Navigation-vue":"0c7828d0","layout-layouts-auth-vue":"31d6cfe0","layout-layouts-default-vue":"34dd661b"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var l=u[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var f=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"09be":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v("Hello!")])])}]},"34c3":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",[e._v("Зарегистрировать аккаунт")]),n("el-form",{ref:"controls",staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"20px"},attrs:{model:e.controls,rules:e.rules,"label-width":"90px","label-position":"left "}},[n("el-form-item",{attrs:{label:"Логин",prop:"login"}},[n("el-input",{model:{value:e.controls.login,callback:function(t){e.$set(e.controls,"login",t)},expression:"controls.login"}})],1),n("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[n("el-input",{model:{value:e.controls.password,callback:function(t){e.$set(e.controls,"password",t)},expression:"controls.password"}})],1),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Зарегистрироваться")])],1)],1)},a=[],o=(n("96cf"),n("1da1")),u=n("9962"),s={data:function(){return{controls:{login:"",password:""},rules:{login:[{min:1,max:40,required:!0,message:"Пожалуйста введите логин",trigger:"change"},{min:1,max:40,message:"Длинна не должна превышать 40 символов",trigger:"change"}],password:[{min:1,max:40,required:!0,message:"Пожалуйста введите пароль",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.addUser()}))},addUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={login:e.controls.login,password:e.controls.password},t.next=3,u["a"].signup(n);case 3:null!=localStorage.getItem("jwt")&&(null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("/")),e.$message({message:"xxx",type:"success"});case 5:case"end":return t.stop()}}),t)})))()}}},i=s,l=(n("6b40"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,"a4a58a5c",null);t["default"]=c.exports},"3da3":function(e,t,n){},"3dfd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-extend-layouts")],1)},a=[],o=n("0064"),u={name:"Home",components:{VueExtendLayouts:o["a"]}},s=u,i=(n("034f"),n("2877")),l=Object(i["a"])(s,r,a,!1,null,null,null);t["default"]=l.exports},4539:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v("BOARD!")])])}]},"4adc":function(e,t,n){var r={"./App.vue":["3dfd"],"./components/Navigation.vue":["f4dd","layout-components-Navigation-vue"],"./layouts/auth.vue":["3bb0","layout-layouts-auth-vue"],"./layouts/default.vue":["7b3d","layout-layouts-default-vue"],"./views/About.vue":["f820"],"./views/Dashboard.vue":["7277"],"./views/Home.vue":["bb51"],"./views/Login.vue":["a55b"],"./views/Signup.vue":["34c3"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="4adc",e.exports=a},"4c0b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),u=(n("0fae"),n("3dfd")),s=(n("45fc"),n("8c4f")),i=n("bb51"),l=n("f820"),c=n("a55b"),f=n("34c3"),d=n("7277");r["default"].use(s["a"]);var p=[{path:"/",name:"Home",component:i["default"],meta:{layout:"auth"}},{path:"/about",name:"About",component:l["default"],meta:{layout:"main-layout"}},{path:"/login",name:"Log In",component:c["default"],meta:{layout:"auth"}},{path:"/signup",name:"Sign Up",component:f["default"],meta:{layout:"auth"}},{path:"/dashboard",name:"userboard",component:d["default"],meta:{requiresAuth:!0}}],m=new s["a"]({mode:"history",base:"/",routes:p});m.beforeEach((function(e,t,n){if(e.matched.some((function(e){return e.meta.requiresAuth})))if(null==localStorage.getItem("jwt"))n({path:"/login",params:{nextUrl:e.fullPath}});else{var r=JSON.parse(localStorage.getItem("user"));e.matched.some((function(e){return e.meta.is_admin}))?1==r.is_admin?n():n({name:"userboard"}):n()}else e.matched.some((function(e){return e.meta.guest}))?null==localStorage.getItem("jwt")?n():n({name:"userboard"}):n()}));var v=m;r["default"].use(o.a),r["default"].config.productionTip=!1,new r["default"]({router:v,render:function(e){return e(u["default"])}}).$mount("#app")},"6b40":function(e,t,n){"use strict";var r=n("3da3"),a=n.n(r);a.a},7277:function(e,t,n){"use strict";n.r(t);var r=n("4539"),a=n("fb62");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var u=n("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},"7ad4":function(e,t,n){"use strict";n.r(t);var r=n("9cae"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},8367:function(e,t,n){"use strict";var r=n("4c0b"),a=n.n(r);a.a},"85ec":function(e,t,n){},"985c":function(e,t){},9962:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("96cf");var r=n("1da1"),a=n("d4ec"),o=n("ade3"),u=n("a18f"),s="http://localhost:3000/api",i=function e(){Object(a["a"])(this,e)};Object(o["a"])(i,"login",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat(s,"/login"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),Object(o["a"])(i,"signup",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat(s,"/signup"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,localStorage.jwt=r.token,localStorage.user=r.user.login,e.abrupt("return",r);case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),Object(o["a"])(i,"logout",Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.removeItem("user");case 1:case"end":return e.stop()}}),e)}))))},"9cae":function(e,t){},a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h1",[e._v("Вход в Gymer")]),n("el-form",{ref:"controls",staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"20px"},attrs:{model:e.controls,rules:e.rules,"label-width":"90px","label-position":"left "}},[n("el-form-item",{attrs:{label:"Логин",prop:"login"}},[n("el-input",{model:{value:e.controls.login,callback:function(t){e.$set(e.controls,"login",t)},expression:"controls.login"}})],1),n("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[n("el-input",{model:{value:e.controls.password,callback:function(t){e.$set(e.controls,"password",t)},expression:"controls.password"}})],1),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Войти")])],1)],1)},a=[],o=(n("96cf"),n("1da1")),u=n("9962"),s={data:function(){return{controls:{login:"",password:""},rules:{login:[{min:1,max:40,required:!0,message:"Пожалуйста введите логин",trigger:"change"},{min:1,max:40,message:"Длинна не должна превышать 40 символов",trigger:"change"}],password:[{min:1,max:40,required:!0,message:"Пожалуйста введите пароль",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.addUser()}))},addUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={login:e.controls.login,password:e.controls.password},t.next=3,u["a"].login(n);case 3:e.$message({message:"xxx",type:"success"});case 4:case"end":return t.stop()}}),t)})))()}}},i=s,l=(n("8367"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,"58b71cf8",null);t["default"]=c.exports},bb51:function(e,t,n){"use strict";n.r(t);var r=n("09be"),a=n("7ad4");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var u=n("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},f820:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Welcome to admin page")])},a=[],o=n("2877"),u={},s=Object(o["a"])(u,r,a,!1,null,"7b8ee07c",null);t["default"]=s.exports},fb62:function(e,t,n){"use strict";n.r(t);var r=n("985c"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a}});
//# sourceMappingURL=app.fc18632a.js.map