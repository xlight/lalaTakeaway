webpackJsonp([158],{"7fIP":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Gu7T"),e=a.n(i),n=a("Cz8s"),l=a("mzkE"),c={components:{PublicHeader:n.a,PublicFooter:l.a},data:function(){return{list:{min:0,loaded:!1,loading:!1,empty:!1,data:[]},rank:{},member:{},count:0,count_final_fee:0,final_fee:0,showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(){var t=this;if(this.list.loaded)return!1;this.list.loading=!0,this.util.request({url:"spread/rank",data:{menufooter:1,min:this.list.min}}).then(function(s){var a=s.data.message.message;t.rank=a.rank,t.member=a.member,t.count=a.count,t.count_final_fee=a.count_final_fee,t.final_fee=a.final_fee,t.list.data=[].concat(e()(t.list.data),e()(a.list)),t.list.data.length||(t.list.empty=!0),t.list.loading=!1,t.list.min=s.data.message.min,t.list.min||(t.list.loaded=!0),t.showPreLoading=!1,t.menufooter=window.menufooter})}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"spread-rank"}},[a("public-header",{attrs:{title:"佣金排行榜"}}),t._v(" "),a("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"banner"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.member.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"no-gutter"},[a("div",{staticClass:"col-33"},[a("div",{staticClass:"titles"},[t._v("累积佣金")]),t._v(" "),0==t.rank.type?a("div",{staticClass:"days"},[t._v(t._s(t.final_fee)+"元")]):a("div",{staticClass:"days"},[t._v(t._s(t.count_final_fee)+"元")])]),t._v(" "),a("div",{staticClass:"col-33"},[a("div",{staticClass:"titles"},[t._v(t._s(t.member.nickname))])]),t._v(" "),a("div",{staticClass:"col-33"},[a("div",{staticClass:"titles"},[t._v("佣金排名")]),t._v(" "),2==t.rank.type||2!=t.rank.type&&t.count>301?a("div",{staticClass:"days"},[t._v("暂未上榜")]):a("div",{staticClass:"days"},[t._v("第"+t._s(t.count)+"名")])])])]),t._v(" "),a("div",{staticClass:"ranking-content"},[a("div",{staticClass:"ranking-list"},[t._m(0),t._v(" "),t.list.empty?t._e():a("van-list",{attrs:{finished:t.list.loaded,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.list.loading,callback:function(s){t.$set(t.list,"loading",s)},expression:"list.loading"}},[a("div",{staticClass:"list-item-content"},t._l(t.list.data,function(s,i){return a("div",{key:i,staticClass:"list-item"},[i+1<4?a("div",{staticClass:"col"},[a("img",{attrs:{src:"static/img/medal-"+(i+1)+".png",alt:""}})]):t._e(),t._v(" "),i+1>3?a("div",{staticClass:"col"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i+1)+"\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),a("div",{staticClass:"col clearfix"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:s.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"nickname"},[t._v(t._s(s.nickname))])]),t._v(" "),2==t.rank.type?a("div",{staticClass:"col"},[t._v("¥"+t._s(s.commission))]):a("div",{staticClass:"col"},[t._v("¥"+t._s(s.final_fee))])])}))])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list-title"},[s("div",{staticClass:"col"},[this._v("排名")]),this._v(" "),s("div",{staticClass:"col"},[this._v("昵称")]),this._v(" "),s("div",{staticClass:"col"},[this._v("累计佣金")])])}]};var d=a("VU/8")(c,o,!1,function(t){a("meWh")},null,null);s.default=d.exports},meWh:function(t,s){}});
//# sourceMappingURL=158.9ffd221740232db6fd89.js.map