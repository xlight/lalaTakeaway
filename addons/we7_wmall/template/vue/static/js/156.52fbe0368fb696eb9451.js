webpackJsonp([156],{Jc7E:function(s,t){},QCtQ:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),o=a("Cz8s"),r=a("deIj"),d={data:function(){return{adv:[],category:[],records:{page:1,psize:20,loading:!0,finished:!1,empty:!1,data:[]},showPreLoading:!0,isRefresh:!1}},components:{PublicHeader:o.a},methods:{onLoad:function(){var s=this;Object(r.a)({vue:s,url:"creditshop/index",data:{},success:function(t){s.isRefresh=!1,s.adv=[].concat(i()(s.adv),i()(t.adv)),s.category=[].concat(i()(s.category),i()(t.category)),s.records.data=[].concat(i()(s.records.data),i()(t.goods)),s.records.data.length||(s.records.empty=!0),t.goods&&t.goods.length<s.records.psize&&(s.records.finished=!0),s.records.page++,s.records.loading=!1}})},onGetGoods:function(){Object(r.b)({vue:this,url:"creditshop/index/goods",recordsName:"goods",data:{page:this.records.page,psize:this.records.psize}})},onPullDownRefresh:function(){this.records={page:1,psize:20,loading:!0,finished:!1,empty:!1,data:[]},this.adv=[],this.category=[],this.onLoad()}},mounted:function(){this.onLoad()}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{attrs:{id:"creditshop-index"}},[a("public-header",{attrs:{title:"积分商城"}}),s._v(" "),a("div",{staticClass:"content"},[a("van-pull-refresh",{on:{refresh:function(t){s.onPullDownRefresh()}},model:{value:s.isRefresh,callback:function(t){s.isRefresh=t},expression:"isRefresh"}},[s.adv.length>0?a("div",{staticClass:"creditshop-slider"},[a("van-swipe",{attrs:{autoplay:5e3}},s._l(s.adv,function(t,e){return a("van-swipe-item",{key:t.id},[a("div",{staticClass:"img-wrap",on:{click:function(a){s.util.jsUrl(t.wxapp_link)}}},[a("img",{attrs:{src:t.thumb,alt:""}})])])}))],1):s._e(),s._v(" "),s.category.length>0?a("van-row",{staticClass:"creditshop-navs"},s._l(s.category,function(t,e){return a("van-col",{key:t.id,attrs:{span:"6"}},[a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"thumb-wrap",attrs:{tag:"div",to:s.util.getUrl({path:"/pages/creditshop/goods",query:{category_id:t.id}})}},[a("img",{attrs:{src:t.thumb,alt:""}})]),s._v(" "),a("div",{staticClass:"title"},[s._v(s._s(t.name))])],1)])})):s._e(),s._v(" "),s.records.data.length>0?a("div",{staticClass:"creditshop-goods"},[a("div",{staticClass:"goods-title-wrap"},[a("div",{staticClass:"goods-title van-hairline--bottom"},[a("div",{staticClass:"flex font-14"},[a("i",{staticClass:"icon icon-gifts c-gray margin-10-r font-18"}),s._v(" "),a("span",[s._v("积分兑换实物")])]),s._v(" "),a("div",{staticClass:"flex c-gray font-14 hide"},[a("span",{staticClass:"font-13"},[s._v("更多")]),s._v(" "),a("i",{staticClass:"icon icon-right"})])])]),s._v(" "),s.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),s._v(" "),a("p",[s._v("暂无积分兑换商品!")])]):a("van-list",{staticClass:"goods-list",attrs:{finished:s.records.finished,offset:100,"immediate-check":!1},on:{load:s.onGetGoods},model:{value:s.records.loading,callback:function(t){s.$set(s.records,"loading",t)},expression:"records.loading"}},[s._l(s.records.data,function(t,e){return a("div",{key:t.id,staticClass:"goods-item"},[a("div",{staticClass:"thumb"},[a("img",{attrs:{src:t.thumb,alt:""}})]),s._v(" "),a("div",{staticClass:"goods-name ellipsis"},[s._v(s._s(t.title))]),s._v(" "),a("div",{staticClass:"price font-12 ellipsis"},[a("span",{staticClass:"c-danger font-15"},[s._v(s._s(t.use_credit1))]),s._v(" "),a("span",[s._v("积分")]),s._v(" "),t.use_credit2>0?a("span",{staticClass:"c-danger"},[s._v("+"),a("span",{staticClass:"font-15"},[s._v("￥"+s._s(t.use_credit2))])]):s._e()]),s._v(" "),a("div",{staticClass:"exchange"},[a("router-link",{staticClass:"exchange-btn c-danger",attrs:{tag:"span",to:s.util.getUrl({path:"/pages/creditshop/goodsDetail",query:{id:t.id}})}},[s._v("立即兑换")])],1)])}),s._v(" "),a("div",{staticClass:"loaded-group"},[s.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[s._v("没有更多了")])]):s._e()])],2)],1):s._e()],1)],1),s._v(" "),s.showPreLoading?a("iloading"):s._e()],1)},staticRenderFns:[]};var c=a("VU/8")(d,n,!1,function(s){a("Jc7E")},null,null);t.default=c.exports}});
//# sourceMappingURL=156.52fbe0368fb696eb9451.js.map