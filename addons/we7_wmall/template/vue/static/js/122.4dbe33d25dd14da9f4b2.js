webpackJsonp([122],{"9WX8":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Gu7T"),o=s.n(e),a=s("woOf"),n=s.n(a),d=s("Dd8w"),c=s.n(d),l=s("NYxO"),r=s("mzkE"),v=s("Cz8s"),p=s("NPH5"),_=s("RoZr"),g=s("Vr3d"),u=s("MHEY"),h=s("S+Zb"),m=s("fgl9"),C=s("GQaK"),f=s("5ryX"),y={name:"StoreGoods",data:function(){return{goodsActive:{},popupNotInSailTime:!1,ParentPopupSpecShow:!1,preLoading:!0,goodsLoading:!0,store:{is_rest:0,activity:{num:0}},activetabs:0,swiper_dots:!1,tabswiperable:!0,is_rest:0,status:{options_show:!1,not_in_time_show:!1,cart_show:!1},vanColHeight:0,commentHeight:0,categorySelectedIndex:0,categorySelectedId:0,categoryAll:[],categorySelected:{child:[{}]},childSelectedIndex:0,childSelectedId:0,goodsAll:[],goodsItem:{orderby:{type:"",value:""}},recommend_stores:{},coupon:[],shopPage:{},cart:{num:0},template:2,couponStatus:1,lazyload_goods:"",showMoveDot:[],windowHeight:0,showNotice:!0,cateHasGoods:[],template_page:0,scrollY:0,listHeight:[],tabActive:0,popupBuySvip:!1,follow:{},menu:{css:{},params:{},data:{},position:{left:"15px",bottom:"80px",right:"inherit"}}}},components:{PublicHeader:v.a,PublicFooter:r.a,Load:p.a,StoreCart:_.a,GoodsHandle:g.a,StoreHeader:u.a,noticePopup:h.a,follow:m.a,navigator:f.a},methods:c()({},Object(l.b)(["replaceStore","replaceCart","replaceState"]),{selectPinadan:function(t){if(this.pindan_id=t,t>0){this.query.pindan_id=t;var i=this.util.getUrl({path:"/pages/store/goods",query:{sid:this.sid,order_id:this.order_id,pindan_id:t}});this.$router.push(i)}},showMoveDotFun:function(t,i,s){this.showMoveDot.push(!0),this.elLeft=i,this.elBottom=s},onCollectCoupon:function(){var t=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(i){if((i=i.data.message).errno)return t.util.$toast("领取失败","",1e3),!1;t.couponStatus=0,t.util.$toast(i.message,"",1e3)})},onParentSelectOption:function(t){this.goodsActive=t,this.goods=t,this.ParentPopupSpecShow=!0,this.goods.activeOptions||this.onParentGoodsOptionInit()},onParentGoodsOptionInit:function(){if(this.goodsActive=this.goods,this.goodsActive.activeOptions={option:0,attrs:[],optionSelected:0,attrsSelected:[],num:0},1==this.goodsActive.is_options&&(this.goodsActive.activeOptions.option=this.goodsActive.options[0].id,this.goodsActive.activeOptions.optionSelected=this.goodsActive.options[0].id),1==this.goodsActive.is_attrs)for(var t=0;t<this.goodsActive.attrs.length;t++)this.goodsActive.activeOptions.attrs.push(t+"s0"),this.goodsActive.activeOptions.attrsSelected[t]=0;this.onParentToggleActiveOption()},onParentToggleOption:function(t,i,s){var e=this.goods;"option"==s?(e.activeOptions.option=t,e.activeOptions.optionSelected=t):(e.activeOptions.attrs[t]=t+"s"+i,e.activeOptions.attrsSelected[t]=i),this.goodsActive=e,this.onParentToggleActiveOption()},onParentToggleActiveOption:function(t){var i=this.goodsActive;t?i.activeOptionId=t:(i.activeOptionId=i.activeOptions.option,i.activeOptions.attrs.length>0&&(i.activeOptionId=i.activeOptionId+"_"+i.activeOptions.attrs.join("v"))),i.activeOption=i.options_data[i.activeOptionId],i.activeOption.num=this.parentGetSpecNum(),this.goodsActive=n()({},i)},parentGetSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},onParentPlus:function(t,i,s,e,o){var a=this;this.goodsActive=i;var n=0;if(0==this.icart.pindan_id)if(1==this.icart.is_buysvip)n=1;else if(this.icart.svip_buy_show>=1&&1==i.svip_buy_show){if(1==o)return this.goodsActive.activeOption&&(this.goodsActive.activeOption.origin_price>0?this.goodsActive.origin_price=this.goodsActive.activeOption.origin_price:this.goodsActive.origin_price=this.goodsActive.activeOption.price,this.goodsActive.activeOption.svip_price>0?this.goodsActive.svip_price=this.goodsActive.activeOption.svip_price:this.goodsActive.svip_price=this.goodsActive.activeOption.price),void(this.popupBuySvip=!0);2==o?this.popupBuySvip=!1:3==o&&(this.popupBuySvip=!1,n=1)}var d=i.id||i.goods_id,c=i.activeOptionId||s,l={sid:this.istore.id,goods_id:d,option_id:c,num:1,sign:"+",is_buysvip:n};this.util.request({url:"wmall/store/goods/cart",data:l}).then(function(i){if((i=i.data.message).errno)return a.$toast(i.message),!1;i.message.msg&&a.$toast(i.message.msg);var s=t.target.getBoundingClientRect().left,o=t.target.getBoundingClientRect().bottom;"cart"==e&&(o+=50),a.elLeft=s,a.elBottom=o,a.showMoveDot.push(!0),a.replaceCart(i.message.cart)})},onParentMinus:function(t,i,s){var e=this,o=0;1==this.icart.is_buysvip&&(o=1);var a=t.id||t.goods_id,n=t.activeOptionId||i,d={sid:this.istore.id,goods_id:a,option_id:n,num:1,sign:"-",is_buysvip:o};this.util.request({url:"wmall/store/goods/cart",data:d}).then(function(t){if((t=t.data.message).errno)return e.$toast(t.message),!1;e.replaceCart(t.message.cart)})},onParentPopupNotInSailTime:function(t){this.goodsActive=t,this.popupNotInSailTime=!0},onToggleCategory:function(t,i,s){var e=0;"child"==s?(e=i,this.childSelectedIndex=e,this.categoryAll[this.categorySelectedIndex].childSelectedIndex=e,this.categorySelected=this.categoryAll[this.categorySelectedIndex]):(this.categoryAll[i].childSelectedIndex>0&&(e=this.categoryAll[i].childSelectedIndex),this.categorySelected=this.categoryAll[i],this.categorySelectedIndex=i,this.childSelectedIndex=e,this.categoryAll[i].childSelectedIndex=e),this.categorySelectedId=this.categorySelected.id,this.childSelectedId=0,this.categorySelected.child&&this.categorySelected.child.length>0&&(this.childSelectedId=this.categorySelected.child[e].id),this.onGetGoods()},onGetGoods:function(){var t=this;if(this.goodsLoading,this.goodsAll[this.categorySelectedIndex]||(this.goodsAll[this.categorySelectedIndex]=[]),this.goodsItem=this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex],this.goodsItem){if(this.goodsItem.empty)return!1;if(this.goodsItem.loaded)return console.log("商品全部加载完成"),!1}else this.goodsItem={page:1,psize:30,empty:0,loaded:!1,data:[],orderby:{type:"",value:""}};this.goodsLoading=!0,this.util.request({url:"wmall/store/goods/goods",data:{sid:this.sid,page:this.goodsItem.page,psize:this.goodsItem.psize,cid:this.categorySelectedId,child_id:this.childSelectedId,type:this.goodsItem.orderby.type,value:this.goodsItem.orderby.value}}).then(function(i){t.goodsLoading=!1;var s=i.data.message.message;t.goodsItem.data=[].concat(o()(t.goodsItem.data),o()(s.goods)),t.goodsItem.page++,s.goods.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,s.goods.length||(t.goodsItem.empty=1)),t.goodsAll[t.categorySelectedIndex]||(t.goodsAll[t.categorySelectedIndex]=[]),t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem})},onOrderby:function(t,i){this.goodsItem={page:1,psize:30,empty:0,data:[],orderby:{type:t,value:i}},this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex]=this.goodsItem,this.onGetGoods()},onLoad:function(){var t=this;this.util.request({url:"wmall/store/goods/index",data:{sid:this.sid,order_id:this.order_id}}).then(function(i){t.goodsLoading=!1,t.preLoading=!1;var s=i.data.message;if(s.errno)return t.$toast(s.message),!1;if(s=s.message,t.template_page=s.template_page,1==t.template_page?(t.goodsItem={page:2,psize:30,empty:0,data:s.goods,orderby:{type:"",value:""}},t.goodsItem.data.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,t.goodsItem.data.length||(t.goodsItem.empty=1)),t.categorySelectedId=s.cid,t.childSelectedId=s.child_id,t.goodsAll[t.categorySelectedIndex]=[],t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem,t.categorySelected=s.category[t.categorySelectedIndex]||{}):t.cateHasGoods=s.cate_has_goods,t.store=s.store,t.store.tips){var e="storeNotice"+t.store.id,o=t.util.getStorage(e);!o||o&&!o.notice?t.util.setStorage(e,{notice:1},300):t.showNotice=!1}s.store.data&&s.store.data.shopPage&&(t.shopPage=s.store.data.shopPage),t.coupon=s.coupon,t.categoryAll=s.category,t.is_rest=s.store.is_rest,t.recommend_stores=s.recommend_stores,t.template=s.template,t.lazyload_goods=s.lazyload_goods,t.follow=window.follow,t.util.setWXTitle(t.store.title),t.replaceStore(s.store),t.replaceCart(s.cart.message.cart),t.template_page||t.$nextTick(function(){t._initScroll(),t._calculateHeight()}),t.store.menu&&t.store.menu.data&&(t.menu=t.util.extend(t.menu,t.store.menu.data))})},onParentBeforeEnter:function(t){t.style.bottom=this.windowHeight-this.elBottom+"px",t.style.left=this.elLeft+5+"px",t.style.opacity=0},onParentAfterEnter:function(t){var i=this;t.style.bottom="-20px",t.style.left="20px",t.style.opacity=1,setTimeout(function(){i.replaceState({key:"cart_animate",val:!0})},400)},_initScroll:function(){var t=this;this.categoryScroll=new C.a(this.$refs.categoryWrapper,{click:!0}),this.goodsScroll=new C.a(this.$refs.goodsWrapper,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(i){i.y<=0&&(t.scrollY=Math.abs(Math.round(i.y)));for(var s=t.listHeight.length,e=0;e<s;e++){var o=t.listHeight[e],a=t.listHeight[e+1];a&&t.scrollY>=o&&t.scrollY<a&&e!=t.tabActive&&(t.tabActive=e,t._followScroll(e))}})},_calculateHeight:function(){var t=this.$refs.goodsList,i=0;this.$refs.couponWrapper&&(i+=this.$refs.couponWrapper.clientHeight),this.$refs.shopPageWrapper&&(i+=this.$refs.shopPageWrapper.clientHeight),this.listHeight.push(0);for(var s=0;s<t.length;s++){i+=t[s].clientHeight,this.listHeight.push(i)}},_followScroll:function(t){var i=this.$refs.categoryItem[t];this.categoryScroll.scrollToElement(i,300,0,-100)},selectCategory:function(t,i){if(i._constructed){var s=this.$refs.goodsList[t];this.goodsScroll.scrollToElement(s,500)}}}),watch:{icart:function(){var t=this.icart.data;if(1==this.template_page){var i=this.categoryAll;if(t)for(var s in i)if(i[s].total=0,i[s].child&&i[s].child.length>0)for(var e in i[s].child){i[s].child[e].total=0;var o=0,a=0;for(var n in t)for(var d in t[n])t[n][d].cid==i[s].id&&(a+=t[n][d].num,i[s].total=a,t[n][d].child_id==i[s].child[e].id&&(o+=t[n][d].num,i[s].child[e].total=o))}else{a=0;for(var n in t)for(var d in t[n])t[n][d].cid==i[s].id&&(a+=t[n][d].num,i[s].total=a)}else for(var s in i)if(i[s].total=0,i[s].child)for(var e in i[s].child)i[s].child[e].total=0;this.categoryAll=i}else{var c=this.cateHasGoods;if(t)for(var l in c){c[l].total=0;a=0;for(var n in t)for(var d in t[n])t[n][d].cid==c[l].id&&(a+=t[n][d].num,c[l].total=a)}else for(var l in c)c[l].total=0;this.cateHasGoods=c}},$route:function(t,i){this.onLoad()}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.order_id=this.query.order_id,this.pindan_id=0,this.query.pindan_id>0&&(this.pindan_id=this.query.pindan_id))},computed:c()({},Object(l.c)(["istore","icart"]),{goodsSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0}}),mounted:function(){var t=this;this.onLoad(),this.$nextTick(function(){var i=document.documentElement.clientHeight,s=document.getElementsByClassName("header")[0].clientHeight,e=document.getElementsByClassName("store-tabs")[0].clientHeight;if(t.vanColHeight=i-s-e-50,document.getElementById("public-header")){var o=document.getElementById("public-header").clientHeight;t.vanColHeight=t.vanColHeight-o}t.windowHeight=window.innerHeight})}},b={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"goods-store"}},[t.follow&&1==t.follow.status?s("follow",{attrs:{follow:t.follow}}):t._e(),t._v(" "),t.isWeixin?t._e():s("public-header",{attrs:{title:t.store.title}}),t._v(" "),s("store-header",{attrs:{store:t.store}}),t._v(" "),s("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[s("div",{staticClass:"tab-item active"},[t._v("商品")]),t._v(" "),s("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/comment?sid="+t.store.id}),tag:"div"}},[t._v("评价")]),t._v(" "),s("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/index?sid="+t.store.id}),tag:"div"}},[t._v("商家")]),t._v(" "),1==t.store.pindan_status&&0==t.pindan_id?s("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/pindan",query:{sid:t.store.id,pindan_id:t.pindan_id}})}},[s("div",{staticClass:"pindan-item"},[t._v("邀请拼单")])]):t._e()],1),t._v(" "),s("div",{staticClass:"goods-container"},[1==t.template_page?s("van-row",{staticClass:"goods-some"},[s("van-col",{style:{height:t.vanColHeight+"px","padding-bottom":t.store.menu&&t.store.menu.path&&1==t.store.menu.path.goods?"75px":"0px","background-color":"#f8f8f8"},attrs:{span:"5"}},[s("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.categorySelectedIndex}},[s("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id,pindan_id:t.pindan_id}})}},[s("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.categoryAll,function(i,e){return[i.total>0?s("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:i.title,info:i.total},on:{click:function(s){return t.onToggleCategory(i.id,e,"")}}}):s("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:i.title},on:{click:function(s){return t.onToggleCategory(i.id,e,"")}}})]})],2)],1),t._v(" "),s("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[s("van-list",{attrs:{finished:t.goodsItem.loaded,offset:50},on:{load:t.onGetGoods},model:{value:t.goodsLoading,callback:function(i){t.goodsLoading=i},expression:"goodsLoading"}},[t.coupon.id>0&&1==t.couponStatus?s("div",{staticClass:"coupon-show-container"},[s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t¥"),s("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),s("div",{staticClass:"coupon-detail"},[s("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),s("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),s("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t.shopPage?s("div",{staticClass:"banner"},[t._l(t.shopPage,function(i,e){return[i.wxapp_link?s("div",{staticClass:"banner-item",on:{click:function(s){return t.util.jsUrl(i.wxapp_link)}}},[s("img",{attrs:{src:i.thumb}})]):1==i.goodsLength?s("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:t.store.id,id:i.goods[0],pindan_id:t.pindan_id}})}},[s("img",{attrs:{src:i.thumb}})]):i.goodsLength>1?s("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/shopPage",query:{sid:t.store.id,shopPageKey:e,pindan_id:t.pindan_id}})}},[s("img",{attrs:{src:i.thumb}})]):t._e()]})],2):t._e(),t._v(" "),t.categorySelected.child?[t.categorySelected.child.length>0?s("div",{staticClass:"tag2-list"},t._l(t.categorySelected.child,function(i,e){return s("div",{staticClass:"tag2-item",class:{selected:e==t.childSelectedIndex},on:{click:function(s){return t.onToggleCategory(i.id,e,"child")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t\t\t\t\t"),i.total>0?s("div",{class:{dot:i.total}}):t._e()])}),0):t._e()]:t._e(),t._v(" "),s("div",{staticClass:"title border-1px-t"},[s("div",{staticClass:"title-text ellipsis"},[s("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.categorySelected.child&&t.categorySelected.child.length>0?t.categorySelected.child[t.childSelectedIndex].title:t.categorySelected.title)+"\n\t\t\t\t\t\t\t"),t.categorySelected.min_fee>0?s("div",{staticClass:"limit-tip"},[t._v("最低消费"+t._s(t.categorySelected.min_fee)+"元")]):t._e()]),t._v(" "),s("div",{staticClass:"title-rank"},[s("div",{staticClass:"sales ",class:{selected:"sailed"==t.goodsItem.orderby.type},on:{click:function(i){return t.onOrderby("sailed","desc")}}},[t._v("销量")]),t._v(" "),s("div",{staticClass:"shu"},[t._v("|")]),t._v(" "),s("div",{staticClass:"prionToggleCategoryce-container",on:{click:function(i){t.onOrderby("price","desc"==t.goodsItem.orderby.value?"asc":"desc")}}},[s("div",{staticClass:"price"},[t._v("价格")]),t._v(" "),s("div",{staticClass:"triangle"},[s("div",{staticClass:"triangle-top",class:{selected:"price"==t.goodsItem.orderby.type&&"asc"==t.goodsItem.orderby.value}}),t._v(" "),s("div",{staticClass:"triangle-bottom ",class:{selected:"price"==t.goodsItem.orderby.type&&"desc"==t.goodsItem.orderby.value}})])])])]),t._v(" "),2==t.template?t._l(t.goodsItem.data,function(i,e){return t.goodsItem.data.length>0?s("div",{staticClass:"goods clearfix "},[s("div",{staticClass:"goods-inner border-1px-b"},[s("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:i.id,sid:t.store.id,pindan_id:t.pindan_id}})}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),i.label?s("div",{staticClass:"label"},[t._v(t._s(i.label))]):t._e()]),t._v(" "),s("div",{staticClass:"shop-info clearfix"},[s("div",[s("div",{staticClass:"name ellipsis"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(i.content))]),t._v(" "),s("div",{staticClass:"sold"},[t._v("已售"+t._s(i.sailed)+" 赞"+t._s(i.comment_good))]),t._v(" "),1!=i.svip_status||i.discount_price?t._e():s("div",{staticClass:"svip-price-tips"},[s("div",{staticClass:"svip-price"},[s("i",{staticClass:"icon icon-crownfill"}),t._v(" "),s("span",[t._v(t._s(i.discount)+"折")])]),t._v(" "),s("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])])]),t._v(" "),s("div",[s("div",{staticClass:"price"},[s("div",{staticClass:"now-price"},[s("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(i.price)),s("span",{staticClass:"font-14 font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?s("div",{staticClass:"old-price"},[s("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(i.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),1!=i.svip_status||i.discount_price>0?s("div",{staticClass:"discount"},[i.discount?[s("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份 "+t._s(i.unitnum>1?i.unitnum+"份起购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t")]:i.unitnum>1?[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(i.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2):i.unitnum>1?s("div",{staticClass:"discount"},[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(i.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t")],1):t._e()])]),t._v(" "),s("goods-handle",{attrs:{goods:i,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):1==t.template?[t.goodsItem.data&&t.goodsItem.data.length>0?s("div",{staticClass:"goods-list clearfix"},[t._l(t.goodsItem.data,function(i,e){return s("div",{staticClass:"col-50 goods-item"},[s("div",{staticClass:"goods-info"},[s("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:i.id,sid:t.store.id,pindan_id:t.pindan_id}})}},[(1!=i.svip_status||i.discount_price>0)&&i.discount>0?s("div",{staticClass:"discount"},[s("div",[s("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份 "+t._s(i.unitnum>1?i.unitnum+"份起":"")+"\n\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),i.unitnum>1&&!i.discount_price?s("div",{staticClass:"discount"},[s("div",[s("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(i.unitnum)+"份起\n\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),s("div",{staticClass:"goods-name"},[t._v(t._s(i.title))]),t._v(" "),1!=i.svip_status||i.discount_price?s("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t已售"+t._s(i.sailed)+" "),s("div",[t._v("赞"+t._s(i.comment_good))])]):s("div",{staticClass:"svip-price-tips"},[s("div",{staticClass:"svip-price"},[s("span",{staticClass:"ellipsis"},[t._v(t._s(i.discount)+"折")])]),t._v(" "),s("div",{staticClass:"svip-activity ellipsis"},[t._v("超级会员专享")])]),t._v(" "),s("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t"),s("div",[t._v(t._s(i.price))]),s("span",{staticClass:"font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?s("div",{staticClass:"old-price"},[t._v(t._s(i.old_price))]):t._e(),t._v(" "),s("goods-handle",{attrs:{goods:i,template:t.template,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2):t._e()]:[t.goodsItem.data&&t.goodsItem.data.length>0?s("div",{staticClass:"big-goods-list"},t._l(t.goodsItem.data,function(i,e){return s("div",{staticClass:"big-goods-item"},[s("router-link",{staticClass:"big-goods-img",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:i.id,sid:t.store.id,pindan_id:t.pindan_id}})}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]}),t._v(" "),i.label?s("div",{staticClass:"label"},[t._v(t._s(i.label))]):t._e(),t._v(" "),s("div",{staticClass:"sell-info"},[t._v("已售"+t._s(i.sailed)+" 赞"+t._s(i.comment_good))])]),t._v(" "),s("div",{staticClass:"goods-wrap"},[s("div",{staticClass:"goods-info"},[s("div",{staticClass:"goods-name ellipsis"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(i.content))]),t._v(" "),1!=i.svip_status||i.discount_price?t._e():s("div",{staticClass:"svip-price-tips"},[s("div",{staticClass:"svip-price"},[s("i",{staticClass:"icon icon-crownfill"}),t._v(" "),s("span",[t._v(t._s(i.discount)+"折")])]),t._v(" "),s("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])]),t._v(" "),s("div",{staticClass:"price flex"},[s("div",{staticClass:"now-price"},[s("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(i.price)),s("span",{staticClass:"font-14 font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?s("div",{staticClass:"old-price"},[s("span",{staticClass:"price-icon"},[t._v("¥")]),t._v(t._s(i.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),1!=i.svip_status||i.discount_price>0?s("div",{staticClass:"discount font-12 c-danger"},[i.discount?[s("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份 "+t._s(i.unitnum>1?i.unitnum+"份起购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t")]:i.unitnum>1?[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(i.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2):i.unitnum>1?s("div",{staticClass:"discount font-12 c-danger"},[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(i.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),s("goods-handle",{attrs:{goods:i,optionId:0,from:"list"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)],1)}),0):t._e()],t._v(" "),1==t.goodsItem.empty?s("load",{attrs:{type:"loaded",text:"暂无商品"}}):t.goodsItem.loaded?s("load",{attrs:{type:"loaded",text:"已经到底了"}}):t._e()],2)],1)],1):s("van-row",{staticClass:"goods-all"},[s("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[s("div",{ref:"categoryWrapper",style:{height:t.vanColHeight+"px"}},[s("van-badge-group",{staticClass:"tabs-list",style:{"padding-bottom":t.store.menu&&t.store.menu.path&&1==t.store.menu.path.goods?"75px":"0px","background-color":"#f8f8f8"},attrs:{"active-key":t.tabActive}},[s("router-link",{staticClass:"van-badge badge-search",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/search",query:{sid:t.store.id,pindan_id:t.pindan_id}})}},[s("i",{staticClass:"icon icon-search"})]),t._v(" "),t._l(t.cateHasGoods,function(i,e){return[s("li",{ref:"categoryItem",refInFor:!0,on:{click:function(i){return t.selectCategory(e,i)}}},[i.total>0?s("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:i.title,info:i.total}}):s("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:i.title}})],1)]})],2)],1)]),t._v(" "),s("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[s("div",{ref:"goodsWrapper",style:{height:t.vanColHeight+"px"}},[s("div",[t.coupon.id>0&&1==t.couponStatus?s("div",{ref:"couponWrapper",staticClass:"coupon-show-container"},[s("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t\t¥"),s("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),s("div",{staticClass:"coupon-detail"},[s("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),s("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),s("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t.shopPage?s("div",{ref:"shopPageWrapper",staticClass:"banner"},[t._l(t.shopPage,function(i,e){return[i.wxapp_link?s("div",{staticClass:"banner-item",on:{click:function(s){return t.util.jsUrl(i.wxapp_link)}}},[s("img",{attrs:{src:i.thumb}})]):1==i.goodsLength?s("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{sid:t.store.id,id:i.goods[0],pindan_id:t.pindan_id}})}},[s("img",{attrs:{src:i.thumb}})]):i.goodsLength>1?s("router-link",{staticClass:"banner-item",attrs:{to:t.util.getUrl({path:"/pages/store/shopPage",query:{sid:t.store.id,shopPageKey:e,pindan_id:t.pindan_id}})}},[s("img",{attrs:{src:i.thumb}})]):t._e()]})],2):t._e(),t._v(" "),s("ul",t._l(t.cateHasGoods,function(i,e){return s("li",{key:e,ref:"goodsList",refInFor:!0},[s("div",{staticClass:"title border-1px-t"},[s("div",{staticClass:"title-text ellipsis"},[s("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(i.title)+"\n\t\t\t\t\t\t\t\t\t\t"),i.category_min_fee>0?s("div",{staticClass:"limit-tip"},[t._v("最低消费"+t._s(i.category_min_fee)+"元")]):t._e()])]),t._v(" "),2==t.template?t._l(i.goods,function(e,o){return i.goods.length>0?s("div",{key:o,staticClass:"goods clearfix"},[s("div",{staticClass:"goods-inner ",class:{"border-1px-b":o<i.goods.length-1}},[s("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:e.id,sid:t.store.id,pindan_id:t.pindan_id}})}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),e.label?s("div",{staticClass:"label"},[t._v(t._s(e.label))]):t._e()]),t._v(" "),s("div",{staticClass:"shop-info clearfix"},[s("div",[s("div",{staticClass:"name ellipsis"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(e.content))]),t._v(" "),s("div",{staticClass:"sold"},[t._v("已售"+t._s(e.sailed)+" 赞"+t._s(e.comment_good))]),t._v(" "),1!=e.svip_status||e.bargain_id?t._e():s("div",{staticClass:"svip-price-tips"},[s("div",{staticClass:"svip-price"},[s("i",{staticClass:"icon icon-crownfill"}),t._v(" "),s("span",[t._v(t._s(e.discount)+"折")])]),t._v(" "),s("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])])]),t._v(" "),s("div",[s("div",{staticClass:"price"},[s("div",{staticClass:"now-price"},[s("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(e.price)),s("span",{staticClass:"font-14 font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price?s("div",{staticClass:"old-price"},[s("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(e.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),1!=e.svip_status||e.bargain_id>0?s("div",{staticClass:"discount"},[e.discount?[s("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份 "+t._s(e.unitnum>1?e.unitnum+"份起购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:e.unitnum>1?[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(e.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2):e.unitnum>1?s("div",{staticClass:"discount"},[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(e.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()])]),t._v(" "),s("goods-handle",{attrs:{goods:e,optionId:0,from:"list",templatePage:"1"},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):1==t.template?[i.goods&&i.goods.length>0?s("div",{staticClass:"goods-list clearfix"},[t._l(i.goods,function(i,e){return s("div",{staticClass:"col-50 goods-item"},[s("div",{staticClass:"goods-info"},[s("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:i.id,sid:t.store.id,pindan_id:t.pindan_id}})}},[(1!=i.svip_status||i.bargain_id>0)&&i.discount>0?s("div",{staticClass:"discount"},[s("div",[s("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份 "+t._s(i.unitnum>1?i.unitnum+"份起":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),i.unitnum>1&&!i.bargain_id?s("div",{staticClass:"discount"},[s("div",[s("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(i.unitnum)+"份起\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")],1)]):t._e(),t._v(" "),s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),s("div",{staticClass:"goods-name"},[t._v(t._s(i.title))]),t._v(" "),1!=i.svip_status||i.bargain_id?s("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t已售"+t._s(i.sailed)+" "),s("div",[t._v("赞"+t._s(i.comment_good))])]):s("div",{staticClass:"svip-price-tips"},[s("div",{staticClass:"svip-price"},[s("span",{staticClass:"ellipsis"},[t._v(t._s(i.discount)+"折")])]),t._v(" "),s("div",{staticClass:"svip-activity ellipsis"},[t._v("超级会员专享")])]),t._v(" "),s("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),s("div",[t._v(t._s(i.price))]),s("span",{staticClass:"font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?s("div",{staticClass:"old-price"},[t._v(t._s(i.old_price))]):t._e(),t._v(" "),s("goods-handle",{attrs:{goods:i,template:t.template,optionId:0,from:"list",templatePage:"1"},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)])}),t._v(" "),s("div",{staticStyle:{clear:"both"}})],2):t._e()]:[i.goods.length>0?s("div",{staticClass:"big-goods-list"},t._l(i.goods,function(i,e){return s("div",{key:e,staticClass:"big-goods-item"},[s("router-link",{staticClass:"big-goods-img",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/store/goodsDetail",query:{id:i.id,sid:t.store.id,pindan_id:t.pindan_id}})}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]}),t._v(" "),i.label?s("div",{staticClass:"label"},[t._v(t._s(i.label))]):t._e(),t._v(" "),s("div",{staticClass:"sell-info"},[t._v("已售"+t._s(i.sailed)+" 赞"+t._s(i.comment_good))])]),t._v(" "),s("div",{staticClass:"goods-wrap"},[s("div",{staticClass:"goods-info"},[s("div",{staticClass:"goods-name ellipsis"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"description"},[t._v(t._s(i.content))]),t._v(" "),1!=i.svip_status||i.bargain_id?t._e():s("div",{staticClass:"svip-price-tips"},[s("div",{staticClass:"svip-price"},[s("i",{staticClass:"icon icon-crownfill"}),t._v(" "),s("span",[t._v(t._s(i.discount)+"折")])]),t._v(" "),s("div",{staticClass:"svip-activity"},[t._v("超级会员专享")])]),t._v(" "),s("div",{staticClass:"price flex"},[s("div",{staticClass:"now-price"},[s("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(i.price)),s("span",{staticClass:"font-14 font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?s("div",{staticClass:"old-price"},[s("span",{staticClass:"price-icon"},[t._v("¥")]),t._v(t._s(i.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),1!=i.svip_status||i.bargain_id>0?s("div",{staticClass:"discount font-12 c-danger"},[i.discount?[s("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份 "+t._s(i.unitnum>1?i.unitnum+"份起购":"")+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:i.unitnum>1?[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(i.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2):i.unitnum>1?s("div",{staticClass:"discount font-12 c-danger"},[s("van-icon",{attrs:{name:"tag"}}),t._v(t._s(i.unitnum)+"份起购\n\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),s("goods-handle",{attrs:{goods:i,optionId:0,from:"list",templatePage:"1"},on:{onParentPlus:t.onParentPlus,onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)],1)}),0):t._e()]],2)}),0)])])])],1)],1),t._v(" "),t.popupNotInSailTime?s("van-popup",{staticClass:"not-in-time-popup",model:{value:t.popupNotInSailTime,callback:function(i){t.popupNotInSailTime=i},expression:"popupNotInSailTime"}},[s("div",{staticClass:"popup-top"},[t.goodsActive.week_cn?s("div",{staticClass:"popup-item"},[s("div",{staticClass:"popup-title"},[t._v("每周可售日期")]),t._v(" "),s("div",{staticClass:"popup-text"},[t._v(t._s(t.goodsActive.week_cn))])]):t._e(),t._v(" "),t.goodsActive.time_cn?s("div",{staticClass:"popup-item"},[s("div",{staticClass:"popup-title"},[t._v("每天可售时间")]),t._v(" "),s("div",{staticClass:"popup-text"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.time_cn)+"\n\t\t\t\t")])]):t._e()]),t._v(" "),s("div",{staticClass:"popup-bottom border-1px-t",on:{click:function(i){t.popupNotInSailTime=!1}}},[t._v("知道了")])]):t._e(),t._v(" "),t.ParentPopupSpecShow?s("van-popup",{staticClass:"options-popup",model:{value:t.ParentPopupSpecShow,callback:function(i){t.ParentPopupSpecShow=i},expression:"ParentPopupSpecShow"}},[s("div",{staticClass:"options-dialog"},[s("div",{staticClass:"muti-close",on:{click:function(i){t.ParentPopupSpecShow=!1}}}),t._v(" "),s("div",{staticClass:"muti-wrap"},[s("div",{staticClass:"muti-food-title border-1px-b"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.title)+"\n\t\t\t\t")]),t._v(" "),s("div",{staticClass:"muti-cont"},[s("div",{staticClass:"muti-cont-inner"},[1==t.goodsActive.is_options?s("div",{staticClass:"muti-sec first"},[s("div",{staticClass:"muti-sec-title"},[t._v("规格")]),t._v(" "),s("div",{staticClass:"muti-choice"},[t._l(t.goodsActive.options,function(i,e){return[s("div",{class:{selected:t.goodsActive.activeOptions.optionSelected==i.id},on:{click:function(s){return t.onParentToggleOption(i.id,"","option")}}},[t._v(t._s(i.name))])]})],2)]):t._e(),t._v(" "),1==t.goodsActive.is_attrs?s("div",{staticClass:"muti-sec"},[t._l(t.goodsActive.attrs,function(i,e){return[s("div",{staticClass:"muti-sec-title"},[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"muti-choice"},[t._l(i.label,function(i,o){return[s("div",{class:{selected:t.goodsActive.activeOptions.attrsSelected[e]==o},on:{click:function(i){return t.onParentToggleOption(e,o,"attr")}}},[t._v(t._s(i))])]})],2)]})],2):t._e()])]),t._v(" "),s("div",{staticClass:"muti-choose"},[s("div",{staticClass:"muti-oprt"},[s("div",{staticClass:"muti-cart-oprt clearfix"},[s("div",{staticClass:"add-food"},[s("van-icon",{staticStyle:{"background-color":"#6BBA50"},attrs:{name:"plus"},on:{click:function(i){return t.onParentPlus(i,t.goodsActive,"","","1")}}})],1),t._v(" "),t.goodsSpecNum?[s("div",{staticClass:"food-num"},[t._v(t._s(t.goodsSpecNum))]),t._v(" "),s("div",{staticClass:"remove-food"},[s("div",{staticClass:"remove icon icon-minus",on:{click:function(i){return t.onParentMinus(t.goodsActive)}}})])]:t._e()],2)]),t._v(" "),s("div",{staticClass:"muti-info"},[s("div",{staticClass:"muti-price"},[t._v("¥"+t._s(t.goodsActive.activeOption.price))]),t._v(" "),s("div",{staticClass:"muti-type"},[t._v("("+t._s(t.goodsActive.activeOption.name)+")")])])])])])]):t._e(),t._v(" "),s("store-cart",{attrs:{show:0==t.activetabs,store:t.store,cart:t.cart,pindan_id:t.pindan_id},on:{selectPinadan:t.selectPinadan}}),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.preLoading?s("iloading"):t._e()],1),t._v(" "),t._l(t.showMoveDot,function(i,e){return s("transition",{key:e,attrs:{appear:""},on:{"after-appear":t.onParentAfterEnter,"before-appear":t.onParentBeforeEnter}},[i?s("div",{staticClass:"parent_move_dot"}):t._e()])}),t._v(" "),t.store.tips&&t.showNotice?s("notice-popup",{attrs:{tips:t.store.tips}}):t._e(),t._v(" "),s("van-popup",{staticClass:"buy-svip",model:{value:t.popupBuySvip,callback:function(i){t.popupBuySvip=i},expression:"popupBuySvip"}},[s("div",{staticClass:"popup-svip-title"},[t._v("客官，专享价限超级会员享受哦")]),t._v(" "),s("div",{staticClass:"svip-img"},[s("div",{staticClass:"svip-vs-left"},[s("i",{staticClass:"icon icon-crownfill"}),t._v(" "),s("div",{staticClass:"font-12"},[t._v("会员专享价")]),t._v(" "),s("div",{staticClass:"svip-vs-price"},[s("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(t.goodsActive.svip_price))])]),t._v(" "),s("div",{staticClass:"svip-vs-right"},[s("div",{staticClass:"svip-putong-title"},[t._v("普通用户价格")]),t._v(" "),s("div",{staticClass:"svip-putong-price"},[s("span",{staticClass:"font-14"},[t._v("¥")]),t._v(t._s(t.goodsActive.origin_price))])])]),t._v(" "),s("div",{staticClass:"buy-svip-text"},[t._v("即刻加入超级会员，尊享众多会员优惠")]),t._v(" "),s("button",{staticClass:"svip-price-btn font-16 margin-15-t"},[s("div",{staticClass:"font-bold",on:{click:function(i){return t.onParentPlus(i,t.goodsActive,"","","3")}}},[t._v("会员专享价购买")]),t._v(" "),s("div",{staticClass:"font-12 padding-5-t"},[t._v("(订单结算时成为会员享优惠)")])]),t._v(" "),s("van-button",{staticClass:"price-btn font-16 margin-15-t",attrs:{size:"normal"},on:{click:function(i){return t.onParentPlus(i,t.goodsActive,"","","2")}}},[t._v("原价购买")])],1),t._v(" "),t.store.menu&&t.store.menu.path&&1==t.store.menu.path.goods?[s("navigator",{attrs:{menu:t.menu}})]:t._e()],2)},staticRenderFns:[]};var S=s("VU/8")(y,b,!1,function(t){s("nPPC")},null,null);i.default=S.exports},nPPC:function(t,i){}});