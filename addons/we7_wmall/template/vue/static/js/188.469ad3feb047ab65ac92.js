webpackJsonp([188],{"S/jC":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),o=e.n(i),a=e("NYxO"),r=e("Cz8s"),d=e("RoZr"),n=e("Vr3d"),c={data:function(){return{preLoading:!0,cart:{},store:{},goodsActive:{},table:{}}},components:{PublicHeader:r.a,StoreCart:d.a,GoodsHandle:n.a},methods:o()({},Object(a.b)(["replaceStore","replaceCart"]),{onLoad:function(){var t=this;return this.$route.query.sid?(this.sid=this.$route.query.sid,this.$route.query.id?(this.id=this.$route.query.id,this.$route.query.table_id?(this.table_id=this.$route.query.table_id,this.order_id=this.$route.query.order_id||0,void this.util.request({url:"wmall/store/table/detail",data:{sid:this.sid,id:this.id,table_id:this.table_id}}).then(function(s){t.preLoading=!1;var e=s.data.message;if(!e.errno){var i=(e=e.message).goodsDetail;t.goodsActive=i,t.cart=e.cart.message.cart,t.store=e.store,t.table=e.table,t.table.jiacai_id=t.order_id,t.replaceStore(e.store),t.replaceCart(e.cart.message.cart)}})):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)):(this.$toast("参数错误"),!1)}}),computed:o()({},Object(a.c)(["istore","icart"])),mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods-detail"}},[e("public-header",{attrs:{title:"商品详情",textcolor:"#fff"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"goods-img"},[t.goodsActive.slides&&!t.goodsActive.slides.length?e("img",{attrs:{src:t.goodsActive.thumb_,alt:""}}):e("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(t.goodsActive.slides,function(t,s){return e("van-swipe-item",{key:s,attrs:{ss:""}},[e("img",{attrs:{src:t,alt:""}})])}),1)],1),t._v(" "),e("div",{staticClass:"goods-name"},[t._v(t._s(t.goodsActive.title))]),t._v(" "),e("div",{staticClass:"sell-info"},[t._v("已售"+t._s(t.goodsActive.sailed)+"  好评"+t._s(t.goodsActive.comment_good))]),t._v(" "),e("div",{staticClass:"goods-num"},[e("van-row",[e("van-col",{staticClass:"price",attrs:{span:"12"}},[t._v("¥ "),e("span",{staticClass:"fee"},[t._v(t._s(t.goodsActive.price))]),t.goodsActive.unitnum>1?e("span",{staticClass:"goods-unitnum"},[t._v(t._s(t.goodsActive.unitnum)+"份起购")]):t._e()]),t._v(" "),e("goods-handle",{attrs:{goods:t.goodsActive,optionId:0,from:"detail",type:"table",table:t.table}})],1)],1),t._v(" "),e("div",{staticClass:"goods-evaluate"},[t._v("商品评价")]),t._v(" "),e("div",{staticClass:"praise text-center"},[t._v("\n\t\t\t好评率\n\t\t\t"),e("span",{staticClass:"rate"},[t._v(t._s(t.goodsActive.comment_good_percent))]),t._v(" "),e("span",{staticClass:"num"},[t._v("(共"+t._s(t.goodsActive.comment_total)+"人评价)")])]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress-active",style:{width:t.goodsActive.comment_good_percent}})])]),t._v(" "),e("div",{staticClass:"goods-desc"},[t._v("商品描述")]),t._v(" "),e("div",{staticClass:"goods-desc-con",domProps:{innerHTML:t._s(t.goodsActive.description)}}),t._v(" "),t._m(0)]),t._v(" "),e("router-link",{staticClass:"into-store",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id}})}},[t._v("\n\t\t进入店铺\n\t")]),t._v(" "),e("store-cart",{attrs:{show:!0,store:t.store,from:"table",table:t.table}}),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.preLoading?e("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tips"},[this._v("\n\t\t\t温馨提示: 图片仅供参考,请以实物为准;"),s("br"),this._v("\n\t\t\t高峰时段及恶劣天气,请提前下单\n\t\t")])}]};var v=e("VU/8")(c,l,!1,function(t){e("wPy6")},null,null);s.default=v.exports},wPy6:function(t,s){}});