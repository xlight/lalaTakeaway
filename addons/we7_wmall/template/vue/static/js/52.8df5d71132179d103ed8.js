webpackJsonp([52],{"R/Cp":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"gohome-poster"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"img-wrap"},[this.preLoading?s("van-loading",{attrs:{type:"spinner"}}):s("img",{staticClass:"img-100",attrs:{src:this.respon,alt:""}})],1),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip"},[s("img",{attrs:{src:"static/img/postershare.png",alt:""}}),this._v(" "),s("span",{staticClass:"font-16 c-white"},[this._v("长按上图保存图片，或发送给好友")])])}]};var n=e("VU/8")({data:function(){return{preLoading:!0,respon:""}},methods:{onLoad:function(){var t=this;this.util.request({url:"gohome/poster/index",data:{goods_id:this.goods_id,type:this.type}}).then(function(s){t.preLoading=!1;var e=s.data.message;if(e.errno)return t.util.$toast(e.message),!1;t.respon=e.message.respon})}},created:function(){this.$route.query&&(this.goods_id=this.$route.query.goods_id,this.type=this.$route.query.type)},mounted:function(){this.onLoad()}},i,!1,function(t){e("x/0r")},null,null);s.default=n.exports},"x/0r":function(t,s){}});