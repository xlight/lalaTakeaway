webpackJsonp([27],{QCtQ:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),e=a.n(i),o=a("Cz8s"),d=a("deIj"),n={data:function(){return{adv:[],category:[],goods:[],records:{page:1,psize:20,loading:!0,finished:!1,empty:!1,data:[]},showPreLoading:!0}},components:{PublicHeader:o.a},methods:{onLoad:function(){var t=this;Object(d.a)({vue:t,url:"creditshop/index",data:{},success:function(s){t.adv=[].concat(e()(t.adv),e()(s.adv)),t.category=[].concat(e()(t.category),e()(s.category)),t.goods=[].concat(e()(t.goods),e()(s.goods)),t.goods.length||(t.records.empty=!0),s.goods.length<t.records.psize&&(t.records.finished=!0),t.records.page++,t.records.loading=!1}})},onGetGoods:function(){Object(d.b)({vue:this,url:"creditshop/index/goods",recordsName:"goods",data:{}})}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"creditshop-index"}},[a("public-header",{attrs:{title:"积分商城"}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"creditshop-slider"},[t.adv.length>0?a("van-swipe",{attrs:{autoplay:5e3}},t._l(t.adv,function(s,i){return a("van-swipe-item",{key:s.id},[a("div",{staticClass:"img-wrap",on:{click:function(a){t.util.jsUrl(s.wxapp_link)}}},[a("img",{attrs:{src:s.thumb,alt:""}})])])})):t._e()],1),t._v(" "),t.category.length>0?a("van-row",{staticClass:"creditshop-navs"},t._l(t.category,function(s,i){return a("van-col",{key:s.id,attrs:{span:"6"}},[a("div",{staticClass:"nav-item"},[a("router-link",{staticClass:"thumb-wrap",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/creditshop/goods",query:{category_id:s.id}})}},[a("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(s.name))])],1)])})):t._e(),t._v(" "),(t.goods.length,a("div",{staticClass:"creditshop-goods"},[t._m(0),t._v(" "),t.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("暂无积分兑换商品!")])]):a("van-list",{staticClass:"goods-list",attrs:{finished:t.records.finished,offset:100,"immediate-check":!1},on:{load:t.onGetGoods},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.goods,function(s,i){return a("div",{key:s.id,staticClass:"goods-item"},[a("div",{staticClass:"thumb"},[a("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),a("div",{staticClass:"goods-name ellipsis"},[t._v(t._s(s.title))]),t._v(" "),a("div",{staticClass:"price font-12 ellipsis"},[a("span",{staticClass:"c-danger font-15"},[t._v(t._s(s.use_credit1))]),t._v(" "),a("span",[t._v("积分")]),t._v(" "),s.use_credit2>0?a("span",{staticClass:"c-danger"},[t._v("+"),a("span",{staticClass:"font-15"},[t._v("￥"+t._s(s.use_credit2))])]):t._e()]),t._v(" "),a("div",{staticClass:"exchange"},[a("router-link",{staticClass:"exchange-btn c-danger",attrs:{tag:"span",to:t.util.getUrl({path:"/pages/creditshop/goodsDetail",query:{id:s.id}})}},[t._v("立即兑换")])],1)])}),t._v(" "),a("div",{staticClass:"loaded-group"},[t.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])],2)],1))],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"goods-title-wrap"},[s("div",{staticClass:"goods-title van-hairline--bottom"},[s("div",{staticClass:"flex font-14"},[s("i",{staticClass:"icon icon-gifts c-gray margin-10-r font-18"}),this._v(" "),s("span",[this._v("积分兑换实物")])]),this._v(" "),s("div",{staticClass:"flex c-gray font-14"},[s("span",{staticClass:"font-13"},[this._v("更多")]),this._v(" "),s("i",{staticClass:"icon icon-right"})])])])}]};var r=a("VU/8")(n,c,!1,function(t){a("gWXe")},null,null);s.default=r.exports},gWXe:function(t,s){}});
//# sourceMappingURL=27.705f5c0fe412549c0698.js.map