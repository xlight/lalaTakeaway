webpackJsonp([28],{JydX:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("woOf"),o=s.n(a),i=s("Gu7T"),r=s.n(i),l=s("Cz8s"),n=s("+CBI"),c=s("deIj"),d=s("+TmT"),u={data:function(){return{id:0,thumb:{},thumbs:[],bestsetting:"0",category:[],goodsCategory:!1,datePicker:{type:"",maxDate:new Date(2050,12),currentDate:new Date,status:!1},records:{name:"",price:"",oldprice:"",total:"",cid:"",category_title:"",click:"",thumb:[],thumbs:[],use_limit_day:"",starttime_cn:"",endtime_cn:"",content:"",description:"",buy_note:"",falsejoinnum:"",falselooknum:"",falsesharenum:"",status:""},showPreLoading:!0}},components:{publicHeader:l.a,iswitch:n.a,Uploader:d.a},methods:{onLoad:function(){var t=this;Object(c.a)({vue:t,url:"manage/seckill/goods/post",data:{id:t.id},success:function(e){if(t.records=t.util.extend(t.records,e.records),e.category&&(t.category=[].concat(r()(t.category),r()(e.category))),t.records.thumbs&&t.records.thumbs.length>0)for(var s in t.records.thumbs)t.thumbs.push({url:t.records.thumbs[s]})}})},onUploadImage:function(t){var e=this;e.util.image({obj:t,success:function(t,s){s.url&&s.filename&&(e.thumb={url:s.url,filename:s.filename},e.thumb=o()({},e.thumb),e.records.thumb=e.thumb.url)},options:{channel:"h5"}})},onChangeThumbs:function(t){var e=[];if(t&&t.length>0)for(var s in t)e.push(t[s].url);this.records.thumbs=e},onTogglePopup:function(){this.goodsCategory=!this.goodsCategory},onConfirmCategory:function(t){this.records.cid=t.id,this.records.category_title=t.title,this.onTogglePopup()},onToggleDatePicker:function(t){this.datePicker.status=!this.datePicker.status,t&&(this.datePicker.type=t)},onConfirmTime:function(t){var e=this.util.formatDate(t);"start"==this.datePicker.type?this.records.starttime_cn=e:this.records.endtime_cn=e,this.onToggleDatePicker()},jsToggleSwitch:function(t){this.util.jsToggleSwitch({vue:this,key:t.keys,value:t.value})},onSubmit:function(){return this.records.name?this.records.oldprice?this.records.price?void Object(c.c)({vue:this,url:"manage/seckill/goods/post",data:{id:this.id,data:this.records},redirect:this.util.getUrl({path:"/pages/gohome/seckill/goods/list"})}):(this.util.$toast("商品现价不能为空","",1e3),!1):(this.util.$toast("商品原价不能为空","",1e3),!1):(this.util.$toast("名称不能为空","",1e3),!1)}},created:function(){this.$route.query&&this.$route.query.id>0&&(this.id=parseInt(this.$route.query.id))},mounted:function(){this.onLoad()}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"seckill-post"}},[s("public-header",{attrs:{title:"添加抢购商品"}}),t._v(" "),s("div",{staticClass:"content"},[s("van-cell-group",[s("van-cell",{staticClass:"no-fix flex "},[s("div",{staticClass:"padding-10-b flex-lr"},[s("div",[t._v("商品图片")]),t._v(" "),s("div",{staticClass:"c-gray"},[t._v("此图片为商品列表页图片")])]),t._v(" "),s("div",{staticClass:"goods-thumb-wrap"},[t.records.thumb.length>0?s("img",{staticClass:"goods-thumb ",attrs:{src:t.records.thumb,alt:""}}):s("img",{staticClass:"goods-thumb ",attrs:{src:"static/img/add_pic.png",alt:""}}),t._v(" "),s("input",{staticClass:"weui-uploader__input",attrs:{type:"file",multiple:"multiple",accept:"image/*"},on:{change:function(e){t.onUploadImage(e)}}})])]),t._v(" "),s("van-cell",[s("div",{staticClass:"upload-img"},[s("div",{staticClass:"flex-lr goods-img"},[s("div",[t._v("商品图集")]),t._v(" "),s("div",{staticClass:"c-gray"},[t._v("最多显示4张，此图片为商品图集")])]),t._v(" "),s("uploader",{attrs:{max:4,value:t.thumbs},on:{onGetUrl:t.onChangeThumbs,delete:t.onChangeThumbs}})],1)]),t._v(" "),s("van-field",{attrs:{label:"商品名称",placeholder:"请填写商品名称","input-align":"right"},model:{value:t.records.name,callback:function(e){t.$set(t.records,"name",e)},expression:"records.name"}}),t._v(" "),s("van-field",{attrs:{label:"商品原价",placeholder:"请填写商品原价","input-align":"right"},model:{value:t.records.oldprice,callback:function(e){t.$set(t.records,"oldprice",e)},expression:"records.oldprice"}}),t._v(" "),s("van-field",{attrs:{label:"商品现价",placeholder:"请填写商品现价","input-align":"right"},model:{value:t.records.price,callback:function(e){t.$set(t.records,"price",e)},expression:"records.price"}}),t._v(" "),s("van-field",{attrs:{label:"库存",placeholder:"请填写商品库存","input-align":"right"},model:{value:t.records.total,callback:function(e){t.$set(t.records,"total",e)},expression:"records.total"}})],1),t._v(" "),s("van-cell-group",{staticClass:"margin-10-t"},[s("van-cell",{attrs:{title:"商品分类"}},[s("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:t.onTogglePopup},slot:"right-icon"},[s("span",[t._v(t._s(t.records.category_title?t.records.category_title:"请选择"))]),t._v(" "),s("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),s("van-field",{attrs:{label:"关注度",placeholder:"请填写关注度","input-align":"right"},model:{value:t.records.click,callback:function(e){t.$set(t.records,"click",e)},expression:"records.click"}}),t._v(" "),s("van-cell",{attrs:{title:"活动开始时间"}},[s("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(e){t.onToggleDatePicker("start")}},slot:"right-icon"},[s("span",[t._v(t._s(this.records.starttime_cn?this.records.starttime_cn:"点击选择"))]),t._v(" "),s("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),s("van-cell",{attrs:{title:"活动结束时间"}},[s("div",{staticClass:"flex",attrs:{slot:"right-icon"},on:{click:function(e){t.onToggleDatePicker("end")}},slot:"right-icon"},[s("span",[t._v(t._s(this.records.endtime_cn?this.records.endtime_cn:"点击选择"))]),t._v(" "),s("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),s("van-field",{attrs:{label:"消费截止时间",placeholder:"用户购买成功后几天后失效","input-align":"right"},model:{value:t.records.use_limit_day,callback:function(e){t.$set(t.records,"use_limit_day",e)},expression:"records.use_limit_day"}}),t._v(" "),s("van-cell",[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("活动状态")]),t._v(" "),s("iswitch",{attrs:{slot:"right-icon",value:t.records.status,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"records.status"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1),t._v(" "),s("van-field",{attrs:{label:"简单描述",placeholder:"请简单描述商品，控制在30字以内","input-align":"right"},model:{value:t.records.content,callback:function(e){t.$set(t.records,"content",e)},expression:"records.content"}}),t._v(" "),s("van-field",{attrs:{label:"商品详情",type:"textarea",placeholder:"请填写商品详情",rows:"1","input-align":"right",autosize:""},model:{value:t.records.description,callback:function(e){t.$set(t.records,"description",e)},expression:"records.description"}}),t._v(" "),s("van-field",{attrs:{label:"购买须知",type:"textarea",placeholder:"请填写购买须知",rows:"1","input-align":"right",autosize:""},model:{value:t.records.buy_note,callback:function(e){t.$set(t.records,"buy_note",e)},expression:"records.buy_note"}})],1),t._v(" "),s("van-cell-group",{staticClass:"margin-10-t"},[s("van-cell",[s("div",{attrs:{slot:"title"},slot:"title"},[t._v("高级设置")]),t._v(" "),s("iswitch",{attrs:{slot:"right-icon",value:t.bestsetting,"condition-open":"1","condition-close":"0","text-open":"ON","text-close":"OFF",keys:"bestsetting"},on:{change:t.jsToggleSwitch},slot:"right-icon"})],1)],1),t._v(" "),"1"==t.bestsetting?[s("van-cell-group",{staticClass:"margin-10-t"},[s("van-field",{attrs:{label:"虚拟参与人数",placeholder:"请输入虚拟参与人数","input-align":"right"},model:{value:t.records.falsejoinnum,callback:function(e){t.$set(t.records,"falsejoinnum",e)},expression:"records.falsejoinnum"}}),t._v(" "),s("van-field",{attrs:{label:"虚拟浏览量",placeholder:"请输入虚拟浏览量","input-align":"right"},model:{value:t.records.falselooknum,callback:function(e){t.$set(t.records,"falselooknum",e)},expression:"records.falselooknum"}}),t._v(" "),s("van-field",{attrs:{label:"虚拟分享次数",placeholder:"请输入虚拟分享次数","input-align":"right"},model:{value:t.records.falsesharenum,callback:function(e){t.$set(t.records,"falsesharenum",e)},expression:"records.falsesharenum"}})],1)]:t._e(),t._v(" "),s("div",{staticClass:"padding-15"},[s("van-button",{staticClass:"bg-info",attrs:{size:"normal",block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],2),t._v(" "),t.showPreLoading?s("iloading"):t._e(),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.goodsCategory,callback:function(e){t.goodsCategory=e},expression:"goodsCategory"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"所属分类",columns:t.category,"value-key":"title"},on:{cancel:t.onTogglePopup,confirm:t.onConfirmCategory}})],1),t._v(" "),s("van-popup",{staticClass:"popup-time",attrs:{position:"bottom"},model:{value:t.datePicker.status,callback:function(e){t.$set(t.datePicker,"status",e)},expression:"datePicker.status"}},[s("van-datetime-picker",{attrs:{type:"datetime","min-data":t.datePicker.currentDate,"max-date":t.datePicker.maxDate},on:{confirm:t.onConfirmTime,cancel:t.onToggleDatePicker},model:{value:t.datePicker.currentDate,callback:function(e){t.$set(t.datePicker,"currentDate",e)},expression:"datePicker.currentDate"}})],1)],1)},staticRenderFns:[]};var h=s("VU/8")(u,g,!1,function(t){s("O06v")},null,null);e.default=h.exports},O06v:function(t,e){}});
//# sourceMappingURL=28.d459dc113e3427f6a05f.js.map