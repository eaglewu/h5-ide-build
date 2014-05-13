define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var r="";return r+='\r\n<button class="modal tooltip btn-toolbar icon-update-app toolbar-btn-primary" data-tooltip="'+u(n.i18n.call(e,"TOOL_TIP_UPDATE_APP",{hash:{},data:t}))+'" id="toolbar-edit-app">'+u(n.i18n.call(e,"TOOL_EDIT_APP",{hash:{},data:t}))+"</button>\r\n",r}function c(e,t){var r="";return r+='\r\n<button class="modal tooltip btn-toolbar icon-apply-app toolbar-btn-primary" data-tooltip="'+u(n.i18n.call(e,"TOOL_TIP_SAVE_UPDATE_APP",{hash:{},data:t}))+'" id="toolbar-save-edit-app" data-dismiss="false">'+u(n.i18n.call(e,"TOOL_APPLY_EDIT",{hash:{},data:t}))+'</button>\r\n<button class="modal tooltip btn-toolbar icon-cancel-update-app seperator" data-tooltip="'+u(n.i18n.call(e,"TOOL_TIP_CANCEL_UPDATE_APP",{hash:{},data:t}))+'" id="toolbar-cancel-edit-app"></button>\r\n',r}function h(e,t){var r="",i;r+="\r\n\r\n",i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.has_instance_store_ami),{hash:{},inverse:a.program(9,v,t),fn:a.program(6,p,t),data:t});if(i||i===0)r+=i;r+="\r\n<button ",i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_pending),{hash:{},inverse:a.program(27,N,t),fn:a.program(25,T,t),data:t});if(i||i===0)r+=i;r+=' data-tooltip="',i=n.i18n.call(e,"TOOL_TIP_TERMINATE_APP",{hash:{},data:t});if(i||i===0)r+=i;r+='"></button>\r\n<button class="modal btn-toolbar tooltip icon-save-app seperator" data-tooltip=\''+u(n.i18n.call(e,"TOOL_TIP_SAVE_APP_TO_STACK",{hash:{},data:t}))+'\' id="toolbar-app-to-stack" data-modal-template="modalAppToStack" data-modal-data=\'{"title":"',i=n.i18n.call(e,"TOOL_POP_TIT_APP_TO_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+='","intro-1":"',i=n.i18n.call(e,"TOOL_POP_INTRO_1",{hash:{},data:t});if(i||i===0)r+=i;r+='","intro-2":"',i=n.i18n.call(e,"TOOL_POP_INTRO_2",{hash:{},data:t});if(i||i===0)r+=i;r+='","replace":"',i=n.i18n.call(e,"TOOL_POP_REPLACE_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+='","replace-info":"'+u(n.i18n.call(e,"TOOL_POP_REPLACE_STACK_INTRO",{hash:{},data:t}))+'","replace-info-end":"'+u(n.i18n.call(e,"TOOL_POP_REPLACE_STACK_INTRO_END",{hash:{},data:t}))+'","save-new":"',i=n.i18n.call(e,"TOOL_POP_SAVE_NEW_STACK",{hash:{},data:t});if(i||i===0)r+=i;r+='","instruction":"',i=n.i18n.call(e,"TOOL_POP_SAVE_STACK_INSTRUCTION",{hash:{},data:t});if(i||i===0)r+=i;r+='","error-message":"',i=n.i18n.call(e,"TOOL_POP_STACK_NAME_ERROR",{hash:{},data:t});if(i||i===0)r+=i;r+='", "input":"'+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i))+'", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_SAVE_TO_STACK",{hash:{},data:t});if(i||i===0)r+=i;return r+='", "color":"blue" }\' data-modal-dismiss="true"></button>\r\n',r}function p(e,t){var r="",i;r+="\r\n<button ",i=n.unless.call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_running),{hash:{},inverse:a.noop,fn:a.program(7,d,t),data:t});if(i||i===0)r+=i;r+=' class="modal tooltip btn-toolbar icon-stop disabled" data-modal-data=\'{"title":"',i=n.i18n.call(e,"TOOL_POP_TIT_STOP_APP",{hash:{},data:t});if(i||i===0)r+=i;r+='", "body":"',i=n.i18n.call(e,"TOOL_POP_BODY_STOP_APP_LEFT",{hash:{},data:t});if(i||i===0)r+=i;r+=" "+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i)),i=n.i18n.call(e,"TOOL_POP_BODY_STOP_APP_RIGHT",{hash:{},data:t});if(i||i===0)r+=i;r+='", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_STOP_APP",{hash:{},data:t});if(i||i===0)r+=i;return r+='", "color":"red" }\' data-modal-dismiss="true" data-tooltip="'+u(n.i18n.call(e,"TOOL_TIP_CONTAINS_INSTANCE_STORED",{hash:{},data:t}))+'"></button>\r\n',r}function d(e,t){return'style="display:none;"'}function v(e,t){var r="",i;r+="\r\n<button ",i=n.unless.call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_running),{hash:{},inverse:a.noop,fn:a.program(7,d,t),data:t});if(i||i===0)r+=i;r+=" ",i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_pending),{hash:{},inverse:a.program(12,g,t),fn:a.program(10,m,t),data:t});if(i||i===0)r+=i;r+=' data-tooltip="'+u(n.i18n.call(e,"TOOL_TIP_STOP_APP",{hash:{},data:t}))+'"></button>\r\n<button ',i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_running),{hash:{},inverse:a.noop,fn:a.program(7,d,t),data:t});if(i||i===0)r+=i;r+=" ",i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_pending),{hash:{},inverse:a.program(23,x,t),fn:a.program(21,S,t),data:t});if(i||i===0)r+=i;return r+=' data-tooltip="'+u(n.i18n.call(e,"TOOL_TIP_START_APP",{hash:{},data:t}))+'"></button>\r\n',r}function m(e,t){return'class="tooltip btn-toolbar icon-stop disabled"'}function g(e,t){var r="",i;r+=' class="modal tooltip btn-toolbar icon-stop" data-modal-template="modalApp" data-modal-data=\'{"title":',i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_production),{hash:{},inverse:a.program(15,b,t),fn:a.program(13,y,t),data:t});if(i||i===0)r+=i;r+=', "body":"',i=n.i18n.call(e,"TOOL_POP_BODY_STOP_APP_LEFT",{hash:{},data:t});if(i||i===0)r+=i;r+=" "+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i)),i=n.i18n.call(e,"TOOL_POP_BODY_STOP_APP_RIGHT",{hash:{},data:t});if(i||i===0)r+=i;r+='", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_STOP_APP",{hash:{},data:t});if(i||i===0)r+=i;r+='", "color":"red", "is_asg":',i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_asg),{hash:{},inverse:a.program(19,E,t),fn:a.program(17,w,t),data:t});if(i||i===0)r+=i;r+=', "is_production":',i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_production),{hash:{},inverse:a.program(19,E,t),fn:a.program(17,w,t),data:t});if(i||i===0)r+=i;return r+=', "app_name": "'+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i))+'", "is_stop": true}\' data-modal-dismiss="true" id="toolbar-stop-app"',r}function y(e,t){var r="",i;r+='"',i=n.i18n.call(e,"TOOL_POP_TIT_STOP_PRD_APP",{hash:{},data:t});if(i||i===0)r+=i;return r+='"',r}function b(e,t){var r="",i;r+='"',i=n.i18n.call(e,"TOOL_POP_TIT_STOP_APP",{hash:{},data:t});if(i||i===0)r+=i;return r+='"',r}function w(e,t){return"true"}function E(e,t){return"false"}function S(e,t){return'class="tooltip btn-toolbar icon-play disabled" '}function x(e,t){var r="",i;r+='class="modal tooltip btn-toolbar icon-play"  data-modal-template="modalApp" data-modal-data=\'{"title":"',i=n.i18n.call(e,"TOOL_POP_TIT_START_APP",{hash:{},data:t});if(i||i===0)r+=i;r+='", "body":"',i=n.i18n.call(e,"TOOL_POP_BODY_START_APP_LEFT",{hash:{},data:t});if(i||i===0)r+=i;r+=" "+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i)),i=n.i18n.call(e,"TOOL_POP_BODY_START_APP_RIGHT",{hash:{},data:t});if(i||i===0)r+=i;r+='", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_START_APP",{hash:{},data:t});if(i||i===0)r+=i;return r+='", "color":"blue" }\' data-modal-dismiss="true" id="toolbar-start-app"',r}function T(e,t){return'class="btn-toolbar tooltip icon-terminate disabled"'}function N(e,t){var r="",i;r+='class="modal btn-toolbar tooltip icon-terminate seperator" data-modal-template="modalApp" data-modal-data=\'{"title":',i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_production),{hash:{},inverse:a.program(30,k,t),fn:a.program(28,C,t),data:t});if(i||i===0)r+=i;r+=', "body":"',i=n.i18n.call(e,"TOOL_POP_BODY_TERMINATE_APP_LEFT",{hash:{},data:t});if(i||i===0)r+=i;r+=" "+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i)),i=n.i18n.call(e,"TOOL_POP_BODY_TERMINATE_APP_RIGHT",{hash:{},data:t});if(i||i===0)r+=i;r+='", "confirm":"',i=n.i18n.call(e,"TOOL_POP_BTN_TERMINATE_APP",{hash:{},data:t});if(i||i===0)r+=i;r+='", "color":"red", "is_production":',i=n["if"].call(e,(i=e&&e.item_flags,i==null||i===!1?i:i.is_production),{hash:{},inverse:a.program(19,E,t),fn:a.program(17,w,t),data:t});if(i||i===0)r+=i;return r+=', "app_name": "'+u((i=(i=e&&e.item_flags,i==null||i===!1?i:i.name),typeof i===f?i.apply(e):i))+'" }\' data-modal-dismiss="true" id="toolbar-terminate-app"',r}function C(e,t){var r="",i;r+='"',i=n.i18n.call(e,"TOOL_POP_TIT_TERMINATE_PRD_APP",{hash:{},data:t});if(i||i===0)r+=i;return r+='"',r}function k(e,t){var r="",i;r+='"',i=n.i18n.call(e,"TOOL_POP_TIT_TERMINATE_APP",{hash:{},data:t});if(i||i===0)r+=i;return r+='"',r}function L(e,t){return"tooltip"}function A(e,t){return"disabled"}function O(e,t){return"selected"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this,f="function";o=n.unless.call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_app_updating),{hash:{},inverse:a.program(3,c,i),fn:a.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\r\n\r\n",o=n.unless.call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_app_updating),{hash:{},inverse:a.noop,fn:a.program(5,h,i),data:i});if(o||o===0)s+=o;s+='\r\n\r\n\r\n\r\n<button class="btn-toolbar icon-zoom-in ',o=n["if"].call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_zoomin),{hash:{},inverse:a.program(34,A,i),fn:a.program(32,L,i),data:i});if(o||o===0)s+=o;s+="\" data-tooltip='"+u(n.i18n.call(t,"TOOL_TIP_ZOOM_IN",{hash:{},data:i}))+"'></button>\r\n<button class=\"btn-toolbar icon-zoom-out seperator ",o=n["if"].call(t,(o=t&&t.item_flags,o==null||o===!1?o:o.is_zoomout),{hash:{},inverse:a.program(34,A,i),fn:a.program(32,L,i),data:i});if(o||o===0)s+=o;s+="\" data-tooltip='"+u(n.i18n.call(t,"TOOL_TIP_ZOOM_OUT",{hash:{},data:i}))+'\'></button>\r\n\r\n<button class="btn-toolbar icon-export-png tooltip seperator" data-analytics-plus="export_png" id="toolbar-export-png" data-tooltip=\''+u(n.i18n.call(t,"TOOL_EXPORT_AS_PNG",{hash:{},data:i}))+'\'></button>\r\n\r\n<!-- line style -->\r\n<div class="selectbox btn-toolbar toolbar-line-style seperator">\r\n  <button class="selection tooltip" data-tooltip="'+u(n.i18n.call(t,"TOOL_TIP_LINESTYLE",{hash:{},data:i}))+'" id="toolbar-line-style"><i class="'+u((o=(o=t&&t.lines,o==null||o===!1?o:o.icon),typeof o===f?o.apply(t):o))+'"></i></button>\r\n  <ul class="dropdown">\r\n    <li id="toolbar-straight" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style0),{hash:{},inverse:a.noop,fn:a.program(36,O,i),data:i});if(o||o===0)s+=o;s+='\'> <i class="icon-straight"></i><span>'+u(n.i18n.call(t,"TOOL_LBL_LINESTYLE_STRAIGHT",{hash:{},data:i}))+'</span></li>\r\n    <li id="toolbar-elbow" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style1),{hash:{},inverse:a.noop,fn:a.program(36,O,i),data:i});if(o||o===0)s+=o;s+='\'> <i class="icon-elbow"></i><span>'+u(n.i18n.call(t,"TOOL_LBL_LINESTYLE_ELBOW",{hash:{},data:i}))+'</span></li>\r\n    <li id="toolbar-bezier-q" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style2),{hash:{},inverse:a.noop,fn:a.program(36,O,i),data:i});if(o||o===0)s+=o;s+='\'> <i class="icon-bezier-q"></i><span>'+u(n.i18n.call(t,"TOOL_LBL_LINESTYLE_QUADRATIC_BELZIER",{hash:{},data:i}))+'</span></li>\r\n    <li id="toolbar-bezier-qt" class=\'item ',o=n["if"].call(t,(o=t&&t.lines,o==null||o===!1?o:o.is_style3),{hash:{},inverse:a.noop,fn:a.program(36,O,i),data:i});if(o||o===0)s+=o;return s+='\'><i class="icon-bezier-qt"></i><span>'+u(n.i18n.call(t,"TOOL_LBL_LINESTYLE_SMOOTH_QUADRATIC_BELZIER",{hash:{},data:i}))+'</span></li>\r\n  </ul>\r\n</div>\r\n\r\n<button class="btn-toolbar tooltip icon-refresh seperator" data-tooltip="'+u(n.i18n.call(t,"TOOL_TIP_REFRESH_REOURCES",{hash:{},data:i}))+'" id="btn-app-refresh"></button>\r\n\r\n<!-- env:dev                                                                                                                                                                                                                                                                                       env:dev:end -->\r\n',s};return e.template(t)});