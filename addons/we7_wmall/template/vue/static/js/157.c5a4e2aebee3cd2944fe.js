webpackJsonp([157],{"2AM7":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Cz8s"),i=a("q0vl"),n={components:{PublicHeader:s.a,agreement:i.a},data:function(){return{preLoading:!0,sid:0,mealRedpacket:{},select:0,price:0,old_price:0,islegal:!1,showAgreement:!1,agreementContent:""}},methods:{onLoad:function(){var e=this;this.util.request({url:"mealRedpacket/plus"}).then(function(t){e.preLoading=!1;var a=t.data.message;if(a.errno)e.util.$toast(a.message);else{if(0==a.message)return e.util.$toast("暂无套餐红包Plus活动"),!1;e.mealRedpacket=a.message.data,e.sid=a.message.id,e.agreementContent=a.message.data.rules;var s=a.message.data.redpackets;for(var i in s){e.select=i;break}e.price=s[i].price,e.old_price=s[i].old_price,e.islegal=!0}})},selectmealRedpacketet:function(e,t,a){this.select=e,this.price=t,this.old_price=a},onToggleAgreement:function(){this.showAgreement=!this.showAgreement},onSubmit:function(){var e=this;if(!this.islegal)return!1;if(this.islegal=!1,!this.select)return this.util.$toast("请选择套餐"),!1;var t={sid:this.sid,meal_id:this.select,final_fee:this.mealRedpacket.redpackets[this.select].price};this.util.request({url:"mealRedpacket/plus/submit",data:t}).then(function(t){var a=t.data.message;if(a.errno)e.util.$toast(a.message);else{var s=a.message;e.$router.replace(e.util.getUrl({path:"/pages/public/pay?order_id="+s+"&order_type=mealRedpacket_plus"}))}})}},mounted:function(){this.onLoad()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"mealmealRedpacketet-index"}},[a("public-header",{attrs:{title:"套餐红包Plus"}}),e._v(" "),e.sid>0?a("div",{staticClass:"content"},[a("div",{staticClass:"meal-container"},[a("div",{staticClass:"top"},[a("div",{staticClass:"name"},[e._v("选择套餐红包")]),e._v(" "),a("div",{staticClass:"tip"},[e._v("\n\t\t\t\t\t提示信息\n\t\t\t\t\t"),a("span",[e._v(e._s(e.mealRedpacket.placeholder))])])]),e._v(" "),e._l(e.mealRedpacket.redpackets,function(t,s,i){return a("div",{key:s,staticClass:"meal-item"},[a("div",{staticClass:"item-container",class:{active:s==e.select},on:{click:function(a){e.selectmealRedpacketet(s,t.price,t.old_price)}}},[a("div",{staticClass:"left"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"right"},[a("span",{staticClass:"old-price"},[e._v("¥"),a("span",[e._v(e._s(t.old_price))])]),e._v(" "),a("span",{staticClass:"price"},[e._v("¥"),a("span",[e._v(e._s(t.price))])])])])])})],2),e._v(" "),e._l(e.mealRedpacket.redpackets,function(t,s,i){return s==e.select?a("div",{staticClass:"mealRedpacketet-wrap"},[a("div",{staticClass:"mealRedpacketet-wrap-title "},[e._v(e._s(t.name)+"红包套餐内容")]),e._v(" "),e._l(t.data,function(t,s){return a("div",{staticClass:"mealRedpacketet-item"},[a("div",{staticClass:"mealRedpacketet-item-body"},[a("div",{staticClass:"item-body-price"},[e._v("\n\t\t\t\t\t\t￥\n\t\t\t\t\t\t"),a("span",{staticClass:"body-price-number"},[a("strong",[e._v(e._s(t.discount))])])]),e._v(" "),a("div",{staticClass:"item-body-name"},[a("div",{staticClass:"name-general"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"name-reduction"},[e._v("满"+e._s(t.condition)+"元可用")])])])])})],2):e._e()}),e._v(" "),a("router-link",{staticClass:"buy-record van-hairline--top van-hairline--bottom",attrs:{to:e.util.getUrl({path:"/package/pages/mealRedpacket/orderplus"})}},[e._v("\n\t\t\t购买记录\n\t\t\t"),a("van-icon",{attrs:{name:"right"}})],1),e._v(" "),a("div",{staticClass:"meal-explain",on:{click:function(t){e.onToggleAgreement()}}},[e._v("\n\t\t\t套餐规则\n\t\t\t"),a("van-icon",{attrs:{name:"question"}})],1),e._v(" "),a("div",{staticClass:"submit-container"},[a("div",{staticClass:"final-price"},[a("div",{staticClass:"text"},[e._v("总价")]),e._v(" "),a("div",{staticClass:"price"},[e._v("￥"),a("span",[e._v(e._s(e.price))])]),e._v(" "),a("div",{staticClass:"old-price"},[e._v("￥"),a("span",[e._v(e._s(e.old_price))])])]),e._v(" "),a("div",{staticClass:"submit-button ",class:{disabled:!e.islegal},on:{click:function(t){e.onSubmit()}}},[e._v("立即购买")])])],2):e._e(),e._v(" "),a("iloading",{directives:[{name:"show",rawName:"v-show",value:e.preLoading,expression:"preLoading"}]}),e._v(" "),a("agreement",{attrs:{title:"套餐规则",show:e.showAgreement,content:e.agreementContent},on:{agreementHide:function(t){e.onToggleAgreement()}}})],1)},staticRenderFns:[]};var c=a("VU/8")(n,l,!1,function(e){a("Wsmh")},null,null);t.default=c.exports},Wsmh:function(e,t){}});
//# sourceMappingURL=157.c5a4e2aebee3cd2944fe.js.map