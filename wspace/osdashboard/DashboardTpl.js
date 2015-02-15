define(["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+='<div>\n\n<header class="dash-header">\n  <button class="icon-refresh" id="OsReloadResource">'+o(n.i18n.call(t,"DASH_TPL_JUST_NOW",{hash:{},data:i}))+'</button>\n  <button class="btn btn-primary icon-new-stack">'+o(n.i18n.call(t,"DASH_CREATE_NEW_STACK",{hash:{},data:i}))+'</button>\n\n  <button id="ImportStack" class="btn btn-primary icon-import" data-analytics-plus="import_json">'+o(n.i18n.call(t,"DASH_IMPORT_JSON",{hash:{},data:i}))+'</button>\n\n  <button id="VisualizeApp" class="btn btn-blue icon-visualize" data-analytics-plus="visualize_vpc">'+o(n.i18n.call(t,"DASH_VISUALIZE_APP",{hash:{},data:i}))+'\n  </button>\n\n</header>\n\n<div class="dash-body nano"> <div class="nano-content">\n\n  <section class="dash-ops-list-wrapper">\n    <nav>\n      <button class="on stack ops-list-switcher"><span class="count"></span> <small>'+o(n.i18n.call(t,"DASH_LBL_STACK",{hash:{},data:i}))+'</small></button>\n      <button class="ops-list-switcher"><span class="count">0</span> <small>'+o(n.i18n.call(t,"DASH_LBL_APP",{hash:{},data:i}))+'</small></button>\n    </nav>\n    <ul class="clearfix dash-ops-list"></ul>\n  </section>\n  <section class="dash-ops-resource-list"></section>\n\n</div></div>\n\n</div>',s},n.frame=e.template(t),t=function(e,t,n,r,i){function f(e,t){var r="",i;r+='<li data-id="'+a((i=e&&e.id,typeof i===u?i.apply(e):i))+'">',i=n["if"].call(e,e&&e.progressing,{hash:{},inverse:o.program(5,h,t),fn:o.program(2,l,t),data:t});if(i||i===0)r+=i;return r+="</li>\n",r}function l(e,t){var r="",i;r+='\n  <div class="thumbnail app-thumbnail"></div>\n  <div class="region-resource-progess',i=n.unless.call(e,e&&e.progress,{hash:{},inverse:o.noop,fn:o.program(3,c,t),data:t});if(i||i===0)r+=i;return r+='" style="width:'+a((i=e&&e.progress,typeof i===u?i.apply(e):i))+'%;"></div>\n  <div class="region-resource-info truncate">\n      <div class="loading-spinner loading-spinner-small"></div>'+a((i=e&&e.name,typeof i===u?i.apply(e):i))+" - "+a((i=e&&e.stateDesc,typeof i===u?i.apply(e):i))+"...\n  </div>\n",r}function c(e,t){return" hide"}function h(e,t){var r="",i;r+="\n  ",i=n["if"].call(e,e&&e.usage,{hash:{},inverse:o.noop,fn:o.program(6,p,t),data:t});if(i||i===0)r+=i;r+='\n  <div class="thumbnail app-thumbnail"><img src="'+a((i=e&&e.thumbnail,typeof i===u?i.apply(e):i))+'" ',i=n.unless.call(e,e&&e.thumbnail,{hash:{},inverse:o.noop,fn:o.program(8,d,t),data:t});if(i||i===0)r+=i;r+='/></div>\n  <div class="region-resource-info">\n    <i class="icon-terminate terminate-app"></i>\n    ',i=n.ifCond.call(e,e&&e.stateDesc,"Running",{hash:{},inverse:o.program(12,m,t),fn:o.program(10,v,t),data:t});if(i||i===0)r+=i;r+='\n    <span class="',i=n.ifCond.call(e,e&&e.stateDesc,"Running",{hash:{},inverse:o.program(16,y,t),fn:o.program(14,g,t),data:t});if(i||i===0)r+=i;return r+=' truncate">'+a((i=e&&e.name,typeof i===u?i.apply(e):i))+"</span>\n  </div>\n",r}function p(e,t){var n="",r;return n+='<i class="icon-app-type-'+a((r=e&&e.usage,typeof r===u?r.apply(e):r))+'"></i>',n}function d(e,t){return'class="hide"'}function v(e,t){return'<i class="icon-stop stop-app"></i>'}function m(e,t){return'<i class="icon-play start-app"></i>'}function g(e,t){return"running"}function y(e,t){return"stopped"}function b(e,t){var r="";return r+='\n  <div class="blank-widget"><div>'+a(n.i18n.call(e,"DASH_LBL_NO_APP",{hash:{},data:t}))+"</div></div>\n",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o=this,u="function",a=this.escapeExpression;return s=n.each.call(t,t,{hash:{},inverse:o.program(18,b,i),fn:o.program(1,f,i),data:i}),s||s===0?s:""},n.appList=e.template(t),t=function(e,t,n,r,i){function f(e,t){var r="",i;r+='<li data-id="'+u((i=e&&e.id,typeof i===o?i.apply(e):i))+'">\n    <div class="thumbnail"><img src="'+u((i=e&&e.thumbnail,typeof i===o?i.apply(e):i))+'" ',i=n.unless.call(e,e&&e.thumbnail,{hash:{},inverse:a.noop,fn:a.program(2,l,t),data:t});if(i||i===0)r+=i;return r+='/></div>\n    <div class="region-resource-info">\n      <i class="icon-delete delete-stack"></i>\n      <i class="icon-duplicate duplicate-stack"></i>\n      <span class="truncate">'+u((i=e&&e.name,typeof i===o?i.apply(e):i))+"</span>\n    </div>\n  </li>\n",r}function l(e,t){return'class="hide"'}function c(e,t){var r="";return r+='\n  <div class="blank-widget"><div>'+u(n.i18n.call(e,"DASH_LBL_NO_STACK",{hash:{},data:t}))+"</div></div>\n",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o="function",u=this.escapeExpression,a=this;return s=n.each.call(t,t,{hash:{},inverse:a.program(4,c,i),fn:a.program(1,f,i),data:i}),s||s===0?s:""},n.stackList=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+='<div id="modal-import-json-dropzone">'+o(n.i18n.call(t,"POP_IMPORT_DROP_LBL",{hash:{},data:i}))+'<label for="modal-import-json-file" class="select-file-link">'+o(n.i18n.call(t,"POP_IMPORT_SELECT_LBL",{hash:{},data:i}))+'</label><input type="file" id="modal-import-json-file"></div>\n<div id="import-json-error"></div>',s},n.importJSON=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<nav class="clearfix resource-list-nav">\n  <div class="resource-tab servers on" data-type="OSSERVER">\n    <svg class="quota-chart" viewbox="0 0 282 282">\n      <path class="quota-path" d="M48.6 221.4a125 125 0 1 1 176.8 0"/>\n      <path class="quota-path usage" d="M48.6 221.4a125 125 0 1 1 176.8 0" stroke-dashoffset="589.1"/>\n    </svg>\n    <span class="resource-count">Server</span>\n    <p class="count"><span class="count-usage">-</span><span class="count-quota">-</span></p>\n  </div>\n  <div class="resource-tab volumes" data-type="OSVOL">\n    <svg class="quota-chart" viewbox="0 0 282 282">\n      <path class="quota-path" d="M48.6 221.4a125 125 0 1 1 176.8 0"/>\n      <path class="quota-path usage" d="M48.6 221.4a125 125 0 1 1 176.8 0" stroke-dashoffset="589.1"/>\n    </svg>\n    <span class="resource-count">Volume</span>\n    <p class="count"><span class="count-usage">-</span><span class="count-quota">-</span></p>\n  </div>\n  <div class="resource-tab snaps" data-type="OSSNAP">\n    <svg class="quota-chart" viewbox="0 0 282 282">\n      <path class="quota-path" d="M48.6 221.4a125 125 0 1 1 176.8 0"/>\n      <path class="quota-path usage" d="M48.6 221.4a125 125 0 1 1 176.8 0" stroke-dashoffset="589.1"/>\n    </svg>\n    <span class="resource-count">Snapshot</span>\n    <p class="count"><span class="count-usage">-</span><span class="count-quota">-</span></p>\n  </div>\n  <div class="resource-tab fips" data-type="OSFIP">\n    <svg class="quota-chart" viewbox="0 0 282 282">\n      <path class="quota-path" d="M48.6 221.4a125 125 0 1 1 176.8 0"/>\n      <path class="quota-path usage" d="M48.6 221.4a125 125 0 1 1 176.8 0" stroke-dashoffset="589.1"/>\n    </svg>\n    <span class="resource-count">Floating IP</span>\n    <p class="count"><span class="count-usage">-</span><span class="count-quota">-</span></p>\n  </div>\n  <div class="resource-tab rts" data-type="OSRT">\n    <svg class="quota-chart" viewbox="0 0 282 282">\n      <path class="quota-path" d="M48.6 221.4a125 125 0 1 1 176.8 0"/>\n      <path class="quota-path usage" d="M48.6 221.4a125 125 0 1 1 176.8 0" stroke-dashoffset="589.1"/>\n    </svg>\n    <span class="resource-count">Router</span>\n    <p class="count"><span class="count-usage">-</span><span class="count-quota">-</span></p>\n  </div>\n  <div class="resource-tab elbs" data-type="OSLISTENER">\n    <svg class="quota-chart" viewbox="0 0 282 282">\n      <path class="quota-path" d="M48.6 221.4a125 125 0 1 1 176.8 0"/>\n      <path class="quota-path usage" d="M48.6 221.4a125 125 0 1 1 176.8 0" stroke-dashoffset="589.1"/>\n    </svg>\n    <span class="resource-count">Load Balancer</span>\n    <p class="count"><span class="count-usage">-</span><span class="count-quota">-</span></p>\n  </div>\n</nav>\n<div class="resource-list-body table-head-fix"></div>'},n.resourceList=e.template(t),n});