webpackJsonp([61],{"79ox":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Gu7T"),n=i.n(a),e=i("Cz8s"),o=i("deIj"),c={components:{PublicHeader:e.a},data:function(){return{zhezhaoShow:!1,detailOrComment:"comment",store:{thumbs:[],is_favorite:""},coupon:{record:[],coupons:[]},kanjia:[],pintuan:[],seckill:[],comment:{page:1,psize:5,empty:!1,loaded:!1,data:[]},sid:0}},methods:{onToggleDetailOrComment:function(t){this.detailOrComment=t},onLoad:function(){var t=this;Object(o.a)({vue:t,url:"haodian/index/detail",data:{sid:t.sid},autoAssign:!0,variable:"store",success:function(s){t.coupon=t.util.extend(t.coupon,s.coupon),t.kanjia=[].concat(n()(s.kanjia)),t.pintuan=[].concat(n()(s.pintuan)),t.seckill=[].concat(n()(s.seckill))}})},onFavor:function(t){var s=this;if(this.store.is_favorite)var i="cancal";else i="star";Object(o.c)({vue:this,url:"wmall/member/op/favorite",data:{id:t,type:i},success:function(){"star"==i?(s.$toast("添加收藏成功"),s.store.is_favorite=1):(s.$toast("取消收藏成功"),s.store.is_favorite=0)}})}},mounted:function(){this.$route.query&&this.$route.query.sid&&(this.sid=this.$route.query.sid),this.onLoad()}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"haodian-detail"}},[i("public-header",{attrs:{title:"商户详情"}}),t._v(" "),i("div",{staticClass:"content"},[t.store.thumbs.length>0?i("div",{staticClass:"padding-10-lr padding-10-t bg-default"},[i("van-swipe",{staticClass:"thumbs",attrs:{loop:""}},t._l(t.store.thumbs,function(s,a){return i("van-swipe-item",{key:a,attrs:{autoplay:3e3},on:{click:function(i){t.util.jsUrl(s.url)}}},[i("img",{attrs:{src:s.image}})])}))],1):t._e(),t._v(" "),i("div",{staticClass:"store-info bg-default font-14 flex-lr padding-10-lr padding-15-tb van-hairline--bottom"},[i("div",{staticClass:"store-logo"},[i("img",{staticClass:"img-100",attrs:{src:t.store.logo,alt:""}})]),t._v(" "),i("div",{staticClass:"info-inner"},[i("van-row",{staticClass:"w-100 flex"},[i("van-col",{staticClass:"flex",attrs:{span:"20"}},[i("div",{staticClass:"store-title font-15 font-500 ellipsis"},[t._v(t._s(t.store.title))]),t._v(" "),i("ul",{staticClass:"flex"},[t.store.haodian_cid>0?i("li",{staticClass:"store-tag"},[t._v(t._s(t.store.haodian_cid_cn))]):t._e(),t._v(" "),t.store.haodian_child_id>0?i("li",{staticClass:"store-tag"},[t._v(t._s(t.store.haodian_child_id_cn))]):t._e()])]),t._v(" "),i("van-col",{attrs:{span:"4"}},[i("div",{staticClass:"c-danger text-center"},[t._v("412m")])])],1),t._v(" "),i("div",{staticClass:"flex font-12"},[i("van-rate",{attrs:{size:12,"disabled-color":"#ff2d4b",disabled:""},model:{value:t.store.score,callback:function(s){t.$set(t.store,"score",s)},expression:"store.score"}}),t._v(" "),i("span",{staticClass:"c-gray  margin-5-l"},[t._v(t._s(t.store.score)+"分")]),t._v(" "),t._m(0)],1),t._v(" "),i("div",{staticClass:"flex c-gray font-12"},[i("i",{staticClass:"icon icon-time"}),t._v(" "),i("span",{staticClass:"margin-5-l"},[t._v("营业时间: "+t._s(t.store.business_hours_cn))])]),t._v(" "),i("div",{staticClass:"flex c-gray font-12 store-address"},[i("i",{staticClass:"icon icon-location"}),t._v(" "),i("span",{staticClass:"margin-5-l ellipsis"},[t._v(t._s(t.store.address))])]),t._v(" "),i("div",{staticClass:"store-other c-danger flex "},[i("i",{staticClass:"font-20 icon icon-taxi border-1px-r padding-5-r",on:{click:function(s){t.util.jsLocation({lat:t.store.location_x,lng:t.store.location_y})}}}),t._v(" "),i("i",{staticClass:"font-20 icon icon-phone padding-5-l",on:{click:function(s){t.util.jsUrl("tel:"+t.store.telephone)}}})])],1)]),t._v(" "),i("ul",{staticClass:"store-feature bg-default font-14 padding-10-lr padding-15-t padding-5-b"},t._l(4,function(s,a){return i("li",{key:a,staticClass:"feature-item flex"},[i("i",{staticClass:"icon icon-wifi font-14 c-danger margin-5-r"}),t._v(" "),i("span",[t._v("免费无线")])])})),t._v(" "),i("div",{staticClass:"store-coupon margin-10-t padding-10-t bg-default"},[i("div",{staticClass:"activity-header "},[t._v("店铺优惠券")]),t._v(" "),i("div",{staticClass:"coupon-list padding-5-b"},[1==t.coupon.can_collect?i("div",{staticClass:"coupon-item flex-lr"},[i("div",{staticClass:"left"},[i("div",{staticClass:"c-danger font-500"},[t._v(t._s(t.coupon.title))]),t._v(" "),i("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("满"+t._s(t.coupon.coupons[0].condition)+"元可用")]),t._v(" "),i("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("限"+t._s(t.coupon.endtime_cn)+"前领取")])]),t._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"font-18 font-bold c-danger"},[t._v("¥"+t._s(t.coupon.coupons[0].discount))]),t._v(" "),i("div",{staticClass:"btn-take"},[t._v("立即领取")])])]):t._e(),t._v(" "),t.coupon.record.length>0?t._l(t.coupon.record,function(s){return i("div",{key:s.id,staticClass:"coupon-item flex-lr"},[i("div",{staticClass:"left"},[i("div",{staticClass:"c-danger font-500"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("满"+t._s(s.condition)+"元可用")]),t._v(" "),i("div",{staticClass:"c-gray margin-10-t font-12"},[t._v("限"+t._s(s.endtime_cn)+"前使用")])]),t._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"font-18 font-bold c-danger"},[t._v("¥"+t._s(s.discount))]),t._v(" "),i("div",{staticClass:"c-danger margin-10-t"},[t._v("已领取")])])])}):t._e()],2)]),t._v(" "),t.kanjia.length>0?i("div",{staticClass:"haodian-kanjia bg-default margin-10-t padding-10-t"},[i("div",{staticClass:"activity-header"},[t._v("\n\t\t\t\t本店砍价\n\t\t\t\t"),i("div",{staticClass:"more",on:{click:function(s){t.util.jsUrl("/gohome/pages/kanjia/index?sid="+t.sid)}}},[t._v("\n\t\t\t\t\t更多\n\t\t\t\t\t"),i("div",{staticClass:"icon icon-arrow-right"})])]),t._v(" "),i("div",{staticClass:"activity-list"},t._l(t.kanjia,function(s,a){return i("router-link",{key:a,staticClass:"activity-item",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/kanjia/detail",query:{id:s.id}})}},[i("div",{staticClass:"item-inner"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"goods-title"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"flex"},[i("span",{staticClass:"c-danger font-500 font-15"},[t._v("¥"+t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(s.oldprice))]),t._v(" "),i("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])])])])}))]):t._e(),t._v(" "),t.seckill.length>0?i("div",{staticClass:"haodian-seckill bg-default margin-10-t padding-10-t"},[i("div",{staticClass:"activity-header"},[t._v("\n\t\t\t\t本店抢购\n\t\t\t\t"),i("div",{staticClass:"more",on:{click:function(s){t.util.jsUrl("/gohome/pages/seckill/index?sid="+t.sid)}}},[t._v("\n\t\t\t\t\t更多\n\t\t\t\t\t"),i("div",{staticClass:"icon icon-arrow-right"})])]),t._v(" "),i("div",{staticClass:"activity-list"},t._l(t.seckill,function(s,a){return i("div",{key:a,staticClass:"activity-item bg-default padding-10 van-hairline--bottom"},[i("div",{staticClass:"flex-lr"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"font-14 w-100"},[i("p",[t._v(t._s(s.name))])]),t._v(" "),i("div",{staticClass:"flex-lr-bottom w-100"},[i("div",{staticClass:"price-bar"},[i("div",{staticClass:"flex"},[i("span",{staticClass:"font-500 font-15 margin-5-r"},[t._v("¥"+t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(s.oldprice))]),t._v(" "),i("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),i("div",{staticClass:"bar"},[i("div",{staticClass:"bar-inner",style:{width:s.sailed_percent+"%"}}),t._v(" "),i("div",{staticClass:"bar-text"},[t._v("已抢"+t._s(s.sailed)+"份")])])]),t._v(" "),i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/seckill/detail",query:{id:s.id}})}},[t._v("去抢购")])],1)])])])}))]):t._e(),t._v(" "),t.pintuan.length>0?i("div",{staticClass:"haodian-pintuan bg-default margin-10-t padding-10-t"},[i("div",{staticClass:"activity-header"},[t._v("\n\t\t\t\t本店拼团\n\t\t\t\t"),i("div",{staticClass:"more",on:{click:function(s){t.util.jsUrl("/gohome/pages/pintuan/index?sid="+t.sid)}}},[t._v("\n\t\t\t\t\t更多\n\t\t\t\t\t"),i("div",{staticClass:"icon icon-arrow-right"})])]),t._v(" "),i("div",{staticClass:"activity-list"},t._l(t.pintuan,function(s,a){return i("div",{key:s.id,staticClass:"activity-item"},[i("div",{staticClass:"item-inner"},[i("div",{staticClass:"thumb"},[i("img",{staticClass:"img-100",attrs:{src:s.thumb,alt:""}}),t._v(" "),i("div",{staticClass:"mark"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.peoplenum)+"人团\n\t\t\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"goods-title"},[t._v(t._s(s.name))]),t._v(" "),i("div",{staticClass:"flex"},[i("span",{staticClass:"font-500 font-15 margin-5-r"},[t._v("¥"+t._s(s.price))]),t._v(" "),i("div",{staticClass:"c-gray line-through font-12"},[t._v("¥"+t._s(s.oldprice))]),t._v(" "),i("div",{staticClass:"discount"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),i("div",{staticClass:"flex-lr margin-10-t"},[i("div",{staticClass:"bar"},[i("div",{staticClass:"bar-inner",style:{width:s.sailed_percent+"%"}}),t._v(" "),i("div",{staticClass:"bar-text"},[t._v("已售"+t._s(s.falesailed_total)+"份")])]),t._v(" "),i("router-link",{staticClass:"btn btn-detail",attrs:{tag:"div",to:t.util.getUrl({path:"/gohome/pages/pintuan/detail",query:{id:s.id}})}},[t._v("拼团")])],1)])])}))]):t._e(),t._v(" "),i("div",{staticClass:"detail-comment bg-default margin-10-t"},[i("div",{staticClass:"tab-group van-hairline--bottom"},[i("div",{staticClass:"tab-item",class:{active:"detail"==t.detailOrComment},on:{click:function(s){t.onToggleDetailOrComment("detail")}}},[t._v("商户详情")]),t._v(" "),i("div",{staticClass:"tab-item",class:{active:"comment"==t.detailOrComment},on:{click:function(s){t.onToggleDetailOrComment("comment")}}},[t._v("用户评价")])]),t._v(" "),"detail"==t.detailOrComment?i("div",{staticClass:"richtext",domProps:{innerHTML:t._s(t.store.description)}}):"comment"==t.detailOrComment?i("div",{staticClass:"comment-list"},t._l(2,function(s,a){return i("div",{key:a,staticClass:"comment-item padding-15-tb padding-10-lr van-hairline--bottom"},[i("div",{staticClass:"consumer-info flex-lr"},[t._m(1,!0),t._v(" "),i("div",{staticClass:"basic flex-lr"},[t._m(2,!0),t._v(" "),i("van-rate",{attrs:{size:13,"disabled-color":"#ff2d4b",disabled:""},model:{value:t.store.score,callback:function(s){t.$set(t.store,"score",s)},expression:"store.score"}})],1)]),t._v(" "),i("div",{staticClass:"comment-item"},[i("div",{staticClass:"text"},[t._v("评价内容评价内容评价内容评价内容")]),t._v(" "),t._m(3,!0),t._v(" "),i("van-row",{staticClass:"thumbs margin-10-t",attrs:{gutter:"10"}},[t._l(5,function(s,a){return a<4?i("van-col",{key:a,attrs:{span:"6"}},[i("div",[i("img",{staticClass:"w-100",attrs:{src:"http://1.xinzuowl.com/attachment/images/1/2016/07/P55O04n6fgOooGEEe2mNOOEoC4OZ66.png",alt:""}})])]):t._e()}),t._v(" "),i("div",{staticClass:"thumbs-num"},[t._v("共10张")])],2)],1)])})):t._e()])]),t._v(" "),i("van-goods-action",[i("van-goods-action-mini-btn",{attrs:{icon:"shop",text:"首页"},on:{click:function(s){t.util.jsUrl("/gohome/pages/haodian/index")}}}),t._v(" "),i("van-goods-action-mini-btn",{class:{favorite:t.store.is_favorite},attrs:{icon:t.store.is_favorite?"favor_fill_light":"favor1",text:t.store.is_favorite?"已收藏":"收藏"},on:{click:function(s){t.onFavor(t.store.id)}}}),t._v(" "),i("van-goods-action-mini-btn",{attrs:{icon:"share",text:"分享"},on:{click:function(s){t.zhezhaoShow=!t.zhezhaoShow}}}),t._v(" "),i("van-goods-action-big-btn",{staticClass:"btn-share",attrs:{text:"联系商家",primary:""},on:{click:function(s){t.util.jsUrl("tel:"+t.store.telephone)}}})],1),t._v(" "),i("transition",{attrs:{name:"van-fade"}},[t.zhezhaoShow?i("div",{staticClass:"share-zhezhao",on:{click:function(s){t.zhezhaoShow=!t.zhezhaoShow}}},[i("img",{attrs:{src:"static/img/share-layer.png",alt:""}})]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex margin-10-l"},[s("i",{staticClass:"icon icon-hotfill c-danger"}),this._v(" "),s("span",{staticClass:"c-gray"},[this._v("人气:100")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"avatar"},[s("img",{staticClass:"img-100",attrs:{src:"http://wx.qlogo.cn/mmopen/lgicrYyMHFv8ZSaWRtQjcpbHDotWhy159lhJqQUTO0QbkB2FBaC9n4bO3eQhpIeX9lx4lYCpGiaAqnUXVzkXZmFVqiaHM4DC9HH/132",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"font-14"},[this._v("用户昵称")]),this._v(" "),s("div",{staticClass:"c-gray font-12 margin-5-t"},[this._v("2018-12-12 10:10")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"comment-tags margin-5-t"},[s("div",{staticClass:"icon icon-tag margin-5-r font-13"}),this._v(" "),s("div",{staticClass:"tags-wrap font-13 c-gray"},[s("div",{staticClass:"tag-item margin-5-r"},[this._v("服务周到")]),this._v(" "),s("div",{staticClass:"tag-item margin-5-r"},[this._v("经济实惠")])])])}]};var r=i("VU/8")(c,l,!1,function(t){i("JEOG")},null,null);s.default=r.exports},JEOG:function(t,s){}});
//# sourceMappingURL=61.a5976f839013efc52405.js.map