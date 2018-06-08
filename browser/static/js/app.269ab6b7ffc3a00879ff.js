webpackJsonp([1],{"8OE0":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},n,!1,function(e){r("VSRb")},null,null).exports,u=r("/ocq"),i={name:"Home",created:function(){initDropdowns()}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pure-menu pure-menu-horizontal"},[r("ul",{staticClass:"pure-menu-list"},[r("li",{staticClass:"pure-menu-item pure-menu-selected"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/enroll"}},[e._v("注册上链")])],1),e._v(" "),r("li",{staticClass:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/query"}},[e._v("查询账户信息")]),e._v(" "),r("ul",{staticClass:"pure-menu-children"},[r("li",{staticClass:"pure-menu-item"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/query/all"}},[e._v("所有账户")])],1),e._v(" "),r("li",{staticClass:"pure-menu-item"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/query/user"}},[e._v("指定账户")])],1),e._v(" "),r("li",{staticClass:"pure-menu-item"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/query/history"}},[e._v("历史记录")])],1)])],1),e._v(" "),r("li",{staticClass:"pure-menu-item pure-menu-selected"},[r("router-link",{staticClass:"pure-menu-link",attrs:{to:"/trade"}},[e._v("交易")])],1)])])},staticRenderFns:[]};var l=r("VU/8")(i,o,!1,function(e){r("PzGv")},"data-v-a6baac48",null).exports,p=r("mvHQ"),m=r.n(p),c={created:function(){this.ws=new WebSocket("ws://localhost:8080/ws"),console.log("create")},beforeDestroy:function(){this.ws.close()}},v={name:"Enroll",mixins:[c],data:function(){return{username:"",requesttype:"initUser",ws:""}},created:function(){var e=this;this.ws.addEventListener("message",function(t){var r=JSON.parse(t.data);if(!r.ifsuccessful)return alert(r.errinfo);localStorage.setItem("username",e.username),alert("注册成功！")})},methods:{enroll:function(){var e=m()({username:this.username,requesttype:this.requesttype});this.ws.send(e)}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"pure-form"},[r("fieldset",[r("legend",[e._v("注册上链")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",name:"username",placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("input",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit",value:"提交"},on:{click:function(t){return t.preventDefault(),e.enroll(t)}}})])])])},staticRenderFns:[]};var f=r("VU/8")(v,d,!1,function(e){r("UEtr")},"data-v-3a0f342e",null).exports,y={created:function(){this.username=localStorage.getItem("username")}},_={name:"Query",mixins:[y,c],props:{queryType:String},data:function(){return{username:"",requesttype:"",operatename:"",queryResult:"",ws:""}},created:function(){var e=this;this.ws.addEventListener("message",function(t){var r=JSON.parse(t.data);if(!r.ifsuccessful)return alert(r.errinfo);e.queryResult=r.result}),"all"===this.queryType?(this.requesttype="queryAll",setTimeout(function(){e.query()},500)):"user"===this.queryType?this.requesttype="queryUser":this.requesttype="getHistory"},methods:{query:function(){var e=m()({username:this.username,requesttype:this.requesttype,operatename:this.operatename});this.ws.send(e)}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["all"!==e.queryType?r("form",{staticClass:"pure-form pure-form-aligned"},[r("fieldset",["user"===e.queryType?r("legend",[e._v("查询指定账户信息")]):r("legend",[e._v("查询指定账户历史记录")]),e._v(" "),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"username"}},[e._v("用户名")]),e._v(" "),r("input",{attrs:{type:"text",id:"username",name:"username",disabled:""},domProps:{value:e.username}})]),e._v(" "),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"operatename"}},[e._v("账户名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.operatename,expression:"operatename"}],attrs:{type:"text",id:"operatename",name:"operatename",placeholder:"账户名"},domProps:{value:e.operatename},on:{input:function(t){t.target.composing||(e.operatename=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"pure-controls"},[r("input",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit",value:"提交"},on:{click:function(t){return t.preventDefault(),e.query(t)}}})])])]):e._e(),e._v(" "),"all"===e.queryType?r("p",[e._v("所有账户信息")]):e._e(),e._v("\n  "+e._s(e.queryResult)+"\n")])},staticRenderFns:[]};var g=r("VU/8")(_,h,!1,function(e){r("8OE0")},"data-v-6efa6d8a",null).exports,q={name:"Trade",mixins:[y,c],data:function(){return{username:"",amount:"",operatename:"",requesttype:"invoke",ws:""}},created:function(){this.ws.addEventListener("message",function(e){var t=JSON.parse(e.data);if(!t.ifsuccessful)return alert(t.errinfo);alert("交易成功！")})},methods:{trade:function(){var e=m()({username:this.username,operatename:this.operatename,operateamount:this.amount,requesttype:this.requesttype});this.ws.send(e)}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"pure-form pure-form-aligned"},[r("fieldset",[r("legend",[e._v("交易")]),e._v(" "),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"username"}},[e._v("用户名")]),e._v(" "),r("input",{attrs:{type:"text",id:"username",name:"username",disabled:""},domProps:{value:e.username}})]),e._v(" "),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"operatename"}},[e._v("发往账户")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.operatename,expression:"operatename"}],attrs:{type:"text",id:"operatename",name:"operatename",placeholder:"账户名"},domProps:{value:e.operatename},on:{input:function(t){t.target.composing||(e.operatename=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"pure-control-group"},[r("label",{attrs:{for:"mount"}},[e._v("交易数量")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"text",id:"mount",name:"mount",placeholder:"交易数量"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"pure-controls"},[r("input",{staticClass:"pure-button pure-button-primary",attrs:{type:"submit",value:"提交"},on:{click:function(t){return t.preventDefault(),e.trade(t)}}})])])])},staticRenderFns:[]};var w=r("VU/8")(q,C,!1,function(e){r("XH+2")},"data-v-e97f324c",null).exports;a.a.use(u.a);var b=new u.a({routes:[{path:"/",name:"Home",component:l},{path:"/enroll",name:"Enroll",component:f},{path:"/query/:queryType",name:"Query",component:g,props:!0},{path:"/trade",name:"Trade",component:w}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:s},template:"<App/>"})},PzGv:function(e,t){},UEtr:function(e,t){},VSRb:function(e,t){},"XH+2":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.269ab6b7ffc3a00879ff.js.map