webpackJsonp([121],{E7XD:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("deIj"),e={data:function(){return{showPreLoading:!0,agreementShow:!1,agreement:"",redpackets:[],tasks:[],config:{}}},methods:{onLoad:function(){var t=this;Object(a.a)({vue:t,url:"svip/index/index",data:{},success:function(s){t.redpackets=s.redpackets,t.tasks=s.tasks,t.config=s.config,t.agreement=s.agreement},fail:function(s){-2==s.errno?t.$router.replace(t.util.getUrl({path:"/package/pages/svip/mine"})):t.util.$toast(s.message)}})},onTogglePopup:function(){this.agreementShow=!this.agreementShow}},mounted:function(){this.onLoad()}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"svip-index"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"card"},[t._m(0),t._v(" "),i("h2",{staticClass:"card-title"},[t._v("加入即可领"+t._s(t.config.exchange_max)+"个红包")]),t._v(" "),i("div",{staticClass:"card-description"},[t._v("开通超级会员，享受众多会员特权")])]),t._v(" "),i("div",{staticClass:"card-list"},[t._m(1),t._v(" "),i("div",{staticClass:"list-bonus",on:{click:t.onTogglePopup}},[t._v("\n\t\t\t\t\t特权说明\n\t\t\t\t\t"),i("van-icon",{attrs:{name:"question1"}})],1),t._v(" "),t._m(2)])]),t._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"wrapper-item"},[i("p",{staticClass:"title"},[i("van-icon",{attrs:{name:"redpacket"}}),t._v(" "),i("span",[t._v("每月免费领红包")])],1),t._v(" "),i("div",{staticClass:"description"},[t._v("会员期内每月可免费领取"),i("span",[t._v(t._s(t.config.exchange_max)+"个")]),t._v("红包。")])]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"wrapper-list"},t._l(t.redpackets,function(s){return 0==s.sid?i("div",{key:s.id,staticClass:"wrapper-group"},[i("div",{staticClass:"amount-price"},[i("i",[t._v("￥")]),t._v(" "),i("span",[t._v(t._s(s.discount))])]),t._v(" "),0==s.condition?i("h4",[t._v("无门槛红包")]):s.condition>0?i("h4",[t._v("满"+t._s(s.condition)+"元可用")]):t._e()]):t._e()})),t._v(" "),i("div",{staticClass:"section-list"},t._l(t.redpackets,function(s){return s.sid>0?i("div",{key:s.id,staticClass:"section-group"},[i("div",{staticClass:"wrapper-section-list"},[i("div",{staticClass:"top"},[i("div",{staticClass:"amount"},[i("i",[t._v("￥")]),t._v(" "),i("span",[t._v(t._s(s.discount))])]),t._v(" "),0==s.condition?i("span",{staticClass:"condition"},[t._v("无门槛红包")]):s.condition>0?i("span",{staticClass:"condition"},[t._v("满"+t._s(s.condition)+"元可用")]):t._e()]),t._v(" "),i("div",{staticClass:"footer"},[i("span",[t._v(t._s(s.store.title))])])])]):t._e()}))])]),t._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"wrapper-item"},[i("p",{staticClass:"title"},[i("van-icon",{attrs:{name:"order"}}),t._v(" "),i("span",[t._v("会员任务奖励")])],1),t._v(" "),t._l(t.tasks,function(s){return t.tasks&&t.tasks.length>0?i("div",{staticClass:"mission-info"},[t._v(t._s(s.title)+" 任务奖励"+t._s(s.award_cn))]):t._e()}),t._v(" "),i("div",{staticClass:"mission-info"},[t._v("任务所得奖励金，可兑换各类红包。")])],2),t._v(" "),i("div",{staticClass:"section-list"},t._l(t.redpackets,function(s){return 1==s.can_exchange?i("div",{key:s.id,staticClass:"section-group"},[i("div",{staticClass:"wrapper-section-list"},[i("div",{staticClass:"top"},[i("div",{staticClass:"amount"},[i("i",[t._v("￥")]),t._v(" "),i("span",[t._v(t._s(s.discount))])]),t._v(" "),0==s.condition?i("span",{staticClass:"condition"},[t._v("无门槛红包")]):s.condition>0?i("span",{staticClass:"condition"},[t._v("满"+t._s(s.condition)+"元可用")]):t._e()]),t._v(" "),i("div",{staticClass:"footer"},[i("span",[t._v("需"+t._s(s.exchange_cost)+"个奖励金")])])])]):t._e()}))]),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"go-member"},[i("router-link",{staticClass:"button",attrs:{to:t.util.getUrl({path:"package/pages/svip/purchase"})}},[i("span",[t._v("开通会员")])])],1)]),t._v(" "),i("van-popup",{staticClass:"agreement-popup",attrs:{position:"bottom"},model:{value:t.agreementShow,callback:function(s){t.agreementShow=s},expression:"agreementShow"}},[i("van-nav-bar",{staticClass:"border-0px",style:{background:"#ff2d4b",color:"#fff"},attrs:{title:"会员特权说明"},on:{"click-left":t.onTogglePopup}},[i("van-icon",{staticClass:"font-20",style:{color:"#fff"},attrs:{slot:"left",name:"left"},slot:"left"})],1),t._v(" "),i("div",{staticClass:"popup-content margin-10",domProps:{innerHTML:t._s(t.agreement)}})],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-top"},[s("span",[this._v("专享红包")]),this._v(" "),s("img",{attrs:{src:"static/img/svip-head.png",alt:""}}),this._v(" "),s("span",[this._v("下单奖励")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"list-header"},[s("h2",{staticClass:"title-header"},[this._v("会员特权")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"list-item"},[i("li",[i("img",{attrs:{src:"static/img/svip-list-bg1.png",alt:""}}),t._v(" "),i("span",[t._v("专享红包")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg2.png",alt:""}}),t._v(" "),i("span",[t._v("奖励金")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg3.png",alt:""}}),t._v(" "),i("span",[t._v("专属客服")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg4.png",alt:""}}),t._v(" "),i("span",[t._v("专属折扣")])]),t._v(" "),i("li",[i("img",{attrs:{src:"static/img/svip-list-bg5.png",alt:""}}),t._v(" "),i("span",[t._v("金币特权")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"section"},[s("div",{staticClass:"wrapper-item"},[s("p",{staticClass:"title"},[s("span",{staticClass:"icon icon-discount"}),this._v(" "),s("span",[this._v("专属折扣")])]),this._v(" "),s("div",{staticClass:"description"},[this._v("购物享专属特价，万款特价菜等您选购。")])]),this._v(" "),s("div",{staticClass:"discount-img"},[s("img",{staticClass:"img-100",attrs:{src:"https://fuss10.elemecdn.com/8/16/414d1f47fe97488a7b2ee1a2845bcpng.png?imageMogr/format/webp/thumbnail/!651x189r/gravity/Center/crop/651x189/",alt:""}})])])}]};var c=i("VU/8")(e,n,!1,function(t){i("HhBh")},null,null);s.default=c.exports},HhBh:function(t,s){}});
//# sourceMappingURL=121.bb46f9301ddd5279e821.js.map