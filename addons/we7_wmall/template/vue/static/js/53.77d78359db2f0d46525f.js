webpackJsonp([53],{"7LCE":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("woOf"),i=s.n(a),r=s("Dd8w"),d=s.n(r),n=s("NYxO"),l=s("Cz8s"),o=s("+TmT"),c={data:function(){return{address:{address:""},sexName:"先生",submiting:0,value:[]}},components:{PublicHeader:l.a,Uploader:o.a},computed:d()({},Object(n.c)(["editAddress"])),methods:d()({},Object(n.b)(["replaceAddress","setOrderExtra","setState"]),{onLoad:function(){var e=this,t=this;this.id>0?this.util.request({url:"wmall/member/address/post",data:{sid:this.sid,id:this.id}}).then(function(t){var s=t.data.message;e.address=s.message,"location"==e.from&&e.editAddress.address&&e.editAddress.lat&&e.editAddress.lng&&(e.address=i()(e.address,e.editAddress),e.replaceAddress({})),e.sexName=e.address.sex?e.address.sex:e.sexName}):("location"==this.from&&this.editAddress.address&&this.editAddress.lat&&this.editAddress.lng&&(this.address=i()(this.address,this.editAddress)),this.editAddress.address||this.util.getLocation({successLocation:function(e){},successAddress:function(e){t.address.address=e.address,t.address.location_x=e.location_x,t.address.location_y=e.location_y,t.address=i()({},t.address)},fail:function(e){}}),"location"==this.from&&this.replaceAddress({}))},onSubmit:function(){var e=this;if(1==this.submiting)return!1;if(!this.address.address)return this.$toast("收货地址不能为空"),!1;if(!this.address.realname)return this.$toast("联系人不能为空"),!1;if(!this.address.mobile)return this.$toast("手机号不能为空"),!1;if(!this.util.isValidMobile(this.address.mobile))return this.$toast("手机号格式错误"),!1;this.submiting=1;var t={id:this.id,sid:this.sid,channel:this.channel,flag:1,sex:this.sexName,number:this.address.number,realname:this.address.realname,mobile:this.address.mobile,address:this.address.address,location_x:this.address.location_x||this.address.lat,location_y:this.address.location_y||this.address.lng};this.util.request({url:"wmall/member/address/post",data:t,method:"POST"}).then(function(s){e.submiting=0;var a=s.data.message;if(!e.channel||""==e.channel||"undefined"==e.channel)return a.errno?(e.$toast(a.message),!1):(e.replaceAddress({}),void e.util.$toast("保存地址成功",e.util.getUrl({path:"/pages/member/address"})));if("takeout"==e.channel)if(-1e3==a.errno)e.$dialog.confirm({title:"温馨提示",message:"亲,您的地址已超出商家的配送范围了!",confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){t.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:t}).then(function(t){e.replaceAddress({}),e.setOrderExtra({key:"address_id",val:0}),e.$router.push(e.util.getUrl({path:"/pages/order/create?sid="+e.sid}))})});else{if(a.errno)return e.$toast(a.message),!1;e.setOrderExtra({key:"address_id",val:a.message}),e.$router.push(e.util.getUrl({path:"/pages/order/create?sid="+e.sid}))}else if("errander"==e.channel){if(-1e3!=a.errno)return a.errno?(e.$toast(a.message),!1):("accept"==e.input?e.setState({type:"erranderExtra",key:"acceptaddress_id",val:a.message}):"buy"==e.input&&e.setState({type:"erranderExtra",key:"buyaddress_id",val:a.message}),e.$router.push(e.util.getUrl({path:"/pages/paotui/diy",query:{id:e.erranderId}})),!1);e.$dialog.confirm({title:"温馨提示",message:"亲,您的地址已超出跑腿的服务范围了!",confirmButtonText:"调整地址",cancelButtonText:"仍然保存"}).then(function(){}).catch(function(){t.force=1,e.util.request({method:"POST",url:"wmall/member/address/post",data:t}).then(function(t){e.replaceAddress({}),"accept"==e.input?e.setState({type:"erranderExtra",key:"acceptaddress_id",val:0}):"buy"==e.input&&e.setState({type:"erranderExtra",key:"buyaddress_id",val:0}),e.$router.push(e.util.getUrl({path:"/pages/paotui/diy",query:{id:e.erranderId}}))})})}})},onSelectSex:function(e){this.sexName=e},onDel:function(){var e=this;this.$dialog.confirm({title:"温馨提示",message:"删除后将不可恢复,确定删除吗?"}).then(function(){e.util.request({url:"wmall/member/address/del",data:{id:e.id}}).then(function(t){t.data.message.errno||e.$router.push(e.util.getUrl({path:"/pages/member/address"}))})})}}),created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id,this.sid=this.query.sid,this.channel=this.query.channel,this.input=this.query.input,this.erranderId=this.query.erranderId,this.from=this.query.from,this.sid>0&&(this.channel="takeout"))},mounted:function(){this.onLoad()}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"address-post"}},[s("public-header",{attrs:{title:"编辑地址"}}),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"list"},[s("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[s("div",{staticClass:"item-title ellipsis"},[e._v("小区/大厦/学校")]),e._v(" "),s("div",{staticClass:"item-input flex-lr"},[s("i",{staticClass:"icon icon-location"}),e._v(" "),s("div",{staticClass:"location"},[s("router-link",{staticClass:"flex-lr",attrs:{to:e.util.getUrl({path:"/pages/member/addressLocation",query:{id:e.id,sid:e.sid,channel:e.channel,erranderId:e.erranderId,input:e.input}})}},[e.address.address?s("div",{staticStyle:{color:"#333"}},[e._v(e._s(e.address.address))]):s("span",[e._v("点击添加地址(必填)")]),e._v(" "),s("i",{staticClass:"icon icon-right"})])],1)])]),e._v(" "),s("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[s("div",{staticClass:"item-title ellipsis"},[e._v("楼号-门牌号")]),e._v(" "),s("div",{staticClass:"item-input "},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.number,expression:"address.number"}],attrs:{name:"number",type:"text",placeholder:"例:16号楼427室"},domProps:{value:e.address.number},on:{input:function(t){t.target.composing||e.$set(e.address,"number",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[s("div",{staticClass:"item-title ellipsis "},[e._v("联系人")]),e._v(" "),s("div",{staticClass:"item-input"},[s("div",{staticClass:"username van-hairline--bottom"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.realname,expression:"address.realname"}],attrs:{type:"text",name:"realname",placeholder:"您的姓名"},domProps:{value:e.address.realname},on:{input:function(t){t.target.composing||e.$set(e.address,"realname",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"sex flex"},[s("div",{staticClass:"sex-item flex",on:{click:function(t){e.onSelectSex("先生")}}},[s("i",{staticClass:"icon",class:{"icon-check":"先生"==e.sexName}}),e._v("先生\n\t\t\t\t\t\t")]),e._v(" "),s("div",{staticClass:"sex-item flex",on:{click:function(t){e.onSelectSex("女士")}}},[s("i",{staticClass:"icon",class:{"icon-check":"女士"==e.sexName}}),e._v("女士\n\t\t\t\t\t\t")])])])]),e._v(" "),s("div",{staticClass:"list-item flex-lr van-hairline--bottom"},[s("div",{staticClass:"item-title ellipsis"},[e._v("手机号")]),e._v(" "),s("div",{staticClass:"item-input "},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.mobile,expression:"address.mobile"}],attrs:{type:"text",name:"mobile",placeholder:"请填写收货手机号码"},domProps:{value:e.address.mobile},on:{input:function(t){t.target.composing||e.$set(e.address,"mobile",t.target.value)}}})])])]),e._v(" "),s("div",{staticClass:"save-btn",on:{click:e.onSubmit}},[s("van-button",{attrs:{type:"danger",size:"normal",block:!0}},[e._v("保存")])],1),e._v(" "),e.address&&e.address.id>0?s("div",{staticClass:"save-btn",on:{click:e.onDel}},[s("van-button",{attrs:{type:"default",size:"normal",block:!0}},[e._v("删除")])],1):e._e()])],1)},staticRenderFns:[]};var m=s("VU/8")(c,u,!1,function(e){s("CU3T")},null,null);t.default=m.exports},CU3T:function(e,t){}});
//# sourceMappingURL=53.77d78359db2f0d46525f.js.map