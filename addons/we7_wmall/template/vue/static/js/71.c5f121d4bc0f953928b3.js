webpackJsonp([71],{"3y8C":function(e,t){},bgWO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("Yo4o"),o={name:"orderMap",data:function(){return{id:Number,markers:[],order:{},deliveryer:{},AMap:Object(i.a)()}},methods:{onLoad:function(){var e=this;this.util.request({url:"errander/order/location",data:{id:this.id}}).then(function(t){var r=t.data.message;return r.errno?(e.util.$toast(r.message),!1):(e.order=r.message.order,e.deliveryer=r.message.deliveryer,3==e.order.status?(e.util.$toast("订单已完成！"),!1):void e.loadmap())})},loadmap:function(){var e=this;e.AMap.then(function(t){(e.map=new t.Map("map-container",{resizeEnable:!0,center:[e.order.accept_location_y,e.order.accept_location_x],zoom:10}),(i=new t.Marker({position:[e.order.accept_location_y,e.order.accept_location_x],offset:new t.Pixel(-35,-35),content:'<div class="marker-mine-route"></div>'})).setMap(e.map),e.order.buy_location_x&&e.order.buy_location_y)&&(i=new t.Marker({position:[e.order.buy_location_y,e.order.buy_location_x],offset:new t.Pixel(-23,-74),content:'<div class="marker-start-route"></div>'})).setMap(e.map);if(3==e.order.status){e.map.panTo([e.order.delivery_success_location_y,e.order.delivery_success_location_x]);var r=e.deliveryer.avatar;(i=new t.Marker({position:[e.order.delivery_success_location_y,e.order.delivery_success_location_x],offset:new t.Pixel(-26,-80),content:'<div class="marker-deliveyer-route"><img src='+r+' alt=""/></div>'})).setMap(e.map)}else{e.map.panTo([e.deliveryer.location_y,e.deliveryer.location_x]);var i;r=e.deliveryer.avatar;(i=new t.Marker({position:[e.deliveryer.location_y,e.deliveryer.location_x],offset:new t.Pixel(-26,-80),content:'<div class="marker-deliveyer-route"><img src='+r+' alt=""/></div>'})).setMap(e.map),e.markers.push(i)}e.map.setFitView()})},onRefresh:function(){var e=this;if(3==e.order.status)return!1;e.util.request({url:"system/common/deliveryer/location",data:{id:e.order.deliveryer_id}}).then(function(t){var r=t.data.message;if(r.errno)return e.util.$toast(r.message),!1;var i=r.message;e.AMap.then(function(t){var r=new t.Marker({position:[i.location_y,i.location_x],offset:new t.Pixel(-26,-80),content:'<div class="marker-deliveyer-route"><img src="'+i.avatar+'" alt=""/></div>'});e.map.remove(e.markers),r.setMap(e.map),e.markers.push(r),e.map.setFitView()})})},onQuestion:function(){this.$dialog.confirm({message:"要获取最新位置，请点击刷新按钮；如果配送员远离您，那可能是正在为更早下单的用户配送，请耐心等待~",showCancelButton:!1})}},created:function(){if(!this.$route.query.id)return!1;this.id=this.$route.query.id},mounted:function(){var e=this;this.onLoad(),setInterval(function(){e.onRefresh()},3e4)}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"order-map"}},[t("div",{attrs:{id:"map-container"}}),this._v(" "),t("router-link",{staticClass:"icons back-icon",attrs:{tag:"div",to:this.util.getUrl({path:"/pages/paotui/detail",query:{id:this.id}})}},[t("div",{staticClass:"icon icon-arrow-left"})]),this._v(" "),t("div",{staticClass:"icons refresh-icon",on:{click:this.onRefresh}},[t("div",{staticClass:"icon icon-refresh"})]),this._v(" "),t("div",{staticClass:"icons question-icon",on:{click:this.onQuestion}},[t("div",{staticClass:"icon icon-question font-20"})])],1)},staticRenderFns:[]};var s=r("VU/8")(o,a,!1,function(e){r("3y8C")},null,null);t.default=s.exports}});