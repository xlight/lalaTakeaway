webpackJsonp([89],{"+JGe":function(a,t){},kYuw:function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=i("Gu7T"),o=i.n(d),e=i("mvHQ"),n=i.n(e),s=i("woOf"),r=i.n(s),h=i("Dd8w"),l=i.n(h),y=i("NYxO"),c=i("Cz8s"),g=i("mzkE"),u=i("fgl9"),f=i("kEnp"),p={name:"diyIndex",data:function(){return{title:"",id:0,getLocationFail:!1,showPreLoading:!0,styleContent:"#fff",diydata:{diy:{data:{}},storeExtra:{condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},stores:{loading:!0,finished:!1,page:1,psize:20,loaded:0,empty:0,data:[]},popup:{storeSearch:!1,haodianSearch:!1,serviceQrcode:!1},superRedpacketData:{},guideData:{is_show:!1},tongcheng:{get_all:0,page:2,psize:10,loading:!0,loaded:!1,finished:!1,empty:!1,data:[]},haodian:{page:2,psize:15,loading:!1,loaded:!1,finished:!1,empty:!1,data:[]},haodianExtra:{orderby:"distance",haodian_cid:0,haodian_child_id:0,cIndexActive:0},haodianCategory:[],showSearchSign:!1},showFixedSearchBar:!1,menufooter:{},follow:{},followShow:!1}},components:{PublicHeader:c.a,PublicFooter:g.a,diy:f.a,follow:u.a},watch:{$route:function(){this.id=this.$route.query.id},id:function(){this.onLoad(!0)}},methods:l()({},Object(y.b)(["setLocation","getLocation","setState"]),{onToggleDiscount:function(a,t){"waimai_stores"==this.diydata.diy.data.items[t].id?this.diydata.diy.data.items[t].data[a].activity.is_show_all=!this.diydata.diy.data.items[t].data[a].activity.is_show_all:this.diydata.stores.data[a].activity.is_show_all=!this.diydata.stores.data[a].activity.is_show_all,this.diydata=r()({},this.diydata)},onCloseRedpacket:function(){this.diydata.superRedpacketData.is_show=!1,this.diydata.superRedpacketData=r()({},this.diydata.superRedpacketData)},onChangeStoreExtra:function(a){"multiple"==a?(this.diydata.storeExtra.multiple=!0,this.diydata.storeExtra.filter=!1):(this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter=!0),this.diydata.popup.storeSearch=!0},onStoreOrderby:function(a,t,i){if("order"==a)"svipRedpacket"==t?this.diydata.storeExtra.condition.dis=t:(this.diydata.storeExtra.condition.order=t,this.diydata.storeExtra.multiple=!1,this.diydata.storeExtra.filter_title="sailed"!=t&&"distance"!=t?i:"综合排序");else{if("discounts"==a)return this.diydata.storeExtra.condition.dis==t&&(t=""),this.diydata.storeExtra.condition.dis=t,!1;if("mode"==a)return this.diydata.storeExtra.condition.mode==t&&(t=""),this.diydata.storeExtra.condition.mode=t,!1;"clear"==a?(this.diydata.storeExtra.condition.dis="",this.diydata.storeExtra.condition.order="",this.diydata.storeExtra.condition.mode="",this.diydata.storeExtra.filter=!1,this.diydata.storeExtra.filter_title="综合排序"):"finish"==a&&(this.diydata.storeExtra.filter=!1)}this.diydata.popup.storeSearch=!1,this.onGetStore(!0)},onGetStore:function(a){var t=this,i=this;a&&(i.diydata.stores={page:1,psize:20,loaded:0,empty:!1,loading:!0}),i.diydata.stores.loading=!0,this.util.request({url:"wmall/home/index/store",data:{lat:i.locationInfo.location_x,lng:i.locationInfo.location_y,page:i.diydata.stores.page,psize:i.diydata.stores.psize,condition:n()(i.diydata.storeExtra.condition)}}).then(function(d){var e=d.data.message.message;a&&(i.diydata.stores.data=[]),i.diydata.stores.data=[].concat(o()(t.diydata.stores.data),o()(e.stores)),e.pagetotal<=i.diydata.stores.page&&(i.diydata.stores.loaded=1,i.diydata.stores.data.length||(i.diydata.stores.empty=!0),i.diydata.stores.finished=!0),i.diydata.stores.loading=!1,i.diydata.stores.page++,i.diydata.stores.loaded||e.stores.length||t.onGetStore()})},onGetInformation:function(a){var t=this,i=this;a&&(i.diydata.tongcheng={page:1,psize:10,loaded:0,empty:!1,loading:!0,data:[]}),i.diydata.tongcheng.loading=!0,this.util.request({url:"diypage/diy/information",data:{page:i.diydata.tongcheng.page,psize:i.diydata.tongcheng.psize}}).then(function(a){var d=a.data.message.message;i.diydata.tongcheng.data=[].concat(o()(t.diydata.tongcheng.data),o()(d.informations)),d.informations.length<i.diydata.tongcheng.psize&&(i.diydata.tongcheng.loaded=1,i.diydata.tongcheng.data.length||(i.diydata.tongcheng.empty=!0),i.diydata.tongcheng.finished=!0),i.diydata.tongcheng.loading=!1,i.diydata.tongcheng.page++})},onLoad:function(){var a=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.util.request({url:"diypage/diy",data:{id:this.id,menufooter:1}}).then(function(i){var d=a;d.showPreLoading=!1;var e=i.data.message;if(e.errno)d.util.$toast(e.message);else{if(d.diydata.config=e.message.config,d.diydata.diy=e.message.diy,d.diy=e.message.diy,d.diydata.diy.guide)if(1==d.diydata.diy.guide.params.status&&"interval"==d.diydata.diy.guide.params.show_setting){var n=a.util.getStorage("guideStorage");(!n||n&&!n.show)&&(a.util.setStorage("guideStorage",{show:1},60*d.diydata.diy.guide.params.interval_time),d.diydata.guideData.is_show=!0)}else 1==d.diydata.diy.guide.params.status&&"everytime"==d.diydata.diy.guide.params.show_setting&&(a.util.removeStorage("guideStorage"),d.diydata.guideData.is_show=!0);d.diydata.diy.tongcheng&&(d.diydata.tongcheng.data=[].concat(o()(d.diydata.diy.tongcheng.informationdata)),0==d.diydata.tongcheng.data.length&&(d.diydata.tongcheng.empty=!0),d.diydata.tongcheng.loading=!1,d.diydata.tongcheng.has_get_all=d.diydata.diy.tongcheng.has_get_all,delete d.diydata.diy.tongcheng,1==d.diydata.tongcheng.has_get_all&&(d.diydata.tongcheng.finished=!0,d.diydata.tongcheng.loaded=!0)),d.diydata.diy.haodian&&(d.diydata.haodianCategory=[].concat(o()(d.diydata.diy.haodian.category)),d.diydata.haodianExtra.haodian_child_id=d.diydata.diy.haodian.haodian_child_id,d.diydata.haodian.data=[].concat(o()(d.diydata.diy.haodian.store)),d.diydata.haodian.loading=!1,(!d.diydata.diy.haodian.store||d.diydata.diy.haodian.store.length<d.diydata.haodian.psize)&&(d.diydata.haodian.loaded=!0),d.diydata.haodian.data.length||(d.diydata.haodian.empty=!0)),d.title=e.message.diy.data.page.title,d.util.setWXTitle(d.title),d.diydata.superRedpacketData=e.message.superRedpacketData,d.diydata.superRedpacketData.is_show=!0,d.diydata.cart_sum=e.message.cart_sum,d.menufooter=window.menufooter,d.follow=window.follow,1==d.diy.data.page.followbar&&d.follow&&1==d.follow.status&&(d.followShow=!0),d.styleContent={"background-color":a.diydata.diy.data.page.background},1==d.diy.is_show_kefu&&d.util.imeiqia(),1!=d.diy.is_has_location&&1!=d.diy.is_has_allstore||(d.getLocation(),d.locationInfo.location_x?(d.getLocationFail=!1,1==d.diy.is_has_allstore&&d.onGetStore(t)):d.util.getLocation({successLocation:function(a){d.setLocation({last_location_x:a.location_x,location_x:a.location_x,location_y:a.location_y}),1==d.diy.is_has_allstore&&d.onGetStore(t)},successAddress:function(a){d.setLocation({last_location_x:a.location_x,location_x:a.location_x,location_y:a.location_y,address:a.address})},fail:function(a){d.setLocation({last_location_x:0,location_x:0,address:"获取定位失败"}),d.getLocationFail=!0,1==d.diy.is_has_allstore&&d.onGetStore(t)}}))}})},onGetCartNums:function(){var a=this;this.util.request({url:"wmall/home/index/cart"}).then(function(t){var i=t.data.message;i.errno?a.util.$toast(i.message):a.diydata.cart_sum=i.message.cart_sum})},onCloseGuide:function(){this.diydata.guideData.is_show=!1},onToggleInformation:function(a){this.diydata.tongcheng.data[a].showall=!this.diydata.tongcheng.data[a].showall},onGetHaodianStore:function(a){var t=this;a&&(t.diydata.haodian={page:1,psize:10,loaded:!1,empty:!1,loading:!0,data:[]}),this.util.request({url:"haodian/index/store",data:{lat:t.locationInfo.location_x,lng:t.locationInfo.location_y,page:t.diydata.haodian.page,psize:t.diydata.haodian.psize,orderby:t.diydata.haodianExtra.orderby,haodian_cid:t.diydata.haodianExtra.haodian_cid,haodian_child_id:t.diydata.haodianExtra.haodian_child_id}}).then(function(a){var i=a.data.message.message;t.diydata.haodian.data=[].concat(o()(t.diydata.haodian.data),o()(i.store)),i.store.length<t.diydata.haodian.psize&&(t.diydata.haodian.loaded=!0),t.diydata.haodian.data.length||(t.diydata.haodian.empty=!0),t.diydata.haodian.loading=!1,t.diydata.haodian.page++})},onChangeHaodianExtra:function(a){if("filter"==a)this.diydata.popup.haodianSearch=!this.diydata.popup.haodianSearch;else{if(a==this.diydata.haodianExtra.orderby)return;this.diydata.showSearchSign=!1,this.diydata.haodianExtra.orderby=a,this.diydata.haodianExtra.haodian_cid=0,this.diydata.haodianCategory.length>0&&this.diydata.haodianCategory[0].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[0].children[0].id),this.diydata.haodianExtra.cIndexActive=0,this.onGetHaodianStore(!0)}},onClickHaodianParentCategory:function(a){this.diydata.haodianExtra.cIndexActive=a,this.diydata.haodianCategory.hasOwnProperty(a)&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[a].id,this.diydata.haodianCategory[a].children.length>0&&(this.diydata.haodianExtra.haodian_child_id=this.diydata.haodianCategory[a].children[0].id))},onClickHaodianChildCategory:function(a){a&&(this.diydata.haodianExtra.haodian_child_id=a.id,0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id))},onHaodianCategoryConfirm:function(){this.diydata.haodianExtra.haodian_child_id>0&&0==this.diydata.haodianExtra.haodian_cid&&this.diydata.haodianCategory.length>0&&(this.diydata.haodianExtra.haodian_cid=this.diydata.haodianCategory[0].id),this.diydata.showSearchSign=!0,this.onGetHaodianStore(!0),this.onChangeHaodianExtra("filter")},onToggleService:function(){this.diydata.popup.serviceQrcode=!this.diydata.popup.serviceQrcode}}),created:function(){this.$route.query.id?this.id=this.$route.query.id:this.util.$toast("页面不存在！")},computed:l()({},Object(y.c)(["locationInfo"])),activated:function(){if(this.locationInfo.last_location_x!=this.locationInfo.location_x)return this.diydata.storeExtra={condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},void this.onLoad(!0);this.onGetCartNums()},mounted:function(){var a=this;window.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;a.showFixedSearchBar=t>100})}},_={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{attrs:{id:"diy"}},[a.followShow?i("follow",{attrs:{follow:a.follow}}):a._e(),a._v(" "),a.isWeixin?a._e():i("public-header",{attrs:{title:a.title}}),a._v(" "),a.menufooter?i("public-footer",{attrs:{menufooter:a.menufooter}}):a._e(),a._v(" "),i("div",{staticClass:"container",style:a.styleContent},[i("diy",{attrs:{diydata:a.diydata,preLoading:a.showPreLoading,getLocationFail:a.getLocationFail,showFixedSearchBar:a.showFixedSearchBar},on:{onToggleDiscount:a.onToggleDiscount,onChangeStoreExtra:a.onChangeStoreExtra,onStoreOrderby:a.onStoreOrderby,onGetStore:a.onGetStore,onCloseRedpacket:a.onCloseRedpacket,onCloseGuide:a.onCloseGuide,onGetInformation:a.onGetInformation,onToggleInformation:a.onToggleInformation,onGetHaodianStore:a.onGetHaodianStore,onChangeHaodianExtra:a.onChangeHaodianExtra,onClickHaodianParentCategory:a.onClickHaodianParentCategory,onClickHaodianChildCategory:a.onClickHaodianChildCategory,onHaodianCategoryConfirm:a.onHaodianCategoryConfirm,onToggleService:a.onToggleService}})],1)],1)},staticRenderFns:[]};var m=i("VU/8")(p,_,!1,function(a){i("+JGe")},null,null);t.default=m.exports}});