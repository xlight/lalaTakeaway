webpackJsonp([24],{"4V7Q":function(e,t){},gwti:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("Gu7T"),r=o.n(i),a=o("woOf"),n=o.n(a),s=o("Cz8s"),c=o("Yo4o"),l=o("deIj"),d={components:{publicHeader:s.a},data:function(){return{id:0,order:{},store:{},deliveryer:[],showPreLoading:!0}},methods:{onLoad:function(e){var t=this;e&&(t.deliveryer=[]),Object(l.a)({vue:t,url:"plateform/order/takeout/dispatch",data:{id:t.id},success:function(e){t.order=n()(t.order,e.order),t.store=n()(t.store,e.store),t.deliveryer=[].concat(r()(t.deliveryer),r()(e.deliveryer)),t.onLoadMap()}})},onLoadMap:function(){var e=this;Object(c.a)().then(function(t){for(var o=new t.Map("map-container",{resizeEnable:!0,zoom:12}),i={},r=[],a=e.deliveryer,n="",s=0;s<a.length;s++)a[s].location_x&&a[s].location_y&&(n='<div class="deliveryer-item '+a[s].css+'"><div class="deliveryer-info flex-lr" id="deliveryer-info"><span class="deliveryer-name">'+a[s].title+'</span><span class="delivery-times-info"><span class="wait-pickup">'+a[s].wait_pickup+'</span> / <span class="wait-delivery">'+a[s].wait_delivery+'</span></span><span class="icon icon-attention hide" ></span></div><img class="location-dot" src="static/img/location_dot.png"></div>',(i=new t.Marker({position:new t.LngLat(a[s].location_y,a[s].location_x),content:n,extData:{index:s}})).on("click",function(t){var o=t.target.F.extData.index,i=e.deliveryer[o],r={url:"plateform/order/takeout/dispatch",data:{dispatch:1,id:e.id,deliveryer_id:i.id},confirm:"确定将订单指派给"+i.title+"配送吗",success:function(t){e.util.$toast(t),e.$router.replace(e.util.getUrl({path:"/pages/order/takeout",query:{status:e.order.status}}))},fail:function(t){if(-1e3!=t.errno)return e.util.$toast(t.message),!1;r={url:"plateform/order/takeout/dispatch",data:{dispatch:1,force:1,id:e.id,deliveryer_id:i.id},confirm:"订单已经被配送员接单,确定重新指派吗？",success:function(t){e.util.$toast(t),e.$router.replace(e.util.getUrl({path:"/pages/order/takeout",query:{status:e.order.status}}))}},e.util.jspost(r)}};e.util.jspost(r)}),r.push(i));if(e.store.location_y&&e.store.location_x&&(i=new t.Marker({position:[e.store.location_y,e.store.location_x],offset:new t.Pixel(-19,-52),content:'<div class="marker-start-route"></div>'}),r.push(i)),e.order.location_y&&e.order.location_x&&(i=new t.Marker({position:[e.order.location_y,e.order.location_x],offset:new t.Pixel(-19,-52),content:'<div class="marker-end-route"></div>'}),r.push(i)),o.add(r),e.order.location_y&&e.order.location_x&&e.store.location_y&&e.store.location_x){var c=[[e.store.location_y,e.store.location_x],[e.order.location_y,e.order.location_x]];new t.Polyline({path:c,strokeColor:"#3366FF",strokeOpacity:1,strokeWeight:3,strokeStyle:"solid",strokeDasharray:[10,5]}).setMap(o),o.setFitView(),new t.Driving({map:o,panel:"panel"}).search(new t.LngLat(e.store.location_y,e.store.location_x),new t.LngLat(e.order.location_y,e.order.location_x))}o.setFitView()})},onAlert:function(){this.$dialog.alert({message:'<p class="font-13">绿色标注代表配送员在线中且有未完成的外卖或跑腿订单; <br> 灰色标注代表配送员离线中(5分钟没有上传地址位置即视为离线); <br> 红色标注代表配送员在线中且没有未完成的跑腿和外卖订单;<br>外卖订单数据说明：凌晨5:00之前配送员手中订单包括前一天的订单数据，凌晨5:00之后则是当天的数据</p>'})}},created:function(){this.$route.query&&this.$route.query.id&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()}},u={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"order-dispatch"}},[o("public-header",{attrs:{title:"订单调度"}}),e._v(" "),o("div",{staticClass:"content"},[o("div",{attrs:{id:"map-container"}}),e._v(" "),o("div",{staticClass:"icon icon-question1",on:{click:e.onAlert}}),e._v(" "),o("div",{staticClass:"icon icon-refresh",on:{click:function(t){e.onLoad(!0)}}})]),e._v(" "),e.showPreLoading?o("iloading"):e._e()],1)},staticRenderFns:[]};var p=o("VU/8")(d,u,!1,function(e){o("4V7Q")},null,null);t.default=p.exports}});
//# sourceMappingURL=24.74fe4e4dfc63bfe5824a.js.map