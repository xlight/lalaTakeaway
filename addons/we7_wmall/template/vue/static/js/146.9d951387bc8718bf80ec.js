webpackJsonp([146],{WttH:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("Dd8w"),i=e.n(o),a=e("Cz8s"),r=e("Vr3d"),c=e("RoZr"),n=e("deIj"),d=e("NYxO"),l={data:function(){return{showPreLoading:!0,records:{page:1,psize:10,loading:!1,finished:!1,empty:!1,data:[]},cart:{num:0},store:{},hotGoods:[],keyword:"",searchHistory:[],activetabs:0,showMoveDot:[]}},components:{PublicHeader:a.a,GoodsHandle:r.a,StoreCart:c.a},methods:i()({},Object(d.b)(["replaceStore","replaceCart"]),{onSearch:function(t,s){var e=this;(e.records.loading=!0,s)?e.keyword=s:e.keyword&&-1==e.searchHistory.indexOf(e.keyword)&&(e.searchHistory.push(e.keyword),e.util.setStorage("isearchHistory.goods."+e.sid,e.searchHistory));e.keyword?Object(n.b)({vue:e,force:t,recordsName:"goods",url:"wmall/store/goods/search",data:{sid:e.sid,is_search:1,keyword:e.keyword},success:function(t){e.records.empty||(e.store=t.store,e.cart=t.cart,e.replaceStore(t.store),e.replaceCart(t.cart.message.cart))}}):e.util.$toast("请输入商品名称","",1e3)},onLoad:function(){var t=this;t.searchHistory=t.util.getStorage("isearchHistory.goods."+t.istore.id),t.searchHistory||(t.searchHistory=[]),Object(n.a)({vue:t,url:"wmall/store/goods/search",data:{sid:t.sid,is_search:0},success:function(s){t.hotGoods=s.hotGoods}})},onDetail:function(t){this.$router.push(this.util.getUrl({path:"pages/store/goodsDetail",query:{id:t,sid:this.store.id}}))},onDelHistory:function(){var t=this;this.$dialog.confirm({message:"确定清除历史记录吗"}).then(function(s){"confirm"==s&&(t.util.removeStorage("isearchHistory.goods."+t.sid),t.searchHistory=[])})}}),computed:i()({},Object(d.c)(["istore","icart"])),created:function(){this.$route.query&&(this.sid=this.$route.query.sid)},mounted:function(){this.onLoad()}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods-search"}},[e("public-header",{attrs:{title:"商品搜索"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"search-header van-hairline--bottom"},[e("div",{staticClass:"search-content"},[e("van-icon",{attrs:{name:"search"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入商品名称"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}})],1),t._v(" "),e("div",{staticClass:"search-btn",on:{click:function(s){t.onSearch(!0)}}},[t._v("搜索")])]),t._v(" "),1==t.records.page?[t.hotGoods&&t.hotGoods.length>0?e("div",{staticClass:"rmd-history"},[e("div",{staticClass:"search-rmd-wrap"},[t._m(0),t._v(" "),e("div",{staticClass:"search-rmd"},t._l(t.hotGoods,function(s,o){return e("div",{key:"hot"+o,on:{click:function(e){t.onSearch(!0,s.title)}}},[t._v(t._s(s.title))])}))])]):t._e(),t._v(" "),t.searchHistory&&t.searchHistory.length>0?e("div",{staticClass:"rmd-history"},[e("div",{staticClass:"search-rmd-wrap"},[e("div",{staticClass:"search-rmd-title"},[e("div",{staticClass:"van-hairline--bottom"},[t._v("搜索历史")]),t._v(" "),e("div",{staticClass:"icon icon-delete",on:{click:t.onDelHistory}})]),t._v(" "),e("div",{staticClass:"search-rmd"},t._l(t.searchHistory,function(s,o){return e("div",{key:"h"+o,on:{click:function(e){t.onSearch(!0,s)}}},[t._v(t._s(s))])}))])]):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"goods-search-warp"},[t.records.empty?t._e():e("van-list",{attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:function(s){t.onSearch(!1)}},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[e("div",{staticClass:"goods-list"},t._l(t.records.data,function(s){return e("div",{key:s.id,staticClass:"goods-item van-hairline--bottom flex"},[e("div",{staticClass:"goods-thumb",on:{click:function(e){t.onDetail(s.id)}}},[e("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"goods-info",attrs:{tag:"div"}},[e("div",{staticClass:"w-100 ellipsis font-14 font-500",on:{click:function(e){t.onDetail(s.id)}}},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"c-gray flex font-12",on:{click:function(e){t.onDetail(s.id)}}},[e("span",[t._v("已售"+t._s(s.sailed))]),t._v(" "),e("span",{staticClass:"margin-15-l"},[t._v("赞"+t._s(s.comment_good))])]),t._v(" "),e("div",{staticClass:"font-500 c-danger font-14 flex",on:{click:function(e){t.onDetail(s.id)}}},[e("span",[t._v("¥"+t._s(s.price)+t._s(s.unitname_cn))]),t._v(" "),s.discount?e("div",{staticClass:"flex margin-10-l"},[e("van-icon",{attrs:{name:"tag"}}),t._v(" "),e("span",{staticClass:"font-12"},[t._v(t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份")])],1):t._e()]),t._v(" "),e("div",{staticClass:"goods-operation"},[e("goods-handle",{attrs:{goods:s,optionId:0,from:"detail"}})],1)])])}))])],1),t._v(" "),t.records.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),e("p",[t._v("暂无相关商品，敬请期待")])]):t._e()],2),t._v(" "),e("store-cart",{attrs:{show:!t.records.empty&&t.records.page>1,store:t.store,cart:t.cart}}),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"search-rmd-title "},[s("div",{staticClass:"van-hairline--bottom"},[this._v("热门搜索")])])}]};var v=e("VU/8")(l,h,!1,function(t){e("hhGG")},null,null);s.default=v.exports},hhGG:function(t,s){}});
//# sourceMappingURL=146.9d951387bc8718bf80ec.js.map