webpackJsonp([80],{cYvB:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=i("Gu7T"),n=i.n(o),a=i("Cz8s"),e=i("KgXo"),c={data:function(){return{coupons:{loading:!1,finished:!1,status:1,data:[]},showLoading:!0}},components:{PublicHeader:a.a,loading:e.a},watch:{$route:function(t,s){this.showLoading=!0,this.coupons={loading:!1,finished:!1,status:1,data:[]},this.$route.query.status&&(this.coupons.status=this.$route.query.status),this.onLoad()}},methods:{onLoad:function(){var t=this;if(this.coupons.finished)return!1;this.util.request({url:"wmall/member/coupon",data:{min:this.coupons.min,status:this.coupons.status}}).then(function(s){var i=s.data.message;t.coupons.data=[].concat(n()(t.coupons.data),n()(i.message)),t.hideLoading(),i.message.length<6&&(t.coupons.finished=!0),t.coupons.loading=!1,t.coupons.min=i.min,i.min||(t.coupons.finished=!0)})},hideLoading:function(){this.showLoading=!1}},mounted:function(){this.$route.query.status&&(this.coupons.status=this.$route.query.status),this.onLoad()}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"index-copy"}},[i("public-header",{attrs:{title:"我的代金券"}}),t._v(" "),t.showLoading?t._e():i("div",{staticClass:"content"},[i("div",{staticClass:"coupon-list"},[t.coupons.data.length>0?i("van-list",{attrs:{finished:t.coupons.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.coupons.loading,callback:function(s){t.$set(t.coupons,"loading",s)},expression:"coupons.loading"}},[t._l(t.coupons.data,function(s,o){return i("div",{key:s.id,staticClass:"coupon-item",class:{active:2==s.status||3==s.status}},[i("div",{staticClass:"coupon-item-top"},[i("div",{staticClass:"coupon-item-left"},[3==s.status?i("span",{staticClass:"overdue"}):t._e(),t._v(" "),2==s.status?i("span",{staticClass:"use"}):t._e(),t._v(" "),i("div",{staticClass:"seller-img"},[i("img",{attrs:{src:s.logo,alt:""}})]),t._v(" "),i("div",{staticClass:"seller"},[i("p",{staticClass:"seller-name"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"seller-type"},[t._v("同享券")]),t._v(" "),i("div",{staticClass:"coupon-expires"},[t._v("有效期至:"+t._s(s.endtime))])])]),t._v(" "),i("div",{staticClass:"coupon-item-right"},[i("p",{staticClass:"coupon-money"},[i("span",{staticClass:"money-unit"},[t._v("￥")]),t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.discount)+"\n\t\t\t\t\t\t\t")]),t._v(" "),i("p",{staticClass:"coupon-condition"},[t._v("满"+t._s(s.condition)+"可用")])])]),t._v(" "),i("div",{staticClass:"coupon-item-line"},[i("div",{staticClass:"line"})]),t._v(" "),i("div",{staticClass:"coupon-item-bottom"},[i("div",{staticClass:"explain-text"},[t._v("仅限门店"+t._s(s.title)+"使用")]),t._v(" "),i("router-link",{staticClass:"to-use",attrs:{to:t.util.getUrl({path:"/pages/store/goods",query:{sid:s.id}}),teg:"div"}},[t._v("\n\t\t\t\t\t\t\t去使用\n\t\t\t\t\t\t\t"),i("van-icon",{attrs:{name:"right"}})],1)],1)])}),t._v(" "),t.coupons.finished?i("div",{staticClass:"j-coupon-tip"},[t._v("\n\t\t\t\t\t没有更多代金券了  \n\t\t\t\t\t"),"1"==t.coupons.status?[t._v("\n\t\t\t\t\t\t|  "),i("router-link",{attrs:{to:t.util.getUrl({path:"/pages/member/coupon/index?status=2"})}},[t._v("查看过期券 >>")])]:t._e()],2):t._e()],2):i("div",{staticClass:"common-no-con"},[i("img",{attrs:{src:"static/img/coupon_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("您没有代金券")])])],1)]),t._v(" "),i("transition",{attrs:{name:"loading"}},[i("iloading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1)},staticRenderFns:[]};var d=i("VU/8")(c,u,!1,function(t){i("i1q6")},null,null);s.default=d.exports},i1q6:function(t,s){}});
//# sourceMappingURL=80.76824c24fe31224f95e2.js.map