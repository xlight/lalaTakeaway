webpackJsonp([5],{AQp9:function(t,i){},WHpv:function(t,i){},hDXg:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"navigator"}},[t.show?s("div",{staticClass:"icon icon-close",on:{click:t.onToggleShow}}):s("div",{staticClass:"open",on:{click:t.onToggleShow}},[t._v("快捷"),s("br"),t._v("导航")]),t._v(" "),s("div",{staticClass:"navs",class:{show:t.show}},t._l(t.navs.data,function(i,a,e){return s("router-link",{key:a,staticClass:"icon nav-item",class:i.icon,style:{top:t.show?50*(-e-1)+"px":"0px"},attrs:{to:t.util.getUrl({path:i.link})}})}))])},staticRenderFns:[]};var e={components:{Navigator:s("VU/8")({props:{navs:{}},data:function(){return{show:!1}},methods:{onToggleShow:function(){this.show=!this.show}}},a,!1,function(t){s("AQp9")},"data-v-45c6c045",null).exports},data:function(){return{showPreLoading:!0,activeNum:0,wheelData:{data:{one:{},two:{},three:{}},params:{}},init:{index:1,fast:4,num:8,num_t:4,cycle:3,flag:!1,lucky:"",cycle_default:3,speed:100},prize:{note:"",type:"",id:""},imghuigu:"",menufooter:{}}},methods:{rand:function(t,i){var s=i-t,a=Math.random();return t+Math.round(a*s)},onDraw:function(){var t=this;if(this.init.flag)return!1;this.init.fast=this.rand(5,6),this.init.cycle_default=this.init.cycle=this.rand(3,5),this.init.speed=300,this.init.flag=!0,this.util.request({url:"wheel/activity/index",method:"POST",data:{id:this.id,order_id:this.order_id}}).then(function(i){var s=i.data.message;if(s.errno)return t.$toast(s.message),!1;t.init.lucky=s.luckyNum;var a=t.init.lucky;"1"!=a&&"4"!=a&&"7"!=a||(t.prize.type=s.award.type,t.prize.id=s.id),t.prize.note=s.message,t.activeNum=1,t.showLottery()})},showLottery:function(){this.init.index>this.init.num&&(this.init.index=1,this.init.cycle--);var t=this.init.num+1,i=this.init.lucky-this.init.num_t>=0?0:1,s=this.init.lucky-this.init.num_t,a=s>=0?s>0?s:1:t+s;this.activeNum=this.init.index,this.init.index>this.init.fast&&this.init.cycle==this.init.cycle_default&&(this.init.speed=100),(this.init.cycle==i&&this.init.index>=a||this.init.cycle<i)&&(this.init.speed=this.init.speed+200);var e=this;if(this.init.cycle<=0&&this.init.index==this.init.lucky)clearTimeout(n),setTimeout(function(){e.$toast(e.prize.note),e.init.flag=!1,e.init.index=1,e.prize.type=0,e.prize.note=""},1e3),e.init.flag=!1;else{this.init.index++;var n=setTimeout(this.showLottery,this.init.speed)}},onLoad:function(){var t=this;this.util.request({url:"wheel/activity/index",data:{id:this.id,order_id:this.order_id,menufooter:1}}).then(function(i){t.showPreLoading=!1;var s=i.data.message;s.errno?t.$toast(s.message):(s=s.message,t.wheelData=s.wheelData,t.menufooter=window.menufooter)})}},created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id,this.order_id=this.query.order_id)},mounted:function(){this.onLoad()}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"wheel-index"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"wheel"},[s("div",{staticClass:"content-wheel"},[s("div",{staticClass:"wheel-item",class:{active:1==t.activeNum}},[s("img",{staticClass:"wheel-img",attrs:{src:t.wheelData.data.one.imgurl,alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text",style:{color:t.wheelData.data.one.color}},[t._v(t._s(t.wheelData.data.one.text))])]),t._v(" "),s("div",{staticClass:"wheel-item thanks",class:{active:2==t.activeNum}},[2==t.activeNum?s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu-active.png",alt:""}}):s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu.png",alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text"},[t._v("谢谢惠顾")])]),t._v(" "),s("div",{staticClass:"wheel-item thanks",class:{active:3==t.activeNum}},[3==t.activeNum?s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu-active.png",alt:""}}):s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu.png",alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text"},[t._v("谢谢惠顾")])]),t._v(" "),s("div",{staticClass:"wheel-item thanks",class:{active:8==t.activeNum}},[8==t.activeNum?s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu-active.png",alt:""}}):s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu.png",alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text"},[t._v("谢谢惠顾")])]),t._v(" "),s("div",{staticClass:"wheel-item",on:{click:t.onDraw}},[s("span",{staticClass:"draw-click"},[t._v("点击抽奖")]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"wheel-item",class:{active:4==t.activeNum}},[s("img",{staticClass:"wheel-img",attrs:{src:t.wheelData.data.two.imgurl,alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text",style:{color:t.wheelData.data.two.color}},[t._v(t._s(t.wheelData.data.two.text))])]),t._v(" "),s("div",{staticClass:"wheel-item",class:{active:7==t.activeNum}},[s("img",{staticClass:"wheel-img",attrs:{src:t.wheelData.data.three.imgurl,alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text",style:{color:t.wheelData.data.three.color}},[t._v(t._s(t.wheelData.data.three.text))])]),t._v(" "),s("div",{staticClass:"wheel-item thanks",class:{active:6==t.activeNum}},[6==t.activeNum?s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu-active.png",alt:""}}):s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu.png",alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text"},[t._v("谢谢惠顾")])]),t._v(" "),s("div",{staticClass:"wheel-item thanks",class:{active:5==t.activeNum}},[5==t.activeNum?s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu-active.png",alt:""}}):s("img",{staticClass:"wheel-img",attrs:{src:"static/img/huigu.png",alt:""}}),t._v(" "),s("span",{staticClass:"wheel-text"},[t._v("谢谢惠顾")])])]),t._v(" "),s("div",{staticClass:"info-wrap"},[s("router-link",{staticClass:"wrap-head",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/wheel/record"})}},[t._v("查看奖品")]),t._v(" "),s("div",{staticClass:"wrap-text"},[s("div",{staticClass:"wrap-inner"},[t._v("\n\t\t\t\t\t\t1.活动有效时间：\n\t\t\t\t\t\t"),s("span",{staticClass:"activity-info-content"},[t._v(t._s(t.wheelData.params.starttime)+"~"+t._s(t.wheelData.params.endtime))])]),t._v(" "),s("div",{staticClass:"wrap-inner"},[t._v("\n\t\t\t\t\t\t2.活动说明：\n\t\t\t\t\t\t"),s("span",{staticClass:"activity-info-content"},[t._l(t.wheelData.params.desc,function(i){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i)),s("br")]})],2)])])],1)])]),t._v(" "),s("navigator",{attrs:{navs:t.menufooter}}),t._v(" "),s("transition",{attrs:{name:"loading"}},[t.showPreLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("span",{staticClass:"draw-go"},[i("strong",[this._v("GO!")])])}]};var c=s("VU/8")(e,n,!1,function(t){s("WHpv")},null,null);i.default=c.exports}});
//# sourceMappingURL=5.8d84d3851bff90f56ee4.js.map