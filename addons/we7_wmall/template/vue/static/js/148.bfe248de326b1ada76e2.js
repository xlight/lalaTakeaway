webpackJsonp([148],{"0a8g":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("EuEE"),a={data:function(){return{mobile:"",password:"",config:{}}},beforeRouteEnter:function(t,e,s){e.name&&(window.redirct_url={path:e.path,query:e.query}),s()},methods:{onLogin:function(){var t=this;if(this.mobile||this.$toast("手机号不能为空"),!this.util.isValidMobile(this.mobile))return this.$toast("手机号格式错误"),!1;this.password||this.$toast("请输入密码"),this.util.request({url:"storebd/login",method:"POST",data:{mobile:this.mobile,password:this.password}}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message,"",1e3),!1;s=s.message,t.util.setStorage("istorebdtoken",s.storebd_user.token);var a=window.redirct_url;(!a||a&&-1!=a.path.indexOf("pages/auth/"))&&(a={path:"/pages/storebd/index"}),t.$router.replace(i.a.getUrl(a))})},onLoad:function(){var t=this;this.util.request({url:"storebd/login"}).then(function(e){var s=e.data.message;if(s.errno)return t.util.$toast(s.message,"",1e3),!1;t.config=s.message.config})}},mounted:function(){this.$nextTick(function(){}),this.onLoad()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"},[t.config.logo?s("img",{attrs:{src:t.config.logo,alt:""}}):s("img",{attrs:{src:"static/img/head.png",alt:""}})]),t._v(" "),s("div",{staticClass:"name"},[t._v(t._s(t.config.title))])]),t._v(" "),s("div",{staticClass:"list-block"},[s("van-cell-group",[s("van-field",{attrs:{"left-icon":"phone1",type:"number",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),s("van-field",{attrs:{"left-icon":"lock",type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("div",{staticClass:"content-padded"},[s("div",{staticClass:"button-login",on:{click:t.onLogin}},[t._v("登录")])])],1),t._v(" "),s("div",{staticClass:"text hide"},[s("p",[t._v("还没有账号？"),s("router-link",{staticClass:"text-a",attrs:{to:t.util.getUrl({path:"/pages/auth/register"})}},[t._v("立即注册")])],1)])])])},staticRenderFns:[]};var n=s("VU/8")(a,o,!1,function(t){s("E0k5")},null,null);e.default=n.exports},E0k5:function(t,e){}});
//# sourceMappingURL=148.bfe248de326b1ada76e2.js.map