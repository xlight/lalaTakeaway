webpackJsonp([97],{"9wbA":function(s,t){},AwQW:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Cz8s"),e=i("deIj"),o={components:{PublicHeader:a.a},data:function(){return{storebd_user:{},commission:{},current:"",getcash:"",stores:"",showPreLoading:!0}},methods:{onLoad:function(){var s=this;Object(e.a)({vue:s,url:"storebd/index/index",data:{},success:function(t){s.storebd_user=t.storebd_user,s.commission=t.commission,s.current=t.current,s.getcash=t.getcash,s.stores=t.stores}})}},mounted:function(){this.onLoad()}},c={render:function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{attrs:{id:"storebd-index"}},[i("public-header",{attrs:{title:"店铺推广员"}}),s._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"storebd-title"},[i("div",{staticClass:"storebd-member"},[i("div",{staticClass:"member-img"},[i("img",{attrs:{src:s.storebd_user.avatar,alt:""}})]),s._v(" "),i("div",[s._v("推广员："+s._s(s.storebd_user.title))])])]),s._v(" "),i("div",{staticClass:"user-getcash flex"},[i("div",{staticClass:"getcash-left"},[i("div",[s._v("成功提现佣金")]),s._v(" "),i("div",{staticClass:"price"},[s._v("￥ "+s._s(s.commission.getcash_success))])]),s._v(" "),i("div",{staticClass:"getcash-right"},[i("div",[s._v("可提现佣金")]),s._v(" "),i("div",{staticClass:"price"},[s._v("￥ "+s._s(s.storebd_user.credit2))])])]),s._v(" "),i("van-cell-group",{staticClass:"margin-10-t ellipsis"},[i("van-cell",{attrs:{title:"我的佣金"}}),s._v(" "),i("router-link",{staticClass:"commission",attrs:{tag:"div",to:s.util.getUrl({path:"/pages/storebd/commission"})}},[i("div",{staticClass:"van-icon van-icon-refund"}),s._v(" "),i("div",{staticClass:"commission-name"},[s._v("推广佣金")]),s._v(" "),i("div",{staticClass:"commission-price"},[s._v(s._s(s.commission.total)+"元")])]),s._v(" "),i("router-link",{staticClass:"commission",attrs:{tag:"div",to:s.util.getUrl({path:"/pages/storebd/current"})}},[i("div",{staticClass:"van-icon van-icon-list"}),s._v(" "),i("div",{staticClass:"commission-name"},[s._v("佣金明细")]),s._v(" "),i("div",{staticClass:"commission-price"},[s._v(s._s(s.current)+"笔")])]),s._v(" "),i("router-link",{staticClass:"commission",attrs:{tag:"div",to:s.util.getUrl({path:"/pages/storebd/getcashlog"})}},[i("div",{staticClass:"van-icon van-icon-sort"}),s._v(" "),i("div",{staticClass:"commission-name"},[s._v("提现明细")]),s._v(" "),i("div",{staticClass:"commission-price"},[s._v(s._s(s.getcash)+"笔")])])],1),s._v(" "),i("van-cell-group",{staticClass:"margin-10-t ellipsis"},[i("van-cell",{attrs:{title:"其他"}}),s._v(" "),i("router-link",{staticClass:"commission",attrs:{tag:"div",to:s.util.getUrl({path:"/pages/storebd/storebd-store"})}},[i("div",{staticClass:"van-icon van-icon-store"}),s._v(" "),i("div",{staticClass:"commission-name"},[s._v("推广店铺")]),s._v(" "),i("div",{staticClass:"commission-price"},[s._v(s._s(s.stores)+"家")])])],1)],1),s._v(" "),i("transition",{attrs:{name:"loading"}},[s.showPreLoading?i("iloading"):s._e()],1)],1)},staticRenderFns:[]};var r=i("VU/8")(o,c,!1,function(s){i("9wbA")},null,null);t.default=r.exports}});
//# sourceMappingURL=97.5f01b2f2650fbb4f4971.js.map