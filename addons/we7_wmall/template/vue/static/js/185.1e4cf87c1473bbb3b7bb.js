webpackJsonp([185],{hjXQ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Gu7T"),s=a.n(i),r=a("Cz8s"),o=a("mzkE"),n={components:{PublicHeader:r.a,PublicFooter:o.a},data:function(){return{trade_type:0,refresh:0,active:0,now_active:0,records:{min:0,loaded:!1,loading:!1,empty:!1,data:[]},title:{1:"全部",2:"佣金入账",3:"申请提现",4:"其他变动"},showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(){var t=this;if(1==this.refresh&&(this.records={min:0,loaded:!1,loading:!1,empty:!1,data:[]}),this.records.loaded)return!1;this.records.loading=!0,this.util.request({url:"spread/current",data:{menufooter:1,min:this.records.min,trade_type:this.trade_type}}).then(function(e){var a=e.data.message;t.records.data=[].concat(s()(t.records.data),s()(a.message.current)),t.records.data.length||(t.records.empty=!0),t.records.loading=!1,t.records.min=a.min,a.min||(t.records.loaded=!0),t.now_active=t.active,t.refresh=0,t.showPreLoading=!1,t.menufooter=window.menufooter})},onChangeStatus:function(t,e){this.now_active!=t&&(this.refresh=1),this.trade_type=t,this.onLoad()}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"spread-current"}},[a("public-header",{attrs:{title:"佣金明细"}}),t._v(" "),a("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),a("div",{staticClass:"content"},[a("van-tabs",{on:{click:t.onChangeStatus},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(4,function(e,i){return a("van-tab",{key:i,attrs:{title:t.title[e]}},[t.records.empty?a("div",{staticClass:"current-list"},[a("div",{staticClass:"no-data"},[a("div",{staticClass:"bg"}),t._v(" "),a("p",[t._v("暂时没有佣金明细哦～")])])]):a("van-list",{attrs:{finished:t.records.loaded,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(e){t.$set(t.records,"loading",e)},expression:"records.loading"}},[a("div",{staticClass:"current-list"},[a("div",{staticClass:"list-block"},[a("ul",{staticClass:"list"},t._l(t.records.data,function(e,i){return a("li",{key:i,staticClass:"item-content"},[a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/spread/currentDetail",query:{id:e.id}})}},[a("div",{staticClass:"item-inner van-hairline--bottom"},[a("div",{staticClass:"item-title"},[1==e.trade_type?a("div",{staticClass:"item-title-top"},[t._v("佣金入账")]):2==e.trade_type?a("div",{staticClass:"item-title-top"},[t._v("申请提现")]):3==e.trade_type?a("div",{staticClass:"item-title-top"},[t._v("其他变动")]):t._e(),t._v(" "),a("div",{staticClass:"item-title-bottom"},[t._v(t._s(e.addtime))])]),t._v(" "),a("div",{staticClass:"item-after"},[a("div",{staticClass:"item-title-top",class:{"color-success":e.fee>0,"color-danger":e.fee<0}},[t._v(t._s(e.fee>0?"+"+e.fee:e.fee))]),t._v(" "),a("div",{staticClass:"item-title-bottom"},[t._v("¥"+t._s(e.amount))])]),t._v(" "),a("van-icon",{staticClass:"item-inner-icon",attrs:{name:"right"}})],1)])],1)}),0)])])])],1)}),1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,d,!1,function(t){a("v+ZM")},null,null);e.default=c.exports},"v+ZM":function(t,e){}});