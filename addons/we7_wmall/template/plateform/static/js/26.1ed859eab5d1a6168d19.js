webpackJsonp([26],{"0QJB":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("Cz8s"),a=r("+CBI"),s=r("deIj"),l={data:function(){return{id:0,showPreLoading:!0,deliveryer:{is_takeout:0,is_errander:0,perm_cancel:{status_takeout:0,status_errander:0},perm_transfer:{status_takeout:0,status_errander:0,max_takeout:0,max_errander:0},collect_max_errander:0,collect_max_takeout:0}}},components:{publicHeader:i.a,iswitch:a.a},methods:{onLoad:function(){Object(s.a)({vue:this,autoAssign:!0,variable:"deliveryer",url:"plateform/deliveryer/plateform/power",data:{id:this.id}})},jsToggleSwitch:function(e){this.util.jsToggleSwitch({vue:this,key:e.key||e.keys,value:e.value})},onSubmit:function(){Object(s.c)({vue:this,url:"plateform/deliveryer/plateform/power",data:{id:this.id,deliveryer:this.deliveryer},message:"配送员权限设置成功",redirect:this.util.getUrl({path:"/pages/deliveryer/guide",query:{id:this.id}})})}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"deliveryer-power"}},[r("public-header",{attrs:{title:"配送权限"}}),e._v(" "),r("div",{staticClass:"content"},[r("van-cell-group",[r("van-cell",{attrs:{title:"配送权限"}}),e._v(" "),r("van-cell",{staticClass:"border-0px",attrs:{title:"外卖单"}},[r("iswitch",{attrs:{slot:"right-icon",value:e.deliveryer.is_takeout,"text-open":"ON","text-close":"OFF",keys:"deliveryer.is_takeout"},on:{change:e.jsToggleSwitch},slot:"right-icon"})],1),e._v(" "),r("van-cell",{staticClass:"border-0px",attrs:{title:"跑腿单"}},[r("iswitch",{attrs:{slot:"right-icon",value:e.deliveryer.is_errander,"text-open":"ON","text-close":"OFF",keys:"deliveryer.is_errander"},on:{change:e.jsToggleSwitch},slot:"right-icon"})],1)],1),e._v(" "),r("van-cell-group",{staticClass:"margin-10-t"},[r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("允许配送员取消订单（外卖单）")]),e._v(" "),r("iswitch",{attrs:{slot:"right-icon",value:e.deliveryer.perm_cancel.status_takeout,"text-open":"ON","text-close":"OFF",keys:"deliveryer.perm_cancel.status_takeout"},on:{change:e.jsToggleSwitch},slot:"right-icon"})],1),e._v(" "),r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("允许配送员取消订单（跑腿单）")]),e._v(" "),r("iswitch",{attrs:{slot:"right-icon",value:e.deliveryer.perm_cancel.status_errander,"text-open":"ON","text-close":"OFF",keys:"deliveryer.perm_cancel.status_errander"},on:{change:e.jsToggleSwitch},slot:"right-icon"})],1),e._v(" "),r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("允许配送员转单（外卖单）")]),e._v(" "),r("iswitch",{attrs:{slot:"right-icon",value:e.deliveryer.perm_transfer.status_takeout,"text-open":"ON","text-close":"OFF",keys:"deliveryer.perm_transfer.status_takeout"},on:{change:e.jsToggleSwitch},slot:"right-icon"})],1),e._v(" "),r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("允许配送员转单（跑腿单）")]),e._v(" "),r("iswitch",{attrs:{slot:"right-icon",value:e.deliveryer.perm_transfer.status_errander,"text-open":"ON","text-close":"OFF",keys:"deliveryer.perm_transfer.status_errander"},on:{change:e.jsToggleSwitch},slot:"right-icon"})],1)],1),e._v(" "),r("van-cell-group",{staticClass:"margin-10-t"},[r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("配送员每天最多可转外卖单数")]),e._v(" "),r("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[r("div",{staticClass:"input-unit"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryer.perm_transfer.max_takeout,expression:"deliveryer.perm_transfer.max_takeout"}],domProps:{value:e.deliveryer.perm_transfer.max_takeout},on:{input:function(t){t.target.composing||e.$set(e.deliveryer.perm_transfer,"max_takeout",t.target.value)}}}),r("span",[e._v("单")])])])]),e._v(" "),r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("配送员每天最多可转跑腿单数")]),e._v(" "),r("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[r("div",{staticClass:"input-unit"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryer.perm_transfer.max_errander,expression:"deliveryer.perm_transfer.max_errander"}],domProps:{value:e.deliveryer.perm_transfer.max_errander},on:{input:function(t){t.target.composing||e.$set(e.deliveryer.perm_transfer,"max_errander",t.target.value)}}}),r("span",[e._v("单")])])])]),e._v(" "),r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("配送员每天最多可抢外卖单数")]),e._v(" "),r("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[r("div",{staticClass:"input-unit"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryer.collect_max_takeout,expression:"deliveryer.collect_max_takeout"}],domProps:{value:e.deliveryer.collect_max_takeout},on:{input:function(t){t.target.composing||e.$set(e.deliveryer,"collect_max_takeout",t.target.value)}}}),r("span",[e._v("单")])])])]),e._v(" "),r("van-cell",[r("div",{attrs:{slot:"title"},slot:"title"},[e._v("配送员每天最多可抢跑腿单数")]),e._v(" "),r("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[r("div",{staticClass:"input-unit"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryer.collect_max_errander,expression:"deliveryer.collect_max_errander"}],domProps:{value:e.deliveryer.collect_max_errander},on:{input:function(t){t.target.composing||e.$set(e.deliveryer,"collect_max_errander",t.target.value)}}}),r("span",[e._v("单")])])])])],1),e._v(" "),r("div",{staticClass:"padding-15"},[r("van-button",{staticClass:"bg-primary font-16",attrs:{size:"normal",block:""},on:{click:e.onSubmit}},[e._v("提交")])],1)],1),e._v(" "),e.showPreLoading?r("iloading"):e._e()],1)},staticRenderFns:[]};var n=r("VU/8")(l,o,!1,function(e){r("2hij")},null,null);t.default=n.exports},"2hij":function(e,t){}});