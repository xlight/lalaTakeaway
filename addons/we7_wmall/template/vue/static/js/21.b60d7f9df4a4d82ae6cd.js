webpackJsonp([21],{"2ObO":function(e,a){},"K/6b":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("Gu7T"),r=t.n(s),d={components:{PublicHeader:t("Cz8s").a},data:function(){return{preLoading:!0,orders:{page:1,psize:15,loading:!1,loaded:!1,empty:!1,data:[]}}},methods:{onLoad:function(){var e=this;if(this.orders.loaded)return!1;this.util.request({url:"mealRedpacket/meal/mealorder",data:{page:this.orders.page,psize:this.orders.psize}}).then(function(a){e.preLoading=!1;var t=a.data.message;t.errno?e.$toast(t.message):(e.orders.data=[].concat(r()(e.orders.data),r()(t.message.orders)),0==e.orders.data.length&&(e.orders.empty=!0),t.message.orders.length<e.orders.psize&&(e.orders.loaded=!0),e.orders.loading=!1,e.orders.page++)})}},mounted:function(){this.onLoad()}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"mealRedpacket-order"}},[t("public-header",{attrs:{title:"套餐红包购买记录"}}),e._v(" "),t("div",{staticClass:"content"},[e.orders.empty?t("div",{staticClass:"common-no-con"},[t("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),t("p",[e._v("您还没有购买记录，赶紧购买吧！")]),e._v(" "),t("div",{staticClass:"btn"},[t("router-link",{attrs:{to:e.util.getUrl({path:"/package/pages/mealRedpacket/meal"})}},[e._v("现在购买")])],1)]):t("van-list",{attrs:{finished:e.orders.loaded,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.orders.loading,callback:function(a){e.$set(e.orders,"loading",a)},expression:"orders.loading"}},[e._l(e.orders.data,function(a){return t("div",{key:a.id,staticClass:"order-item van-hairline--bottom"},[t("div",{staticClass:"order-info"},[t("div",{staticClass:"name-time"},[t("div",{staticClass:"name"},[e._v(e._s(a.data.meal.name))]),e._v(" "),t("div",{staticClass:"time"},[e._v(e._s(a.addtime))])]),e._v(" "),t("div",{staticClass:"price"},[e._v("¥"+e._s(a.final_fee))])])])}),e._v(" "),e.orders.loaded?t("div",{staticClass:"loaded"},[t("div",{staticClass:"loaded-tips"},[e._v("我是有底线的")])]):e._e()],2)],1),e._v(" "),t("iloading",{directives:[{name:"show",rawName:"v-show",value:e.preLoading,expression:"preLoading"}]})],1)},staticRenderFns:[]};var i=t("VU/8")(d,o,!1,function(e){t("2ObO")},null,null);a.default=i.exports}});
//# sourceMappingURL=21.b60d7f9df4a4d82ae6cd.js.map