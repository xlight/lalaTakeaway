webpackJsonp([105],{oQKV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Cz8s"),i=s("deIj"),n={components:{publicHeader:a.a},data:function(){return{title:"开通会员",showPreLoading:!0,meals:[],member:{},select:{index:0,meal:{}},agreementShow:!1,agreement:"",submitting:!1}},methods:{onLoad:function(t){var e=this;Object(i.a)({vue:e,url:"svip/index/meal",data:{},success:function(t){e.meals=t.meals,e.member=t.member,1==e.member.svip_status&&(e.title="续费会员"),e.select.meal=e.meals[0],e.agreement=t.agreement}})},onSelectMeal:function(t){this.select.index=t,this.select.meal=this.meals[t]},onTogglePopup:function(){this.agreementShow=!this.agreementShow},onSubmit:function(){var t=this;if(t.submitting)return!1;t.submitting=!0,Object(i.c)({vue:t,url:"svip/index/buy",data:{id:t.select.meal.id},success:function(e){t.$router.push(t.util.getUrl({path:"pages/public/pay",query:{order_id:e.id,order_type:"svip"}}))},fail:function(e){t.submitting=!1,t.util.$toast(e.message,"",1e3)}})}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"svip-purchase"}},[s("public-header",{attrs:{title:t.title}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("div",{staticClass:"user"},[s("img",{staticClass:"avatar",attrs:{src:t.member.avatar,alt:""}}),t._v(" "),s("div",[s("div",{staticClass:"info"},[s("span",[t._v(t._s(t.member.nickname))]),t._v(" "),s("span",[t._v("（"+t._s(t.member.mobile)+"）")])]),t._v(" "),s("div",{staticClass:"svip"},[1==t.member.svip_status?s("span",[t._v(t._s(t.member.svip_endtime_cn)+"到期，购买后有效期将顺延")]):s("span",[t._v("您还不是超级会员")])])])])]),t._v(" "),s("div",{staticClass:"wrapper-item"},[t._m(0),t._v(" "),t.meals.length>0?s("div",{staticClass:"item-list"},t._l(t.meals,function(e,a){return s("div",{key:a,staticClass:"container",class:{active:t.select.index==a}},[s("div",{staticClass:"div-all flex",on:{click:function(e){t.onSelectMeal(a)}}},[s("div",{staticClass:"header-body"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"price"},[s("span",{staticClass:"yuan"},[s("span",[t._v("￥")]),t._v(t._s(e.price)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),s("span",{staticClass:"old-price line-through"},[t._v(t._s(e.oldprice))])])]),t._v(" "),e.description?s("span",{staticClass:"tag"},[t._v(t._s(e.description))]):t._e(),t._v(" "),t._e()])])})):s("div",{staticClass:"description padding-15-b"},[s("span",[t._v("暂时没有可购买会员套餐")])])]),t._v(" "),s("van-cell-group",[s("van-cell",{attrs:{title:"使用兑换码兑换会员",to:"/package/pages/svip/svipExchange"}},[s("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[s("van-icon",{attrs:{name:"arrow"}})],1)])],1),t._v(" "),s("div",{staticClass:"description"},[s("div",{on:{click:t.onTogglePopup}},[t._v("会员特权说明")])]),t._v(" "),t.meals.length>0?s("div",{staticClass:"bottomBar"},[s("div",{staticClass:"allprice"},[s("div",{staticClass:"total"},[t._v("\n\t\t\t\t\t总价\n\t\t\t\t\t"),s("span",{staticClass:"total-prcie"},[t._v("￥"),s("span",{staticClass:"c-danger"},[t._v(t._s(t.select.meal.price))])]),t._v(" "),s("span",{staticClass:"line-through c-gray font-12"},[t._v(t._s(t.select.meal.oldprice))])])]),t._v(" "),1==t.member.svip_status?s("button",{attrs:{disabled:t.submitting},on:{click:t.onSubmit}},[t._v("立即续费")]):s("button",{attrs:{disabled:t.submitting},on:{click:t.onSubmit}},[t._v("立即开通")])]):t._e()],1),t._v(" "),s("van-popup",{staticClass:"agreement-popup",attrs:{position:"bottom"},model:{value:t.agreementShow,callback:function(e){t.agreementShow=e},expression:"agreementShow"}},[s("van-nav-bar",{staticClass:"border-0px",style:{background:"#ff2d4b",color:"#fff"},attrs:{title:"会员特权说明"},on:{"click-left":t.onTogglePopup}},[s("van-icon",{staticClass:"font-20",style:{color:"#fff"},attrs:{slot:"left",name:"left"},slot:"left"})],1),t._v(" "),s("div",{staticClass:"popup-content margin-10",domProps:{innerHTML:t._s(t.agreement)}})],1),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-title"},[e("div",{staticClass:"title"},[this._v("\n\t\t\t\t\t选择优惠套餐\n\t\t\t\t")])])}]};var c=s("VU/8")(n,l,!1,function(t){s("xt2T")},null,null);e.default=c.exports},xt2T:function(t,e){}});