define("component/appactions/template",["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function";return s+='<header class="modal-header" style="width:390px;"><h3>'+u(n.i18n.call(t,"TOOLBAR.TIP_DELETE_STACK",{hash:{},data:i}))+'</h3><i class="modal-close">&times;</i></header>\n<div class="modal-body modal-text-wraper" style="width:390px;">\n    <div class="modal-center-align-helper">\n        <div class="modal-text-major">'+u((o=t&&t.msg,typeof o===a?o.apply(t):o))+'</div>\n    </div>\n</div>\n<div class="modal-footer">\n    <button class="btn modal-close btn-red" id="confirmRmStack">'+u(n.i18n.call(t,"TOOLBAR.POP_BTN_DELETE_STACK",{hash:{},data:i}))+'</button>\n    <button class="btn modal-close btn-silver">'+u(n.i18n.call(t,"TOOLBAR.POP_BTN_CANCEL",{hash:{},data:i}))+"</button>\n</div>",s},n.removeStackConfirm=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function";return s+='<header class="modal-header" style="width:390px;"><h3>'+u(n.i18n.call(t,"TOOLBAR.TIP_DUPLICATE_STACK",{hash:{},data:i}))+'</h3><i class="modal-close">&times;</i></header>\n<div class="modal-body modal-text-wraper" style="width:390px;">\n    <div class="modal-center-align-helper">\n        <div class="modal-control-group">\n            <label class="modal-text-major">'+u(n.i18n.call(t,"TOOLBAR.POP_BODY_DUPLICATE_STACK",{hash:{},data:i}))+'</label>\n            <input id="confirmDupStackIpt" class="input" type="text" value="'+u((o=t&&t.newName,typeof o===a?o.apply(t):o))+'">\n        </div>\n    </div>\n</div>\n<div class="modal-footer">\n    <button class="btn btn-red" id="confirmDupStack">'+u(n.i18n.call(t,"TOOLBAR.POP_BTN_DUPLICATE_STACK",{hash:{},data:i}))+'</button>\n    <button class="btn modal-close btn-silver">'+u(n.i18n.call(t,"TOOLBAR.POP_BTN_CANCEL",{hash:{},data:i}))+"</button>\n</div>",s},n.dupStackConfirm=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="";return r+="\n            <li>\n                "+u(n.i18n.call(e,"TOOLBAR.POP_START_CONFIRM_LIST_1",{hash:{},data:t}))+"\n            </li>\n        ",r}function c(e,t){var r="";return r+="\n            <li>\n                "+u(n.i18n.call(e,"TOOLBAR.POP_START_CONFIRM_LIST_2",{hash:{},data:t}))+"\n            </li>\n        ",r}function h(e,t){var r="";return r+="\n            <li>\n                "+u(n.i18n.call(e,"TOOLBAR.POP_START_CONFIRM_LIST_3",{hash:{},data:t}))+"\n            </li>\n        ",r}function p(e,t){var r="",i;r+='\n        <div class="modal-shrink">\n            <div class="sub-gray">'+u(n.i18n.call(e,"TOOLBAR.POP_START_WARNNING",{hash:{},data:t}))+'</div>\n            <div class="error">\n                '+u(n.i18n.call(e,"TOOLBAR.POP_START_MISSING_SNAPSHOT_1",{hash:{},data:t}))+" ",i=n.each.call(e,e&&e.lostDBSnapshot,{hash:{},inverse:a.noop,fn:a.program(8,d,t),data:t});if(i||i===0)r+=i;return r+=" "+u(n.i18n.call(e,"TOOLBAR.POP_START_MISSING_SNAPSHOT_2",{hash:{},data:t}))+"\n            </div>\n        </div>\n    ",r}function d(e,t){var r="",i;i=n["if"].call(e,e&&e.index,{hash:{},inverse:a.noop,fn:a.program(9,v,t),data:t});if(i||i===0)r+=i;return r+=u((i=e&&e.name,typeof i===f?i.apply(e):i)),r}function v(e,t){return", "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this,f="function";s+='<div class="modal-center-align-helper">\n    <div class="modal-text-major">'+u(n.i18n.call(t,"TOOLBAR.POP_BODY_START_APP",{hash:{},data:i}))+'</div>\n    <ul class="modal-list-items">\n        ',o=n["if"].call(t,t&&t.hasEC2Instance,{hash:{},inverse:a.noop,fn:a.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n        ",o=n["if"].call(t,t&&t.hasDBInstance,{hash:{},inverse:a.noop,fn:a.program(3,c,i),data:i});if(o||o===0)s+=o;s+="\n        ",o=n["if"].call(t,t&&t.hasASG,{hash:{},inverse:a.noop,fn:a.program(5,h,i),data:i});if(o||o===0)s+=o;s+="\n    </ul>\n    ",o=n["if"].call(t,(o=t&&t.lostDBSnapshot,o==null||o===!1?o:o.length),{hash:{},inverse:a.noop,fn:a.program(7,p,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.startAppConfirm=e.template(t),t=function(e,t,n,r,i){function f(e,t){var r="",i;return r+='\n    <div style="padding: 20px">\n        <p><b style="color:#ec3c38;">'+u((i=e&&e.appName,typeof i===o?i.apply(e):i))+" "+u(n.i18n.call(e,"POP_CONFIRM_PROD_APP_WARNING_MSG",{hash:{},data:t}))+"</b>"+u(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_MSG",{hash:{},data:t}))+" "+u(n.i18n.call(e,"POP_CONFIRM_STOP_ASG",{hash:{},data:t}))+"</p>\n        <p>"+u(n.i18n.call(e,"POP_CONFIRM_STOP_PROD_APP_INPUT_LBL",{hash:{},data:t}))+'</p>\n        <div><input class="input" style="width:351px;" id="appNameConfirmIpt"/></div>\n    </div>\n',r}function l(e,t){var r="",i;r+='\n    <div class="modal-center-align-helper" style="padding: 20px">\n        <div class="modal-text-major">'+u(n.i18n.call(e,"TOOLBAR.POP_BODY_STOP_APP_LEFT",{hash:{},data:t}))+" "+u((i=e&&e.appName,typeof i===o?i.apply(e):i))+" "+u(n.i18n.call(e,"TOOLBAR.POP_BODY_STOP_APP_RIGHT",{hash:{},data:t}))+'</div>\n        <ul class="modal-list-items">\n            ',i=n["if"].call(e,e&&e.hasEC2Instance,{hash:{},inverse:a.noop,fn:a.program(4,c,t),data:t});if(i||i===0)r+=i;r+="\n            ",i=n["if"].call(e,e&&e.hasDBInstance,{hash:{},inverse:a.noop,fn:a.program(7,p,t),data:t});if(i||i===0)r+=i;r+="\n            ",i=n["if"].call(e,e&&e.hasAsg,{hash:{},inverse:a.noop,fn:a.program(9,d,t),data:t});if(i||i===0)r+=i;return r+="\n        </ul>\n    </div>\n",r}function c(e,t){var r="",i;r+="\n                <li>\n                    "+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_1",{hash:{},data:t}))+"\n                    ",i=n["if"].call(e,e&&e.hasInstanceStore,{hash:{},inverse:a.noop,fn:a.program(5,h,t),data:t});if(i||i===0)r+=i;return r+="\n                </li>\n            ",r}function h(e,t){var r="";return r+='<span class="error">'+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_1_SPAN",{hash:{},data:t}))+"</span>",r}function p(e,t){var r="";return r+="\n                <li>\n                    "+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_2",{hash:{},data:t}))+"\n                    <span>"+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_2_SPAN",{hash:{},data:t}))+"</span>\n                </li>\n            ",r}function d(e,t){var r="";return r+="\n                <li>\n                    "+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_3",{hash:{},data:t}))+"\n                    <span>"+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_3_SPAN",{hash:{},data:t}))+"</span>\n                </li>\n            ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o="function",u=this.escapeExpression,a=this;return s=n["if"].call(t,t&&t.isProduction,{hash:{},inverse:a.program(3,l,i),fn:a.program(1,f,i),data:i}),s||s===0?s:""},n.stopAppConfirm=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="loading-spinner"></div>'},n.loading=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="",i;i=n["if"].call(e,t==null||t===!1?t:t.index,{hash:{},inverse:u.noop,fn:u.program(2,c,t),data:t});if(i||i===0)r+=i;return r+=f((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceIdentifier),typeof i===a?i.apply(e):i))+'(<span class="db-stop-status">'+f((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceStatus),typeof i===a?i.apply(e):i))+"</span>)",r}function c(e,t){return", "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this,a="function",f=this.escapeExpression;s+="<p>DB Instance\n    ",o=n.each.call(t,t&&t.cantStop,{hash:{},inverse:u.noop,fn:u.program(1,l,i),data:i});if(o||o===0)s+=o;return s+="\n    "+f(n.i18n.call(t,"TOOLBAR.POP_CANT_STOP_1",{hash:{},data:i}))+"</p>\n<p>"+f(n.i18n.call(t,"TOOLBAR.POP_CANT_STOP_2",{hash:{},data:i}))+"</p>",s},n.cantStop=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="",i;return r+='\n        <p><b style="color:#ec3c38;">'+a((i=e&&e.name,typeof i===u?i.apply(e):i))+" "+a(n.i18n.call(e,"POP_CONFIRM_PROD_APP_WARNING_MSG",{hash:{},data:t}))+"</b>"+a(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_MSG",{hash:{},data:t}))+"</p>\n        <p>"+a(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_INPUT_LBL",{hash:{},data:t}))+'</p>\n        <div><input class="input" style="width:390px;" id="appNameConfirmIpt"/></div>\n    ',r}function c(e,t){var r="";return r+='\n        <div class="modal-center-align-helper"><div class="modal-text-major">'+a(n.i18n.call(e,"TOOLBAR.POP_BODY_TERMINATE_APP_LEFT",{hash:{},data:t}))+a(n.i18n.call(e,"TOOLBAR.POP_BODY_TERMINATE_APP_RIGHT",{hash:{},data:t}))+"</div></div>\n    ",r}function h(e,t){var r="",i;r+='\n        <section class="check-final-snapshot checkbox-wrap">\n            <div class="checkbox">\n                <input id="take-rds-snapshot" type="checkbox" checked="checked" name="dns-resolution">\n                <label for="take-rds-snapshot"></label>\n            </div>\n            <label for="take-rds-snapshot">'+a(n.i18n.call(e,"TOOLBAR.POP_TAKE_DB_SNAPSHOT",{hash:{},data:t}))+"</label>\n        </section>\n        ",i=n["if"].call(e,(i=e&&e.notReadyDB,i==null||i===!1?i:i.length),{hash:{},inverse:f.noop,fn:f.program(6,p,t),data:t});if(i||i===0)r+=i;return r+="\n    ",r}function p(e,t){var r="",i;r+='\n            <p class="cant-snapshot">'+a(n.i18n.call(e,"TOOLBAR.POP_CANT_TAKE_SNAPSHOT_1",{hash:{},data:t}))+"\n                ",i=n.each.call(e,e&&e.notReadyDB,{hash:{},inverse:f.noop,fn:f.program(7,d,t),data:t});if(i||i===0)r+=i;return r+="\n                "+a(n.i18n.call(e,"TOOLBAR.POP_CANT_TAKE_SNAPSHOT_2",{hash:{},data:t}))+"</p>\n        ",r}function d(e,t){var r="",i;i=n["if"].call(e,t==null||t===!1?t:t.index,{hash:{},inverse:f.noop,fn:f.program(8,v,t),data:t});if(i||i===0)r+=i;return r+='<span class="resource-tag">'+a((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceIdentifier),typeof i===u?i.apply(e):i))+'</span>(<span class="db-stop-status">'+a((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceStatus),typeof i===u?i.apply(e):i))+"</span>)",r}function v(e,t){return", "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="confirm-padding">\n    ',o=n["if"].call(t,t&&t.production,{hash:{},inverse:f.program(3,c,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n    ",o=n["if"].call(t,(o=t&&t.hasDBInstance,o==null||o===!1?o:o.length),{hash:{},inverse:f.noop,fn:f.program(5,h,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.terminateAppConfirm=e.template(t),t=function(e,t,n,r,i){function l(e,t){return'\n        <div class="modal-center-align-helper"> <div class="modal-text-major">This app is created by Visualops with state, do not support forget currently</div></div>\n    '}function c(e,t){var r="",i;r+="\n        ",i=n["if"].call(e,e&&e.production,{hash:{},inverse:f.program(6,p,t),fn:f.program(4,h,t),data:t});if(i||i===0)r+=i;return r+="\n    ",r}function h(e,t){var r="",i;return r+='\n            <p><b style="color:#ec3c38;">'+a((i=e&&e.name,typeof i===u?i.apply(e):i))+" "+a(n.i18n.call(e,"POP_CONFIRM_PROD_APP_WARNING_MSG",{hash:{},data:t}))+"</b>Forget it will not make your service unavailable. but Visualops will stop ensure your state in all instances.</p>\n            <p>"+a(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_INPUT_LBL",{hash:{},data:t}))+'</p>\n            <div><input class="input" style="width:390px;" id="appNameConfirmIpt"/></div>\n        ',r}function p(e,t){return'\n            <div class="modal-center-align-helper"> <div class="modal-text-major">Only remove app info from Visualops, all resources in the app will not be deleted. <br/>Do you confirm to forget app?</div></div>\n        '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="confirm-padding">\n    ',o=n["if"].call(t,t&&t.hasState,{hash:{},inverse:f.program(3,c,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.forgetAppConfirm=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<section class="disconnected-msg">\n    <div>Connection lost. Attempting to reconnect…</div>\n    <div>Changes made now may not be saved.</div>\n</section>'},n.disconnectedMsg=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+='<header class="modal-header" style="width:390px;"><h3>'+o(n.i18n.call(t,"TOOLBAR.POP_FORCE_TERMINATE",{hash:{},data:i}))+'</h3><i class="modal-close">&times;</i></header>\n<div class="modal-body modal-text-wraper" style="width:390px;">\n    <div class="modal-center-align-helper">\n        <div class="modal-text-major">'+o(n.i18n.call(t,"TOOLBAR.POP_FORCE_TERMINATE_CONTENT",t&&t.name,{hash:{},data:i}))+'</div>\n    </div>\n</div>\n<div class="modal-footer">\n    <button class="btn modal-close btn-red" id="forceTerminateApp">'+o(n.i18n.call(t,"TOOLBAR.POP_BTN_DELETE_STACK",{hash:{},data:i}))+'</button>\n    <button class="btn modal-close btn-silver">'+o(n.i18n.call(t,"TOOLBAR.POP_BTN_CANCEL",{hash:{},data:i}))+"</button>\n</div>",s},n.forceTerminateApp=e.template(t),n}),function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define("AppAction",["backbone","component/appactions/template","i18n!/nls/lang.js","CloudResources","constant","UI.modalplus","ApiRequest","kp_dropdown","OsKp","TaGui"],function(t,n,r,i,s,o,u,a,f,l){var c;return c=t.View.extend({runStack:function(e,t){var n,i,s,u,a,f;return this.workspace=t,s=this.workspace.opsModel.get("cloudType"),f=this,$(e.currentTarget).attr("disabled")?!1:(this.modal=new o({title:r.IDE.RUN_STACK_MODAL_TITLE,template:MC.template.modalRunStack,disableClose:!0,width:"450px",confirm:{text:App.user.hasCredential()?r.IDE.RUN_STACK_MODAL_CONFIRM_BTN:r.IDE.RUN_STACK_MODAL_NEED_CREDENTIAL,disabled:!0}}),s==="openstack"&&(this.modal.find(".estimate").hide(),this.modal.resize()),this.renderKpDropdown(this.modal,s),u=Design.instance().getCost(),this.modal.tpl.find(".modal-input-value").val(this.workspace.opsModel.get("name")),this.modal.tpl.find("#label-total-fee").find("b").text("$"+u.totalFee),l.loadModule("stack").then(function(e){return function(){var t;return e.modal.resize(),(t=e.modal)!=null?t.toggleConfirm(!1):void 0}}(this)),n=this.modal.tpl.find("#app-name"),i=this.checkAppNameRepeat.bind(this),n.keyup(function(){return i(n.val())}),a=this,this.modal.on("confirm",function(e){return function(){var t;return e.hideError(),App.user.hasCredential()?(t=e.checkAppNameRepeat(n.val()),!e.defaultKpIsSet(s)||t?!1:(e.modal.tpl.find(".btn.modal-confirm").attr("disabled","disabled"),e.json=e.workspace.design.serialize({usage:"runStack"}),e.json.usage=$("#app-usage-selectbox").find(".dropdown .item.selected").data("value"),e.json.name=n.val(),e.workspace.opsModel.run(e.json,n.val()).then(function(e){return a.modal.close(),App.openOps(e)},function(e){var t;return a.modal.close(),t=e.awsError?e.error+"."+e.awsError:" "+e.error+" : "+(e.result||e.msg),notification("error",sprintf(r.NOTIFY.FAILA_TO_RUN_STACK_BECAUSE_OF_XXX,a.workspace.opsModel.get("name"),t))}))):(App.showSettings(App.showSettings.TAB.Credential),!1)}}(this)),App.user.on("change:credential",function(){if(App.user.hasCredential()&&f.modal.isOpen())return f.modal.find(".modal-confirm").text(r.IDE.RUN_STACK_MODAL_CONFIRM_BTN)}),this.modal.on("close",function(){return App.user.off("change:credential")}))},renderKpDropdown:function(e,t){var n,r,i,o,u;if(t==="openstack")return f.prototype.hasResourceWithDefaultKp()?(u=new f,n=Design.modelClassForType(s.RESTYPE.OSKP),r=_.find(n.allObjects(),function(e){return e.get("name")==="DefaultKP"}),e.isOpen()&&e.find("#kp-runtime-placeholder").html(u.render(r.get("keyName")).$el),e.tpl.find(".default-kp-group").show(),u.$input.on("change",function(){return u.setDefaultKeyPair()}),!1):!1;if(a.hasResourceWithDefaultKp()){o=new a;if(!e)return!1;e.tpl.find("#kp-runtime-placeholder").html(o.render().el),i=this.hideError.bind(this),o.dropdown.on("change",function(){return i("kp")}),e.tpl.find(".default-kp-group").show(),e.on("close",function(){return o.remove()})}return null},hideError:function(e){var t;return t=e?$("#runtime-error-"+e):$(".runtime-error"),t.hide()},defaultKpIsSet:function(e){var t,n;return e==="openstack"?f.prototype.hasResourceWithDefaultKp()&&f.prototype.defaultKpNotSet()?(this.showError("kp",r.IDE.RUN_STACK_MODAL_KP_WARNNING),!1):!0:a.hasResourceWithDefaultKp()?(n=Design.modelClassForType(s.RESTYPE.KP),t=n.getDefaultKP(),!t.get("isSet")||!this.modal&&!this.updateModal||!(this.modal||this.updateModal).tpl.find("#kp-runtime-placeholder .item.selected").size()?(this.showError("kp",r.IDE.RUN_STACK_MODAL_KP_WARNNING),!1):!0):!0},checkAppNameRepeat:function(e){return App.model.appList().findWhere({name:e})?(this.showError("appname",r.PROP.MSG_WARN_REPEATED_APP_NAME),!0):e?(this.hideError("appname"),!1):(this.showError("appname",r.PROP.MSG_WARN_NO_APP_NAME),!0)},showError:function(e,t){return $("#runtime-error-"+e).text(t).show()},deleteStack:function(e,t){t=t||App.model.stackList().get(e).get("name"),modal(n.removeStackConfirm({msg:sprintf(r.TOOLBAR.POP_BODY_DELETE_STACK,t)})),$("#confirmRmStack").on("click",function(){var n,i;n=App.model.stackList().get(e),i=n.remove();if(n.isPersisted())return i.then(function(){return notification("info",sprintf(r.NOTIFY.ERR_DEL_STACK_SUCCESS,t))},function(){return notification("error",sprintf(r.NOTIFY.ERR_DEL_STACK_FAILED,t))})})},duplicateStack:function(e){var t;t=App.model.stackList().get(e);if(!t)return;t.fetchJsonData().then(function(){return App.openOps(App.model.createStackByJson(t.getJsonData()))},function(){return notification("error",r.NOTIFY.ERROR_CANT_DUPLICATE)})},startApp:function(e){var t,i;return t=App.model.appList().get(e),i=new o({template:n.loading(),title:r.TOOLBAR.TIP_START_APP,confirm:{text:r.TOOLBAR.POP_BTN_START_APP,color:"blue",disabled:!1},disableClose:!0}),i.tpl.find(".modal-footer").hide(),this.checkBeforeStart(t).then(function(t){var s,o,u,a,f;a=t.hasEC2Instance,u=t.hasDBInstance,o=t.hasASG,f=t.lostDBSnapshot,s=t.awsError;if(s&&s!==403)return i.close(),notification("error",r.NOTIFY.ERROR_FAILED_LOAD_AWS_DATA),!1;i.tpl.find(".modal-footer").show(),i.tpl.find(".modal-body").html(n.startAppConfirm({hasEC2Instance:a,hasDBInstance:u,hasASG:o,lostDBSnapshot:f})),i.on("confirm",function(){i.close(),App.model.appList().get(e).start().fail(function(e){var t;t=e.awsError?e.error+"."+e.awsError:e.error,notification("error",sprintf(r.NOTIFY.ERROR_FAILED_START,name,t))})})})},checkBeforeStart:function(e){var t,n,r;return n=null,t=e.get("cloudType"),r=new Q.defer,t==="openstack"?(void 0,r.resolve({})):u("app_info",{region_name:e.get("region"),app_ids:[e.get("id")]}).then(function(e){return n=e[0].component}).then(function(){var t,o,u,a,f,l,c;return l=App.model.appList().get(id).get("name"),f=!!_.filter(n,function(e){return e.type===s.RESTYPE.INSTANCE}).length,a=!!_.filter(n,function(e){return e.type===s.RESTYPE.DBINSTANCE}).length,u=!!_.filter(n,function(e){return e.type===s.RESTYPE.ASG}).length,o=_.filter(n,function(e){return e.type===s.RESTYPE.DBINSTANCE}),c=i(s.RESTYPE.DBSNAP,e.get("region")),t=null,c.fetchForce().fail(function(e){return t=e.awsError})["finally"](function(){var e;return e=_.filter(o,function(e){return e.resource.DBSnapshotIdentifier&&!c.findWhere({id:e.resource.DBSnapshotIdentifier})}),r.resolve({hasEC2Instance:f,hasDBInstance:a,hasASG:u,lostDBSnapshot:e,awsError:t})})}),r.promise},checkBeforeStop:function(e){var t,n,r;return t=e.get("cloudType"),t==="openstack"?(void 0,n=new Q.defer,n.resolve(),n.promise):(r=i(s.RESTYPE.DBINSTANCE,e.get("region")),r.fetchForce())},stopApp:function(t){var u,a,f,l,c,h,p,d;return u=App.model.appList().get(t),h=u.get("name"),d=this,l=u.get("cloudType"),c=u.get("usage")==="production",a=u.get("name"),p=new o({template:n.loading(),title:c?r.TOOLBAR.POP_TIT_STOP_PRD_APP:r.TOOLBAR.POP_TIT_STOP_APP,confirm:{text:r.TOOLBAR.POP_BTN_STOP_APP,color:"red",disabled:c},disableClose:!0}),p.tpl.find(".modal-footer").hide(),f=null,this.checkBeforeStop(u).fail(function(e){void 0;if(e.awsError)return f=e.awsError})["finally"](function(){var t;return t=i(s.RESTYPE.DBINSTANCE,u.get("region")),f&&f!==403?(p.close(),notification("error",r.NOTIFY.ERROR_FAILED_LOAD_AWS_DATA),!1):(l==="openstack"?(p.tpl.find(".modal-footer").show(),p.tpl.find(".modal-body").css("padding","0").html(n.stopAppConfirm({isProduction:c,appName:a})),p.resize(),$("#appNameConfirmIpt").on("keyup change",function(){return $("#appNameConfirmIpt").val()===h?p.tpl.find(".modal-confirm").removeAttr("disabled"):p.tpl.find(".modal-confirm").attr("disabled","disabled")})):u.fetchJsonData().then(function(){var r,o,f,l,d,v,m;f=u.getJsonData().component,d={};for(m in f){o=f[m];if(o.type===s.RESTYPE.INSTANCE||o.type===s.RESTYPE.LC)l=o.resource.ImageId,l&&(d[l]=!0)}return v=_.keys(d),r=i(s.RESTYPE.AMI,u.get("region")),r.fetchAmis(_.keys(d)).then(function(){var i,o,u,l,d,m,g,y;return d=!1,r.each(function(t){var n;if((n=t.id,e.call(v,n)>=0)&&t.get("rootDeviceType")==="instance-store")return d=!0}),l=(g=_.filter(f,function(e){return e.type===s.RESTYPE.INSTANCE}))!=null?g.length:void 0,u=_.filter(f,function(e){return e.type===s.RESTYPE.DBINSTANCE}),i=_.map(u,function(e){return e.resource.DBInstanceIdentifier}),m=t.filter(function(t){var n;return(n=t.get("DBInstanceIdentifier"),e.call(i,n)>=0)&&t.get("DBInstanceStatus")!=="available"}),o=(y=_.filter(f,function(e){return e.type===s.RESTYPE.ASG}))!=null?y.length:void 0,p.tpl.find(".modal-footer").show(),m&&m.length?(p.tpl.find(".modal-body").html(n.cantStop({cantStop:m})),p.tpl.find(".modal-confirm").remove()):(u=u!=null?u.length:void 0,p.tpl.find(".modal-body").css("padding","0").html(n.stopAppConfirm({isProduction:c,appName:a,hasEC2Instance:l,hasDBInstance:u,hasAsg:o,hasInstanceStore:d}))),p.resize(),$("#appNameConfirmIpt").on("keyup change",function(){return $("#appNameConfirmIpt").val()===h?p.tpl.find(".modal-confirm").removeAttr("disabled"):p.tpl.find(".modal-confirm").attr("disabled","disabled")})})}),p.on("confirm",function(){return p.close(),u.stop().fail(function(e){var t;return void 0,t=e.awsError?e.error+"."+e.awsError:e.error,notification(sprintf(r.NOTIFY.ERROR_FAILED_STOP,h,t))})}))})},terminateApp:function(e){var t,u,a,f,l,c,h;return c=this,t=App.model.appList().get(e),a=t.get("name"),f=t.get("usage")==="production",h=new o({title:f?r.TOOLBAR.POP_TIT_TERMINATE_PRD_APP:r.TOOLBAR.POP_TIT_TERMINATE_APP,template:n.loading(),confirm:{text:r.TOOLBAR.POP_BTN_TERMINATE_APP,color:"red",disabled:f},disableClose:!0}),u=t.get("cloudType"),u==="openstack"?(this.__terminateApp(e,null,h),!1):(h.tpl.find(".modal-footer").hide(),l=i(s.RESTYPE.DBINSTANCE,t.get("region")),l.fetchForce().then(function(t){return c.__terminateApp(e,l,h)}).fail(function(t){return t.awsError===403?c.__terminateApp(e,l,h):(h.close(),notification("error",r.NOTIFY.ERROR_FAILED_LOAD_AWS_DATA),!1)}))},__terminateApp:function(t,i,o){var u,a,f,l,c;return u=App.model.appList().get(t),l=u.get("name"),c=u.get("usage")==="production",a=u.get("cloudType"),f=function(){var e;return a==="openstack"?(e=new Q.defer,e.resolve(),e.promise):u.fetchJsonData()},f().then(function(){var t,f,h,p;a==="openstack"?(h=null,p=[]):(t=u.getJsonData().component,h=_.filter(t,function(e){return e.type===s.RESTYPE.DBINSTANCE}),f=_.map(h,function(e){return e.resource.DBInstanceIdentifier}),p=i.filter(function(t){var n;return(n=t.get("DBInstanceIdentifier"),e.call(f,n)>=0)&&t.get("DBInstanceStatus")!=="available"})),o.tpl.find(".modal-body").html(n.terminateAppConfirm({production:c,name:l,hasDBInstance:h,notReadyDB:p})),o.tpl.find(".modal-footer").show(),o.resize(),(p!=null?p.length:void 0)&&o.tpl.find("#take-rds-snapshot").attr("checked",!1).change(function(){return o.tpl.find(".modal-confirm").attr("disabled",$(this).is(":checked"))}),$("#appNameConfirmIpt").on("keyup change",function(){$("#appNameConfirmIpt").val()===l?o.tpl.find(".modal-confirm").removeAttr("disabled"):o.tpl.find(".modal-confirm").attr("disabled","disabled")}),o.on("confirm",function(){var e;o.close(),e=o.tpl.find("#take-rds-snapshot").is(":checked"),u.terminate(null,{create_snapshot:e}).fail(function(e){var t;return t=e.awsError?e.error+"."+e.awsError:e.error,notification(sprintf(r.NOTIFY.ERROR_FAILED_TERMINATE,l,t))})})})},forgetApp:function(e){var t,r,i,s,u;return u=this,t=App.model.appList().get(e),i=t.get("name"),s=t.get("usage")==="production",r=new o({title:"Confirm to Forget App",template:n.loading(),confirm:{text:"Forget",color:"red",disabled:s},disableClose:!0}),r.tpl.find(".modal-footer").hide(),u.__forgetApp(e,r)},__forgetApp:function(e,t){var r,i,o,u,a,f,l,c;r=App.model.appList().get(e),u=r.get("name"),a=r.get("usage")==="production",o=!1;if(Design.instance().get("agent").enabled){l=Design.instance().serialize().component;for(f in l){i=l[f];if(((c=i.type)===s.RESTYPE.INSTANCE||c===s.RESTYPE.LC)&&i.state&&i.state.length>0){o=!0;break}null}}return r.fetchJsonData().then(function(){t.tpl.find(".modal-body").html(n.forgetAppConfirm({production:a,name:u,hasState:o})),t.tpl.find(".modal-footer").show(),t.resize(),o&&t.tpl.find(".modal-confirm").attr("disabled","disabled"),$("#appNameConfirmIpt").on("keyup change",function(){$("#appNameConfirmIpt").val()===u?t.tpl.find(".modal-confirm").removeAttr("disabled"):t.tpl.find(".modal-confirm").attr("disabled","disabled")}),t.on("confirm",function(){t.close(),r.terminate(!0).fail(function(e){var t;return t=e.awsError?e.error+"."+e.awsError:e.error,notification('Fail to forget your app "'+u+'". (ErrorCode: '+t+")")})})})}}),new c})}.call(this),define("component/AppAction",function(){});