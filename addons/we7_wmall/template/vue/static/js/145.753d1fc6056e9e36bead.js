webpackJsonp([145],{"48BS":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Gu7T"),r=e.n(a),i={components:{PublicHeader:e("Cz8s").a},data:function(){return{status:-1,records:{page:1,psize:10,empty:!1,loaded:!1,loading:!1,data:[]},filter:{items:{status:-1}},showPreLoading:!0}},methods:{onChangeStatus:function(t){t!=this.filter.items.status&&(this.filter.items.status=t,this.records={page:1,psize:10,empty:!1,loaded:!1,loading:!1,data:[]},this.onLoad())},onLoad:function(){var t=this;t.records.loading=!0,t.util.request({url:"wheel/activity/record",data:{status:t.filter.items.status,page:t.records.page,psize:t.records.psize}}).then(function(s){t.showPreLoading=!1;var e=s.data.message;e.errno?t.$toast(e.message):(e=e.message,t.records.data=[].concat(r()(t.records.data),r()(e.records)),(!e.records||e.records.length<t.records.psize)&&(t.records.loaded=!0),t.records.data.length||(t.records.empty=!0),t.records.page++,t.records.loading=!1)})},onGetPrize:function(t){this.util.jspost({url:"wheel/activity/status",data:{id:t},confirm:"确定已领取赠品吗？"})}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wheel-record"}},[e("public-header",{attrs:{title:"中奖纪录"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"tab-group"},[e("div",{staticClass:"tab-item",class:{active:-1==t.filter.items.status},on:{click:function(s){return t.onChangeStatus(-1)}}},[t._v("全部")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:0==t.filter.items.status},on:{click:function(s){return t.onChangeStatus(0)}}},[t._v("未领取")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:1==t.filter.items.status},on:{click:function(s){return t.onChangeStatus(1)}}},[t._v("已领取")])]),t._v(" "),t.records.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/no_order.png",alt:""}}),t._v(" "),e("p",[t._v("暂时没有中奖记录哦～")])]):e("van-list",{staticClass:"van-tabs",attrs:{finished:t.records.loaded,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.records.loading,callback:function(s){t.$set(t.records,"loading",s)},expression:"records.loading"}},[t._l(t.records.data,function(s,a){return e("div",{key:a,staticClass:"record-item"},[e("div",{staticClass:"record-body"},[e("div",{staticClass:"record-inner"},[e("span",{staticClass:"record-text-left"},[t._v("抽奖时间：")]),t._v(" "),e("span",{staticClass:"record-text-right"},[t._v(t._s(s.addtime))])]),t._v(" "),e("div",{staticClass:"record-inner"},[e("span",{staticClass:"record-text-left"},[t._v("中奖情况：")]),t._v(" "),s.type?e("span",{staticClass:"record-text-right"},[t._v(t._s(s.type.text?s.type.text:"无"))]):e("span",{staticClass:"record-text-right"},[t._v("未中奖")])]),t._v(" "),e("div",{staticClass:"record-inner"},[e("span",{staticClass:"record-text-left"},[t._v("奖品类型：")]),t._v(" "),s.award_type?e("span",{staticClass:"record-text-right"},[t._v(t._s(s.award_type.text?s.award_type.text:"无"))]):e("span",{staticClass:"record-text-right"},[t._v("无")])]),t._v(" "),e("div",{staticClass:"record-inner"},[e("span",{staticClass:"record-text-left"},[t._v("奖品详情：")]),t._v(" "),s.award_type?e("span",{staticClass:"record-text-right"},["redpacket"!=s.award_type.name?[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.award_value)+t._s("credit1"==s.award_type.name?"积分":"元")+"\n\t\t\t\t\t\t\t")]:t._l(s.award_value,function(s){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s)+"\n\t\t\t\t\t\t\t")]})],2):e("span",{staticClass:"record-text-right"},[t._v("\n\t\t\t\t\t\t\t未中奖\n\t\t\t\t\t\t")])])]),t._v(" "),0==s.status?e("div",{staticClass:"record-footer"},[e("div",{staticClass:"record-status",on:{click:function(e){return t.onGetPrize(s.id)}}},[t._v("已领取")])]):t._e()])}),t._v(" "),t.records.loaded&&!t.records.empty?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e()],1)},staticRenderFns:[]};var c=e("VU/8")(i,d,!1,function(t){e("fT7+")},null,null);s.default=c.exports},"fT7+":function(t,s){}});