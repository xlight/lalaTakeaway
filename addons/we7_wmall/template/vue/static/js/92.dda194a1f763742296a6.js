webpackJsonp([92],{GTeU:function(t,s){},"Pn/h":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),a=e.n(i),r=e("Cz8s"),o=e("mzkE"),n={name:"paotuiOrder",components:{PublicHeader:r.a,PublicFooter:o.a},data:function(){return{showPreLoading:!0,orders:{page:1,psize:7,finished:!1,loading:!1,data:[]},others:[],total_user:0,config:{},menufooter:{}}},methods:{onChangeStatus:function(t,s){if("cancel"==s)var e={url:"errander/order/cancel?id="+t,confirm:"确定取消订单吗?"};else if("end"==s)e={url:"errander/order/end?id="+t,confirm:"确定已收到商品吗?"};this.util.jspost(e)},onLoad:function(){var t=this;if(this.orders.finished)return!1;this.util.request({url:"errander/order/new_list",data:{page:this.orders.page,psize:this.orders.psize,menufooter:1}}).then(function(s){t.showPreLoading=!1;var e=s.data.message;if(e.errno)return t.$toast(e.message),!1;e=e.message,t.total_user=e.total_user,t.config=e.config,t.others=e.others,t.orders.data=[].concat(a()(t.orders.data),a()(e.orders)),t.orders.loading=!1,e.orders.length<t.orders.psize&&(t.orders.finished=!0),t.orders.page++,t.menufooter=window.menufooter})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"paotui-order"}},[e("public-header",{attrs:{title:"跑腿订单"}}),t._v(" "),e("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),e("div",{staticClass:"content"},[e("van-cell-group",[e("van-cell",[e("div",{staticClass:"font-16 c-default flex height-30",attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t已有\n\t\t\t\t\t"),e("span",{staticClass:"c-danger"},[t._v(t._s(t.total_user))]),t._v("\n\t\t\t\t\t人使用了随意购\n\t\t\t\t")]),t._v(" "),e("router-link",{staticClass:"c-danger font-16 flex height-30",attrs:{slot:"right-icon",to:t.util.getUrl({path:"/pages/paotui/guide"})},slot:"right-icon"},[t._v("\n\t\t\t\t\t立即下单 "),e("span",{staticClass:"icon icon-right"})])],1)],1),t._v(" "),t.orders.data.length>0?[e("van-list",{attrs:{finished:t.orders.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.orders.loading,callback:function(s){t.$set(t.orders,"loading",s)},expression:"orders.loading"}},t._l(t.orders.data,function(s){return e("div",{key:s.id,staticClass:"order-item"},[e("van-cell",[e("router-link",{staticClass:"font-16 c-default flex height-30",attrs:{slot:"title",to:t.util.getUrl({path:"/pages/paotui/diy?id="+s.order_cid})},slot:"title"},[e("img",{attrs:{src:s.thumb,alt:""}}),t._v(" "),e("span",{staticClass:"category-title"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"icon icon-right font-16 c-disabled"})])],1),t._v(" "),e("router-link",{staticClass:"order-info flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/paotui/detail",query:{id:s.id}})}},[e("div",{staticClass:"left"},[e("div",{staticClass:"title ellipsis font-16"},[t._v("购买商品："+t._s(s.goods_name))]),t._v(" "),e("div",{staticClass:"date font-13 c-disabled"},[t._v(t._s(s.addtime))])]),t._v(" "),e("div",{staticClass:"right text-right"},[e("div",{staticClass:"price font-15"},[t._v("¥ "+t._s(s.final_fee))]),t._v(" "),e("div",{staticClass:"status c-danger font-14"},[t._v(t._s(s.order_status))])])]),t._v(" "),0==s.is_pay&&4!=s.status?e("div",{staticClass:"order-status"},[e("div",{staticClass:"pic"},[e("img",{attrs:{src:"static/img/order_status_money.png",alt:""}})]),t._v(" "),e("div",{staticClass:"order-status-detail"},[e("div",{staticClass:"arrow-left"}),t._v(" "),e("div",{staticClass:"clearfix"},[t._v("待支付"),e("span",{staticClass:"pull-right"},[t._v(t._s(s.addtime))])]),t._v(" "),e("div",{staticClass:"tips"},[t.config.pay_time_limit>0?[t._v("\n\t\t\t\t\t\t\t\t\t请在提交订单后"+t._s(t.config.pay_time_limit)+"分钟内完成支付\n\t\t\t\t\t\t\t\t")]:t._e()],2)])]):t._e(),t._v(" "),s.status<3||s.refund_status>0?[e("div",{staticClass:"order-btn van-hairline--top"},[0==s.is_pay?[e("router-link",{staticClass:"order-btn-item van-hairline--right",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:s.id,order_type:"errander"}})}},[t._v("立即支付")])]:t._e(),t._v(" "),1==s.status?[e("div",{staticClass:"order-btn-item",on:{click:function(e){t.onChangeStatus(s.id,"cancel")}}},[t._v("取消订单")])]:2==s.status?[e("div",{staticClass:"order-btn-item van-hairline--right",on:{click:function(e){t.onChangeStatus(s.id,"end")}}},[t._v("确认收货")]),t._v(" "),e("div",{staticClass:"order-btn-item",on:{click:function(e){t.util.jsUrl("tel:"+s.deliveryer.mobile)}}},[t._v("联系骑士")])]:t._e(),t._v(" "),s.refund_status>=1?[e("router-link",{staticClass:"order-btn-item",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/paotui/detail",query:{id:s.id}})}},[t._v("查看退款")])]:t._e()],2)]:t._e()],2)}))]:[t._m(0),t._v(" "),e("p",{staticClass:"order-empty-title"},[t._v("看看大家都在买啥")]),t._v(" "),e("div",{staticClass:"order-other"},t._l(t.others,function(s,i){return e("router-link",{key:i,staticClass:"order-other-item flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/paotui/diy?id="+s.order_cid})}},[e("img",{attrs:{src:s.thumb,alt:""}}),t._v(" "),e("div",{staticClass:"item-info flex-lr"},[e("div",{staticClass:"info-inner"},[e("p",{staticClass:"title width-100 ellipsis font-14"},[t._v(t._s(s.anonymous_username)+" 购买了 "+t._s(s.goods_name))]),t._v(" "),e("p",{staticClass:"font-13 c-disabled"},[t._v(t._s(s.addtime))])]),t._v(" "),e("span",{staticClass:"icon icon-right font-16 c-disabled"})])])}))]],2)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"order-empty border-1px-b"},[s("img",{attrs:{src:"static/img/paotui_order_no.png",alt:""}}),this._v(" "),s("p",{staticClass:"font-15"},[this._v("您还没有随意购的订单 ~")])])}]};var d=e("VU/8")(n,l,!1,function(t){e("GTeU")},null,null);s.default=d.exports}});
//# sourceMappingURL=92.dda194a1f763742296a6.js.map