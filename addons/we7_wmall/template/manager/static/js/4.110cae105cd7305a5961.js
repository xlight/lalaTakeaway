webpackJsonp([4],{HZwF:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mvHQ"),n=i.n(a),o=i("Cz8s"),s=i("+TmT"),l=i("deIj"),r={data:function(){return{id:0,type:"qualification",store:{qualification:{business:{},service:{},more1:{},more2:{}}},qualification:{business:[{url:""}],service:[{url:""}],more1:[{url:""}],more2:[{url:""}]},islegal:!1,showPreLoading:!0}},components:{publicHeader:o.a,uploader:s.a},methods:{onSetImg:function(t,e){this.qualification[t][0].url=e[0].url,this.store.qualification[t].thumb=e[0].filename},onSetBusiness:function(t){this.onSetImg("business",t)},onSetService:function(t){this.onSetImg("service",t)},onSetMore1:function(t){this.onSetImg("more1",t)},onSetMore2:function(t){this.onSetImg("more2",t)},onDelete:function(t,e){this.qualification[t].push({url:""}),this.store.qualification[t].thumb=""},onDeleteBusiness:function(t){this.onDelete("business",t)},onDeleteService:function(t){this.onDelete("service",t)},onDeleteMore1:function(t){this.onDelete("more1",t)},onDeleteMore2:function(t){this.onDelete("more2",t)},onLoad:function(){var t=this;Object(l.a)({url:"manage/shop/index/info",vue:t,autoAssign:!0,variable:"store",data:{type:t.type},success:function(e){for(var i in t.islegal=!0,t.store.qualification)"business"!=i&&"service"!=i&&"more1"!=i&&"more2"!=i||(t.qualification[i][0].url=t.store.qualification[i].thumb)}})},onSubmit:function(){var t=this;if(!t.islegal)return!1;t.islegal=!1,Object(l.c)({url:"manage/shop/index/setting",vue:t,data:{type:t.type,value:n()(t.store.qualification)},redirect:t.util.getUrl({path:"pages/shop/index"}),fail:function(e){t.util.$toast(e),t.islegal=!0}})}},created:function(){this.$route.query&&this.$route.query.id&&(this.id=this.$route.query.id)},mounted:function(){this.onLoad()}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"store-qualification"}},[i("public-header",{attrs:{title:"营业资质"}}),t._v(" "),i("div",{staticClass:"content"},[i("van-cell-group",{staticClass:"border-0px"},[i("van-cell",{attrs:{title:"营业执照"}}),t._v(" "),i("div",{staticClass:"uploader-wrapper flex-lr"},[i("uploader",{attrs:{max:"1",value:t.qualification.business[0]&&t.qualification.business[0].url?t.qualification.business:[]},on:{delete:t.onDeleteBusiness,onGetUrl:t.onSetBusiness}},[i("div",{staticClass:"upload-bg",attrs:{slot:"img"},slot:"img"},[i("i",{staticClass:"icon icon-add"}),t._v("\n\t\t\t\t\t\t请上传营业执照照片\n\t\t\t\t\t")])])],1),t._v(" "),i("van-cell",{attrs:{title:"餐饮服务许可证"}}),t._v(" "),i("div",{staticClass:"uploader-wrapper flex-lr"},[i("uploader",{attrs:{max:"1",value:t.qualification.service[0]&&t.qualification.service[0].url?t.qualification.service:[]},on:{delete:t.onDeleteService,onGetUrl:t.onSetService}},[i("div",{staticClass:"upload-bg",attrs:{slot:"img"},slot:"img"},[i("i",{staticClass:"icon icon-add"}),t._v("\n\t\t\t\t\t\t请上传餐饮服务许可证照片\n\t\t\t\t\t")])])],1),t._v(" "),i("van-cell",{attrs:{title:"更多资质"}}),t._v(" "),i("div",{staticClass:"uploader-wrapper flex-lr"},[i("uploader",{attrs:{max:"1",value:t.qualification.more1[0]&&t.qualification.more1[0].url?t.qualification.more1:[]},on:{delete:t.onDeleteMore1,onGetUrl:t.onSetMore1}},[i("div",{staticClass:"upload-bg",attrs:{slot:"img"},slot:"img"},[i("i",{staticClass:"icon icon-add"}),t._v("\n\t\t\t\t\t\t请上传更多资质一照片\n\t\t\t\t\t")])]),t._v(" "),i("uploader",{attrs:{max:"1",value:t.qualification.more2[0]&&t.qualification.more2[0].url?t.qualification.more2:[]},on:{delete:t.onDeleteMore2,onGetUrl:t.onSetMore2}},[i("div",{staticClass:"upload-bg",attrs:{slot:"img"},slot:"img"},[i("i",{staticClass:"icon icon-add"}),t._v("\n\t\t\t\t\t\t请上传更多资质二照片\n\t\t\t\t\t")])])],1)],1),t._v(" "),i("div",{staticClass:"tip font-14 c-gray padding-15-lr padding-10-tb"},[t._v("建议上传图片前添加水印")]),t._v(" "),i("div",{staticClass:"padding-15"},[i("van-button",{staticClass:"font-16 bg-info",attrs:{size:"normal",disabled:!t.islegal,block:""},on:{click:t.onSubmit}},[t._v("提交")])],1)],1),t._v(" "),t.showPreLoading?i("iloading"):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(r,u,!1,function(t){i("njDt")},null,null);e.default=c.exports},njDt:function(t,e){}});