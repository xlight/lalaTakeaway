webpackJsonp([87],{"+105":function(e,t){},uEI1:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"superRedpacket-index"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:e.activity_img,alt:""}})]),e._v(" "),i("div",{staticClass:"receive"},[i("van-field",{attrs:{placeholder:"请输入您的手机号"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),i("div",{staticClass:"btn-get-superredpacket",on:{click:e.onSubmit}},[e._v("立即领取")])],1),e._v(" "),i("div",{staticClass:"records-agreement"},[i("div",{staticClass:"agreement-title"},[e._v("活动规则")]),e._v(" "),i("div",{staticClass:"agreement-inner",domProps:{innerHTML:e._s(e.agreement)}})])]),e._v(" "),i("transition",{attrs:{name:"loading"}},[e.showPreLoading?i("iloading"):e._e()],1)],1)},staticRenderFns:[]};var a=i("VU/8")({components:{},data:function(){return{showPreLoading:!0,agreement:"",mobile:"",activity_img:"",activity_title:"分享超级红包"}},methods:{onSubmit:function(){var e=this;return this.mobile?this.util.isValidMobile(this.mobile)?void this.util.request({url:"superRedpacket/share/index",method:"POST",data:{mobile:this.mobile,order_id:this.order_id}}).then(function(t){var i=t.data.message;if(i.errno)return e.$toast(i.message),!1;e.$router.replace(e.util.getUrl({path:"/pages/superRedpacket/grant",query:{order_id:e.order_id}}))}):(this.$toast("手机号格式错误"),!1):(this.$toast("请输入手机号"),!1)},onLoad:function(){var e=this;this.util.request({url:"superRedpacket/share/index",data:{order_id:this.order_id}}).then(function(t){e.showPreLoading=!1;var i=t.data.message;if(i.errno)return-1e3==i.errno?(e.$router.replace(e.util.getUrl({path:"/pages/superRedpacket/grant",query:{order_id:e.order_id}})),!1):(e.$toast(i.message),!1);i=i.message,e.activity_img=i.activity_img,e.activity_title=i.activity_title,e.agreement=i.agreement,e.util.setWXTitle(e.activity_title)})}},created:function(){this.query=this.$route.query,this.query&&(this.order_id=this.query.order_id)},mounted:function(){this.onLoad()}},r,!1,function(e){i("+105")},null,null);t.default=a.exports}});