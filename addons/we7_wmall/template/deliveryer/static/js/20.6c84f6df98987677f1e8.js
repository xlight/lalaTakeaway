webpackJsonp([20],{ESVh:function(e,t){},OB9n:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Cz8s"),r=i("deIj"),s={components:{publicHeader:a.a},data:function(){return{showPreLoading:!0,resultData:{},itemSelectedKey:0,reason:"",pageInfo:{delivery_cancel:{page_title:"取消订单理由"},direct_transfer:{page_title:"定向转单"},delivery_transfer:{page_title:"转单"}}}},methods:{onLoad:function(){var e=this;Object(r.a)({vue:e,url:"delivery/order/takeout/op",data:{id:e.order_id,type:e.type},success:function(t){e.resultData=t}})},onSelectItem:function(e){this.itemSelectedKey=e},onSubmit:function(){if("direct_transfer"==this.type){var e=this.resultData[this.itemSelectedKey].id;if(!e)return this.util.$toast("请选择要转单到的配送员","",1e3),!1}else if(-1!=this.itemSelectedKey&&(this.reason=this.resultData[this.itemSelectedKey]),!this.reason)return this.util.$toast("请先输入原因","",1e3),!1;var t={url:"delivery/order/takeout/status",confirm:"",data:{id:this.order_id,type:this.type,deliveryer_id:e,reason:this.reason},successUrl:this.util.getUrl({path:"pages/order/takeout",query:{status:this.order_status}})};this.util.jspost(t)}},mounted:function(){this.onLoad()},created:function(){this.query=this.$route.query,this.query&&(this.order_id=this.query.order_id,this.order_status=this.query.order_status,this.type=this.query.type)}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"order-op"}},[i("public-header",{attrs:{title:e.pageInfo[e.type].page_title}}),e._v(" "),i("div",{staticClass:"content"},["direct_transfer"==e.type?[i("div",{staticClass:"padding-15-lr padding-10-tb font-14 c-gray"},[e._v("选择配送员")]),e._v(" "),i("van-radio-group",{model:{value:e.itemSelectedKey,callback:function(t){e.itemSelectedKey=t},expression:"itemSelectedKey"}},[i("van-cell-group",e._l(e.resultData,function(t,a){return i("van-cell",{key:a,staticClass:"no-fix",attrs:{title:t.title,clickable:""},on:{click:function(t){e.onSelectItem(a)}}},[i("van-radio",{attrs:{name:a}})],1)}))],1)]:[i("div",{staticClass:"padding-15-lr padding-10-tb font-14 c-gray"},[e._v(e._s("delivery_cancel"==e.type?"取消订单原因":"转单原因"))]),e._v(" "),i("van-radio-group",{model:{value:e.itemSelectedKey,callback:function(t){e.itemSelectedKey=t},expression:"itemSelectedKey"}},[i("van-cell-group",[e._l(e.resultData,function(t,a){return i("van-cell",{key:a,staticClass:"no-fix",attrs:{title:t,clickable:""},on:{click:function(t){e.onSelectItem(a)}}},[i("van-radio",{attrs:{name:a}})],1)}),e._v(" "),i("van-cell",{staticClass:"no-fix",attrs:{title:"其他",clickable:""},on:{click:function(t){e.onSelectItem(-1)}}},[i("van-radio",{attrs:{name:"-1"}})],1),e._v(" "),-1==e.itemSelectedKey?i("van-field",{attrs:{type:"textarea",placeholder:"请输入原因",rows:"5"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}):e._e()],2)],1)],e._v(" "),i("div",{staticClass:"padding-15"},[i("van-button",{staticClass:"bg-primary font-16",attrs:{size:"normal",block:""},on:{click:e.onSubmit}},[e._v("提交")])],1)],2),e._v(" "),e.showPreLoading?i("iloading"):e._e()],1)},staticRenderFns:[]};var l=i("VU/8")(s,n,!1,function(e){i("ESVh")},null,null);t.default=l.exports}});