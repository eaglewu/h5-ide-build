(function(){define(["constant","../OsPropertyView","./template"],function(e,t,n){return t.extend({render:function(){var t,r;return r=this.model.getTarget(e.RESTYPE.OSPOOL).get("name"),t=this.model.getOtherTarget(e.RESTYPE.OSPOOL).get("name"),this.$el.html(n({poolName:r,memberName:t})),this}},{handleTypes:["OsPoolMembership"],handleModes:["stack","app","appedit"]})})}).call(this);