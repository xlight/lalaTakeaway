webpackJsonp([19],{"2mwu":function(t,i){},GpTY:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("woOf"),e=a.n(s),n=a("Cz8s"),l=a("deIj"),r={components:{PublicHeader:n.a},data:function(){return{goodsNum:1,activityid:0,activity:{},takeinfo:{},buyremark:"",username:"",mobile:"",showPreLoading:!0,islegal:!1}},methods:{onLoad:function(){var t=this;Object(l.a)({vue:t,url:"kanjia/order/create",data:{activityid:t.activityid},success:function(i){t.activity=e()(t.activity,i.activity),t.takeinfo=e()(t.takeinfo,i.takeinfo),t.islegal=!0,t.username=i.member.username,t.mobile=i.member.mobile}})},onSubmit:function(){var t=this;t.username?t.mobile?t.util.isValidMobile(t.mobile)?Object(l.c)({vue:t,url:"kanjia/order/create",data:{activityid:t.activityid,buyremark:t.buyremark,username:t.username,mobile:t.mobile},message:"下单成功",success:function(i){var a=i;t.util.$toast("下单成功",t.util.getUrl({path:"/pages/public/pay",query:{order_id:a,order_type:"gohome"}}),1500,"replace")}}):t.util.$toast("手机号格式错误"):t.util.$toast("请输入预留手机号"):t.util.$toast("请输入核销人姓名")}},mounted:function(){this.$route.query&&this.$route.query.activityid&&(this.activityid=this.$route.query.activityid),this.onLoad()}},o={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"kanjia-order-create"}},[a("public-header",{attrs:{title:"确认订单"}}),t._v(" "),a("div",{staticClass:"content "},[a("div",{staticClass:"content-scroll"},[a("div",{staticClass:"delivery-info margin-10-b bg-default radius-3"},[t._e(),t._v(" "),a("div",[a("div",{staticClass:"padding-15-lr padding-15-t font-18 font-bold"},[t._v("到店核销")]),t._v(" "),a("div",{staticClass:"padding-15-tb margin-15-lr van-hairline--bottom text-center"},[a("p",{staticClass:"font-14 c-gray"},[t._v("商家地址")]),t._v(" "),t.activity.store?a("p",{staticClass:"margin-10-tb"},[t._v(t._s(t.activity.store.address))]):t._e(),t._v(" "),t.activity.store?a("span",{staticClass:"font-14 c-danger",on:{click:function(i){t.util.jsLocation({lat:t.activity.store.location_x,lng:t.activity.store.location_y})}}},[t._v("查看地图")]):t._e()]),t._v(" "),a("ul",{staticClass:"username-mobile flex-lr font-13 padding-15-tb margin-15-lr"},[a("li",{staticClass:"van-hairline--right"},[a("div",{staticClass:"margin-10-b"},[t._v("姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.username},on:{input:function(i){i.target.composing||(t.username=i.target.value)}}})]),t._v(" "),a("li",{staticClass:"padding-10-l"},[a("div",{staticClass:"margin-10-b"},[t._v("手机号")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"w-100",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{input:function(i){i.target.composing||(t.mobile=i.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"order-info"},[a("div",{staticClass:"flex"},[a("i",{staticClass:"icon icon-store font-18"}),t._v(" "),t.activity.store?a("span",{staticClass:"font-14 margin-10-l font-500"},[t._v(t._s(t.activity.store.title))]):t._e()]),t._v(" "),a("div",{staticClass:"padding-15-tb goods flex-lr van-hairline--bottom"},[a("div",{staticClass:"thumb"},[a("img",{staticClass:"img-100",attrs:{src:t.activity.thumb,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("p",[t._v(t._s(t.activity.name))]),t._v(" "),a("div",{staticClass:"flex"},[a("div",{staticClass:"c-danger font-16 font-bold"},[t._v("¥"+t._s(t.takeinfo.price))]),t._v(" "),a("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v("¥"+t._s(t.activity.oldprice))])])])]),t._v(" "),a("div",{staticClass:"van-hairline--bottom padding-15-b font-13"},[t._m(2),t._v(" "),a("div",{staticClass:"margin-15-t flex-lr"},[a("span",[t._v("总价")]),t._v(" "),a("span",{staticClass:"c-danger"},[t._v("¥"+t._s(t.takeinfo.price))])])]),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),a("div",{staticClass:"padding-15-t total-price"},[a("div",[t._v("\n\t\t\t\t\t\t好友累计帮砍 "),a("span",{staticClass:"c-danger"},[t._v("¥"+t._s(t.takeinfo.has_bargain))])]),t._v(" "),a("div",{staticClass:"margin-15-l"},[a("span",[t._v("小计")]),t._v(" "),a("span",{staticClass:"c-danger font-16 font-500"},[t._v("¥"+t._s(t.takeinfo.price))])])])]),t._v(" "),a("van-field",{staticClass:"margin-10-t",attrs:{label:"备注",type:"textarea",placeholder:"口味, 偏好等要求",rows:"3"},model:{value:t.buyremark,callback:function(i){t.buyremark=i},expression:"buyremark"}})],1)]),t._v(" "),a("van-submit-bar",{attrs:{price:100*t.takeinfo.price,label:"待支付","button-text":"提交订单",disabled:!t.islegal},on:{submit:t.onSubmit}},[a("div",{staticClass:"order-benefit",attrs:{slot:"default"},slot:"default"},[t._v("\n\t\t\t好友累计帮砍 ¥"+t._s(t.takeinfo.has_bargain)+"\n\t\t")])]),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex"},[i("i",{staticClass:"icon icon-locationfill font-20"}),this._v(" "),i("ul",{staticClass:" padding-10-l"},[i("li",{staticClass:"font-14"},[this._v("山西省太原市小店区坞城街道南中环北张小区B2-401")]),this._v(" "),i("li",{staticClass:"c-gray font-12 margin-5-t"},[this._v("李四（先生） 121345678910")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex"},[i("i",{staticClass:"icon icon-timefill font-18"}),this._v(" "),i("span",{staticClass:"padding-10-l font-14"},[this._v("立即送出")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"margin-15-t flex-lr"},[i("span",[this._v("数量")]),this._v(" "),i("span",[this._v("1")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"margin-15-t flex-lr"},[i("span",[this._v("总价")]),this._v(" "),i("span",{staticClass:"c-danger"},[this._v("¥50.00")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"margin-15-t flex-lr"},[i("span",[this._v("包装费")]),this._v(" "),i("span",[this._v("¥2")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"margin-15-t flex-lr"},[i("span",[this._v("配送费")]),this._v(" "),i("span",[this._v("¥2")])])}]};var c=a("VU/8")(r,o,!1,function(t){a("2mwu")},null,null);i.default=c.exports}});
//# sourceMappingURL=19.0a56f51dbe500f50a1c8.js.map