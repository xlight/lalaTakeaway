webpackJsonp([70],{OyMg:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Cz8s"),a=e("mzkE"),r=e("deIj"),n=e("75NE"),o={components:{PublicHeader:i.a,PublicFooter:a.a,CountDown:n.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0}},methods:{onLoad:function(t){Object(r.b)({vue:this,force:t,data:{status:1,menufooter:1},url:"kanjia/record/index"})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t)}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"kanjia-record"}},[e("public-header",{attrs:{title:"我的砍价"}}),t._v(" "),e("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),e("div",{staticClass:"content"},[e("van-pull-refresh",{on:{refresh:t.onPullDownRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.records.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),e("p",[t._v("暂无砍价记录!")])]):e("van-list",{staticClass:"record-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,i){return 1==s.goods_status&&0!=s.total?e("div",{key:i,staticClass:"record-item flex-lr"},[e("div",{staticClass:"record-img"},[e("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"info w-100"},[e("div",{staticClass:"goods-title ellipsis"},[t._v(t._s(s.name))]),t._v(" "),1==s.status?e("div",{staticClass:"progress"},[e("span",{staticClass:"max-price"},[t._v("￥"+t._s(s.old_price))]),t._v(" "),e("div",{staticClass:"progress-inner"},[e("div",{staticClass:"now-price",style:{left:s.per_price+"%"}},[t._v("¥"+t._s(s.price))]),t._v(" "),e("div",{staticClass:"bar"},[e("div",{staticClass:"bar-inner",style:{width:s.per_price+"%"}})])]),t._v(" "),e("span",{staticClass:"min-price"},[t._v("￥"+t._s(s.new_price))])]):e("div",{staticClass:"flex"},[e("div",{staticClass:"c-danger font-16 font-bold"},[t._v("￥"+t._s(s.old_price))]),t._v(" "),e("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v("￥"+t._s(s.new_price))])]),t._v(" "),e("div",{staticClass:"flex-lr w-100"},[s.price==s.new_price?[e("span",{staticClass:"c-danger font-14"},[t._v("砍价成功")]),t._v(" "),e("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/order/create",query:{activityid:s.activityid}})}},[t._v("去下单")])]:[e("div",{staticClass:"flex"},[e("div",{staticClass:"font-12 c-gray margin-5-r"},[t._v("距结束")]),t._v(" "),e("count-down",{attrs:{endTime:s.endtime}})],1),t._v(" "),e("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/share",query:{activityid:s.activityid,uid:s.uid}})}},[t._v("找人砍")])]],2)])]):t._e()}),t._v(" "),t.records.finished?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var c=e("VU/8")(o,d,!1,function(t){e("YTbY")},null,null);s.default=c.exports},YTbY:function(t,s){}});
//# sourceMappingURL=70.05d28a306d4714db797e.js.map