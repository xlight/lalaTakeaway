webpackJsonp([122],{"9WX8":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Gu7T"),o=e.n(i),a=e("woOf"),c=e.n(a),l=e("Dd8w"),n=e.n(l),d=e("NYxO"),r=e("mzkE"),v=e("Cz8s"),p=e("NPH5"),g=e("RoZr"),_=e("Vr3d"),u=e("MHEY"),h=e("S+Zb"),m=e("fgl9"),f=e("GQaK"),C={name:"StoreGoods",data:function(){return{goodsActive:{},popupNotInSailTime:!1,ParentPopupSpecShow:!1,preLoading:!0,goodsLoading:!0,store:{is_rest:0,activity:{num:0}},activetabs:0,swiper_dots:!1,tabswiperable:!0,is_rest:0,status:{options_show:!1,not_in_time_show:!1,cart_show:!1},vanColHeight:0,commentHeight:0,categorySelectedIndex:0,categorySelectedId:0,categoryAll:[],categorySelected:{child:[{}]},childSelectedIndex:0,childSelectedId:0,goodsAll:[],goodsItem:{orderby:{type:"",value:""}},recommend_stores:{},coupon:[],shopPage:{},cart:{num:0},template:2,couponStatus:1,lazyload_goods:"",showMoveDot:[],windowHeight:0,showNotice:!0,cateHasGoods:[],template_page:0,scrollY:0,listHeight:[],tabActive:0,popupBuySvip:!1,follow:{}}},components:{PublicHeader:v.a,PublicFooter:r.a,Load:p.a,StoreCart:g.a,GoodsHandle:_.a,StoreHeader:u.a,noticePopup:h.a,follow:m.a},methods:n()({},Object(d.b)(["replaceStore","replaceCart","replaceState"]),{showMoveDotFun:function(t,s,e){this.showMoveDot.push(!0),this.elLeft=s,this.elBottom=e},onCollectCoupon:function(){var t=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(s){if((s=s.data.message).errno)return t.util.$toast("领取失败","",1e3),!1;t.couponStatus=0,t.util.$toast(s.message,"",1e3)})},onParentSelectOption:function(t){this.goodsActive=t,this.goods=t,this.ParentPopupSpecShow=!0,this.goods.activeOptions||this.onParentGoodsOptionInit()},onParentGoodsOptionInit:function(){if(this.goodsActive=this.goods,this.goodsActive.activeOptions={option:0,attrs:[],optionSelected:0,attrsSelected:[],num:0},1==this.goodsActive.is_options&&(this.goodsActive.activeOptions.option=this.goodsActive.options[0].id,this.goodsActive.activeOptions.optionSelected=this.goodsActive.options[0].id),1==this.goodsActive.is_attrs)for(var t=0;t<this.goodsActive.attrs.length;t++)this.goodsActive.activeOptions.attrs.push(t+"s0"),this.goodsActive.activeOptions.attrsSelected[t]=0;this.onParentToggleActiveOption()},onParentToggleOption:function(t,s,e){var i=this.goods;"option"==e?(i.activeOptions.option=t,i.activeOptions.optionSelected=t):(i.activeOptions.attrs[t]=t+"s"+s,i.activeOptions.attrsSelected[t]=s),this.goodsActive=i,this.onParentToggleActiveOption()},onParentToggleActiveOption:function(t){var s=this.goodsActive;t?s.activeOptionId=t:(s.activeOptionId=s.activeOptions.option,s.activeOptions.attrs.length>0&&(s.activeOptionId=s.activeOptionId+"_"+s.activeOptions.attrs.join("v"))),s.activeOption=s.options_data[s.activeOptionId],s.activeOption.num=this.parentGetSpecNum(),this.goodsActive=c()({},s)},parentGetSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},onParentPlus:function(t,s,e,i,o){var a=this;this.goodsActive=s;var c=0;if(1==this.icart.is_buysvip)c=1;else if(1==s.svip_buy_show){if(1==o)return this.goodsActive.activeOption&&(this.goodsActive.price=this.goodsActive.activeOption.price,this.goodsActive.activeOption.svip_price>0?this.goodsActive.svip_price=this.goodsActive.activeOption.svip_price:this.goodsActive.svip_price=this.goodsActive.activeOption.price),void(this.popupBuySvip=!0);2==o?this.popupBuySvip=!1:3==o&&(this.popupBuySvip=!1,c=1)}var l=s.id||s.goods_id,n=s.activeOptionId||e,d={sid:this.istore.id,goods_id:l,option_id:n,num:1,sign:"+",is_buysvip:c};this.util.request({url:"wmall/store/goods/cart",data:d}).then(function(s){if((s=s.data.message).errno)return a.$toast(s.message),!1;s.message.msg&&a.$toast(s.message.msg);var e=t.target.getBoundingClientRect().left,o=t.target.getBoundingClientRect().bottom;"cart"==i&&(o+=50),a.elLeft=e,a.elBottom=o,a.showMoveDot.push(!0),a.replaceCart(s.message.cart)})},onParentMinus:function(t,s,e){var i=this,o=0;1==this.icart.is_buysvip&&(o=1);var a=t.id||t.goods_id,c=t.activeOptionId||s,l={sid:this.istore.id,goods_id:a,option_id:c,num:1,sign:"-",is_buysvip:o};this.util.request({url:"wmall/store/goods/cart",data:l}).then(function(t){if((t=t.data.message).errno)return i.$toast(t.message),!1;i.replaceCart(t.message.cart)})},onParentPopupNotInSailTime:function(t){this.goodsActive=t,this.popupNotInSailTime=!0},onToggleCategory:function(t,s,e){var i=0;"child"==e?(i=s,this.childSelectedIndex=i,this.categoryAll[this.categorySelectedIndex].childSelectedIndex=i,this.categorySelected=this.categoryAll[this.categorySelectedIndex]):(this.categoryAll[s].childSelectedIndex>0&&(i=this.categoryAll[s].childSelectedIndex),this.categorySelected=this.categoryAll[s],this.categorySelectedIndex=s,this.childSelectedIndex=i,this.categoryAll[s].childSelectedIndex=i),this.categorySelectedId=this.categorySelected.id,this.childSelectedId=0,this.categorySelected.child&&this.categorySelected.child.length>0&&(this.childSelectedId=this.categorySelected.child[i].id),this.onGetGoods()},onGetGoods:function(){var t=this;if(this.goodsLoading,this.goodsAll[this.categorySelectedIndex]||(this.goodsAll[this.categorySelectedIndex]=[]),this.goodsItem=this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex],this.goodsItem){if(this.goodsItem.empty)return!1;if(this.goodsItem.loaded)return console.log("商品全部加载完成"),!1}else this.goodsItem={page:1,psize:30,empty:0,loaded:!1,data:[],orderby:{type:"",value:""}};this.goodsLoading=!0,this.util.request({url:"wmall/store/goods/goods",data:{sid:this.sid,page:this.goodsItem.page,psize:this.goodsItem.psize,cid:this.categorySelectedId,child_id:this.childSelectedId,type:this.goodsItem.orderby.type,value:this.goodsItem.orderby.value}}).then(function(s){t.goodsLoading=!1;var e=s.data.message.message;t.goodsItem.data=[].concat(o()(t.goodsItem.data),o()(e.goods)),t.goodsItem.page++,e.goods.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,e.goods.length||(t.goodsItem.empty=1)),t.goodsAll[t.categorySelectedIndex]||(t.goodsAll[t.categorySelectedIndex]=[]),t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem})},onOrderby:function(t,s){this.goodsItem={page:1,psize:30,empty:0,data:[],orderby:{type:t,value:s}},this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex]=this.goodsItem,this.onGetGoods()},onLoad:function(){var t=this;this.util.request({url:"wmall/store/goods/index",data:{sid:this.sid,order_id:this.order_id}}).then(function(s){t.goodsLoading=!1,t.preLoading=!1;var e=s.data.message;if(e.errno)return t.$toast(e.message),!1;if(e=e.message,t.template_page=e.template_page,1==t.template_page?(t.goodsItem={page:2,psize:30,empty:0,data:e.goods,orderby:{type:"",value:""}},t.goodsItem.data.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,t.goodsItem.data.length||(t.goodsItem.empty=1)),t.categorySelectedId=e.cid,t.childSelectedId=e.child_id,t.goodsAll[t.categorySelectedIndex]=[],t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem,t.categorySelected=e.category[t.categorySelectedIndex]||{}):t.cateHasGoods=e.cate_has_goods,t.store=e.store,t.store.tips){var i="storeNotice"+t.store.id,o=t.util.getStorage(i);!o||o&&!o.notice?t.util.setStorage(i,{notice:1},300):t.showNotice=!1}e.store.data&&e.store.data.shopPage&&(t.shopPage=e.store.data.shopPage),t.coupon=e.coupon,t.categoryAll=e.category,t.is_rest=e.store.is_rest,t.recommend_stores=e.recommend_stores,t.template=e.template,t.lazyload_goods=e.lazyload_goods,t.follow=window.follow,t.util.setWXTitle(t.store.title),t.replaceStore(e.store),t.replaceCart(e.cart.message.cart),t.template_page||t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},onParentBeforeEnter:function(t){t.style.bottom=this.windowHeight-this.elBottom+"px",t.style.left=this.elLeft+5+"px",t.style.opacity=0},onParentAfterEnter:function(t){var s=this;t.style.bottom="-20px",t.style.left="20px",t.style.opacity=1,setTimeout(function(){s.replaceState({key:"cart_animate",val:!0})},400)},_initScroll:function(){var t=this;this.categoryScroll=new f.a(this.$refs.categoryWrapper,{click:!0}),this.goodsScroll=new f.a(this.$refs.goodsWrapper,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(s){s.y<=0&&(t.scrollY=Math.abs(Math.round(s.y)));for(var e=t.listHeight.length,i=0;i<e;i++){var o=t.listHeight[i],a=t.listHeight[i+1];a&&t.scrollY>=o&&t.scrollY<a&&i!=t.tabActive&&(t.tabActive=i,t._followScroll(i))}})},_calculateHeight:function(){var t=this.$refs.goodsList,s=0;this.$refs.couponWrapper&&(s+=this.$refs.couponWrapper.clientHeight),this.$refs.shopPageWrapper&&(s+=this.$refs.shopPageWrapper.clientHeight),this.listHeight.push(0);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},_followScroll:function(t){var s=this.$refs.categoryItem[t];this.categoryScroll.scrollToElement(s,300,0,-100)},selectCategory:function(t,s){if(s._constructed){var e=this.$refs.goodsList[t];this.goodsScroll.scrollToElement(e,500)}}}),watch:{icart:function(){var t=this.icart.data;if(1==this.template_page){var s=this.categoryAll;if(t)for(var e in s)if(s[e].total=0,s[e].child&&s[e].child.length>0)for(var i in s[e].child){s[e].child[i].total=0;var o=0,a=0;for(var c in t)for(var l in t[c])t[c][l].cid==s[e].id&&(a+=t[c][l].num,s[e].total=a,t[c][l].child_id==s[e].child[i].id&&(o+=t[c][l].num,s[e].child[i].total=o))}else{a=0;for(var c in t)for(var l in t[c])t[c][l].cid==s[e].id&&(a+=t[c][l].num,s[e].total=a)}else for(var e in s)if(s[e].total=0,s[e].child)for(var i in s[e].child)s[e].child[i].total=0;this.categoryAll=s}else{var n=this.cateHasGoods;if(t)for(var d in n){n[d].total=0;a=0;for(var c in t)for(var l in t[c])t[c][l].cid==n[d].id&&(a+=t[c][l].num,n[d].total=a)}else for(var d in n)n[d].total=0;this.cateHasGoods=n}}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.order_id=this.query.order_id)},computed:n()({},Object(d.c)(["istore","icart"]),{goodsSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0}}),mounted:function(){var t=this;this.onLoad(),this.$nextTick(function(){var s=document.documentElement.clientHeight,e=document.getElementsByClassName("header")[0].clientHeight,i=document.getElementsByClassName("store-tabs")[0].clientHeight;if(t.vanColHeight=s-e-i-50,document.getElementById("public-header")){var o=document.getElementById("public-header").clientHeight;t.vanColHeight=t.vanColHeight-o}t.windowHeight=window.innerHeight})}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"goods-store"}},[t.follow&&1==t.follow.status?e("follow",{attrs:{follow:t.follow}}):t._e(),t._v(" "),t.isWeixin?t._e():e("public-header",{attrs:{title:t.store.title}}),t._v(" "),e("store-header",{attrs:{store:t.store}}),t._v(" "),e("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[e("div",{staticClass:"tab-item active"},[t._v("商品")]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/comment?sid="+t.store.id}),tag:"div"}},[t._v("评价")]),t._v(" "),e("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/index?sid="+t.store.id}),tag:"div"}},[t._v("商家")])],1),t._v(" "),e("div",{staticClass:"goods-container"},[1==t.template_page?e("van-row",{staticClass:"goods-some"},[e("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[e("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.categorySelectedIndex}},[e("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id}})}},[e("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.categoryAll,function(s,i){return[s.total>0?e("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:s.title,info:s.total},on:{click:function(e){t.onToggleCategory(s.id,i,"")}}}):e("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:s.title},on:{click:function(e){t.onToggleCategory(s.id,i,"")}}})]})],2)],1),t._v(" "),e("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[e("van-list",{attrs:{finished:t.goodsItem.loaded,offset:50},on:{load:t.onGetGoods},model:{value:t.goodsLoading,callback:function(s){t.goodsLoading=s},expression:"goodsLoading"}},[t.coupon.id>0&&1==t.couponStatus?e("div",{staticClass:"coupon-show-container"},[e("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t¥"),e("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),e("div",{staticClass:"coupon-detail"},[e("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),e("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),e("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t.shopPage?e("div",{staticClass:"banner"},[t._l(t.shopPage,function(s,i){return[s.wxapp_link?e("div",{staticClass:"banner-item",on:{click:function(e){t.util.jsUrl(s.wxapp_link)}}},[e("img",{attrs:{src:s.thumb}})]):1==s.goodsLength?e("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:t.store.id,id:s.goods[0]}})}},[e("img",{attrs:{src:s.thumb}})]):s.goodsLength>1?e("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/shopPage",query:{sid:t.store.id,shopPageKey:i}})}},[e("img",{attrs:{src:s.thumb}})]):t._e()]})],2):t._e(),t._v(" "),t.categorySelected.child?[t.categorySelected.child.length>0?e("div",{staticClass:"tag2-list"},t._l(t.categorySelected.child,function(s,i){return e("div",{staticClass:"tag2-item",class:{selected:i==t.childSelectedIndex},on:{click:function(e){t.onToggleCategory(s.id,i,"child")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t\t\t\t"),s.total>0?e("div",{class:{dot:s.total}}):t._e()])})):t._e()]:t._e(),t._v(" "),e("div",{staticClass:"title border-1px-t"},[e("div",{staticClass:"title-text ellipsis"},[e("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.categorySelected.child&&t.categorySelected.child.length>0?t.categorySelected.child[t.childSelectedIndex].title:t.categorySelected.title)+"\n\t\t\t\t\t\t\t"),t.categorySelected.min_fee>0?e("div",{staticClass:"limit-tip"},[t._v("最低消费"+t._s(t.categorySelected.min_fee)+"元")]):t._e()]),t._v(" "),e("div",{staticClass:"title-rank"},[e("div",{staticClass:"sales ",class:{selected:"sailed"==t.goodsItem.orderby.type},on:{click:function(s){t.onOrderby("sailed","desc")}}},[t._v("销量")]),t._v(" "),e("div",{staticClass:"shu"},[t._v("|")]),t._v(" "),e("div",{staticClass:"prionToggleCategoryce-container",on:{click:function(s){t.onOrderby("price","desc"==t.goodsItem.orderby.value?"asc":"desc")}}},[e("div",{staticClass:"price"},[t._v("价格")]),t._v(" "),e("div",{staticClass:"triangle"},[e("div",{staticClass:"triangle-top",class:{selected:"price"==t.goodsItem.orderby.type&&"asc"==t.goodsItem.orderby.value}}),t._v(" "),e("div",{staticClass:"triangle-bottom ",class:{selected:"price"==t.goodsItem.orderby.type&&"desc"==t.goodsItem.orderby.value}})])])])]),t._v(" "),2==t.template?t._l(t.goodsItem.data,function(s,i){return t.goodsItem.data.length>0?e("div",{staticClass:"goods clearfix "},[e("div",{staticClass:"goods-inner border-1px-b"},[e("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:s.id,sid:t.store.id}})}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:s.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),s.label?e("div",{staticClass:"label"},[t._v(t._s(s.label))]):t._e()]),t._v(" "),e("div",{staticClass:"shop-info clearfix"},[e("div",{staticClass:"name ellipsis"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(s.content))]),t._v(" "),e("div",{staticClass:"sold"},[t._v("已售"+t._s(s.sailed)+" 赞"+t._s(s.comment_good))]),t._v(" "),1!=s.svip_status||s.discount_price?t._e():e("div",{staticClass:"svip-price-tips"},[e("div",{staticClass:"svip-price"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("span",[t._v(t._s(s.discount)+"折")])]),t._v(" "),e("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"now-price"},[e("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(s.price)),e("span",{staticClass:"font-14 font-bold"},[t._v(t._s(s.unitname_cn))])]),t._v(" "),s.old_price?e("div",{staticClass:"old-price"},[e("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(s.old_price)+"\n\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),1!=s.svip_status||s.discount_price>0?e("div",{staticClass:"discount"},[s.discount?[e("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t")]:t._e()],2):t._e()]),t._v(" "),e("goods-handle",{attrs:{goods:s,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):[t.goodsItem.data&&t.goodsItem.data.length>0?e("div",{staticClass:"goods-list clearfix"},[t._l(t.goodsItem.data,function(s,i){return e("div",{staticClass:"col-50 goods-item"},[e("div",{staticClass:"goods-info"},[e("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:s.id,sid:t.store.id}})}},[s.discount?e("div",{staticClass:"discount"},[e("div",[e("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:s.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),e("div",{staticClass:"goods-name"},[t._v(t._s(s.title))]),t._v(" "),1!=s.svip_status||s.discount_price?e("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t已售"+t._s(s.sailed)+" "),e("div",[t._v("赞"+t._s(s.comment_good))])]):e("div",{staticClass:"svip-price-tips"},[e("div",{staticClass:"svip-price"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("span",{staticClass:"ellipsis"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),e("div",{staticClass:"svip-activity ellipsis"},[t._v("超级会员专享")])]),t._v(" "),e("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t"),e("div",[t._v(t._s(s.price))]),e("span",{staticClass:"font-bold"},[t._v(t._s(s.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),e("goods-handle",{attrs:{goods:s,template:t.template,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)])}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],2):t._e()],t._v(" "),1==t.goodsItem.empty?e("load",{attrs:{type:"loaded",text:"暂无商品"}}):t.goodsItem.loaded?e("load",{attrs:{type:"loaded",text:"已经到底了"}}):t._e()],2)],1)],1):e("van-row",{staticClass:"goods-all"},[e("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[e("div",{ref:"categoryWrapper",style:{height:t.vanColHeight+"px"}},[e("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.tabActive}},[e("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id}})}},[e("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.cateHasGoods,function(s,i){return[e("li",{ref:"categoryItem",refInFor:!0,on:{click:function(s){t.selectCategory(i,s)}}},[s.total>0?e("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:s.title,info:s.total}}):e("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:s.title}})],1)]})],2)],1)]),t._v(" "),e("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[e("div",{ref:"goodsWrapper",style:{height:t.vanColHeight+"px"}},[e("div",[t.coupon.id>0&&1==t.couponStatus?e("div",{ref:"couponWrapper",staticClass:"coupon-show-container"},[e("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t\t¥"),e("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),e("div",{staticClass:"coupon-detail"},[e("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),e("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),e("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t.shopPage?e("div",{ref:"shopPageWrapper",staticClass:"banner"},[t._l(t.shopPage,function(s,i){return[s.wxapp_link?e("div",{staticClass:"banner-item",on:{click:function(e){t.util.jsUrl(s.wxapp_link)}}},[e("img",{attrs:{src:s.thumb}})]):1==s.goodsLength?e("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:t.store.id,id:s.goods[0]}})}},[e("img",{attrs:{src:s.thumb}})]):s.goodsLength>1?e("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/shopPage",query:{sid:t.store.id,shopPageKey:i}})}},[e("img",{attrs:{src:s.thumb}})]):t._e()]})],2):t._e(),t._v(" "),e("ul",t._l(t.cateHasGoods,function(s,i){return e("li",{key:i,ref:"goodsList",refInFor:!0},[e("div",{staticClass:"title border-1px-t"},[e("div",{staticClass:"title-text ellipsis"},[e("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(s.title)+"\n\t\t\t\t\t\t\t\t\t\t"),s.category_min_fee>0?e("div",{staticClass:"limit-tip"},[t._v("最低消费"+t._s(s.category_min_fee)+"元")]):t._e()])]),t._v(" "),2==t.template?t._l(s.goods,function(i,o){return s.goods.length>0?e("div",{key:o,staticClass:"goods clearfix"},[e("div",{staticClass:"goods-inner ",class:{"border-1px-b":o<s.goods.length-1}},[e("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:i.id,sid:t.store.id}})}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),i.label?e("div",{staticClass:"label"},[t._v(t._s(i.label))]):t._e()]),t._v(" "),e("div",{staticClass:"shop-info clearfix"},[e("div",{staticClass:"name ellipsis"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(i.content))]),t._v(" "),e("div",{staticClass:"sold"},[t._v("已售"+t._s(i.sailed)+" 赞"+t._s(i.comment_good))]),t._v(" "),1!=i.svip_status||i.bargain_id?t._e():e("div",{staticClass:"svip-price-tips"},[e("div",{staticClass:"svip-price"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("span",[t._v(t._s(i.discount)+"折")])]),t._v(" "),e("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])]),t._v(" "),e("div",{staticClass:"price"},[e("div",{staticClass:"now-price"},[e("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(i.price)),e("span",{staticClass:"font-14 font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?e("div",{staticClass:"old-price"},[e("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(i.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),1!=i.svip_status||i.bargain_id>0?e("div",{staticClass:"discount"},[i.discount?[e("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2):t._e()]),t._v(" "),e("goods-handle",{attrs:{goods:i,optionId:0,from:"list",templatePage:"1"},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):[s.goods&&s.goods.length>0?e("div",{staticClass:"goods-list clearfix"},[t._l(s.goods,function(s,i){return e("div",{staticClass:"col-50 goods-item"},[e("div",{staticClass:"goods-info"},[e("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:s.id,sid:t.store.id}})}},[s.discount?e("div",{staticClass:"discount"},[e("div",[e("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(s.discount)+"折 限"+t._s(s.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:s.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),e("div",{staticClass:"goods-name"},[t._v(t._s(s.title))]),t._v(" "),1!=s.svip_status||s.bargain_id?e("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t已售"+t._s(s.sailed)+" "),e("div",[t._v("赞"+t._s(s.comment_good))])]):e("div",{staticClass:"svip-price-tips"},[e("div",{staticClass:"svip-price"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("span",{staticClass:"ellipsis"},[t._v(t._s(s.discount)+"折")])]),t._v(" "),e("div",{staticClass:"svip-activity ellipsis"},[t._v("超级会员专享")])]),t._v(" "),e("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),e("div",[t._v(t._s(s.price))]),e("span",{staticClass:"font-bold"},[t._v(t._s(s.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),e("goods-handle",{attrs:{goods:s,template:t.template,optionId:0,from:"list",templatePage:"1"},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)])}),t._v(" "),e("div",{staticStyle:{clear:"both"}})],2):t._e()]],2)}))])])])],1)],1),t._v(" "),t.popupNotInSailTime?e("van-popup",{staticClass:"not-in-time-popup",model:{value:t.popupNotInSailTime,callback:function(s){t.popupNotInSailTime=s},expression:"popupNotInSailTime"}},[e("div",{staticClass:"popup-top"},[t.goodsActive.week_cn?e("div",{staticClass:"popup-item"},[e("div",{staticClass:"popup-title"},[t._v("每周可售日期")]),t._v(" "),e("div",{staticClass:"popup-text"},[t._v(t._s(t.goodsActive.week_cn))])]):t._e(),t._v(" "),t.goodsActive.time_cn?e("div",{staticClass:"popup-item"},[e("div",{staticClass:"popup-title"},[t._v("每天可售时间")]),t._v(" "),e("div",{staticClass:"popup-text"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.time_cn)+"\n\t\t\t\t")])]):t._e()]),t._v(" "),e("div",{staticClass:"popup-bottom border-1px-t",on:{click:function(s){t.popupNotInSailTime=!1}}},[t._v("知道了")])]):t._e(),t._v(" "),t.ParentPopupSpecShow?e("van-popup",{staticClass:"options-popup",model:{value:t.ParentPopupSpecShow,callback:function(s){t.ParentPopupSpecShow=s},expression:"ParentPopupSpecShow"}},[e("div",{staticClass:"options-dialog"},[e("div",{staticClass:"muti-close",on:{click:function(s){t.ParentPopupSpecShow=!1}}}),t._v(" "),e("div",{staticClass:"muti-wrap"},[e("div",{staticClass:"muti-food-title border-1px-b"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.title)+"\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"muti-cont"},[e("div",{staticClass:"muti-cont-inner"},[1==t.goodsActive.is_options?e("div",{staticClass:"muti-sec first"},[e("div",{staticClass:"muti-sec-title"},[t._v("规格")]),t._v(" "),e("div",{staticClass:"muti-choice"},[t._l(t.goodsActive.options,function(s,i){return[e("div",{class:{selected:t.goodsActive.activeOptions.optionSelected==s.id},on:{click:function(e){t.onParentToggleOption(s.id,"","option")}}},[t._v(t._s(s.name))])]})],2)]):t._e(),t._v(" "),1==t.goodsActive.is_attrs?e("div",{staticClass:"muti-sec"},[t._l(t.goodsActive.attrs,function(s,i){return[e("div",{staticClass:"muti-sec-title"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"muti-choice"},[t._l(s.label,function(s,o){return[e("div",{class:{selected:t.goodsActive.activeOptions.attrsSelected[i]==o},on:{click:function(s){t.onParentToggleOption(i,o,"attr")}}},[t._v(t._s(s))])]})],2)]})],2):t._e()])]),t._v(" "),e("div",{staticClass:"muti-choose"},[e("div",{staticClass:"muti-oprt"},[e("div",{staticClass:"muti-cart-oprt clearfix"},[e("div",{staticClass:"add-food"},[e("van-icon",{staticStyle:{"background-color":"#6BBA50"},attrs:{name:"plus"},on:{click:function(s){t.onParentPlus(s,t.goodsActive,"","","1")}}})],1),t._v(" "),t.goodsSpecNum?[e("div",{staticClass:"food-num"},[t._v(t._s(t.goodsSpecNum))]),t._v(" "),e("div",{staticClass:"remove-food"},[e("div",{staticClass:"remove icon icon-minus",on:{click:function(s){t.onParentMinus(t.goodsActive)}}})])]:t._e()],2)]),t._v(" "),e("div",{staticClass:"muti-info"},[e("div",{staticClass:"muti-price"},[t._v("¥"+t._s(t.goodsActive.activeOption.price))]),t._v(" "),e("div",{staticClass:"muti-type"},[t._v("("+t._s(t.goodsActive.activeOption.name)+")")])])])])])]):t._e(),t._v(" "),e("store-cart",{attrs:{show:0==t.activetabs,store:t.store,cart:t.cart}}),t._v(" "),e("transition",{attrs:{name:"loading"}},[t.preLoading?e("iloading"):t._e()],1),t._v(" "),t._l(t.showMoveDot,function(s,i){return e("transition",{key:i,attrs:{appear:""},on:{"after-appear":t.onParentAfterEnter,"before-appear":t.onParentBeforeEnter}},[s?e("div",{staticClass:"parent_move_dot"}):t._e()])}),t._v(" "),t.store.tips&&t.showNotice?e("notice-popup",{attrs:{tips:t.store.tips}}):t._e(),t._v(" "),e("van-popup",{staticClass:"buy-svip",model:{value:t.popupBuySvip,callback:function(s){t.popupBuySvip=s},expression:"popupBuySvip"}},[e("div",{staticClass:"popup-svip-title"},[t._v("客官，专享价限超级会员享受哦")]),t._v(" "),e("div",{staticClass:"svip-img"},[e("div",{staticClass:"svip-vs-left"},[e("i",{staticClass:"icon icon-crownfill"}),t._v(" "),e("div",{staticClass:"font-12"},[t._v("会员专享价")]),t._v(" "),e("div",{staticClass:"svip-vs-price"},[e("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(t.goodsActive.svip_price))])]),t._v(" "),e("div",{staticClass:"svip-vs-right"},[e("div",{staticClass:"svip-putong-title"},[t._v("普通用户价格")]),t._v(" "),e("div",{staticClass:"svip-putong-price"},[e("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(t.goodsActive.price))])])]),t._v(" "),e("div",{staticClass:"buy-svip-text"},[t._v("即刻加入超级会员，尊享众多会员优惠")]),t._v(" "),e("button",{staticClass:"svip-price-btn font-16 margin-15-t"},[e("div",{staticClass:"font-bold",on:{click:function(s){t.onParentPlus(s,t.goodsActive,"","","3")}}},[t._v("会员专享价购买")]),t._v(" "),e("div",{staticClass:"font-12 padding-5-t"},[t._v("(订单结算时成为会员享优惠)")])]),t._v(" "),e("van-button",{staticClass:"price-btn font-16 margin-15-t",attrs:{size:"normal"},on:{click:function(s){t.onParentPlus(s,t.goodsActive,"","","2")}}},[t._v("原价购买")])],1)],2)},staticRenderFns:[]};var S=e("VU/8")(C,y,!1,function(t){e("dDUl")},null,null);s.default=S.exports},dDUl:function(t,s){}});
//# sourceMappingURL=122.818715af3577da12fb73.js.map