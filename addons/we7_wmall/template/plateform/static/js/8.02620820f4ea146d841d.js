webpackJsonp([8],{Ggjy:function(e,t){},"g+qZ":function(e,t){},i8E9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Cz8s"),a={components:{iswitch:i("+CBI").a},props:{deliveryer:Object,vue:Object,index:0},data:function(){return{}},methods:{jsToggleSwitch:function(e){this.util.jsToggleSwitch({vue:this,url:"plateform/deliveryer/plateform/change_status",key:e.key,data:{id:e.id,type:e.name,value:e.value}})}},mounted:function(){}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"deliveryer-item"}},[i("div",{staticClass:"deliveryer-item margin-10"},[i("router-link",{attrs:{tag:"div",to:e.util.getUrl({path:"/pages/deliveryer/guide",query:{id:e.deliveryer.id}})}},[i("van-row",[i("van-col",{attrs:{span:"5"}},[i("div",{staticClass:"deliveryer-img"},[i("img",{staticClass:"img-100",attrs:{src:e.deliveryer.avatar,alt:""}})])]),e._v(" "),i("van-col",{attrs:{span:"19"}},[i("div",{staticClass:"deliveryer-title flex-lr"},[i("div",{staticClass:"font-bold"},[i("span",{staticClass:"number font-bold"},[e._v("#"+e._s(e.deliveryer.id))]),e._v(e._s(e.deliveryer.title))]),e._v(" "),1==e.deliveryer.work_status?i("div",{staticClass:"itag itag-danger"},[e._v("工作中")]):e._e(),e._v(" "),0==e.deliveryer.work_status?i("div",{staticClass:"itag itag-disabled"},[e._v("休息中")]):e._e()]),e._v(" "),i("div",{staticClass:"flex"},[i("div",{staticClass:"font-15 c-gray"},[e._v("账户余额："),i("span",{staticClass:"font-15 c-danger"},[e._v("￥"+e._s(e.deliveryer.credit2))])])]),e._v(" "),i("div",{staticClass:"phone flex-lr"},[i("div",{staticClass:"font-15 c-gray",on:{click:function(t){t.stopPropagation(),e.util.jsUrl("tel:"+e.deliveryer.mobile)}}},[e._v("电话："),i("span",{staticClass:"c-info"},[e._v(e._s(e.deliveryer.mobile))])]),e._v(" "),i("div",{staticClass:"font-15 c-gray"},[i("span",{class:{"c-info":1==e.deliveryer.is_takeout}},[e._v("外卖")]),e._v(" "),i("span",{staticClass:"c-default"},[e._v("/")]),e._v(" "),i("span",{class:{"c-info":1==e.deliveryer.is_errander}},[e._v("跑腿")])])])])],1)],1),e._v(" "),i("div",{staticClass:"operate flex-lr border-1px-t"},[i("iswitch",{attrs:{value:e.deliveryer.work_status,"text-open":"工作","text-close":"休息",extra:{key:"deliveryer.work_status",name:"work_status",id:e.deliveryer.id}},on:{change:e.jsToggleSwitch}}),e._v(" "),i("iswitch",{attrs:{value:e.deliveryer.extra.accept_wechat_notice,"text-open":"模板",extra:{key:"deliveryer.extra.accept_wechat_notice",name:"accept_wechat_notice",id:e.deliveryer.id}},on:{change:e.jsToggleSwitch}}),e._v(" "),i("iswitch",{attrs:{value:e.deliveryer.extra.accept_voice_notice,"text-open":"语音",extra:{key:"deliveryer.extra.accept_voice_notice",name:"accept_voice_notice",id:e.deliveryer.id}},on:{change:e.jsToggleSwitch}})],1)],1)])},staticRenderFns:[]};var l=i("VU/8")(a,r,!1,function(e){i("g+qZ")},null,null).exports,n=i("deIj"),o={data:function(){return{records:{page:1,psize:20,loading:!1,finished:!1,empty:!1,data:[]},showPreLoading:!0,vue:this,isRefresh:!1,filter:{items:{work_status:1}}}},components:{publicHeader:s.a,deliveryerItem:l},methods:{onLoad:function(e){Object(n.b)({vue:this,force:e,url:"plateform/deliveryer/plateform/list"})},onChangeWorkStatus:function(e){e=parseInt(e),this.filter.items.work_status!=e&&(this.filter.items.work_status=e)},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(e,t){this.onLoad(!0)},deep:!0}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"deliveryer-deliveryer"}},[i("public-header",{attrs:{title:"配送员列表"}}),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"wrap-search wrap-search-input"},[i("div",{staticClass:"tab-group flex-lr border-1px-b"},[i("div",{staticClass:"tab-item",class:{active:1==e.filter.items.work_status},on:{click:function(t){e.onChangeWorkStatus(1)}}},[e._v("工作中")]),e._v(" "),i("div",{staticClass:"tab-item",class:{active:0==e.filter.items.work_status},on:{click:function(t){e.onChangeWorkStatus(0)}}},[e._v("休息中")])]),e._v(" "),i("van-search",{attrs:{placeholder:"请输入配送员名称"},model:{value:e.filter.items.keyword,callback:function(t){e.$set(e.filter.items,"keyword",t)},expression:"filter.items.keyword"}})],1),e._v(" "),i("van-pull-refresh",{on:{refresh:function(t){e.onPullDownRefresh()}},model:{value:e.isRefresh,callback:function(t){e.isRefresh=t},expression:"isRefresh"}},[e.records.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),e._v(" "),i("p",[e._v("没有符合条件的数据!")])]):i("van-list",{staticClass:"deliveryer-list",attrs:{finished:e.records.finished,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.records.loading,callback:function(t){e.$set(e.records,"loading",t)},expression:"records.loading"}},[e._l(e.records.data,function(t,s){return i("deliveryer-item",{key:t.id,attrs:{deliveryer:t,vue:e.vue,index:s}})}),e._v(" "),e.records.finished?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[e._v("没有更多了")])]):e._e()],2)],1)],1),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)},staticRenderFns:[]};var d=i("VU/8")(o,c,!1,function(e){i("Ggjy")},null,null);t.default=d.exports}});