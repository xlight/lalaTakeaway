webpackJsonp([174],{LLw5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Gu7T"),i=s.n(a),o={components:{PublicHeader:s("Cz8s").a},data:function(){return{showPreLoading:!0,stores:{page:1,psize:15,loading:!1,loaded:!1,empty:!1,data:[]}}},methods:{onLoad:function(){var e=this;if(this.stores.loaded)return!1;this.util.request({url:"storebd/store",data:{page:this.stores.page,psize:this.stores.psize}}).then(function(t){e.showPreLoading=!1;var s=t.data.message;s.errno?e.$toast(s.message):(e.stores.page++,e.stores.data=[].concat(i()(e.stores.data),i()(s.message.stores)),e.stores.data.length||(e.stores.empty=!0),s.message.stores.length<e.stores.psize&&(e.stores.loaded=!0),e.stores.loading=!1,console.log(e.stores.data))})}},mounted:function(){this.onLoad()}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"storebd-store"}},[s("public-header",{attrs:{title:"推广店铺"}}),e._v(" "),s("div",{staticClass:"content"},[e.stores.empty?s("div",{staticClass:"no-data"},[s("div",{staticClass:"bg"}),e._v(" "),s("p",[e._v("暂时没有数据哦～")])]):s("van-list",{attrs:{finished:e.stores.loaded,offset:100,"immediate-check":!1},on:{load:e.onLoad},model:{value:e.stores.loading,callback:function(t){e.$set(e.stores,"loading",t)},expression:"stores.loading"}},[e._l(e.stores.data,function(t,a){return s("div",{key:a,staticClass:"store"},[s("div",{staticClass:"store-content van-hairline--bottom"},[s("div",{staticClass:"store-info"},[s("img",{staticClass:"store-img",attrs:{src:t.logo,alt:""}}),e._v(" "),s("div",{staticClass:"name"},[e._v(e._s(t.title))])]),e._v(" "),s("div",{staticClass:"bind-time"},[s("div",[e._v("绑定时间："+e._s(t.addtime_cn))])])]),e._v(" "),s("div",{staticClass:"store-tips"},[s("div",{staticClass:"tips"},[s("div",[e._v("店内单佣金计算方式：")]),e._v(" "),1==t.fee_instore.type?s("div",[e._v("抽成比例："+e._s(t.fee_instore.fee_rate)+"% ,最低抽成金额："+e._s(t.fee_instore.fee_min)+"元")]):2==t.fee_instore.type?s("div",[e._v("固定抽成："+e._s(t.fee_instore.fee)+"元")]):s("div",[e._v("未设置")])]),e._v(" "),s("div",{staticClass:"tips"},[s("div",[e._v("外卖单佣金计算方式：")]),e._v(" "),1==t.fee_takeout.type?s("div",[e._v("抽成比例："+e._s(t.fee_takeout.fee_rate)+"% ,最低抽成金额："+e._s(t.fee_takeout.fee_min)+"元")]):2==t.fee_takeout.type?s("div",[e._v("固定抽成："+e._s(t.fee_takeout.fee)+"元")]):s("div",[e._v("未设置")])])])])}),e._v(" "),e.stores.loaded?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[e._v("我是有底线的")])]):e._e()],2)],1),e._v(" "),s("transition",{attrs:{name:"loading"}},[e.showPreLoading?s("iloading"):e._e()],1)],1)},staticRenderFns:[]};var d=s("VU/8")(o,n,!1,function(e){s("VJOa")},null,null);t.default=d.exports},VJOa:function(e,t){}});
//# sourceMappingURL=174.b54ef303b743b642ce51.js.map