webpackJsonp([188],{IeHp:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Gu7T"),i=s.n(a),r=s("Cz8s"),o=s("mzkE"),l=s("Fd2+"),n=s("MJLE"),d=s.n(n),c=s("Yo4o"),v={components:{PublicHeader:r.a,PublicFooter:o.a,Dialog:l.a},data:function(){return{showPreLoading:!0,active_tab:2,goods:[],store:{cn:{}},order:{},activityed:[],deliveryer:{},logs:{},log:{},maxid:"",slides:[],refundmaxid:"",share:{info:{}},refund:{},refund_logs:{},can_delete:0,menufooter:{},sendRedpacket:!1,zhezhaoShow:!1,orderShare:!1,show_location:0,showSelectCall:!1,config_mall:{call_deliveryer_need_select:0,mobile:""},member:{},scrollTop:0,showMap:!0,showYinsihao:!1,yinsihao:{secret_mobile:"",extension:""}}},methods:{onRefresh:function(){window.location.reload()},onChangeStatus:function(t,e,s){if("cancel"==e)var a={url:"wmall/order/index/cancel?id="+t,confirm:"确定取消订单吗?"};else if("end_1"==e||"end_2"==e){a={url:"wmall/order/index/end?id="+t,confirm:"你确定收到该商家的外卖?",successUrl:"/pages/order/comment?id="+t};"end_2"==e&&(a.confirm="你确定收到该商家的外卖?")}else if("remind"==e)a={url:"wmall/order/index/remind?id="+t};this.util.jspost(a)},onFinishMealPay:function(){l.a.confirm({title:"温馨提示",message:"您的支付方式为餐后支付，请到商家收银台付款"}).then(function(){})},onCallStoreOrDeliveryer:function(t){var e=this,s=this;1==s.order.data.yinsihao_status?s.util.request({url:"wmall/order/index/yinsihao",data:{order_id:s.order.id,type:t}}).then(function(t){var a=t.data.message;a.errno?e.$toast(a.message):(a=a.message,s.yinsihao.secret_mobile=a.data.secret_mobile,s.yinsihao.extension=a.data.extension,s.showYinsihao=!0)}):s.util.jsTel(s.store.telephone)},onLoad:function(){var t=this;this.$route.query.id?this.id=this.$route.query.id:this.$toast("订单不存在或已删除！"),this.util.request({url:"wmall/order/index/new_detail",data:{id:this.id,menufooter:1}}).then(function(e){t.showPreLoading=!1;var s=e.data.message;if(s.errno)t.$toast(s.message);else{if(t.goods=[].concat(i()(t.goods),i()(s.message.goods)),t.store=s.message.store,1==t.util.getStorage("itime")){var a=Math.floor(100*Math.random());s.message.order.final_fee=a}if(t.order=s.message.order,t.activityed=[].concat(i()(t.activityed),i()(s.message.activityed)),t.deliveryer=s.message.deliveryer,t.logs=s.message.order_log.logs,t.log=s.message.order_log.log,t.maxid=s.message.order_log.maxid,t.slides=0==s.message.slides?s.message.slides:[].concat(i()(t.slides),i()(s.message.slides)),t.share=s.message.share,t.refund=s.message.refund_data.refund,t.refund_logs=s.message.refund_data.refund_logs,t.refundmaxid=s.message.refund_data.refundmaxid,t.can_delete=s.message.can_delete,t.show_location=s.message.show_location,t.config_mall=s.message.config_mall,t.menufooter=window.menufooter,2==t.order.order_type&&s.message.qrcode&&t.$nextTick(function(){this.newQrcode(s.message.qrcode)}),t.member=s.message.member,1==t.show_location&&(t.loadmap(),t.checkContentDivScroll()),t.share.info&&(t.share.info.share_button>0||1==t.share.info.superRedpacket_share_status)){var r=window._share,o=t;2==o.share.info.share_button&&(r.success=function(){o.util.request({url:"ordergrant/share/grant",data:{id:o.order.id}}).then(function(t){o.util.$toast(t.data.message.message.message,o.util.getUrl({path:"pages/order/detail",query:{id:o.order.id}}),1e3)})}),o.wx.share(r)}}})},onChangeZhezhao:function(t){t&&(this.orderShare=!1,this.sendRedpacket=!1),this.zhezhaoShow=!this.zhezhaoShow},onDeleteOrder:function(){var t=this,e=this;e.$dialog.confirm({message:"确订删除该订单吗？"}).then(function(){e.util.request({url:"wmall/order/index/delete",data:{id:e.order.id}}).then(function(s){var a=s.data.message;a.errno?t.$toast(a.message):e.util.$toast(a.message,e.util.getUrl({path:"/pages/order/index"}),1500,"replace")})}).catch(function(){})},onSelectCall:function(t){t&&this.util.jsTel(t),this.showSelectCall=!this.showSelectCall},newQrcode:function(t){new d.a("qrcode",{width:150,height:150,text:t,image:""})},loadmap:function(){var t=this;Object(c.a)().then(function(e){t.map=new e.Map("map-container",{resizeEnable:!0,center:[t.order.location_y,t.order.location_x],zoom:10});var s="",a="",i="";t.order.location_y&&t.order.location_x&&(s='<div class="marker-mine-route"></div>',a=-35,i=-35,0==t.order.is_pay&&(s='<div class="marker-common marker-mine-nopay"><div class="img-wrap"><img class="img-100" src="'+t.member.avatar+'" alt=""></div><div class=""><div class="font-12 ">等待支付</div></div>',a=-50,i=-44),new e.Marker({position:[t.order.location_y,t.order.location_x],offset:new e.Pixel(a,i),content:s}).setMap(t.map));1==t.order.is_pay&&t.store.location_y&&t.store.location_x&&(s='<div class="marker-start-head-route"><img src="'+t.store.logo+'" alt=""/></div>',a=-33,i=-80,1==t.order.status&&(s='<div class="marker-common marker-store-waiting"><div class="img-wrap"><img class="img-100" src="'+t.store.logo+'" alt=""></div><div class=""><div class="font-12 ">等待商家接单</div></div>',a=-62.5,i=-44),new e.Marker({position:[t.store.location_y,t.store.location_x],offset:new e.Pixel(a,i),content:s}).setMap(t.map));t.order.deliveryer_id>0&&t.deliveryer&&t.deliveryer.location_x&&t.deliveryer.location_y&&(7==t.order.delivery_status?(s='<div class="marker-common marker-deliveryer-take"><div class="img-wrap"><img class="img-100" src="'+t.deliveryer.avatar+'" alt=""></div><div class=""><div class="font-12 ">骑手正在赶往商家</div><div class="font-12 hide">距商家 <span class="c-danger">1.6km 18分钟</span></div> </div>',a=-85,i=-44):4==t.order.delivery_status&&(s='<div class="marker-common marker-deliveryer-take"><div class="img-wrap"><img class="img-100" src="'+t.deliveryer.avatar+'" alt=""></div><div class=""><div class="font-12 ">骑手正在送餐中</div><div class="font-12 hide">预计<span class="c-danger">18</span>分钟送达</span></div> </div>',a=-85,i=-44),new e.Marker({position:[t.deliveryer.location_y,t.deliveryer.location_x],offset:new e.Pixel(a,i),content:s}).setMap(t.map));t.map.setFitView()})},checkContentDivScroll:function(){var t=this,e=document.getElementById("scrollDiv");e.addEventListener("scroll",function(){var s=e.scrollTop-t.scrollTop;t.scrollTop=e.scrollTop,s<0?t.scrollTop<=0&&!t.showMap&&(t.showMap=!0):t.scrollTop>20&&t.showMap&&(t.showMap=!1,t.scrollTop=0)})}},mounted:function(){this.onLoad()}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"orderDetail"}},[s("public-header",{attrs:{title:"订单详情",bgcolor:"#ff2d4b",textcolor:"#fff"}}),t._v(" "),s("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content",attrs:{id:"scrollDiv"}},[s("van-tabs",{model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[s("van-tab",{staticClass:"order-detail",attrs:{title:"订单详情"}},[s("div",{staticClass:"order-info-wrap "},[1==t.show_location?s("div",{staticClass:"map-wrap",class:{"map-wrap-hide":!t.showMap}},[s("div",{attrs:{id:"map-container"}}),t._v(" "),s("div",{staticClass:"map-refresh",on:{click:t.onRefresh}},[s("i",{staticClass:"icon icon-refresh c-white"})])]):t._e(),t._v(" "),s("div",{staticClass:"order-state border-1px-tb"},[s("div",{staticClass:"order-state-con"},[s("div",{staticClass:"guide"},[s("img",{attrs:{src:"static/img/order_status_service.png",alt:""}})]),t._v(" "),s("div",{staticClass:"order-state-detail"},[s("div",{staticClass:"flex-lr"},[t._v("订单"+t._s(t.order.status_cn)),s("span",{staticClass:"pull-right date"},[t._v(t._s(t.order.addtime_cn))])]),t._v(" "),t.log&&7!=t.order.delivery_status?s("div",{staticClass:"tips clearfix"},[t._v(t._s(t.log.note))]):t._e()]),t._v(" "),t._e()]),t._v(" "),s("div",{staticClass:"order-btn"},[0==t.order.is_pay&&t.order.status<5?[3==t.order.order_type&&"finishMeal"==t.order.pay_type?s("div",{staticClass:"table-cell van-hairline--top van-hairline--right",on:{click:t.onFinishMealPay}},[t._v("立即支付")]):s("router-link",{staticClass:"table-cell van-hairline--top van-hairline--right",attrs:{to:t.util.getUrl({path:"/pages/public/pay",query:{order_id:t.order.id,order_type:"takeout"}})}},[t._v("立即支付")]),t._v(" "),3==t.order.order_type?s("router-link",{staticClass:"table-cell van-hairline--top van-hairline--right",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goods",query:{order_id:t.order.id,table_id:t.order.table_id,sid:t.order.sid}})}},[t._v("加菜")]):t._e(),t._v(" "),1==t.order.order_type&&1==t.order.update_order_info_status?s("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/pages/order/op",query:{id:t.order.id}})}},[t._v("修改备注等信息")]):t._e()]:t._e(),t._v(" "),1==t.order.status?[s("div",{staticClass:"table-cell van-hairline--top",on:{click:function(e){return t.onChangeStatus(t.order.id,"cancel")}}},[t._v("取消订单")]),t._v(" "),1==t.order.is_pay?s("div",{staticClass:"table-cell van-hairline--left van-hairline--top",on:{click:function(e){return t.onChangeStatus(t.order.id,"remind")}}},[t._v("催单")]):t._e()]:t.order.status>1&&t.order.status<5?[t.order.customer_cancel_status?s("div",{staticClass:"table-cell  van-hairline--top",on:{click:function(e){return t.onChangeStatus(t.order.id,"cancel")}}},[t._v("取消订单")]):t._e(),t._v(" "),1==t.order.order_type&&4==t.order.status?s("div",{staticClass:"table-cell  van-hairline--top",on:{click:function(e){return t.onChangeStatus(t.order.id,"end_1")}}},[t._v("确认送达")]):2==t.order.order_type?s("div",{staticClass:"table-cell van-hairline--top",on:{click:function(e){return t.onChangeStatus(t.order.id,"end_2")}}},[t._v("#"+t._s(t.order.serial_sn)+"-我已提货")]):t._e(),t._v(" "),1==t.order.is_pay?s("div",{staticClass:"table-cell van-hairline--left van-hairline--top",on:{click:function(e){return t.onChangeStatus(t.order.id,"remind")}}},[t._v("催单")]):t._e(),t._v(" "),3==t.order.order_type&&1==t.order.is_pay&&"finishMeal"==t.order.pay_type?s("router-link",{staticClass:"table-cell van-hairline--left van-hairline--top",attrs:{to:t.util.getUrl({path:"/tangshi/pages/table/goods",query:{order_id:t.order.id,table_id:t.order.table_id,sid:t.order.sid}})}},[t._v("加菜")]):t._e()]:5==t.order.status?[s("router-link",{staticClass:"table-cell  van-hairline--top",attrs:{to:t.util.getUrl({path:"pages/store/goods",query:{sid:t.order.sid,order_id:t.order.id}})}},[t._v("再来一单")]),t._v(" "),0==t.order.is_comment?s("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/pages/order/comment",query:{id:t.order.id}})}},[t._v(t._s(t.order.comment_cn))]):t._e(),t._v(" "),t._e()]:6==t.order.status?[s("router-link",{staticClass:"table-cell  van-hairline--top",attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.order.sid,order_id:t.order.id}})}},[t._v("再来一单")])]:t._e(),t._v(" "),1==t.order.update_address_status?[s("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/pages/order/address",query:{id:t.order.id}})}},[t._v("修改收货地址")])]:t._e(),t._v(" "),t.order.data&&t.order.data.pindan?[s("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/pages/order/pindanbill",query:{id:t.order.id}})}},[t._v("拼单分账")])]:t._e(),t._v(" "),1==t.can_delete?s("div",{staticClass:"table-cell van-hairline--top van-hairline--left",on:{click:t.onDeleteOrder}},[t._v("删除订单")]):t._e(),t._v(" "),t.order.refund_status>0?s("router-link",{staticClass:"table-cell  van-hairline--top van-hairline--left",attrs:{to:t.util.getUrl({path:"/pages/order/refund",query:{id:t.order.id}})}},[t._v("退款详情")]):t._e()],2)]),t._v(" "),t.slides?s("div",{staticClass:"swiper-container"},[s("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(t.slides,function(e,a){return s("van-swipe-item",{key:a},[s("router-link",{attrs:{tag:"div",to:t.util.getUrl({path:"item.link"})}},[s("img",{attrs:{src:e.thumb}})])],1)}),1)],1):t._e(),t._v(" "),t.order.deliveryer_id>0?[s("div",{staticClass:"content-block-title"},[t._v("配送员信息")]),t._v(" "),s("div",{staticClass:"deliveryer-container"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.deliveryer.avatar,alt:""}})]),t._v(" "),s("div",{staticClass:"deliveryer-info"},[s("div",{staticClass:"name"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.deliveryer.title)+"\n\t\t\t\t\t\t\t\t\t"),s("div",{staticClass:"allocation-icon"},[t._v(t._s(t.order.delivery_title))]),t._v(" "),s("div",{staticClass:"mobile"},[t._v(t._s(t.deliveryer.mobile))])])]),t._v(" "),1==t.config_mall.call_deliveryer_need_select?s("div",{staticClass:"operate"},[s("div",{staticClass:"tel",on:{click:function(e){return t.onSelectCall()}}},[s("div",{staticClass:"icon icon-telephone icon-telephone-circle"})])]):s("div",{staticClass:"operate"},[s("div",{staticClass:"tel",on:{click:function(e){return t.onCallStoreOrDeliveryer("deliveryer")}}},[s("div",{staticClass:"icon icon-telephone icon-telephone-circle"})])])])]:t._e(),t._v(" "),s("div",{staticClass:"content-block-title"},[t._v("订单明细")]),t._v(" "),s("div",{staticClass:"order-details"},[s("div",{staticClass:"order-details-con border-1px-t "},[s("div",{staticClass:"store-info"},[s("router-link",{staticClass:"external",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goods",query:{sid:this.store.id}})}},[s("img",{attrs:{src:t.store.logo,alt:""}}),t._v(" "),s("span",{staticClass:"store-title"},[t._v(t._s(t.store.title))]),t._v(" "),s("span",{staticClass:"icon icon-arrow-right"})]),t._v(" "),s("div",{staticClass:"store-tel",on:{click:function(e){return t.onCallStoreOrDeliveryer("store")}}},[s("span",{staticClass:"icon icon-telephone icon-telephone-circle"})])],1),t._v(" "),s("div",{staticClass:"inner-con border-1px-t"},t._l(t.goods,function(e,a){return s("van-row",{key:a,staticClass:"no-gutter"},[s("van-col",{attrs:{span:"12"}},[t._v(t._s(e.goods_title))]),t._v(" "),s("van-col",{staticClass:"color-muted text-right ",attrs:{span:"4"}},[t._v("x"+t._s(e.goods_num))]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"8"}},[t._v("¥"+t._s(e.goods_price))])],1)}),1),t._v(" "),s("div",{staticClass:"inner-con border-1px-t"},[s("van-row",{staticClass:"no-gutter"},[s("van-col",{attrs:{span:"20"}},[t._v(t._s(t.store.cn.box_price))]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v("¥"+t._s(t.order.box_price))])],1),t._v(" "),s("van-row",{staticClass:"no-gutter"},[s("van-col",{attrs:{span:"20"}},[t._v(t._s(t.store.cn.pack_fee))]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v("¥"+t._s(t.order.pack_fee))])],1),t._v(" "),t.order.person_num>0?s("van-row",{staticClass:"no-gutter"},[s("van-col",{attrs:{span:"20"}},[t._v("餐具数量")]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v(t._s(t.order.person_num)+"套")])],1):t._e(),t._v(" "),s("van-row",{staticClass:"no-gutter"},[s("van-col",{attrs:{span:"20"}},[t._v("配送费")]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v("¥"+t._s(t.order.delivery_fee))])],1),t._v(" "),3==t.order.order_type?s("van-row",{staticClass:"no-gutter"},[s("van-col",{attrs:{span:"20"}},[t._v("服务费")]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"4"}},[t._v("¥"+t._s(t.order.serve_fee))])],1):t._e(),t._v(" "),t.order.data?t._l(t.order.data.extra_fee,function(e,a){return t.order.data.extra_fee.length>0?s("van-row",{key:a,staticClass:"no-gutter"},[s("van-col",{attrs:{span:"16"}},[t._v(t._s(e.name))]),t._v(" "),s("van-col",{staticClass:" text-right ",attrs:{span:"8"}},[t._v("¥"+t._s(e.fee))])],1):t._e()}):t._e()],2),t._v(" "),t.activityed.length>0?s("div",{staticClass:"inner-con border-1px-t"},t._l(t.activityed,function(e,a){return s("van-row",{key:a,staticClass:"no-gutter"},[s("van-col",{staticClass:"icon-before",attrs:{span:"12"}},[s("img",{attrs:{src:"static/img/"+e.type+"_b.png",alt:""}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("van-col",{staticClass:"text-right discount-note",attrs:{span:"12"}},[t._v(t._s(e.note))])],1)}),1):t._e(),t._v(" "),s("div",{staticClass:"inner-con"},[s("van-row",{staticClass:"no-gutter"},[s("van-col",{attrs:{span:"14"}},[s("span",{staticClass:"color-muted"},[t._v("订单")]),t._v(" ¥"+t._s(t.order.total_fee)+" "),s("span",{staticClass:"color-muted"},[t._v(" - 优惠")]),t._v(" ¥"+t._s(t.order.discount_fee)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),s("van-col",{staticClass:"text-right color-muted",attrs:{span:"5"}},[t._v("总计")]),t._v(" "),s("van-col",{staticClass:"text-right",attrs:{span:"5"}},[t._v("¥"+t._s(t.order.final_fee))])],1)],1),t._v(" "),t.order.order_type<3?s("div",{staticClass:"order-btn"},[s("router-link",{staticClass:"table-cell border-1px-t color-danger",attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:t.order.sid,order_id:t.order.id}})}},[t._v("再来一单")])],1):t._e()])]),t._v(" "),2==t.order.order_type?[s("div",{staticClass:"content-block-title"},[t._v("订单核销")]),t._v(" "),s("div",{staticClass:"cancel-code border-1px-t"},[s("div",[s("div",{staticClass:"qrcode",attrs:{id:"qrcode"}}),t._v(" "),s("p",{staticClass:"text-center font-12 margin-10-t"},[t._v("核销码: "+t._s(t.order.code))])]),t._v(" "),s("p",{staticClass:"code-text"},[t._v("请商家扫描二维码或者填写核销码即可消费")])])]:t._e(),t._v(" "),t.order.order_type<=2?[s("div",{staticClass:"content-block-title"},[t._v("配送信息")]),t._v(" "),s("div",{staticClass:"other-info"},[s("ul",{staticClass:"border-1px-tb"},[s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v(t._s(1==t.order.order_type?"期望时间":"自提时间"))]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.delivery_day)+"~"+t._s(t.order.delivery_time))])])]),t._v(" "),1==t.order.order_type?[s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("配送地址")]),t._v(" "),s("div",{staticClass:"item-after",staticStyle:{"line-height":"22px"}},[s("div",[t._v(t._s(t.order.username)+" ("+t._s(t.order.sex)+") "+t._s(t.order.mobile))]),t._v("  "+t._s(t.order.address))])])])]:2==t.order.order_type?[s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("自提地址")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.store.address))])])])]:t._e(),t._v(" "),t.order.zhunshibao_status>0?s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner flex-lr"},[s("div",{staticClass:"item-title"},[t._v("准时宝")]),t._v(" "),s("router-link",{staticClass:"item-after",attrs:{tag:"div",to:t.util.getUrl({path:"pages/order/zhunshibao",query:{id:t.order.id}})}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t准时宝详情\n\t\t\t\t\t\t\t\t\t\t\t"),s("div",{staticClass:"icon icon-right c-gray"})])],1)]):t._e()],2)])]:t._e(),t._v(" "),s("div",{staticClass:"content-block-title"},[t._v("其他信息")]),t._v(" "),s("div",{staticClass:"other-info"},[s("ul",{staticClass:"border-1px-tb"},[s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("商户订单号")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v("#"+t._s(t.order.serial_sn))])])]),t._v(" "),s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("平台订单号")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.ordersn))])])]),t._v(" "),s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("订单类型")]),t._v(" "),s("div",{staticClass:"item-after"},[1==t.order.order_type?[t._v("外卖")]:2==t.order.order_type?[t._v("自提")]:3==t.order.order_type?[t._v("店内")]:4==t.order.order_type?[t._v("预定")]:t._e()],2)])]),t._v(" "),3==t.order.order_type?[s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("桌台号")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.table.title))])])])]:t._e(),t._v(" "),4==t.order.order_type?[s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("预定时间")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.reserve_time))])])]),t._v(" "),s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("桌台类型")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.table_category.title))])])]),t._v(" "),t.order.table_id>0?s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("预定桌号")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.table.title))])])]):t._e(),t._v(" "),s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("预定类型")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.reserve_type_cn))])])])]:t._e(),t._v(" "),s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("支付方式")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.pay_type_cn))])])]),t._v(" "),s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("备注信息")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.note?t.order.note:"无"))])])]),t._v(" "),t.order.invoice?[t.order.invoice.title?s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("发票抬头")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.invoice.title))])])]):t._e(),t._v(" "),t.order.invoice.recognition?s("li",{staticClass:"item-content flex"},[s("div",{staticClass:"item-inner border-1px-b flex-lr"},[s("div",{staticClass:"item-title"},[t._v("纳税人识别号")]),t._v(" "),s("div",{staticClass:"item-after"},[t._v(t._s(t.order.invoice.recognition))])])]):t._e()]:t._e()],2)])],2)]),t._v(" "),s("van-tab",{staticClass:"order-status",attrs:{title:"订单状态"}},t._l(t.logs,function(e,a){return s("div",{key:a,staticClass:"order-status-item"},[s("div",{staticClass:"guide"},[t.maxid!=a?s("img",{attrs:{src:"static/img/order_status_service_grey.png",alt:""}}):s("img",{attrs:{src:"static/img/order_status_service.png",alt:""}})]),t._v(" "),s("div",{staticClass:"order-status-info"},[s("div",{staticClass:"arrow-left"}),t._v(" "),s("div",{staticClass:"flex-lr"},[t._v(t._s(e.title)),s("span",{staticClass:"time pull-right"},[t._v(t._s(e.addtime))])]),t._v(" "),e.note?s("div",{staticClass:"tips",domProps:{innerHTML:t._s(e.note)}}):t._e()])])}),0)],1)],1),t._v(" "),t.share.info.share_button>0?[s("div",{staticClass:"send-redpacket",on:{click:function(e){t.orderShare=!0}}},[t._m(0)]),t._v(" "),s("van-popup",{staticClass:"popup-send-redpacket padding-15-b",attrs:{overlay:!0},model:{value:t.orderShare,callback:function(e){t.orderShare=e},expression:"orderShare"}},[s("div",{staticClass:"popup-content grant-share"},[s("p",{staticClass:"font-20 grant-share-title margin-10-b"},[t._v("分享规则")]),t._v(" "),s("p",{staticClass:"font-15"},[t._v("1. 顾客在订单完成后"+t._s(t.share.share_grant_days_limit)+"天之内，对订单进行评价并分享到朋友圈即可获取"+t._s(t.share.share_grant)+t._s(t.share.grantType_cn))]),t._v(" "),s("p",{staticClass:"font-15 margin-10-t"},[t._v("2. 每人通过分享订单最多可获取"+t._s(t.share.share_grant_max)+t._s(t.share.grantType_cn)+"，超出后将不再奖励")])]),t._v(" "),s("div",{staticClass:"popup-footer"},[s("div",{staticClass:"grant-share-btn"},[1==t.share.info.share_button?s("router-link",{staticClass:"btn bg-danger",attrs:{tag:"div",to:t.util.getUrl({path:"pages/order/comment",query:{id:t.order.id}})}},[t._v("现在去评价")]):s("div",{staticClass:"btn bg-danger",on:{click:function(e){return t.onChangeZhezhao(!0)}}},[t._v("您已评价,去分享")])],1)])])]:t._e(),t._v(" "),1==t.share.info.superRedpacket_share_status?[s("div",{staticClass:"send-redpacket",on:{click:function(e){t.sendRedpacket=!0}}},[s("img",{attrs:{src:"static/img/send-redpacket.png",alt:""}})]),t._v(" "),s("van-popup",{staticClass:"popup-send-redpacket",attrs:{overlay:!0},model:{value:t.sendRedpacket,callback:function(e){t.sendRedpacket=e},expression:"sendRedpacket"}},[s("div",{staticClass:"popup-content border-1px-b"},[s("img",{attrs:{src:"static/img/wv.png",alt:""}}),t._v(" "),s("p",{staticClass:"font-15 font-bold"},[t._v("恭喜获得"+t._s(t.share.info.superRedpacket.packet_total)+"个红包")]),t._v(" "),s("p",{staticClass:"font-14 margin-10-t"},[t._v("分享给小伙伴，大家一起抢。")])]),t._v(" "),s("div",{staticClass:"popup-footer flex-lr"},[s("div",{staticClass:"cancle border-1px-r",on:{click:function(e){t.sendRedpacket=!1}}},[t._v("取消")]),t._v(" "),s("div",{staticClass:"grant",on:{click:function(e){return t.onChangeZhezhao(!0)}}},[t._v("发红包")])])])]:t._e(),t._v(" "),t.zhezhaoShow?s("div",{staticClass:"share-zhezhao",on:{click:function(e){return t.onChangeZhezhao()}}},[s("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e(),t._v(" "),s("van-popup",{staticClass:"call-phone",model:{value:t.showSelectCall,callback:function(e){t.showSelectCall=e},expression:"showSelectCall"}},[s("div",{staticClass:"call-phone-header"},[t._v("请选择联系人")]),t._v(" "),s("div",{staticClass:"call-plateform",on:{click:function(e){return t.onSelectCall(t.config_mall.mobile)}}},[s("div",[t._v("联系平台(推荐)")])]),t._v(" "),s("div",{staticClass:"call-deliveryer van-hairline--top",on:{click:function(e){return t.onSelectCall(t.deliveryer.mobile)}}},[s("div",[t._v("联系配送员")])])]),t._v(" "),s("van-popup",{staticClass:"yinsihao-popup",model:{value:t.showYinsihao,callback:function(e){t.showYinsihao=e},expression:"showYinsihao"}},[s("div",{staticClass:"popup-title"},[s("img",{staticClass:"yinsihao-img",attrs:{src:"static/img/yinsihao_bg.png",alt:""}})]),t._v(" "),s("div",{staticClass:"popup-container van-hairline--bottom"},[s("div",{staticClass:"font-14"},[t._v("将通过转播的方式保护您的隐私")]),t._v(" "),s("div",{staticClass:"yinsihao-mobile"},[t._v(t._s(t.yinsihao.secret_mobile)+" 转 "),s("span",{staticClass:"c-danger"},[t._v(t._s(t.yinsihao.extension))])]),t._v(" "),s("div",{staticClass:"yinsihao-tips"},[t._v("拨打"+t._s(t.yinsihao.secret_mobile)),s("br"),t._v("接通后输入分机号"+t._s(t.yinsihao.extension)+"#即可")])]),t._v(" "),s("div",{staticClass:"popup-footer"},[s("div",{staticClass:"yinsihao-cancel",on:{click:function(e){t.showYinsihao=!1}}},[t._v("取消")]),t._v(" "),s("div",{staticClass:"yinsihao-confirm van-hairline--left",on:{click:function(e){t.util.jsTel(t.yinsihao.secret_mobile),t.showYinsihao=!1}}},[t._v("立即呼叫")])])])],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"share-inner"},[e("div",{staticClass:"icon icon-share"})])}]};var p=s("VU/8")(v,_,!1,function(t){s("j9K+")},null,null);e.default=p.exports},"j9K+":function(t,e){}});