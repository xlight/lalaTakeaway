webpackJsonp([68],{UYPR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Cz8s"),o=i("deIj"),s=i("+CBI"),n={data:function(){return{store:{},manager:{},showPreLoading:!0}},components:{publicHeader:a.a,iswitch:s.a},methods:{onLoad:function(){var t=this;Object(o.a)({vue:t,url:"manage/shop/index/index",success:function(e){t.store=e.store,t.manager=e.manager}})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.keys,value:t.value,url:"manage/shop/index/status",data:{type:t.type,value:t.value}})}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"store-setting-more"}},[i("public-header",{attrs:{title:"更多设置"}}),t._v(" "),i("div",{staticClass:"content"},[i("van-cell-group",{staticClass:"margin-10-b"},[t.store?i("van-cell",[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/auto_takeOrder.png",alt:""}})]),t._v(" "),i("div",[t._v("自动接单")])]),t._v(" "),i("iswitch",{attrs:{slot:"right-icon",value:t.store.auto_handel_order,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"store.auto_handel_order",type:"auto_handel_order"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1):t._e(),t._v(" "),t.store?i("van-cell",[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/auto_deliveryOrder.png",alt:""}})]),t._v(" "),i("div",[t._v("自动通知配送员抢单")])]),t._v(" "),i("iswitch",{attrs:{slot:"right-icon",value:t.store.auto_notice_deliveryer,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"store.auto_notice_deliveryer",type:"auto_notice_deliveryer"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1):t._e(),t._v(" "),t.manager&&t.manager.extra?i("van-cell",[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/wx_templateNews.png",alt:""}})]),t._v(" "),i("div",[t._v("微信模板消息提醒")])]),t._v(" "),i("iswitch",{attrs:{slot:"right-icon",value:t.manager.extra.accept_wechat_notice,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"manager.extra.accept_wechat_notice",type:"accept_wechat_notice"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1):t._e(),t._v(" "),t.manager&&t.manager.extra?i("van-cell",[i("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:"static/img/tel_remind.png",alt:""}})]),t._v(" "),i("div",[t._v("语音电话提醒")])]),t._v(" "),i("iswitch",{attrs:{slot:"right-icon",value:t.manager.extra.accept_voice_notice,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"manager.extra.accept_voice_notice",type:"accept_voice_notice"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1):t._e()],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var l=i("VU/8")(n,c,!1,function(t){i("pgaY")},null,null);e.default=l.exports},pgaY:function(t,e){}});
//# sourceMappingURL=68.c65e655f2c1826add54e.js.map