(function(){define(["event","i18n!nls/lang.js","common_handle","UI.notification","UI.tour","backbone","jquery","handlebars","underscore"],function(e,t,n){var r,i;return r=Backbone.View.extend({el:$("#main"),delay:null,open_fail:!1,initialize:function(){return $(window).on("beforeunload",this.beforeunloadEvent),$(document).on("keydown",this.globalKeyEvent)},showMain:function(){var e;void 0,$("#waiting-bar-wrapper").hasClass("waiting-bar")&&this.toggleWaiting(),this.delay&&clearTimeout(this.delay),MC.data.loading_wrapper_html||(MC.data.loading_wrapper_html=$("#loading-bar-wrapper").html());if($("#loading-bar-wrapper").html().trim()==="")return;return e=$("#loading-bar-wrapper").find("div"),e.fadeOut("normal",function(){return e.remove(),$("#wrapper").removeClass("main-content")}),this.open_fail||delete MC.open_failed_list[MC.data.current_tab_id],this.open_fail=!1,null},showLoading:function(t,n){var r;return void 0,$("#loading-bar-wrapper").html(n?MC.template.loadingTransparent():MC.data.loading_wrapper_html),r=this,this.delay=setTimeout(function(){void 0;if($("#loading-bar-wrapper").html().trim()!=="")return r.open_fail=!0,e.trigger(e.SWITCH_MAIN),e.trigger(e.SHOW_DESIGN_OVERLAY,"OPEN_TAB_FAIL",t)},3e4),null},toggleWaiting:function(){return void 0,$("#waiting-bar-wrapper").removeClass("waiting-bar"),this.hideStatubar()},showDashbaordTab:function(){return void 0,void 0,MC.data.dashboard_type==="OVERVIEW_TAB"?this.showOverviewTab():this.showRegionTab(),this.hideStatubar()},showOverviewTab:function(){return void 0,$("#tab-content-dashboard").addClass("active"),$("#tab-content-region").removeClass("active"),$("#tab-content-design").removeClass("active"),$("#tab-content-process").removeClass("active")},showRegionTab:function(){return void 0,$("#tab-content-region").addClass("active"),$("#tab-content-dashboard").removeClass("active"),$("#tab-content-design").removeClass("active"),$("#tab-content-process").removeClass("active")},showTab:function(){return void 0,$("#tab-content-design").addClass("active"),$("#tab-content-dashboard").removeClass("active"),$("#tab-content-region").removeClass("active"),$("#tab-content-process").removeClass("active"),this.hideStatubar(),null},showProcessTab:function(){return void 0,$("#tab-content-process").addClass("active"),$("#tab-content-dashboard").removeClass("active"),$("#tab-content-region").removeClass("active"),$("#tab-content-design").removeClass("active"),this.hideStatubar()},showDisconnected:function(){if($(".disconnected-msg").show().length>0)return;return $(MC.template.disconnectedMsg()).appendTo("body").on("mouseover",function(){$(".disconnected-msg").addClass("hovered"),$("body").on("mousemove.disconnectedmsg",function(e){var t,n,r,i;t=$(".disconnected-msg"),n=t.offset(),r=e.pageX,i=e.pageY;if(r<n.left||i<n.top||r>=n.left+t.outerWidth()||i>=n.top+t.outerHeight())$("body").off("mousemove.disconnectedmsg"),t.removeClass("hovered")})})},hideDisconnected:function(){return $(".disconnected-msg").remove()},beforeunloadEvent:function(){var e,r,i;if(MC.browser==="msie"&&MC.browserVersion===10)return;if(!n.cookie.getCookieByName("usercode"))return;return r=!0,e=null,!_.isEmpty(MC.common.other.canvasData.data())&&!_.isEmpty(MC.common.other.canvasData.origin())&&(i=Tabbar.current)!=="dashboard"&&i!=="appview"&&i!=="process"?(MC.common.other.canvasData.isModified()?r=!1:void 0,e=MC.common.other.canvasData.get("id")):void 0,_.each(MC.tab,function(t,n){return void 0,n.split("-")[0]==="appview"?void 0:!_.isEqual(t.data,t.origin_data)&&n!==e?r=!1:void 0,r}),void 0,r?void 0:t.ide.BEFOREUNLOAD_MESSAGE},hideStatubar:function(){void 0;if($.trim($("#status-bar-modal").html()))return $("#status-bar-modal").empty(),$("#status-bar-modal").hide(),e.trigger(e.UNLOAD_TA_MODAL)},globalKeyEvent:function(e){var t;t=e.target.nodeName.toLowerCase();if(e.which===8&&t!=="input"&&t!=="textarea"&&e.target.contentEditable!=="true")return!1;if(e.which===191&&t!=="input"&&t!=="textarea"&&e.target.contentEditable!=="true")return modal(MC.template.shortkey(),!0),!1}}),i=new r,i})}).call(this);