webpackJsonp([69],{"+WIJ":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),e=i.n(a),n=i("Cz8s"),o=i("mzkE"),r={components:{PublicHeader:n.a,PublicFooter:o.a},data:function(){return{comments:[],loaded:!1,loading:!1,empty:!1,min:0}},methods:{onLoad:function(){var t=this;if(this.loaded)return!1;this.loading=!0,this.util.request({url:"ordergrant/share",data:{min:this.min}}).then(function(s){var i=s.data.message;t.comments=[].concat(e()(t.comments),e()(i.message)),t.comments.length||(t.loaded=!0,t.empty=!0),i.min||(t.loaded=!0),t.loading=!1,t.min=i.min})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"ordergrant-share"}},[i("public-header",{attrs:{title:"订单分享",bgcolor:"#ff2d4b"}}),t._v(" "),i("div",{staticClass:"content"},[t.empty?i("div",{staticClass:"common-no-con"},[i("img",{attrs:{src:"static/img/comment_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("还没有分享记录")])]):i("van-list",{attrs:{finished:t.loaded,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.comments,function(s){return i("div",{staticClass:"order-share-list"},[i("div",{staticClass:"order-share-item"},[i("div",{staticClass:"col-15"},[i("img",{attrs:{src:s.avatar,alt:""}})]),t._v(" "),i("div",{staticClass:"col-85"},[i("div",{staticClass:"user"},[i("div",{staticClass:"username"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.username)+"\n\t\t\t\t\t\t\t\t"),i("span",{staticClass:"order-time"},[t._v(t._s(s.addtime))])]),t._v(" "),i("div",{staticClass:"stars"},[i("span",{staticClass:"star-rank-outline"},[i("span",{staticClass:"star-rank-active",style:{width:s.score+"%"}})]),t._v(" "),i("span",{staticClass:"delivery-time"},[t._v(t._s(s.lasttime)+"分钟送达")])])]),t._v(" "),i("div",{staticClass:"comment"},[t._v(t._s(s.note))]),t._v(" "),i("div",{staticClass:"list-block"},[i("ul",[i("li",[i("router-link",{staticClass:"item-link",attrs:{to:t.util.getUrl({path:"../store/goods",query:{sid:s.sid}})}},[i("div",{staticClass:"item-media"},[i("img",{attrs:{src:s.logo}})]),t._v(" "),i("div",{staticClass:"item-inner"},[i("div",{staticClass:"item-title"},[t._v(t._s(s.store.title))]),t._v(" "),t._l(s.activity.items,function(s){return s.int_num<=1?[i("div",{staticClass:"tags"},[t._v(t._s(s.title))]),t._v(" "),i("van-icon",{staticClass:"icon",attrs:{name:"right"}})]:t._e()})],2)])],1)])]),t._v(" "),i("div",{staticClass:"order"},[i("span",[t._v("TA的订单:")]),t._v(" "),i("div",{staticClass:"order-goods row"},t._l(s.goods,function(s){return i("div",{staticClass:"goods-item col-25"},[i("img",{attrs:{src:s.thumb,alt:""}}),t._v(" "),i("div",{staticClass:"goods-num"},[t._v(t._s(s.goods_num)+"份")]),t._v(" "),i("div",{staticClass:"goods-title"},[t._v(t._s(s.goods_title))])])})),t._v(" "),i("div",{staticClass:"other"},[t._v("\n\t\t\t\t\t\t\t\t实付：\n\t\t\t\t\t\t\t\t"),i("span",{staticClass:"price"},[t._v("￥"),i("span",[t._v(t._s(s.final_fee))])]),t._v(" "),i("router-link",{staticClass:"eorder",attrs:{to:t.util.getUrl({path:"../store/goods",query:{sid:s.sid,order_id:s.oid,f:1}})}},[t._v("跟一单")])],1)])])])])}))],1),t._v(" "),i("public-footer")],1)},staticRenderFns:[]};var d=i("VU/8")(r,l,!1,function(t){i("i82r")},null,null);s.default=d.exports},i82r:function(t,s){}});