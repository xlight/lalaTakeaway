webpackJsonp([72],{"+WIJ":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),e=a.n(i),n=a("Cz8s"),o=a("mzkE"),l={components:{PublicHeader:n.a,PublicFooter:o.a},data:function(){return{comments:[],loaded:!1,loading:!1,empty:!1,min:0}},methods:{onLoad:function(){var t=this;if(this.loaded)return!1;this.loading=!0,this.util.request({url:"ordergrant/share",data:{min:this.min}}).then(function(s){var a=s.data.message;t.comments=[].concat(e()(t.comments),e()(a.message)),t.comments.length||(t.loaded=!0,t.empty=!0),a.min||(t.loaded=!0),t.loading=!1,t.min=a.min})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"ordergrant-share"}},[a("public-header",{attrs:{title:"订单分享",bgcolor:"#ff2d4b"}}),t._v(" "),a("div",{staticClass:"content"},[t.empty?a("div",{staticClass:"common-no-con"},[a("img",{attrs:{src:"static/img/comment_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("还没有分享记录")])]):a("van-list",{attrs:{finished:t.loaded,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.comments,function(s){return a("div",{staticClass:"order-share-list"},[a("div",{staticClass:"order-share-item"},[a("div",{staticClass:"col-15"},[a("img",{attrs:{src:s.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"col-85"},[a("div",{staticClass:"user"},[a("div",{staticClass:"username"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.username)+"\n\t\t\t\t\t\t\t\t"),a("span",{staticClass:"order-time"},[t._v(t._s(s.addtime))])]),t._v(" "),a("div",{staticClass:"stars"},[a("span",{staticClass:"star-rank-outline"},[a("span",{staticClass:"star-rank-active",style:{width:s.score+"%"}})]),t._v(" "),a("span",{staticClass:"delivery-time"},[t._v(t._s(s.lasttime)+"分钟送达")])])]),t._v(" "),a("div",{staticClass:"comment"},[t._v(t._s(s.note))]),t._v(" "),a("div",{staticClass:"list-block"},[a("ul",[a("li",[a("router-link",{staticClass:"item-link",attrs:{to:t.util.getUrl({path:"../store/goods",query:{sid:s.sid}})}},[a("div",{staticClass:"item-media"},[a("img",{attrs:{src:s.logo}})]),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v(t._s(s.store.title))]),t._v(" "),t._l(s.activity.items,function(s){return s.int_num<=1?[a("div",{staticClass:"tags"},[t._v(t._s(s.title))]),t._v(" "),a("van-icon",{staticClass:"icon",attrs:{name:"right"}})]:t._e()})],2)])],1)])]),t._v(" "),a("div",{staticClass:"order"},[a("span",[t._v("TA的订单:")]),t._v(" "),a("div",{staticClass:"order-goods row"},t._l(s.goods,function(s){return a("div",{staticClass:"goods-item col-25"},[a("img",{attrs:{src:s.thumb,alt:""}}),t._v(" "),a("div",{staticClass:"goods-num"},[t._v(t._s(s.goods_num)+"份")]),t._v(" "),a("div",{staticClass:"goods-title"},[t._v(t._s(s.goods_title))])])})),t._v(" "),a("div",{staticClass:"other"},[t._v("\n\t\t\t\t\t\t\t\t实付：\n\t\t\t\t\t\t\t\t"),a("span",{staticClass:"price"},[t._v("￥"),a("span",[t._v(t._s(s.final_fee))])]),t._v(" "),a("router-link",{staticClass:"eorder",attrs:{to:t.util.getUrl({path:"../store/goods",query:{sid:s.sid,order_id:s.oid,f:1}})}},[t._v("跟一单")])],1)])])])])}))],1),t._v(" "),a("public-footer")],1)},staticRenderFns:[]};var d=a("VU/8")(l,r,!1,function(t){a("kggl")},null,null);s.default=d.exports},kggl:function(t,s){}});
//# sourceMappingURL=72.0a11e4ab4bcf0ffab69e.js.map