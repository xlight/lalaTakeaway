webpackJsonp([36],{Hgoo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Gu7T"),r=o.n(n),s=o("Dd8w"),a=o.n(s),i=o("NYxO"),d={name:"orderNote",components:{PublicHeader:o("Cz8s").a},data:function(){return{note:"",sid:Number,order_note:[]}},methods:a()({},Object(i.b)(["setOrderExtra"]),{onLoad:function(){var t=this;this.$route.query.sid?(this.sid=this.$route.query.sid,this.util.request({url:"wmall/order/create/note",data:{sid:this.sid}}).then(function(e){var o=e.data.message;o.errno?t.$toast(o.message):t.order_note=[].concat(r()(t.order_note),r()(o.message.store.order_note))})):this.$toast("参数错误")},onChooseLabel:function(t){this.note=this.note+" "+t},onSubmit:function(){this.setOrderExtra({key:"note",val:this.note}),this.$router.replace(this.util.getUrl({path:"/pages/order/create?sid="+this.$route.query.sid}))}}),computed:a()({},Object(i.c)(["orderExtra"])),mounted:function(){this.note=this.orderExtra.note||"",this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"order-note"}},[o("public-header",{attrs:{title:"添加备注",bgcolor:"#f5f5f5",textcolor:"#000"}}),t._v(" "),o("div",{staticClass:"content"},[o("van-cell-group",{staticClass:"text"},[o("van-field",{attrs:{type:"textarea",placeholder:"请输入备注，最多50字哦"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),t._v(" "),t.order_note&&t.order_note.length>0?o("div",{staticClass:"label-box"},t._l(t.order_note,function(e){return o("div",{staticClass:"label",on:{click:function(o){t.onChooseLabel(e)}}},[t._v(t._s(e))])})):t._e()],1),t._v(" "),o("div",{staticClass:"save-btn"},[o("van-button",{attrs:{type:"danger",size:"large"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var l=o("VU/8")(d,c,!1,function(t){o("hnuI")},null,null);e.default=l.exports},hnuI:function(t,e){}});
//# sourceMappingURL=36.972b15f2a653545e37c8.js.map