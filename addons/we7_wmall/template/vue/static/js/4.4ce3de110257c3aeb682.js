webpackJsonp([4],{"7vqu":function(t,a){},XBL4:function(t,a){},nU8l:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Gu7T"),o=e.n(i),s=e("mvHQ"),d=e.n(s),r=e("woOf"),n=e.n(r),l=e("Dd8w"),c=e.n(l),u=e("NYxO"),y=e("mzkE"),h=e("Cz8s"),g=e("fgl9"),f=e("kEnp"),m=e("rniE"),p={data:function(){return{getLocationFail:!1,showPreLoading:!0,is_use_diy:0,diydata:{diy:{data:{}},storeExtra:{condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},stores:{loading:!0,finished:!1,page:1,psize:20,loaded:0,empty:0,data:[]},popup:{storeSearch:!1},superRedpacketData:{},config:{},guideData:{is_show:!1}},menufooter:this.util.getStorage("menufooter"),order_remind:{},showFixedSearchBar:!1,follow:{},failedTips:{type:"message",tips:"平台暂时关闭",btnText:"知道喽",link:"close"},mallClose:!1}},components:{PublicHeader:h.a,PublicFooter:y.a,diy:f.a,OrderStatusWarpper:m.a,follow:g.a},methods:c()({},Object(u.b)(["setLocation","getLocation"]),{onToggleDiscount:function(t,a){"waimai_stores"==this.diydata.diy.data.items[a].id?this.diydata.diy.data.items[a].data[t].activity.is_show_all=!this.diydata.diy.data.items[a].data[t].activity.is_show_all:this.diydata.stores.data[t].activity.is_show_all=!this.diydata.stores.data[t].activity.is_show_all},onCloseRedpacket:function(){this.diydata.superRedpacketData.is_show=!1,this.diydata.superRedpacketData=n()({},this.diydata.superRedpacketData)},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onChangeStoreExtra:function(t){"multiple"==t?(this.diydata.storeExtra.multiple=!0,this.diydata.storeExtra.filter=!1):(this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter=!0),this.diydata.popup.storeSearch=!0},onStoreOrderby:function(t,a,e){if("order"==t)"svipRedpacket"==a?this.diydata.storeExtra.condition.dis=a:(this.diydata.storeExtra.condition.order=a,this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter_title="sailed"!=a&&"distance"!=a?e:"综合排序");else{if("discounts"==t)return this.diydata.storeExtra.condition.dis==a&&(a=""),this.diydata.storeExtra.condition.dis=a,!1;if("mode"==t)return this.diydata.storeExtra.condition.mode==a&&(a=""),this.diydata.storeExtra.condition.mode=a,!1;"clear"==t?(this.diydata.storeExtra.condition.dis="",this.diydata.storeExtra.condition.order="",this.diydata.storeExtra.condition.mode="",this.diydata.storeExtra.filter=!1,this.diydata.storeExtra.filter_title="综合排序"):"finish"==t&&(this.diydata.storeExtra.filter=!1)}this.diydata.popup.storeSearch=!1,this.onGetStore(!0)},onGetStore:function(t){var a=this,e=this;t&&(e.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0}),e.diydata.stores.loading=!0,this.util.request({url:"wmall/home/index/store",data:{lat:e.locationInfo.location_x,lng:e.locationInfo.location_y,page:e.diydata.stores.page,psize:e.diydata.stores.psize,condition:d()(e.diydata.storeExtra.condition)}}).then(function(i){var s=i.data.message.message;t&&(e.diydata.stores.data=[]),e.diydata.stores.data=[].concat(o()(a.diydata.stores.data),o()(s.stores)),s.pagetotal<=e.diydata.stores.page&&(e.diydata.stores.loaded=1,e.diydata.stores.data.length||(e.diydata.stores.empty=!0),e.diydata.stores.finished=!0),e.diydata.stores.loading=!1,e.diydata.stores.page++,!e.diydata.stores.loaded&&s.stores.length<10&&a.onGetStore()})},onLoad:function(){var t=this,a=this;this.util.request({url:"wmall/home/index/index",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,menufooter:1,order_remind:1,code:this.code||0}}).then(function(e){a.showPreLoading=!1;var i=e.data.message;if(i.errno)return-3e3==i.errno?(t.mallClose=!0,t.failedTips.tips=i.message,!1):void t.$toast(i.message);if(a.diydata.config=i.message.config,a.diydata.diy=i.message.diy,a.diy=i.message.diy,a.util.setWXTitle(a.diydata.config.title),a.diydata.superRedpacketData=i.message.superRedpacketData,a.diydata.superRedpacketData.is_show=!0,a.code){var s=i.message.spread;0==s.errno?a.spreadInfo=s.message.nickname+"向您推荐了"+a.diydata.config.title+",快去下单吧!":a.spreadInfo=s.message,a.$toast(a.spreadInfo)}if(a.diydata.diy.guide)if(1==a.diydata.diy.guide.params.status&&"interval"==a.diydata.diy.guide.params.show_setting){var d=t.util.getStorage("guideStorage");(!d||d&&!d.show)&&(t.util.setStorage("guideStorage",{show:1},60*a.diydata.diy.guide.params.interval_time),a.diydata.guideData.is_show=!0)}else 1==a.diydata.diy.guide.params.status&&"everytime"==a.diydata.diy.guide.params.show_setting&&(t.util.removeStorage("guideStorage"),a.diydata.guideData.is_show=!0);var r=i.message.default_location;if(r&&r.location_x&&(t.getLocationFail=!1,a.setLocation(r)),1==t.util.getStorage("itime")&&i.message.stores.stores.length>10){var n=Math.floor(5*Math.random());i.message.stores.stores=i.message.stores.stores.slice(2,n)}a.diydata.stores.data=[].concat(o()(t.diydata.stores.data),o()(i.message.stores.stores)),i.message.stores.pagetotal<=a.diydata.stores.page&&(a.diydata.stores.loaded=1,a.diydata.stores.data.length||(a.diydata.stores.empty=!0),a.diydata.stores.finished=!0),a.diydata.stores.loading=!1,a.diydata.stores.page++,a.diydata.stores.loaded||i.message.stores.stores.length||a.onGetStore(),a.diydata.cart_sum=i.message.cart_sum,a.menufooter=window.menufooter,a.follow=window.follow,a.order_remind=window.order,1==a.diy.is_show_kefu&&a.util.imeiqia()})},onInit:function(){var t=this;this.getLocation(),this.locationInfo.location_x?(t.getLocationFail=!1,t.locationInfo.last_location_x=this.locationInfo.location_x,t.onLoad()):this.util.getLocation({successLocation:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y}),t.onLoad()},successAddress:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y,address:a.address})},fail:function(a){t.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),t.getLocationFail=!0,t.onLoad()}})},onGetCartNums:function(){var t=this;this.util.request({url:"wmall/home/index/cart"}).then(function(a){var e=a.data.message;e.errno?t.util.$toast(e.message):t.diydata.cart_sum=e.message.cart_sum})}}),created:function(){this.$route.query&&this.$route.query.code&&(this.code=this.$route.query.code)},activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0,data:[]},this.diydata.storeExtra={condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},void this.onInit();this.onGetCartNums()},computed:c()({},Object(u.c)(["locationInfo"])),mounted:function(){var t=this;t.util.imap(),t.onInit(),window.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.showFixedSearchBar=a>100})}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"home"}},[e("div",{attrs:{id:"allmap"}}),t._v(" "),t.order_remind&&t.order_remind.log?e("order-status-warpper",{attrs:{order:t.order_remind}}):t._e(),t._v(" "),t.follow&&1==t.follow.status?e("follow",{attrs:{follow:t.follow}}):t._e(),t._v(" "),e("public-footer",{attrs:{menufooter:t.menufooter,showFailedTips:t.mallClose,failedTips:t.failedTips}}),t._v(" "),e("div",{staticClass:"container"},[e("diy",{attrs:{diydata:t.diydata,preLoading:t.showPreLoading,getLocationFail:t.getLocationFail,showFixedSearchBar:t.showFixedSearchBar},on:{onToggleDiscount:t.onToggleDiscount,onChangeStoreExtra:t.onChangeStoreExtra,onStoreOrderby:t.onStoreOrderby,onGetStore:t.onGetStore,onCloseRedpacket:t.onCloseRedpacket,onCloseGuide:t.onCloseGuide}})],1)],1)},staticRenderFns:[]};var v=e("VU/8")(p,_,!1,function(t){e("7vqu")},null,null);a.default=v.exports},rniE:function(t,a,e){"use strict";var i={props:{order:{type:Object,default:function(){return{order:{log:{title:""}}}}}},data:function(){return{active:!1}},methods:{onChangeActive:function(){this.active=!this.active}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"order-status-warpper"}},[e("div",{staticClass:"order-status-warpper",class:{active:t.active},on:{click:t.onChangeActive}},[e("img",{attrs:{src:t.order.logo,alt:""}}),t._v(" "),e("div",{staticClass:"text"},[t.order.log&&t.order.log.title?e("div",{staticClass:"order-status"},[t._v(t._s(t.order.log.title))]):t._e(),t._v(" "),e("div",{staticClass:"time"},[t._v("请耐心等待")])]),t._v(" "),e("span",{staticClass:"order-status-close"},[t._v("×")])])])},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("XBL4")},null,null);a.a=s.exports}});