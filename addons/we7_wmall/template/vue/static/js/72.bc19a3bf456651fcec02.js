webpackJsonp([72],{"/psw":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),n=a.n(i),e=a("Cz8s"),o=a("mzkE"),d=a("deIj"),l={components:{PublicHeader:e.a,PublicFooter:o.a},data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},navs:[],menufooter:{},isRefresh:!1,showPreLoading:!0}},methods:{onLoad:function(t){var s=this;Object(d.b)({vue:s,force:t,url:"pintuan/index/index",data:{menufooter:1},recordsName:"goods",success:function(t){s.navs=[].concat(n()(t.navs)),s.menufooter=window.menufooter}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"pintuan-index"}},[a("public-header",{attrs:{title:"钜惠拼团"}}),t._v(" "),a("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),a("div",{staticClass:"content"},[a("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[a("div",{staticClass:"pintuan-navs margin-10-b"},[a("van-swipe",t._l(t.navs,function(s,i){return a("van-swipe-item",{key:s.id},[a("div",{staticClass:"pintuan-navs-container col-5 circle"},t._l(s,function(s,i){return a("div",{key:s.id,staticClass:"pintuan-nav-col",on:{click:function(a){t.util.jsUrl(s.link)}}},[a("div",{staticClass:"pintuan-nav-icon"},[a("img",{attrs:{src:s.thumb}})]),t._v(" "),a("div",{staticClass:"pintuan-nav-text"},[t._v(t._s(s.title))])])}))])}))],1),t._v(" "),t.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("暂无拼团活动!")])]):[a("div",{staticClass:"padding-15-t padding-15-lr font-14 c-danger bg-default"},[t._v("拼团购物更优惠")]),t._v(" "),a("van-list",{staticClass:"activity-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},t._l(t.records.data,function(s,i){return a("div",{key:s.id,staticClass:"activity-item bg-default flex-lr padding-15 van-hairline--bottom"},[a("div",{staticClass:"thumb"},[a("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),a("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.peoplenum)+"人团\n\t\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"font-14 w-100"},[a("div",{staticClass:"flex-lr margin-10-b"},[a("div",{staticClass:"font-500"},[t._v(t._s(s.store.title))]),t._v(" "),t._e()]),t._v(" "),a("p",[t._v(t._s(s.name))])]),t._v(" "),a("div",{staticClass:"flex-lr-bottom w-100"},[a("div",[a("div",{staticClass:"flex"},[a("span",{staticClass:"c-danger font-500 font-15 margin-5-r"},[t._v(t._s(s.price))]),t._v(" "),a("div",{staticClass:"c-gray line-through font-12"},[t._v(t._s(s.oldprice))]),t._v(" "),a("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),2==s.status?[a("div",{staticClass:"bar"},[a("div",{staticClass:"bar-inner",staticStyle:{width:"0%"}}),t._v(" "),a("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团0份")])])]:[a("div",{staticClass:"bar",class:{"bar-end":0==s.total}},[-1!=s.total?a("div",{staticClass:"bar-inner",style:"width:"+s.sailed_percent+"%"}):t._e(),t._v(" "),a("div",{staticClass:"bar-text",staticStyle:{width:"0%"}},[t._v("已团"+t._s(s.falesailed_total)+"份")])])]],2),t._v(" "),2==s.status?a("div",{staticClass:"btn btn-end"},[t._v("未开始")]):3==s.status?a("div",{staticClass:"btn btn-end"},[t._v("已结束")]):1==s.status?[0==s.total?a("div",{staticClass:"btn btn-end"},[t._v("已抢完")]):a("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:s.id}})}},[t._v("去拼团")])]:t._e()],2)])])})),t._v(" "),t.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[t._v("已经到底了")])]):t._e()]],2)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(l,r,!1,function(t){a("9xZ6")},null,null);s.default=c.exports},"9xZ6":function(t,s){}});
//# sourceMappingURL=72.bc19a3bf456651fcec02.js.map