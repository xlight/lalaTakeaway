webpackJsonp([13],{Elc0:function(t,e){},"X2t/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Cz8s"),a=s("deIj"),n={data:function(){return{totalComment:4,records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},isRefresh:!1,showPreLoading:!0,filter:{items:{comment_type:"all"}}}},components:{PublicHeader:i.a},methods:{onLoad:function(t){var e=this;Object(a.b)({vue:e,force:t,url:"delivery/comment/list",success:function(t){e.totalComment=t.totalComment}})},onToggleStatus:function(t){this.filter.items.comment_type!=t&&(this.filter.items.comment_type=t)},onPullDownRefresh:function(){this.onLoad(!0)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(t,e){this.onLoad(!0)},deep:!0}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"comment-list"}},[s("public-header",{attrs:{title:"我的评价"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"wrap-search"},[s("div",{staticClass:"tab-group"},[s("div",{staticClass:"tab-item",class:{active:"all"==t.filter.items.comment_type},on:{click:function(e){t.onToggleStatus("all")}}},[t._v("全部")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:"good"==t.filter.items.comment_type},on:{click:function(e){t.onToggleStatus("good")}}},[t._v("满意")]),t._v(" "),s("div",{staticClass:"tab-item",class:{active:"bad"==t.filter.items.comment_type},on:{click:function(e){t.onToggleStatus("bad")}}},[t._v("不满意")])])]),t._v(" "),s("van-pull-refresh",{on:{refresh:function(e){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(e){t.isRefresh=e},expression:"isRefresh"}},[t.records.empty?s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("没有评价!")])]):s("van-list",{staticClass:"comment-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},[s("div",{staticClass:"comment-tips"},[s("div",{staticClass:"tips flex"},[s("div",{staticClass:"font-15 padding-10-lr font-bold"},[t._v("总评分")]),t._v(" "),s("van-rate",{attrs:{size:18},model:{value:t.totalComment,callback:function(e){t.totalComment=e},expression:"totalComment"}}),t._v(" "),s("div",{staticClass:"font-15 c-gray padding-10-l"},[t._v(t._s(t.totalComment)+"分")])],1)]),t._v(" "),t._l(t.records.data,function(e,i){return s("div",{key:e.id,staticClass:"comment-item van-hairline--bottom"},[s("div",{staticClass:"flex-lr"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"c-gray"},[t._v("顾客评价：")]),t._v(" "),s("van-rate",{attrs:{size:18},model:{value:e.delivery_service,callback:function(s){t.$set(e,"delivery_service",s)},expression:"item.delivery_service"}})],1),t._v(" "),s("div",{staticClass:"font-12 c-gray"},[t._v(t._s(e.addtime_cn))])]),t._v(" "),e.note?s("div",{staticClass:"padding-15-t"},[t._v("\n\t\t\t\t\t\t"+t._s(e.note)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),e.deliveryer_tag.length>0?s("div",{staticClass:"padding-10-t flex"},t._l(e.deliveryer_tag,function(e,i){return s("div",{key:e.id,staticClass:"comment-itag"},[t._v(t._s(e))])})):t._e()])}),t._v(" "),t.records.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=s("VU/8")(n,o,!1,function(t){s("Elc0")},null,null);e.default=l.exports}});