webpackJsonp([155],{PV9N:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),a=e.n(i),r={data:function(){return{sid:Number,activity:{},store:{},hot_goods:[],value:0,showPreLoading:!0}},methods:{onLoad:function(){var t=this;this.util.request({url:"wmall/store/share",data:{sid:this.sid}}).then(function(s){t.showPreLoading=!1;var e=s.data.message;e.errno||(t.activity=e.message.activity,t.store=e.message.store,t.hot_goods=[].concat(a()(t.hot_goods),a()(e.message.hot_goods)),t.value=e.message.store.score,t.util.setWXTitle(t.store.title))})}},created:function(){this.$route.query.sid&&(this.sid=this.$route.query.sid)},mounted:function(){this.onLoad()}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"store-share"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"store-wrapper"},[e("div",{staticClass:"store-logo-wrapper"},[e("div",{staticClass:"store-logo"},[e("img",{attrs:{src:t.store.logo,alt:""}})])]),t._v(" "),e("div",{staticClass:"store-comment-info"},[e("h3",{staticClass:"store-title"},[t._v(t._s(t.store.title))]),t._v(" "),e("div",{staticClass:"store-comment"},[e("div",{staticClass:"comment-center"},[e("van-rate",{attrs:{color:"#ff2b4d"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),t._v(" "),e("span",{staticClass:"customer-score"},[t._v(" "+t._s(t.store.score))])],1)]),t._v(" "),e("div",{staticClass:"delivery-info"},[t._v("\n\t\t\t\t\t\t起送价￥"+t._s(t.store.send_price)+"\n\t\t\t\t\t\t  |  配送费￥"+t._s(t.store.delivery_price)+"\n\t\t\t\t\t\t  |  "+t._s(t.store.delivery_time)+"分钟\n\t\t\t\t\t")])]),t._v(" "),t.activity&&t.activity.num>0?e("div",{staticClass:"activity-container"},[t._l(t.activity.items,function(s,i){return e("div",{staticClass:"tags",class:"tags-"+s.type},[e("div",{staticClass:"icon-b"},[e("img",{attrs:{src:"static/img/"+s.type+"_b.png"}})]),t._v("\n\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t")])}),t._v(" "),t.store.delivery_free_price>0?e("div",{staticClass:"tags"},[t._v("\n\t\t\t\t\t\t满"+t._s(t.store.delivery_free_price)+"元免配送费\n\t\t\t\t\t")]):t._e(),t._v(" "),t.activity.hot_goods?e("div",{staticClass:"tags"},[t._v("\n\t\t\t\t\t\t热销:"),t._l(t.activity.hot_goods,function(s,i){return e("span",[t._v(t._s(s.goods))])})],2):t._e()],2):t._e()]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"goods"},[e("div",{staticClass:"best-seller"},[e("h3",{staticClass:"best-seller-title"},[t._v("热销商品")]),t._v(" "),e("ul",{staticClass:"best-seller-list"},t._l(t.hot_goods,function(s,i){return e("li",{staticClass:"col-33"},[e("router-link",{attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id,goods_id:s.id}})}},[e("div",{staticClass:"best-seller-img"},[e("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),e("span",{staticClass:"seller-item-name"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"seller-item-sale"},[t._v("已售"+t._s(s.sailed))]),t._v(" "),e("div",{staticClass:"seller-item-price"},[t._v("\n\t\t\t\t\t\t\t\t\t￥\n\t\t\t\t\t\t\t\t\t"),e("span",{staticClass:"price"},[t._v(t._s(s.price))])])])],1)}),0)])])])]),t._v(" "),e("div",{staticClass:"bar-tab"},[e("router-link",{staticClass:"bar-tab-a",attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.store.id}})}},[t._v("进店购买")])],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"dotted-area"},[s("span",{staticClass:"circle circle-left"}),this._v(" "),s("span",{staticClass:"circle circle-right"}),this._v(" "),s("span",{staticClass:"dotted-line"})])}]};var l=e("VU/8")(r,o,!1,function(t){e("mONq")},null,null);s.default=l.exports},mONq:function(t,s){}});