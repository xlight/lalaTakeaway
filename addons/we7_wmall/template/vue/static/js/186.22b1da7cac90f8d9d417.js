webpackJsonp([186],{B3XT:function(i,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{show:!1,iosLink:"",androidLink:""}},methods:{onShowClick:function(){this.util.isWeixin()?this.show=!0:this.util.isIos()?this.iosLink?window.location.href=this.iosLink:this.util.$toast("下载地址不存在"):window.location.href=this.androidLink},onHideClick:function(){this.show=!1}},mounted:function(){var i=this;this.util.request({url:"system/common/download",method:"POST"}).then(function(t){if((t=t.data.message).errno)return i.util.$toast(t.message),!1;t=t.message,i.iosLink=t.link_ios,i.androidLink=t.link_android})}},o={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{attrs:{id:"dowload-delivery"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"dow-btn-warp"},[s("div",{staticClass:"dow-btn"},[s("div",{staticClass:"dow",on:{click:i.onShowClick}},[s("van-icon",{attrs:{name:"down"}}),i._v("下载配送员客户端")],1)])]),i._v(" "),s("div",{staticClass:"abodytips",class:{"is-show":i.show},on:{click:i.onHideClick}},[i._m(0),i._v(" "),s("div",{staticClass:"tips_bottom"},[s("div",{staticClass:"tips_bottom_2",on:{click:i.onHideClick}},[s("img",{attrs:{src:"static/img/zhi.png"}})])])])])])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"tips_center"},[t("img",{attrs:{src:"static/img/androidtips.png"}})])}]};var a=s("VU/8")(n,o,!1,function(i){s("XLb0")},null,null);t.default=a.exports},XLb0:function(i,t){}});