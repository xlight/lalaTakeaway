webpackJsonp([81],{mH2u:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("woOf"),a=s.n(i),n=s("Cz8s"),r=s("mzkE"),o=s("deIj"),d={components:{PublicHeader:n.a,PublicFooter:r.a},data:function(){return{records:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},cateid:0,category:{title:""},isRefresh:!1,showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(t){var e=this;Object(o.b)({vue:e,force:t,url:"kanjia/activity/index",data:{menufooter:1,cateid:e.cateid},success:function(t){e.menufooter=window.menufooter,e.category=a()(e.category,t.category),e.util.setWXTitle(e.category.title)}})},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.$route.query&&this.$route.query.cateid>0&&(this.cateid=this.$route.query.cateid),this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"kanjia-category"}},[s("public-header",{attrs:{title:t.category.title}}),t._v(" "),s("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("van-pull-refresh",{on:{refresh:function(e){return t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.records.empty?t._e():s("div",{staticClass:"padding-15-tb padding-10-lr font-14 c-danger bg-default"},[t._v("召集好友来砍价")]),t._v(" "),t.records.empty?s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("暂无砍价活动!")])]):s("van-list",{staticClass:"activity-list padding-10-b",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},[t._l(t.records.data,function(e,i){return s("div",{key:e.id,staticClass:"activity-item van-hairline--top"},[s("div",{staticClass:"thumb"},[s("img",{staticClass:"img-100",attrs:{src:e.thumb,alt:""}}),t._v(" "),3==e.status?s("div",{staticClass:"end-bg"},[s("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),s("div",{staticClass:"title"},[t._v("【邀请好友帮忙砍价】"+t._s(e.name))]),t._v(" "),s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"c-danger font-16 font-bold"},[t._v("¥"+t._s(e.price))]),t._v(" "),s("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v("¥"+t._s(e.oldprice))])]),t._v(" "),e.userlist&&e.userlist.length>0?s("div",{staticClass:"buy-history flex"},[s("div",{staticClass:"avatar-list"},t._l(e.userlist,function(e,i){return i<3?s("img",{key:i,attrs:{src:e.avatar}}):t._e()}),0),t._v(" "),s("div",{staticClass:"font-12 c-gray margin-5-l"},[t._v(t._s(e.userlist.length)+"人参与")])]):t._e()]),t._v(" "),1==e.status?[0!=e.total?s("router-link",{staticClass:"btn btn-detail",attrs:{to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:e.id}}),tag:"div"}},[t._v("去砍价")]):s("div",{staticClass:"btn btn-end"},[t._v("已抢光")])]:2==e.status?[s("div",{staticClass:"btn btn-end"},[t._v("未开始")])]:3==e.status?[s("div",{staticClass:"btn btn-end"},[t._v("已结束")])]:t._e()],2)])}),t._v(" "),t.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(d,l,!1,function(t){s("vmo8")},null,null);e.default=c.exports},vmo8:function(t,e){}});