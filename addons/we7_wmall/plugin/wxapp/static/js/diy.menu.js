define(["jquery.ui"],function(a){var b={itemid:""};return b.init=function(a){window.tmodtpl=a.tmodtpl,b.attachurl=a.attachurl,b.menu=a.menu,b.id=a.id,b.type=a.type,b.menu||("we7_wmall_deliveryer"==b.type?b.menu={name:"自定义菜单",params:{navstyle:"0"},css:{iconColor:"#929292",iconColorActive:"#4FAE52",textColor:"#929292",textColorActive:"#4FAE52"},data:{M0123456789101:{pagePath:"pages/order/list",iconPath:"/static/img/tabbar/deliveryer/icon-1.png",selectedIconPath:"/static/img/tabbar/deliveryer/icon-1-active.png",text:"外卖"},M0123456789102:{pagePath:"pages/errander/list",iconPath:"/static/img/tabbar/deliveryer/icon-3.png",selectedIconPath:"/static/img/tabbar/deliveryer/icon-3-active.png",text:"跑腿"},M0123456789103:{pagePath:"pages/member/mine",iconPath:"/static/img/tabbar/deliveryer/icon-2.png",selectedIconPath:"/static/img/tabbar/deliveryer/icon-2-active.png",text:"我的"}}}:"we7_wmall_manager"==b.type?b.menu={name:"自定义菜单",params:{navstyle:"0"},css:{iconColor:"#929292",iconColorActive:"#2F9AEA",textColor:"#929292",textColorActive:"#2F9AEA"},data:{M0123456789101:{pagePath:"pages/order/index",iconPath:"/static/img/tabbar/manager/icon-1.png",selectedIconPath:"/static/img/tabbar/manager/icon-1-active.png",text:"外卖"},M0123456789102:{pagePath:"pages/order/tangshi/index",iconPath:"/static/img/tabbar/manager/icon-2.png",selectedIconPath:"/static/img/tabbar/manager/icon-2-active.png",text:"店内"},M0123456789103:{pagePath:"pages/shop/home",iconPath:"/static/img/tabbar/manager/icon-3.png",selectedIconPath:"/static/img/tabbar/manager/icon-3-active.png",text:"运营"},M0123456789104:{pagePath:"pages/shop/setting",iconPath:"/static/img/tabbar/manager/icon-4.png",selectedIconPath:"/static/img/tabbar/manager/icon-4-active.png",text:"设置"}}}:b.menu={name:"自定义菜单",params:{navstyle:"0"},css:{iconColor:"#163636",iconColorActive:"#ff2d4b",textColor:"#929292",textColorActive:"#ff2d4b"},data:{M0123456789101:{pagePath:"pages/home/index",iconPath:"/static/img/tabbar/icon-1.png",selectedIconPath:"/static/img/tabbar/icon-1-active.png",text:"首页"},M0123456789102:{pagePath:"pages/order/index",iconPath:"/static/img/tabbar/icon-3.png",selectedIconPath:"/static/img/tabbar/icon-3-active.png",text:"订单"},M0123456789103:{pagePath:"pages/member/mine",iconPath:"/static/img/tabbar/icon-5.png",selectedIconPath:"/static/img/tabbar/icon-5-active.png",text:"我的"}}}),tmodtpl.helper("tomedia",function(a){return"string"!=typeof a?"":0==a.indexOf("http://")||0==a.indexOf("https://")||0==a.indexOf("../addons")?a:0==a.indexOf("images/")?b.attachurl+a:void 0}),b.tplMenu(),b.tplEditor(),b.initGotop(),b.save()},b.tplMenu=function(){var a=tmodtpl("tpl-show-menu",b.menu);$("#app-preview").html(a)},b.tplEditor=function(){var a=tmodtpl("tpl-edit-menu",b.menu);$("#app-editor .inner").html(a),$("#app-editor #addItem").unbind("click").click(function(){var a=b.getId("M",0),c=$(this).closest(".form-items").data("max");if(b.length(b.menu.data)>=c)return void Notify.info("最大添加 "+c+" 个！");b.menu.data[a]={pagePath:"pages/home/index",iconPath:"/static/img/tabbar/icon-1.png",selectedIconPath:"/static/img/tabbar/icon-1-active.png",text:"菜单文字"},b.tplMenu(),b.tplEditor()}),$("#app-editor .del-item").unbind("click").click(function(){var a=$(this).closest(".form-items").data("min"),c=$(this).closest(".item").data("id");if(a){if(b.length(b.menu.data)<=a)return void Notify.info("至少保留 "+a+" 个！")}Notify.confirm("确定删除吗",function(){delete b.menu.data[c],b.tplMenu(),b.tplEditor()})}),b.tplSortable(),$("#app-editor").find(".diy-bind").bind("input propertychange change",function(){var a=$(this),c=a.data("bind"),d=a.data("bind-child"),e=a.data("bind-parent"),f=a.data("bind-init"),g="",h=this.tagName;if("INPUT"==h){var i=a.data("placeholder");g=a.val(),g=""==g?i:g}else"SELECT"==h?g=a.find("option:selected").val():"TEXTAREA"==h&&(g=a.val());g=$.trim(g),d?e?b.menu[d][e][c]=g:b.menu[d][c]=g:b.menu[c]=g,b.tplMenu(),f&&b.tplEditor()})},b.tplSortable=function(){$("#app-editor .inner").sortable({opacity:.8,placeholder:"highlight",items:".item",revert:100,scroll:!1,cancel:".goods-selector,input,.btn",axis:"y",start:function(a,b){var c=b.item.height();$(".highlight").css({height:c+22+"px","margin-bottom":"10px"}),$(".highlight").html('<div><i class="icon icon-plus"></i> 放置此处</div>'),$(".highlight div").css({"line-height":c+16+"px","font-size":"16px",color:"#999","text-align":"center",border:"2px dashed #eee"})},update:function(a,c){b.sortItems()}})},b.sortItems=function(){var a={};$("#app-editor .inner .item").each(function(){var c=$(this).data("id");a[c]=b.menu.data[c]}),b.menu.data=a,b.tplMenu()},b.initGotop=function(){$(window).bind("scroll resize",function(){$(window).scrollTop()>100?$("#gotop").show():$("#gotop").hide(),$("#gotop").unbind("click").click(function(){$("body").animate({scrollTop:"0px"},1e3)})})},b.length=function(a){if(void 0===a)return 0;var b=0;for(var c in a)b++;return b},b.getId=function(a,b){return a+(+new Date+b)},b.save=function(){$(".btn-save").unbind("click").click(function(){if($(this).data("status"))return void Notify.info("正在保存，请稍候。。。");if(!b.menu.data)return void Notify.info("菜单为空！");$(".btn-save").data("status",1).text("保存中...");var a="./index.php?c=site&a=entry&ctrl=wxapp&ac=menu&op=post&do=web&m=we7_wmall&type="+b.type;$.post(a,{id:b.id,menu:b.menu},function(a){if($(".btn-save").text("保存菜单").data("status",0),0!=a.message.errno)return void Notify.error(a.message.message);Notify.success("保存成功！",a.message.url)},"json")})},b});