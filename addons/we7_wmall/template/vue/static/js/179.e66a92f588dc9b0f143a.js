webpackJsonp([179],{hbux:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("jUC1"),a={data:function(){return{}},methods:{onLoad:function(){var t=this,n=this.util.getStorage("forwardUrl");Object(o.a)().then(function(){mag.ready(function(){mag.toLogin(function(e){location.href=t.util.getSiteUrl("wmall/auth/majia",{token:e.token,forward:encodeURIComponent(n)},!0)})})})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},i=e("VU/8")(a,r,!1,null,null,null);n.default=i.exports},jUC1:function(t,n,e){"use strict";n.a=function(){return new a.a(function(t,n){var e=document.createElement("script");e.type="text/javascript",e.src="//static.app1.magcloud.net/public/static/dest/js/libs/magjs-x.js",e.onerror=n,e.onload=t,document.head.appendChild(e)})};var o=e("//Fk"),a=e.n(o)}});
//# sourceMappingURL=179.e66a92f588dc9b0f143a.js.map