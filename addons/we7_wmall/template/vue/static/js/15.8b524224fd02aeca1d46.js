webpackJsonp([15],{F5wT:function(t,a){},wlre:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("Cz8s"),e=s("+TmT"),n=s("deIj"),o={data:function(){return{sid:0,store:{title:"",logo:""},haodianStar:5,note:"",thumbs:[],islegal:!0,showPreLoading:!0}},components:{PublicHeader:i.a,Uploader:e.a},methods:{onLoad:function(){Object(n.a)({vue:this,url:"haodian/comment/index",data:{sid:this.sid},autoAssign:!0,variable:"store"})},onSubmit:function(){if(!this.note)return this.util.$toast("评论内容不能为空"),!1;var t={sid:this.sid,note:this.note,haodianStar:this.haodianStar,thumbs:this.thumbs};Object(n.c)({vue:this,url:"haodian/comment/post",data:t,message:"评论成功",redirect:this.util.getUrl({path:"/gohome/pages/haodian/detail",query:{sid:this.sid}})})},onGetImgsUrl:function(t){this.thumbs=t}},mounted:function(){this.$route.query&&this.$route.query.sid&&(this.sid=this.$route.query.sid),this.onLoad()}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"haodian-comment"}},[s("public-header",{attrs:{title:"好店评价"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"margin-15 bg-default padding-15-lr radius-3"},[s("div",{staticClass:"padding-15-tb van-hairline--bottom flex-lr"},[s("div",{staticClass:"avatar-wrap"},[s("img",{attrs:{src:t.store.logo,alt:""}})]),t._v(" "),s("div",{staticClass:"basic-info ellipsis font-15 font-500"},[t._v(t._s(t.store.title))])]),t._v(" "),s("div",{staticClass:"text-center padding-5-b"},[s("van-rate",{staticClass:"margin-10-b",attrs:{size:25,count:5,color:"#FFD160"},model:{value:t.haodianStar,callback:function(a){t.haodianStar=a},expression:"haodianStar"}})],1),t._v(" "),s("van-field",{staticClass:"comment-text border-0px",attrs:{type:"textarea",placeholder:"来点评一下吧，让更多小伙伴了解！",rows:"4"},model:{value:t.note,callback:function(a){t.note=a},expression:"note"}}),t._v(" "),s("div",{staticClass:"uploader-wrap"},[s("uploader",{attrs:{max:6},on:{onGetUrl:t.onGetImgsUrl}}),t._v(" "),t.thumbs.length?t._e():s("ul",{staticClass:"upload-tips"},[s("li",{staticClass:"font-15"},[t._v("上传图片")]),t._v(" "),s("li",{staticClass:"font-12 c-gray margin-10-t"},[t._v("内容丰富的评价有机会成为优质评价哦")])])],1)],1),t._v(" "),s("div",{staticClass:"margin-15"},[s("van-button",{staticClass:"bg-danger font-16",attrs:{size:"normal",block:"",disabled:!t.islegal},on:{click:t.onSubmit}},[t._v("提交")])],1)]),t._v(" "),s("transition",{attrs:{name:"van-fade"}},[t.showPreLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[]};var l=s("VU/8")(o,r,!1,function(t){s("F5wT")},null,null);a.default=l.exports}});