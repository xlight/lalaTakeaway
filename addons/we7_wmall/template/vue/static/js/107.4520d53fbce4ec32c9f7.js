webpackJsonp([107],{"+PAG":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{mobile:"",yzm:"",password:"",repassword:"",getCode:!0,code:{text:"获取验证码",downcount:60}}},components:{PublicHeader:o("Cz8s").a},methods:{onLoad:function(){this.$route.query.mobile&&"undefined"!=this.$route.query.mobile&&(this.mobile=this.$route.query.mobile)},onGetCode:function(){var t=this;return!!this.getCode&&(this.mobile?this.util.isValidMobile(this.mobile)?void this.util.request({url:"system/common/code",data:{mobile:this.mobile}}).then(function(e){var o=e.data.message;if(o.errno)return t.$toast(o.message),!1;t.code.text=t.code.downcount+"秒后重新获取";var s=setInterval(function(){t.code.downcount--,t.code.downcount<=0?(clearInterval(s),t.code.text="获取验证码",t.code.downcount=60,t.getCode=!0):t.code.text=t.code.downcount+"秒后重新获取"},1e3);t.$toast("验证码发送成功, 请注意查收")}):(this.$toast("手机号格式错误"),!1):(this.$toast("手机号不能为空"),!1))},onSubmit:function(){var t=this;if(!this.mobile)return this.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.mobile))return this.$toast("手机号格式错误"),!1;if(!this.yzm)return this.$toast("请输入短信验证码"),!1;if(!this.password)return this.$toast("密码不能为空"),!1;var e=this.password.length;if(e<8||e>20)return this.$toast("请输入8-20位密码"),!1;if(!/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(this.password))return this.$toast("密码必须由数字和字母组合"),!1;if(!this.repassword)return this.$toast("请重复输入密码"),!1;if(this.password!=this.repassword)return this.$toast("两次密码输入不一致"),!1;var o={mobile:this.mobile,code:this.yzm,password:this.password,repassword:this.repassword};this.util.request({url:"wmall/member/profile/bind",data:o}).then(function(e){var o=e.data.message;if(t.$toast(o.message),o.errno)return!1;t.$router.push(t.util.getUrl({path:"/pages/member/profile"}))})}},mounted:function(){this.onLoad()}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"memberBind"}},[o("public-header",{attrs:{title:"更改绑定手机号"}}),t._v(" "),o("div",{staticClass:"content"},[o("van-cell-group",[o("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),o("van-field",{attrs:{label:"短信验证码",placeholder:"请输入短信验证码"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}},[60==t.code.downcount?o("van-button",{attrs:{slot:"button",size:"small",type:"primary"},on:{click:function(e){t.onGetCode()}},slot:"button"},[t._v(t._s(t.code.text))]):o("van-button",{attrs:{slot:"button",size:"small",type:"primary",disabled:""},slot:"button"},[t._v(t._s(t.code.text))])],1),t._v(" "),o("van-field",{attrs:{type:"password",label:"登录密码",placeholder:"请输入您的登录密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),o("van-field",{attrs:{type:"password",label:"确认密码",placeholder:"请输入确认登录密码"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),t._v(" "),o("div",{staticClass:"submit"},[o("van-button",{attrs:{size:"large",type:"danger"},on:{click:function(e){t.onSubmit()}}},[t._v("立即绑定")])],1)],1)],1)},staticRenderFns:[]};var a=o("VU/8")(s,i,!1,function(t){o("3GoC")},null,null);e.default=a.exports},"3GoC":function(t,e){}});
//# sourceMappingURL=107.4520d53fbce4ec32c9f7.js.map