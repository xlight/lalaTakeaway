webpackJsonp([139],{kTxc:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=o("Gu7T"),a=o.n(e),i=o("Cz8s"),d=o("NPH5"),n={data:function(){return{category_id:Number,goods:{page:1,psize:12,title:"",loading:!1,finished:!1,empty:!1,data:[]},key:"",showPreLoading:!0}},components:{PublicHeader:i.a,Load:d.a},methods:{onLoad:function(t){var s=this;if(t&&(this.goods={page:1,psize:12,title:this.key,loading:!0,finished:!1,empty:!1,data:[]}),this.goods.finished)return!1;this.util.request({url:"creditshop/index/goods",data:{page:this.goods.page,psize:this.goods.psize,category_id:this.category_id,title:this.goods.title}}).then(function(t){s.showPreLoading=!1;var o=t.data.message;if(o.errno)return s.util.$toast(o.message),!1;o=o.message.goods,s.goods.data=[].concat(a()(s.goods.data),a()(o)),o.length<s.goods.psize&&(s.goods.finished=!0,s.goods.data.length||(s.goods.empty=!0)),s.goods.loading=!1,s.goods.page++})},onSearch:function(){this.key&&this.onLoad(!0)}},created:function(){if(!this.$route.query.category_id)return this.util.$toast("参数错误"),!1;this.category_id=this.$route.query.category_id},mounted:function(){this.onLoad()}},c={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{attrs:{id:"creditshop-goods"}},[o("public-header",{attrs:{title:"兑换商品"}}),t._v(" "),o("div",{staticClass:"content"},[o("van-search",{attrs:{"show-action":"",background:"#f5f5f5",placeholder:"请输入关键字"},model:{value:t.key,callback:function(s){t.key=s},expression:"key"}},[o("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),o("div",{staticClass:"goods-group"},[t.goods.empty?o("div",{staticClass:"no-data"},[o("img",{attrs:{src:"static/img/goods_no_con.png",alt:""}}),t._v(" "),o("p",[t._v("暂无符合条件的商品!")])]):o("van-list",{staticClass:"goods-list",attrs:{finished:t.goods.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.goods.loading,callback:function(s){t.$set(t.goods,"loading",s)},expression:"goods.loading"}},[t._l(t.goods.data,function(s,e){return o("div",{key:e,staticClass:"goods-item"},[o("div",{staticClass:"thumb"},[o("img",{attrs:{src:s.thumb,alt:""}})]),t._v(" "),o("div",{staticClass:"goods-name ellipsis"},[t._v(t._s(s.title))]),t._v(" "),o("div",{staticClass:"price font-12 ellipsis"},[o("span",{staticClass:"c-danger font-15"},[t._v(t._s(s.use_credit1))]),t._v(" "),o("span",[t._v("积分")]),t._v(" "),s.use_credit2>0?o("span",{staticClass:"c-danger"},[t._v("+"),o("span",{staticClass:"font-15"},[t._v("￥"+t._s(s.use_credit2))])]):t._e()]),t._v(" "),o("div",{staticClass:"exchange"},[o("router-link",{staticClass:"exchange-btn c-danger",attrs:{tag:"span",to:t.util.getUrl({path:"/pages/creditshop/goodsDetail",query:{id:s.id}})}},[t._v("立即兑换")])],1)])}),t._v(" "),o("div",{staticClass:"loaded-group"},[t.goods.finished?o("div",{staticClass:"loaded"},[o("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])],2)],1)],1),t._v(" "),t.showPreLoading?o("iloading"):t._e()],1)},staticRenderFns:[]};var r=o("VU/8")(n,c,!1,function(t){o("n/e4")},null,null);s.default=r.exports},"n/e4":function(t,s){}});