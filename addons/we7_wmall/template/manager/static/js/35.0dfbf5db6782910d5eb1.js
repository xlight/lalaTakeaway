webpackJsonp([35],{OB9n:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Cz8s"),i=r("deIj"),s={components:{publicHeader:a.a},data:function(){return{showPreLoading:!0,resultData:{},itemSelectedKey:0,remark:"",pageInfo:{cancel:{page_title:"取消订单理由",requestUrl:"manage/order/takeout/cancel"},direct_deliveryer:{page_title:"指定配送员",requestUrl:"manage/order/takeout/deliveryer"},reply:{page_title:"催单回复",requestUrl:"manage/order/takeout/reply"}}}},methods:{onLoad:function(){var e=this;Object(i.a)({vue:e,url:"manage/order/takeout/op",data:{type:e.type},success:function(t){e.resultData=t.data}})},onSelectItem:function(e){this.itemSelectedKey=e,"reply"==this.type&&(this.remark=this.remark+this.resultData[e])},onSubmit:function(){var e={url:this.pageInfo[this.type].requestUrl,confirm:this.tip,successUrl:this.util.getUrl({path:"pages/order/index",query:{status:this.order_status}})};if("cancel"==this.type){e.data={id:this.order_id,reason:this.itemSelectedKey,remark:this.remark};var t=this;return Object(i.c)({vue:t,url:e.url,data:e.data,confirm:e.confirm,success:function(r){t.util.$toast(r,e.successUrl,1e3,"replace")}}),!1}"direct_deliveryer"==this.type?e.data={id:this.order_id,deliveryer_id:this.itemSelectedKey}:"reply"==this.type&&(e.data={id:this.order_id,reply:this.remark}),this.util.jspost(e)}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&(this.order_id=this.query.order_id,this.tip=this.query.tip,this.order_status=this.query.order_status,this.type=this.query.type,"cancel_refund"==this.type&&(this.type=cancel))}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"order-op"}},[r("public-header",{attrs:{title:e.pageInfo[e.type].page_title}}),e._v(" "),r("div",{staticClass:"content"},["direct_deliveryer"==e.type?[r("div",{staticClass:"padding-15-lr padding-10-tb font-14 c-gray"},[e._v("选择配送员")]),e._v(" "),r("van-radio-group",{model:{value:e.itemSelectedKey,callback:function(t){e.itemSelectedKey=t},expression:"itemSelectedKey"}},[r("van-cell-group",e._l(e.resultData,function(t,a){return r("van-cell",{key:a,staticClass:"no-fix",attrs:{title:t.title,clickable:""},on:{click:function(t){e.onSelectItem(a)}}},[r("van-radio",{attrs:{name:a}})],1)}))],1)]:[r("div",{staticClass:"padding-15-lr padding-10-tb font-14 c-gray"},[e._v("取消订单理由")]),e._v(" "),r("van-radio-group",{model:{value:e.itemSelectedKey,callback:function(t){e.itemSelectedKey=t},expression:"itemSelectedKey"}},[r("van-cell-group",[e._l(e.resultData,function(t,a){return r("van-cell",{key:a,staticClass:"no-fix",attrs:{title:t,clickable:""},on:{click:function(t){e.onSelectItem(a)}}},[r("van-radio",{attrs:{name:a}})],1)}),e._v(" "),r("van-field",{attrs:{placeholder:"cancel"==e.type?"填写备注（选填）":"输入回复",readonly:""}}),e._v(" "),r("van-field",{attrs:{type:"textarea",placeholder:"cancel"==e.type?"取消订单备注":"输入回复",rows:"5"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],2)],1)],e._v(" "),r("div",{staticClass:"padding-15"},[r("van-button",{staticClass:"bg-info font-16",attrs:{size:"normal",block:""},on:{click:e.onSubmit}},[e._v("提交")])],1)],2),e._v(" "),e.showPreLoading?r("iloading"):e._e()],1)},staticRenderFns:[]};var l=r("VU/8")(s,n,!1,function(e){r("QSWX")},null,null);t.default=l.exports},QSWX:function(e,t){}});
//# sourceMappingURL=35.0dfbf5db6782910d5eb1.js.map