webpackJsonp([157],{"UX+Z":function(s,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t("Gu7T"),o=t.n(a),e=t("Cz8s"),n=t("NPH5"),d=t("KgXo"),l={data:function(){return{bargains:{page:1,psize:10,finished:!1,loading:!1,goods:[]},config:{},showLoading:!0,lazyload_goods:""}},components:{PublicHeader:e.a,load:n.a,loading:d.a},methods:{onLoad:function(){var s=this;this.util.request({url:"bargain/index",data:{page:this.bargains.page,psize:this.bargains.psize}}).then(function(i){var t=i.data.message;if(!t.errno)return console.log(t),s.config=t.message.config,s.lazyload_goods=s.config.lazyload_goods,s.bargains.goods=[].concat(o()(s.bargains.goods),o()(t.message.bargains)),s.hideLoading(),s.bargains.page++,s.bargains.loading=!1,t.message.bargains.length<s.bargains.psize?(s.bargains.finished=!0,!1):void 0;s.util.$toast(t.message)})},hideLoading:function(){this.showLoading=!1}},mounted:function(){this.onLoad()}},c={render:function(){var s=this,i=s.$createElement,t=s._self._c||i;return t("div",{attrs:{id:"bargain"}},[t("public-header",{attrs:{title:"天天特价"}}),s._v(" "),s.showLoading?s._e():[t("div",{staticClass:"content"},[t("div",{staticClass:"activity-banner"},[t("router-link",{attrs:{tag:"div",to:""}},[t("img",{staticClass:"top-img",attrs:{src:s.config.thumb}})])],1),s._v(" "),s.bargains.goods.length>0?t("van-list",{attrs:{finished:s.bargains.finished,offset:100,"immediate-check":!1},on:{load:s.onLoad},model:{value:s.bargains.loading,callback:function(i){s.$set(s.bargains,"loading",i)},expression:"bargains.loading"}},[1==s.config.template?t("div",{staticClass:"diy-waimai-food-list-onerow-box"},[t("div",{staticClass:"item-list"},s._l(s.bargains.goods,function(i,a){return t("div",{key:a,staticClass:"goods-item",class:{"border-1px-t":0!=a}},[t("div",{staticClass:"row item-wrapper"},[t("div",{staticClass:"col-40 goods-img"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:s.lazyload_goods},expression:"{src: goodsitem.thumb, loading: lazyload_goods}"}]}),s._v(" "),i.discount>0&&i.discount<10?t("div",{staticClass:"discount"},[s._v(s._s(i.discount)+"折")]):s._e()]),s._v(" "),t("div",{staticClass:"col-60"},[t("div",{staticClass:"goods-name"},[s._v(s._s(i.title))]),s._v(" "),t("div",{staticClass:"sale-num"},[s._v("已售:"+s._s(i.sailed)+" 库存:"+s._s(i.discount_available_total))]),s._v(" "),t("div",{staticClass:"store-name"},[t("div",{staticClass:"icon icon-shop"}),s._v(" "+s._s(i.store_title)+"\n\t\t\t\t\t\t\t\t\t")]),s._v(" "),t("div",{staticClass:"price-buybtn"},[t("div",{staticClass:"price-wrap"},[t("div",{staticClass:"in-b now-price"},[s._v("￥"+s._s(i.discount_price))]),s._v(" "),t("div",{staticClass:"in-b old-price"},[s._v("￥"+s._s(i.price))])]),s._v(" "),1==i.is_in_business?t("router-link",{staticClass:"in-b buy-btn",attrs:{to:s.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:i.sid,id:i.goods_id}})}},[s._v("立即抢购")]):t("div",{staticClass:"in-b buy-btn disabled"},[s._v("休息中")])],1)])])])}),0)]):t("div",{staticClass:"diy-waimai-goods-list-box"},[t("div",{staticClass:"box-list"},[s._l(s.bargains.goods,function(i){return t("div",{staticClass:"box-item"},[t("div",{staticClass:"main-content-box"},[t("div",{staticClass:"goods-image"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:s.lazyload_goods},expression:"{src: goodsitem.thumb, loading: lazyload_goods}"}]}),s._v(" "),i.discount>0&&i.discount<10?t("div",{staticClass:"discount"},[s._v(s._s(i.discount)+"折")]):s._e()]),s._v(" "),t("div",{staticClass:"goods-name"},[s._v(s._s(i.title))]),s._v(" "),t("div",{staticClass:"discount-soldnum"},[t("div",{staticClass:"in-b sold-num"},[s._v("已售"+s._s(i.sailed))]),s._v(" "),t("div",{staticClass:"in-b praise"},[s._v("库存"+s._s(i.discount_available_total))])]),s._v(" "),t("div",{staticClass:"store-name"},[t("div",{staticClass:"icon icon-shop"}),s._v(" "+s._s(i.store_title)+"\n\t\t\t\t\t\t\t\t")]),s._v(" "),t("div",{staticClass:"price-buybtn"},[t("div",{staticClass:"in-b price"},[t("div",{staticClass:"now-price"},[s._v("￥"+s._s(i.discount_price))]),s._v(" "),t("div",{staticClass:"old-price"},[s._v("￥"+s._s(i.price))])]),s._v(" "),1==i.is_in_business?t("router-link",{staticClass:"in-b buy-btn",attrs:{to:s.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:i.sid,id:i.goods_id}})}},[s._v("立刻购买")]):t("div",{staticClass:"in-b buy-btn disabled"},[s._v("休息中")])],1)])])}),s._v(" "),t("div",{staticStyle:{clear:"both"}})],2)])]):t("load",{attrs:{type:"loaded",text:"暂时没有特价商品",bgcolor:"#f5f5f5"}}),s._v(" "),s.config.agreement?t("div",{staticClass:"activity-rule"},[t("p",{staticClass:"activity-rule-title font-bold text-center"},[s._v("活动规则")]),s._v(" "),t("div",{staticClass:"activity-rule-content",domProps:{innerHTML:s._s(s.config.agreement)}})]):s._e()],1)],s._v(" "),t("transition",{attrs:{name:"loading"}},[t("iloading",{directives:[{name:"show",rawName:"v-show",value:s.showLoading,expression:"showLoading"}]})],1)],2)},staticRenderFns:[]};var r=t("VU/8")(l,c,!1,function(s){t("uOly")},null,null);i.default=r.exports},uOly:function(s,i){}});