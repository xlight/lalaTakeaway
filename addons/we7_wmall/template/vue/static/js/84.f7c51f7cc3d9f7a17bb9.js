webpackJsonp([84],{EknP:function(e,t){},bZMc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Gu7T"),s=a.n(n),i={data:function(){return{helps:[],mobile:"",activeName:""}},components:{PublicHeader:a("Cz8s").a},methods:{onLoad:function(){var e=this;this.util.request({url:"wmall/home/help/index"}).then(function(t){var a=t.data.message;if(a.errno)return e.$toast(a.message),!1;e.helps=[].concat(s()(e.helps),s()(a.message.helps)),e.mobile=a.message.mobile})}},mounted:function(){this.onLoad()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"help"}},[a("public-header",{attrs:{title:"帮助中心"}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title border-box"},[e._v("常见问题")]),e._v(" "),e.helps.length>0?a("van-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.helps,function(t,n){return a("van-collapse-item",{key:n,attrs:{title:t.title,name:t.id}},[a("div",{domProps:{innerHTML:e._s(t.content)}})])})):e._e()],1),e._v(" "),a("div",{staticClass:"service flex border-box border-1px-t"},[a("a",{staticClass:"service-container online-service border-box",attrs:{href:"tel:"+e.mobile}},[a("van-icon",{staticClass:"icon",attrs:{name:"service1"}}),e._v(" "),a("div",[e._v("在线客服")])],1),e._v(" "),a("a",{staticClass:"service-container border-1px-l",attrs:{href:"tel:"+e.mobile}},[a("van-icon",{staticClass:"icon",attrs:{name:"phone"}}),e._v(" "),a("div",[e._v("电话客服")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(e){a("EknP")},null,null);t.default=o.exports}});
//# sourceMappingURL=84.f7c51f7cc3d9f7a17bb9.js.map