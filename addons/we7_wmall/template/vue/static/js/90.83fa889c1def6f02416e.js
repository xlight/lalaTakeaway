webpackJsonp([90],{G5gx:function(t,s){},by15:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Gu7T"),i=e.n(a),r={data:function(){return{adv:[],goods:[],goods_credit2:[],goods_redpacket:[],category:[],member:{}}},components:{PublicHeader:e("Cz8s").a},methods:{onLoad:function(){var t=this;this.util.request({url:"creditshop/index"}).then(function(s){var e=s.data.message;e.errno?t.util.$toast(e.message):(e=e.message,t.adv=[].concat(i()(t.adv),i()(e.adv)),t.goods=[].concat(i()(t.goods),i()(e.goods)),t.goods_credit2=[].concat(i()(t.goods_credit2),i()(e.goods_credit2)),t.goods_redpacket=[].concat(i()(t.goods_redpacket),i()(e.goods_redpacket)),t.category=[].concat(i()(t.category),i()(e.category)),t.member=e.member)})}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"creditshop-index"}},[e("public-header",{attrs:{title:"积分商城"}}),t._v(" "),e("div",{staticClass:"content"},[t.adv.length>0?e("van-swipe",{attrs:{autoplay:3e3}},t._l(t.adv,function(s,a){return e("van-swipe-item",{key:a},[e("router-link",{attrs:{tag:"div",to:t.util.getUrl({path:"item.link"})}},[e("img",{attrs:{src:s.thumb,alt:""}})])],1)})):t._e(),t._v(" "),e("div",{staticClass:"menu"},[e("a",{staticClass:"ellipsis van-hairline--right"},[e("van-icon",{attrs:{name:"jifen"}}),t._v("\n\t\t\t\t积分\n\t\t\t\t"),t.member.credit1?[t._v("\n\t\t\t\t\t"+t._s(t.member.credit1)+"\n\t\t\t\t")]:t._e()],2),t._v(" "),e("router-link",{staticClass:"ellipsis",attrs:{to:t.util.getUrl({path:"/pages/creditshop/list"})}},[e("van-icon",{attrs:{name:"sortlight"}}),t._v("兑换记录")],1)],1),t._v(" "),t.category.length>0?e("div",{staticClass:"cell-group"},t._l(t.category,function(s,a){return e("div",{key:a,staticClass:"col"},[e("router-link",{attrs:{tag:"div",to:t.util.getUrl({path:"/pages/creditshop/goods",query:{category_id:s.id}})}},[e("div",{staticClass:"img"},[e("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"text ellipsis"},[t._v(t._s(s.name))])])],1)})):t._e(),t._v(" "),t.goods.length>0?e("div",{staticClass:"cell-group border-1px-b"},[e("a",[e("van-icon",{attrs:{name:"gifts"}}),t._v("积分实物兑换")],1)]):t._e(),t._v(" "),t.goods.length>0?e("div",{staticClass:"goods-group"},t._l(t.goods,function(s,a){return e("router-link",{key:a,staticClass:"goods-item",attrs:{to:t.util.getUrl({path:"/pages/creditshop/goodsDetail",query:{id:s.id}})}},[e("div",{staticClass:"image"},[e("img",{attrs:{src:s.thumb}})]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"name"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"price-item"},[e("span",{staticClass:"num"},[t._v(t._s(s.use_credit1))]),e("span",{staticClass:"text"},[t._v("积分")]),t._v(" "),s.use_credit2>0?e("span",{staticClass:"num"},[t._v("+ ¥"+t._s(s.use_credit2))]):t._e()]),t._v(" "),e("div",{staticClass:"exchange"},[t._v("兑换")])])])])})):t._e(),t._v(" "),t.goods_credit2.length?e("div",{staticClass:"cell-group border-1px-b"},[e("a",[e("van-icon",{attrs:{name:"gifts"}}),t._v("积分兑换余额")],1)]):t._e(),t._v(" "),t.goods_credit2.length?e("div",{staticClass:"goods-group line"},t._l(t.goods_credit2,function(s,a){return e("router-link",{key:a,staticClass:"goods-item-external border-1px-b",attrs:{to:t.util.getUrl({path:"/pages/creditshop/goodsDetail",query:{id:s.id}})}},[e("div",{staticClass:"image"},[e("img",{attrs:{src:s.thumb}})]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"name"},[t._v(t._s(s.credit2))]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"price-item"},[e("span",{staticClass:"num"},[t._v(t._s(s.use_credit1))]),e("span",{staticClass:"text"},[t._v("积分")]),t._v(" "),s.use_credit2>0?e("span",{staticClass:"num"},[t._v("+¥"+t._s(s.use_credit2))]):t._e()]),t._v(" "),e("div",{staticClass:"exchange"},[t._v("兑换")])])])])})):t._e(),t._v(" "),t.goods_redpacket.length>0?e("div",{staticClass:"cell-group border-1px-b"},[e("a",[e("van-icon",{attrs:{name:"gifts"}}),t._v("积分兑换红包")],1)]):t._e(),t._v(" "),t.goods_redpacket.length>0?e("div",{staticClass:"goods-group line"},t._l(t.goods_redpacket,function(s,a){return e("router-link",{key:a,staticClass:"goods-item-external border-1px-b",attrs:{to:t.util.getUrl({path:"/pages/creditshop/goodsDetail",query:{id:s.id}})}},[e("div",{staticClass:"image"},[e("img",{attrs:{src:s.thumb}})]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"name"},[t._v(t._s(s.redpacket.name))]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"price-item"},[e("span",{staticClass:"num"},[t._v(t._s(s.use_credit1))]),e("span",{staticClass:"text"},[t._v("积分")]),t._v(" "),s.use_credit2>0?e("span",{staticClass:"num"},[t._v("+¥"+t._s(s.use_credit2))]):t._e()]),t._v(" "),e("div",{staticClass:"exchange"},[t._v("兑换")])])])])})):t._e()],1)],1)},staticRenderFns:[]};var o=e("VU/8")(r,c,!1,function(t){e("G5gx")},null,null);s.default=o.exports}});
//# sourceMappingURL=90.83fa889c1def6f02416e.js.map