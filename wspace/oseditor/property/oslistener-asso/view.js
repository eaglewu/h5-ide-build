(function(){define(["constant","../OsPropertyView","./template"],function(e,t,n){return t.extend({render:function(){var t,r;return t=this.model.getTarget(e.RESTYPE.OSPOOL).get("name"),r=this.model.getTarget(e.RESTYPE.OSLISTENER).get("name"),this.$el.html(n({namePort1:t,namePort2:r})),this}},{handleTypes:["OsListenerAsso"],handleModes:["stack","app","appedit"]})})}).call(this);