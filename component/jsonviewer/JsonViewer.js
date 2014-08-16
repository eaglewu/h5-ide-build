(function(){define(["event","./diff","./view","./JsonDiffLib","./jqUi"],function(e,t,n,r){var i,s,o,u,a;return s=null,o=".",e.on(e.OPEN_PROPERTY,function(e,t){return $("#jsonViewer").length&&(o=t||".",i()),null}),u=function(){return $("#diffChangesOnly").is(":checked")?($("#jsondiffContainer").toggleClass("changesOnly",!0),$("#jsondiffContainer").find(".changed, .added, .removed").each(function(e,t){var n;n=$(t).parent();while(n.attr("id")!=="jsondiffContainer")n.toggleClass("hasChanges",!0).removeClass("closed"),n=n.parent();return null})):$("#jsondiffContainer").removeClass("changesOnly"),null},i=function(){var e,t,n,r,i,u,a,f,l,c,h;t=$.trim($("#diffSearch").val()),n=$("#diffTypeSelect").val()||".",i=0,u=null,h=$("#jsonCompContainer").children().children("li").children().children("span");for(l=0,c=h.length;l<c;l++)f=h[l],f=$(f),a=f.children(":first-child").text().replace(": ",""),e=s[a],!t||e.uid.indexOf(t)!==-1||e.type.indexOf(t)!==-1||e.name.indexOf(t)!==-1?r=!0:r=!1,n==="selected"?e.uid!==o&&o!=="."&&(r=!1):e.type.indexOf(n)===-1&&(r=!1),r&&(++i,u=f.parent()),r?f.parent().parent().css({display:""}):f.parent().parent().css({display:"none"});return o==="."&&n==="selected"?$("#jsonCompContainer").children().children("li").children().addClass("closed"):i===1&&u.removeClass("closed"),null},a=function(e){var t,n,u,a,f,l,c,h,p,d,v,m,g;u=e.component,a=e.layout,delete e.component,delete e.layout,s=u,t=$.extend(!0,{},e),r.compare(t,t,"attribute",$("#jsonAttrContainer").empty()[0]),r.compare(u,u,"component",$("#jsonCompContainer").empty()[0]),r.compare(a,a,"layout",$("#jsonLayoutContainer").empty()[0]),$("#jsonCompContainer, #jsonAttrContainer, #jsonLayoutContainer").children().removeClass("closed"),h={},c=[];for(p in u)n=u[p],h[n.type]||(h[n.type]=!0,c.push(n.type));f="<option value='.'>All</option><option value='selected' selected='selected'>Selected Component</option><option value='.'>----------</option>",o=((m=App.workspaces.getAwakeSpace().getSelectedComponent())!=null?m.id:void 0)||".",g=c.sort();for(d=0,v=g.length;d<v;d++)l=g[d],f+="<option value='"+l+"'>"+l+"</option>";return $("#diffTypeSelect").html(f),i(),null},{showDiffDialog:function(e,n){return modal(t()),$("#modal-box").css({width:"98%",height:"98%",top:"1%",left:"1%"}),$("#diffTextarea1").val(JSON.stringify(e)),$("#diffTextarea2").val(JSON.stringify(n)),r.compare(e,n,"CanvasData",$("#jsondiffContainer")[0]),$("#modal-box").on("click","ul",function(e){return e.target.tagName&&e.target.tagName.toUpperCase()==="UL"&&$(e.target).toggleClass("closed"),!1}),$("#diffTextarea1, #diffTextarea2").on("focus",function(){return setTimeout(function(e){return function(){return $(e).select()}}(this),10),null}),$("#diffSwap").on("click",function(){var e;return e=$("#diffTextarea1").val(),$("#diffTextarea1").val($("#diffTextarea2").val()),$("#diffTextarea2").val(e),null}),$("#diffClear").on("click",function(){return $("#diffTextarea1").val(""),$("#diffTextarea2").val(""),null}),$("#diffCompare").on("click",function(){var e,t,n;try{t=JSON.parse($("#diffTextarea1").css({background:""}).val())}catch(i){e=i,$("#diffTextarea1").css({background:"res"})}try{n=JSON.parse($("#diffTextarea2").css({background:""}).val())}catch(i){e=i,$("#diffTextarea2").css({background:"res"})}return t&&n&&r.compare(t,n,"CanvasData",$("#jsondiffContainer").empty()[0]),u(),null}),u(),$("#diffChangesOnly").on("change",function(e){return u(),null}),null},showViewDialog:function(e){var t,r,s;return $("#jsonViewer").length?($("#diffWrap").hide(),$("#jsonViewer .modal-header").dblclick(),null):($(n()).appendTo("body").resizable().draggable({handle:".modal-header"}),s=localStorage.getItem("debug/jsonViewW"),t=localStorage.getItem("debug/jsonViewH"),s&&t&&$("#jsonViewer").width(s).height(t),a(e),$("#jsonViewer").on("click","ul",function(e){return e.target.tagName&&e.target.tagName.toUpperCase()==="UL"&&$(e.target).toggleClass("closed"),!1}),$("#jsonViewer").on("dblclick",".modal-header",function(){var e;return e=$("#diffWrap"),e.is(":hidden")?($("#jsonViewer").css({height:$("#jsonViewer").attr("data-height")||"70%",width:$("#jsonViewer").attr("data-width")||"50%","min-width":"540px"}),e.show()):($("#jsonViewer").attr({"data-height":$("#jsonViewer").height(),"data-width":$("#jsonViewer").width()}).css({height:"auto",width:"150px","min-width":"150px"}),e.hide()),null}),$("#jsonViewer").on("click",".modal-close",function(){return localStorage.setItem("debug/jsonViewW",$("#jsonViewer").width()),localStorage.setItem("debug/jsonViewH",$("#jsonViewer").height()),$("#jsonViewer").remove(),null}),$("#diffRefresh").on("click",function(){return a(d().serialize())}),r=null,$("#diffSearch").on("keydown",function(){return r&&clearTimeout(r),r=setTimeout(function(){return i()},200),null}),$("#diffTypeSelect").on("change",i),null)}}})}).call(this);