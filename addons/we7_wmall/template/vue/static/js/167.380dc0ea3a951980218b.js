webpackJsonp([167],{vUg5:function(t,a){},wIgR:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=s("Cz8s"),i=s("deIj"),e=s("MJLE"),o=s.n(e),d={components:{PublicHeader:r.a},data:function(){return{id:0,order:{goods:{},store:{}},showPreLoading:!0}},methods:{onLoad:function(){var t=this;Object(i.a)({vue:t,url:"gohome/order/detail",data:{id:t.id},autoAssign:!0,variable:"order",success:function(a){t.newQrcode(a.qrcode)}})},newQrcode:function(t){new o.a("qrcode",{width:150,height:150,text:t,image:""})}},mounted:function(){this.$route.query&&this.$route.query.id&&(this.id=this.$route.query.id),this.onLoad()}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"kanjia-order-detail"}},[s("public-header",{attrs:{title:"订单详情"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"content-scroll"},[s("div",{staticClass:"margin-15 font-14 flex-lr"},[s("div",{staticClass:"c-gray"},[t._v("到店核销")]),t._v(" "),s("div",{staticClass:"c-danger"},[t._v(t._s(t.order.status_cn))])]),t._v(" "),s("div",{staticClass:"goods-info margin-15 padding-15 bg-default radius-3"},[s("div",{staticClass:"flex"},[s("i",{staticClass:"icon icon-store font-18"}),t._v(" "),s("span",{staticClass:"font-14 margin-10-l font-500"},[t._v(t._s(t.order.store.title))])]),t._v(" "),s("router-link",{staticClass:"padding-15-t flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/"+t.order.order_type+"/detail",query:{id:t.order.goods.id}})}},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:t.order.goods.thumb,alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[s("p",[t._v(t._s(t.order.goods.name))]),t._v(" "),s("div",{staticClass:"flex-lr w-100"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"c-danger font-16 font-500"},[t._v("¥"+t._s(t.order.final_fee))]),t._v(" "),s("div",{staticClass:"c-gray font-12 line-through margin-10-l"},[t._v("¥"+t._s(t.order.goods.oldprice))])]),t._v(" "),s("span",{staticClass:"c-gray"},[t._v("x"+t._s(t.order.num))])])])])],1),t._v(" "),s("div",{staticClass:"margin-15 padding-15 bg-default radius-3 "},[s("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[t._v("费用信息")]),t._v(" "),s("div",{staticClass:"padding-15-b van-hairline--bottom font-13"},[s("div",{staticClass:"margin-15-t flex-lr"},[s("div",{staticClass:"c-gray"},[t._v("商品费用")]),t._v(" "),s("div",[t._v("¥"+t._s(t.order.final_fee))])]),t._v(" "),t._e()],2),t._v(" "),s("div",{staticClass:"padding-15-t flex-lr font-14"},[s("div",{staticClass:"c-gray"},[t._v("实付款")]),t._v(" "),s("div",{staticClass:"c-danger"},[t._v("¥"+t._s(t.order.final_fee))])])]),t._v(" "),s("div",{staticClass:"margin-15 padding-15 bg-default radius-3 font-13"},[s("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[t._v("核销使用")]),t._v(" "),t._e(),t._v(" "),s("div",{staticClass:"margin-10-t flex-lr"},[s("div",{staticClass:"c-gray"},[t._v("核销数量")]),t._v(" "),s("div",[t._v(t._s(t.order.num))])]),t._v(" "),t._m(2),t._v(" "),"pintuan"!=t.order.order_type||"pintuan"==t.order.order_type&&t.order.status>=3?[s("div",{staticClass:"margin-10-t"},[s("div",{staticClass:"qrcode",attrs:{id:"qrcode"}}),t._v(" "),s("p",{staticClass:"text-center font-12 margin-10-t"},[t._v("核销码: "+t._s(t.order.code))])]),t._v(" "),s("p",{staticClass:"margin-10-t c-gray text-center"},[t._v("请商家扫描二维码或者填写核销码即可消费")])]:t._e()],2),t._v(" "),s("div",{staticClass:"margin-15 padding-15 bg-default radius-3 font-13"},[s("div",{staticClass:"padding-15-b van-hairline--bottom font-14"},[t._v("订单信息")]),t._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[t._v("订单编号")]),t._v(" "),s("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.ordersn))])],1),t._v(" "),1==t.order.is_pay?s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[t._v("支付方式")]),t._v(" "),s("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.pay_type_cn))])],1):t._e(),t._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[t._v("下单时间")]),t._v(" "),s("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.addtime_cn))])],1),t._v(" "),1==t.order.is_pay?s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[t._v("支付时间")]),t._v(" "),s("van-col",{attrs:{span:"18"}},[t._v(t._s(t.order.paytime_cn))])],1):t._e(),t._v(" "),s("van-row",{staticClass:"c-gray margin-10-t"},[s("van-col",{attrs:{span:"6"}},[t._v("买家备注")]),t._v(" "),s("van-col",{staticClass:"line-12",attrs:{span:"18"}},[t._v(t._s(t.order.buyremark?t.order.buyremark:"无"))])],1)],1)]),t._v(" "),s("ul",{staticClass:"fix-bottom van-hairline--top"},[t.order.order_type_all?s("router-link",{attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/"+t.order.order_type+"/index"})}},[t._v("查看更多"+t._s(t.order.order_type_all.text)+"活动")]):t._e(),t._v(" "),"pintuan"==t.order.order_type&&t.order.team_id>0?s("router-link",{attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/pintuan/share",query:{id:t.order.goods_id,team_id:t.order.team_id}})}},[t._v("拼团详情")]):t._e(),t._v(" "),0==t.order.is_pay?[1==t.order.status?s("li",{on:{click:function(a){t.util.jspost({url:"gohome/order/cancel",data:{id:t.order.id}})}}},[t._v("取消订单")]):t._e(),t._v(" "),1==t.order.status?s("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:t.order.id,order_type:"gohome"}})}},[t._v("立即支付")]):t._e()]:1==t.order.is_pay?[5==t.order.status?s("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/comment/comment",query:{order_id:t.order.id}})}},[t._v("立即评价")]):t._e()]:t._e()],2)]),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"margin-10-t flex-lr"},[a("div",{staticClass:"c-gray"},[this._v("新客立减")]),this._v(" "),a("div",[this._v("-¥10")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"margin-10-t flex-lr"},[a("div",{staticClass:"c-gray"},[this._v("红包")]),this._v(" "),a("div",[this._v("-¥5")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"margin-10-t flex-lr hide"},[a("div",{staticClass:"c-gray"},[this._v("核销密码")]),this._v(" "),a("input",{staticClass:"text-right",attrs:{type:"text",placeholder:"请输入核销密码"}})])}]};var l=s("VU/8")(d,n,!1,function(t){s("vUg5")},null,null);a.default=l.exports}});