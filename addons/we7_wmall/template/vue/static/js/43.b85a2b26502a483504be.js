webpackJsonp([43],{Ez5F:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("5Kdi"),e=i("mzkE"),c=i("kEnp"),o={name:"MemberMine",data:function(){return{showPreLoading:!0,is_use_diy:0,title:"会员中心",data:{user:{},credit1:"",credit2:"",config:{mall:{},store:{settle:{}}},coupon_nums:"",deliveryCard_status:"",deliveryCard_setmeal_ok:"",spread:{},ordergrant:"",slides:[],cover:{},mealRedpacket:{},has_gohome:0},star:3,notice:!1,diydata:{},menufooter:this.util.getStorage("menufooter")}},components:{PublicFooter:e.a,diy:c.a},methods:{onLoad:function(){var t=this;this.util.request({url:"wmall/member/mine",data:{menufooter:1}}).then(function(a){t.showPreLoading=!1;var i=a.data.message;if(!i.errno){if(i.message.is_use_diy&&1==i.message.is_use_diy&&(t.is_use_diy=i.message.is_use_diy,t.diydata=i.message,t.title=i.message.diy.data.page.title),t.data=i.message,1==t.util.getStorage("itime")){var e=Math.floor(100*Math.random());t.data.credit2=e}t.menufooter=window.menufooter,t.util.ish5app()&&s.a.init({relation:i.message.user.token})}})}},mounted:function(){this.util.imap(),this.onLoad()}},l={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"member-mine"}},[i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),i("div",{staticClass:"content"},[t.is_use_diy?[i("diy",{attrs:{diydata:t.diydata}})]:[i("div",{staticClass:"diy-memberHeader"},[i("div",{staticClass:"member-headinfo"},[i("div",{staticClass:"headinfo-balance"},[i("div",{staticClass:"headinfo-balance-price"},[t._v("余额")]),t._v(" "),i("div",{staticClass:"headinfo-price"},[t._v(t._s(t.data.credit2))]),t._v(" "),i("router-link",{staticClass:"headinfo-filling-price",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/member/recharge"})}},[t._v("充值")])],1),t._v(" "),i("div",{staticClass:"headinfo-user"},[i("div",{staticClass:"user-face",on:{click:function(a){t.util.jsUrl(t.util.getSiteUrl("system/common/vuesession/userinfo",{force:1},!0))}}},[i("img",{attrs:{src:t.data.user.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"user-name"},[t._v(t._s(t.data.user.nickname))]),t._v(" "),t.data.user.groupname?i("div",{staticClass:"user-level"},[t._v(" ["+t._s(t.data.user.groupname)+"] ")]):t._e()]),t._v(" "),i("div",{staticClass:"headinfo-balance"},[i("div",{staticClass:"headinfo-balance-price"},[t._v("积分")]),t._v(" "),i("div",{staticClass:"headinfo-price"},[t._v(t._s(t.data.credit1))]),t._v(" "),i("router-link",{staticClass:"headinfo-filling-price",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/creditshop/index"})}},[t._v("兑换")])],1),t._v(" "),i("router-link",{staticClass:"setting",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/member/profile"})}},[i("van-icon",{staticClass:"icon",attrs:{name:"settings"}})],1)],1)]),t._v(" "),t.data.user.mobile?t._e():i("router-link",{staticClass:"diy-mobile-bind",attrs:{to:t.util.getUrl({path:"/pages/member/bind"}),tag:"div"}},[i("ul",[i("li",{staticClass:"item-content"},[i("div",{staticClass:"item-media"},[i("van-icon",{attrs:{name:"phone1"}})],1),t._v(" "),i("div",{staticClass:"item-inner"},[i("div",{staticClass:"item-title"},[t._v("绑定手机号")])]),t._v(" "),i("van-icon",{staticClass:"right-icon",attrs:{name:"right"}})],1),t._v(" "),i("div",{staticClass:"notice"},[t._v("\n\t\t\t\t\t\t如果您用手机号注册过会员或您想通过微信外购物请绑定您的手机号码\n\t\t\t\t\t")])])]),t._v(" "),i("div",{staticClass:"diy-blockNav"},[i("div",{staticClass:"col-4"},[i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/member/favorite"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"favor_light"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的收藏")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/member/address"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"zuobiao"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的地址")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/member/footmark"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"footprint"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的足迹")])])],1)]),t._v(" "),1==t.data.mealRedpacket.status?i("router-link",{staticClass:"diy-mealRedpacket flex-lr",attrs:{tag:"div",to:t.util.getUrl({path:"/package/pages/mealRedpacket/meal"})}},[i("div",{staticClass:"my-mealRedpacket flex"},[i("div",{staticClass:"mealRedpacket-logo"},[i("img",{attrs:{src:"static/img/meal/meal_logo.png",alt:""}})]),t._v(" "),t.data.mealRedpacket.canBuy?i("div",{staticClass:"mealRedpacket-tip"},[t._v(t._s(t.data.mealRedpacket.title))]):i("div",{staticClass:"mealRedpacket-tip"},[t._v("已获得"+t._s(t.data.mealRedpacket.total_redpacket)+"元红包")])]),t._v(" "),i("span",{staticClass:"icon icon-right"})]):t._e(),t._v(" "),t.data.slides.length>0?i("div",{staticClass:"diy-member-swiper"},[i("van-swipe",{attrs:{autoplay:3e3}},t._l(t.data.slides,function(a,s){return i("van-swipe-item",{key:s},[i("router-link",{attrs:{to:t.util.getUrl({path:"slide.link"})}},[i("img",{attrs:{src:a.thumb}})])],1)}))],1):t._e(),t._v(" "),i("div",{staticClass:"diy-blockNav"},[i("div",{staticClass:"blockNav-title border-1px-b"},[t._v("我的资产")]),t._v(" "),i("div",{staticClass:"col-4"},[i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/member/redPacket/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"money"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的红包")]),t._v(" "),t.data.redpacket_nums>0?i("div",{staticClass:"icon-tips c-danger"},[t._v(t._s(t.data.redpacket_nums)+"个未使用")]):t._e()]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/member/coupon/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"iconpiaoquan01"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的代金券")]),t._v(" "),t.data.coupon_nums>0?i("div",{staticClass:"icon-tips c-danger"},[t._v(t._s(t.data.coupon_nums)+"个未使用")]):t._e()]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/deliveryCard/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"vipcard"}}),t._v(" "),i("span",{staticClass:"nav-mark"},[t._v("hot")])],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("配送会员卡")]),t._v(" "),i("div",{staticClass:"icon-tips"},[t._v(t._s(1==t.data.deliveryCard_setmeal_ok?"已购买":"暂未购买"))])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/member/recharge"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"recharge"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("余额充值")]),t._v(" "),i("div",{staticClass:"icon-tips c-danger"},[t._v("¥"+t._s(t.data.credit2))])])],1)]),t._v(" "),i("div",{staticClass:"diy-blockNav"},[i("div",{staticClass:"blockNav-title border-1px-b"},[t._v("我的服务")]),t._v(" "),i("div",{staticClass:"col-4"},[i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/channel/brand"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"dianpu"}}),t._v(" "),i("span",{staticClass:"nav-mark"},[t._v("hot")])],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("为您优选")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/bargain/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"dianpu"}}),t._v(" "),i("span",{staticClass:"nav-mark"},[t._v("hot")])],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("天天特价")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/channel/coupon"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"iconpiaoquan01"}}),t._v(" "),i("span",{staticClass:"nav-mark"},[t._v("hot")])],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("领券中心")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/home/help"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"creative"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("帮助与反馈")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/home/help"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"service"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("客服中心")])])],1)]),t._v(" "),1==t.data.has_gohome?i("div",{staticClass:"diy-blockNav"},[i("div",{staticClass:"blockNav-title border-1px-b"},[t._v("生活圈")]),t._v(" "),i("div",{staticClass:"col-4"},[i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/gohome/pages/home/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"home"}}),t._v(" "),i("span",{staticClass:"nav-mark"},[t._v("hot")])],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("生活圈首页")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/gohome/pages/order/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"order"}}),t._v(" "),t._e()],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的订单")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/gohome/pages/member/favorite"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"like"}}),t._v(" "),t._e()],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的收藏")])]),t._v(" "),i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/gohome/pages/kanjia/record"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"activity"}}),t._v(" "),t._e()],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("我的砍价")])])],1)]):t._e(),t._v(" "),i("div",{staticClass:"diy-blockNav"},[i("div",{staticClass:"blockNav-title border-1px-b"},[t._v("更多推荐")]),t._v(" "),i("div",{staticClass:"col-4"},[t.data.spread?i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/spread/register"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"iconpiaoquan01"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v(t._s(t.data.spread.title))])]):t._e(),t._v(" "),1==t.data.ordergrant?i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/ordergrant/index"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"vipcard"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("下单有礼")])]):t._e()],1)]),t._v(" "),i("div",{staticClass:"diy-blockNav"},[i("div",{staticClass:"blockNav-title border-1px-b"},[t._v("商家管理")]),t._v(" "),i("div",{staticClass:"col-4"},[i("div",{staticClass:"diy-icon-col",attrs:{tag:"div"},on:{click:function(a){t.util.jsUrl(t.data.cover.clerk)}}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"profile"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("店员入口")])]),t._v(" "),i("div",{staticClass:"diy-icon-col",attrs:{tag:"div"},on:{click:function(a){t.util.jsUrl(t.data.cover.deliveryer)}}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"waimai"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("配送员入口")])]),t._v(" "),t.data.config.store&&t.data.config.store.settle&&1==t.data.config.store.settle.status?i("router-link",{staticClass:"diy-icon-col",attrs:{to:t.util.getUrl({path:"/pages/store/settle"}),tag:"div"}},[i("div",{staticClass:"icon-img"},[i("van-icon",{staticClass:"icon",attrs:{name:"shop"}})],1),t._v(" "),i("div",{staticClass:"text-icon"},[t._v("商户入驻")])]):t._e()],1)]),t._v(" "),i("div",{staticClass:"diy-copyright copyright",domProps:{innerHTML:t._s(t.data.config.mall.copyright)}})]],2)],1)},staticRenderFns:[]};var n=i("VU/8")(o,l,!1,function(t){i("qUZ/")},null,null);a.default=n.exports},"qUZ/":function(t,a){}});
//# sourceMappingURL=43.b85a2b26502a483504be.js.map