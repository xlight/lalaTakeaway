webpackJsonp([170],{"CW+b":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),r=s("NYxO"),o=s("NPH5"),n={data:function(){return{reserve_type:"table",username:"",mobile:"",contentHeight:0,popup:{coupon:!1},store:{},cart:{},category:{},coupons:[],order:{},activityed:{},islegal:!1}},components:{PublicHeader:s("Cz8s").a,Load:o.a},computed:a()({},Object(r.c)(["reserveExtra"])),watch:{mobile:function(){this.mobile&&11==this.mobile.length&&this.setState({type:"reserveExtra",key:"mobile",val:this.mobile})},username:function(){this.setState({type:"reserveExtra",key:"username",val:this.username})}},methods:a()({},Object(r.b)(["setState"]),{onSelectCoupon:function(t){this.setState({type:"reserveExtra",key:"coupon_id",val:t}),this.onChangePopup("coupon"),this.onCalculate()},onChangeOrderType:function(t){this.reserve_type=t,this.setState({type:"reserveExtra",key:"reserve_type",val:t}),"order"==t&&this.$router.push(this.util.getUrl({path:"/tangshi/pages/reserve/goods?sid="+this.sid+"&table_cid="+this.reserveExtra.cid}))},onChangePopup:function(t){this.popup[t]=!this.popup[t]},onCalculate:function(){var t=this,e={sid:this.sid,extra:this.reserveExtra};this.util.request({url:"wmall/store/reserve/post",data:e}).then(function(e){var s=e.data.message.message;t.activityed=s.activityed,t.order=s.order})},onSubmit:function(){var t=this;if(!this.mobile||!this.username)return this.$toast("请完善预订信息"),!1;if(!this.reserveExtra.cid)return this.$toast("请先选择预定桌台"),!1;if(!this.reserveExtra.time||!this.reserveExtra.day)return this.$toast("请先选择预定时间"),!1;if(!this.islegal)return!1;this.reserveExtra.reserve_type||(this.reserveExtra.reserve_type="table"),this.islegal=!1;var e={sid:this.sid,extra:this.reserveExtra};this.util.request({url:"wmall/store/reserve/submit",data:e}).then(function(e){var s=e.data.message;if(s.errno)return t.$toast(s.message),!1;var i=s.message;t.$router.push(t.util.getUrl({path:"/pages/public/pay?order_id="+i+"&order_type=takeout"}))})},onLoad:function(){var t=this,e={sid:this.sid,extra:this.reserveExtra};this.util.request({url:"wmall/store/reserve/post",data:e}).then(function(e){t.mobile=t.reserveExtra.mobile,t.username=t.reserveExtra.username,t.reserveExtra.reserve_type&&(t.reserve_type=t.reserveExtra.reserve_type);var s=e.data.message.message;t.store=s.store,t.cart=s.cart,t.category=s.category,t.coupons=s.coupons,t.order=s.order,t.islegal=s.islegal})}}),created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid)},mounted:function(){this.onLoad();var t=document.documentElement.clientHeight,e=document.getElementsByClassName("van-nav-bar")[0].clientHeight;this.contentHeight=t-e-50}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"reserve-submit"}},[s("public-header",{attrs:{title:"订单确认"}}),t._v(" "),s("div",{staticClass:"content",style:{height:t.contentHeight+"px"}},[s("div",{staticClass:"content-block-title"},[t._v(t._s(t.category.title)+"桌 "+t._s(t.reserveExtra.day)+"~"+t._s(t.reserveExtra.time))]),t._v(" "),s("div",{staticClass:"list-block"},[s("van-cell-group",[s("van-field",{attrs:{type:"text",label:"预定人",placeholder:"您的姓名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("van-field",{attrs:{type:"mobile",label:"手机号",placeholder:"您的手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1)],1),t._v(" "),s("div",{staticClass:"content-block-title"},[t._v("预定类型")]),t._v(" "),s("div",{staticClass:"content-scroll"},[s("div",{staticClass:"plateform-box"},[s("van-cell-group",{staticClass:"border-0px"},[s("van-cell",{attrs:{value:"只定座 预付￥"+t.category.reservation_price},on:{click:function(e){t.onChangeOrderType("table")}}},[s("div",{staticClass:"checkbox",attrs:{slot:"right-icon"},slot:"right-icon"},[s("div",{staticClass:"van-icon",class:{checked:"table"==t.reserve_type,"van-icon-check":"table"==t.reserve_type}})])])],1)],1),t._v(" "),s("div",{staticClass:"instore-box"},[s("van-cell-group",{staticClass:"border-0px"},[s("van-cell",{staticClass:"border-0px",attrs:{value:"提前下单"+t.category.limit_price+"元起订"},on:{click:function(e){t.onChangeOrderType("order")}}},[s("div",{staticClass:"checkbox",attrs:{slot:"right-icon"},slot:"right-icon"},[s("div",{staticClass:"van-icon",class:{checked:"order"==t.reserve_type,"van-icon-check":"order"==t.reserve_type}})])])],1)],1),t._v(" "),"order"==t.reserve_type?s("div",{staticClass:"order-food"},[s("div",{staticClass:"order-food-title"},[s("div",{staticClass:"food-shop"},[t._v(t._s(t.store.title))])]),t._v(" "),s("div",{staticClass:"food-list"},[t._l(t.cart.data,function(e){return[t._l(e,function(e){return["88888"!=e.goods_id?s("van-card",{attrs:{thumb:e.thumb}},[s("div",{staticClass:"food-title",attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"left"},[e.bargain_id>0?s("img",{staticClass:"activity-img",attrs:{src:"static/img/bargain_b.png",alt:""}}):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"right"},[t._v("¥"+t._s(e.total_discount_price))])]),t._v(" "),s("div",{staticClass:"food-desc",attrs:{slot:"desc"},slot:"desc"},[s("div",{staticClass:"left"},[t._v("x"+t._s(e.num))]),t._v(" "),s("div",{staticClass:"right"},[t._v("¥"+t._s(e.total_price))])])]):t._e()]})]})],2),t._v(" "),t._m(0),t._v(" "),s("van-cell-group",{staticClass:"discount-box border-0px"},[t.order.activityed&&t.order.activityed.list?[t._l(t.order.activityed.list,function(e){return["couponCollect"!=e.type&&"redPacket"!=e.type?[s("van-cell",{staticClass:"border-0px"},[s("div",{staticClass:"discount-item flex",attrs:{slot:"title"},slot:"title"},[s("img",{attrs:{src:"static/img/"+e.type+"_b.png",alt:""}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("template",{slot:"right-icon"},[s("span",{staticClass:"c-danger"},[t._v(t._s(e.text))])])],2)]:t._e()]})]:t._e(),t._v(" "),s("van-cell",{staticClass:"border-0px",attrs:{title:"商家代金券"}},[t.order.coupon&&t.order.coupon.id>0?s("template",{slot:"right-icon"},[s("span",{staticClass:"c-danger",on:{click:function(e){t.onChangePopup("coupon")}}},[t._v("-￥"+t._s(t.order.coupon.discount))])]):s("template",{slot:"right-icon"},[t.coupons&&t.coupons.length>0?s("span",{staticClass:"c-danger",on:{click:function(e){t.onChangePopup("coupon")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.coupons.length)+"张可用代金券\n\t\t\t\t\t\t\t")]):s("span",{staticClass:"c-disabled"},[t._v("\n\t\t\t\t\t\t\t\t暂无可用代金券\n\t\t\t\t\t\t\t")]),t._v(" "),s("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})])],2)],2),t._v(" "),t._m(1),t._v(" "),s("van-cell-group",{staticClass:"border-0px"},[s("van-cell",[s("div",{staticClass:"order-pay-info",attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"pay-price"},[t._v("\n\t\t\t\t\t\t\t\t实付\n\t\t\t\t\t\t\t\t"),s("div",[t._v("¥"+t._s(t.order.final_fee))])]),t._v(" "),s("div",{staticClass:"discount-fee"},[t._v("优惠￥"+t._s(t.order.discount_fee))]),t._v(" "),s("div",{staticClass:"total-original"},[t._v("\n\t\t\t\t\t\t\t\t共计￥"+t._s(t.order.total_fee)+"\n\t\t\t\t\t\t\t")])])])],1)],1):t._e(),t._v(" "),s("div",{staticClass:"order-region"},[s("van-cell-group",[s("van-cell",{attrs:{title:"支付方式",value:"在线支付"}}),t._v(" "),s("van-cell",{attrs:{title:"备注/发票",to:t.util.getUrl({path:"/tangshi/pages/reserve/note",query:{sid:t.sid}})}},[s("template",{slot:"right-icon"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.reserveExtra.note||t.order.note||"口味、偏好等要求")+"\n\t\t\t\t\t\t\t"),s("i",{staticClass:"van-icon van-icon-arrow van-cell__right-icon"})])],2)],1)],1)])]),t._v(" "),t.coupons&&t.coupons.length>0?s("van-popup",{attrs:{position:"bottom"},model:{value:t.popup.coupon,callback:function(e){t.$set(t.popup,"coupon",e)},expression:"popup.coupon"}},[s("div",{staticClass:"popup-coupon"},[s("div",{staticClass:"popup-title van-hairline--bottom"},[t._v("商家代金券")]),t._v(" "),s("div",{staticClass:"popup-container"},[s("load",{attrs:{type:"loaded",text:"可用代金券("+t.coupons.length+"张)",bgcolor:"#f5f5f5"}}),t._v(" "),s("div",{staticClass:"coupon-list"},[s("div",{staticClass:"content-padded"},t._l(t.coupons,function(e){return s("div",{staticClass:"coupon-item"},[s("div",{staticClass:"clearfix",on:{click:function(s){t.onSelectCoupon(e.id)}}},[s("span",{staticClass:"circle circle-left"}),t._v(" "),s("span",{staticClass:"circle circle-right"}),t._v(" "),s("div",{staticClass:"left"},[s("div",{staticClass:"store-logo"},[s("img",{attrs:{src:e.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"coupon-detail"},[s("div",{staticClass:"coupon-title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"use-time"},[t._v("有效期至:"+t._s(e.endtime_cn))])])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[s("span",[t._v("￥")]),t._v(t._s(e.discount)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("div",{staticClass:"condition"},[t._v("满"+t._s(e.condition)+"元可用")])])]),t._v(" "),t.order.coupon&&e.id==t.order.coupon.id?s("div",{staticClass:"selected-status"},[s("img",{attrs:{src:"static/img/success.png",alt:""}})]):t._e()])}))])],1),t._v(" "),s("div",{staticClass:"popup-cancle van-hairline--top",on:{click:function(e){t.onSelectCoupon(0)}}},[t._v("不使用代金券")])])]):t._e(),t._v(" "),s("van-submit-bar",{attrs:{disabled:!t.islegal,price:100*t.order.final_fee,label:"待支付","button-text":"提交订单"},on:{submit:t.onSubmit}},[s("div",{staticClass:"order-benefit",attrs:{slot:"default"},slot:"default"},[t._v("\n\t\t\t已优惠 ¥"+t._s(t.order.discount_fee)+"\n\t\t")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide"},[e("div",{staticClass:"divide-line"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide"},[e("div",{staticClass:"divide-line"})])}]};var c=s("VU/8")(n,l,!1,function(t){s("cwUl")},null,null);e.default=c.exports},cwUl:function(t,e){}});