webpackJsonp([86],{HWNC:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("Gu7T"),n=r.n(i),o=r("Cz8s"),d=r("7+VE"),a=r("deIj"),s={components:{publicHeader:o.a,deliveryerLocation:d.a},data:function(){return{deliveryer:[],ids:[],showPreLoading:!0}},methods:{onLoad:function(e){var t=this;e&&(t.deliveryer=[]),Object(a.a)({vue:t,url:"plateform/deliveryer/plateform/location",data:{ids:t.ids},success:function(e){t.deliveryer=[].concat(n()(t.deliveryer),n()(e.deliveryer))}})}},created:function(){this.$route.query&&this.$route.query.id&&this.ids.push(this.$route.query.id)},mounted:function(){this.onLoad()}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"deliveryer-location"}},[r("public-header",{attrs:{title:"配送员位置"}}),e._v(" "),r("div",{staticClass:"content"},[e.deliveryer.length>0?r("deliveryer-location",{attrs:{deliveryer:e.deliveryer}}):e._e(),e._v(" "),r("div",{staticClass:"icon icon-refresh",on:{click:function(t){e.onLoad(!0)}}})],1),e._v(" "),e.showPreLoading?r("iloading"):e._e()],1)},staticRenderFns:[]};var l=r("VU/8")(s,c,!1,function(e){r("dO79")},null,null);t.default=l.exports},dO79:function(e,t){}});