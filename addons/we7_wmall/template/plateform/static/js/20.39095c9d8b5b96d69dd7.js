webpackJsonp([20],{"9B3w":function(t,e){},m1Sx:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Cz8s"),n=o("+CBI"),r=o("deIj"),l={data:function(){return{showPreLoading:!0,order:{deliveryer_collect_notify_clerk:"1",show_no_pay:"1"}}},components:{publicHeader:i.a,iswitch:n.a},methods:{onLoad:function(){Object(r.a)({vue:this,autoAssign:!0,variable:"order",url:"plateform/agent/config/order"})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})},onSubmit:function(){Object(r.c)({vue:this,url:"plateform/agent/config/order",data:this.order})}},mounted:function(){this.onLoad()}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"takeout-order"}},[o("public-header",{attrs:{title:"订单设置"}}),t._v(" "),o("div",{staticClass:"content"},[o("van-cell-group",[o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("配送员接单后是否通知商户")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.order.deliveryer_collect_notify_clerk,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"order.deliveryer_collect_notify_clerk"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("未支付订单在待接单列表展示")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.order.show_no_pay,"condition-open":"0","condition-close":"1","text-open":"ON","text-close":"OFF",keys:"order.show_no_pay"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),o("div",{staticClass:"padding-15"},[o("van-button",{staticClass:"bg-primary font-16",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?o("iloading"):t._e()],1)},staticRenderFns:[]};var c=o("VU/8")(l,s,!1,function(t){o("9B3w")},null,null);e.default=c.exports}});