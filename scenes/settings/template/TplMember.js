define(["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="loading-spinner"></div>'},n.loading=e.template(t),t=function(e,t,n,r,i){function l(e,t){var r="",i;r+='\n    <div class="operate">\n        ',i=n["if"].call(e,e&&e.limit,{hash:{},inverse:a.program(4,h,t),fn:a.program(2,c,t),data:t});if(i||i===0)r+=i;return r+='\n        <button class="btn btn-red" id="delete" disabled>'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_REMOVE",{hash:{},data:t}))+"</button>\n    </div>\n    ",r}function c(e,t){var r="";return r+='\n        <div class="limit-member-tip">\n            '+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_LIMIT",e&&e.number,{hash:{},data:t}))+' <a href="mailto:support@visualops.io" target="_top">support@visualops.io</a>\n        </div>\n        ',r}function h(e,t){var r="";return r+='\n        <div class="invite">\n            <input class="input" placeholder="'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_INVITE_TIP",{hash:{},data:t}))+'" id="mail">\n            <div class="search"></div>\n            <button class="btn btn-blue" id="invite">'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_INVITE_CONFIRM",{hash:{},data:t}))+"</button>\n        </div>\n        ",r}function p(e,t){var r="",i;r+="\n                    ",i=n["if"].call(e,e&&e.admin,{hash:{},inverse:a.noop,fn:a.program(7,d,t),data:t});if(i||i===0)r+=i;return r+="\n                    ",r}function d(e,t){return'\n                    <th class="checkbox-row">\n                        <div class="checkbox">\n                            <input id="t-m-select-all" type="checkbox" value="None">\n                            <label for="t-m-select-all"></label>\n                        </div>\n                    </th>\n                    '}function v(e,t){var r="",i;r+='\n                    <th class="',i=n["if"].call(e,e&&e.sortable,{hash:{},inverse:a.noop,fn:a.program(10,m,t),data:t});if(i||i===0)r+=i;r+='" data-row-type="',i=n["if"].call(e,e&&e.rowType,{hash:{},inverse:a.program(14,y,t),fn:a.program(12,g,t),data:t});if(i||i===0)r+=i;r+='" style="',i=n["if"].call(e,e&&e.width,{hash:{},inverse:a.noop,fn:a.program(16,b,t),data:t});if(i||i===0)r+=i;return r+='">'+u((i=e&&e.name,typeof i===f?i.apply(e):i))+"</th>\n                    ",r}function m(e,t){return"sortable"}function g(e,t){var n;return u((n=e&&e.rowType,typeof n===f?n.apply(e):n))}function y(e,t){return"string"}function b(e,t){var n="",r;return n+="width:"+u((r=e&&e.width,typeof r===f?r.apply(e):r))+";",n}function w(e,t){return"\n        <div>\n            "}function E(e,t){var r="",i;r+='\n            <div class="scroll-wrap" ',i=n["if"].call(e,e&&e.height,{hash:{},inverse:a.noop,fn:a.program(21,S,t),data:t});if(i||i===0)r+=i;return r+='>\n                <div class="scrollbar-veritical-wrap" style="display: block;"><div class="scrollbar-veritical-thumb"></div></div>\n                <div class="scroll-content" style="display:block;">\n                    ',r}function S(e,t){var n="",r;return n+='style="height: '+u((r=e&&e.height,typeof r===f?r.apply(e):r))+'px" ',n}function x(e,t){var r;return r=n.unless.call(e,e&&e.noCheckbox,{hash:{},inverse:a.noop,fn:a.program(24,T,t),data:t}),r||r===0?r:""}function T(e,t){return'<th class="checkbox-row"><div class="th-inner"></div></th>'}function N(e,t){var r="",i;r+='\n                                <th style="',i=n["if"].call(e,e&&e.width,{hash:{},inverse:a.noop,fn:a.program(16,b,t),data:t});if(i||i===0)r+=i;return r+='"><div class="th-inner"></div></th>\n                                ',r}function C(e,t){return"\n                </div>\n                "}function k(e,t){return"\n            </div>\n        </div>\n        "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a=this,f="function";s+='<div class="hide content" data-bind="true">\n    <div class="title">'+u(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_MEMBER",{hash:{},data:i}))+'<span class="memlist-count"></span></div>\n    ',o=n["if"].call(t,t&&t.admin,{hash:{},inverse:a.noop,fn:a.program(1,l,i),data:i});if(o||o===0)s+=o;s+='\n    <div class="table-head-fix will-be-covered">\n        <table class="table-head">\n            <thead>\n                <tr>\n                    ',o=n.unless.call(t,t&&t.noCheckbox,{hash:{},inverse:a.noop,fn:a.program(6,p,i),data:i});if(o||o===0)s+=o;s+="\n                    ",o=n.each.call(t,t&&t.columns,{hash:{},inverse:a.noop,fn:a.program(9,v,i),data:i});if(o||o===0)s+=o;s+="\n                </tr>\n            </thead>\n        </table>\n        ",o=n.unless.call(t,t&&t.useCustomScroll,{hash:{},inverse:a.program(20,E,i),fn:a.program(18,w,i),data:i});if(o||o===0)s+=o;s+='\n\n                    <table class="table">\n                        <thead>\n                            <tr>\n                                ',o=n["if"].call(t,t&&t.admin,{hash:{},inverse:a.noop,fn:a.program(23,x,i),data:i});if(o||o===0)s+=o;s+="\n                                ",o=n.each.call(t,t&&t.columns,{hash:{},inverse:a.noop,fn:a.program(26,N,i),data:i});if(o||o===0)s+=o;s+='\n                            </tr>\n                        </thead>\n                        <tbody class="t-m-content">\n                        </tbody>\n                    </table>\n                    ',o=n.unless.call(t,t&&t.useCustomScroll,{hash:{},inverse:a.program(30,k,i),fn:a.program(28,C,i),data:i});if(o||o===0)s+=o;return s+="\n    </div>\n</div>",s},n.main=e.template(t),t=function(e,t,n,r,i){function f(e,t,r){var i="",s;i+='\n<tr class="item memlist-item" data-id="'+u((s=e&&e.id,typeof s===o?s.apply(e):s))+'">\n    ',s=n["if"].call(e,r&&r.admin,{hash:{},inverse:a.noop,fn:a.program(2,l,t),data:t});if(s||s===0)i+=s;i+='\n    <td>\n        <div class="avatar" style="background-image:url(\''+u((s=e&&e.avatar,typeof s===o?s.apply(e):s))+'\')"></div>\n        <div class="info">\n            <div class="name">'+u((s=e&&e.username,typeof s===o?s.apply(e):s)),s=n["if"].call(e,e&&e.me,{hash:{},inverse:a.noop,fn:a.program(5,h,t),data:t});if(s||s===0)i+=s;i+='</div>\n            <div class="mail">'+u((s=e&&e.email,typeof s===o?s.apply(e):s))+'</div>\n        </div>\n    </td>\n    <td class="'+u((s=e&&e.role,typeof s===o?s.apply(e):s))+'">\n        <span class="memlist-view-mode role">\n            ',s=n.ifCond.call(e,e&&e.role,"admin",{hash:{},inverse:a.noop,fn:a.program(7,p,t),data:t});if(s||s===0)i+=s;i+="\n            ",s=n.ifCond.call(e,e&&e.role,"collaborator",{hash:{},inverse:a.noop,fn:a.program(9,d,t),data:t});if(s||s===0)i+=s;i+='\n        </span>\n        <div class="selectbox memlist-edit-mode memtype">\n            <div class="selection">\n                ',s=n.ifCond.call(e,e&&e.role,"admin",{hash:{},inverse:a.noop,fn:a.program(7,p,t),data:t});if(s||s===0)i+=s;i+="\n                ",s=n.ifCond.call(e,e&&e.role,"collaborator",{hash:{},inverse:a.noop,fn:a.program(9,d,t),data:t});if(s||s===0)i+=s;i+='\n            </div>\n            <ul class="dropdown">\n                <li data-id="admin" class="item ',s=n.ifCond.call(e,e&&e.role,"admin",{hash:{},inverse:a.noop,fn:a.program(11,v,t),data:t});if(s||s===0)i+=s;i+='">\n                    <div class="name">'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_ADMIN",{hash:{},data:t}))+'</div>\n                </li>\n                <li data-id="collaborator" class="item ',s=n.ifCond.call(e,e&&e.role,"collaborator",{hash:{},inverse:a.noop,fn:a.program(11,v,t),data:t});if(s||s===0)i+=s;i+='">\n                    <div class="name">'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_COLLABORATOR",{hash:{},data:t}))+'</div>\n                </li>\n            </ul>\n        </div>\n    </td>\n    <td class="memlist-status ',s=n.ifCond.call(e,e&&e.state,"inactive",{hash:{},inverse:a.noop,fn:a.program(13,m,t),data:t});if(s||s===0)i+=s;i+='">\n        ',s=n.ifCond.call(e,e&&e.state,"normal",{hash:{},inverse:a.noop,fn:a.program(15,g,t),data:t});if(s||s===0)i+=s;i+="\n        ",s=n.ifCond.call(e,e&&e.state,"inactive",{hash:{},inverse:a.noop,fn:a.program(17,y,t),data:t});if(s||s===0)i+=s;i+="\n    </td>\n    ",s=n["if"].call(e,r&&r.admin,{hash:{},inverse:a.noop,fn:a.program(19,b,t),data:t});if(s||s===0)i+=s;return i+="\n</tr>\n",i}function l(e,t){var r="",i;r+='\n    <td class="checkbox-row">\n        ',i=n.unless.call(e,e&&e.me,{hash:{},inverse:a.noop,fn:a.program(3,c,t),data:t});if(i||i===0)r+=i;return r+="\n    </td>\n    ",r}function c(e,t){var n="",r;return n+='\n        <div class="checkbox">\n            <input id="sslcert-select-'+u((r=e&&e.id,typeof r===o?r.apply(e):r))+'" type="checkbox" data-id="'+u((r=e&&e.id,typeof r===o?r.apply(e):r))+'" class="one-cb">\n            <label for="sslcert-select-'+u((r=e&&e.id,typeof r===o?r.apply(e):r))+'"></label>\n        </div>\n        ',n}function h(e,t){var r="";return r+='<span class="you">('+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_YOU",{hash:{},data:t}))+")</span>",r}function p(e,t){return u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_ADMIN",{hash:{},data:t}))}function d(e,t){return u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_COLLABORATOR",{hash:{},data:t}))}function v(e,t){return"selected"}function m(e,t){return"memlist-pending"}function g(e,t){return u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_ACTIVE",{hash:{},data:t}))}function y(e,t){return u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_PENDING",{hash:{},data:t}))}function b(e,t){var r="",i;r+="\n    <td>",i=n.ifCond.call(e,e&&e.state,"inactive",{hash:{},inverse:a.noop,fn:a.program(20,w,t),data:t});if(i||i===0)r+=i;return r+='</td>\n    <td>\n        <button class="btn btn-blue memlist-edit-mode done">'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_DONE",{hash:{},data:t}))+'</button>\n        <button class="icon-edit memlist-view-mode edit"></button>\n    </td>\n    ',r}function w(e,t){var r="";return r+='<button class="cancel link-style">'+u(n.i18n.call(e,"SETTINGS_MEMBER_LABEL_CANCEL_INVITE",{hash:{},data:t}))+"</button>",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s,o="function",u=this.escapeExpression,a=this;return s=n.each.call(t,t&&t.memlist,{hash:{},inverse:a.noop,fn:a.programWithDepth(1,f,i,t),data:i}),s||s===0?s:""},n.list=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+='<div class="info">'+o(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_REMOVE_CONFIRM",t&&t.count,{hash:{},data:i}))+'</div>\n<div class="operate">\n    <button class="confirm btn btn-red">'+o(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_REMOVE",{hash:{},data:i}))+"</button>\n</div>",s},n.deletePopup=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<div class="name">'+a((o=t&&t.name,typeof o===u?o.apply(t):o))+'</div>\n<div class="mail">'+a((o=t&&t.mail,typeof o===u?o.apply(t):o))+"</div>",s},n.match=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this.escapeExpression,a="function";return s+="<span>"+u(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_NO_USER",{hash:{},data:i}))+' "'+u((o=t&&t.name,typeof o===a?o.apply(t):o))+'"</span>',s},n.nomatch=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o=this.escapeExpression;return s+="<div>"+o(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_DEFAULT_WORKSPACE_TIP1",{hash:{},data:i}))+".</div>\n<div>"+o(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_DEFAULT_WORKSPACE_TIP2",{hash:{},data:i}))+", "+o(n.i18n.call(t,"SETTINGS_MEMBER_LABEL_CREATE_WORKSPACE",{hash:{},data:i}))+".</div>",s},n.defaultProject=e.template(t),n});