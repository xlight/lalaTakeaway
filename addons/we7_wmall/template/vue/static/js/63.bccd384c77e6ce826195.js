webpackJsonp([63],{AtH1:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("Gu7T"),i=a.n(e),l=a("Cz8s"),c=a("mzkE"),o=a("NPH5"),n=a("MHEY"),r={name:"StoreGoods",data:function(){return{commentHeight:0,title:"",store:{activity:{num:0}},stat:{},comments:[],min:0,loaded:!1,loading:!1,empty:!1,preLoading:!0}},components:{PublicHeader:l.a,PublicFooter:c.a,Load:o.a,StoreHeader:n.a},methods:{onLoad:function(){var t=this;if(this.loaded)return!1;this.loading=!0,this.util.request({url:"wmall/store/comment",data:{sid:this.$route.query.sid,min:this.min}}).then(function(s){var a=s.data.message;t.store=a.message.store,t.title=a.message.store.title,t.stat=a.message.stat,t.comments=[].concat(i()(t.comments),i()(a.message.comments)),t.util.setWXTitle(t.store.title),t.comments.length||(t.loaded=!0,t.empty=!0),a.min||(t.loaded=!0),t.loading=!1,t.min=a.min,t.preLoading=!1})}},mounted:function(){this.onLoad();var t=document.documentElement.clientHeight,s=document.getElementsByClassName("header")[0].clientHeight,a=document.getElementsByClassName("store-tabs")[0].clientHeight;if(this.commentHeight=t-s-a,document.getElementById("public-header")){var e=document.getElementById("public-header").clientHeight;this.commentHeight=this.commentHeight-e}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"store-comment"}},[t.isWeixin?t._e():a("public-header",{attrs:{title:t.store.title}}),t._v(" "),a("store-header",{attrs:{store:t.store}}),t._v(" "),a("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[a("router-link",{staticClass:"tab-item ",attrs:{to:t.util.getUrl({path:"/pages/store/goods?sid="+t.store.id}),tag:"div"}},[t._v("商品")]),t._v(" "),a("div",{staticClass:"tab-item active"},[t._v("评价")]),t._v(" "),a("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/index?sid="+t.store.id}),tag:"div"}},[t._v("商家")])],1),t._v(" "),a("div",{staticClass:"comment",style:{height:t.commentHeight+"px"}},[a("div",{staticClass:"cmt-detail-info flex-lr"},[a("div",{staticClass:"cmt-detail-info-left-cell"},[a("div",{staticClass:"cmt-detail-info-data"},[a("div",{staticClass:"cmt-detail-info-receive"},[t._v(t._s(t.stat.score))])]),t._v(" "),a("div",{staticClass:"cmt-detail-info-desc"},[t._v("商家评价")])]),t._v(" "),a("div",{staticClass:"cmt-detail-info-middle-cell"},[a("div",{staticClass:"cmt-detail-info-stars"},[a("div",{staticClass:"cmt-detail-info-desc"},[t._v("商品质量")]),t._v(" "),a("div",{staticClass:"appr-status"},[t._l(t.stat.goods_quality_star,function(t){return[a("div",{staticClass:"appr-score",class:{"appr-score-all":"all"==t,"appr-score-half":"half"==t,"appr-score-gray":"gray"==t}})]})],2),t._v(" "),a("div",{staticClass:"cmt-detail-info-receive"},[t._v(t._s(t.stat.goods_quality))])]),t._v(" "),a("div",{staticClass:"cmt-detail-info-stars"},[a("div",{staticClass:"cmt-detail-info-desc"},[t._v("配送质量")]),t._v(" "),a("div",{staticClass:"appr-status"},[t._l(t.stat.delivery_service_star,function(t){return[a("div",{staticClass:"appr-score appr-score-all",class:{"appr-score-all":"all"==t,"appr-score-half":"half"==t,"appr-score-gray":"gray"==t}})]})],2),t._v(" "),a("div",{staticClass:"cmt-detail-info-receive"},[t._v(t._s(t.stat.delivery_service))])])]),t._v(" "),a("div",{staticClass:"cmt-detail-info-right-cell"},[a("div",{staticClass:"cmt-detail-info-dvy"},[t._v(t._s(t.stat.delivery_service))]),t._v(" "),a("div",{staticClass:"cmt-detail-info-desc"},[t._v("配送评分")])])]),t._v(" "),a("div",{staticClass:"evaluates-field"},[a("div",{staticClass:"evaluate-list"},[t.empty?a("div",{staticClass:"common-no-con"},[a("img",{attrs:{src:"static/img/comment_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("无评价记录")])]):a("van-list",{attrs:{finished:t.loaded,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},t._l(t.comments,function(s){return a("div",{staticClass:"evaluate-item"},[a("div",{staticClass:"evaluate-sub clearfix"},[a("div",{staticClass:"evaluate-sub-left"},[a("img",{staticClass:"evaluate-user-pic",attrs:{src:s.avatar}})]),t._v(" "),a("div",{staticClass:"evaluate-sub-right"},[a("div",{staticClass:"evaluate-sub clearfix"},[a("div",{staticClass:"evaluate-name"},[t._v(t._s(s.mobile))]),t._v(" "),a("div",{staticClass:"evaluate-time"},[t._v(t._s(s.addtime))])]),t._v(" "),a("div",{staticClass:"evaluate-stars clearfix"},[t._l(s.scores,function(t){return[a("div",{staticClass:"appr-score appr-score-all",class:{"appr-score-all":"all"==t,"appr-score-half":"half"==t,"appr-score-gray":"gray"==t}})]}),t._v(" "),a("div",{staticClass:"evaluate-ship-time",staticStyle:{display:"none"}},[t._v("44分钟到达")]),t._v(" "),a("div",{staticStyle:{clear:"both"}})],2),t._v(" "),a("div",{staticClass:"evaluate-comment clearfix"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(s.note)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),s.thumbs?[1==s.thumbs.length?a("div",{staticClass:"evaluate-comment-pics clearfix"},[t._l(s.thumbs,function(e){return a("div",{staticClass:"comment-pics",on:{click:function(a){t.util.jsPreviewImage(s.thumbs)}}},[a("img",{attrs:{src:e}})])}),t._v(" "),a("div",{staticStyle:{clear:"both"}})],2):s.thumbs.length>1?a("div",{staticClass:"evaluate-comment-pics pic-multi clearfix"},[t._l(s.thumbs,function(e){return a("div",{staticClass:"comment-pics",on:{click:function(a){t.util.jsPreviewImage(s.thumbs)}}},[a("img",{attrs:{src:e}})])}),t._v(" "),a("div",{staticStyle:{clear:"both"}})],2):t._e()]:t._e(),t._v(" "),s.data.good?a("div",{staticClass:"comment-bottom clearfix"},[a("div",{staticClass:"comment-favor-icon"}),t._v(" "),a("div",{staticClass:"comment-favor-text"},[t._l(s.data.good,function(s){return[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s+" ")+"\n\t\t\t\t\t\t\t\t\t\t")]})],2)]):t._e(),t._v(" "),s.reply?a("div",{staticClass:"replay"},[t._v("\n\t\t\t\t\t\t\t\t\t商家回复("+t._s(s.replytime)+"): "+t._s(s.reply)+"\n\t\t\t\t\t\t\t\t")]):t._e()],2)]),t._v(" "),a("div",{staticStyle:{clear:"both"}})])}))],1)])]),t._v(" "),a("transition",{attrs:{name:"loading"}},[t.preLoading?a("iloading"):t._e()],1)],1)},staticRenderFns:[]};var v=a("VU/8")(r,d,!1,function(t){a("MMCw")},null,null);s.default=v.exports},MMCw:function(t,s){}});
//# sourceMappingURL=63.bccd384c77e6ce826195.js.map