webpackJsonp([126],{HpaZ:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Cz8s"),e=a("mzkE"),n={components:{PublicHeader:i.a,PublicFooter:e.a},data:function(){return{settle:{},data:{},showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(){var t=this;this.util.request({url:"spread/commission",data:{menufooter:1}}).then(function(s){var a=s.data.message;t.settle=a.message.settle,t.data=a.message.data,t.showPreLoading=!1,t.menufooter=window.menufooter})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"spread-commission"}},[a("public-header",{attrs:{title:"推广佣金"}}),t._v(" "),a("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"detail"},[a("div",{staticClass:"left"},[a("div",[t._v("累计佣金(元)")]),t._v(" "),a("div",{staticClass:"price"},[t._v(t._s(t.data.commission_grandtotal))])]),t._v(" "),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:""}},[t._v("提现明细")])],1)]),t._v(" "),a("div",{staticClass:"list-block"},[a("ul",[a("li",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[a("van-icon",{attrs:{name:"recharge"}})],1),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v("可提现佣金")]),t._v(" "),a("div",{staticClass:"item-after red"},[t._v(t._s(t.data.spreadcredit2)+"元")])])])])]),t._v(" "),a("div",{staticClass:"list-block"},[a("ul",[a("li",{staticClass:"item-content border-1px-b"},[a("div",{staticClass:"item-media"},[a("van-icon",{attrs:{name:"time"}})],1),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v("累计佣金")]),t._v(" "),a("div",{staticClass:"item-after"},[t._v(t._s(t.data.commission_grandtotal)+"元")])])]),t._v(" "),a("li",{staticClass:"item-content border-1px-b"},[a("div",{staticClass:"item-media"},[a("van-icon",{attrs:{name:"rest"}})],1),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v("待打款佣金")]),t._v(" "),a("div",{staticClass:"item-after"},[t._v(t._s(t.data.commission_getcash_apply)+"元")])])]),t._v(" "),a("li",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[a("van-icon",{attrs:{name:"signboard"}})],1),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v("成功提现佣金")]),t._v(" "),a("div",{staticClass:"item-after"},[t._v(t._s(t.data.commission_getcash_success)+"元")])])])])]),t._v(" "),a("div",{staticClass:"must"},[a("div",{staticClass:"text-title"},[t._v("用户须知")]),t._v(" "),a("div",{staticClass:"text"},[1==t.settle.balance_condition?a("p",[t._v("买家确认收货后,佣金将自动打入您的佣金账户余额。")]):t._e(),t._v(" "),2==t.settle.balance_condition?a("p",[t._v("买家确认收货买家确认收货并评价后,佣金将自动打入您的佣金账户余额。")]):t._e(),t._v(" "),a("p",[t._v("注意:可用佣金满"),a("span",[t._v(t._s(t.settle.withdraw))]),t._v("元后才能申请提现")])]),t._v(" "),a("van-icon",{attrs:{name:"unfold1"}})],1),t._v(" "),a("div",{staticClass:"tab"},[t.data.spreadcredit2>0?a("router-link",{staticClass:"button-fill",attrs:{to:t.util.getUrl({path:"/pages/spread/getCash/application"})}},[t._v("我要提现")]):a("div",{staticClass:"button-fill disabled"},[t._v("我要提现")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(n,l,!1,function(t){a("S2MS")},null,null);s.default=o.exports},S2MS:function(t,s){}});