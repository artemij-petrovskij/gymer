(function(e){function t(t){for(var a,n,i=t[0],l=t[1],u=t[2],c=0,p=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={app:0},o={app:0},s=[];function i(e){return l.p+"js/"+({"layout-components-Navigation-vue":"layout-components-Navigation-vue","layout-layouts-auth-template-vue":"layout-layouts-auth-template-vue","layout-layouts-dashboard-template-vue":"layout-layouts-dashboard-template-vue"}[e]||e)+"."+{"layout-components-Navigation-vue":"1d5c3c5b","layout-layouts-auth-template-vue":"4c05ad65","layout-layouts-dashboard-template-vue":"d97aeada"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"layout-components-Navigation-vue":1,"layout-layouts-dashboard-template-vue":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({"layout-components-Navigation-vue":"layout-components-Navigation-vue","layout-layouts-auth-template-vue":"layout-layouts-auth-template-vue","layout-layouts-dashboard-template-vue":"layout-layouts-dashboard-template-vue"}[e]||e)+"."+{"layout-components-Navigation-vue":"0c7828d0","layout-layouts-auth-template-vue":"31d6cfe0","layout-layouts-dashboard-template-vue":"889567bf"}[e]+".css",o=l.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],c=u.getAttribute("data-href");if(c===a||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],d.parentNode.removeChild(d),r(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"04b5":function(e,t,r){"use strict";var a=r("315c"),n=r.n(a);n.a},"09be":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h2",[e._v("Hello!")])])}]},1352:function(e,t,r){},"1e93":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"weight"},[r("el-form",{ref:"controls",staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"20px"},attrs:{"label-width":"90px","label-position":"left "}},[r("el-form-item",{attrs:{label:"Вес",prop:"weight"}},[r("el-input-number",{attrs:{precision:2,step:.1,max:400},model:{value:e.controls.weight,callback:function(t){e.$set(e.controls,"weight",t)},expression:"controls.weight"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Сохранить")])],1),r("el-table",{staticStyle:{width:"100%",display:"inline-block"},attrs:{data:e.weights,stripe:"",height:"450",fixed:""}},[r("el-table-column",{attrs:{prop:"date",label:"Дата"}}),r("el-table-column",{attrs:{prop:"weight",label:"Вес"}})],1)],1)},n=[],o=(r("96cf"),r("1da1")),s=r("d4ec"),i=r("ade3"),l=r("a18f"),u="/api/weight",c=function e(){Object(s["a"])(this,e)};Object(i["a"])(c,"allWeights",function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(u,"/show"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.jwt)}});case 3:if(r=e.sent,201!==r.status){e.next=8;break}return e.abrupt("return",r.json());case 8:return e.abrupt("return",{err:"Server error"});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),Object(i["a"])(c,"changeWeight",function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(u,"/change"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.jwt)}});case 3:if(r=e.sent,201!==r.status){e.next=8;break}return e.abrupt("return",r.json());case 8:return e.abrupt("return",{err:"Server error"});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}());var p={data:function(){return{weights:[],controls:{weight:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.allWeights({jwt:localStorage.getItem("jwt")});case 2:r=t.sent,e.weights=r.reverse(),void 0!==e.weights[0]&&(e.controls.weight=e.weights[0].weight);case 5:case"end":return t.stop()}}),t)})))()},methods:{submitForm:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.changeWeight({jwt:localStorage.getItem("jwt"),weight:e.controls.weight});case 2:r=t.sent,e.weights=r.reverse();case 4:case"end":return t.stop()}}),t)})))()}}},d=p,m=(r("04b5"),r("2877")),f=Object(m["a"])(d,a,n,!1,null,"76f1337c",null);t["default"]=f.exports},2457:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"Тренировка",name:"first_tab"}},[r("div",{staticClass:"training"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.trainings}},[r("el-table-column",{attrs:{prop:"exercise",label:"Упражнение"}}),r("el-table-column",{attrs:{prop:"set",label:"Подход №"}}),r("el-table-column",{attrs:{prop:"weight",label:"Вес"}}),r("el-table-column",{attrs:{prop:"repeats",label:"Повторы"}})],1),r("div",{staticClass:"form"},[r("el-form",{ref:"controls",staticStyle:{"max-width":"600px",position:"relative","margin-left":"20px",margin:"20px auto",padding:"20px"},attrs:{model:e.controls,rules:e.rules,"label-position":"left "}},[r("el-form-item",{staticClass:"set",staticStyle:{"text-align":"left"}},[e._v(" Подход: "+e._s(e.controls.set)+" ")]),r("el-form-item",{attrs:{prop:"exercise"}},[r("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"Упражнение",clearable:""},on:{select:e.handleSelect},model:{value:e.controls.exercise,callback:function(t){e.$set(e.controls,"exercise",t)},expression:"controls.exercise"}})],1),e.exercise_exist?r("el-form-item",{staticClass:"set",staticStyle:{"text-align":"left"}},[e._v(" Макс. вес: "+e._s(e.max.weight)+" × "+e._s(e.max.repeats)+" раз(a) ")]):e._e(),r("el-form-item",{staticClass:"weight",attrs:{label:"Вес:"}},[r("div",{staticClass:"block"},[r("span",{staticClass:"demonstration"},[e._v(e._s(e.controls.weight))]),r("div",{staticClass:"block"},[r("el-slider",{attrs:{"show-input":"",inputmode:"numeric",max:150},model:{value:e.controls.weight,callback:function(t){e.$set(e.controls,"weight",t)},expression:"controls.weight"}})],1)])]),r("el-form-item",{staticClass:"repeats",attrs:{label:"Повторения:"}},[r("div",{staticClass:"block"},[r("span",{staticClass:"demonstration"},[e._v(e._s(e.controls.repeats))]),r("el-slider",{attrs:{"show-input":"",inputmode:"numeric","show-tooltip":!1,max:40},model:{value:e.controls.repeats,callback:function(t){e.$set(e.controls,"repeats",t)},expression:"controls.repeats"}})],1)]),r("el-button-group",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.nextExercise("controls")}}},[e._v("Закончить ")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.nextSet("controls")}}},[e._v("Подход "),r("i",{staticClass:"el-icon-refresh"})])],1)],1)],1)],1)]),r("el-tab-pane",{attrs:{label:"Архив",name:"second-tab"}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.trainings_archive}},[r("el-table-column",{attrs:{prop:"exercise",label:"Упражнение"}}),r("el-table-column",{attrs:{prop:"set",label:"Подход №"}}),r("el-table-column",{attrs:{prop:"weight",label:"Вес"}}),r("el-table-column",{attrs:{prop:"repeats",label:"Повторы"}}),r("el-table-column",{attrs:{label:"Дата"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.date)+" ")]}}])})],1)],1)],1)},n=[],o=(r("4de4"),r("c975"),r("53ca")),s=(r("96cf"),r("1da1")),i=r("d4ec"),l=r("ade3"),u=r("a18f"),c="/api/training",p=function e(){Object(i["a"])(this,e)};Object(l["a"])(p,"allTrainings",function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat(c,"/trainings"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.jwt)}});case 3:if(r=e.sent,201!==r.status){e.next=8;break}return e.abrupt("return",r.json());case 8:return e.abrupt("return",{err:!0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),Object(l["a"])(p,"Archive",function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat(c,"/archive"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.jwt)}});case 3:if(r=e.sent,201!==r.status){e.next=8;break}return e.abrupt("return",r.json());case 8:return e.abrupt("return",{err:!0});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),Object(l["a"])(p,"addSet",function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat(c,"/set"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.jwt)}});case 3:if(r=e.sent,console.log(r.status),201!==r.status){e.next=9;break}return e.abrupt("return",r.json());case 9:return e.abrupt("return",{err:"Server error"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),Object(l["a"])(p,"maxSet",function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u("".concat(c,"/maxset"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.jwt)}});case 3:if(r=e.sent,201!==r.status){e.next=8;break}return e.abrupt("return",r.json());case 8:return e.abrupt("return",{err:"Server error"});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}());var d={data:function(){return{activeName:"first_tab",loading:!0,exercise_exist:!1,trainings:[],trainings_archive:[],controls:{set:1,exercise:"",weight:0,repeats:0},rules:{exercise:[{min:1,max:80,required:!0,message:"Введите упражнение",trigger:"change"}]},max:{set:0,exercise:0,weight:0,repeats:0}}},methods:{querySearch:function(e,t){var r=this.links,a=e?r.filter(this.createFilter(e)):r;t(a)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){return[{value:"Выпады с гантелями"},{value:"Гильотина"},{value:"Отжимания на брусьях"},{value:"Гиперэкстензии"},{value:"Дэнчик (плечи)"},{value:"Жим гантелей лежа на горизонтальной скамье"},{value:"Жим гантелей лежа на наклонной скамье"},{value:"Жим гантелей стоя"},{value:"Жим ногами"},{value:"Жим штанги лежа на горизонтальной скамье"},{value:"Жим штанги лежа на наклонной скамье"},{value:"Жим штанги лежа узким хватом на горизонтальной скамье"},{value:"Жим штанги лежа узким хватом на наклонной скамье"},{value:"Жим штанги сидя"},{value:"Жим штанги стоя"},{value:"Сведение и разведение рук (бабочка)"},{value:"Кроссоверы на верхних блоках"},{value:"Кроссоверы на средних блоках"},{value:"Подтягивания обратным хватом"},{value:"Подтягивания"},{value:"Предплечья"},{value:"Подъем штанги на бицепс (Cкотт)"},{value:"Подъем штанги на бицепс обратным хватом"},{value:"Гакк приседания"},{value:"Подъем штанги на бицепс"},{value:"Подъемы гантелей (махи) через стороны вверх"},{value:"Подъемы гантелей через стороны вверх в наклоне"},{value:"Подъемы на носки сидя "},{value:"Приседания со штангой на спине"},{value:"Разведения гантелей лежа на горизонтальной скамье"},{value:"Разведения гантелей лежа на наклонной скамье"},{value:"Разгибание ног в тренажере"},{value:"Разгибания рук на верхнем блоке"},{value:"Становая тяга"},{value:"Тяга гантели одной рукой стоя в наклоне"},{value:"Тяга штанги на прямых ногах"}]},handleSelect:function(e){this.maxSet(e.value)},nextSet:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.sendData(),t.controls.set++,t.controls.repeats=0)}))},sendData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.addSet({jwt:localStorage.getItem("jwt"),set:e.controls.set,exercise:e.controls.exercise,weight:e.controls.weight,repeats:e.controls.repeats});case 2:r=t.sent,e.trainings=r;case 4:case"end":return t.stop()}}),t)})))()},nextExercise:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.controls.set=1,e.controls.weight=0,e.controls.repeats=0,e.controls.exercise="";case 4:case"end":return t.stop()}}),t)})))()},maxSet:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,p.maxSet({jwt:localStorage.getItem("jwt"),exercise:e});case 2:a=r.sent,t.max.exercise=a.exercise,t.max.weight=a.weight,t.max.set=a.set,t.max.repeats=a.repeats,a.weight?(console.log(Object(o["a"])(a)),t.exercise_exist=!0):t.exercise_exist=!1;case 8:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.links=this.loadAll()},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.allTrainings({jwt:localStorage.getItem("jwt")});case 2:return r=t.sent,r.err?e.$router.push("/login"):(e.trainings=r,e.loading=!1),t.next=6,p.Archive({jwt:localStorage.getItem("jwt")});case 6:a=t.sent,a.err?e.$router.push("/login"):(e.trainings_archive=a.reverse(),e.loading=!1);case 8:case"end":return t.stop()}}),t)})))()}},m=d,f=(r("387e"),r("2877")),h=Object(f["a"])(m,a,n,!1,null,"4aa2358e",null);t["default"]=h.exports},"2edc":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-form",{staticStyle:{width:"600px"},attrs:{"label-position":"top"}},[r("el-form-item",{attrs:{label:"Логин:"}},[r("div",{attrs:{label:"top"}},[e._v("-")])]),r("el-form-item",{attrs:{label:"Пароль:"}},[r("div",{attrs:{label:"top"}},[e._v("-")])]),r("el-form-item",[r("el-button",{attrs:{type:"danger"},on:{click:e.exit}},[e._v("Выйти")])],1)],1)],1)},n=[],o={data:function(){return{}},methods:{exit:function(){localStorage.removeItem("jwt"),localStorage.removeItem("user"),this.$router.push("/login")}}},s=o,i=(r("e2c6"),r("2877")),l=Object(i["a"])(s,a,n,!1,null,"37bb9658",null);t["default"]=l.exports},"315c":function(e,t,r){},"34c3":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h1",[e._v("Зарегистрировать аккаунт")]),r("el-form",{ref:"controls",staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"20px"},attrs:{model:e.controls,rules:e.rules,"label-width":"130px","label-position":"left "}},[r("el-form-item",{attrs:{label:"Логин",prop:"login"}},[r("el-input",{model:{value:e.controls.login,callback:function(t){e.$set(e.controls,"login",t)},expression:"controls.login"}})],1),r("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":""},model:{value:e.controls.password,callback:function(t){e.$set(e.controls,"password",t)},expression:"controls.password"}})],1),r("el-form-item",{attrs:{label:"Подтверждение",prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":""},model:{value:e.controls.passwordConfirm,callback:function(t){e.$set(e.controls,"passwordConfirm",t)},expression:"controls.passwordConfirm"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Зарегистрироваться")])],1)],1)},n=[],o=(r("96cf"),r("1da1")),s=r("9962"),i={data:function(){return{controls:{login:"",password:"",passwordConfirm:""},rules:{login:[{min:1,max:40,required:!0,message:"Введите логин",trigger:"change"},{min:1,max:40,message:"Длинна не должна превышать 40 символов",trigger:"change"}],password:[{min:1,max:40,required:!0,message:"Введите пароль",trigger:"change"}],passwordConfirm:[{min:1,max:40,required:!0,message:"Подтвердите пароль",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.controls.password==t.controls.passwordConfirm?t.addUser():t.$message({message:"Пароли не совпадают",type:"warning"})}))},addUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={login:e.controls.login,password:e.controls.password},t.next=3,s["a"].signup(r);case 3:a=t.sent,a.err?e.$message({message:a.err,type:"warning"}):null!=localStorage.getItem("jwt")&&(null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("/dashboard"));case 5:case"end":return t.stop()}}),t)})))()}}},l=i,u=(r("e696"),r("2877")),c=Object(u["a"])(l,a,n,!1,null,"0ddb0d75",null);t["default"]=c.exports},"387e":function(e,t,r){"use strict";var a=r("1352"),n=r.n(a);n.a},"399e":function(e,t,r){},"3dfd":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("vue-extend-layouts")],1)},n=[],o=r("0064"),s={name:"Home",components:{VueExtendLayouts:o["a"]}},i=s,l=(r("034f"),r("2877")),u=Object(l["a"])(i,a,n,!1,null,null,null);t["default"]=u.exports},4781:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h2",[e._v("BOARD!")])])}],o={data:function(){return{jwt:localStorage.jwt,isCollapse:!0}}},s=o,i=r("2877"),l=Object(i["a"])(s,a,n,!1,null,null,null);t["default"]=l.exports},"4adc":function(e,t,r){var a={"./App.vue":["3dfd"],"./components/Navigation.vue":["f4dd","layout-components-Navigation-vue"],"./layouts/auth-template.vue":["9dcc","layout-layouts-auth-template-vue"],"./layouts/dashboard-template.vue":["0730","layout-layouts-dashboard-template-vue"],"./views/Home.vue":["bb51"],"./views/Login.vue":["a55b"],"./views/Signup.vue":["34c3"],"./views/dashboard/Main.vue":["4781"],"./views/dashboard/Settings.vue":["2edc"],"./views/dashboard/Training.vue":["2457"],"./views/dashboard/Weight.vue":["1e93"]};function n(e){if(!r.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(a)},n.id="4adc",e.exports=n},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5c96"),o=r.n(n),s=(r("0fae"),r("dccd")),i=r.n(s),l=r("3dfd"),u=(r("45fc"),r("8c4f")),c=r("bb51"),p=r("a55b"),d=r("34c3"),m=r("4781"),f=r("2457"),h=r("1e93"),v=r("2edc");a["default"].use(u["a"]);var g=[{path:"/",name:"Home",component:c["default"],meta:{layout:"auth-template"}},{path:"/login",name:"Log In",component:p["default"],meta:{layout:"auth-template"}},{path:"/signup",name:"Sign Up",component:d["default"],meta:{layout:"auth-template"}},{path:"/dashboard",name:"userboard",component:m["default"],meta:{header:"Главная",requiresAuth:!0,layout:"dashboard-template"}},{path:"/dashboard/training",name:"training",component:f["default"],meta:{header:"Тренировка",layout:"dashboard-template",requiresAuth:!0}},{path:"/dashboard/weight",name:"weight",component:h["default"],meta:{header:"Контроль веса",layout:"dashboard-template",requiresAuth:!0}},{path:"/dashboard/settings",name:"settings",component:v["default"],meta:{header:"Настройки",layout:"dashboard-template",requiresAuth:!0}}],b=new u["a"]({mode:"history",base:"/",routes:g});b.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))&&null==localStorage.getItem("jwt")?r({path:"/login",params:{nextUrl:e.fullPath}}):r()}));var w=b;a["default"].use(o.a,{locale:i.a}),a["default"].config.productionTip=!1,new a["default"]({router:w,render:function(e){return e(l["default"])}}).$mount("#app")},"7ad4":function(e,t,r){"use strict";r.r(t);var a=r("9cae"),n=r.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"85ec":function(e,t,r){},9537:function(e,t,r){},"96ae":function(e,t,r){},9962:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("96cf");var a=r("1da1"),n=r("d4ec"),o=r("ade3"),s=r("a18f"),i="/api",l=function e(){Object(n["a"])(this,e)};Object(o["a"])(l,"login",function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("".concat(i,"/login"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:if(a=e.sent,404!==r.status){e.next=11;break}return e.abrupt("return",{err:"Неправильное имя пользователя или пароль"});case 11:return localStorage.setItem("jwt",a.token),e.abrupt("return",a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()),Object(o["a"])(l,"signup",function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("".concat(i,"/signup"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:if(a=e.sent,409!==r.status){e.next=11;break}return e.abrupt("return",{err:"Пользователь с таким логином уже существует"});case 11:return localStorage.setItem("jwt",a.token),e.abrupt("return",a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}()),Object(o["a"])(l,"logout",Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.removeItem("user");case 1:case"end":return e.stop()}}),e)}))))},"9cae":function(e,t){},a55b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("h1",[e._v("Вход в Gymer")]),r("el-form",{ref:"controls",staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"20px"},attrs:{model:e.controls,rules:e.rules,"label-width":"90px","label-position":"left "}},[r("el-form-item",{attrs:{label:"Логин",prop:"login"}},[r("el-input",{model:{value:e.controls.login,callback:function(t){e.$set(e.controls,"login",t)},expression:"controls.login"}})],1),r("el-form-item",{attrs:{label:"Пароль",prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":""},model:{value:e.controls.password,callback:function(t){e.$set(e.controls,"password",t)},expression:"controls.password"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("controls")}}},[e._v("Войти")])],1)],1)},n=[],o=(r("96cf"),r("1da1")),s=r("9962"),i={data:function(){return{controls:{login:"",password:""},rules:{login:[{min:1,max:40,required:!0,message:"Введите логин",trigger:"change"},{min:1,max:40,message:"Длинна не должна превышать 40 символов",trigger:"change"}],password:[{min:1,max:40,required:!0,message:"Введите пароль",trigger:"change"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.addUser()}))},addUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={login:e.controls.login,password:e.controls.password},t.next=3,s["a"].login(r);case 3:a=t.sent,a.err?e.$message({message:a.err,type:"warning"}):null!=localStorage.getItem("jwt")&&(null!=e.$route.params.nextUrl?e.$router.push(e.$route.params.nextUrl):e.$router.push("/dashboard"));case 5:case"end":return t.stop()}}),t)})))()}}},l=i,u=(r("e96d"),r("2877")),c=Object(u["a"])(l,a,n,!1,null,"722127d6",null);t["default"]=c.exports},bb51:function(e,t,r){"use strict";r.r(t);var a=r("09be"),n=r("7ad4");for(var o in n)["default"].indexOf(o)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(o);var s=r("2877"),i=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},e2c6:function(e,t,r){"use strict";var a=r("9537"),n=r.n(a);n.a},e696:function(e,t,r){"use strict";var a=r("399e"),n=r.n(a);n.a},e96d:function(e,t,r){"use strict";var a=r("96ae"),n=r.n(a);n.a}});
//# sourceMappingURL=app.4991cd7e.js.map