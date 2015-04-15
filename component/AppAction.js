define("component/appactions/template",["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<div class="modal-center-align-helper">\n    <div class="modal-text-major">'+a((o=t&&t.msg,typeof o===u?o.apply(t):o))+"</div>\n</div>",s},n.removeStackConfirm=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="";return r+="\n            <li>\n                "+u(n.i18n.call(e,"TOOLBAR.POP_START_CONFIRM_LIST_1",{hash:{},data:t}))+"\n            </li>\n        ",r}function c(e,t){var r="";return r+="\n            <li>\n                "+u(n.i18n.call(e,"TOOLBAR.POP_START_CONFIRM_LIST_2",{hash:{},data:t}))+"\n            </li>\n        ",r}function h(e,t){var r="";return r+="\n            <li>\n                "+u(n.i18n.call(e,"TOOLBAR.POP_START_CONFIRM_LIST_3",{hash:{},data:t}))+"\n            </li>\n        ",r}function p(e,t){var r="",i;r+='\n        <div class="modal-shrink">\n            <div class="sub-gray">'+u(n.i18n.call(e,"TOOLBAR.POP_START_WARNNING",{hash:{},data:t}))+'</div>\n            <div class="error">\n                '+u(n.i18n.call(e,"TOOLBAR.POP_START_MISSING_SNAPSHOT_1",{hash:{},data:t}))+" ",i=n.each.call(e,e&&e.lostDBSnapshot,{hash:{},inverse:a.noop,fn:a.program(8,d,t),data:t});if(i||i===0)r+=i;return r+=" "+u(n.i18n.call(e,"TOOLBAR.POP_START_MISSING_SNAPSHOT_2",{hash:{},data:t}))+"\n            </div>\n        </div>\n    ",r}function d(e,t){var r="",i;i=n["if"].call(e,e&&e.index,{hash:{},inverse:a.noop,fn:a.program(9,v,t),data:t});if(i||i===0)r+=i;return r+=u((i=e&&e.name,typeof i===f?i.apply(e):i)),r}function v(e,t){return", "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this,f="function";s+='<div class="modal-center-align-helper">\n    <div class="modal-text-major">'+u(n.i18n.call(t,"TOOLBAR.POP_BODY_START_APP",{hash:{},data:i}))+'</div>\n    <ul class="mega-list-wraper-items">\n        ',o=n["if"].call(t,t&&t.hasEC2Instance,{hash:{},inverse:a.noop,fn:a.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n        ",o=n["if"].call(t,t&&t.hasDBInstance,{hash:{},inverse:a.noop,fn:a.program(3,c,i),data:i});if(o||o===0)s+=o;s+="\n        ",o=n["if"].call(t,t&&t.hasASG,{hash:{},inverse:a.noop,fn:a.program(5,h,i),data:i});if(o||o===0)s+=o;s+="\n    </ul>\n    ",o=n["if"].call(t,(o=t&&t.lostDBSnapshot,o==null||o===!1?o:o.length),{hash:{},inverse:a.noop,fn:a.program(7,p,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.startAppConfirm=e.template(t),t=function(e,t,n,r,i){function f(e,t){var r="",i;return r+='\n    <div style="padding: 20px">\n        <p><b style="color:#ec3c38;">'+u((i=e&&e.appName,typeof i===o?i.apply(e):i))+" "+u(n.i18n.call(e,"POP_CONFIRM_PROD_APP_WARNING_MSG",{hash:{},data:t}))+"</b>"+u(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_MSG",{hash:{},data:t}))+" "+u(n.i18n.call(e,"POP_CONFIRM_STOP_ASG",{hash:{},data:t}))+"</p>\n        <p>"+u(n.i18n.call(e,"POP_CONFIRM_STOP_PROD_APP_INPUT_LBL",{hash:{},data:t}))+'</p>\n        <div><input class="input" style="width:351px;" id="appNameConfirmIpt"/></div>\n    </div>\n',r}function l(e,t){var r="",i;r+='\n    <div class="modal-center-align-helper" style="padding: 20px">\n        <div class="modal-text-major">'+u(n.i18n.call(e,"TOOLBAR.POP_BODY_STOP_APP_LEFT",{hash:{},data:t}))+" "+u((i=e&&e.appName,typeof i===o?i.apply(e):i))+" "+u(n.i18n.call(e,"TOOLBAR.POP_BODY_STOP_APP_RIGHT",{hash:{},data:t}))+'</div>\n        <ul class="mega-list-wraper-items">\n            ',i=n["if"].call(e,e&&e.hasEC2Instance,{hash:{},inverse:a.noop,fn:a.program(4,c,t),data:t});if(i||i===0)r+=i;r+="\n            ",i=n["if"].call(e,e&&e.hasDBInstance,{hash:{},inverse:a.noop,fn:a.program(7,p,t),data:t});if(i||i===0)r+=i;r+="\n            ",i=n["if"].call(e,e&&e.hasAsg,{hash:{},inverse:a.noop,fn:a.program(9,d,t),data:t});if(i||i===0)r+=i;return r+="\n        </ul>\n    </div>\n",r}function c(e,t){var r="",i;r+="\n                <li>\n                    "+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_1",{hash:{},data:t}))+"\n                    ",i=n["if"].call(e,e&&e.hasInstanceStore,{hash:{},inverse:a.noop,fn:a.program(5,h,t),data:t});if(i||i===0)r+=i;return r+="\n                </li>\n            ",r}function h(e,t){var r="";return r+='<span class="error">'+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_1_SPAN",{hash:{},data:t}))+"</span>",r}function p(e,t){var r="";return r+="\n                <li>\n                    "+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_2",{hash:{},data:t}))+"\n                    <span>"+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_2_SPAN",{hash:{},data:t}))+"</span>\n                </li>\n            ",r}function d(e,t){var r="";return r+="\n                <li>\n                    "+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_3",{hash:{},data:t}))+"\n                    <span>"+u(n.i18n.call(e,"TOOLBAR.POP_STOP_CONFIRM_LIST_3_SPAN",{hash:{},data:t}))+"</span>\n                </li>\n            ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o="function",u=this.escapeExpression,a=this;return s=n["if"].call(t,t&&t.isProduction,{hash:{},inverse:a.program(3,l,i),fn:a.program(1,f,i),data:i}),s||s===0?s:""},n.stopAppConfirm=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="loading-spinner"></div>'},n.loading=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="",i;i=n["if"].call(e,t==null||t===!1?t:t.index,{hash:{},inverse:u.noop,fn:u.program(2,c,t),data:t});if(i||i===0)r+=i;return r+=f((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceIdentifier),typeof i===a?i.apply(e):i))+'(<span class="warning-text">'+f((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceStatus),typeof i===a?i.apply(e):i))+"</span>)",r}function c(e,t){return", "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this,a="function",f=this.escapeExpression;s+="<p>DB Instance\n    ",o=n.each.call(t,t&&t.cantStop,{hash:{},inverse:u.noop,fn:u.program(1,l,i),data:i});if(o||o===0)s+=o;return s+="\n    "+f(n.i18n.call(t,"TOOLBAR.POP_CANT_STOP_1",{hash:{},data:i}))+"</p>\n<p>"+f(n.i18n.call(t,"TOOLBAR.POP_CANT_STOP_2",{hash:{},data:i}))+"</p>",s},n.cantStop=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="",i;return r+='\n        <p><b style="color:#ec3c38;">'+a((i=e&&e.name,typeof i===u?i.apply(e):i))+" "+a(n.i18n.call(e,"POP_CONFIRM_PROD_APP_WARNING_MSG",{hash:{},data:t}))+"</b>"+a(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_MSG",{hash:{},data:t}))+"</p>\n        <p>"+a(n.i18n.call(e,"POP_CONFIRM_TERMINATE_PROD_APP_INPUT_LBL",{hash:{},data:t}))+'</p>\n        <div><input class="input" style="width:390px;" id="appNameConfirmIpt"/></div>\n    ',r}function c(e,t){var r="";return r+='\n        <div class="modal-center-align-helper"><div class="modal-text-major">'+a(n.i18n.call(e,"TOOLBAR.POP_BODY_TERMINATE_APP_LEFT",{hash:{},data:t}))+a(n.i18n.call(e,"TOOLBAR.POP_BODY_TERMINATE_APP_RIGHT",{hash:{},data:t}))+"</div></div>\n    ",r}function h(e,t){var r="",i;r+='\n        <section class="check-final-snapshot checkbox-wrap">\n            <div class="checkbox">\n                <input id="take-rds-snapshot" type="checkbox" checked="checked" name="dns-resolution">\n                <label for="take-rds-snapshot"></label>\n            </div>\n            <label for="take-rds-snapshot">'+a(n.i18n.call(e,"TOOLBAR.POP_TAKE_DB_SNAPSHOT",{hash:{},data:t}))+"</label>\n        </section>\n        ",i=n["if"].call(e,(i=e&&e.notReadyDB,i==null||i===!1?i:i.length),{hash:{},inverse:f.noop,fn:f.program(6,p,t),data:t});if(i||i===0)r+=i;return r+="\n    ",r}function p(e,t){var r="",i;r+='\n            <p class="cant-snapshot">'+a(n.i18n.call(e,"TOOLBAR.POP_CANT_TAKE_SNAPSHOT_1",{hash:{},data:t}))+"\n                ",i=n.each.call(e,e&&e.notReadyDB,{hash:{},inverse:f.noop,fn:f.program(7,d,t),data:t});if(i||i===0)r+=i;return r+="\n                "+a(n.i18n.call(e,"TOOLBAR.POP_CANT_TAKE_SNAPSHOT_2",{hash:{},data:t}))+"</p>\n        ",r}function d(e,t){var r="",i;i=n["if"].call(e,t==null||t===!1?t:t.index,{hash:{},inverse:f.noop,fn:f.program(8,v,t),data:t});if(i||i===0)r+=i;return r+='<span class="resource-tag">'+a((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceIdentifier),typeof i===u?i.apply(e):i))+'</span>(<span class="db-stop-status">'+a((i=(i=e&&e.attributes,i==null||i===!1?i:i.DBInstanceStatus),typeof i===u?i.apply(e):i))+"</span>)",r}function v(e,t){return", "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="mg20">\n    ',o=n["if"].call(t,t&&t.production,{hash:{},inverse:f.program(3,c,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+="\n    ",o=n["if"].call(t,(o=t&&t.hasDBInstance,o==null||o===!1?o:o.length),{hash:{},inverse:f.noop,fn:f.program(5,h,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.terminateAppConfirm=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="";return r+='\n        <div class="modal-center-align-helper"> <div class="modal-text-major">'+u(n.i18n.call(e,"TOOLBAR.FORGET_VISUALOPS_CANT",{hash:{},data:t}))+"</div></div>\n    ",r}function c(e,t){var r="",i;r+="\n        ",i=n["if"].call(e,e&&e.production,{hash:{},inverse:f.program(6,p,t),fn:f.program(4,h,t),data:t});if(i||i===0)r+=i;return r+="\n    ",r}function h(e,t){var r="",i;return r+='\n            <p><b style="color:#ec3c38;">'+u((i=e&&e.name,typeof i===a?i.apply(e):i))+" "+u(n.i18n.call(e,"POP_CONFIRM_PROD_APP_WARNING_MSG",{hash:{},data:t}))+"</b>"+u(n.i18n.call(e,"TOOLBAR.FORGET_CONFIRM_INSTRUCTION",{hash:{},data:t}))+"</p>\n            <p>"+u(n.i18n.call(e,"POP_CONFIRM_FORGET_PROD_APP_INPUT_LBL",{hash:{},data:t}))+'</p>\n            <div><input class="input" style="width:390px;" id="appNameConfirmIpt"/></div>\n        ',r}function p(e,t){var r="";return r+='\n            <div class="modal-center-align-helper"> <div class="modal-text-major">'+u(n.i18n.call(e,"TOOLBAR.FORGET_APP_CONFIRM",{hash:{},data:t}))+"</div></div>\n        ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function",f=this;s+='<div class="confirm-padding">\n    ',o=n["if"].call(t,t&&t.hasState,{hash:{},inverse:f.program(3,c,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;return s+="\n</div>",s},n.forgetAppConfirm=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+='<section class="disconnected-msg">\n    <div>'+o(n.i18n.call(t,"TOOLBAR.CONNECTION_LOST_TO_RECONNECT",{hash:{},data:i}))+"</div>\n    <div>"+o(n.i18n.call(t,"TOOLBAR.CHANGES_MAY_NOT_BE_SAVED",{hash:{},data:i}))+"</div>\n</section>",s},n.disconnectedMsg=e.template(t),n});var __indexOf=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define("AppAction",["backbone","component/appactions/template","ThumbnailUtil","i18n!/nls/lang.js","CloudResources","constant","UI.modalplus","ApiRequest","kp_dropdown","OsKp","TaGui","OpsModel","credentialFormView"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){return e.View.extend({initialize:function(e){return _.extend(this,e)},credentialId:function(){return Design.instance()?Design.instance().credentialId():this.model.project().credIdOfProvider(this.model.get("provider"))},runStack:function(e,t){var n,i,s,u,a,f,p,d,v,m;return s=this.workspace.opsModel.type,v=this,f=this.workspace.opsModel.project().get("billingState"),t?(this.modal=t,this.modal.setTitle(r.IDE.RUN_STACK_MODAL_TITLE).setWidth("665px").setContent(MC.template.modalRunStack({paymentState:f,paymentUpdate:e})).compact().find(".modal-footer").show()):(this.modal=new o({title:r.IDE.RUN_STACK_MODAL_TITLE,template:MC.template.modalRunStack({paymentState:f,paymentUpdate:e}),disableClose:!0,width:"665px",compact:!0,confirm:{text:Design.instance().project().isDemoMode()?r.IDE.RUN_STACK_MODAL_NEED_CREDENTIAL:r.IDE.RUN_STACK_MODAL_CONFIRM_BTN,disabled:!0}}),this.renderKpDropdown(this.modal,s)),s===c.Type.OpenStack&&(this.modal.find(".estimate").hide(),this.modal.resize()),u=Design.instance().getCost(),this.modal.find(".modal-input-value").val(this.workspace.opsModel.get("name")),a="$"+u.totalFee,(m=Design.instance().region())==="cn-north-1"&&(a="￥"+u.totalFee),this.modal.find("#label-total-fee").find("b").text(a),this.modal.find("#label-visualops-fee").find("b").text("$"+u.visualOpsFee),d=!1,l.loadModule("stack").then(function(e){return function(){return d=!0,e.modal.resize()}}(this))["catch"](function(e){return function(){return e.modal.find(".modal-confirm").addClass("disabled").addClass("tooltip").attr("data-tooltip",r.TOOLBAR.FIX_THE_ERROR_TO_LAUNCH_APP)}}(this)).fin(function(e){return function(){return e.modal.toggleConfirm(!1)}}(this)),n=this.modal.tpl.find("#app-name"),i=this.checkAppNameRepeat.bind(this),n.keyup(function(){return i(n.val())}),p=this,this.modal.on("confirm",function(e){return function(){var t;if(!d)return;return e.hideError(),Design.instance().project().isDemoMode()?(Design.instance().project().amIAdmin()?(new h({model:Design.instance().project()})).render():p.modal.find(".modal-body .members-only").show(),!1):(t=e.checkAppNameRepeat(n.val()),!e.defaultKpIsSet(s)||t?!1:(e.modal.tpl.find(".btn.modal-confirm").attr("disabled","disabled"),e.json=e.workspace.design.serialize({usage:"runStack"}),e.json.usage=$("#app-usage-selectbox").find(".dropdown .item.selected").data("value"),e.json.name=n.val(),e.workspace.opsModel.run(e.json,n.val()).then(function(e){return p.modal.close(),App.loadUrl(e.url())},function(e){var t;return p.modal.close(),t=e.awsError?e.error+"."+e.awsError:" "+e.error+" : "+(e.result||e.msg),notification("error",sprintf(r.NOTIFY.FAILA_TO_RUN_STACK_BECAUSE_OF_XXX,p.workspace.opsModel.get("name"),t))})))}}(this)),this.modal.listenTo(Design.instance().project(),"change:credential",function(){if(Design.instance().credential()&&v.modal.isOpen())return v.modal.find(".modal-confirm").text(r.IDE.RUN_STACK_MODAL_CONFIRM_BTN)}),this.modal.on("close",function(){return v.modal.stopListening(App.user)})},renderKpDropdown:function(e,t){var n,r,i,o,u;if(t===c.Type.OpenStack)return f.prototype.hasResourceWithDefaultKp()?(u=new f,n=Design.modelClassForType(s.RESTYPE.OSKP),r=_.find(n.allObjects(),function(e){return e.get("name")==="DefaultKP"}),e.isOpen()&&e.find("#kp-runtime-placeholder").html(u.render(r.get("keyName")).$el),e.tpl.find(".default-kp-group").show(),u.$input.on("change",function(){return u.setDefaultKeyPair()}),!1):!1;if(a.hasResourceWithDefaultKp()){o=new a;if(!e)return!1;e.tpl.find("#kp-runtime-placeholder").html(o.render().el),i=this.hideError.bind(this),o.dropdown.on("change",function(){return i("kp")}),e.tpl.find(".default-kp-group").show(),e.on("close",function(){return o.remove()})}return null},hideError:function(e){var t;return t=e?$("#runtime-error-"+e):$(".runtime-error"),t.hide()},defaultKpIsSet:function(e){var t,n;return e===c.Type.OpenStack?f.prototype.hasResourceWithDefaultKp()&&f.prototype.defaultKpNotSet()?(this.showError("kp",r.IDE.RUN_STACK_MODAL_KP_WARNNING),!1):!0:a.hasResourceWithDefaultKp()?(n=Design.modelClassForType(s.RESTYPE.KP),t=n.getDefaultKP(),!t.get("isSet")||!this.modal&&!this.updateModal||!(this.modal||this.updateModal).tpl.find("#kp-runtime-placeholder .item.selected").size()?(this.showError("kp",r.IDE.RUN_STACK_MODAL_KP_WARNNING),!1):!0):!0},checkAppNameRepeat:function(e){return this.workspace.opsModel.project().apps().findWhere({name:e})?(this.showError("appname",r.PROP.MSG_WARN_REPEATED_APP_NAME),!0):e?(this.hideError("appname"),!1):(this.showError("appname",r.PROP.MSG_WARN_NO_APP_NAME),!0)},showError:function(e,t){return $("#runtime-error-"+e).text(t).show()},deleteStack:function(e,n){var i,s,u,a;return u=this.workspace,n=n||((a=this.workspace)!=null?a.opsModel.project().stacks().get(e).get("name"):void 0)||this.model.get("name"),s=this,i=new o({title:r.TOOLBAR.TIP_DELETE_STACK,width:420,confirm:{text:r.TOOLBAR.POP_BTN_DELETE_STACK,color:"red"},template:t.removeStackConfirm({msg:sprintf(r.TOOLBAR.POP_BODY_DELETE_STACK,n)})}),i.on("confirm",function(){var t,o;i.close(),t=s.model||u.opsModel.project().stacks().get(e),o=t.remove();if(t.isPersisted())return o.then(function(){return notification("info",sprintf(r.NOTIFY.ERR_DEL_STACK_SUCCESS,n))},function(){return notification("error",sprintf(r.NOTIFY.ERR_DEL_STACK_FAILED,n))})})},duplicateStack:function(e){var t,n;n=this.workspace,t=this.model||n.opsModel.project().stacks().get(e);if(!t)return;t.fetchJsonData().then(function(){return App.loadUrl((t.project()||n.opsModel.project()).createStackByJson(t.getJsonData()).url())},function(){return notification("error",r.NOTIFY.ERROR_CANT_DUPLICATE)})},startApp:function(e){var n,i,s;return s=this.workspace,n=this.model||s.opsModel.project().apps().get(e),i=new o({template:t.loading(),title:r.TOOLBAR.TIP_START_APP,confirm:{text:r.TOOLBAR.POP_BTN_START_APP,color:"blue",disabled:!1},disableClose:!0}),i.tpl.find(".modal-footer").hide(),this.checkBeforeStart(n).then(function(e){var s,o,u,a,f;a=e.hasEC2Instance,u=e.hasDBInstance,o=e.hasASG,f=e.lostDBSnapshot,s=e.awsError;if(s&&s!==403)return i.close(),notification("error",r.NOTIFY.ERROR_FAILED_LOAD_AWS_DATA),!1;i.tpl.find(".modal-footer").show(),i.tpl.find(".modal-body").html(t.startAppConfirm({hasEC2Instance:a,hasDBInstance:u,hasASG:o,lostDBSnapshot:f})),i.on("confirm",function(){i.close(),n.start().fail(function(e){var t;t=e.awsError?e.error+"."+e.awsError:e.error,notification("error",sprintf(r.NOTIFY.ERROR_FAILED_START,name,t))})})})},checkBeforeStart:function(e){var t,n,r,o;return o=this,n=null,t=e.type,r=new Q.defer,t===c.Type.OpenStack?(void 0,r.resolve({})):u("app_info",{key_id:this.credentialId(),region_name:e.get("region"),app_ids:[e.get("id")]}).then(function(e){return n=e[0].component}).then(function(){var t,u,a,f,l,c;return l=!!_.filter(n,function(e){return e.type===s.RESTYPE.INSTANCE}).length,f=!!_.filter(n,function(e){return e.type===s.RESTYPE.DBINSTANCE}).length,a=!!_.filter(n,function(e){return e.type===s.RESTYPE.ASG}).length,u=_.filter(n,function(e){return e.type===s.RESTYPE.DBINSTANCE}),c=i(o.credentialId(),s.RESTYPE.DBSNAP,e.get("region")),t=null,c.fetchForce().fail(function(e){return t=e.awsError})["finally"](function(){var e;return e=_.filter(u,function(e){return e.resource.DBSnapshotIdentifier&&!c.findWhere({id:e.resource.DBSnapshotIdentifier})}),r.resolve({hasEC2Instance:l,hasDBInstance:f,hasASG:a,lostDBSnapshot:e,awsError:t})})}),r.promise},checkBeforeStop:function(e){var t,n,r;return t=e.type,t===c.Type.OpenStack?(void 0,n=new Q.defer,n.resolve(),n.promise):(r=i(this.credentialId(),s.RESTYPE.DBINSTANCE,e.get("region")),r.fetchForce())},stopApp:function(e){var n,u,a,f,l,h,p,d;return n=this.model||this.workspace.opsModel.project().apps().get(e),h=n.get("name"),d=this,f=n.type,l=n.get("usage")==="production",u=n.get("name"),p=new o({template:t.loading(),title:l?r.TOOLBAR.POP_TIT_STOP_PRD_APP:r.TOOLBAR.POP_TIT_STOP_APP,confirm:{text:r.TOOLBAR.POP_BTN_STOP_APP,color:"red",disabled:l},disableClose:!0}),p.tpl.find(".modal-footer").hide(),a=null,this.checkBeforeStop(n).fail(function(e){void 0;if(e.awsError)return a=e.awsError})["finally"](function(){var e;return e=i(d.credentialId(),s.RESTYPE.DBINSTANCE,n.get("region")),a&&a!==403?(p.close(),notification("error",r.NOTIFY.ERROR_FAILED_LOAD_AWS_DATA),!1):(f===c.Type.OpenStack?(p.tpl.find(".modal-footer").show(),p.tpl.find(".modal-body").css("padding","0").html(t.stopAppConfirm({isProduction:l,appName:u})),p.resize(),$("#appNameConfirmIpt").on("keyup change",function(){return $("#appNameConfirmIpt").val()===h?p.tpl.find(".modal-confirm").removeAttr("disabled"):p.tpl.find(".modal-confirm").attr("disabled","disabled")})):n.fetchJsonData().then(function(){var r,o,a,f,c,v,m;a=n.getJsonData().component,c={};for(m in a){o=a[m];if(o.type===s.RESTYPE.INSTANCE||o.type===s.RESTYPE.LC)f=o.resource.ImageId,f&&(c[f]=!0)}return v=_.keys(c),r=i(d.credentialId(),s.RESTYPE.AMI,n.get("region")),r.fetchAmis(_.keys(c)).then(function(){var n,i,o,f,c,d,m,g;return c=!1,r.each(function(e){var t;if((t=e.id,__indexOf.call(v,t)>=0)&&e.get("rootDeviceType")==="instance-store")return c=!0,null}),f=(m=_.filter(a,function(e){return e.type===s.RESTYPE.INSTANCE}))!=null?m.length:void 0,o=_.filter(a,function(e){return e.type===s.RESTYPE.DBINSTANCE}),n=_.map(o,function(e){return e.resource.DBInstanceIdentifier}),d=e.filter(function(e){var t;return(t=e.get("DBInstanceIdentifier"),__indexOf.call(n,t)>=0)&&e.get("DBInstanceStatus")!=="available"}),i=(g=_.filter(a,function(e){return e.type===s.RESTYPE.ASG}))!=null?g.length:void 0,p.tpl.find(".modal-footer").show(),d&&d.length?(p.tpl.find(".modal-body").html(t.cantStop({cantStop:d})),p.tpl.find(".modal-confirm").remove()):(o=o!=null?o.length:void 0,p.tpl.find(".modal-body").css("padding","0").html(t.stopAppConfirm({isProduction:l,appName:u,hasEC2Instance:f,hasDBInstance:o,hasAsg:i,hasInstanceStore:c}))),p.resize(),$("#appNameConfirmIpt").on("keyup change",function(){return $("#appNameConfirmIpt").val()===h?p.tpl.find(".modal-confirm").removeAttr("disabled"):p.tpl.find(".modal-confirm").attr("disabled","disabled")})})}),p.on("confirm",function(){return p.close(),n.stop().fail(function(e){var t;return void 0,t=e.awsError?e.error+"."+e.awsError:e.error,notification(sprintf(r.NOTIFY.ERROR_FAILED_STOP,h,t))})}))})},terminateApp:function(e,n){var u,a,f,l,h,p,d;return p=this,u=this.model||this.workspace.opsModel.project().apps().get(e),f=u.get("name"),l=u.get("usage")==="production",d=new o({title:l?r.TOOLBAR.POP_TIT_TERMINATE_PRD_APP:r.TOOLBAR.POP_TIT_TERMINATE_APP,template:t.loading(),confirm:{text:r.TOOLBAR.POP_BTN_TERMINATE_APP,color:"red",disabled:l},disableClose:!0}),a=u.type,a===c.Type.OpenStack?(this.__terminateApp(e,null,d,n),!1):(d.tpl.find(".modal-footer").hide(),h=i(p.credentialId(),s.RESTYPE.DBINSTANCE,u.get("region")),h.fetchForce().then(function(){return p.__terminateApp(e,h,d,n)},function(t){return t.awsError===403?p.__terminateApp(e,h,d,n):(d.close(),notification("error",r.NOTIFY.ERROR_FAILED_LOAD_AWS_DATA),!1)}))},__terminateApp:function(e,n,i,o){var u,a,f,l,h;return u=this.model||this.workspace.opsModel.project().apps().get(e),l=u.get("name"),h=u.get("usage")==="production",a=u.type,f=function(){var e;return e=new Q.defer,a===c.Type.OpenStack?(e.resolve(),e.promise):o?(e.resolve(),e.promise):u.fetchJsonData()},f().then(function(){var e,o,f,p;a===c.Type.OpenStack?(f=null,p=[]):(e=u.getJsonData().component,f=_.filter(e,function(e){return e.type===s.RESTYPE.DBINSTANCE}),o=_.map(f,function(e){return e.resource.DBInstanceIdentifier}),p=n.filter(function(e){var t;return(t=e.get("DBInstanceIdentifier"),__indexOf.call(o,t)>=0)&&e.get("DBInstanceStatus")!=="available"})),i.tpl.find(".modal-body").html(t.terminateAppConfirm({production:h,name:l,hasDBInstance:f,notReadyDB:p})),i.tpl.find(".modal-footer").show(),i.resize(),(p!=null?p.length:void 0)&&i.tpl.find("#take-rds-snapshot").attr("checked",!1).change(function(){return i.tpl.find(".modal-confirm").attr("disabled",$(this).is(":checked"))}),$("#appNameConfirmIpt").on("keyup change",function(){$("#appNameConfirmIpt").val()===l?i.tpl.find(".modal-confirm").removeAttr("disabled"):i.tpl.find(".modal-confirm").attr("disabled","disabled")}),i.on("confirm",function(){var e;i.close(),e=i.tpl.find("#take-rds-snapshot").is(":checked"),u.terminate(null,{create_snapshot:e}).fail(function(e){var t;return t=e.awsError?e.error+"."+e.awsError:e.error,notification(sprintf(r.NOTIFY.ERROR_FAILED_TERMINATE,l,t))})})})},forgetApp:function(e){var n,i,s,u,a;return a=this,n=this.workspace.opsModel.project().apps().get(e),s=n.get("name"),u=n.get("usage")==="production",i=new o({title:r.IDE.TITLE_CONFIRM_TO_FORGET,template:t.loading(),confirm:{text:r.TOOLBAR.BTN_FORGET_CONFIRM,color:"red",disabled:u},disableClose:!0}),i.tpl.find(".modal-footer").hide(),a.__forgetApp(e,i)},__forgetApp:function(e,n){var r,i,o,u,a,f,l,c;r=this.workspace.opsModel.project().apps().get(e),u=r.get("name"),a=r.get("usage")==="production",o=!1;if(Design.instance().get("agent").enabled){l=Design.instance().serialize().component;for(f in l){i=l[f];if(((c=i.type)===s.RESTYPE.INSTANCE||c===s.RESTYPE.LC)&&i.state&&i.state.length>0){o=!0;break}null}}return r.fetchJsonData().then(function(){n.tpl.find(".modal-body").html(t.forgetAppConfirm({production:a,name:u,hasState:o})),n.tpl.find(".modal-footer").show(),n.resize(),o&&n.tpl.find(".modal-confirm").attr("disabled","disabled"),$("#appNameConfirmIpt").on("keyup change",function(){$("#appNameConfirmIpt").val()===u?n.tpl.find(".modal-confirm").removeAttr("disabled"):n.tpl.find(".modal-confirm").attr("disabled","disabled")}),n.on("confirm",function(){n.close(),r.terminate(!0,!1).then(function(){return notification("info",'Your app "'+u+'" has been removed from our database.')},function(e){return notification("error",'Failed to remove your app "'+u+'" from our database. (ErrorCode: '+e.error+")")})})})},showPayment:function(e,t){var n,i,s,u,a,f,l;return t||(t=(l=this.workspace)!=null?l.opsModel:void 0),i=(t!=null?t.project():void 0)||this.project,s=i.get("id"),a=Q.defer(),f="/settings/"+s+"/billing",i.shouldPay()?(u={isAdmin:i.amIAdmin(),url:f,freePointsPerMonth:3600},e?($(e).html(MC.template.loadingSpinner()),$(e).trigger("paymentRendered")):(n=new o({title:r.PROP.LBL_LOADING,template:MC.template.loadingSpinner(),disableClose:!0,confirm:{text:i.isDemoMode()?r.IDE.RUN_STACK_MODAL_NEED_CREDENTIAL:r.IDE.RUN_STACK_MODAL_CONFIRM_BTN,disabled:!0}}),n.find(".modal-footer").hide()),i.getPaymentState().then(function(){var t,s;return((s=i.get("payment"))!=null?s.cardNumber:void 0)||!i.isPrivate()?t=MC.template.paymentUpdate(u):t=MC.template.providePayment(u),e?($(e).html(t),$(e).trigger("paymentRendered")):(n.setContent(t),n.setTitle(r.IDE.PAYMENT_INVALID_BILLING),n.setContent(t),n.listenTo(i,"change:billingState",function(){if(n.isClosed)return!1;if(!i.shouldPay())return a.resolve({result:u,modal:n})}))})):a.resolve({result:{url:f}}),a.promise}})}),define("component/AppAction",function(){});