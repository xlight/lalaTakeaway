webpackJsonp([32],{bXtx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Cz8s"),a=s("deIj"),i={components:{publicHeader:o.a},data:function(){return{getCode:!0,codeText:"发送验证码",downcount:60,islegal:!0,mobile:"",code:"",password:"",repassword:"",showPreLoading:!0}},methods:{onGetCode:function(){var t=this;if(!t.getCode)return!1;if(!t.mobile)return t.util.$toast("手机号不能为空"),!1;if(!/^[01][3456789][0-9]{9}/.test(t.mobile))return t.util.$toast("手机号格式错误"),!1;Object(a.a)({vue:t,url:"system/common/code",data:{mobile:t.mobile,nosid:1},success:function(e){t.getCode=!1,t.codeText=t.downcount+"秒后重新获取";var s=setInterval(function(){t.downcount--,t.downcount<=0?(clearInterval(s),t.codeText="获取验证码",t.downcount=60,t.getCode=!0):t.codeText=t.downcount+"秒后重新获取"},1e3);t.util.$toast("验证码发送成功, 请注意查收")}})},onSubmit:function(){if(!this.mobile)return this.util.$toast("手机号不能为空"),!1;if(!/^[01][3456789][0-9]{9}/.test(this.mobile))return this.util.$toast("手机号格式错误"),!1;if(!this.code)return this.util.$toast("请输入短信验证码"),!1;if(!this.password)return this.util.$toast("密码不能为空"),!1;var t=this.password.length;if(t<8||t>20)return this.util.$toast("请输入8-20位密码"),!1;if(!/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/.test(this.password))return this.util.$toast("密码必须由数字和字母组合"),!1;if(!this.repassword)return this.util.$toast("请重复输入密码"),!1;if(this.password!=this.repassword)return this.util.$toast("两次密码输入不一致"),!1;var e={mobile:this.mobile,code:this.code,password:this.password,repassword:this.repassword,nosid:1};Object(a.c)({vue:this,url:"manage/auth/forget",data:e,message:"找回成功",redirect:this.util.getUrl({path:"/pages/auth/login"})})}},mounted:function(){this.showPreLoading=!1}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"auth-forget"}},[s("public-header",{attrs:{title:"忘记密码"}}),t._v(" "),s("div",{staticClass:"content"},[s("van-cell-group",{staticClass:"margin-10-t"},[s("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),t._v(" "),s("van-field",{attrs:{center:"",clearable:"",label:"手机验证码",placeholder:"请输入6位短信验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}},[s("van-button",{staticClass:"bg-info",attrs:{slot:"button",size:"small",disabled:!t.getCode},on:{click:t.onGetCode},slot:"button"},[t._v(t._s(t.codeText))])],1),t._v(" "),s("van-field",{attrs:{label:"登录密码",placeholder:"请输入您的登录密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("van-field",{attrs:{label:"手机号",placeholder:"请确认您的登录密码",type:"password"},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}})],1),t._v(" "),s("div",{staticClass:"padding-15"},[s("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal",block:"",disabled:!t.islegal},on:{click:t.onSubmit}},[t._v("立即找回")])],1)],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var r=s("VU/8")(i,n,!1,function(t){s("yG3U")},"data-v-621c1c99",null);e.default=r.exports},yG3U:function(t,e){}});
//# sourceMappingURL=32.324b5150795a16761a01.js.map