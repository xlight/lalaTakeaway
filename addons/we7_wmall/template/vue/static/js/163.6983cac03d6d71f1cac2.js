webpackJsonp([163],{kxbJ:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),a=e.n(i),o=e("Dd8w"),r=e.n(o),c=e("NYxO"),d=e("Cz8s"),n=e("RoZr"),l=e("Vr3d"),v={data:function(){return{preLoading:!0,cart:{},store:{is_rest:0,data:{shopPage:{}}},status:{cart_show:!0},shopPageItem:{},goods:[]}},components:{PublicHeader:d.a,StoreCart:n.a,GoodsHandle:l.a},methods:r()({},Object(c.b)(["replaceStore","replaceCart"]),{onLoad:function(){var t=this;if(!this.$route.query.sid||!this.$route.query.shopPageKey)return this.$toast("参数错误"),!1;this.sid=this.$route.query.sid,this.shopPageKey=this.$route.query.shopPageKey,this.util.request({url:"wmall/store/goods/shopPage",data:{sid:this.sid,shopPageKey:this.shopPageKey}}).then(function(s){t.preLoading=!1;var e=s.data.message;e.errno||(t.cart=e.message.cart.message.cart,t.replaceCart(t.cart),t.store=e.message.store,t.replaceStore(t.store),t.shopPageItem=e.message.store.data.shopPage[t.shopPageKey],t.goods=[].concat(a()(t.goods),a()(e.message.goods)))})}}),computed:r()({},Object(c.c)(["istore","icart"])),mounted:function(){this.onLoad()}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"shop-page"}},[e("public-header",{attrs:{title:"活动详情"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"banner"},[e("img",{attrs:{src:t.shopPageItem.thumb}})]),t._v(" "),e("div",{staticClass:"goods-list"},[t._l(t.goods,function(s){return e("div",{staticClass:"col-50 goods-item van-hairline--right van-hairline--bottom"},[e("div",{staticClass:"goods-info"},[e("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail?id="+s.id+"&sid="+t.store.id})}},[(1!=s.svip_status||s.discount_price>0)&&s.discount>0?e("div",{staticClass:"discount"},[e("div",[e("div",{staticClass:"icon icon-tag"}),t._v(" "+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份\n\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),e("img",{attrs:{src:s.thumb}})]),t._v(" "),e("div",{staticClass:"goods-name"},[t._v(t._s(s.title))]),t._v(" "),1!=s.svip_status||s.discount_price?e("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t已售"+t._s(s.sailed)+" "),e("div",[t._v("赞"+t._s(s.comment_good))])]):e("div",{staticClass:"svip-price-tips"},[e("div",{staticClass:"svip-price"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("span",{staticClass:"ellipsis"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),e("div",{staticClass:"svip-activity ellipsis"},[t._v("超级会员专享")])]),t._v(" "),e("div",{staticClass:"price"},[t._v("\n\t\t\t\t\t\t¥"),e("div",[t._v(t._s(s.price))])]),t._v(" "),s.old_price?e("div",{staticClass:"old-price"},[t._v("￥"+t._s(s.old_price))]):t._e(),t._v(" "),e("goods-handle",{attrs:{goods:s,optionId:0,from:"shopPageList"}})],1)])}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],2)]),t._v(" "),e("store-cart",{attrs:{show:1,store:t.store,cart:t.cart}}),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.preLoading?e("iloading"):t._e()],1)],1)},staticRenderFns:[]};var p=e("VU/8")(v,u,!1,function(t){e("uxXj")},null,null);s.default=p.exports},uxXj:function(t,s){}});