webpackJsonp([48],{gKw0:function(t,s){},tnE6:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("woOf"),e=i.n(a),n=i("Cz8s"),c=i("deIj"),l={components:{publicHeader:n.a},data:function(){return{showPreLoading:!0,isRefresh:!1,activity:{},empty:!1,filter:{items:{status:1}}}},methods:{onLoad:function(){var t=this;t.empty=!1,Object(c.a)({vue:t,url:"manage/activity/bargain/bargainList",data:{filter:this.filter.items},success:function(s){0==s.activity.length&&(t.empty=!0),t.activity=e()({},s.activity),t.isRefresh=!1}})},onToggleStatus:function(t){t=parseInt(t),this.filter.items.status!=t&&(this.filter.items.status=t,this.onLoad())},onPullDownRefresh:function(){this.onLoad()},onChangeDelete:function(t){this.util.jspost({url:"manage/activity/bargain/del",data:{id:t.id},confirm:"确定撤销活动吗？"})}},created:function(){this.query=this.$route.query,this.query&&this.query.status&&(this.filter.items.status=this.query.status)},mounted:function(){this.onLoad()}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"activity-bargainList"}},[i("public-header",{attrs:{title:"天天特价"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"wrap-search"},[i("div",{staticClass:"tab-group"},[i("div",{staticClass:"tab-item",class:{active:2==t.filter.items.status},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("待生效")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("进行中")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){t.onToggleStatus(0)}}},[t._v("已结束")])])]),t._v(" "),i("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.empty?i("div",{staticClass:"no-data"},[i("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("没有任何活动哦!")])]):i("van-list",t._l(t.activity,function(s,a){return i("div",{key:s.id,staticClass:"list-item"},[i("div",{staticClass:"padding-15 van-hairline--bottom"},[i("div",{staticClass:"flex margin-15-b"},[i("span",{staticClass:"font-15 padding-10-r"},[t._v(t._s(s.title))]),t._v(" "),1==s.status?i("span",{staticClass:"c-gray"},[t._v("\n\t\t\t\t\t\t\t\t剩余"),i("span",{staticClass:"c-danger font-14"},[t._v(t._s(s.until))]),t._v("天\n\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),i("p",{staticClass:"desc"},[t._v("活动类型: "+t._s(s.type_cn))]),t._v(" "),i("p",{staticClass:"desc"},[t._v("活动时间: "+t._s(s.starttime_cn)+"~"+t._s(s.endtime_cn))]),t._v(" "),i("p",{staticClass:"desc"},[t._v("创建日期: "+t._s(s.addtime_cn))])]),t._v(" "),i("div",{staticClass:"btn-group"},[i("span",{staticClass:"btn-item bg-danger",on:{click:function(i){t.onChangeDelete(s)}}},[t._v("撤销")])]),t._v(" "),i("div",{staticClass:"status"},[2==s.status?i("img",{staticClass:"wh-100",attrs:{src:"static/img/activity_not_start.png",alt:""}}):t._e(),t._v(" "),1==s.status?i("img",{staticClass:"wh-100",attrs:{src:"static/img/activity_ing.png",alt:""}}):t._e(),t._v(" "),0==s.status?i("img",{staticClass:"wh-100",attrs:{src:"static/img/activity_end.png",alt:""}}):t._e()])])}))],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var o=i("VU/8")(l,r,!1,function(t){i("gKw0")},null,null);s.default=o.exports}});
//# sourceMappingURL=48.3cb14e5d86ed3699ab7e.js.map