define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var r="",i;r+='\n\n<div class="property-group-head truncate"><span class="sg-color sg-color-rule-header" style="background-color:'+a((i=e&&e.sgColor,typeof i===u?i.apply(e):i))+'"></span>'+a((i=e&&e.groupName,typeof i===u?i.apply(e):i))+'</div>\n<div class="property-group">\n  <ul class="sg-rule-list property-list" id="sg-info-list">\n    ',i=n.each.call(e,e&&e.rules,{hash:{},inverse:f.noop,fn:f.program(2,c,t),data:t});if(i||i===0)r+=i;return r+="\n  </ul>\n</div>\n",r}function c(e,t){var r="",i;r+='\n    <li>\n      <div class="rule-list-row">\n        <div class="rule-direction-icon icon-'+a((i=e&&e.direction,typeof i===u?i.apply(e):i))+' tooltip" data-tooltip="'+a((i=e&&e.direction,typeof i===u?i.apply(e):i))+'"></div>\n        ',i=n["if"].call(e,e&&e.sgColor,{hash:{},inverse:f.noop,fn:f.program(3,h,t),data:t});if(i||i===0)r+=i;r+='\n        <div class="rule-reference truncate tooltip" data-tooltip=\'',i=n.ifCond.call(e,e&&e.direction,"inbound",{hash:{},inverse:f.program(7,d,t),fn:f.program(5,p,t),data:t});if(i||i===0)r+=i;return r+="'>"+a((i=e&&e.ipRanges,typeof i===u?i.apply(e):i))+'</div>\n      </div>\n      <div class="rule-list-row">\n        <div><span class="rule-protocol tooltip" data-tooltip="'+a(n.i18n.call(e,"DASH_LBL_PROTOCOL",{hash:{},data:t}))+'">'+a((i=e&&e.ipProtocol,typeof i===u?i.apply(e):i))+'</span></div>\n        <div class="rule-port tooltip" data-tooltip="'+a(n.i18n.call(e,"PROP_SG_TIP_PORT_CODE",{hash:{},data:t}))+'">'+a((i=e&&e.dispPort,typeof i===u?i.apply(e):i))+"</div>\n      </div>\n    </li>\n    ",r}function h(e,t){var n="",r;return n+='<span class="sg-color" style="background-color:'+a((r=e&&e.sgColor,typeof r===u?r.apply(e):r))+'"></span>',n}function p(e,t){return"Source"}function d(e,t){return"Destination"}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<article class="property-info" style="margin-top:0;">\n   <section class="property-control-group">The selected connection reflects following security group rule(s):</section>\n</article>\n\n',o=n.each.call(t,t&&t.sg_group,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;return s+="\n",s};return e.template(t)});