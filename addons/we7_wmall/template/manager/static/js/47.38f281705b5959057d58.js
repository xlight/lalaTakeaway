webpackJsonp([47],{MMmA:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("mvHQ"),s=o.n(a),n=o("Gu7T"),i=o.n(n),l=o("woOf"),r=o.n(l),c=o("Cz8s"),u=o("+CBI"),v=o("deIj"),d={data:function(){return{payments:[],store:{auto_handel_order:0,auto_notice_deliveryer:0,invoice_status:0,token_status:0,payment:[]},showPreLoading:!0,islegal:!1}},components:{publicHeader:c.a,iswitch:u.a},methods:{onTogglePayment:function(t){this.$refs.checkboxes[t].toggle()},onLoad:function(){var t=this,e=this;Object(v.a)({url:"manage/shop/index/pill",vue:e,data:{},success:function(o){e.islegal=!0,e.store=r()(e.store,o.store),t.payments=[].concat(i()(o.payments))}})},onSubmit:function(){var t=this;if(!t.islegal)return!1;t.islegal=!1,Object(v.c)({url:"manage/shop/index/pill",vue:t,data:{store:s()(t.store)},redirect:t.util.getUrl({path:"pages/shop/index"}),fail:function(e){t.util.$toast(e),t.islegal=!0}})},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.key||t.keys,value:t.value})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"store-pill"}},[o("public-header",{attrs:{title:"支付方式"}}),t._v(" "),o("div",{staticClass:"content"},[o("van-radio-group",{model:{value:t.store.auto_handel_order,callback:function(e){t.$set(t.store,"auto_handel_order",e)},expression:"store.auto_handel_order"}},[o("van-cell-group",[o("van-cell",{attrs:{title:"自动接单方式"}}),t._v(" "),o("van-cell",{staticClass:"border-0px",attrs:{title:"支付后自动接单",clickable:""},on:{click:function(e){t.store.auto_handel_order="1"}}},[o("van-radio",{attrs:{name:"1"}})],1),t._v(" "),o("van-cell",{staticClass:"border-0px",attrs:{title:"不自动接单",clickable:""},on:{click:function(e){t.store.auto_handel_order="0"}}},[o("van-radio",{attrs:{name:"0"}})],1),t._v(" "),o("van-cell",{staticClass:"no-fix border-0px",attrs:{title:"打印机出单后自动接单(仅飞鹅和喜讯打印机支持)",clickable:""},on:{click:function(e){t.store.auto_handel_order="2"}}},[o("van-radio",{attrs:{name:"2"}})],1)],1)],1),t._v(" "),o("van-cell-group",{staticClass:"margin-10-t"},[o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("接单后自动通知配送员")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.store.auto_notice_deliveryer,"text-open":"ON","text-close":"OFF",keys:"store.auto_notice_deliveryer"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("支持开发票")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.store.invoice_status,"text-open":"ON","text-close":"OFF",keys:"store.invoice_status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),o("van-cell",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v("支持代金券抵付")]),t._v(" "),o("iswitch",{attrs:{slot:"right-icon",value:t.store.token_status,"text-open":"ON","text-close":"OFF",keys:"store.token_status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),o("van-checkbox-group",{staticClass:"margin-10-t",model:{value:t.store.payment,callback:function(e){t.$set(t.store,"payment",e)},expression:"store.payment"}},[o("van-cell-group",[o("van-cell",{attrs:{title:"支付方式"}}),t._v(" "),t._l(t.payments,function(e,a){return"peerpay"!=e.value?o("van-cell",{key:a,staticClass:"border-0px",attrs:{clickable:"",title:e.title},on:{click:function(e){t.onTogglePayment(a)}}},[o("van-checkbox",{ref:"checkboxes",refInFor:!0,attrs:{name:e.value}})],1):t._e()})],2)],1),t._v(" "),o("div",{staticClass:"padding-15"},[o("van-button",{staticClass:"font-16 bg-info",attrs:{size:"normal",disabled:!t.islegal,block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?o("iloading"):t._e()],1)},staticRenderFns:[]};var h=o("VU/8")(d,_,!1,function(t){o("nbAI")},null,null);e.default=h.exports},nbAI:function(t,e){}});
//# sourceMappingURL=47.38f281705b5959057d58.js.map