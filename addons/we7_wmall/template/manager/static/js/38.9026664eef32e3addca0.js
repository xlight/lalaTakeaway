webpackJsonp([38],{"+wo6":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Cz8s"),a=i("deIj"),o={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0,filter:{items:{status:-1}}}},components:{publicHeader:e.a},methods:{onLoad:function(t){Object(a.b)({vue:this,force:t,url:"manage/seckill/goods/list"})},onPullDownRefresh:function(){this.onLoad(!0)},onDeleteGoods:function(t,s){var i=this;i.util.jspost({url:"manage/seckill/goods/del",data:{id:t.id},confirm:"确定删除该商品吗？",success:function(){i.records.data.splice(s,1)}})},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(t,s){this.onLoad(!0)},deep:!0}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"seckill-list"}},[i("public-header",{attrs:{title:"抢购列表"}},[i("div",{staticClass:"search-btn",attrs:{slot:"right"},on:{click:function(s){t.util.jsUrl("/pages/gohome/seckill/goods/post")}},slot:"right"},[i("span",[t._v("添加活动")])])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"wrap-search"},[i("div",{staticClass:"tab-group flex-lr border-1px-b"},[i("div",{staticClass:"tab-item",class:{active:-1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(-1)}}},[t._v("不限")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("已下架")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("进行中")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("未开始")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:3==t.filter.items.status},on:{click:function(s){t.onToggleStatus(3)}}},[t._v("已结束")])])]),t._v(" "),i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("没有符合条件的数据!")])]):i("van-list",{staticClass:"goods-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,e){return i("div",{key:s.id,staticClass:"goods-item"},[i("div",{staticClass:"flex-lr padding-10 border-1px-b"},[i("div",{staticClass:"goods-img"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-info"},[i("div",{staticClass:"goods-name flex"},[i("div",{staticClass:"name ellipsis"},[t._v(t._s(s.name))])]),t._v(" "),i("div",{staticClass:"price flex"},[i("div",{staticClass:"c-danger font-bold font-16"},[t._v("￥"+t._s(s.price))]),t._v(" "),i("div",{staticClass:"font-12 c-gray"},[t._v("￥"+t._s(s.oldprice))])]),t._v(" "),i("div",{staticClass:"activity-time flex"},[i("div",[t._v("时间："+t._s(s.starttime_cn)+" ~ "+t._s(s.endtime_cn))])]),t._v(" "),i("div",{staticClass:"c-gray font-14"},[t._v("库存："+t._s(s.total))])])]),t._v(" "),i("div",{staticClass:"btn-group"},[i("router-link",{staticClass:"btn-item bg-info",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/gohome/seckill/goods/post",query:{id:s.id}})}},[t._v("编辑")]),t._v(" "),i("div",{staticClass:"btn-item bg-danger",on:{click:function(i){t.onDeleteGoods(s,e)}}},[t._v("删除")])],1)])}),t._v(" "),t.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var n=i("VU/8")(o,l,!1,function(t){i("U7pW")},null,null);s.default=n.exports},U7pW:function(t,s){}});
//# sourceMappingURL=38.9026664eef32e3addca0.js.map