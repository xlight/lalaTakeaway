webpackJsonp([4],{Du9l:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Gu7T"),i=e.n(s),d=e("Cz8s"),c=e("deIj"),n={components:{publicHeader:d.a},data:function(){return{type:"redpacket",next:"",exchange_max:0,redpacket:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},credit:{page:1,psize:15,loading:!0,finished:!1,empty:!1,data:[]},showPreLoading:!0}},methods:{onLoad:function(){var t=this;Object(c.a)({vue:t,url:"svip/records/list",data:{type:t.type,page:t[t.type].page,psize:t[t.type].psize},success:function(a){t.next=a.next,t.exchange_max=a.exchange_max;var e=t.type,s=a.records;t[e].data=[].concat(i()(t[e].data),i()(s)),t[e].data.length||(t[e].empty=!0),s&&s.length<t[e].psize&&(t[e].finished=!0),t[e].page++,t[e].loading=!1}})},onToggleType:function(t){t!=this.type&&(this.type=t,this[this.type].finished||this[this.type].data.length||this.onLoad())}},mounted:function(){this.onLoad()}},o={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"svip-record"}},[s("public-header",{attrs:{title:"奖励明细"}}),t._v(" "),s("div",{staticClass:"content"},[s("ul",{staticClass:"wrapper-list van-hairline--bottom"},[s("li",{on:{click:function(a){t.onToggleType("redpacket")}}},[s("span",{staticClass:"item",class:{active:"redpacket"==t.type}},[t._v("红包")])]),t._v(" "),s("li",{on:{click:function(a){t.onToggleType("credit")}}},[s("span",{staticClass:"item",class:{active:"credit"==t.type}},[t._v("奖励金")])])]),t._v(" "),"redpacket"==t.type?[t.redpacket.empty?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("暂无数据")])]):s("van-list",{staticClass:"record-list",attrs:{finished:t.redpacket.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.redpacket.loading,callback:function(a){t.$set(t.redpacket,"loading",a)},expression:"redpacket.loading"}},[s("div",{staticClass:"record-tips"},[s("img",{attrs:{src:e("qYgJ"),alt:""}}),t._v(" "),s("span",{staticClass:"font-bold"},[t._v("下个月的"),s("span",{staticClass:"c-danger font-bold"},[t._v(t._s(t.exchange_max)+"次")]),t._v("领红包权益将于"+t._s(t.next)+"可用")])]),t._v(" "),t._l(t.redpacket.data,function(a,e){return s("div",{key:a.id,staticClass:"record-item"},[s("div",{staticClass:"record-info flex-lr",class:{"van-hairline--top":e>0}},[s("div",[s("div",{staticClass:"font-14 font-bold"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"font-12 c-gray padding-5-t"},[t._v(t._s(a.granttime_cn))])]),t._v(" "),s("div",{staticClass:"font-14 c-danger font-bold"},[t._v("¥"+t._s(a.discount))])])])}),t._v(" "),t.redpacket.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("已经到底了")])]):t._e()],2)]:[t.credit.empty?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("暂无数据")])]):s("van-list",{staticClass:"record-list",attrs:{finished:t.credit.finished,offset:100,"immediate-check":!1},on:{load:t.onLoad},model:{value:t.credit.loading,callback:function(a){t.$set(t.credit,"loading",a)},expression:"credit.loading"}},[t._l(t.credit.data,function(a,e){return s("div",{key:a.id,staticClass:"record-item"},[s("div",{staticClass:"record-info flex-lr",class:{"van-hairline--top":e>0}},[s("div",[s("div",{staticClass:"font-14 font-bold"},[t._v(t._s(a.title))]),t._v(" "),a.remark?s("div",{staticClass:"font-13 padding-5-t"},[t._v(t._s(a.remark))]):t._e(),t._v(" "),s("div",{staticClass:"font-12 c-gray padding-5-t"},[t._v(t._s(a.createtime_cn))])]),t._v(" "),s("div",{staticClass:"font-14 font-bold",class:{"c-danger":a.num>0,"c-gray":a.num<=0}},[t._v(t._s(a.num)+"个")])])])}),t._v(" "),t.credit.finished?s("div",{staticClass:"loaded"},[s("div",{staticClass:"loaded-tips"},[t._v("已经到底了")])]):t._e()],2)]],2),t._v(" "),t.showPreLoading?s("iloading"):t._e()],1)},staticRenderFns:[]};var l=e("VU/8")(n,o,!1,function(t){e("Xv+u")},null,null);a.default=l.exports},"Xv+u":function(t,a){},qYgJ:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADnUExURUxpccuvYdPAb8epW////9bActjDdcuwX+HNhMy7ZufCedzIc862ZM+1ZtjEdcquX8mtXsquX8iqW//goMSlVcaoWdS/cMywYs+3aNC2adXAcsisXcmsXtfCdNzEes20ZtG3ac+1Z+nUf9rFeM6yZNzKfNbBct7MftvJfN3MfsWnWMWoVsOjVcWnWNC7bc61Z9C3aM+2aNC5atS+cNO8btC4adXActfDdM61ZtG6a9bBc8+3aNzJe9rGec20ZdK7bMyyY9S9b9jEdtW/cdnFd8uwYdrIecquX9bAcsuwYtG4asaoWcmsXWNiT5IAAAAzdFJOUwD5KawB7JYjEw8HERx66rL5xoAC/WVnULVUeu7vyjRI9K0MYdvmqZP0ibs1yfcx95qQ7TEIF1oAAAE/SURBVHjardDXdoJAEAbg0ViIvZc003vHhQgorGjA6Ps/T/5Zudi9zclczZnv/AM79F9llYpHWVurmNQdFJ24qNrqu/9h2Nmp68W2ja4w+PTfxhpVS56bOrGU6MfCH5X3yyzLIrpqLF3PsaUMMXodDRVV7u6DYE4E8lLbltOptu0hCL7nQBe5GBaGGt4gN18BM5vNNOTgaknkpY7KzX50RI7RgUmYEBoqc4Gx5KAwkc0jYsNOIb542szlWq0msTHKKQxLfYXtJNnt2rRkixkzU1g4RBWAeDxQ/ShssdC+yUdzcGyY8NkiDRsuHs+432liKQXinplF0UbDy1scRqGvcLMmvar5fJ6ofg6LomidYFQ+GJJRtQuVSxj72+1j2eTJ9SbDbudl2+ubWqnnkuSESC3uPZvIs+NO1j7V6O/1C2vuRq5CTawMAAAAAElFTkSuQmCC"}});