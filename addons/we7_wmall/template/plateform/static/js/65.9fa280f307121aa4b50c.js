webpackJsonp([65],{RLZQ:function(t,e){},"Uf+q":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Cz8s"),i=a("deIj"),s={data:function(){return{agent:{amount:0},get_fee:"",showPreLoading:!0,islegal:!1}},components:{publicHeader:n.a},methods:{onLoad:function(){var t=this;Object(i.a)({vue:t,url:"plateform/agent/finance",autoAssign:!0,variable:"agent",success:function(e){t.islegal=!0}})},onSubmit:function(){var t=this;if(!t.islegal)return!1;var e=parseFloat(t.get_fee);return isNaN(e)||e<=0?(t.util.$toast("提现金额有误"),!1):e>t.agent.amount?(t.util.$toast("提现金额不能大于账户可用余额"),!1):(t.islegal=!1,void Object(i.c)({vue:t,url:"plateform/agent/finance/getcash",data:{get_fee:e},message:"申请提现成功,等待平台管理员审核",redirect:t.util.getUrl({path:"/pages/plugin/agent/finance/index"}),fail:function(e){t.util.$toast(e),t.islegal=!0}}))}},mounted:function(){this.onLoad()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"agent-finance-index"}},[a("public-header",{attrs:{title:"申请提现"}}),t._v(" "),a("div",{staticClass:"content"},[a("van-cell-group",{staticClass:"margin-10-t"},[a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t\t\t\t账户可用余额:\n\t\t\t\t\t"),a("span",{staticClass:"c-primary margin-5-l"},[t._v("¥"+t._s(t.agent.amount))])])])],1),t._v(" "),a("van-cell-group",{staticClass:"margin-10-t padding-15"},[a("p",{staticClass:"font-14 margin-10-b"},[t._v("提现金额")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.get_fee,expression:"get_fee",modifiers:{number:!0}}],staticClass:"getcash-num",attrs:{type:"text",placeholder:"请输入提现金额"},domProps:{value:t.get_fee},on:{input:function(e){e.target.composing||(t.get_fee=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"padding-15"},[a("van-button",{staticClass:"font-16",attrs:{size:"normal",type:"primary",disabled:!t.islegal,block:""},on:{click:t.onSubmit}},[t._v("提现")])],1)],1),t._v(" "),t.showPreLoading?a("iloading"):t._e()],1)},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(t){a("RLZQ")},null,null);e.default=o.exports}});