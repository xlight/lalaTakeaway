webpackJsonp([119],{OvS9:function(e,t){},aJDy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{username:""}},components:{PublicHeader:n("Cz8s").a},methods:{onLoad:function(){this.$route.query.username&&"undefined"!=this.$route.query.username&&(this.username=this.$route.query.username)},onSubmit:function(){var e=this,t={type:"username",realname:this.username};this.util.request({url:"wmall/member/profile/edit",data:t}).then(function(t){var n=t.data.message;if(e.$toast(n.message),n.errno)return!1;e.$router.push(e.util.getUrl({path:"/pages/member/profile"}))})}},mounted:function(){this.onLoad()}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"memberProfileUsername"}},[n("public-header",{attrs:{title:"修改用户名"}}),e._v(" "),n("div",{staticClass:"content"},[n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),n("div",{staticClass:"submit"},[n("van-button",{attrs:{size:"large",type:"danger"},on:{click:function(t){e.onSubmit()}}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var s=n("VU/8")(r,a,!1,function(e){n("OvS9")},null,null);t.default=s.exports}});