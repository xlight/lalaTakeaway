webpackJsonp([175],{ggge:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t("Gu7T"),i=t.n(a),s=t("Yo4o"),n={name:"orderMap",data:function(){return{id:Number,markers:[],center:{lat:"",lng:""},order:{},deliveryer_marker:[],AMap:Object(s.a)()}},methods:{onLoad:function(){var e=this;this.util.request({url:"wmall/order/index/location",data:{id:this.id}}).then(function(r){var t=r.data.message;return t.errno?(e.util.$toast(t.message),!1):(e.order=t.message.order,5!=e.order.status&&(e.markers=[].concat(i()(e.markers),i()(t.message.markers)),e.center.lat=t.message.markers[0].latitude,e.center.lng=t.message.markers[0].longitude,void e.loadmap()))})},loadmap:function(){var e=this;e.AMap.then(function(r){var t;(e.map=new r.Map("map-container",{resizeEnable:!0,center:[e.center.lng,e.center.lat],zoom:10}),e.markers[0].longitude&&e.markers[0].latitude)&&(t=new r.Marker({position:[e.markers[0].longitude,e.markers[0].latitude],offset:new r.Pixel(-26,-80),content:'<div class="marker-mine-route"></div>'})).setMap(e.map);e.markers[2].longitude&&e.markers[2].latitude&&(t=new r.Marker({position:[e.markers[2].longitude,e.markers[2].latitude],offset:new r.Pixel(-33,-70),content:'<div class="marker-start-head-route"><img src="'+e.markers[2].vue_icon+'" alt=""/></div>'})).setMap(e.map);5==e.order.status?(t=new r.Marker({position:[e.order.delivery_success_location_y,e.order.delivery_success_location_x],offset:new r.Pixel(-26,-80),content:'<div class="marker-deliveyer-route"><img src='+params.deliveryer.avatar+' alt=""/></div>'})).setMap(e.map):e.markers[1].longitude&&e.markers[1].latitude&&((t=new r.Marker({position:[e.markers[1].longitude,e.markers[1].latitude],offset:new r.Pixel(-26,-80),content:'<div class="marker-deliveyer-route"><img src="'+e.markers[1].vue_icon+'" alt=""/></div>'})).setMap(e.map),e.deliveryer_marker.push(t));e.map.setFitView()})},onRefresh:function(){var e=this;if(5==e.order.status)return!1;e.util.request({url:"system/common/deliveryer/location",data:{id:e.order.deliveryer_id}}).then(function(r){var t=r.data.message;if(t.errno)return e.util.$toast(t.message),!1;var a=t.message;e.AMap.then(function(r){var t=new r.Marker({position:[a.location_y,a.location_x],offset:new r.Pixel(-26,-80),content:'<div class="marker-deliveyer-route"><img src="'+a.avatar+'" alt=""/></div>'});e.map.remove(e.deliveryer_marker),t.setMap(e.map),e.deliveryer_marker.push(t),e.map.setFitView()})})},onQuestion:function(){this.$dialog.confirm({message:"要获取最新位置，请点击刷新按钮；如果配送员远离您，那可能是正在为更早下单的用户配送，请耐心等待~",showCancelButton:!1})}},created:function(){if(!this.$route.query.id)return!1;this.id=this.$route.query.id},mounted:function(){var e=this;this.onLoad(),setInterval(function(){e.onRefresh()},3e4)}},o={render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"order-map"}},[r("div",{attrs:{id:"map-container"}}),this._v(" "),r("router-link",{staticClass:"icons back-icon",attrs:{tag:"div",to:this.util.getUrl({path:"/pages/order/detail",query:{id:this.id}})}},[r("div",{staticClass:"icon icon-arrow-left"})]),this._v(" "),r("div",{staticClass:"icons refresh-icon",on:{click:this.onRefresh}},[r("div",{staticClass:"icon icon-refresh"})]),this._v(" "),r("div",{staticClass:"icons question-icon",on:{click:this.onQuestion}},[r("div",{staticClass:"icon icon-question font-20"})])],1)},staticRenderFns:[]};var l=t("VU/8")(n,o,!1,function(e){t("lwlJ")},null,null);r.default=l.exports},lwlJ:function(e,r){}});