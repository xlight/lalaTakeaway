webpackJsonp([141],{NDMQ:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Vr3d"),e=a("Cz8s"),c=a("+TmT"),n={components:{PublicHeader:e.a,GoodsHandle:i.a,Uploader:c.a},data:function(){return{activeNames:["1"],radio:1}},methods:{onRead:function(t){}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"ordergrant-refund"}},[a("public-header",{attrs:{title:"订单退款",bgcolor:"#ff2d4b"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"cause"},[t._v("退款原因")]),t._v(" "),a("div",{staticClass:"cause-inner"},[a("van-collapse",{model:{value:t.activeNames,callback:function(s){t.activeNames=s},expression:"activeNames"}},[a("van-collapse-item",{attrs:{title:"请选择退款原因",name:"1"}},[a("div",{staticClass:"cause-inner-list"},[t._v("其他理由")]),t._v(" "),a("div",{staticClass:"cause-inner-list"},[t._v("其他理由")]),t._v(" "),a("div",{staticClass:"cause-inner-list"},[t._v("其他理由")])])],1),t._v(" "),a("div",{staticClass:"description-cause"},[t._m(0),t._v(" "),a("div",{staticClass:"submit-cause"},[a("uploader"),t._v(" "),a("span",{staticClass:"upload-img"},[t._v("上传图片")])],1)])],1),t._v(" "),a("div",{staticClass:"cause"},[t._v("选择退款来源")]),t._v(" "),a("div",{staticClass:"cause-inner"},[a("van-radio-group",{model:{value:t.radio,callback:function(s){t.radio=s},expression:"radio"}},[a("van-cell-group",[a("van-cell",{attrs:{title:"退款至您的账户",clickable:""},on:{click:function(s){t.radio="1"}}},[a("van-radio",{attrs:{name:"1"}})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"cause"},[t._v("选择退款方式")]),t._v(" "),a("div",{staticClass:"cause-inner"},[a("div",{staticClass:"quick-cause van-hairline--bottom"},[a("div",{staticClass:"title-quick"},[t._v("\n\t\t\t\t\t\t急速退款\n\t\t\t\t\t\t"),a("van-icon",{attrs:{name:"question1"}})],1),t._v(" "),a("div",{staticClass:"text-quick"},[t._v("\n\t\t\t\t\t\t无需商家同意可直接全单退款\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"quick-submit"},[a("van-icon",{attrs:{name:"check"}})],1)]),t._v(" "),a("div",{staticClass:"quick-cause"},[a("div",{staticClass:"title-quick"},[t._v("\n\t\t\t\t\t\t普通退款\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"text-quick"},[t._v("\n\t\t\t\t\t\t支持全单/部分退款，商家同意后退款\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"quick-submit"},[a("van-icon",{attrs:{name:"check"}})],1)]),t._v(" "),a("div",{staticClass:"select-button"})]),t._v(" "),a("div",{staticClass:"cause"},[t._v("选择退款商品")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"goods-item"},[a("div",{staticClass:"goods-list"},[a("div",{staticClass:"goods-selected"},[a("van-icon",{attrs:{name:"check"}})],1),t._v(" "),t._e(),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"goods-count"},[a("div",{staticClass:"count"},[a("van-icon",{staticClass:"none",attrs:{name:"plus"}}),t._v(" "),a("div",{staticClass:"num"},[t._v("99999999")]),t._v(" "),a("van-icon",{attrs:{name:"minus"}})],1)])])]),t._v(" "),a("div",{staticClass:"goods-item"},[a("div",{staticClass:"goods-list"},[a("div",{staticClass:"goods-selected"},[a("van-icon",{attrs:{name:"check"}})],1),t._v(" "),t._e(),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"goods-count"},[a("div",{staticClass:"count"},[a("van-icon",{attrs:{name:"plus"}}),t._v(" "),a("div",{staticClass:"num"},[t._v("99999999")]),t._v(" "),a("van-icon",{attrs:{name:"minus"}})],1)])])]),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"delivery-price"},[a("div",{staticClass:"refund-number"},[a("div",{staticClass:"check-all"},[a("div",{staticClass:"checked"},[a("van-icon",{attrs:{name:"check"}})],1),t._v(" "),t._e(),t._v("\n\t\t\t\t\t\t全选\n\t\t\t\t\t")]),t._v(" "),t._m(7)]),t._v(" "),a("div",{staticClass:"description"},[t._v("单独商品的退款金额是在刨除配送费后按照优惠活动等比计算得出。如您选择全部商品则按照全部退款返还您支付的全部金额")])]),t._v(" "),a("div",{staticClass:"submit"},[t._v("提交")])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-cause"},[s("textarea",{attrs:{maxlength:"100",placeholder:"请描述退款原因"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-refund"},[s("div",{staticClass:"goods-head"},[s("div",{staticClass:"store-img"},[s("img",{attrs:{src:"http://1.xinzuowl.com/attachment/images/1/2016/12/ecc9Eu0LIyr62aoOiC6goU6aLAcIIC.jpg"}})]),this._v(" "),s("div",{staticClass:"store-title"},[this._v("茶不思")]),this._v(" "),s("div",{staticClass:"store-sign"},[this._v("啦啦专送")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-img"},[s("img",{attrs:{src:"http://1.xinzuowl.com/attachment/images/1/2016/12/ecc9Eu0LIyr62aoOiC6goU6aLAcIIC.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-info"},[s("div",{staticClass:"goods-name"},[this._v("农夫山泉")]),this._v(" "),s("div",{staticClass:"goods-number"},[this._v("\n\t\t\t\t\t\t\t×99999999\n\t\t\t\t\t\t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-img"},[s("img",{attrs:{src:"http://1.xinzuowl.com/attachment/images/1/2016/12/ecc9Eu0LIyr62aoOiC6goU6aLAcIIC.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-info"},[s("div",{staticClass:"goods-name"},[this._v("农夫山泉")]),this._v(" "),s("div",{staticClass:"goods-number"},[this._v("\n                            ×99999999\n                        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"delivery-price van-hairline--bottom"},[s("div",{staticClass:"price"},[s("div",{staticClass:"price-left"},[this._v("配送费")]),this._v(" "),s("div",{staticClass:"price-right"},[s("span",[this._v("￥3")])])]),this._v(" "),s("div",{staticClass:"explain"},[this._v("部分退，配送费不退回")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"refund-price-number"},[this._v("退款金额"),s("span",[this._v("￥4.13")])])}]};var l=a("VU/8")(n,v,!1,function(t){a("zmfR")},null,null);s.default=l.exports},zmfR:function(t,s){}});
//# sourceMappingURL=141.8acbc872d26633e1f314.js.map