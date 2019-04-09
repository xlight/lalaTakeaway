webpackJsonp([26],{"9pDF":function(t,r){},YgVq:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("Cz8s"),i=e("CPNQ"),s={data:function(){return{showPreLoading:!0,order:{}}},components:{publicHeader:a.a},methods:{onLoad:function(){var t=this;this.util.request({url:"plateform/errander/order/detail",data:{id:this.$route.query.id}}).then(function(r){t.showPreLoading=!1;var e=r.data.message;e.errno?t.$toast(e.message):t.order=e.message.order})},onChangeOrderStatus:function(t,r){var e={order:t,type:r,from:"detail",vue:this};Object(i.a)(e)}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"paotui-detail"}},[e("public-header",{attrs:{title:"订单详情"}}),t._v(" "),e("div",{staticClass:"content"},[e("router-link",{staticClass:"order-log padding-15 bg-default font-15",attrs:{tag:"div",to:t.util.getUrl({path:"pages/plugin/paotui/log",query:{id:t.order.id}})}},[e("van-row",{staticClass:"flex-lr c-gray"},[e("van-col",{attrs:{span:"2"}},[e("div",{staticClass:"icon icon-waimai font-20 c-primary"})]),t._v(" "),t.order.log_current?e("van-col",{attrs:{span:"21"}},[e("div",{staticClass:"c-primary"},[t._v(t._s(t.order.log_current.title)+", 操作人: "+t._s(t.order.log_current.role_cn))]),t._v(" "),e("div",{staticClass:"font-13 margin-5-t"},[t._v(t._s(t.order.log_current.addtime_cn))])]):t._e(),t._v(" "),e("van-col",{attrs:{span:"1"}},[e("div",{staticClass:"icon icon-right "})])],1)],1),t._v(" "),e("div",{staticClass:"tip"},[t._v("订单配送")]),t._v(" "),e("div",{staticClass:"address bg-default"},[t.order.deliveryer_id>0?e("div",{staticClass:"type van-hairline--bottom c-gray font-15"},[t._v(t._s(t.order.delivery_collect_type_cn))]):t._e(),t._v(" "),e("div",{staticClass:"address-detail"},[e("div",{staticClass:"address-item buy flex-lr margin-15-b"},[t._m(0),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"ellipsis"},[t._v(t._s("buy"==t.order.order_type?"购买":"取货")+"地址："+t._s(t.order.buy_address))]),t._v(" "),"delivery"==t.order.order_type?e("div",{staticClass:"ellipsis margin-10-t c-gray font-14"},[t._v(t._s(t.order.buy_username)+" "+t._s(t.order.buy_mobile))]):t._e()])]),t._v(" "),e("div",{staticClass:"address-item accept flex-lr"},[t._m(1),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:" ellipsis"},[t._v("收货地址")]),t._v(" "),e("div",{staticClass:" ellipsis margin-10-t c-gray font-14"},[t._v("收货人："+t._s(t.order.accept_username)+" "+t._s(t.order.accept_mobile))])])])])]),t._v(" "),e("div",{staticClass:"telephone flex-lr bg-default margin-10-t padding-10-tb "},["delivery"==t.order.order_type?e("div",{staticClass:"tel-item van-hairline--right",on:{click:function(r){t.util.jsTel(t.order.buy_mobile)}}},[e("img",{attrs:{src:"static/img/store.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.order.buy_mobile))])]):t._e(),t._v(" "),e("div",{staticClass:"tel-item",on:{click:function(r){t.util.jsTel(t.order.accept_mobile)}}},[e("img",{attrs:{src:"static/img/customer.png",alt:""}}),t._v(" "),e("span",[t._v(t._s(t.order.accept_mobile))])])]),t._v(" "),t.order.deliveryer_id>0&&t.order.deliveryer?[e("div",{staticClass:"tip"},[t._v("配送员信息")]),t._v(" "),e("van-row",{staticClass:"deliveryer-info bg-default padding-15-lr padding-10-tb flex-lr"},[e("van-col",{attrs:{span:"4"}},[e("img",{attrs:{src:t.order.deliveryer.avatar,alt:""}})]),t._v(" "),e("van-col",{staticClass:"padding-10-l",attrs:{span:"12"}},[e("div",[t._v(t._s(t.order.deliveryer.title))]),t._v(" "),e("div",{staticClass:"c-gray font-14 margin-10-t "},[t._v(t._s(t.order.deliveryer.mobile))])]),t._v(" "),e("van-col",{staticClass:"text-right",attrs:{span:"4"}},[e("div",{staticClass:"icon icon-telephone font-18",on:{click:function(r){t.util.jsTel(t.order.deliveryer.mobile)}}})]),t._v(" "),e("van-col",{staticClass:"text-right",attrs:{span:"4"}},[e("router-link",{staticClass:"icon icon-location",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/plugin/paotui/location",query:{id:t.order.deliveryer.id}})}})],1)],1)]:t._e(),t._v(" "),e("div",{staticClass:"tip"},[t._v("货品信息")]),t._v(" "),e("van-cell-group",{staticClass:"goods-info"},[e("van-cell",{staticClass:"border-0px"},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v("配送时间："+t._s(t.order.delivery_time))])]),t._v(" "),e("div",{staticClass:"note"},[e("div",{staticClass:"left"},[t._v("备注:")]),t._v(" "),e("div",{staticClass:"right"},[t._v(t._s(t.order.note))])]),t._v(" "),e("div",{staticClass:"other padding-15-b font-14 c-gray"},[e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("物品名称")]),t._v(" "),e("div",[t._v(t._s(t.order.goods_name))])]),t._v(" "),t.order.goods_price>0?e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("物品预期价格")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.goods_price))])]):t._e(),t._v(" "),t.order.goods_weight>0?e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("物品重量")]),t._v(" "),e("div",[t._v(t._s(t.order.goods_weight)+"kg")])]):t._e(),t._v(" "),t.order.data&&t.order.data.order?[t._l(t.order.data.order.partData,function(r){return t.order.data.order.partData?[e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v(t._s(r.title))]),t._v(" "),"multipleChoices"==r.type?e("div",[t._l(r.value,function(r){return[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(" "+r)+"\n\t\t\t\t\t\t\t\t")]})],2):e("div",[t._v(t._s(r.value))])])]:t._e()})]:t._e()],2)],1),t._v(" "),t.order.thumbs&&t.order.thumbs.length>0?[e("div",{staticClass:"tip"},[t._v("顾客上传的图片")]),t._v(" "),e("van-row",{staticClass:"thumbs bg-default",attrs:{gutter:"10"}},t._l(t.order.thumbs,function(r,a){return e("van-col",{key:a,attrs:{span:"6"}},[e("div",{on:{click:function(r){t.util.jsPreviewImage(t.order.thumbs,a)}}},[e("img",{attrs:{src:r,alt:""}})])])}))]:t._e(),t._v(" "),t.order.data&&t.order.data.order?[t._l(t.order.data.order.thumbs,function(r){return t.order.data.order.thumbs?[e("div",{staticClass:"tip"},[t._v(t._s(r.title))]),t._v(" "),e("van-row",{staticClass:"thumbs bg-default",attrs:{gutter:"10"}},t._l(r.value,function(a,i){return e("van-col",{key:i,attrs:{span:"6"}},[e("div",{on:{click:function(e){t.util.jsPreviewImage(r.value,i)}}},[e("img",{attrs:{src:a,alt:""}})])])}))]:t._e()})]:t._e(),t._v(" "),t.order.extra_fee&&t.order.extra_fee.length>0?[e("div",{staticClass:"tip"},[t._v("附加服务")]),t._v(" "),e("van-cell-group",{staticClass:"order-info"},[t._l(t.order.extra_fee,function(t){return[e("van-cell",{staticClass:"border-0px",attrs:{title:t.title,value:t.text}})]})],2)]:t._e(),t._v(" "),e("div",{staticClass:"tip"},[t._v("订单信息")]),t._v(" "),e("van-cell-group",{staticClass:"order-info"},[e("van-cell",{staticClass:"border-0px",attrs:{title:"订单编号",value:t.order.order_sn}}),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"下单时间",value:t.order.addtime_cn}}),t._v(" "),e("van-cell",{attrs:{title:"支付方式",value:t.order.pay_type_cn}})],1),t._v(" "),e("div",{staticClass:"tip"},[t._v("订单收入")]),t._v(" "),e("van-cell-group",{staticClass:"goods-info"},[e("div",{staticClass:"other padding-15-b font-14 c-gray"},[e("div",{staticClass:"other-item margin-15-lr padding-15-t flex-lr"},[e("div",[t._v("配送费")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.delivery_fee))])]),t._v(" "),e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("小费")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.delivery_tips))])]),t._v(" "),t._e(),t._v(" "),e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("合计")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.total_fee))])]),t._v(" "),e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("优惠")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.discount_fee))])]),t._v(" "),e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("顾客实付")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.final_fee))])]),t._v(" "),e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("代理商收入")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.plateform_serve_fee))])]),t._v(" "),t.order.agentid>0?[e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("平台服务佣金(平台收取代理商)")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.agent_serve_fee))])]),t._v(" "),e("div",{staticClass:"other-item margin-15-lr margin-15-t flex-lr"},[e("div",[t._v("代理商实际收入")]),t._v(" "),e("div",[t._v("¥"+t._s(t.order.agent_final_fee))])])]:t._e()],2)]),t._v(" "),e("van-row",{staticClass:"btn-group bg-default"},[t.order.status<3?[1==t.order.status?e("van-col",{attrs:{span:"8"}},[e("router-link",{staticClass:"btn-item bg-primary",attrs:{tag:"div",to:t.util.getUrl({path:"pages/plugin/paotui/dispatch",query:{id:t.order.id}})}},[t._v("调度")]),t._v(" "),e("div",{staticClass:"btn-item bg-primary",on:{click:function(r){t.onChangeOrderStatus(t.order,"dispatch")}}},[t._v("调度")])],1):t._e(),t._v(" "),2==t.order.status?e("van-col",{attrs:{span:"8"}},[e("router-link",{staticClass:"btn-item bg-primary",attrs:{tag:"div",to:t.util.getUrl({path:"pages/plugin/paotui/dispatch",query:{id:t.order.id}})}},[t._v("重新调度")])],1):t._e(),t._v(" "),2==t.order.status?e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"btn-item bg-primary",on:{click:function(r){t.onChangeOrderStatus(t.order,"end")}}},[t._v("完成订单")])]):t._e(),t._v(" "),1==t.order.is_pay&&"delivery"!=t.order.pay_type?e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"btn-item bg-danger",on:{click:function(r){t.onChangeOrderStatus(t.order,"cancel_refund")}}},[t._v("取消订单并退款")])]):e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"btn-item bg-danger",on:{click:function(r){t.onChangeOrderStatus(t.order,"cancel")}}},[t._v("取消订单")])])]:t._e(),t._v(" "),1==t.order.refund_status?e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"btn-item bg-danger",on:{click:function(r){t.onChangeOrderStatus(t.order,"refund_handle")}}},[t._v("发起退款")]),t._v(" "),e("div",{staticClass:"btn-item bg-danger",on:{click:function(r){t.onChangeOrderStatus(t.order,"refund_status")}}},[t._v("已退款")])]):2==t.order.refund_status?e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"btn-item bg-primary",on:{click:function(r){t.onChangeOrderStatus(t.order,"refund_query")}}},[t._v("查询退款进度")]),t._v(" "),e("div",{staticClass:"btn-item bg-danger",on:{click:function(r){t.onChangeOrderStatus(t.order,"refund_status")}}},[t._v("已退款")])]):t._e()],2)],2),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"left"},[r("div",{staticClass:"circle"})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"left"},[r("div",{staticClass:"circle"})])}]};var d=e("VU/8")(s,l,!1,function(t){e("9pDF")},null,null);r.default=d.exports}});