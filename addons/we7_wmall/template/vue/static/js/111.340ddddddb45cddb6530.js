webpackJsonp([111],{Le3M:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("Gu7T"),e=i.n(s),n=i("mzkE"),r={components:{PublicHeader:i("Cz8s").a,PublicFooter:n.a},data:function(){return{status:0,participants_part:{loading:!1,min:0,loaded:!1,empty:!1,data:[]},participants_prize:{loading:!1,min:0,loaded:!1,empty:!1,data:[]},rewards:{},activity:{},showPreLoading:!0}},methods:{onLoad:function(){this.onGetParticipants(0),this.onGetParticipants(1)},onGetParticipants:function(t){var a=this;return(0!=t||!this.participants_part.loaded)&&((1!=t||!this.participants_prize.loaded)&&void this.util.request({url:"freeLunch/mealCoupon",data:{status:t,min:t?this.participants_prize.min:this.participants_part.min}}).then(function(i){a.showPreLoading=!1;var s=i.data.message;if(s.errno)return a.util.$toast(s.message),!1;0==t?(a.participants_part.data=[].concat(e()(a.participants_part.data),e()(s.message)),a.participants_part.min=s.min,a.participants_part.data.length||(a.participants_part.empty=!0),s.message.length<15&&(a.participants_part.loaded=!0),a.participants_part.loading=!1,console.log("参与记录"),console.log(a.participants_part)):(a.participants_prize.data=[].concat(e()(a.participants_prize.data),e()(s.message)),a.participants_prize.min=s.min,a.participants_prize.data.length||(a.participants_prize.empty=!0),s.message.length<15&&(a.participants_prize.loaded=!0),a.participants_prize.loading=!1,console.log("中奖记录"),console.log(a.participants_prize)),a.activity=s.activity,a.rewards=s.rewards}))}},mounted:function(){this.onLoad()}},p={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"freeLunch-mealcoupon"}},[i("public-header",{attrs:{title:"我的餐券"}}),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"myticket"},[i("div",{staticClass:"ticket-value"},[i("span",[t._v(t._s(t.rewards?t.rewards:"?"))]),t._v("元")]),t._v(" "),i("span",[t._v("中奖总金额")])]),t._v(" "),i("van-tabs",{attrs:{swipeable:""},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[i("van-tab",{attrs:{title:"我参与的"}},[t.participants_part.empty?i("div",{staticClass:"not-login"},[i("img",{attrs:{src:"static/img/no_order.png",alt:""}}),t._v(" "),i("h3",[t._v("您还没有记录哦")]),t._v(" "),i("p",[t._v("好运常在，买的多机会大")]),t._v(" "),i("div",{staticClass:"login"},[i("router-link",{attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/index"})}},[t._v("去试试手气")])],1)]):i("van-list",{attrs:{finished:t.participants_part.loaded,"immediate-check":!1,offset:100},on:{load:function(a){t.onGetParticipants(0)}},model:{value:t.participants_part.loading,callback:function(a){t.$set(t.participants_part,"loading",a)},expression:"participants_part.loading"}},[i("div",{staticClass:"participant-list van-hairline--top"},t._l(t.participants_part.data,function(a,s){return i("router-link",{key:s,staticClass:"participant-item van-hairline--bottom",attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/detail",query:{record_id:a.record_id}})}},[i("div",{staticClass:"participant-ico"},[i("img",{attrs:{src:"static/img/freeLunch_mealcoupon.png",alt:""}})]),t._v(" "),i("div",{staticClass:"participant-info"},[i("div",{staticClass:"participant-title"},[t._v(t._s(a.title))]),t._v(" "),i("div",{staticClass:"has-participant"},[t._v("第"+t._s(a.serial_sn)+"期 | 我已参与 "),i("span",[t._v(t._s(a.total))]),t._v(" 次")])]),t._v(" "),i("div",{staticClass:"status"},[i("span",[t._v(t._s(a.text))]),t._v(" "),i("van-icon",{attrs:{name:"right"}})],1)])})),t._v(" "),t.participants_part.loaded?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])],1),t._v(" "),i("van-tab",{attrs:{title:"中奖纪录"}},[t.participants_prize.empty?i("div",{staticClass:"not-login"},[i("img",{attrs:{src:"static/img/no_order.png",alt:""}}),t._v(" "),i("h3",[t._v("您还没有记录哦")]),t._v(" "),i("p",[t._v("好运常在，买的多机会大")]),t._v(" "),i("div",{staticClass:"login"},[i("router-link",{attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/index"})}},[t._v("去试试手气")])],1)]):i("van-list",{attrs:{finished:t.participants_prize.loaded,"immediate-check":!1,offset:100},on:{load:function(a){t.onGetParticipants(1)}},model:{value:t.participants_prize.loading,callback:function(a){t.$set(t.participants_prize,"loading",a)},expression:"participants_prize.loading"}},[i("div",{staticClass:"participant-list van-hairline--top"},t._l(t.participants_prize.data,function(a){return i("router-link",{key:a.record_id,staticClass:"participant-item van-hairline--bottom",attrs:{to:t.util.getUrl({path:"/package/pages/freelunch/detail",query:{record_id:a.record_id}})}},[i("div",{staticClass:"participant-ico"},[i("img",{attrs:{src:"static/img/freeLunch_mealcoupon.png",alt:""}})]),t._v(" "),i("div",{staticClass:"participant-info"},[i("div",{staticClass:"participant-title"},[t._v(t._s(a.title))]),t._v(" "),i("div",{staticClass:"has-participant"},[t._v("第"+t._s(a.serial_sn)+"期 | 我已参与 "),i("span",[t._v(t._s(a.total))]),t._v(" 次")])]),t._v(" "),i("div",{staticClass:"status"},[i("span",[t._v(t._s(a.text))]),t._v(" "),i("van-icon",{attrs:{name:"right"}})],1)])})),t._v(" "),t.participants_prize.loaded?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()])],1)],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(r,p,!1,function(t){i("qWKL")},null,null);a.default=c.exports},qWKL:function(t,a){}});