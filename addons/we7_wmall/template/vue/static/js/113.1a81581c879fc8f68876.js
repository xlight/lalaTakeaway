webpackJsonp([113],{"4V7w":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("woOf"),r=a.n(s),i=a("Dd8w"),n=a.n(i),d=a("NYxO"),l=a("Cz8s"),o=a("q0vl"),c=a("WkcG"),p={name:"paotuiScene",components:{PublicHeader:l.a,agreement:o.a,failedTips:c.a},data:function(){return{title:"跑腿",agreemnetShow:!1,agreementtitle:"《帮买服务协议》",showPreLoading:!0,status:{prefee:!1,deliveryTime:!1,goodsWeight:!1,tip:!1,fee:!1,redpacket:!1,address:!1},note:"",goodsWeight:0,tip:0,buyaddressPoint:!0,diy:{data:{}},basicPart:{params:{}},redPackets:[],addresses:[],buyaddress:{},buyAddressType:"nearby",acceptaddress:{},order:{},submitDisabled:0,failedTips:{type:"location",tips:"获取定位失败!您可以选择手动搜索地址",btnText:"手动搜索地址",link:"/pages/home/location"},getLocationStatus:!0}},computed:n()({},Object(d.c)(["erranderExtra","erranderSceneId"])),methods:n()({},Object(d.b)(["setState","replaceState"]),{onUploadImage:function(t,e,a){var s=this,i=t+"_"+e;s.util.image({obj:a,success:function(t,e){if(e.url&&e.filename){var a={url:e.url,filename:e.filename},n=s.erranderExtra.thumbs;n||(n={}),n[i]||(n[i]=[]),n[i].push(a);var d=r()(s.erranderExtra,{thumbs:n});s.replaceState({key:"erranderExtra",val:d}),s.onCalculate()}},options:{channel:"h5"}})},onDelThumb:function(t,e,a){var s=t+"_"+e,i=this.erranderExtra.thumbs;i[s].splice(a,1);var n=r()(this.erranderExtra,{thumbs:i});this.replaceState({key:"erranderExtra",val:n}),this.onCalculate()},onShowAgreement:function(){this.agreemnetShow=!0},onChangeStatus:function(t){"prefee"==t&&this.status.prefee?this.setState({type:"erranderExtra",key:"goods_price",val:0}):"goodsWeight"==t&&this.status.goodsWeight?(this.setState({type:"erranderExtra",key:"goods_weight",val:0}),this.onCalculate()):"tip"==t&&this.status.tip&&(this.setState({type:"erranderExtra",key:"delivery_tips",val:0}),this.onCalculate()),this.status[t]=!this.status[t]},onConfirmPrefee:function(){this.setState({type:"erranderExtra",key:"goods_price",val:this.erranderExtra.goods_price}),this.status.prefee=!1,this.onCalculate()},onToggleBuyAddressType:function(t){this.buyAddressType=t,this.setState({type:"erranderExtra",key:"buyAddressType",val:t}),"nearby"==t&&this.setState({type:"erranderExtra",key:"buyaddress",val:{}}),this.onCalculate()},onSelectDay:function(t){this.setState({type:"erranderExtra",key:"delivery_day",val:t}),this.order=r()({},this.order)},onSelectTime:function(t){this.setState({type:"erranderExtra",key:"delivery_time",val:t}),this.erranderExtra.delivery_time=t,this.status.deliveryTime=!1,this.onCalculate()},onChangeWeight:function(){this.setState({type:"erranderExtra",key:"goods_weight",val:this.goodsWeight}),this.onCalculate()},onChangeTip:function(){this.setState({type:"erranderExtra",key:"delivery_tips",val:this.tip}),this.onCalculate()},onSelectRedpacket:function(t){t==this.erranderExtra.redpacket_id&&(t=0),this.setState({type:"erranderExtra",key:"redpacket_id",val:t}),this.status.redpacket=!1,this.onCalculate()},onGetExtraFee:function(t,e){if(this.erranderExtra.extra_fee&&0!=this.erranderExtra.extra_fee.length||(this.erranderExtra.extra_fee={}),this.erranderExtra.extra_fee[e]){for(var a in this.erranderExtra.extra_fee[e])if(this.erranderExtra.extra_fee[e][a]==t)return delete this.erranderExtra.extra_fee.current,delete this.erranderExtra.extra_fee[e][a],this.onCalculate(),!1}else this.erranderExtra.extra_fee[e]={};this.erranderExtra.extra_fee[e][t]=t,this.erranderExtra.extra_fee.current={pindex:e,cindex:t},this.onCalculate()},onGetPartData:function(t){var e=t.type,a=t.info,s=a.name,i=a.value,n=a.cindex;if(this.erranderExtra.partData||(this.erranderExtra.partData={}),"text"==e)this.erranderExtra.partData[s]=this.$refs[s][0].$refs.input.value;else if("oneChoice"==e){if(this.erranderExtra.partData[s]&&this.erranderExtra.partData[s]==i)return this.erranderExtra.partData[s]="",this.diy.data.items=r()({},this.diy.data.items),this.replaceState({key:"erranderExtra",val:this.erranderExtra}),!1;this.erranderExtra.partData[s]=i,this.diy.data.items=r()({},this.diy.data.items)}else if("multipleChoices"==e){if(this.erranderExtra.partData[s]){for(var d in this.erranderExtra.partData[s])if(this.erranderExtra.partData[s][d]==i)return delete this.erranderExtra.partData[s][d],this.diy.data.items=r()({},this.diy.data.items),this.replaceState({key:"erranderExtra",val:this.erranderExtra}),!1}else this.erranderExtra.partData[s]={};this.erranderExtra.partData[s][n]=i,this.diy.data.items=r()({},this.diy.data.items),this.replaceState({key:"erranderExtra",val:this.erranderExtra})}this.replaceState({key:"erranderExtra",val:this.erranderExtra})},onCalculate:function(){var t=this;this.status.redpacket=!1;var e={is_calculate:1,extra:this.erranderExtra,id:this.id};this.util.request({url:"errander/diy/index",data:e}).then(function(e){var a=e.data.message;if(0!=a.errno)return t.util.$toast(a.message,"",1e3),-1e3==a.errno&&(delete t.erranderExtra.extra_fee[t.erranderExtra.extra_fee.current.pindex][t.erranderExtra.extra_fee.current.cindex],t.util.$toast(a.message,"",1e3),t.replaceState({key:"erranderExtra",val:t.erranderExtra}),!1);(a=a.message).buyaddress&&a.buyaddress.errno&&t.util.$toast(a.buyaddress.message,"",1e3);var s=r()(t.erranderExtra,{delivery_nowtime:a.order.delivery_nowtime,acceptaddress_id:a.acceptaddress_id,buyaddress_id:a.buyaddress_id,extra_fee:a.order.extra_fee,redpacket_id:a.order.redpacket_id,goods_price:a.order.goods_price,delivery_day:a.order.delivery_day,delivery_time:a.order.delivery_time,delivery_tips:a.order.delivery_tips});t.basicPart=a.basic,t.diy.data.items=r()({},t.diy.data.items),t.replaceState({key:"erranderExtra",val:s}),t.redPackets=a.redPackets,t.addresses=a.addresses,t.buyaddress=a.buyaddress,t.acceptaddress=a.acceptaddress,t.order=a.order})},onSubmit:function(){var t=this;if(1==this.submitDisabled)return!1;if(!this.erranderExtra.note)return this.util.$toast("请填写物品信息","",1500),!1;if("buy"!=this.diy.data.page.scene){if(!this.buyaddress)return this.util.$toast("请选择取货地址","",1500),!1;if(!this.util.isValidMobile(this.buyaddress.mobile))return this.$toast("取货联系人手机号格式不正确"),!1}return this.acceptaddress?this.util.isValidMobile(this.acceptaddress.mobile)?1!=this.diy.data.fees.weight_status||this.erranderExtra.goods_weight?(this.submitDisabled=1,void this.util.request({url:"errander/orderdiy/create",data:{id:this.id,extra:this.erranderExtra}}).then(function(e){var a=e.data.message;if(a.errno)return t.submitDisabled=0,t.util.$toast(a.message,"",1e3),!1;var s=a.message;return t.$router.replace(t.util.getUrl({path:"/pages/public/pay?order_id="+s+"&order_type=errander"})),t.replaceState({key:"erranderExtra",val:{partData:{},thumbs:{}}}),!1})):(this.util.$toast("请选择物品重量","",1500),!1):(this.$toast("收货联系人手机号格式不正确"),!1):(this.util.$toast("请选择收货地址",""),!1)},onLoad:function(){var t=this;this.id!=this.erranderSceneId&&(this.setState({type:"erranderExtra",key:"delivery_tips",val:0}),this.replaceState({key:"erranderSceneId",val:this.id})),this.erranderExtra.notes&&!this.erranderExtra.note&&(this.erranderExtra.note=this.erranderExtra.notes[this.id]),this.util.request({url:"errander/diy/index",data:{id:this.id,extra:this.erranderExtra,forceLocation:1}}).then(function(e){t.showPreLoading=!1;var a=e.data.message;if(0!=a.errno)return t.util.$toast(a.message,"",1e3),!1;a=a.message,"nearby"!=t.erranderExtra.buyAddressType&&"store"!=t.erranderExtra.buyAddressType||(t.buyAddressType=t.erranderExtra.buyAddressType);var s=r()(t.erranderExtra,{delivery_day:a.order.delivery_day,delivery_time:a.order.delivery_time,delivery_nowtime:a.order.delivery_nowtime,buyaddress_id:a.buyaddress_id,acceptaddress_id:a.acceptaddress_id,delivery_tips:a.order.delivery_tips,extra_fee:a.order.extra_fee||{},goods_weight:a.order.goods_weight,goods_price:a.order.goods_price,note:a.order.note});t.replaceState({key:"erranderExtra",val:s}),t.redPackets=a.redPackets,t.addresses=a.addresses,t.buyaddress=a.buyaddress,t.acceptaddress=a.acceptaddress,t.diy=a.diy,t.basicPart=a.basic,t.order=a.order,t.erranderExtra&&t.erranderExtra.note&&(t.note=t.erranderExtra.note),t.erranderExtra.extra_fee||(t.erranderExtra.extra_fee={}),t.setState({type:"erranderExtra",key:"agentid",val:a.diy.agentid}),t.title="跑腿下单",a.diy.data.page.title&&(t.title=a.diy.data.page.title),t.util.setWXTitle(t.title)}).catch(function(e){"fail"==window.forceGetLocationStatus&&(t.showPreLoading=!1,t.getLocationStatus=!1)})},onAddLabel:function(t){this.note=this.note+t+" "}}),watch:{note:function(){this.setState({type:"erranderExtra",key:"note",val:this.note});var t=this.id,e=this.erranderExtra.notes;e||(e={}),e[t]=this.note,this.setState({type:"erranderExtra",key:"notes",val:e})}},created:function(){this.query=this.$route.query,this.query&&(this.id=this.query.id)},mounted:function(){this.onLoad()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"paotui-scene"}},[a("public-header",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"content"},[t._l(t.diy.data.items,function(e,s){return["banner"==e.id?a("div",{staticClass:"diy-banner"},t._l(e.data,function(e,s){return a("div",{key:s},[a("img",{attrs:{src:e.imgurl},on:{click:function(a){return t.util.jsUrl(e.linkurl)}}})])}),0):"picture"==e.id?a("div",{staticClass:"diy-picture"},[a("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"#ff2d4b"}},t._l(e.data,function(e,s){return a("van-swipe-item",{key:s},[a("div",{on:{click:function(a){return t.util.jsUrl(e.linkurl)}}},[a("img",{attrs:{src:e.imgurl,alt:""}})])])}),1)],1):"line"==e.id?a("div",{staticClass:"diy-line",style:{background:e.style.background,padding:e.style.padding+"px 0px"}},[a("div",{staticClass:"line"})]):"blank"==e.id?a("div",{staticClass:"diy-blank",style:{height:e.style.height+"px",background:e.style.background}}):"uploadImg"==e.id?a("div",{staticClass:"diy-uploadImg",style:{"margin-top":e.style.marginTop+"px"}},t._l(e.data,function(e,r){return a("div",{staticClass:"uploadImg-item"},[a("div",{staticClass:"uploadImg-title"},[t._v(t._s(e.title))]),t._v(" "),t.erranderExtra.thumbs&&t.erranderExtra.thumbs[s+"_"+r]&&t.erranderExtra.thumbs[s+"_"+r].length>0?[a("div",{staticClass:"img-list"},[t._l(t.erranderExtra.thumbs[s+"_"+r],function(e,i){return a("div",{staticClass:"img-group"},[a("div",{staticClass:"upload-img"},[a("img",{attrs:{src:e.url,alt:""}}),t._v(" "),a("span",{staticClass:"del-img",on:{click:function(e){return t.onDelThumb(s,r,i)}}},[a("i",{staticClass:"icon icon-close"})])])])}),t._v(" "),t.erranderExtra.thumbs[s+"_"+r].length<3?a("div",{staticClass:"img-group"},[a("div",{staticClass:"upload-img"},[a("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){return t.onUploadImage(s,r,e)}}}),t._v(" "),a("img",{attrs:{src:"static/img/add_pic.png",alt:""}})])]):t._e()],2)]:[a("div",{staticClass:"uploadImg-right"},[a("div",{staticClass:"uploadImg-tips"},[a("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){return t.onUploadImage(s,r,e)}}}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.placeholder)+"\n\t\t\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"icon icon-right"})])]],2)}),0):"basic"==e.id?[a("van-cell-group",{staticClass:"diy-scene-shopinfo margin-10-b"},[a("van-field",{staticClass:"border-0px",attrs:{type:"textarea",placeholder:e.params.placeholder,rows:"4"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),t._v(" "),a("ul",{staticClass:"info-tags"},t._l(e.data,function(e,s){return a("li",{key:s,staticClass:"tag-item",on:{click:function(a){return t.onAddLabel(e.tags)}}},[t._v(t._s(e.tags))])}),0),t._v(" "),1==e.params.estimate?a("van-cell",{staticClass:"van-hairline--top"},[a("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[a("img",{staticClass:"amount-icon",attrs:{src:"static/img/amount_icon.png",alt:""}}),t._v(" "),a("span",{staticClass:"font-12"},[t._v("骑手垫付商品费，收货后与配送员结清")])]),t._v(" "),a("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(e){return t.onChangeStatus("prefee")}},slot:"right-icon"},[a("span",{staticClass:"font-12",class:{"c-disabled":!t.erranderExtra.goods_price}},[t._v(t._s(t.erranderExtra.goods_price>0?"预估 ￥"+t.erranderExtra.goods_price:"预估商品费"))]),t._v(" "),a("span",{staticClass:"icon icon-right c-disabled font-12"})])]):t._e()],1),t._v(" "),a("van-cell-group",{staticClass:"diy-scene-address margin-10-b"},["buy"==e.params.scene?[a("van-cell",{staticClass:"border-0px"},[a("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"margin-15-r"},[t._v(t._s(e.params.buytitle))]),t._v(" "),a("div",{staticClass:"address-type flex"},[a("div",{staticClass:"address-type-item font-12 ",class:{active:"store"==t.buyAddressType},on:{click:function(e){return t.onToggleBuyAddressType("store")}}},[t._v(t._s(e.params.buytype1title))]),t._v(" "),a("div",{staticClass:"address-type-item font-12",class:{active:"nearby"==t.buyAddressType},on:{click:function(e){return t.onToggleBuyAddressType("nearby")}}},[t._v(" "+t._s(e.params.buytype2title))])])])]),t._v(" "),"store"==t.erranderExtra.buyAddressType?a("van-cell",{attrs:{to:t.util.getUrl({path:"/pages/paotui/location"})}},[a("div",{staticClass:"flex",attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"margin-15-r opacity-1"},[t._v("111")]),t._v(" "),t.erranderExtra.buyaddress&&t.erranderExtra.buyaddress.location_x?a("span",[t._v(t._s(t.erranderExtra.buyaddress.address))]):a("span",{staticClass:"c-disabled"},[t._v(t._s(e.params.buytype1placehode))])]),t._v(" "),a("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"icon icon-right c-disabled font-12"})])]):t._e(),t._v(" "),a("van-cell",{attrs:{to:t.util.getUrl({path:"/pages/member/address",query:{channel:"errander",input:"accept",erranderId:t.id}})}},[a("div",{staticClass:"flex ",attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"margin-15-r"},[t._v(t._s(e.params.accepttitle))]),t._v(" "),t.erranderExtra.acceptaddress_id>0?a("span",[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.acceptaddress.address)+"-"+t._s(t.acceptaddress.number)+"\n\t\t\t\t\t\t\t\t\t"),a("div",{staticClass:"c-disabled"},[t._v(t._s(t.acceptaddress.realname)+" "+t._s(t.acceptaddress.sex)+" "+t._s(t.acceptaddress.mobile))])]):a("span",{staticClass:"c-disabled"},[t._v(t._s(e.params.acceptplacehode))])]),t._v(" "),a("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"icon icon-right c-disabled font-12"})])])]:"delivery"==e.params.scene?[a("van-cell",{attrs:{to:t.util.getUrl({path:"/pages/member/address",query:{channel:"errander",input:"buy",erranderId:t.id}})}},[a("div",{staticClass:"flex height-50",attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"address-icon bg-primary"}),t._v(" "),t.erranderExtra.buyaddress_id>0?a("div",[a("div",[t._v(t._s(t.buyaddress.address)+"-"+t._s(t.buyaddress.number))]),t._v(" "),a("div",{staticClass:"c-disabled"},[t._v(t._s(t.buyaddress.realname)+" "+t._s(t.buyaddress.mobile))])]):a("span",{staticClass:"c-disabled"},[t._v(t._s(e.params.buytype1placehode))])]),t._v(" "),a("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"icon icon-right c-disabled font-12"})])]),t._v(" "),a("van-cell",{attrs:{to:t.util.getUrl({path:"/pages/member/address",query:{channel:"errander",input:"accept",erranderId:t.id}})}},[a("div",{staticClass:"flex height-50",attrs:{slot:"title"},slot:"title"},[a("div",{staticClass:"address-icon bg-danger"}),t._v(" "),t.erranderExtra.acceptaddress_id>0?a("div",[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.acceptaddress.address)+" "+t._s(t.acceptaddress.number)+"\n\t\t\t\t\t\t\t\t\t"),a("div",{staticClass:"c-disabled"},[t._v(t._s(t.acceptaddress.realname)+" "+t._s(t.acceptaddress.mobile))])]):a("span",{staticClass:"c-disabled"},[t._v(t._s(e.params.acceptplacehode))])]),t._v(" "),a("div",{staticClass:"flex",attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"icon icon-right c-disabled font-12"})])])]:t._e(),t._v(" "),a("van-row",[a("van-col",{staticClass:"van-hairline--right",attrs:{span:"12"}},[a("van-cell",{on:{click:function(e){return t.onChangeStatus("deliveryTime")}}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.erranderExtra.delivery_day)+" "+t._s(t.erranderExtra.delivery_time==t.order.delivery_nowtime?"立即送出":t.erranderExtra.delivery_time))]),t._v(" "),a("div",{staticClass:"icon icon-right c-disabled font-12",attrs:{slot:"right-icon"},slot:"right-icon"})])],1),t._v(" "),a("van-col",{attrs:{span:"12"}},[a("van-cell",{on:{click:function(e){return t.onChangeStatus("goodsWeight")}}},[t.erranderExtra.goods_weight>t.diy.data.fees.weight_data.basic?a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.erranderExtra.goods_weight)+"公斤")]):a("div",{attrs:{slot:"title"},slot:"title"},[t._v("物品重量："+t._s(t.diy.data.fees.weight_data.basic)+"公斤内")]),t._v(" "),a("div",{staticClass:"icon icon-right c-disabled font-12",attrs:{slot:"right-icon"},slot:"right-icon"})])],1)],1)],2)]:"text"==e.id?[a("van-cell-group",{staticClass:"diy-scene-text margin-10-b",style:{"margin-top":e.style.marginTop+"px"}},[t._l(e.data,function(e,r){return[a("van-field",{ref:s+"_"+r,refInFor:!0,attrs:{value:t.erranderExtra.partData[s+"_"+r],label:e.title,placeholder:"请输入提示信息"},on:{blur:function(e){return t.onGetPartData({type:"text",info:{name:s+"_"+r}})}}})]})],2)]:"multipleChoices"==e.id?t._l(e.data,function(r,i){return a("div",{staticClass:"diy-scene-choose flex-lr margin-10-b",style:{"margin-top":e.style.marginTop+"px"}},[a("div",{staticClass:"choose-title ellipsis font-14"},[t._v(t._s(r.title))]),t._v(" "),a("div",{staticClass:"choose-options"},t._l(r.options,function(e,r){return a("span",{key:r,staticClass:"option-item font-14",class:{active:t.erranderExtra.partData[s+"_"+i]&&t.erranderExtra.partData[s+"_"+i][r]==e.name},on:{click:function(a){return t.onGetPartData({type:"multipleChoices",info:{name:s+"_"+i,value:e.name,cindex:r}})}}},[t._v(t._s(e.name))])}),0)])}):"oneChoice"==e.id?t._l(e.data,function(r,i){return a("div",{staticClass:"diy-scene-choose flex-lr margin-10-b",style:{"margin-top":e.style.marginTop+"px"}},[a("div",{staticClass:"choose-title ellipsis font-14"},[t._v(t._s(r.title))]),t._v(" "),a("div",{staticClass:"choose-options"},t._l(r.options,function(e,r){return a("span",{key:r,staticClass:"option-item font-14",class:{active:t.erranderExtra.partData[s+"_"+i]&&t.erranderExtra.partData[s+"_"+i]==e.name},on:{click:function(a){return t.onGetPartData({type:"oneChoice",info:{name:s+"_"+i,value:e.name,cindex:r}})}}},[t._v(t._s(e.name))])}),0)])}):t._e()]}),t._v(" "),t.diy.data.fees&&t.diy.data.fees.extra_fee?t._l(t.diy.data.fees.extra_fee,function(e,s){return 1==e.status?a("div",{key:s,staticClass:"diy-scene-choose flex-lr margin-10-b"},[a("div",{staticClass:"choose-title ellipsis font-14"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"choose-options"},t._l(e.data,function(e,r){return a("span",{key:r,staticClass:"option-item font-14",class:{active:t.erranderExtra.extra_fee[s]&&t.erranderExtra.extra_fee[s][r]==r},on:{click:function(e){return t.onGetExtraFee(r,s)}}},[t._v(t._s(e.fee_name)+"-￥"+t._s(e.fee))])}),0)]):t._e()}):t._e(),t._v(" "),a("van-cell-group",{staticClass:"diy-scene-extra-fee"},[a("van-cell",[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.basicPart.params.redpacketname))]),t._v(" "),a("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[t.order.redpacket?a("span",{staticClass:"c-danger font-12",on:{click:function(e){return t.onChangeStatus("redpacket")}}},[t._v("-￥"+t._s(t.order.redpacket.discount))]):a("span",{staticClass:"font-12",class:{"c-danger":t.redPackets.length>0,"c-disabled":t.redPackets.length<=0},on:{click:function(e){return t.onChangeStatus("redpacket")}}},[t._v(t._s(t.redPackets.length>0?t.redPackets.length+"个可用红包":t.basicPart.params.noredpacketnote))]),t._v(" "),a("span",{staticClass:"icon icon-right c-disabled font-12"})])]),t._v(" "),1==t.basicPart.params.showtips?a("van-cell",{on:{click:function(e){return t.onChangeStatus("tip")}}},[a("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.basicPart.params.tipsname))]),t._v(" "),a("div",{attrs:{slot:"right-icon"},slot:"right-icon"},[a("span",{staticClass:"font-14",class:{"c-danger":t.erranderExtra.delivery_tips>0}},[t._v(t._s(t.erranderExtra.delivery_tips>0?"￥"+t.erranderExtra.delivery_tips:t.basicPart.params.tipsnote))]),t._v(" "),a("span",{staticClass:"icon icon-right c-disabled font-12"})])]):t._e()],1),t._v(" "),a("p",{staticClass:"diy-scene-agreement font-12",on:{click:t.onShowAgreement}},[t._v("点击查看 "),a("span",{staticClass:"c-default"},[t._v("《跑腿服务协议》")])])],2),t._v(" "),a("div",{staticClass:"diy-scene-submit van-hairline--top"},[a("div",{staticClass:"order-info flex-lr"},[a("div",{staticClass:"font-12"},[t._v(t._s(t.order.distance>0?t.order.distance+"公里":""))]),t._v(" "),a("div",{staticClass:"font-12 c-default",on:{click:function(e){return t.onChangeStatus("fee")}}},[a("span",[t._v(t._s(t.basicPart.params.feesname))]),t._v(" "),a("span",{staticClass:"c-danger"},[a("span",{staticClass:"font-20"},[t._v(t._s(t.order.final_fee))]),t._v("元\n\t\t\t\t")]),t._v(" "),a("span",{staticClass:"icon icon-fold font-12 c-disabled"})])]),t._v(" "),1==t.diy.is_rest?a("van-button",{attrs:{disabled:"",size:"normal",block:!0}},[t._v("休息中暂不提供服务")]):a("van-button",{attrs:{size:"normal",block:!0,type:"danger"},on:{click:t.onSubmit}},[t._v(t._s(t.basicPart.params.submitname))])],1),t._v(" "),a("van-popup",{staticClass:"popup-prefee",attrs:{position:"bottom"},model:{value:t.status.prefee,callback:function(e){t.$set(t.status,"prefee",e)},expression:"status.prefee"}},[a("div",{staticClass:"popup-title flex-lr border-1px-b"},[a("span",{staticClass:"font-14",on:{click:function(e){return t.onChangeStatus("prefee")}}},[t._v("取消")]),t._v(" "),a("span",[t._v("预估商品费")]),t._v(" "),a("span",{staticClass:"font-14",on:{click:t.onConfirmPrefee}},[t._v("确定")])]),t._v(" "),a("div",{staticClass:"popup-content"},[a("p",{staticClass:"prefee-tips"},[t._v("供骑手代购时参考（可选填）")]),t._v(" "),a("div",{staticClass:"prefee-edit"},[t._v("\n\t\t\t\t预估 ¥\n\t\t\t\t"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.erranderExtra.goods_price,expression:"erranderExtra.goods_price"}],attrs:{type:"text"},domProps:{value:t.erranderExtra.goods_price},on:{input:function(e){e.target.composing||t.$set(t.erranderExtra,"goods_price",e.target.value)}}})]),t._v(" "),a("p",{staticClass:"prefee-max c-disabled"},[a("span",{staticClass:"icon icon-info"}),t._v("最高500元\n\t\t\t")])])]),t._v(" "),t.order.delivery_info&&t.erranderExtra.delivery_day?a("van-popup",{staticClass:"popup-delivery-time",attrs:{position:"bottom"},model:{value:t.status.deliveryTime,callback:function(e){t.$set(t.status,"deliveryTime",e)},expression:"status.deliveryTime"}},[a("div",{staticClass:"popup-title flex-lr border-1px-b"},[a("span",{staticClass:"font-14",on:{click:function(e){return t.onChangeStatus("deliveryTime")}}},[t._v("取消")]),t._v(" "),a("span",[t._v("取件时间")]),t._v(" "),a("span",{staticClass:"opacity-1"},[t._v("确定")])]),t._v(" "),a("div",{staticClass:"popup-content flex-lr"},[a("div",{staticClass:"date"},t._l(t.order.delivery_info,function(e,s){return a("div",{staticClass:"date-item",class:{active:s==t.erranderExtra.delivery_day},on:{click:function(e){return t.onSelectDay(s)}}},[t._v(t._s(s))])}),0),t._v(" "),a("div",{staticClass:"time"},t._l(t.order.delivery_info[t.erranderExtra.delivery_day].times,function(e,s){return a("div",{key:s,staticClass:"time-item",class:{active:e==t.erranderExtra.delivery_time},on:{click:function(a){return t.onSelectTime(e)}}},[t._v("\n\t\t\t\t\t"+t._s(e==t.order.delivery_nowtime?"立即送出":e)+"\n\t\t\t\t\t"),a("span",{staticClass:"icon",class:{"icon-check":e==t.erranderExtra.delivery_time}})])}),0)])]):t._e(),t._v(" "),""!==t.erranderExtra.goods_weight&&t.diy.data&&t.diy.data.fees?a("van-popup",{staticClass:"popup-goods-weight",attrs:{position:"bottom"},model:{value:t.status.goodsWeight,callback:function(e){t.$set(t.status,"goodsWeight",e)},expression:"status.goodsWeight"}},[a("div",{staticClass:"popup-title flex-lr border-1px-b"},[a("span",{staticClass:"font-14",on:{click:function(e){return t.onChangeStatus("goodsWeight")}}},[t._v("取消")]),t._v(" "),a("span",[t._v("物品重量")]),t._v(" "),a("span",{staticClass:"opacity-1"},[t._v("确定")])]),t._v(" "),a("div",{staticClass:"popup-content"},[a("p",{staticClass:"weight-label"},[t._v("重量")]),t._v(" "),t.erranderExtra.goods_weight>t.diy.data.fees.weight_data.basic?a("div",{staticClass:"weight-value"},[t._v(t._s(t.erranderExtra.goods_weight)+"公斤")]):a("div",{staticClass:"weight-value"},[t._v("小于"+t._s(t.diy.data.fees.weight_data.basic)+"公斤")]),t._v(" "),a("div",{staticClass:"slider"},[a("van-slider",{attrs:{min:t.diy.data.fees.weight_data.basic,max:100},on:{change:t.onChangeWeight},model:{value:t.goodsWeight,callback:function(e){t.goodsWeight=e},expression:"goodsWeight"}}),t._v(" "),a("div",{staticClass:"slide-line-bottom"},[a("div",{staticClass:"left"},[t._v("小于"+t._s(t.diy.data.fees.weight_data.basic)+"公斤")]),t._v(" "),a("div",{staticClass:"right"},[t._v("100公斤")])])],1)])]):t._e(),t._v(" "),a("van-popup",{staticClass:"popup-goods-weight popup-tip",attrs:{position:"bottom"},model:{value:t.status.tip,callback:function(e){t.$set(t.status,"tip",e)},expression:"status.tip"}},[a("div",{staticClass:"popup-title flex-lr border-1px-b"},[a("span",{staticClass:"font-14",on:{click:function(e){return t.onChangeStatus("tip")}}},[t._v("取消")]),t._v(" "),a("span",[t._v("小费")]),t._v(" "),a("span",{staticClass:"opacity-1"},[t._v("确定")])]),t._v(" "),a("div",{staticClass:"popup-content"},[a("p",{staticClass:"weight-label"},[t._v("加小费抢单更快哦(单位:元)")]),t._v(" "),t.erranderExtra.delivery_tips>0?a("div",{staticClass:"weight-value"},[t._v(t._s(t.erranderExtra.delivery_tips)+"元")]):t._e(),t._v(" "),a("div",{staticClass:"slider"},[a("van-slider",{attrs:{min:t.basicPart.params.minfee,max:t.basicPart.params.maxfee},on:{change:t.onChangeTip},model:{value:t.tip,callback:function(e){t.tip=e},expression:"tip"}}),t._v(" "),a("div",{staticClass:"slide-line-bottom"},[a("div",{staticClass:"left"},[t._v(t._s(t.basicPart.params.minfee)+"元")]),t._v(" "),a("div",{staticClass:"right"},[t._v(t._s(t.basicPart.params.maxfee)+"元")])])],1)])]),t._v(" "),a("van-popup",{staticClass:"popup-fee",attrs:{position:"bottom"},model:{value:t.status.fee,callback:function(e){t.$set(t.status,"fee",e)},expression:"status.fee"}},[a("div",{staticClass:"popup-title flex-lr border-1px-b"},[a("span",{staticClass:"font-12 flex opacity-1"},[t._v("\n\t\t\t\t\t价格规则\n\t\t\t\t\t"),a("span",{staticClass:"icon icon-right font-12 "})]),t._v(" "),a("span",{on:{click:function(e){return t.util.getUrl({path:"/pages/paotui/feeRule",query:{id:t.id}})}}},[t._v("费用明细")]),t._v(" "),a("span",{staticClass:"font-12 c-primary flex opacity-1"},[t._v("\n\t\t\t\t\t价格规则\n\t\t\t\t\t"),a("span",{staticClass:"icon icon-right font-12 "})])]),t._v(" "),a("div",{staticClass:"popup-content"},[a("van-cell-group",{staticClass:"border-0px"},[t._l(t.order.fees,function(e,s){return[""!=e.fee?a("van-cell",{staticClass:"border-0px",class:{"c-danger":e.fee<0},attrs:{title:e.title,value:e.fee_cn}}):t._e()]})],2)],1)]),t._v(" "),t.redPackets.length>0?a("van-popup",{attrs:{position:"bottom"},model:{value:t.status.redpacket,callback:function(e){t.$set(t.status,"redpacket",e)},expression:"status.redpacket"}},[a("div",{staticClass:"popup-redpacket"},[a("div",{staticClass:"popup-title van-hairline--bottom text-center"},[t._v("可用红包")]),t._v(" "),a("div",{staticClass:"popup-container"},[a("load",{attrs:{type:"loaded",text:"可用红包("+t.redPackets.length+"个)",bgcolor:"#f5f5f5"}}),t._v(" "),t._l(t.redPackets,function(e){return a("div",{key:e.id,staticClass:"redPacket-list content-padded"},[a("div",{staticClass:"redPacket-list-item",on:{click:function(a){return t.onSelectRedpacket(e.id)}}},[a("div",{staticClass:"redPacket-list-item-container"},[a("div",{staticClass:"redPacket-info row"},[a("div",{staticClass:"col-50"},[a("span",{staticClass:"redPacket-title"},[t._v(t._s(e.title))])]),t._v(" "),a("div",{staticClass:"col-50 text-right"},[a("div",{staticClass:"price"},[t._v("￥"),a("span",{staticClass:"price-num"},[t._v(t._s(e.discount))])])])]),t._v(" "),a("div",{staticClass:"redPacket-use-limit row"},[a("div",{staticClass:"col-60"},[t._v(t._s(e.day_cn))]),t._v(" "),a("div",{staticClass:"col-40 text-right"},[a("p",{staticClass:"use-condition"},[t._v("满"+t._s(e.condition)+"元可用")])])])]),t._v(" "),a("span",{staticClass:"circle circle-left"}),t._v(" "),a("span",{staticClass:"circle circle-right"}),t._v(" "),e.id==t.order.redpacket_id?a("div",{staticClass:"selected-status"},[a("img",{staticClass:"img-100",attrs:{src:"static/img/success.png",alt:""}})]):t._e()])])})],2),t._v(" "),a("div",{staticClass:"popup-cancle van-hairline--top",on:{click:function(e){return t.onSelectRedpacket(0)}}},[t._v("不使用红包")])])]):t._e(),t._v(" "),a("transition",{attrs:{name:"loading"}},[t.showPreLoading?a("iloading"):t._e()],1),t._v(" "),a("agreement",{attrs:{show:t.agreemnetShow,title:t.agreementtitle,content:t.diy.agreement},on:{agreementHide:function(e){t.agreemnetShow=!1}}}),t._v(" "),t.getLocationStatus?t._e():a("failed-tips",{attrs:{failedTips:t.failedTips}})],1)},staticRenderFns:[]};var v=a("VU/8")(p,u,!1,function(t){a("ADWL")},null,null);e.default=v.exports},ADWL:function(t,e){}});
//# sourceMappingURL=113.1a81581c879fc8f68876.js.map