webpackJsonp([61],{NSVi:function(e,t){},Npin:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{member:{}}},components:{PublicHeader:i("Cz8s").a},methods:{onLoad:function(){var e=this;this.util.request({url:"deliveryCard/index/power"}).then(function(t){var i=t.data.message.message;e.member=i.member})}},mounted:function(){this.onLoad()}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"deliveryCard-power"}},[i("public-header",{attrs:{title:"配送会员卡"}}),e._v(" "),i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",{staticClass:"tequan-info"},[e._v("特权说明")]),e._v(" "),i("ul",{staticClass:"tequan-list"},[i("li",[e._v("仅支持平台配送商户使用")]),e._v(" "),i("li",[e._v("下单配送费直接扣除")]),e._v(" "),e.member.setmeal_day_free_limit>0?i("li",[e._v("每日仅限"+e._s(e.member.setmeal_day_free_limit)+"单享受特权")]):i("li",[e._v("每日不限次享受特权")]),e._v(" "),e.member.setmeal_deliveryfee_free_limit>0?i("li",[e._v("每单最高减免配送费"+e._s(e.member.setmeal_deliveryfee_free_limit)+"元")]):i("li",[e._v("免费送金额不设限制")])]),e._v(" "),i("div",{staticClass:"card-button"},[i("router-link",{staticClass:"button-round",attrs:{to:e.util.getUrl({path:"/pages/home/index"})}},[e._v("现在去购物")])],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tequan-pic"},[t("img",{attrs:{src:"static/img/card-privilege.jpg",alt:""}})])}]};var s=i("VU/8")(a,r,!1,function(e){i("NSVi")},null,null);t.default=s.exports}});
//# sourceMappingURL=61.3c2753835ded6c131b77.js.map