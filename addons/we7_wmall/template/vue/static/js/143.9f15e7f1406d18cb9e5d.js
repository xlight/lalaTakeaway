webpackJsonp([143],{KXjv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Gu7T"),r=s.n(a),o=s("Cz8s"),i=s("mzkE"),n={data:function(){return{hotStores:[],searchHistorys:[],keyword:"",menufooter:{},showPreLoading:!0}},components:{PublicHeader:o.a,PublicFooter:i.a},methods:{onLoad:function(){var t=this;this.util.request({url:"haodian/hunt/index",data:{menufooter:1}}).then(function(e){t.showPreLoading=!1;var s=e.data.message;s.errno?t.$toast(s.message):(t.hotStores=[].concat(r()(t.hotStores),r()(s.message.hotStores.store)),t.searchHistorys=[].concat(r()(t.searchHistorys),r()(s.message.searchHistorys)))})},onClearHistory:function(){var t=this;this.$dialog.confirm({message:"确定清除历史记录吗"}).then(function(e){"confirm"==e&&t.util.request({url:"haodian/hunt/truncate"}).then(function(e){var s=e.data.message;s.errno?t.$toast(s.message):t.searchHistorys=[]}).catch(function(t){})})},onKeyword:function(t){this.keyword=t},onSearch:function(){if(!this.keyword)return!1;this.keyword;this.$router.push(this.util.getUrl({path:"/gohome/pages/haodian/searchResult",query:{key:this.keyword}}))}},mounted:function(){this.onLoad()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"haodian-search"}},[s("public-header",{attrs:{title:"好店搜索"}}),t._v(" "),s("public-footer",{attrs:{menufooter:t.menufooter}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"search-header van-hairline--bottom"},[s("div",{staticClass:"search-content"},[s("van-icon",{attrs:{name:"search"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入商家"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})],1),t._v(" "),s("div",{staticClass:"search-btn",on:{click:t.onSearch}},[t._v("搜索")])]),t._v(" "),t.hotStores.length>0||t.searchHistorys.length>0?s("div",{staticClass:"rmd-history"},[t.hotStores.length>0?s("div",{staticClass:"search-rmd-wrap"},[t._m(0),t._v(" "),s("div",{staticClass:"search-rmd"},t._l(t.hotStores,function(e,a){return s("router-link",{key:a,attrs:{to:t.util.getUrl({path:"/gohome/pages/haodian/detail",query:{sid:e.id}}),tag:"div"}},[t._v(t._s(e.title))])}),1)]):t._e(),t._v(" "),t.searchHistorys.length>0?s("div",{staticClass:"search-history-wrap"},[s("div",{staticClass:"search-rmd-title"},[s("div",{staticClass:"van-hairline--bottom"},[t._v("历史搜索")]),t._v(" "),s("div",{staticClass:"icon icon-delete",on:{click:t.onClearHistory}})]),t._v(" "),s("div",{staticClass:"search-rmd"},t._l(t.searchHistorys,function(e,a){return s("div",{key:a,on:{click:function(s){return t.onKeyword(e)}}},[t._v(t._s(e))])}),0)]):t._e()]):t._e()]),t._v(" "),s("transition",{attrs:{name:"van-fade"}},[t.showPreLoading?s("iloading"):t._e()],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-rmd-title "},[e("div",{staticClass:"van-hairline--bottom"},[this._v("热门搜索")])])}]};var h=s("VU/8")(n,c,!1,function(t){s("Nzfy")},null,null);e.default=h.exports},Nzfy:function(t,e){}});