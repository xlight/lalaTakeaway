webpackJsonp([179],{LeDh:function(t,s){},iVzi:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("woOf"),i=e.n(a),o=e("Dd8w"),r=e.n(o),n=e("NYxO"),c=e("NPH5"),l=e("Cz8s"),d={data:function(){return{showPreLoading:!0,popup:{coupon:!1,redPacket:!1},person_num:"",store:{},cart:{},coupons:[],redPackets:[],order:{},islegal:!1}},components:{PublicFooter:e("mzkE").a,PublicHeader:l.a,Load:c.a},computed:r()({},Object(n.c)(["orderExtra"])),methods:r()({},Object(n.b)(["setOrderExtra","replaceOrderExtra"]),{onSelectCoupon:function(t){this.setOrderExtra({key:"coupon_id",val:t}),this.onChangePopup("coupon"),this.onCalculate()},onSelectRedpacket:function(t){this.setOrderExtra({key:"redpacket_id",val:t}),this.onChangePopup("redPacket"),this.onCalculate()},onChangePopup:function(t){this.popup[t]=!this.popup[t]},onCalculate:function(){var t=this,s={sid:this.sid,extra:this.orderExtra};this.util.request({url:"wmall/store/table/create",data:s}).then(function(s){var e=s.data.message.message;t.order=e.order,t.activityed=e.activityed,t.islegal=1==e.islegal})},onSubmit:function(){var t=this;if(!this.islegal)return!1;this.islegal=!1;var s={sid:this.sid,table_id:this.table_id,extra:this.orderExtra};this.util.request({url:"wmall/store/table/submit",data:s}).then(function(s){var e=s.data.message;if(e.errno)return t.util.$toast(e.message,"",1e3),!1;var a=e.message;t.$router.replace(t.util.getUrl({path:"/pages/public/pay?order_id="+a+"&order_type=takeout"}))})},onLoad:function(){var t=this;this.table_id||(this.table_id=this.orderExtra.table_id);var s={sid:this.sid,extra:this.orderExtra};this.util.request({url:"wmall/store/table/create",data:s}).then(function(s){t.showPreLoading=!1;var e=s.data.message;if(e.errno)return t.util.$toast(e.message,"./goods?sid="+t.sid+"&table_id="+t.table_id,1e3,"replace"),!1;e=e.message;var a=i()(t.orderExtra,{note:e.order.note,invoice_id:e.order.invoiceId,table_id:t.table_id});t.replaceOrderExtra(a),t.person_num=t.orderExtra.person_num?t.orderExtra.person_num:"",t.store=e.store,t.cart=e.cart,t.activityed=e.activityed,t.coupons=e.coupons,t.redPackets=e.redPackets,t.order=e.order,t.islegal=1==e.islegal})}}),watch:{person_num:function(){this.setOrderExtra({key:"person_num",val:this.person_num})}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.table_id=this.query.table_id)},mounted:function(){this.onLoad()}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"tangshi-order-create"}},[e("public-header",{attrs:{title:"订单确认"}}),t._v(" "),e("div",{staticClass:"content",style:{bottom:1==t.order.order_type&&t.address&&t.address.address?"88px":"50px"}},[e("div",{staticClass:"content-scroll"},[e("van-field",{staticClass:"border-0px",attrs:{label:"来客人数",placeholder:"请输入用餐人数"},model:{value:t.person_num,callback:function(s){t.person_num=s},expression:"person_num"}}),t._v(" "),e("div",{staticClass:"order-food"},[e("div",{staticClass:"order-food-title"},[e("div",{staticClass:"food-shop"},[t._v(t._s(t.store.title))])]),t._v(" "),e("div",{staticClass:"food-list"},[t._l(t.cart.data,function(s){return[t._l(s,function(s){return["88888"!=s.goods_id?e("van-card",{attrs:{thumb:s.thumb}},[e("div",{staticClass:"food-title",attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"left"},[s.bargain_id>0?e("img",{staticClass:"activity-img",attrs:{src:"static/img/bargain_b.png",alt:""}}):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"right"},[t._v("¥"+t._s(s.total_discount_price))])]),t._v(" "),e("div",{staticClass:"food-desc",attrs:{slot:"desc"},slot:"desc"},[e("div",{staticClass:"left"},[t._v("x"+t._s(s.num))]),t._v(" "),e("div",{staticClass:"right"},[t._v("¥"+t._s(s.total_price))])])]):t._e()]})]})],2),t._v(" "),e("van-cell-group",{staticClass:"extre-fee border-0px"},[e("van-cell",{staticClass:"border-0px",attrs:{title:"服务费"}},[e("template",{slot:"right-icon"},[t._v("￥"+t._s(t.order.serve_fee))])],2)],1),t._v(" "),t._m(0),t._v(" "),e("van-cell-group",{staticClass:"discount-box border-0px"},[t.order.activityed&&t.order.activityed.list?[t._l(t.order.activityed.list,function(s){return["couponCollect"!=s.type&&"redPacket"!=s.type?[e("van-cell",{staticClass:"border-0px"},[e("div",{staticClass:"discount-item flex",attrs:{slot:"title"},slot:"title"},[e("img",{attrs:{src:"static/img/"+s.type+"_b.png",alt:""}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("template",{slot:"right-icon"},[e("span",{staticClass:"c-danger"},[t._v(t._s(s.text))])])],2)]:t._e()]})]:t._e(),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"商家代金券"}},[t.order.coupon&&t.order.coupon.id>0?e("template",{slot:"right-icon"},[e("span",{staticClass:"c-danger",on:{click:function(s){return t.onChangePopup("coupon")}}},[t._v("-￥"+t._s(t.order.coupon.discount))])]):e("template",{slot:"right-icon"},[t.coupons&&t.coupons.length>0?e("span",{staticClass:"c-danger",on:{click:function(s){return t.onChangePopup("coupon")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.coupons.length)+"张可用代金券\n\t\t\t\t\t\t\t")]):e("span",{staticClass:"c-disabled"},[t._v("\n\t\t\t\t\t\t\t\t暂无可用代金券\n\t\t\t\t\t\t\t")]),t._v(" "),e("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})])],2),t._v(" "),e("van-cell",{staticClass:"border-0px",attrs:{title:"平台红包"}},[t.order.redpacket&&t.order.redpacket.id>0?e("template",{slot:"right-icon"},[e("span",{staticClass:"c-danger",on:{click:function(s){return t.onChangePopup("redPacket")}}},[t._v("-￥"+t._s(t.order.redpacket.discount))])]):e("template",{slot:"right-icon"},[t.redPackets&&t.redPackets.length>0?e("span",{staticClass:"c-danger",on:{click:function(s){return t.onChangePopup("redPacket")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.redPackets.length)+"个可用红包\n\t\t\t\t\t\t\t")]):e("span",{staticClass:"c-disabled"},[t._v("\n\t\t\t\t\t\t\t\t暂无可用红包\n\t\t\t\t\t\t\t")]),t._v(" "),e("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})])],2)],2),t._v(" "),t._m(1),t._v(" "),e("van-cell-group",{staticClass:"border-0px"},[e("van-cell",[e("div",{staticClass:"order-pay-info",attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"pay-price"},[t._v("\n\t\t\t\t\t\t\t\t实付\n\t\t\t\t\t\t\t\t"),e("div",[t._v("¥"+t._s(t.order.final_fee))])]),t._v(" "),e("div",{staticClass:"discount-fee"},[t._v("优惠￥"+t._s(t.order.discount_fee))]),t._v(" "),e("div",{staticClass:"total-original"},[t._v("\n\t\t\t\t\t\t\t\t共计￥"+t._s(t.order.total_fee)+"\n\t\t\t\t\t\t\t")])])])],1)],1),t._v(" "),e("div",{staticClass:"order-region"},[e("van-cell-group",[e("van-cell",{attrs:{title:"支付方式"}},[e("div",{staticClass:"c-disabled",attrs:{slot:"right-icon"},slot:"right-icon"},[t._v("在线支付")])]),t._v(" "),e("van-cell",{staticClass:"flex-lr",attrs:{title:"备注/发票",to:t.util.getUrl({path:"/tangshi/pages/table/note",query:{sid:t.sid}})}},[e("div",{staticClass:"note flex-lr",attrs:{slot:"right-icon"},slot:"right-icon"},[t.orderExtra.note||t.order.note?e("div",{staticClass:"note-text"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.orderExtra.note||t.order.note)+"\n\t\t\t\t\t\t\t")]):e("span",{staticClass:"c-disabled"},[t._v("口味、偏好等要求")]),t._v(" "),e("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})])])],1)],1)],1)]),t._v(" "),t.coupons&&t.coupons.length>0?e("van-popup",{attrs:{position:"bottom"},model:{value:t.popup.coupon,callback:function(s){t.$set(t.popup,"coupon",s)},expression:"popup.coupon"}},[e("div",{staticClass:"popup-coupon"},[e("div",{staticClass:"popup-title van-hairline--bottom"},[t._v("商家代金券")]),t._v(" "),e("div",{staticClass:"popup-container"},[e("load",{attrs:{type:"loaded",text:"可用代金券("+t.coupons.length+"张)",bgcolor:"#f5f5f5"}}),t._v(" "),e("div",{staticClass:"coupon-list"},[e("div",{staticClass:"content-padded"},t._l(t.coupons,function(s){return e("div",{staticClass:"coupon-item"},[e("div",{staticClass:"clearfix",on:{click:function(e){return t.onSelectCoupon(s.id)}}},[e("span",{staticClass:"circle circle-left"}),t._v(" "),e("span",{staticClass:"circle circle-right"}),t._v(" "),e("div",{staticClass:"left"},[e("div",{staticClass:"store-logo"},[e("img",{attrs:{src:s.logo,alt:""}})]),t._v(" "),e("div",{staticClass:"coupon-detail"},[e("div",{staticClass:"coupon-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"use-time"},[t._v("有效期至:"+t._s(s.endtime_cn))])])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"price"},[e("span",[t._v("￥")]),t._v(t._s(s.discount)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"condition"},[t._v("满"+t._s(s.condition)+"元可用")])])]),t._v(" "),t.order.coupon&&s.id==t.order.coupon.id?e("div",{staticClass:"selected-status"},[e("img",{attrs:{src:"static/img/success.png",alt:""}})]):t._e()])}),0)])],1),t._v(" "),e("div",{staticClass:"popup-cancle van-hairline--top",on:{click:function(s){return t.onSelectCoupon(0)}}},[t._v("不使用代金券")])])]):t._e(),t._v(" "),t.redPackets&&t.redPackets.length>0?e("van-popup",{attrs:{position:"bottom"},model:{value:t.popup.redPacket,callback:function(s){t.$set(t.popup,"redPacket",s)},expression:"popup.redPacket"}},[e("div",{staticClass:"popup-redpacket"},[e("div",{staticClass:"popup-title van-hairline--bottom"},[t._v("平台红包")]),t._v(" "),e("div",{staticClass:"popup-container"},[e("load",{attrs:{type:"loaded",text:"可用红包("+t.redPackets.length+"个)",bgcolor:"#f5f5f5"}}),t._v(" "),t._l(t.redPackets,function(s){return e("div",{staticClass:"redPacket-list content-padded"},[e("div",{staticClass:"redPacket-list-item",on:{click:function(e){return t.onSelectRedpacket(s.id)}}},[e("div",{staticClass:"redPacket-list-item-container"},[e("div",{staticClass:"redPacket-info row"},[e("div",{staticClass:"col-50"},[e("span",{staticClass:"redPacket-title"},[t._v(t._s(s.title))])]),t._v(" "),e("div",{staticClass:"col-50 text-right"},[e("div",{staticClass:"price"},[t._v("￥"),e("span",{staticClass:"price-num"},[t._v(t._s(s.discount))])])])]),t._v(" "),e("div",{staticClass:"redPacket-use-limit row"},[e("div",{staticClass:"col-60"},[t._v(t._s(s.day_cn))]),t._v(" "),e("div",{staticClass:"col-40 text-right"},[e("p",{staticClass:"use-condition"},[t._v("满"+t._s(s.condition)+"元可用")])])])]),t._v(" "),e("span",{staticClass:"circle circle-left"}),t._v(" "),e("span",{staticClass:"circle circle-right"}),t._v(" "),t.order.redpacket&&s.id==t.order.redpacket.id?e("div",{staticClass:"selected-status"},[e("img",{attrs:{src:"static/img/success.png",alt:""}})]):t._e()])])})],2),t._v(" "),e("div",{staticClass:"popup-cancle van-hairline--top",on:{click:function(s){return t.onSelectRedpacket(0)}}},[t._v("不使用红包")])])]):t._e(),t._v(" "),e("van-submit-bar",{attrs:{disabled:!t.islegal,price:100*t.order.final_fee,label:"待支付","button-text":"提交订单"},on:{submit:t.onSubmit}},[e("div",{staticClass:"order-benefit",attrs:{slot:"default"},slot:"default"},[t._v("\n\t\t\t已优惠 ¥"+t._s(t.order.discount_fee)+"\n\t\t")])]),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.showPreLoading?e("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"divide"},[s("div",{staticClass:"divide-line"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"divide"},[s("div",{staticClass:"divide-line"})])}]};var v=e("VU/8")(d,p,!1,function(t){e("LeDh")},null,null);s.default=v.exports}});