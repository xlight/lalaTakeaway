webpackJsonp([161],{"4XUZ":function(t,a){},cOTU:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=o("Gu7T"),n=o.n(i),e=o("Dd8w"),d=o.n(e),s=o("NYxO"),c=o("mzkE"),g=o("kEnp"),l=o("yxKT"),r=o("deIj"),h={components:{PublicFooter:c.a,InformationItem:l.a,diy:g.a},data:function(){return{showPreLoading:!0,diydata:{diy:{data:{}},tongcheng:{get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},guideData:{is_show:!1},config:{}},menufooter:{},order_remind:{},showFixedSearchBar:!1,getLocationFail:!1,follow:{}}},methods:d()({},Object(s.b)(["setLocation","getLocation"]),{onToggleDiscount:function(t,a){"waimai_stores"==this.diydata.diy.data.items[a].id?this.diydata.diy.data.items[a].data[t].activity.is_show_all=!this.diydata.diy.data.items[a].data[t].activity.is_show_all:this.diydata.stores.data[t].activity.is_show_all=!this.diydata.stores.data[t].activity.is_show_all},onToggleInformation:function(t){this.diydata.tongcheng.data[t].showall=!this.diydata.tongcheng.data[t].showall},onLoad:function(){var t=this,a=this;Object(r.a)({vue:a,url:"tongcheng/index/index",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,menufooter:1},success:function(o){if(a.diydata.diy=o.diy,a.diydata.config=o.config,a.diydata.cart_sum=o.cart_sum,a.util.setWXTitle(a.diydata.diy.data.page.title),a.diydata.diy.guide)if(1==a.diydata.diy.guide.params.status&&"interval"==a.diydata.diy.guide.params.show_setting){var i=t.util.getStorage("guideStorage");(!i||i&&!i.show)&&(t.util.setStorage("guideStorage",{show:1},60*a.diydata.diy.guide.params.interval_time),a.diydata.guideData.is_show=!0)}else 1==a.diydata.diy.guide.params.status&&"everytime"==a.diydata.diy.guide.params.show_setting&&(t.util.removeStorage("guideStorage"),a.diydata.guideData.is_show=!0);var n=a.diydata.config.default_location;n&&n.location_x&&(t.getLocationFail=!1,a.setLocation(n)),o.diy.tongcheng&&o.diy.tongcheng.informationdata&&(a.diydata.tongcheng.data=o.diy.tongcheng.informationdata,a.diydata.tongcheng.loading=!1,a.diydata.tongcheng.get_all=o.diy.tongcheng.get_all,1==a.diydata.tongcheng.get_all&&(a.diydata.tongcheng.finished=!0,a.diydata.tongcheng.loaded=!0)),a.menufooter=window.menufooter,a.order_remind=window.order,1==a.diydata.diy.is_show_kefu&&a.util.imeiqia()}})},onGetInformation:function(t){var a=this,o=this;t&&(o.diydata.tongcheng={page:1,psize:10,loaded:0,empty:!1,loading:!0,data:[]}),o.diydata.tongcheng.loading=!0,this.util.request({url:"tongcheng/index/information",data:{page:o.diydata.tongcheng.page,psize:o.diydata.tongcheng.psize}}).then(function(t){var i=t.data.message.message;o.diydata.tongcheng.data=[].concat(n()(a.diydata.tongcheng.data),n()(i.informations)),i.informations.length<o.diydata.tongcheng.psize&&(o.diydata.tongcheng.loaded=1,o.diydata.tongcheng.data.length||(o.diydata.tongcheng.empty=!0),o.diydata.tongcheng.finished=!0),o.diydata.tongcheng.loading=!1,o.diydata.tongcheng.page++})},onGetCartNums:function(){var t=this;this.util.request({url:"tongcheng/index/cart"}).then(function(a){var o=a.data.message;o.errno?t.util.$toast(o.message):t.diydata.cart_sum=o.message.cart_sum})},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onInit:function(){var t=this;this.getLocation(),this.locationInfo.location_x?(t.getLocationFail=!1,t.locationInfo.last_location_x=this.locationInfo.location_x,t.onLoad()):this.util.getLocation({successLocation:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y}),t.onLoad()},successAddress:function(a){t.setLocation({location_x:a.location_x,location_y:a.location_y,address:a.address})},fail:function(a){t.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),t.getLocationFail=!0,t.onLoad()}})}}),activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.tongcheng={has_get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},void this.onInit();1==this.diydata.diy.is_show_cart&&this.onGetCartNums()},computed:d()({},Object(s.c)(["locationInfo"])),mounted:function(){var t=this;this.onInit(),window.addEventListener("scroll",function(){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.showFixedSearchBar=a>100})}},u={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{attrs:{id:"tongcheng-index"}},[t.follow&&1==t.follow.status?o("follow",{attrs:{follow:t.follow}}):t._e(),t._v(" "),o("public-footer",{attrs:{menufooter:t.menufooter,preLoading:t.showPreLoading}}),t._v(" "),o("div",{staticClass:"container"},[o("diy",{attrs:{diydata:t.diydata,preLoading:t.showPreLoading,getLocationFail:t.getLocationFail,showFixedSearchBar:t.showFixedSearchBar},on:{onToggleDiscount:t.onToggleDiscount,onGetInformation:t.onGetInformation,onToggleInformation:t.onToggleInformation}})],1)],1)},staticRenderFns:[]};var y=o("VU/8")(h,u,!1,function(t){o("4XUZ")},"data-v-136841ee",null);a.default=y.exports}});