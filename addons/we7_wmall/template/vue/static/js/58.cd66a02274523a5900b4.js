webpackJsonp([58],{SPfW:function(t,e){},VZ3d:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),n=i.n(o),a=i("Cz8s"),s=i("mzkE"),r=i("kEnp"),d=i("NYxO"),c={data:function(){return{showPreLoading:!0,is_grant:0,title:"",active:1,diydata:{diy:{data:{}}},gconfig:{mall:{}},menufooter:{params:{navstyle:0},css:{iconColor:"#163636",iconColorActive:"#ff2d4b",textColor:"#929292",textColorActive:"#ff2d4b"},data:{M0123456789101:{link:"pages/store/home?sid="+this.util.getUrlParam(window.location.href,"sid"),icon:"icon-home",text:"首页"},M0123456789102:{link:"pages/order/index",icon:"icon-order",text:"订单"},M0123456789103:{link:"pages/member/mine",icon:"icon-mine",text:"我的"}}}}},components:{PublicHeader:a.a,PublicFooter:s.a,diy:r.a},methods:n()({},Object(d.b)(["setLocation","getLocation"]),{onLoad:function(){var t=this;this.util.request({url:"wmall/store/home/index",data:{sid:this.sid||3,gconfig:1}}).then(function(e){t.showPreLoading=!1,t.gconfig=window.gconfig;var i=e.data.message;i.errno?t.$toast(i.message):(t.diydata.diy.data=i.message.homepage,t.title=t.diydata.diy.data.page.title||"门店首页",t.util.setWXTitle(t.title))})},onChangeTab:function(t,e){},getCoupon:function(){var t=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(e){var i=e.data.message;0==i.errno?(t.util.$toast(i.message,"",1e3),t.is_grant=1):t.util.$toast("领取失败","",1e3)})}}),created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid)},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"store-home"}},[i("public-header",{attrs:{title:t.title}}),t._v(" "),t.gconfig&&2==t.gconfig.mall.version?i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}):t._e(),t._v(" "),i("div",{staticClass:"content"},[i("diy",{attrs:{diydata:t.diydata,active:t.active,is_grant:t.is_grant,preLoading:t.showPreLoading},on:{onChangeTab:t.onChangeTab,getCoupon:t.getCoupon}})],1)],1)},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("SPfW")},null,null);e.default=u.exports}});