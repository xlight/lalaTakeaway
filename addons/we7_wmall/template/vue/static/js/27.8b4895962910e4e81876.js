webpackJsonp([27],{"6cAq":function(t,i){},VJVX:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("woOf"),e=a.n(s),n=a("Cz8s"),c=a("75NE"),o=a("deIj"),r=a("lVAl"),l=a("Jfm7"),v={components:{PublicHeader:n.a,CountDown:c.a,Comment:r.a},data:function(){return{id:0,activity:{status:0,is_favor:!1,thumbs:[]},comment:{page:2,psize:8,data:[]},store:{},take_status:0,member_takeinfo:{helper:[]},showPreLoading:!0,helpStatus:!1,zhezhaoShow:!1,danmus:[],danmu:{index:0,item:{},show:!1},bargain_success:!1,black_member:{status:!1},failedTips:{type:"message",tips:"",btnText:"关闭",link:"/pages/home/index"}}},methods:{onLoad:function(){var t=this;Object(o.a)({vue:t,url:"kanjia/activity/detail",data:{id:t.id,page:1,psize:t.comment.psize},autoAssign:!0,variable:"activity",success:function(i){t.store=e()(t.store,i.store),t.take_status=i.take_status,t.member_takeinfo=e()(t.member_takeinfo,i.member_takeinfo),1==t.activity.status&&0!=t.activity.total&&t.member_takeinfo.price==t.activity.price&&(t.bargain_success=!0),t.comment.data=i.comment,t.danmus=i.danmu,setTimeout(function(){t.danmus&&(t.onToggleDanmu(),setInterval(function(){t.onToggleDanmu()},5e3))},5e3)},fail:function(i){if(-1e3==i.errno){var a=i.message.black_member;return t.black_member=a,void(t.failedTips.tips=a.tip)}}})},onToggleHelpStatus:function(){this.member_takeinfo.helper.length&&(this.helpStatus=!this.helpStatus)},onParticipate:function(){var t=this;1!=t.take_status&&Object(o.c)({vue:t,url:"kanjia/activity/create",data:{activityid:t.id},success:function(i){var a=i;t.util.$toast("参与成功",t.util.getUrl({path:"/gohome/pages/kanjia/share",query:{activityid:t.activity.id,uid:a}}),1e3)}})},onFavor:function(){Object(l.c)({vue:this,goods_id:this.activity.id,type:"kanjia",target:"activity"})},onToggleDanmu:function(){Object(l.b)({vue:this})},onComment:function(){Object(l.a)({vue:this,type:"kanjia",id:this.id})},onComplain:function(){this.util.setStorage("complainUrl",window.location.href),this.$router.push(this.util.getUrl({path:"/gohome/pages/complain/index"}))}},mounted:function(){this.$route.query&&this.$route.query.id>0&&(this.id=this.$route.query.id),this.onLoad()}},d={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"kanjia-detail"}},[a("public-header",{attrs:{title:"商品详情"}}),t._v(" "),a("div",{staticClass:"content"},[t.danmu.item&&t.danmu.item.nickname?a("transition",{attrs:{name:"danmu-fade",mode:"out-in"}},[a("div",{staticClass:"order-danmu",class:{"opacity-0":!t.danmu.show}},[a("div",{staticClass:"flex"},[a("img",{staticClass:"thumb",attrs:{src:t.danmu.item.avatar,alt:""}}),t._v(" "),a("span",{staticClass:"info"},[t._v(t._s(t.danmu.item.nickname)+"  "+t._s(t.danmu.item.time)+"购买了此商品")])])])]):t._e(),t._v(" "),a("div",{staticClass:"goods-info padding-15-lr padding-15-t bg-default"},[t.activity.thumbs&&t.activity.thumbs.length>0?a("van-swipe",{staticClass:"thumbs",attrs:{loop:"",autoplay:3e3}},t._l(t.activity.thumbs,function(t,i){return a("van-swipe-item",{key:i},[a("img",{attrs:{src:t}})])})):a("div",{staticClass:"thumb"},[a("img",{staticClass:"img-100",attrs:{src:t.activity.thumb,alt:""}}),t._v(" "),3==t.activity.status?a("div",{staticClass:"end-bg"},[a("img",{attrs:{src:"static/img/end.png",alt:""}})]):t._e()]),t._v(" "),a("div",{staticClass:"title"},[t._v("【邀请好友帮忙砍价】"+t._s(t.activity.name))]),t._v(" "),a("div",{staticClass:"flex-lr van-hairline--bottom padding-15-b"},[a("div",{staticClass:"flex-lr"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"c-danger font-16 font-bold"},[t._v("¥"+t._s(t.activity.price))]),t._v(" "),a("div",{staticClass:"c-gray font-12 line-through margin-5-l"},[t._v("¥"+t._s(t.activity.oldprice))])])]),t._v(" "),1==t.activity.status?a("div",{staticClass:"flex"},[a("span",{staticClass:"c-gray font-12 margin-5-r"},[t._v("距结束")]),t._v(" "),a("count-down",{attrs:{endTime:t.activity.endtime}})],1):t._e()]),t._v(" "),a("div",{staticClass:"padding-15-tb flex-lr font-12 c-gray"},[a("div",{staticClass:"take-info-item"},[a("i",{staticClass:"icon icon-browse"}),t._v(" "),a("span",[t._v(t._s(t.activity.total_looknum)+"人浏览")])]),t._v(" "),a("div",{staticClass:"take-info-item text-center van-hairline--left van-hairline--right"},[a("i",{staticClass:"icon icon-share"}),t._v(" "),a("span",[t._v(t._s(t.activity.total_sharenum)+"人分享")])]),t._v(" "),a("div",{staticClass:"take-info-item text-right"},[a("i",{staticClass:"icon icon-friend font-15"}),t._v(" "),a("span",[t._v(t._s(t.activity.total_joinnum)+"人参与")])])])],1),t._v(" "),1==t.take_status?a("div",{staticClass:"margin-10-t bg-default"},[a("div",{staticClass:"progress"},[a("span",{staticClass:"max-price margin-5-r font-13 padding-15-l"},[t._v("¥"+t._s(t.activity.oldprice))]),t._v(" "),a("div",{staticClass:"progress-inner"},[a("div",{staticClass:"now-price",style:{left:t.member_takeinfo.per_price+"%"}},[t._v("现价¥"+t._s(t.member_takeinfo.price))]),t._v(" "),a("div",{staticClass:"bar"},[a("div",{staticClass:"bar-inner",style:{width:t.member_takeinfo.per_price+"%"}})])]),t._v(" "),a("span",{staticClass:"min-price c-danger margin-5-l font-13 padding-15-r"},[t._v("¥"+t._s(t.activity.price))])]),t._v(" "),a("div",{staticClass:"flex-lr font-12 padding-15-lr padding-15-b padding-10-t"},[a("p",[t._v("目前"+t._s(t.member_takeinfo.helper.length)+"位好友帮忙砍价，已砍掉¥"+t._s(t.member_takeinfo.has_bargain)+"，还需砍¥"+t._s(t.member_takeinfo.still_bargain))]),t._v(" "),t.member_takeinfo.helper.length>0?a("div",{staticClass:"flex c-gray",on:{click:t.onToggleHelpStatus}},[t._v("\n\t\t\t\t\t查看详情 "),a("i",{staticClass:"icon icon-unfold"})]):t._e()]),t._v(" "),t.member_takeinfo.helper.length>0&&t.helpStatus?a("div",{staticClass:"helper-list padding-15-lr padding-10-tb van-hairline--top"},t._l(t.member_takeinfo.helper,function(i,s){return a("div",{key:s,staticClass:"helper-item flex-lr",class:{"margin-10-t":s>0}},[a("div",{staticClass:"flex"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img-100",attrs:{src:i.avatar,alt:""}})]),t._v(" "),a("div",{staticClass:"margin-10-l"},[a("div",{staticClass:"font-14 "},[t._v(t._s(i.nickname))]),t._v(" "),a("div",{staticClass:"font-12 c-gray margin-5-t"},[t._v(t._s(i.createtime_cn))])])]),t._v(" "),a("div",{staticClass:"flex"},[a("div",{staticClass:"icon-axe margin-5-r"}),t._v(" "),a("div",{staticClass:"c-gray font-14 margin-5-l"},[t._v("帮您砍掉¥"+t._s(i.bargainprice))])])])})):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(0),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r flex-lr"},[a("div",{staticClass:"font-14 store-info"},[a("div",{staticClass:"margin-10-b w-100 ellipsis"},[t._v(t._s(t.store.title))]),t._v(" "),a("div",{staticClass:"flex c-gray w-100",on:{click:function(i){t.util.jsLocation({lat:t.store.location_x,lng:t.store.location_y})}}},[a("i",{staticClass:"icon icon-location margin-5-r font-15"}),t._v(" "),a("p",{staticClass:"ellipsis"},[t._v(t._s(t.store.address))])])]),t._v(" "),a("i",{staticClass:"icon icon-telephone",on:{click:function(i){t.util.jsUrl("tel:"+t.store.telephone)}}})])]),t._v(" "),a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(1),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r richtext",domProps:{innerHTML:t._s(t.activity.activity_rules)}})]),t._v(" "),a("div",{staticClass:"margin-10-t padding-15-l bg-default"},[t._m(2),t._v(" "),a("div",{staticClass:"padding-15-tb padding-15-r richtext",domProps:{innerHTML:t._s(t.activity.detail)}})]),t._v(" "),a("comment",{attrs:{comment:t.comment.data},on:{onLoadingComment:t.onComment}}),t._v(" "),a("ul",{staticClass:"right-btn"},[a("router-link",{staticClass:"btn-item",attrs:{tag:"li",to:t.util.getUrl({path:"/gohome/pages/poster/index",query:{goods_id:t.id,type:"kanjia"}})}},[a("span",[t._v("生成")]),a("span",[t._v("海报")])]),t._v(" "),t.util.isWeixin()?a("li",{staticClass:"btn-item",on:{click:t.onComplain}},[t._v("投诉")]):t._e()],1)],1),t._v(" "),a("van-goods-action",[a("van-goods-action-mini-btn",{attrs:{icon:"shop",text:"店铺"},on:{click:function(i){t.util.jsUrl(t.store.url)}}}),t._v(" "),a("van-goods-action-mini-btn",{class:{favorite:t.activity.is_favor},attrs:{icon:t.activity.is_favor?"favor_fill_light":"favor1",text:t.activity.is_favor?"已收藏":"收藏"},on:{click:function(i){t.onFavor()}}}),t._v(" "),a("van-goods-action-mini-btn",{attrs:{icon:"share",text:"分享"},on:{click:function(i){t.zhezhaoShow=!t.zhezhaoShow}}}),t._v(" "),1==t.activity.status?[0!=t.activity.total?[0==t.take_status?[a("van-goods-action-big-btn",{staticClass:"btn-share",attrs:{text:"立即参与",primary:""},on:{click:t.onParticipate}})]:1==t.take_status?[1==t.member_takeinfo.now_price_buy?a("van-goods-action-big-btn",{staticClass:"btn-buy",attrs:{text:"现价购买"},on:{click:function(i){t.util.jsUrl("/gohome/pages/kanjia/order/create?activityid="+t.activity.id)}}}):t._e(),t._v(" "),t.member_takeinfo.price==t.activity.price?a("van-goods-action-big-btn",{staticClass:"btn-share",attrs:{text:"立即下单",primary:""},on:{click:function(i){t.util.jsUrl("/gohome/pages/kanjia/order/create?activityid="+t.activity.id)}}}):a("van-goods-action-big-btn",{staticClass:"btn-share",attrs:{text:"找人帮砍",primary:""},on:{click:function(i){t.util.jsUrl("/gohome/pages/kanjia/share?activityid="+t.activity.id+"&uid="+t.member_takeinfo.uid)}}})]:t._e()]:[a("van-goods-action-big-btn",{staticClass:"van-button--disabled",attrs:{text:"商品已抢光",primary:""}})]]:2==t.activity.status?[a("van-goods-action-big-btn",{staticClass:"van-button--disabled",attrs:{text:"活动未开始",primary:""}})]:3==t.activity.status?[a("van-goods-action-big-btn",{staticClass:"van-button--disabled",attrs:{text:"活动已结束",primary:""}})]:t._e()],2),t._v(" "),a("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?a("div",{staticClass:"share-zhezhao",on:{click:function(i){t.zhezhaoShow=!t.zhezhaoShow}}},[a("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()]),t._v(" "),a("van-popup",{staticClass:"popup-success",model:{value:t.bargain_success,callback:function(i){t.bargain_success=i},expression:"bargain_success"}},[a("div",{staticClass:"popup-content"},[a("div",{staticClass:"img-wrap"},[a("img",{staticClass:"w-100",attrs:{src:"static/img/bargain_success.png",alt:""}})]),t._v(" "),a("p",{staticClass:"success-tip",staticStyle:{color:"#F1C90A"}},[t._v("恭喜您砍价成功")]),t._v(" "),a("ul",{staticClass:"font-14 margin-15-tb line-12"},[a("li",[t._v("亲友们合力帮您砍到最低价")]),t._v(" "),a("li",[t._v("立即购买吧~")])]),t._v(" "),a("div",{staticClass:"success-btn",on:{click:function(i){t.util.jsUrl("/gohome/pages/kanjia/order/create?activityid="+t.activity.id)}}},[t._v("立即购买")])]),t._v(" "),a("div",{staticClass:"icon icon-close",on:{click:function(i){t.bargain_success=!t.bargain_success}}})]),t._v(" "),t.black_member.status?a("failed-tips",{attrs:{failedTips:t.failedTips}}):t._e(),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[i("div",{staticClass:"font-14"},[this._v("适用门店")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[i("div",{staticClass:"font-14"},[this._v("活动规则")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex-lr padding-15-tb padding-15-r font-14 van-hairline--bottom"},[i("div",{staticClass:"font-14"},[this._v("商品详情")])])}]};var m=a("VU/8")(v,d,!1,function(t){a("6cAq")},null,null);i.default=m.exports}});
//# sourceMappingURL=27.8b4895962910e4e81876.js.map