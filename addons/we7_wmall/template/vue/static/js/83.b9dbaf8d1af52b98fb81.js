webpackJsonp([83],{TOHi:function(t,e){},mkP2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Cz8s"),a=i("mzkE"),n=i("deIj"),o={components:{PublicHeader:s.a,PublicFooter:a.a},data:function(){return{showPreLoading:!0,catePopup:!1,categorys:{},categorySelected:{},black_member:{status:!1},failedTips:{type:"message",tips:"",btnText:"关闭",link:"/gohome/pages/tongcheng/index"},menufooter:{}}},methods:{onLoad:function(t){var e=this;t&&(e.id=t),Object(n.a)({vue:e,url:"tongcheng/publish/index",data:{menufooter:1},success:function(t){e.categorys=t.categorys,e.menufooter=window.menufooter},fail:function(t){if(-1e3==t.errno){var i=t.message.black_member;return e.black_member=i,void(e.failedTips.tips=i.tip)}e.util.$toast(t.message,"",1e3)}})},onPublish:function(t){if(t.child)this.categorySelected=t,this.catePopup=!this.catePopup;else{var e=t.parentid,i=t.id;0==e&&(e=t.id,i=0),this.$router.push(this.util.getUrl({path:"/gohome/pages/tongcheng/publish/post",query:{parentid:e,childid:i}}))}}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"publish-index"}},[i("public-header",{attrs:{title:"发布信息"}}),t._v(" "),i("public-footer",{attrs:{menufooter:t.menufooter,preLoading:t.showPreLoading,showFailedTips:t.black_member.status,failedTips:t.failedTips}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"tip"},[t._v("免责声明：本平台只负责信息的发布与展示，信息本身与平台无关，平台本身不负任何责任。")]),t._v(" "),i("div",{staticClass:"store-settle flex-lr hide"},[t._m(0),t._v(" "),i("van-icon",{staticClass:"c-gray font-14",attrs:{name:"arrow"}})],1),t._v(" "),i("div",{staticClass:"bg-default margin-10-t"},[i("div",{staticClass:"padding-15-tb text-center font-13  van-hairline--bottom"},[t._v("请选择您要发布的消息类型")]),t._v(" "),i("van-row",{staticClass:"padding-15-t"},t._l(t.categorys,function(e,s){return i("van-col",{key:"p"+s,attrs:{span:"6"}},[i("div",{staticClass:"cate-item",on:{click:function(i){t.onPublish(e)}}},[i("div",{staticClass:"thumb-wrap"},[i("img",{attrs:{src:e.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"title ellipsis"},[t._v(t._s(e.title))])])])}))],1)]),t._v(" "),i("van-popup",{staticClass:"bg-gray",attrs:{position:"bottom"},model:{value:t.catePopup,callback:function(e){t.catePopup=e},expression:"catePopup"}},[i("div",{staticClass:"title-parent padding-15-tb text-center font-14 bg-danger"},[t._v("选择"+t._s(t.categorySelected.title)+"子分类")]),t._v(" "),i("ul",{staticClass:"child-list"},t._l(t.categorySelected.child,function(e,s){return i("li",{key:"c"+s,staticClass:"van-hairline--bottom",on:{click:function(i){t.onPublish(e)}}},[t._v(t._s(e.title))])})),t._v(" "),i("div",{staticClass:"title-parent padding-15-tb text-center font-14 margin-10-t bg-default",on:{click:function(e){t.catePopup=!t.catePopup}}},[t._v("取消")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("i",{staticClass:"icon icon-store"}),this._v(" "),e("ul",{staticClass:"margin-10-l"},[e("li",{staticClass:"font-15 margin-5-b"},[this._v("我是商家，点击入驻")]),this._v(" "),e("li",{staticClass:"c-gray font-13"},[this._v("超低成本，帮您快速宣传店铺")])])])}]};var l=i("VU/8")(o,c,!1,function(t){i("TOHi")},null,null);e.default=l.exports}});
//# sourceMappingURL=83.b9dbaf8d1af52b98fb81.js.map