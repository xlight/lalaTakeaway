webpackJsonp([14],{YHZq:function(e,a){},m1Xp:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v=t("Cz8s"),i=t("deIj"),s={data:function(){return{id:0,showPreLoading:!0,current:{},getcash_log:{}}},components:{publicHeader:v.a},methods:{onLoad:function(){var e=this,a=this;Object(i.a)({vue:a,url:"delivery/finance/current/detail",data:{id:a.id},success:function(t){e.current=a.util.extend(e.current,t.current),t.getcash_log&&(e.getcash_log=a.util.extend(e.getcash_log,t.getcash_log))}})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},_={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"current-detail"}},[t("public-header",{attrs:{title:"交易详情"}}),e._v(" "),t("div",{staticClass:"content"},[t("div",{staticClass:"van-form-preview"},[t("div",{staticClass:"van-form-preview__hd"},[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("变动金额")]),e._v(" "),t("div",{staticClass:"van-form-preview__value_in-hd",class:{"c-primary":e.current.fee>0,"c-danger":e.current.fee<0}},[e._v(e._s(e.current.fee))])])]),e._v(" "),t("div",{staticClass:"van-form-preview__bd"},[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("交易类型")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.current.trade_type_cn))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("变动后账户余额")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v("￥"+e._s(e.current.amount))])]),e._v(" "),1==e.current.trade_type?[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("订单号")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.current.extra))])])]:2==e.current.trade_type?[e.getcash_log?[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("订单号")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcash_log.trade_no))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("提现金额")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcash_log.get_fee))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("手续费")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcash_log.take_fee))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("实际到账")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcash_log.final_fee))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("开始时间")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.getcash_log.addtime_cn))])]),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("提现状态")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(1==e.getcash_log.status?"申请成功":"申请中"))])])]:e._e()]:e._e(),e._v(" "),t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("变动时间")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.current.addtime_cn))])]),e._v(" "),e.current.remark?[t("div",{staticClass:"van-form-preview__item"},[t("div",{staticClass:"van-form-preview__label"},[e._v("备注")]),e._v(" "),t("div",{staticClass:"van-form-preview__value"},[e._v(e._s(e.current.remark))])])]:e._e()],2)])]),e._v(" "),e.showPreLoading?t("iloading"):e._e()],1)},staticRenderFns:[]};var r=t("VU/8")(s,_,!1,function(e){t("YHZq")},null,null);a.default=r.exports}});