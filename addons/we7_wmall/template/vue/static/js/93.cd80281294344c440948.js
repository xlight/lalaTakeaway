webpackJsonp([93],{enC7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Cz8s"),s=a("mzkE"),n={components:{PublicHeader:i.a,PublicFooter:s.a},data:function(){return{fee:"",channel:"credit",config:{},member:{},showPreLoading:!0,menufooter:{}}},methods:{onLoad:function(){var t=this;this.util.request({url:"spread/getCash/application",data:{menufooter:1}}).then(function(e){var a=e.data.message;t.config=a.message.config,t.member=a.message.member,t.showPreLoading=!1,t.menufooter=window.menufooter})},onSubmit:function(){var t=this;return this.fee<=0?(this.$toast("请填写提现金额"),!1):this.channel?void this.util.request({url:"spread/getCash/application",data:{status:1,fee:this.fee,channel:this.channel}}).then(function(e){var a=e.data.message;0==a.errno?(t.$toast("申请提现成功"),t.$router.push(t.util.getUrl({path:"/pages/spread/getCash/index"}))):(t.$toast(a.message),-1e3==a.errno&&t.$router.push(t.util.getUrl({path:"/pages/member/profile"})))}):(this.$toast("请选择提现渠道"),!1)}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"spread-getcash-application"}},[a("public-header",{attrs:{title:"推广员佣金提现"}}),t._v(" "),a("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"list-block"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v("\n\t\t\t\t\t\t账户可用余额："),a("span",{staticClass:"price"},[t._v("¥ "+t._s(t.member.spreadcredit2))])])])])]),t._v(" "),a("div",{staticClass:"list-block"},[a("div",{staticClass:"list-item"},[a("div",{staticClass:"list-title"},[t._v("提现金额")]),t._v(" "),a("div",{staticClass:"list-input"},[a("van-cell-group",[a("van-field",{attrs:{type:"number"},model:{value:t.fee,callback:function(e){t.fee=e},expression:"fee"}})],1)],1),t._v(" "),a("div",{staticClass:"help"},[a("p",[t._v("最低提现金额为"+t._s(t.config.withdraw)+"元")]),t._v(" "),a("p",[t._v("提现费率为"+t._s(t.config.withdrawcharge)+"%")])])])]),t._v(" "),a("div",{staticClass:"list-block"},[t.config.cashcredit?a("van-radio-group",{model:{value:t.channel,callback:function(e){t.channel=e},expression:"channel"}},[a("van-cell-group",[t._l(t.config.cashcredit,function(e){return["wechat"==e?a("van-cell",{attrs:{title:"提现到微信",clickable:""},on:{click:function(e){t.channel="wechat"}}},[a("van-radio",{attrs:{name:"wechat"}})],1):"credit2"==e?a("van-cell",{attrs:{title:"提现到余额",clickable:""},on:{click:function(e){t.channel="credit"}}},[a("van-radio",{attrs:{name:"credit"}})],1):t._e()]})],2)],1):a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[t._v("平台当前未设置提现方式,请联系平台管理员")])])],1),t._v(" "),a("div",{staticClass:"tab"},[a("div",{staticClass:"button-fill",on:{click:t.onSubmit}},[t._v("提现")])])])],1)},staticRenderFns:[]};var l=a("VU/8")(n,c,!1,function(t){a("qMpC")},null,null);e.default=l.exports},qMpC:function(t,e){}});
//# sourceMappingURL=93.cd80281294344c440948.js.map