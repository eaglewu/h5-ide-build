define(["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<ul class="status-bar"></ul>\n<div class="status-bar-modal" style="display: none;"></div>'},n.frame=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'Last saved: <span class="stack-save-time">-<span>'},n.lastSaved=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<span class="state-success"><i class="status status-green icon-label"></i><b>'+a((o=t&&t.successCount,typeof o===u?o.apply(t):o))+'</b></span>\n<span class="state-failed"><i class="status status-red icon-label"></i><b>'+a((o=t&&t.failCount,typeof o===u?o.apply(t):o))+"</b></span>",s},n.state=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},"Validate"},n.ta=e.template(t),n});