webpackJsonp([71],{iNdb:function(e,t){},kIM1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Gu7T"),i=s.n(a),n=s("Dd8w"),r=s.n(n),o=s("Yo4o"),d=s("NYxO"),c=s("Cz8s"),l=s("mtWM"),u=s.n(l),h={data:function(){return{showLoading:!0,key:"",mapConfig:{center:{}},map:{lat:"",lng:""},addressPois:[],addressSearch:[]}},components:{PublicHeader:c.a},computed:r()({},Object(d.c)(["editAddress"])),watch:{key:function(){var e=this,t=this.key;this.addressSearch=[],t&&this.util.request({url:"system/common/map/suggestion",data:{key:t}}).then(function(t){var s=t.data.message;s.errno||(e.addressSearch=[].concat(i()(e.addressSearch),i()(s.message)))})}},methods:r()({},Object(d.b)(["replaceAddress"]),{onLoad:function(){var e=this;this.util.request({url:"wmall/member/address/location",data:{sid:this.sid,erranderId:this.erranderId}}).then(function(t){e.showLoading=!1;var s=t.data.message;e.mapConfig=s.message.map,e.map.lat=s.message.map.center.location_x,e.map.lng=s.message.map.center.location_y,e.loadmap(),e.onGetAddressPois(e.map.lat,e.map.lng)})},onGetAddressPois:function(e,t){var s=this,a={type:"商务住宅|科教文化服务|地名地址信息|医疗保健服务|政府机构及社会团体|住宿服务|公司企业|道路附属设施|购物服务|生活服务|体育休闲服务|交通设施服务",location:e+","+t},i="https://restapi.amap.com/v3/place/around?key=37bb6a3b1656ba7d7dc8946e7e26f39b&radius=1000&offset=25&page=1&extensions=all&output=json&keywords=&json="+this.util.toQueryString(a);u.a.get(i).then(function(e){if("OK"==(e=e.data).info){var t=[];for(var a in e.pois){var i=e.pois[a].location.split(","),n={name:e.pois[a].address,address:e.pois[a].name,lng:i[0],lat:i[1],location_x:i[1],location_y:i[0]};t.push(n)}s.addressPois=t}})},onSelectAddress:function(e){this.replaceAddress(e),this.editAddress&&this.$router.replace(this.util.getUrl({path:"/pages/member/addressPost",query:{id:this.id,sid:this.sid,channel:this.channel,erranderId:this.erranderId,input:this.input,from:"location"}}))},loadmap:function(){var e=this;Object(o.a)().then(function(t){window.map=e.map=new t.Map("allmap1",{resizeEnable:!0,center:[e.mapConfig.center.location_y,e.mapConfig.center.location_x],zoom:17}),t.event.addListener(e.map,"dragend",function(){var t=e.map.getCenter();e.onGetAddressPois(t.lat,t.lng)}),e.util.getLocation({successLocation:function(t){e.map.panTo([t.lng,t.lat]),e.onGetAddressPois(t.lat,t.lng)},fail:function(e){}})})}}),created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id,this.sid=this.query.sid,this.channel=this.query.channel,this.input=this.query.input,this.erranderId=this.query.erranderId)},mounted:function(){this.onLoad()}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"address-location"}},[s("public-header",{attrs:{title:"新增收货地址"}}),e._v(" "),s("transition",{attrs:{name:"loading"}},[s("iloading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}]})],1),e._v(" "),s("div",{staticClass:"content"},[s("van-search",{attrs:{placeholder:"请输入您的收货地址",background:"#f5f5f5"},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}}),e._v(" "),e.key?s("van-cell-group",{staticClass:"search-list"},e._l(e.addressSearch,function(t,a){return s("van-cell",{key:a,attrs:{title:t.address,label:t.name},on:{click:function(s){e.onSelectAddress(t)}}})})):[e._m(0),e._v(" "),s("div",{staticClass:"location-list"},e._l(e.addressPois,function(t,a){return s("div",{key:a,staticClass:"list-item flex-lr van-hairline--bottom ",class:{active:0==a},on:{click:function(s){e.onSelectAddress(t)}}},[s("i",{staticClass:"icon icon-locationfill"}),e._v(" "),s("div",{staticClass:"item-inner"},[s("div",{staticClass:"name ellipsis"},[e._v(e._s(t.address))]),e._v(" "),s("div",{staticClass:"address ellipsis"},[e._v(e._s(t.name))])])])}))]],2)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"map-content"},[t("div",{attrs:{id:"allmap1"}}),this._v(" "),t("div",{staticClass:"center-marker"},[t("img",{attrs:{src:"static/img/marker_red.png",alt:""}})])])}]};var p=s("VU/8")(h,m,!1,function(e){s("iNdb")},null,null);t.default=p.exports}});
//# sourceMappingURL=71.027b2257909bc28bf09d.js.map