webpackJsonp([7],{Axf7:function(t,a){},YoQz:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Cz8s"),s=i("deIj"),l={data:function(){return{deliveryer:{},showPreLoading:!0}},components:{publicHeader:e.a},methods:{onLoad:function(){Object(s.a)({vue:this,url:"delivery/finance/getcash/index",autoAssign:!0,variable:"deliveryer"})}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"finance-index"}},[i("public-header",{attrs:{title:"资产"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"account bg-primary"},[i("div",{staticClass:"font-14 margin-15-b"},[t._v("账户可用余额(元)")]),t._v(" "),i("div",[t._v("¥"+t._s(t.deliveryer.credit2))])]),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{value:"","is-link":"",to:t.util.getUrl({path:"pages/finance/current"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"icon icon-account"}),t._v(" "),i("span",[t._v("账户明细")])])]),t._v(" "),i("van-cell",{attrs:{value:"","is-link":"",to:t.util.getUrl({path:"pages/finance/getcashList"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"icon icon-text1"}),t._v(" "),i("span",[t._v("提现记录")])])])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{value:"","is-link":"",to:t.util.getUrl({path:"pages/finance/getcash"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"icon icon-refund"}),t._v(" "),i("span",[t._v("申请提现")])])])],1),t._v(" "),i("van-cell-group",{staticClass:"margin-10-t"},[i("van-cell",{attrs:{value:"","is-link":"",to:t.util.getUrl({path:"pages/finance/account"})}},[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"icon icon-pay"}),t._v(" "),i("span",[t._v("提现账户")])])])],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(l,n,!1,function(t){i("Axf7")},null,null);a.default=c.exports}});