webpackJsonp([30],{"w/KH":function(t,s){},wbpO:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("woOf"),a=e.n(i),n=e("Gu7T"),o=e.n(n),l=e("Cz8s"),c=e("deIj"),r={data:function(){return{comments:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},showPreLoading:!0,isRefresh:!1,filter:{items:{type:"-1"}},replyPopup:!1,reply:"",replyId:0,replyIndex:0}},components:{publicHeader:l.a},methods:{onLoad:function(t){var s=this;if(t&&(this.comments={page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]}),this.comments.finished)return!1;this.util.request({url:"manage/service/comment",data:{page:this.comments.page,psize:this.comments.psize,type:this.filter.items.type}}).then(function(t){s.showPreLoading=!1;var e=t.data.message;if(e.errno)return options.vue.util.$toast(e.message),!1;var i=e.message.comments;s.comments.data=[].concat(o()(s.comments.data),o()(i)),s.comments.data.length||(s.comments.empty=!0),i&&i.length<s.comments.psize&&(s.comments.finished=!0),s.comments.page++,s.comments.loading=!1,s.isRefresh=!1})},onPullDownRefresh:function(){this.onLoad(!0)},onChangeStatus:function(t,s,e){var i=this;i.util.jspost({url:"manage/service/comment/comment_status",data:{id:t.id,status:s},confirm:"确定修改审核状态吗？",success:function(){i.comments.data[e].status=s}})},onToggleStatus:function(t){t=parseInt(t),this.filter.items.type!=t&&(this.filter.items.type=t,this.onLoad(!0))},onToogleReplyPopup:function(t,s){this.replyPopup=!this.replyPopup,t>0&&s>-1&&(this.replyId=t,this.replyIndex=s)},onConfirmReply:function(){var t=this;t.reply?t.replyId>0&&t.replyIndex>-1&&Object(c.c)({vue:t,url:"manage/service/comment/reply",data:{id:t.replyId,reply:t.reply},success:function(s){t.comments.data[t.replyIndex]=a()(t.comments.data[t.replyIndex],s),t.reply="",t.util.$toast("回复成功"),t.onToogleReplyPopup()}}):this.util.$toast("回复内容不能为空")}},mounted:function(){this.onLoad()}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"service-comment"}},[e("public-header",{attrs:{title:"用户评价"}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"wrap-search"},[e("div",{staticClass:"tab-group flex-lr border-1px-b"},[e("div",{staticClass:"tab-item",class:{active:-1==t.filter.items.type},on:{click:function(s){t.onToggleStatus(-1)}}},[t._v("全部评价")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:1==t.filter.items.type},on:{click:function(s){t.onToggleStatus(1)}}},[t._v("好评")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:2==t.filter.items.type},on:{click:function(s){t.onToggleStatus(2)}}},[t._v("中评")]),t._v(" "),e("div",{staticClass:"tab-item",class:{active:3==t.filter.items.type},on:{click:function(s){t.onToggleStatus(3)}}},[t._v("差评")])])]),t._v(" "),e("van-pull-refresh",{on:{refresh:function(s){t.onPullDownRefresh()}},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[t.comments.empty?e("div",{staticClass:"no-data"},[e("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),t._v(" "),e("p",[t._v("没有符合条件的数据!")])]):e("van-list",{staticClass:"comment-list",attrs:{finished:t.comments.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.comments.loading,callback:function(s){t.$set(t.comments,"loading",s)},expression:"comments.loading"}},[t._l(t.comments.data,function(s,i){return e("div",{key:s.id,staticClass:"comment-item"},[e("van-row",[e("van-col",{attrs:{span:"4"}},[e("div",{staticClass:"comment-img"},[e("img",{staticClass:"img-100",attrs:{src:s.avatar,alt:""}})])]),t._v(" "),e("van-col",{attrs:{span:"20"}},[e("div",{staticClass:"comment-right"},[e("div",{staticClass:"comment-title flex-lr"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"comment-number"},[t._v(t._s(s.mobile))]),t._v(" "),e("div",{staticClass:"c-danger font-bold"},[t._v(t._s(s.score)+"星")])]),t._v(" "),e("div",{staticClass:"font-13 c-gray"},[t._v(t._s(s.addtime))])]),t._v(" "),e("div",{staticClass:"padding-10-b flex-lr"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"font-12 c-gray"},[t._v("商品质量")]),t._v(" "),e("van-rate",{attrs:{size:12,count:5,color:"#ffd21e",disabled:"true","disabled-color":"#ffd21e"},model:{value:s.goods_quality,callback:function(e){t.$set(s,"goods_quality",e)},expression:"item.goods_quality"}})],1),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"font-12 c-gray"},[t._v("配送服务")]),t._v(" "),e("van-rate",{attrs:{size:12,count:5,color:"#ffd21e",disabled:"true","disabled-color":"#ffd21e"},model:{value:s.delivery_service,callback:function(e){t.$set(s,"delivery_service",e)},expression:"item.delivery_service"}})],1)]),t._v(" "),e("div",{staticClass:"flex font-14 c-default padding-10-b"},[t._v(t._s(s.note))]),t._v(" "),s.thumbs?e("div",{staticClass:"goods-img"},t._l(s.thumbs,function(i,a){return e("div",{staticClass:"goods-img-detail",on:{click:function(e){t.util.jsPreviewImage(s.thumbs)}}},[e("img",{staticClass:"img-100",attrs:{src:i,alt:""}})])})):t._e(),t._v(" "),s.reply?e("div",{staticClass:"replay margin-10-b"},[t._v("\n\t\t\t\t\t\t\t\t 商家回复("+t._s(t.util.formatDate(s.replytime,"datetime"))+"): "+t._s(s.reply)+"\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),e("div",{staticClass:"comment-check"},[1==s.status?e("img",{staticClass:"img-100",attrs:{src:"static/img/pass-check.png",alt:""}}):2==s.status?e("img",{staticClass:"img-100",attrs:{src:"static/img/no-pass-check.png",alt:""}}):0==s.status?e("img",{staticClass:"img-100",attrs:{src:"static/img/wait-check.png",alt:""}}):t._e()])])])],1),t._v(" "),e("div",{staticClass:"border-1px-t btn-group"},[1==s.self_audit_comment?[2!=s.status?e("div",{staticClass:"btn-item bg-danger",on:{click:function(e){t.onChangeStatus(s,2,i)}}},[t._v("审核未通过")]):t._e(),t._v(" "),1!=s.status?e("div",{staticClass:"btn-item bg-info",on:{click:function(e){t.onChangeStatus(s,1,i)}}},[t._v("审核通过")]):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"btn-item bg-info",on:{click:function(e){t.onToogleReplyPopup(s.id,i)}}},[t._v("回复")]),t._v(" "),e("router-link",{staticClass:"btn-item bg-info",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/order/detail",query:{id:s.oid}})}},[t._v("查看订单")])],2)],1)}),t._v(" "),t.comments.finished?e("div",{staticClass:"loaded"},[e("div",{staticClass:"loaded-tips"},[t._v("没有更多了")])]):t._e()],2)],1)],1),t._v(" "),t.showPreLoading?e("iloading"):t._e(),t._v(" "),e("van-popup",{attrs:{position:"bottom"},model:{value:t.replyPopup,callback:function(s){t.replyPopup=s},expression:"replyPopup"}},[e("div",{staticClass:"popup-title"},[e("span",{staticClass:"c-gray",on:{click:t.onToogleReplyPopup}},[t._v("取消")]),t._v(" "),e("span",[t._v("评论回复")]),t._v(" "),e("span",{staticClass:"c-info",on:{click:t.onConfirmReply}},[t._v("确定")])]),t._v(" "),e("div",{staticClass:"popup-content"},[e("van-field",{attrs:{type:"textarea",placeholder:"限300字符，请勿恶意回复，一经查实将严肃处理，回复后不可修改",rows:"8"},model:{value:t.reply,callback:function(s){t.reply=s},expression:"reply"}})],1)])],1)},staticRenderFns:[]};var m=e("VU/8")(r,d,!1,function(t){e("w/KH")},null,null);s.default=m.exports}});
//# sourceMappingURL=30.6f0887b5ffe0c3891722.js.map