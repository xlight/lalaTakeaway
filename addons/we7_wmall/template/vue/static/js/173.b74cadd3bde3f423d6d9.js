webpackJsonp([173],{"Y+G6":function(t,e){},qRf9:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Gu7T"),s=o.n(i),a=o("woOf"),l=o.n(a),c=o("Dd8w"),n=o.n(c),d=o("NYxO"),r=o("mzkE"),v=o("NPH5"),p=o("RoZr"),g=o("Vr3d"),_=o("MHEY"),h=o("S+Zb"),u=o("GQaK"),m={name:"StoreGoods",data:function(){return{goodsActive:{},popupNotInSailTime:!1,ParentPopupSpecShow:!1,preLoading:!0,goodsLoading:!0,store:{is_rest:0,activity:{num:0}},activetabs:0,swiper_dots:!1,tabswiperable:!0,is_rest:0,status:{options_show:!1,not_in_time_show:!1,cart_show:!1},vanColHeight:0,commentHeight:0,categorySelectedIndex:0,categorySelectedId:0,categoryAll:[],categorySelected:{child:[{}]},childSelectedIndex:0,childSelectedId:0,goodsAll:[],goodsItem:{orderby:{type:"",value:""}},table_category:{},coupon:[],cart:{num:0},template:2,couponStatus:1,lazyload_goods:"",showMoveDot:[],windowHeight:0,showNotice:!0,cateHasGoods:[],template_page:0,scrollY:0,listHeight:[],tabActive:0}},components:{PublicFooter:r.a,Load:v.a,StoreCart:p.a,GoodsHandle:g.a,StoreHeader:_.a,noticePopup:h.a},methods:n()({},Object(d.b)(["replaceStore","replaceCart","replaceState"]),{showMoveDotFun:function(t,e,o){this.showMoveDot.push(!0),this.elLeft=e,this.elBottom=o},onCollectCoupon:function(){var t=this;this.util.request({url:"wmall/channel/coupon/get",data:{sid:this.sid}}).then(function(e){if((e=e.data.message).errno)return t.util.$toast("领取失败","",1e3),!1;t.couponStatus=0,t.util.$toast(e.message,"",1e3)})},onParentSelectOption:function(t){this.goodsActive=t,this.goods=t,this.ParentPopupSpecShow=!0,this.goods.activeOptions||this.onParentGoodsOptionInit()},onParentGoodsOptionInit:function(){if(this.goodsActive=this.goods,this.goodsActive.activeOptions={option:0,attrs:[],optionSelected:0,attrsSelected:[],num:0},1==this.goodsActive.is_options&&(this.goodsActive.activeOptions.option=this.goodsActive.options[0].id,this.goodsActive.activeOptions.optionSelected=this.goodsActive.options[0].id),1==this.goodsActive.is_attrs)for(var t=0;t<this.goodsActive.attrs.length;t++)this.goodsActive.activeOptions.attrs.push(t+"s0"),this.goodsActive.activeOptions.attrsSelected[t]=0;this.onParentToggleActiveOption()},onParentToggleOption:function(t,e,o){var i=this.goods;"option"==o?(i.activeOptions.option=t,i.activeOptions.optionSelected=t):(i.activeOptions.attrs[t]=t+"s"+e,i.activeOptions.attrsSelected[t]=e),this.goodsActive=i,this.onParentToggleActiveOption()},onParentToggleActiveOption:function(t){var e=this.goodsActive;t?e.activeOptionId=t:(e.activeOptionId=e.activeOptions.option,e.activeOptions.attrs.length>0&&(e.activeOptionId=e.activeOptionId+"_"+e.activeOptions.attrs.join("v"))),e.activeOption=e.options_data[e.activeOptionId],e.activeOption.num=this.parentGetSpecNum(),this.goodsActive=l()({},e)},parentGetSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},onParentPlus:function(t,e,o,i){var s=this,a=e.id||e.goods_id,l=e.activeOptionId||o,c={sid:this.istore.id,goods_id:a,option_id:l,num:1,sign:"+"};this.util.request({url:"wmall/store/reserve/cart",data:c}).then(function(e){if((e=e.data.message).errno)return s.$toast(e.message),!1;e.message.msg&&s.$toast(e.message.msg);var o=t.target.getBoundingClientRect().left,a=t.target.getBoundingClientRect().bottom;"cart"==i&&(a+=50),s.elLeft=o,s.elBottom=a,s.showMoveDot.push(!0),s.replaceCart(e.message.cart)})},onParentMinus:function(t,e,o){var i=this,s=t.id||t.goods_id,a=t.activeOptionId||e,l={sid:this.istore.id,goods_id:s,option_id:a,num:1,sign:"-"};this.util.request({url:"wmall/store/reserve/cart",data:l}).then(function(t){if((t=t.data.message).errno)return i.$toast(t.message),!1;i.replaceCart(t.message.cart)})},onParentPopupNotInSailTime:function(t){this.goodsActive=t,this.popupNotInSailTime=!0},onToggleCategory:function(t,e,o){var i=0;"child"==o?(i=e,this.childSelectedIndex=i,this.categoryAll[this.categorySelectedIndex].childSelectedIndex=i,this.categorySelected=this.categoryAll[this.categorySelectedIndex]):(this.categoryAll[e].childSelectedIndex>0&&(i=this.categoryAll[e].childSelectedIndex),this.categorySelected=this.categoryAll[e],this.categorySelectedIndex=e,this.childSelectedIndex=i,this.categoryAll[e].childSelectedIndex=i),this.categorySelectedId=this.categorySelected.id,this.childSelectedId=0,this.categorySelected.child&&this.categorySelected.child.length>0&&(this.childSelectedId=this.categorySelected.child[i].id),this.onGetGoods()},onGetGoods:function(){var t=this;if(this.goodsLoading,this.goodsAll[this.categorySelectedIndex]||(this.goodsAll[this.categorySelectedIndex]=[]),this.goodsItem=this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex],this.goodsItem){if(this.goodsItem.empty)return!1;if(this.goodsItem.loaded)return console.log("商品全部加载完成"),!1}else this.goodsItem={page:1,psize:30,empty:0,loaded:!1,data:[],orderby:{type:"",value:""}};this.goodsLoading=!0,this.util.request({url:"wmall/store/reserve/goods",data:{sid:this.sid,page:this.goodsItem.page,psize:this.goodsItem.psize,cid:this.categorySelectedId,child_id:this.childSelectedId,type:this.goodsItem.orderby.type,value:this.goodsItem.orderby.value}}).then(function(e){t.goodsLoading=!1;var o=e.data.message.message;t.goodsItem.data=[].concat(s()(t.goodsItem.data),s()(o.goods)),t.goodsItem.page++,o.goods.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,o.goods.length||(t.goodsItem.empty=1)),t.goodsAll[t.categorySelectedIndex]||(t.goodsAll[t.categorySelectedIndex]=[]),t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem})},onOrderby:function(t,e){this.goodsItem={page:1,psize:30,empty:0,data:[],orderby:{type:t,value:e}},this.goodsAll[this.categorySelectedIndex][this.childSelectedIndex]=this.goodsItem,this.onGetGoods()},onLoad:function(){var t=this;this.util.request({url:"wmall/store/reserve/goodsIndex_vue",data:{sid:this.sid,table_cid:this.table_cid}}).then(function(e){t.goodsLoading=!1,t.preLoading=!1;var o=e.data.message;if(o.errno)return t.$toast(o.message),!1;if(o=o.message,t.template_page=o.template_page,1==t.template_page?(t.goodsItem={page:2,psize:30,empty:0,data:o.goods,orderby:{type:"",value:""}},t.goodsItem.data.length<t.goodsItem.psize&&(t.goodsItem.loaded=!0,t.goodsItem.data.length||(t.goodsItem.empty=1)),t.categorySelectedId=o.cid,t.childSelectedId=o.child_id,t.goodsAll[t.categorySelectedIndex]=[],t.goodsAll[t.categorySelectedIndex][t.childSelectedIndex]=t.goodsItem,t.categorySelected=o.category[t.categorySelectedIndex]||{}):t.cateHasGoods=o.cate_has_goods,t.store=o.store,t.store.tips){var i="storeNotice"+t.store.id,s=t.util.getStorage(i);!s||s&&!s.notice?t.util.setStorage(i,{notice:1},300):t.showNotice=!1}t.coupon=o.coupon,t.categoryAll=o.category,t.is_rest=o.store.is_rest,t.table_category=o.table_category,t.template=o.template,t.lazyload_goods=o.lazyload_goods,t.util.setWXTitle(t.store.title),t.replaceStore(o.store),t.replaceCart(o.cart.message.cart),t.template_page||t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},onParentBeforeEnter:function(t){t.style.bottom=this.windowHeight-this.elBottom+"px",t.style.left=this.elLeft+5+"px",t.style.opacity=0},onParentAfterEnter:function(t){var e=this;t.style.bottom="-20px",t.style.left="20px",t.style.opacity=1,setTimeout(function(){e.replaceState({key:"cart_animate",val:!0})},400)},_initScroll:function(){var t=this;this.categoryScroll=new u.a(this.$refs.categoryWrapper,{click:!0}),this.goodsScroll=new u.a(this.$refs.goodsWrapper,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(e){e.y<=0&&(t.scrollY=Math.abs(Math.round(e.y)))})},_calculateHeight:function(){var t=this.$refs.goodsList,e=0;this.$refs.couponWrapper&&(e+=this.$refs.couponWrapper.clientHeight),this.$refs.shopPageWrapper&&(e+=this.$refs.shopPageWrapper.clientHeight),this.listHeight.push(0);for(var o=0;o<t.length;o++){e+=t[o].clientHeight,this.listHeight.push(e)}},_followScroll:function(t){if(t!=this.tabActive){var e=this.$refs.categoryItem[t];this.categoryScroll.scrollToElement(e,300,0,-100),this.tabActive=t}},selectCategory:function(t,e){if(e._constructed){var o=this.$refs.goodsList[t];this.goodsScroll.scrollToElement(o,500)}}}),watch:{icart:function(){var t=this.icart.data;if(1==this.template_page){var e=this.categoryAll;if(t)for(var o in e)if(e[o].total=0,e[o].child&&e[o].child.length>0)for(var i in e[o].child){e[o].child[i].total=0;var s=0,a=0;for(var l in t)for(var c in t[l])t[l][c].cid==e[o].id&&(a+=t[l][c].num,e[o].total=a,t[l][c].child_id==e[o].child[i].id&&(s+=t[l][c].num,e[o].child[i].total=s))}else{a=0;for(var l in t)for(var c in t[l])t[l][c].cid==e[o].id&&(a+=t[l][c].num,e[o].total=a)}else for(var o in e)if(e[o].total=0,e[o].child)for(var i in e[o].child)e[o].child[i].total=0;this.categoryAll=e}else{var n=this.cateHasGoods;if(t)for(var d in n){n[d].total=0;a=0;for(var l in t)for(var c in t[l])t[l][c].cid==n[d].id&&(a+=t[l][c].num,n[d].total=a)}else for(var d in n)n[d].total=0;this.cateHasGoods=n}}},created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.table_cid=this.query.table_cid)},computed:n()({},Object(d.c)(["istore","icart","reserveExtra"]),{goodsSpecNum:function(){if(!this.icart||!this.icart.data1||!this.icart.data1[this.goodsActive.id])return 0;var t=this.goodsActive.activeOptionId;return this.icart.data1[this.goodsActive.id][t]?this.icart.data1[this.goodsActive.id][t].num:0},currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],o=this.listHeight[t+1];if(!o||this.scrollY>=e&&this.scrollY<o)return this._followScroll(t),t}return 0}}),mounted:function(){var t=this;this.onLoad(),this.$nextTick(function(){var e=document.documentElement.clientHeight,o=document.getElementsByClassName("header")[0].clientHeight,i=document.getElementsByClassName("store-tabs")[0].clientHeight;t.vanColHeight=e-o-i-50,t.windowHeight=window.innerHeight})}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"store-goods"}},[o("store-header",{attrs:{store:t.store,table_category:t.table_category}}),t._v(" "),o("div",{staticClass:"store-tabs flex-lr van-hairline--bottom"},[o("div",{staticClass:"tab-item active"},[t._v("商品")]),t._v(" "),o("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/comment?sid="+t.store.id}),tag:"div"}},[t._v("评价")]),t._v(" "),o("router-link",{staticClass:"tab-item",attrs:{to:t.util.getUrl({path:"/pages/store/index?sid="+t.store.id}),tag:"div"}},[t._v("商家")])],1),t._v(" "),o("div",{staticClass:"goods-container"},[1==t.template_page?o("van-row",{staticClass:"goods-some"},[o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[o("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.categorySelectedIndex}},[t._l(t.categoryAll,function(e,i){return[e.total>0?o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title,info:e.total},on:{click:function(o){t.onToggleCategory(e.id,i,"")}}}):o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title},on:{click:function(o){t.onToggleCategory(e.id,i,"")}}})]})],2)],1),t._v(" "),o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[o("van-list",{attrs:{finished:t.goodsItem.loaded,offset:50},on:{load:t.onGetGoods},model:{value:t.goodsLoading,callback:function(e){t.goodsLoading=e},expression:"goodsLoading"}},[t.coupon.id>0&&1==t.couponStatus?o("div",{staticClass:"coupon-show-container"},[o("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t¥"),o("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),o("div",{staticClass:"coupon-detail"},[o("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),o("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),o("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t._e(),t._v(" "),t.categorySelected.child?[t.categorySelected.child.length>0?o("div",{staticClass:"tag2-list"},t._l(t.categorySelected.child,function(e,i){return o("div",{staticClass:"tag2-item",class:{selected:i==t.childSelectedIndex},on:{click:function(o){t.onToggleCategory(e.id,i,"child")}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t"),e.total>0?o("div",{class:{dot:e.total}}):t._e()])})):t._e()]:t._e(),t._v(" "),o("div",{staticClass:"title border-1px-t"},[o("div",{staticClass:"title-text ellipsis"},[o("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.categorySelected.child&&t.categorySelected.child.length>0?t.categorySelected.child[t.childSelectedIndex].title:t.categorySelected.title)+"\n\t\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"title-rank"},[o("div",{staticClass:"sales ",class:{selected:"sailed"==t.goodsItem.orderby.type},on:{click:function(e){t.onOrderby("sailed","desc")}}},[t._v("销量")]),t._v(" "),o("div",{staticClass:"shu"},[t._v("|")]),t._v(" "),o("div",{staticClass:"prionToggleCategoryce-container",on:{click:function(e){t.onOrderby("price","desc"==t.goodsItem.orderby.value?"asc":"desc")}}},[o("div",{staticClass:"price"},[t._v("价格")]),t._v(" "),o("div",{staticClass:"triangle"},[o("div",{staticClass:"triangle-top",class:{selected:"price"==t.goodsItem.orderby.type&&"asc"==t.goodsItem.orderby.value}}),t._v(" "),o("div",{staticClass:"triangle-bottom ",class:{selected:"price"==t.goodsItem.orderby.type&&"desc"==t.goodsItem.orderby.value}})])])])]),t._v(" "),2==t.template?t._l(t.goodsItem.data,function(e,i){return t.goodsItem.data.length>0?o("div",{staticClass:"goods clearfix "},[o("div",{staticClass:"goods-inner border-1px-b"},[o("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/reserve/goodsDetail",query:{id:e.id,sid:t.store.id,table_cid:t.table_cid}})}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),e.label?o("div",{staticClass:"label"},[t._v(t._s(e.label))]):t._e()]),t._v(" "),o("div",{staticClass:"shop-info clearfix"},[o("div",{staticClass:"name ellipsis"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"description"},[t._v(t._s(e.content))]),t._v(" "),o("div",{staticClass:"sold"},[t._v("已售"+t._s(e.sailed)+" 赞"+t._s(e.comment_good))]),t._v(" "),o("div",{staticClass:"price"},[o("div",{staticClass:"now-price"},[o("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(e.price)),o("span",{staticClass:"font-14 font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),e.old_price?o("div",{staticClass:"old-price"},[o("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(e.old_price)+"\n\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),o("div",{staticClass:"discount"},[e.discount?[o("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),o("goods-handle",{attrs:{goods:e,optionId:0,from:"list",type:"reserve"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):[t.goodsItem.data&&t.goodsItem.data.length>0?o("div",{staticClass:"goods-list clearfix"},[t._l(t.goodsItem.data,function(e,i){return o("div",{staticClass:"col-50 goods-item"},[o("div",{staticClass:"goods-info"},[o("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/reserve/goodsDetail",query:{id:e.id,sid:t.store.id,table_cid:t.table_cid}})}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),o("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t已售"+t._s(e.sailed)+" "),o("div",[t._v("赞"+t._s(e.comment_good))])]),t._v(" "),o("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t"),o("div",[t._v(t._s(e.price))]),o("span",{staticClass:"font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),o("div",{staticClass:"discount"},[e.discount?o("div",[o("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),o("goods-handle",{attrs:{goods:e,template:t.template,optionId:0,from:"list",type:"reserve"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime}})],1)])}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],2):t._e()],t._v(" "),1==t.goodsItem.empty?o("load",{attrs:{type:"loaded",text:"暂无商品"}}):t.goodsItem.loaded?o("load",{attrs:{type:"loaded",text:"已经到底了"}}):t._e()],2)],1)],1):o("van-row",{staticClass:"goods-all"},[o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"5"}},[o("div",{ref:"categoryWrapper",style:{height:t.vanColHeight+"px"}},[o("van-badge-group",{staticClass:"tabs-list",attrs:{"active-key":t.currentIndex}},[t._l(t.cateHasGoods,function(e,i){return[o("li",{ref:"categoryItem",refInFor:!0,on:{click:function(e){t.selectCategory(i,e)}}},[e.total>0?o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title,info:e.total}}):o("van-badge",{staticClass:"border-0px van-hairline--top",attrs:{title:e.title}})],1)]})],2)],1)]),t._v(" "),o("van-col",{style:{height:t.vanColHeight+"px"},attrs:{span:"19"}},[o("div",{ref:"goodsWrapper",style:{height:t.vanColHeight+"px"}},[o("div",[t.coupon.id>0&&1==t.couponStatus?o("div",{ref:"couponWrapper",staticClass:"coupon-show-container"},[o("div",{staticClass:"coupon-price"},[t._v("\n\t\t\t\t\t\t\t\t¥"),o("div",[t._v(t._s(t.coupon.price))])]),t._v(" "),o("div",{staticClass:"coupon-detail"},[o("div",{staticClass:"coupon-title"},[t._v("商家代金券")]),t._v(" "),o("div",{staticClass:"coupon-desc"},[t._v("内含"+t._s(t.coupon.num)+"张券")])]),t._v(" "),o("div",{staticClass:"coupon-fetch",on:{click:t.onCollectCoupon}},[t._v("去领取")])]):t._e(),t._v(" "),t._e(),t._v(" "),o("ul",t._l(t.cateHasGoods,function(e,i){return o("li",{key:i,ref:"goodsList",refInFor:!0},[o("div",{staticClass:"title border-1px-t"},[o("div",{staticClass:"title-text"},[o("div",{staticClass:"title-line",staticStyle:{"{'border-color'":"'#6BBA50'}"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),2==t.template?t._l(e.goods,function(i,s){return e.goods.length>0?o("div",{key:s,staticClass:"goods clearfix"},[o("div",{staticClass:"goods-inner ",class:{"border-1px-b":s<e.goods.length-1}},[o("router-link",{staticClass:"image-box",attrs:{to:t.util.getUrl({path:"/pages/reserve/goodsDetail",query:{id:i.id,sid:t.store.id,table_cid:t.table_cid}})}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:i.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}],staticClass:"pic"}),t._v(" "),i.label?o("div",{staticClass:"label"},[t._v(t._s(i.label))]):t._e()]),t._v(" "),o("div",{staticClass:"shop-info clearfix"},[o("div",{staticClass:"name ellipsis"},[t._v(t._s(i.title))]),t._v(" "),o("div",{staticClass:"description"},[t._v(t._s(i.content))]),t._v(" "),o("div",{staticClass:"sold"},[t._v("已售"+t._s(i.sailed)+" 赞"+t._s(i.comment_good))]),t._v(" "),o("div",{staticClass:"price"},[o("div",{staticClass:"now-price"},[o("span",{staticClass:"price-icon font-14"},[t._v("￥")]),t._v(t._s(i.price)),o("span",{staticClass:"font-14 font-bold"},[t._v(t._s(i.unitname_cn))])]),t._v(" "),i.old_price?o("div",{staticClass:"old-price"},[o("div",{staticClass:"price-icon"},[t._v("￥")]),t._v(t._s(i.old_price)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),o("div",{staticClass:"discount"},[i.discount?[o("van-icon",{attrs:{name:"tag"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.discount)+"折 限"+t._s(i.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]:t._e()],2)]),t._v(" "),o("goods-handle",{attrs:{goods:i,optionId:0,from:"list",templatePage:"1",type:"reserve"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],1)]):t._e()}):[e.goods&&e.goods.length>0?o("div",{staticClass:"goods-list clearfix"},[t._l(e.goods,function(e,i){return o("div",{staticClass:"col-50 goods-item"},[o("div",{staticClass:"goods-info"},[o("router-link",{staticClass:"avatar",attrs:{to:t.util.getUrl({path:"/pages/reserve/goodsDetail",query:{id:e.id,sid:t.store.id,table_cid:t.table_cid}})}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:e.thumb,loading:t.lazyload_goods},expression:"{src: item.thumb, loading: lazyload_goods}"}]})]),t._v(" "),o("div",{staticClass:"goods-name"},[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"solid"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t已售"+t._s(e.sailed)+" "),o("div",[t._v("赞"+t._s(e.comment_good))])]),t._v(" "),o("div",{staticClass:"price"},[t._v("¥\n\t\t\t\t\t\t\t\t\t\t\t\t\t"),o("div",[t._v(t._s(e.price))]),o("span",{staticClass:"font-bold"},[t._v(t._s(e.unitname_cn))])]),t._v(" "),t._e(),t._v(" "),o("div",{staticClass:"discount"},[e.discount?o("div",[o("van-icon",{attrs:{name:"tag"}}),t._v(" "+t._s(e.discount)+"折 限"+t._s(e.max_buy_limit)+"份\n\t\t\t\t\t\t\t\t\t\t\t\t\t")],1):t._e()]),t._v(" "),o("goods-handle",{attrs:{goods:e,template:t.template,optionId:0,from:"list",templatePage:"1",type:"reserve"},on:{onParentSelectOption:t.onParentSelectOption,onParentPopupNotInSailTime:t.onParentPopupNotInSailTime,showMoveDot:t.showMoveDotFun}})],1)])}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],2):t._e()]],2)}))])])])],1)],1),t._v(" "),t.popupNotInSailTime?o("van-popup",{staticClass:"not-in-time-popup",model:{value:t.popupNotInSailTime,callback:function(e){t.popupNotInSailTime=e},expression:"popupNotInSailTime"}},[o("div",{staticClass:"popup-top"},[t.goodsActive.week_cn?o("div",{staticClass:"popup-item"},[o("div",{staticClass:"popup-title"},[t._v("每周可售日期")]),t._v(" "),o("div",{staticClass:"popup-text"},[t._v(t._s(t.goodsActive.week_cn))])]):t._e(),t._v(" "),t.goodsActive.time_cn?o("div",{staticClass:"popup-item"},[o("div",{staticClass:"popup-title"},[t._v("每天可售时间")]),t._v(" "),o("div",{staticClass:"popup-text"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.time_cn)+"\n\t\t\t\t")])]):t._e()]),t._v(" "),o("div",{staticClass:"popup-bottom border-1px-t",on:{click:function(e){t.popupNotInSailTime=!1}}},[t._v("知道了")])]):t._e(),t._v(" "),t.ParentPopupSpecShow?o("van-popup",{staticClass:"options-popup",model:{value:t.ParentPopupSpecShow,callback:function(e){t.ParentPopupSpecShow=e},expression:"ParentPopupSpecShow"}},[o("div",{staticClass:"options-dialog"},[o("div",{staticClass:"muti-close",on:{click:function(e){t.ParentPopupSpecShow=!1}}}),t._v(" "),o("div",{staticClass:"muti-wrap"},[o("div",{staticClass:"muti-food-title border-1px-b"},[t._v("\n\t\t\t\t\t"+t._s(t.goodsActive.title)+"\n\t\t\t\t")]),t._v(" "),o("div",{staticClass:"muti-cont"},[o("div",{staticClass:"muti-cont-inner"},[1==t.goodsActive.is_options?o("div",{staticClass:"muti-sec first"},[o("div",{staticClass:"muti-sec-title"},[t._v("规格")]),t._v(" "),o("div",{staticClass:"muti-choice"},[t._l(t.goodsActive.options,function(e,i){return[o("div",{class:{selected:t.goodsActive.activeOptions.optionSelected==e.id},on:{click:function(o){t.onParentToggleOption(e.id,"","option")}}},[t._v(t._s(e.name))])]})],2)]):t._e(),t._v(" "),1==t.goodsActive.is_attrs?o("div",{staticClass:"muti-sec"},[t._l(t.goodsActive.attrs,function(e,i){return[o("div",{staticClass:"muti-sec-title"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"muti-choice"},[t._l(e.label,function(e,s){return[o("div",{class:{selected:t.goodsActive.activeOptions.attrsSelected[i]==s},on:{click:function(e){t.onParentToggleOption(i,s,"attr")}}},[t._v(t._s(e))])]})],2)]})],2):t._e()])]),t._v(" "),o("div",{staticClass:"muti-choose"},[o("div",{staticClass:"muti-oprt"},[o("div",{staticClass:"muti-cart-oprt clearfix"},[o("div",{staticClass:"add-food"},[o("van-icon",{staticStyle:{"background-color":"#6BBA50"},attrs:{name:"plus"},on:{click:function(e){t.onParentPlus(e,t.goodsActive)}}})],1),t._v(" "),t.goodsSpecNum?[o("div",{staticClass:"food-num"},[t._v(t._s(t.goodsSpecNum))]),t._v(" "),o("div",{staticClass:"remove-food"},[o("div",{staticClass:"remove icon icon-minus",on:{click:function(e){t.onParentMinus(t.goodsActive)}}})])]:t._e()],2)]),t._v(" "),o("div",{staticClass:"muti-info"},[o("div",{staticClass:"muti-price"},[t._v("¥"+t._s(t.goodsActive.activeOption.price))]),t._v(" "),o("div",{staticClass:"muti-type"},[t._v("("+t._s(t.goodsActive.activeOption.name)+")")])])])])])]):t._e(),t._v(" "),o("store-cart",{attrs:{show:0==t.activetabs,store:t.store,cart:t.cart,from:"reserve",table_category:t.table_category}}),t._v(" "),o("transition",{attrs:{name:"loading"}},[t.preLoading?o("iloading"):t._e()],1),t._v(" "),t._l(t.showMoveDot,function(e,i){return o("transition",{key:i,attrs:{appear:""},on:{"after-appear":t.onParentAfterEnter,"before-appear":t.onParentBeforeEnter}},[e?o("div",{staticClass:"parent_move_dot"}):t._e()])}),t._v(" "),t.store.tips&&t.showNotice?o("notice-popup",{attrs:{tips:t.store.tips}}):t._e()],2)},staticRenderFns:[]};var y=o("VU/8")(m,f,!1,function(t){o("Y+G6")},null,null);e.default=y.exports}});
//# sourceMappingURL=173.b74cadd3bde3f423d6d9.js.map