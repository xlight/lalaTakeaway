webpackJsonp([158],{clg3:function(t,s){},oQKV:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("deIj"),i={data:function(){return{showPreLoading:!0,meals:[],member:{},select:{index:0,meal:{}}}},methods:{onLoad:function(t){var s=this;Object(a.a)({vue:s,url:"svip/index/meal",data:{},success:function(t){s.meals=t.meals,s.member=t.member,s.select.meal=s.meals[0]}})},onSelectMeal:function(t){this.select.meal=this.meals[t]}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"svip-purchase"}},[e("div",{staticClass:"content"},[e("header",{staticClass:"header"},[e("div",{staticClass:"user"},[e("img",{staticClass:"avatar",attrs:{src:t.member.avatar,alt:""}}),t._v(" "),e("div",[e("div",{staticClass:"info"},[e("span",[t._v(t._s(t.member.nickname))]),t._v(" "),e("span",[t._v("（"+t._s(t.member.mobile)+"）")])]),t._v(" "),e("div",{staticClass:"svip"},[e("span",[t._v("您还不是超级会员")])])])])]),t._v(" "),e("div",{staticClass:"wrapper-item"},[t._m(0),t._v(" "),e("section",{staticClass:"item-list"},t._l(t.meals,function(s,a){return e("div",{key:a,staticClass:"container",class:{active:t.select.index==a}},[e("div",{staticClass:"div-all"},[e("header",{staticClass:"header-body"},[e("h4",[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"nums"},[e("span",{staticClass:"yuan"},[e("span",[t._v("￥")]),t._v(t._s(s.price)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("del",[t._v(t._s(s.oldprice))])])])]),t._v(" "),s.description?e("span",{staticClass:"tag"},[t._v(t._s(s.description))]):t._e(),t._v(" "),t._e()])])})),t._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"会员抵扣红包","is-link":"",value:"无抵扣红包"}})],1)],1),t._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"免费送最高7个月会员","is-link":"",label:"办饿了么联名卡送会员，更有百元红包"}}),t._v(" "),e("van-cell",{attrs:{title:"使用兑换码兑换会员","is-link":""}})],1),t._v(" "),e("section",{staticClass:"description"},[e("router-link",{attrs:{to:""}},[t._v("自动续费服务条款")]),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("router-link",{attrs:{to:""}},[t._v("会员特权说明")])],1),t._v(" "),e("div",{staticClass:"bottomBar"},[e("div",{staticClass:"allprice"},[e("div",{staticClass:"total"},[t._v("\n\t\t\t\t\t总价\n\t\t\t\t\t"),e("span",[t._v("￥"),e("span",[t._v(t._s(t.select.meal.price))])]),t._v(" "),e("del",[t._v(t._s(t.select.meal.oldprice))])])]),t._v(" "),e("button",[t._v("立即开通")])])],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("header",{staticClass:"header-title"},[s("h3",{staticClass:"title"},[this._v("\n\t\t\t\t\t选择优惠套餐\n\t\t\t\t\t"),s("span",{staticClass:"sub-title"},[s("span",[this._v("会员测试期，购买")]),this._v(" "),s("span",{staticClass:"offer"},[this._v("5折起")])])])])}]};var n=e("VU/8")(i,l,!1,function(t){e("clg3")},null,null);s.default=n.exports}});
//# sourceMappingURL=158.58a0efd3f41d531e7cd1.js.map