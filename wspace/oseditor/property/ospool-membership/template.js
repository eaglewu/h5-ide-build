define(["handlebars"],function(e){var t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression;return s+='<div class="os-property-message">\r\n    This is a connection of '+a((o=t&&t.poolName,typeof o===u?o.apply(t):o))+" and "+a((o=t&&t.memberName,typeof o===u?o.apply(t):o))+", registering "+a((o=t&&t.memberName,typeof o===u?o.apply(t):o))+" as member of load balancer.\r\n</div>",s};return e.template(t)});