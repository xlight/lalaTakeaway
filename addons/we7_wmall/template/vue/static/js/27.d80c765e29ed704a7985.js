webpackJsonp([27],{"F/Em":function(t,e){},GXhf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Gu7T"),i=a.n(s),r=a("Dd8w"),n=a.n(r),d=a("NYxO"),l={data:function(){return{preLoading:!0,list:[],available:[],dis_available:[]}},components:{PublicHeader:a("Cz8s").a},methods:n()({},Object(d.b)(["setOrderExtra","setState"]),{onLoad:function(){var t=this;this.util.request({url:"wmall/member/address",data:{sid:this.sid,erranderId:this.erranderId}}).then(function(e){t.preLoading=!1;var a=e.data.message;a.errno||(t.sid>0||t.erranderId>0?(t.available=[].concat(i()(t.available),i()(a.message.available)),t.dis_available=[].concat(i()(t.dis_available),i()(a.message.dis_available))):t.list=[].concat(i()(t.list),i()(a.message)))})},onSelectAddress:function(t){return!(!this.sid&&!this.erranderId)&&(t.available?"errander"==this.channel?("accept"==this.input?this.setState({type:"erranderExtra",key:"acceptaddress_id",val:t.id}):"buy"==this.input&&this.setState({type:"erranderExtra",key:"buyaddress_id",val:t.id}),this.$router.replace(this.util.getUrl({path:"/pages/paotui/diy",query:{id:this.erranderId}})),!1):(this.setOrderExtra({key:"address_id",val:t.id}),void this.$router.replace(this.util.getUrl({path:"/pages/order/create",query:{sid:this.sid}}))):(this.$toast("该地址不在商家配送范围内"),!1))}}),computed:n()({},Object(d.c)(["orderExtra","erranderExtra"])),created:function(){this.query=this.$route.query,this.query&&(this.sid=this.query.sid,this.channel=this.query.channel,this.input=this.query.input,this.erranderId=this.query.erranderId)},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"address"}},[a("public-header",{attrs:{title:"我的地址"}}),t._v(" "),(t.sid>0||t.erranderId>0)&&(t.available.length>0||t.dis_available.length>0)||!t.sid&&!t.erranderId&&t.list.length>0?[t.sid>0||t.erranderId>0?[a("div",{staticClass:"list"},[t.available.length>0?[a("div",{staticClass:"block-title"},[t._v("可选收货地址")]),t._v(" "),a("div",{staticClass:"list-container van-hairline--bottom"},t._l(t.available,function(e,s){return a("div",{staticClass:"item  flex-lr",class:{"van-hairline--bottom":s<t.available.length-1}},[a("div",{staticClass:"item-content",on:{click:function(a){a.preventDefault(),a.stopPropagation(),t.onSelectAddress(e)}}},[a("div",{staticClass:"user"},[a("span",[t._v(t._s(e.realname))]),t._v(" "),a("span",[t._v(t._s(e.sex))]),t._v(" "),a("span",[t._v(t._s(e.mobile))])]),t._v(" "),a("div",{staticClass:"address"},[t._v(t._s(e.address))])]),t._v(" "),a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/member/addressPost",query:{id:e.id,sid:t.sid,channel:t.channel,erranderId:t.erranderId,input:t.input}})}},[a("van-icon",{attrs:{name:"edit"}})],1)],1)}))]:t._e(),t._v(" "),t.dis_available.length>0?[a("div",{staticClass:"block-title"},[t._v("不在配送范围内或地址不完善")]),t._v(" "),a("div",{staticClass:"list-container van-hairline--bottom"},t._l(t.dis_available,function(e,s){return a("div",{staticClass:"item  flex-lr c-disabled",class:{"van-hairline--bottom":s<t.dis_available.length-1}},[a("div",{staticClass:"item-content ",on:{click:function(a){a.preventDefault(),a.stopPropagation(),t.onSelectAddress(e)}}},[a("div",{staticClass:"user"},[a("span",[t._v(t._s(e.realname))]),t._v(" "),a("span",[t._v(t._s(e.sex))]),t._v(" "),a("span",[t._v(t._s(e.mobile))])]),t._v(" "),a("div",{staticClass:"address c-disabled"},[t._v(t._s(e.address))])]),t._v(" "),a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/member/addressPost",query:{id:e.id,sid:t.sid,channel:t.channel,erranderId:t.erranderId,input:t.input}})}},[a("van-icon",{attrs:{name:"edit"}})],1)],1)}))]:t._e()],2)]:[a("div",{staticClass:"list"},[a("div",{staticClass:"list-container van-hairline--bottom"},t._l(t.list,function(e,s){return a("div",{staticClass:"item  flex-lr",class:{"van-hairline--bottom":s<t.list.length-1}},[a("div",{staticClass:"item-content",on:{click:function(a){a.preventDefault(),a.stopPropagation(),t.onSelectAddress(e)}}},[a("div",{staticClass:"user"},[a("span",[t._v(t._s(e.realname))]),t._v(" "),a("span",[t._v(t._s(e.sex))]),t._v(" "),a("span",[t._v(t._s(e.mobile))])]),t._v(" "),a("div",{staticClass:"address"},[t._v(t._s(e.address))])]),t._v(" "),a("router-link",{attrs:{to:t.util.getUrl({path:"/pages/member/addressPost",query:{id:e.id,sid:t.sid,channel:t.channel,erranderId:t.erranderId,input:t.input}})}},[a("van-icon",{attrs:{name:"edit"}})],1)],1)}))])]]:a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/store_no_con.png",alt:""}}),t._v(" "),a("p",[t._v("您还没有收货地址")])]),t._v(" "),a("router-link",{staticClass:"add",attrs:{tag:"div",to:t.util.getUrl({path:"/pages/member/addressPost",query:{id:0,sid:t.sid,channel:t.channel,erranderId:t.erranderId,input:t.input}})}},[a("van-cell",{staticClass:"border-1px-t",attrs:{title:"新增收货地址",icon:"add","is-link":""}})],1),t._v(" "),a("transition",{attrs:{name:"loading"}},[t.preLoading?a("iloading"):t._e()],1)],2)},staticRenderFns:[]};var o=a("VU/8")(l,c,!1,function(t){a("F/Em")},null,null);e.default=o.exports}});