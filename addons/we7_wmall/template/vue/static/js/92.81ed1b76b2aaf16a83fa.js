webpackJsonp([92],{"CGU/":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"peerpay-paylist"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"head-block"},[e("div",{staticClass:"head-block-bg"},[e("div",{staticClass:"item-text"},[t._v(t._s(t.peerpay.peerpay_message))]),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:t.member.avatar,alt:""}})])]),t._v(" "),e("div",{staticClass:"title-text"},[e("span",{staticClass:"icon"}),t._v("\n\t\t\t快来帮"+t._s(t.member.nickname?t.member.nickname:"小伙伴")+"搞定这个\n\t\t\t"),e("span",{staticClass:"icon"})]),t._v(" "),e("div",{staticClass:"order van-hairline--top van-hairline--top"},[t.peerpay.data?e("router-link",{attrs:{to:""}},[e("img",{staticClass:"item-thumbnail",attrs:{src:t.peerpay.data.logo,alt:""}}),t._v(" "),e("div",{staticClass:"item-desc"},[e("div",{staticClass:"item-title"},[t._v(t._s(t.peerpay.data.title))]),t._v(" "),e("div",{staticClass:"item-price"},[t._v("¥"+t._s(t.peerpay.data.fee))])])]):t._e(),t._v(" "),e("div",{staticClass:"progress-bar-block"},[e("div",{staticClass:"progress-text"},[t.peerpay.uid==t.member.uid?[t.differ>0?[t.peerpay.peerpay_realprice>0?[e("span",[t._v("还差")]),e("span",{staticClass:"color-warning"},[t._v("¥"+t._s(t.peerpay.peerpay_realprice))]),e("span",[t._v("哦，快去找朋友帮助吧~")])]:[e("span",{staticClass:"color-warning"},[t._v("订单已完成支付")])]]:[t._v("\n\t\t\t\t\t\t\t还没有好友帮你代付呢，快去召集朋友吧~\n\t\t\t\t\t\t")]]:[t._v("\n\t\t\t\t\t\t快来帮好友达成心愿吧~\n\t\t\t\t\t\t"),e("span",[t._v("还差")]),e("span",{staticClass:"color-warning"},[t._v("¥"+t._s(t.peerpay.peerpay_realprice))]),e("span",[t._v("哦，TA需要你的帮助呢~")])]],2),t._v(" "),e("van-progress",{attrs:{percentage:t.percent}})],1)],1),t._v(" "),t.payinfos&&t.payinfos.length>0?e("div",{staticClass:"pay-list van-hairline--top van-hairline--bottom"},[e("div",{staticClass:"pay-list-block"},[e("div",{staticClass:"pay-list-img"}),t._v(" "),t._l(t.payinfos,function(a){return[e("div",{staticClass:"pay-item van-hairline--bottom"},[e("img",{attrs:{src:a.headimg,alt:""}}),t._v(" "),e("div",{staticClass:"name"},[e("span",[t._v(t._s(a.uname))]),t._v(" "),e("span",{staticClass:"support"},[t._v("支持")]),t._v(" "),e("span",{staticClass:"price"},[t._v("¥"+t._s(a.final_fee))])]),t._v(" "),e("div",{staticClass:"message"},[t._v(t._s(a.usay))])])]})],2)]):t._e(),t._v(" "),1!=t.peerpay.status?e("div",{staticClass:"bottom-btn-block"},[1==t.is_same_person?[e("router-link",{staticClass:"router-link-exact-active",attrs:{to:t.util.getUrl({path:"pages/public/peerpay/payment",query:{id:t.peerpay.id}})}},[t._v("我先付点")]),t._v(" "),e("div",{staticClass:"open-zhezhao",on:{click:function(a){t.onChangeZhezhao()}}},[t._v("喊朋友帮忙")])]:[e("router-link",{staticClass:"router-link-exact-active",attrs:{to:t.util.getUrl({path:"pages/home/index"})}},[t._v("我也要玩")]),t._v(" "),e("router-link",{staticClass:"open-zhezhao",attrs:{to:t.util.getUrl({path:"pages/public/peerpay/payment",query:{id:t.peerpay.id}})}},[t._v("帮TA付")])]],2):t._e()]),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.showPreLoading?e("iloading"):t._e()],1),t._v(" "),t.zhezhaoShow?e("div",{staticClass:"share-zhezhao",on:{click:function(a){t.onChangeZhezhao()}}},[e("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"remaining-time hide"},[e("div",[t._v("支付剩余时间")]),t._v(" "),e("div",{staticClass:"in-clock"},[e("span",{staticClass:"in-num"},[t._v("0")]),t._v(" "),e("span",{staticClass:"in-num"},[t._v("0")]),t._v(" "),e("span",{staticClass:"in-colon"},[t._v(":")]),t._v(" "),e("span",{staticClass:"in-num"},[t._v("0")]),t._v(" "),e("span",{staticClass:"in-num"},[t._v("1")])])])}]};var i=e("VU/8")({name:"peerpayPaylist",data:function(){return{showPreLoading:!0,zhezhaoShow:!1,peerpay:{},member:{},payinfos:[],differ:0,percent:0,is_same_person:0}},methods:{onLoad:function(){var t=this;this.util.request({url:"system/paycenter/peerpay/paylist",data:{id:this.id,payinfo_id:this.payinfo_id}}).then(function(a){t.showPreLoading=!1;var e=a.data.message;e.errno&&t.util.$toast(e.message,t.util.getUrl({path:"pages/order/index"}),1e3,"replace"),e=e.message,t.peerpay=e.peerpay,t.member=e.member,t.payinfos=e.payinfos,t.differ=e.differ,t.percent=e.percent,t.is_same_person=e.is_same_person,t.util.setWXTitle(e.page_title)})},onChangeZhezhao:function(){this.zhezhaoShow=!this.zhezhaoShow}},created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id,this.payinfo_id=this.query.payinfo_id)},mounted:function(){this.onLoad()}},s,!1,function(t){e("TAAs")},null,null);a.default=i.exports},TAAs:function(t,a){}});