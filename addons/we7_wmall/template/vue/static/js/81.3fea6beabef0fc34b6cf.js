webpackJsonp([81],{C6RI:function(t,e){},w0TK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Gu7T"),s=n.n(o),r=n("Dd8w"),a=n.n(r),i=n("NYxO"),l={name:"orderNote",components:{PublicHeader:n("Cz8s").a},data:function(){return{note:"",sid:Number,order_note:[]}},methods:a()({},Object(i.b)(["setState"]),{onLoad:function(){var t=this;this.$route.query.sid?(this.sid=this.$route.query.sid,this.util.request({url:"wmall/store/reserve/note",data:{sid:this.sid}}).then(function(e){var n=e.data.message;n.errno?t.$toast(n.message):t.order_note=[].concat(s()(t.order_note),s()(n.message.store.order_note))})):this.$toast("参数错误")},onChooseLabel:function(t){this.note=this.note+" "+t},onSubmit:function(){this.setState({type:"reserveExtra",key:"note",val:this.note}),this.$router.push(this.util.getUrl({path:"/tangshi/pages/reserve/create?sid="+this.sid}))}}),computed:a()({},Object(i.c)(["reserveExtra"])),mounted:function(){this.note=this.reserveExtra.note||"",this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"order-note"}},[n("public-header",{attrs:{title:"添加备注",bgcolor:"#f5f5f5",textcolor:"#000"}}),t._v(" "),n("div",{staticClass:"content"},[n("van-cell-group",{staticClass:"text"},[n("van-field",{attrs:{type:"textarea",placeholder:"请输入备注，最多50字哦"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),t._v(" "),t.order_note&&t.order_note.length>0?n("div",{staticClass:"label-box"},t._l(t.order_note,function(e){return n("div",{staticClass:"label",on:{click:function(n){return t.onChooseLabel(e)}}},[t._v(t._s(e))])}),0):t._e()],1),t._v(" "),n("div",{staticClass:"save-btn"},[n("van-button",{attrs:{type:"danger",size:"large"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(l,c,!1,function(t){n("C6RI")},null,null);e.default=u.exports}});