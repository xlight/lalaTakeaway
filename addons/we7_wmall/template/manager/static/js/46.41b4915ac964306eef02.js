webpackJsonp([46],{R7qQ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Cz8s"),a=i("deIj"),r={data:function(){return{id:0,showPreLoading:!0,order:{final_fee:0,order_sn:"",pay_type_cn:"",total_fee:"",no_discount_part:"",discount_fee:"",plateform_serve_fee:"",store_final_fee:""}}},components:{publicHeader:s.a},methods:{onLoad:function(){Object(a.a)({vue:this,data:{id:this.id},autoAssign:!0,variable:"order",url:"manage/paybill/index/detail"})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"paybill-detail"}},[i("public-header",{attrs:{title:"账单详情"}}),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"paybill-item"},[i("div",{staticClass:"paybill-title flex-lr border-1px-b"},[i("div",{staticClass:"member-pay"},[e._v("顾客支付金额")]),e._v(" "),i("div",{staticClass:"price"},[e._v("¥"+e._s(e.order.final_fee))])]),e._v(" "),i("div",{staticClass:"paybill-info"},[i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("订单号")]),e._v(" "),i("div",[e._v(e._s(e.order.order_sn))])]),e._v(" "),i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("支付方式")]),e._v(" "),i("div",[e._v(e._s(e.order.pay_type_cn))])]),e._v(" "),i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("消费总额")]),e._v(" "),i("div",[e._v("￥"+e._s(e.order.total_fee))])]),e._v(" "),i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("不参与优惠金额")]),e._v(" "),i("div",[e._v("￥"+e._s(e.order.no_discount_part>0?e.order.no_discount_part:"0.00"))])]),e._v(" "),i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("优惠金额")]),e._v(" "),i("div",[e._v("￥"+e._s(e.order.discount_fee>0?e.order.discount_fee:"0.00"))])]),e._v(" "),i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("平台抽取佣金")]),e._v(" "),i("div",[e._v("￥"+e._s(e.order.plateform_serve_fee))])]),e._v(" "),i("div",{staticClass:"flex-lr paybill-text"},[i("div",[e._v("商户预计收入")]),e._v(" "),i("div",[e._v("￥"+e._s(e.order.store_final_fee))])])])])]),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)},staticRenderFns:[]};var d=i("VU/8")(r,l,!1,function(e){i("i6nV")},null,null);t.default=d.exports},i6nV:function(e,t){}});
//# sourceMappingURL=46.41b4915ac964306eef02.js.map