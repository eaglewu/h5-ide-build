(function(){define(["constant","../OsPropertyView","./template","CloudResources"],function(e,t,n,r){return t.extend({render:function(){return this.$el.html(n.appTemplate(this.getRenderData())),this}},{handleTypes:[e.RESTYPE.OSVOL],handleModes:["app"]})})}).call(this);