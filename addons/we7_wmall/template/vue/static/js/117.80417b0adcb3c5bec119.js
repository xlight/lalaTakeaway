webpackJsonp([117],{PyY5:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("Gu7T"),e=a.n(n),s={components:{PublicHeader:a("Cz8s").a},data:function(){return{type:"invite",total:0,redPacket_num:0,redPacket:{},invited_info:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},rank:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},share:{},zhezhaoShow:!1}},methods:{onChangeStatus:function(t){this.type=t,"ranking"==t?this.onGetRank():"invite"==t&&this.onLoad()},onLoad:function(){var t=this;return!this.invited_info.finished&&(!this.invited_info.loading&&(this.invited_info.loading=!0,void this.util.request({url:"shareRedpacket/index/invite",data:{page:this.invited_info.page,psize:this.invited_info.psize}}).then(function(i){var a=i.data.message;if(a.errno)return t.$toast(a.message),!1;a=a.message,t.total=a.total,t.redPacket_num=a.redPacket_num||0,t.redPacket=a.redPacket,t.share=a.share,t.invited_info.data=[].concat(e()(t.invited_info.data),e()(a.invited_info)),a.invited_info.length<t.invited_info.psize&&(t.invited_info.finished=!0),0==t.invited_info.data.length&&(t.invited_info.empty=!0),t.invited_info.loading=!1,t.invited_info.page++})))},onGetRank:function(){var t=this;return!this.rank.finished&&(!this.rank.loading&&(this.rank.loading=!0,void this.util.request({url:"shareRedpacket/index/ranking",data:{page:this.rank.page,psize:this.rank.psize}}).then(function(i){var a=i.data.message;if(a.errno)return t.$toast(a.message),!1;a=a.message,t.rank.data=[].concat(e()(t.rank.data),e()(a.rankings)),a.rankings.length<t.rank.psize&&(t.rank.finished=!0),0==t.rank.data.length&&(t.rank.empty=!0),t.rank.loading=!1,t.rank.page++})))},onChangeZhezhao:function(){this.zhezhaoShow=!this.zhezhaoShow}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"shareRedpacket-index"}},[a("public-header",{attrs:{title:t.redPacket.title}}),t._v(" "),a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"init-info"},[a("img",{attrs:{src:"static/img/init_bg.png",alt:""}}),t._v(" "),a("div",{staticClass:"init-con"},[a("div",{staticClass:"init-text"},[t._v("\n\t\t\t\t\t送好友最高"),a("span",[t._v(t._s(t.redPacket.follow_redpacket_max))]),t._v("红包，TA首次下单您也得\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"init-money"},[a("i",[t._v("￥")]),t._v("\n\t\t\t\t\t"+t._s(t.redPacket.share_redpacket_max)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"init-btn"},[a("div",{on:{click:function(i){t.onChangeZhezhao()}}},[t._v("发红包")])])])]),t._v(" "),a("div",{staticClass:"init-status"},[a("div",{staticClass:"buttons-tab"},[a("div",{staticClass:"button",class:{active:"invite"==t.type},on:{click:function(i){t.onChangeStatus("invite")}}},[a("span",[t._v("邀请奖励")])]),t._v(" "),a("div",{staticClass:"button",class:{active:"ranking"==t.type},on:{click:function(i){t.onChangeStatus("ranking")}}},[a("span",[t._v("排行榜")])]),t._v(" "),a("div",{staticClass:"button",class:{active:"agreement"==t.type},on:{click:function(i){t.onChangeStatus("agreement")}}},[a("span",[t._v("活动规则")])])]),t._v(" "),"invite"==t.type?[a("div",{staticClass:"init-title"},[a("div",{staticClass:"init-tab van-hairline--right"},[a("p",{staticClass:"init-tab-h"},[a("van-icon",{attrs:{name:"selection"}}),t._v("\n\t\t\t\t\t\t\t成功邀请\n\t\t\t\t\t\t")],1),t._v(" "),a("p",{staticClass:"init-tab-c"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.total)+"\n\t\t\t\t\t\t\t"),a("span",[t._v("人")])])]),t._v(" "),a("div",{staticClass:"init-tab"},[a("p",{staticClass:"init-tab-h"},[a("van-icon",{attrs:{name:"sponsorfill"}}),t._v("\n\t\t\t\t\t\t\t赚取红包\n\t\t\t\t\t\t")],1),t._v(" "),a("p",{staticClass:"init-tab-c"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.redPacket_num)+"\n\t\t\t\t\t\t\t"),a("span",[t._v("元")])])])]),t._v(" "),a("div",{staticClass:"init-friend"},[t._v("\n\t\t\t\t\t共有\t"),a("span",[t._v(t._s(t.total))]),t._v("人接受了我的邀请\n\t\t\t\t")])]:t._e(),t._v(" "),"invite"==t.type?a("div",{staticClass:"list-block"},[t.invited_info.data.length>0?a("van-list",{attrs:{finished:t.invited_info.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.invited_info.loading,callback:function(i){t.$set(t.invited_info,"loading",i)},expression:"invited_info.loading"}},[a("ul",{staticClass:"invite-list"},t._l(t.invited_info.data,function(i){return a("li",{key:i.id,staticClass:"van-hairline--bottom"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[i.avatar?a("img",{attrs:{src:i.avatar,alt:""}}):a("img",{attrs:{src:"static/img/head.png",alt:""}})]),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title-row"},[a("div",{staticClass:"item-title"},[t._v(t._s(i.nickname))])]),t._v(" "),a("div",{staticClass:"item-subtitle"},[t._v("领取了您的红包")]),t._v(" "),1==i.status?a("div",{staticClass:"init-wait"},[a("p",[t._v("已经下单了")]),t._v(" "),a("span",[t._v("您获得")]),t._v(t._s(i.share_redpacket_discount)),a("span",[t._v("元红包")])]):a("div",{staticClass:"init-wait"},[t._v("等待下单")])])])])}))]):t._e()],1):t._e(),t._v(" "),"ranking"==t.type?a("div",{staticClass:"list-block"},[t.rank.data.length>0?a("van-list",{attrs:{finished:t.rank.finished,offset:100,"immediate-check":!1},on:{load:t.onGetRank},model:{value:t.rank.loading,callback:function(i){t.$set(t.rank,"loading",i)},expression:"rank.loading"}},[a("ul",{staticClass:"invite-list"},t._l(t.rank.data,function(i){return a("li",{key:i.id,staticClass:"van-hairline--bottom"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[i.avatar?a("img",{attrs:{src:i.avatar,alt:""}}):a("img",{attrs:{src:"static/img/head.png",alt:""}})]),t._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title-row"},[a("div",{staticClass:"item-title"},[t._v(t._s(i.nickname))]),t._v(" "),a("div",{staticClass:"item-after"},[t._v("邀请"+t._s(i.total)+"人")])])])])])}))]):t._e()],1):t._e(),t._v(" "),"agreement"==t.type?a("div",{staticClass:"agreement",domProps:{innerHTML:t._s(t.redPacket.agreement)}}):t._e()],2)]),t._v(" "),t.zhezhaoShow?a("div",{staticClass:"share-zhezhao",on:{click:function(i){t.onChangeZhezhao()}}},[a("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"init-area"},[i("img",{attrs:{src:"static/img/init_pic.png",alt:""}})])}]};var d=a("VU/8")(s,o,!1,function(t){a("gKDt")},null,null);i.default=d.exports},gKDt:function(t,i){}});
//# sourceMappingURL=117.80417b0adcb3c5bec119.js.map