webpackJsonp([17],{"9WX8":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("Gu7T"),i=o.n(s),a=o("woOf"),l=o.n(a),n=o("Dd8w"),c=o.n(n),d=o("NYxO"),r=o("mzkE"),v=o("Cz8s"),g=o("NPH5"),p=o("RoZr"),h=o("Vr3d"),u=o("MHEY"),_=o("S+Zb"),m=o("GQaK"),f={name:"StoreGoods",data:function(){return{goodsActive:{},popupNotInSailTime:!1,ParentPopupSpecShow:!1,preLoading:!0,goodsLoading:!0,store:{is_rest:0,activity:{num:0}},activetabs:0,swiper_dots:!1,tabswiperable:!0,is_rest:0,status:{options_show:!1,not_in_time_show:!1,cart_show:!1},vanColHeight:0,commentHeight:0,categorySelectedIndex:0,categorySelectedId:0,categoryAll:[],categorySelected:{child:[{}]},childSelectedIndex:0,childSelectedId:0,goodsAll:[],goodsItem:{orderby:{type:"",value:""}},recommend_stores:{},coupon:[],shopPage:{},cart:{num:0},template:2,couponStatus:1,lazyload_goods:"",showMoveDot:[],windowHeight:0,showNotice:!0,cateHasGoods:[],template_page:0,scrollY:0,listHeight:[],tabActive:0}},components:{PublicHeader:v.a,PublicFooter:r.a,Load:g.a,StoreCart:p.a,GoodsHandle:h.a,StoreHeader:u.a,noticePopup:_.a},methods:c()({},Object(d.b)(["replaceStore","replaceCart","replaceState"]),{showMoveDotFun:function(t,e,o){this.showMoveDot.push(!0),this.elLeft=e,this.elBottom=o},onCollectCoupon:function(){var t=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(e){if((e=e.data.message).errno)return t.util.$toast("领取失败","",1e3),!1;t.couponStatus=0,t.util.$toast(e.message,"",1e3)})},onParentSelectOption:function(t){this.goodsActive=t,this.goods=t,this.ParentPopupSpecShow=!0,this.goods.activeOptions||this.onParentGoodsOptionInit()},onParentGoodsOptionInit:function(){if(this.goodsActive=this.goods,this.goodsActive.activeOptions={option:0,attrs:[],optionSelected:0,attrsSelected:[],num:0},1==this.goodsActive.is_options&&(this.goodsActive.activeOptions.option=this.goodsActive.options[0].id,this.goodsActive.activeOptions.optionSelected=this.goodsActive.options[0].id),1==this.goodsActive.is_attrs)for(var t=0;t<this.goodsActive.attrs.length;t++)this.goodsActive.activeOptions.attrs.push(t+"s0"),this.goodsActive.activeOptions.attrsSelected[t]=0;this.onParentToggleActiveOption()},onParentToggleOption:function(t,e,o){var s=this.goods;"option"==o?(s.activeOptions.option=t,s.activeOptions.optionSelected=t):(s.activeOptions.attrs[t]=t+"s"+e,s.activeOptions.attrsSelected[t]=e),this.goodsActive=s,this.onParentToggleActiveOption()},onParentToggleActiveOption:function(t){var e=this.goodsActive;t?e.activeOptionId=t:(e.activeOptionId=e.activeOptions.option,e.activeOptions.attrs.length>0&&(e.activeOptionId=e.activeOptionId+"_"+e.activeOptions.attrs.join("v"))),e.activeOption=e.options_data[e.activeOptionId],e.activeOption.num=this.parentGetSpecNum(),this.goodsActive=l()({},e)},parentGetSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},onParentPlus:function(t,e,o,s){var i=this,a=e.id||e.goods_id,l=e.activeOptionId||o,n={sid:this.istore.id,goods_id:a,option_id:l,num:1,sign:"+"};this.util.request({url:"wmall/store/goods/cart",data:n}).then(function(e){if((e=e.data.message).errno)return i.$toast(e.message),!1;e.message.msg&&i.$toast(e.message.msg);var o=t.target.getBoundingClientRect().left,a=t.target.getBoundingClientRect().bottom;"cart"==s&&(a+=50),i.elLeft=o,i.elBottom=a,i.showMoveDot.push(!0),i.replaceCart(e.message.cart)})},onParentMinus:function(t,e,o){var s=this,i=t.id||t.goods_id,a=t.activeOptionId||e,l={sid:this.istore.id,goods_id:i,option_id:a,num:1,sign:"-"};this.util.request({url:"wmall/store/goods/cart",data:l}).then(function(t){if((t=t.data.message).errno)return s.$toast(t.message),!1;s.replaceCart(t.message.cart)})},onParentPopupNotInSailTime:function(t){this.goodsActive=t,this.popupNotInSailTime=!0},onToggleCategory:function(t,e,o){var s=0;"child"==o?(s=e,this.childSelectedIndex=s,this.categoryAll[this.categorySelectedIndex].childSelectedIndex=s,this.categorySelected=this.categoryAll[this.categorySelectedIndex]):(this.categoryAll[e].childSelectedIndex>0&&(s=this.categoryAll[e].childSelectedIndex),this.categorySelected=this.categoryAll[e],this.categorySelectedIndex=e,this.childSelectedIndex=s,this.categoryAll[e].childSelectedIndex=s),this.categorySelectedId=this.categorySelected.id,this.childSelectedId=0,this.categorySelected.child&&this.categorySelected.child.length>0&&(this.childSelectedId=this.categorySelected.child[s].id),this.onGetGoods()},onGetGoods:function(){var t=this;if(this.goodsLoading,this.goodsAll[this.categorySelectedIndex]||(this.goodsAll[this.categorySelectedIndex]=[]),this.goodsItem=this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex],this.goodsItem){if(this.goodsItem.empty)return!1;if(this.goodsItem.loaded)return console.log("商品全部加载完成"),!1}else this.goodsItem={page:1,psize:30,empty:0,loaded:!1,data:[],orderby:{type:"",value:""}};this.goodsLoading=!0,this.util.request({url:"wmall/store/goods/goods",data:{sid:this.sid,page:this.goodsItem.page,psize:this.goodsItem.psize,cid:this.categorySelectedId,child_id:this.childSelectedId,type:this.goodsItem.orderby.type,value:this.goodsItem.orderby.value}}).then(function(e){t.goodsLoading=!1;var o=e.data.message.message;t.goodsItem.data=[].concat(i()(t.goodsItem.data),i()(o.goods)),t.goodsItem.page++,o.goods.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,o.goods.length||(t.goodsItem.empty=1)),t.goodsAll[t.categorySelectedIndex]||(t.goodsAll[t.categorySelectedIndex]=[]),t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem})},onOrderby:function(t,e){this.goodsItem={page:1,psize:30,empty:0,data:[],orderby:{type:t,value:e}},this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex]=this.goodsItem,this.onGetGoods()},onLoad:function(){var t=this;this.util.request({url:"wmall/store/goods/index",data:{sid:this.sid,order_id:this.order_id}}).then(function(e){t.goodsLoading=!1,t.preLoading=!1;var o=e.data.message;if(o.errno)return t.$toast(o.message),!1;if(o=o.message,t.template_page=o.template_page,1==t.template_page?(t.goodsItem={page:2,psize:30,empty:0,data:o.goods,orderby:{type:"",value:""}},t.goodsItem.data.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,t.goodsItem.data.length||(t.goodsItem.empty=1)),t.categorySelectedId=o.cid,t.childSelectedId=o.child_id,t.goodsAll[t.categorySelectedIndex]=[],t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem,t.categorySelected=o.category[t.categorySelectedIndex]||{}):t.cateHasGoods=o.cate_has_goods,t.store=o.store,t.store.tips){var s="storeNotice"+t.store.id,i=t.util.getStorage(s);!i||i&&!i.notice?t.util.setStorage(s,{notice:1},300):t.showNotice=!1}o.store.data&&o.store.data.shopPage&&(t.shopPage=o.store.data.shopPage),t.coupon=o.coupon,t.categoryAll=o.category,t.is_rest=o.store.is_rest,t.recommend_stores=o.recommend_stores,t.template=o.template,t.lazyload_goods=o.lazyload_goods,t.util.setWXTitle(t.store.title),t.replaceStore(o.store),t.replaceCart(o.cart.message.cart),t.template_page||t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},onParentBeforeEnter:function(t){t.style.bottom=this.windowHeight-this.elBottom+"px",t.style.left=this.elLeft+5+"px",t.style.opacity=0},onParentAfterEnter:function(t){var e=this;t.style.bottom="-20px",t.style.left="20px",t.style.opacity=1,setTimeout(function(){e.replaceState({key:"cart_animate",val:!0})},400)},_initScroll:function(){var t=this;this.categoryScroll=new m.a(this.$refs.categoryWrapper,{click:!0}),this.goodsScroll=new m.a(this.$refs.goodsWrapper,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(e){e.y<=0&&(t.scrollY=Math.abs(Math.round(e.y)));for(var o=t.listHeight.length,s=0;s<o;s++){var i=t.listHeight[s],a=t.listHeight[s+1];a&&t.scrollY>=i&&t.scrollY<a&&s!=t.tabActive&&(t.tabActive=s,t._followScroll(s))}})},_calculateHeight:function(){var t=this.$refs.goodsList,e=0;this.$refs.couponWrapper&&(e+=this.$refs.couponWrapper.clientHeight),this.$refs.shopPageWrapper&&(e+=this.$refs.shopPageWrapper.clientHeight),this.listHeight.push(0);for(var o=0;o<t.length;o++){e+=t[o].clientHeight,this.listHeight.push(e)}},_followScroll:function(t){var e=this.$refs.categoryItem[t];this.categoryScroll.scrollToElement(e,300,0,-100)},selectCategory:function(t,e){if(e._constructed){var o=this.$refs.goodsList[t];this.goodsScroll.scrollToElement(o,500)}}}),watch:{icart:function(){var t=this.icart.data;if(1==this.template_page){var e=this.categoryAll;if(t)for(var o in e)if(e[o].total=0,e[o].child&&e[o].child.length>0)for(var s in e[o].child){e[o].child[s].total=0;var i=0,a=0;for(var l in t)for(var n in t[l])t[l][n].cid==e[o].id&&(a+=t[l][n].num,e[o].total=a,t[l][n].child_id==e[o].child[s].id&&(i+=t[l][n].num,e[o].child[s].total=i))}else{a=0;for(var l in t)for(var n in t[l])t[l][n].cid==e[o].id&&(a+=t[l][n].num,e[o].total=a)}else for(var o in e)if(e[o].total=0,e[o].child)for(var s in e[o].child)e[o].child[s].total=0;this.categoryAll=e}else{var c=this.cateHasGoods;if(t)for(var d in c){c[d].total=0;a=0;for(var l in t)for(var n in t[l])t[l][n].cid==c[d].id&&(a+=t[l][n].num,c[d].total=a)}else for(var d in c)c[d].total=0;this.cateHasGoods=c}}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.order_id=this.query.order_id)},computed:c()({},Object(d.c)(["istore","icart"]),{goodsSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0}}),mounted:function(){var t=this;this.onLoad(),this.$nextTick(function(){var e=document.documentElement.clientHeight,o=document.getElementsByClassName("header")[0].clientHeight,s=document.getElementsByClassName("store-tabs")[0].clientHeight;if(t.vanColHeight=e-o-s-50,document.getElementById("public-header")){var i=document.getElementById("public-header").clientHeight;t.vanColHeight=t.vanColHeight-i}t.windowHeight=window.innerHeight})}},y={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"goods-store"}},[t.isWeixin?t._e():o("public-header",{attrs:{title:t.store.title}}),t._v(" "),o("store-header",{attrs:{store:t.store}}),t._v(" "),o("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[o("div",{staticClass:"tab-item active"},[t._v("商品")]),t._v(" "),o("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/comment?sid="+t.store.id}),tag:"div"}},[t._v("评价")]),t._v(" "),o("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/index?sid="+t.store.id}),tag:"div"}},[t._v("商家")])],1),t._v(" "),o("div",{staticClass:"goods-container"},[1==t.template_page?o("van-row",{staticClass:"goods-some"},[o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[o("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.categorySelectedIndex}},[o("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id}})}},[o("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.categoryAll,function(e,s){return[e.total>0?o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title,info:e.total},on:{click:function(o){t.onToggleCategory(e.id,s,"")}}}):o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title},on:{click:function(o){t.onToggleCategory(e.id,s,"")}}})]})],2)],1),t._v(" "),o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[o("van-list",{attrs:{finished:t.goodsItem.loaded,offset:50},on:{load:t.onGetGoods},model:{value:t.goodsLoading,callback:function(e){t.goodsLoading=e},expression:"goodsLoading"}},[t.coupon.id>0&&1==t.couponStatus?o("div",{staticClass:"coupon-show-container"},[o("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t¥"),o("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),o("div",{staticClass:"coupon-detail"},[o("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),o("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),o("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t.shopPage?o("div",{staticClass:"banner"},[t._l(t.shopPage,function(e,s){return[e.wxapp_link?o("div",{staticClass:"banner-item",on:{click:function(o){t.util.jsUrl(e.wxapp_link)}}},[o("img",{attrs:{src:e.thumb}})]):1==e.goodsLength?o("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:t.store.id,id:e.goods[0]}})}},[o("img",{attrs:{src:e.thumb}})]):e.goodsLength>1?o("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/shopPage",query:{sid:t.store.id,shopPageKey:s}})}},[o("img",{attrs:{src:e.thumb}})]):t._e()]})],2):t._e(),t._v(" "),t.categorySelected.child?[t.categorySelected.child.length>0?o("div",{staticClass:"tag2-list"},t._l(t.categorySelected.child,function(e,s){return o("div",{staticClass:"tag2-item",class:{selected:s==t.childSelectedIndex},on:{click:function(o){t.onToggleCategory(e.id,s,"child")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t"),e.total>0?o("div",{class:{dot:e.total}}):t._e()])})):t._e()]:t._e(),t._v(" "),o("div",{staticClass:"title border-1px-t"},[o("div",{staticClass:"title-text ellipsis"},[o("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.categorySelected.child&&t.categorySelected.child.length>0?t.categorySelected.child[t.childSelectedIndex].title:t.categorySelected.title)+"\n\t\t\t\t\t\t\t"),t.categorySelected.min_fee>0?o("div",{staticClass:"limit-tip"},[t._v("最低消费"+t._s(t.categorySelected.min_fee)+"元")]):t._e()]),t._v(" "),o("div",{staticClass:"title-rank"},[o("div",{staticClass:"sales ",class:{selected:"sailed"==t.goodsItem.orderby.type},on:{click:function(e){t.onOrderby("sailed","desc")}}},[t._v("销量")]),t._v(" "),o("div",{staticClass:"shu"},[t._v("|")]),t._v(" "),o("div",{staticClass:"prionToggleCategoryce-container",on:{click:function(e){t.onOrderby("price","desc"==t.goodsItem.orderby.value?"asc":"desc")}}},[o("div",{staticClass:"price"},[t._v("价格")]),t._v(" "),o("div",{staticClass:"triangle"},[o("div",{staticClass:"triangle-top",class:{selected:"price"==t.goodsItem.orderby.type&&"asc"==t.goodsItem.orderby.value}}),t._v(" "),o("div",{staticClass:"triangle-bottom ",class:{selected:"price"==t.goodsItem.orderby.type&&"desc"==t.goodsItem.orderby.value}})])])])]),t._v(" "),2==t.template?t._l(t.goodsItem.data,function(e,s){return t.goodsItem.data.length>0?o("div",{staticClass:"goods clearfix "},[o("div",{staticClass:"goods-inner border-1px-b"},[o("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:e.id,sid:t.store.id}})}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),e.label?o("div",{staticClass:"label"},[t._v(t._s(e.label))]):t._e()]),t._v(" "),o("div",{staticClass:"shop-info clearfix"},[o("div",{staticClass:"name ellipsis"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"description"},[t._v(t._s(e.content))]),t._v(" "),o("div",{staticClass:"sold"},[t._v("已售"+t._s(e.sailed)+" 赞"+t._s(e.comment_good))]),t._v(" "),t._e(),t._v(" "),o("div",{staticClass:"price"},[o("div",{staticClass:"now-price"},[o("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(e.price)),o("span",{staticClass:"font-14 font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price?o("div",{staticClass:"old-price"},[o("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(e.old_price)+"\n\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),o("div",{staticClass:"discount"},[e.discount?[o("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),o("goods-handle",{attrs:{goods:e,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):[t.goodsItem.data&&t.goodsItem.data.length>0?o("div",{staticClass:"goods-list clearfix"},[t._l(t.goodsItem.data,function(e,s){return o("div",{staticClass:"col-50 goods-item"},[o("div",{staticClass:"goods-info"},[o("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:e.id,sid:t.store.id}})}},[e.discount?o("div",{staticClass:"discount"},[o("div",[o("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),o("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t已售"+t._s(e.sailed)+" "),o("div",[t._v("赞"+t._s(e.comment_good))])]),t._v(" "),o("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t"),o("div",[t._v(t._s(e.price))]),o("span",{staticClass:"font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),o("goods-handle",{attrs:{goods:e,template:t.template,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)])}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],2):t._e()],t._v(" "),1==t.goodsItem.empty?o("load",{attrs:{type:"loaded",text:"暂无商品"}}):t.goodsItem.loaded?o("load",{attrs:{type:"loaded",text:"已经到底了"}}):t._e()],2)],1)],1):o("van-row",{staticClass:"goods-all"},[o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[o("div",{ref:"categoryWrapper",style:{height:t.vanColHeight+"px"}},[o("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.tabActive}},[o("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id}})}},[o("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.cateHasGoods,function(e,s){return[o("li",{ref:"categoryItem",refInFor:!0,on:{click:function(e){t.selectCategory(s,e)}}},[e.total>0?o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title,info:e.total}}):o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title}})],1)]})],2)],1)]),t._v(" "),o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[o("div",{ref:"goodsWrapper",style:{height:t.vanColHeight+"px"}},[o("div",[t.coupon.id>0&&1==t.couponStatus?o("div",{ref:"couponWrapper",staticClass:"coupon-show-container"},[o("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t\t¥"),o("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),o("div",{staticClass:"coupon-detail"},[o("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),o("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),o("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t.shopPage?o("div",{ref:"shopPageWrapper",staticClass:"banner"},[t._l(t.shopPage,function(e,s){return[e.wxapp_link?o("div",{staticClass:"banner-item",on:{click:function(o){t.util.jsUrl(e.wxapp_link)}}},[o("img",{attrs:{src:e.thumb}})]):1==e.goodsLength?o("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:t.store.id,id:e.goods[0]}})}},[o("img",{attrs:{src:e.thumb}})]):e.goodsLength>1?o("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/shopPage",query:{sid:t.store.id,shopPageKey:s}})}},[o("img",{attrs:{src:e.thumb}})]):t._e()]})],2):t._e(),t._v(" "),o("ul",t._l(t.cateHasGoods,function(e,s){return o("li",{key:s,ref:"goodsList",refInFor:!0},[o("div",{staticClass:"title border-1px-t"},[o("div",{staticClass:"title-text ellipsis"},[o("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t\t"),e.category_min_fee>0?o("div",{staticClass:"limit-tip"},[t._v("最低消费"+t._s(e.category_min_fee)+"元")]):t._e()])]),t._v(" "),2==t.template?t._l(e.goods,function(s,i){return e.goods.length>0?o("div",{key:i,staticClass:"goods clearfix"},[o("div",{staticClass:"goods-inner ",class:{"border-1px-b":i<e.goods.length-1}},[o("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:s.id,sid:t.store.id}})}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:s.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),s.label?o("div",{staticClass:"label"},[t._v(t._s(s.label))]):t._e()]),t._v(" "),o("div",{staticClass:"shop-info clearfix"},[o("div",{staticClass:"name ellipsis"},[t._v(t._s(s.title))]),t._v(" "),o("div",{staticClass:"description"},[t._v(t._s(s.content))]),t._v(" "),o("div",{staticClass:"sold"},[t._v("已售"+t._s(s.sailed)+" 赞"+t._s(s.comment_good))]),t._v(" "),o("div",{staticClass:"price"},[o("div",{staticClass:"now-price"},[o("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(s.price)),o("span",{staticClass:"font-14 font-bold"},[t._v(t._s(s.unitname_cn))])]),t._v(" "),s.old_price?o("div",{staticClass:"old-price"},[o("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(s.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),o("div",{staticClass:"discount"},[s.discount?[o("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),o("goods-handle",{attrs:{goods:s,optionId:0,from:"list",templatePage:"1"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):[e.goods&&e.goods.length>0?o("div",{staticClass:"goods-list clearfix"},[t._l(e.goods,function(e,s){return o("div",{staticClass:"col-50 goods-item"},[o("div",{staticClass:"goods-info"},[o("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:e.id,sid:t.store.id}})}},[e.discount?o("div",{staticClass:"discount"},[o("div",[o("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),o("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t已售"+t._s(e.sailed)+" "),o("div",[t._v("赞"+t._s(e.comment_good))])]),t._v(" "),o("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),o("div",[t._v(t._s(e.price))]),o("span",{staticClass:"font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),o("goods-handle",{attrs:{goods:e,template:t.template,optionId:0,from:"list",templatePage:"1"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)])}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],2):t._e()]],2)}))])])])],1)],1),t._v(" "),t.popupNotInSailTime?o("van-popup",{staticClass:"not-in-time-popup",model:{value:t.popupNotInSailTime,callback:function(e){t.popupNotInSailTime=e},expression:"popupNotInSailTime"}},[o("div",{staticClass:"popup-top"},[t.goodsActive.week_cn?o("div",{staticClass:"popup-item"},[o("div",{staticClass:"popup-title"},[t._v("每周可售日期")]),t._v(" "),o("div",{staticClass:"popup-text"},[t._v(t._s(t.goodsActive.week_cn))])]):t._e(),t._v(" "),t.goodsActive.time_cn?o("div",{staticClass:"popup-item"},[o("div",{staticClass:"popup-title"},[t._v("每天可售时间")]),t._v(" "),o("div",{staticClass:"popup-text"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.time_cn)+"\n\t\t\t\t")])]):t._e()]),t._v(" "),o("div",{staticClass:"popup-bottom border-1px-t",on:{click:function(e){t.popupNotInSailTime=!1}}},[t._v("知道了")])]):t._e(),t._v(" "),t.ParentPopupSpecShow?o("van-popup",{staticClass:"options-popup",model:{value:t.ParentPopupSpecShow,callback:function(e){t.ParentPopupSpecShow=e},expression:"ParentPopupSpecShow"}},[o("div",{staticClass:"options-dialog"},[o("div",{staticClass:"muti-close",on:{click:function(e){t.ParentPopupSpecShow=!1}}}),t._v(" "),o("div",{staticClass:"muti-wrap"},[o("div",{staticClass:"muti-food-title border-1px-b"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.title)+"\n\t\t\t\t")]),t._v(" "),o("div",{staticClass:"muti-cont"},[o("div",{staticClass:"muti-cont-inner"},[1==t.goodsActive.is_options?o("div",{staticClass:"muti-sec first"},[o("div",{staticClass:"muti-sec-title"},[t._v("规格")]),t._v(" "),o("div",{staticClass:"muti-choice"},[t._l(t.goodsActive.options,function(e,s){return[o("div",{class:{selected:t.goodsActive.activeOptions.optionSelected==e.id},on:{click:function(o){t.onParentToggleOption(e.id,"","option")}}},[t._v(t._s(e.name))])]})],2)]):t._e(),t._v(" "),1==t.goodsActive.is_attrs?o("div",{staticClass:"muti-sec"},[t._l(t.goodsActive.attrs,function(e,s){return[o("div",{staticClass:"muti-sec-title"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"muti-choice"},[t._l(e.label,function(e,i){return[o("div",{class:{selected:t.goodsActive.activeOptions.attrsSelected[s]==i},on:{click:function(e){t.onParentToggleOption(s,i,"attr")}}},[t._v(t._s(e))])]})],2)]})],2):t._e()])]),t._v(" "),o("div",{staticClass:"muti-choose"},[o("div",{staticClass:"muti-oprt"},[o("div",{staticClass:"muti-cart-oprt clearfix"},[o("div",{staticClass:"add-food"},[o("van-icon",{staticStyle:{"background-color":"#6BBA50"},attrs:{name:"plus"},on:{click:function(e){t.onParentPlus(e,t.goodsActive)}}})],1),t._v(" "),t.goodsSpecNum?[o("div",{staticClass:"food-num"},[t._v(t._s(t.goodsSpecNum))]),t._v(" "),o("div",{staticClass:"remove-food"},[o("div",{staticClass:"remove icon icon-minus",on:{click:function(e){t.onParentMinus(t.goodsActive)}}})])]:t._e()],2)]),t._v(" "),o("div",{staticClass:"muti-info"},[o("div",{staticClass:"muti-price"},[t._v("¥"+t._s(t.goodsActive.activeOption.price))]),t._v(" "),o("div",{staticClass:"muti-type"},[t._v("("+t._s(t.goodsActive.activeOption.name)+")")])])])])])]):t._e(),t._v(" "),o("store-cart",{attrs:{show:0==t.activetabs,store:t.store,cart:t.cart}}),t._v(" "),o("transition",{attrs:{name:"loading"}},[t.preLoading?o("iloading"):t._e()],1),t._v(" "),t._l(t.showMoveDot,function(e,s){return o("transition",{key:s,attrs:{appear:""},on:{"after-appear":t.onParentAfterEnter,"before-appear":t.onParentBeforeEnter}},[e?o("div",{staticClass:"parent_move_dot"}):t._e()])}),t._v(" "),t.store.tips&&t.showNotice?o("notice-popup",{attrs:{tips:t.store.tips}}):t._e()],2)},staticRenderFns:[]};var C=o("VU/8")(f,y,!1,function(t){o("SsDI")},null,null);e.default=C.exports},SsDI:function(t,e){}});
//# sourceMappingURL=17.066d271a2f7ace795b7d.js.map