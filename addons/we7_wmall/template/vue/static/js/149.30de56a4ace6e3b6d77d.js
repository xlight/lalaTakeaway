webpackJsonp([149],{V5PX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{member:{},deliveryCard_setmeal_ok:0,agreement:"",agreementShow:!1}},components:{PublicHeader:a("Cz8s").a},methods:{onLoad:function(){var t=this;this.util.request({url:"deliveryCard/index"}).then(function(e){var a=e.data.message.message;t.member=a.member,t.deliveryCard_setmeal_ok=a.deliveryCard_setmeal_ok,t.agreement=a.agreement})},onChangePopup:function(){this.agreementShow=!this.agreementShow}},mounted:function(){this.onLoad()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"deliveryCard-index"}},[a("public-header",{attrs:{title:"会员中心"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"list-block media-list"},[a("ul",[a("li",[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[a("img",{attrs:{src:t.member.avatar}})]),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title-row"},[a("div",{staticClass:"item-title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.member.nickname)+"\n\t\t\t\t\t\t\t\t\t\t"),1==t.deliveryCard_setmeal_ok?a("img",{attrs:{src:"static/img/vip_effective.png",alt:""}}):a("img",{attrs:{src:"static/img/vip_deprecated.png",alt:""}})])]),t._v(" "),a("div",{staticClass:"item-subtitle"},[t._v("平台会员(免配送费)")])])])])])])]),t._v(" "),1==t.deliveryCard_setmeal_ok||t.member.setmeal_id>0?a("div",{staticClass:"card-img"},[a("img",{attrs:{src:"static/img/card-setmeal.png",alt:""}}),t._v(" "),a("div",{staticClass:"card-info"},[a("p",{staticClass:"use-date"},[t._v("会员期限："),a("span",[t._v(t._s(t.member.setmeal_starttime))]),t._v("至"),a("span",[t._v(t._s(t.member.setmeal_endtime))])]),t._v(" "),a("p",{staticClass:"use-times"},[t._v("每日可免费配送："),a("span",[t._v(t._s(t.member.setmeal_day_free_limit>0?t.member.setmeal_day_free_limit+"单":"不限单数"))])]),t._v(" "),t.member.setmeal_deliveryfee_free_limit>0?a("p",{staticClass:"use-times"},[t._v("每单最高减免配送费："),a("span",[t._v(t._s(t.member.setmeal_deliveryfee_free_limit)+"元")])]):a("p",{staticClass:"use-times"},[t._v("每单配送费全免")])])]):a("div",{staticClass:"card-img"},[a("img",{attrs:{src:"static/img/card.png"}})]),t._v(" "),a("div",{staticClass:"card-box"},[a("div",{staticClass:"left van-hairline--right"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/deliveryCard/power"})}},[a("img",{attrs:{src:"static/img/card-mian.png",alt:""}}),t._v(" "),a("p",[t._v("平台配送免配送费")])])],1),t._v(" "),t._m(0)]),t._v(" "),a("p",{staticClass:"card-agreement"},[a("a",{staticClass:"open-popup",on:{click:t.onChangePopup}},[a("van-icon",{staticClass:"icon",attrs:{name:"question-circle"}}),t._v("\n\t\t\t\t会员卡规则\n\t\t\t")],1)])]),t._v(" "),a("nav",{staticClass:"footer-bar"},[1==t.deliveryCard_setmeal_ok||t.member.setmeal_id>0?a("div",{staticClass:"pay-btn"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/deliveryCard/apply"})}},[t._v("马上续费")])],1):a("div",{staticClass:"pay-btn"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/deliveryCard/apply"})}},[t._v("开通会员")])],1)]),t._v(" "),a("van-popup",{staticClass:"agreement-popup",attrs:{position:"bottom"},model:{value:t.agreementShow,callback:function(e){t.agreementShow=e},expression:"agreementShow"}},[a("van-nav-bar",{staticClass:"border-0px",style:{background:"#ff2d4b",color:"#fff"},attrs:{title:"会员规则详解"},on:{"click-left":t.onChangePopup}},[a("van-icon",{staticClass:"font-20",style:{color:"#fff"},attrs:{slot:"left",name:"left"},slot:"left"})],1),t._v(" "),a("div",{staticClass:"popup-content margin-10",domProps:{innerHTML:t._s(t.agreement)}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("img",{attrs:{src:"static/img/card-more.png",alt:""}}),this._v(" "),e("p",[this._v("敬请期待")])])}]};var r=a("VU/8")(s,i,!1,function(t){a("dMXt")},null,null);e.default=r.exports},dMXt:function(t,e){}});