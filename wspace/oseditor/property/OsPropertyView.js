(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define(["constant"],function(t){var n,r;return r={stack:{},app:{},appedit:{}},n=Backbone.View.extend({events:{"change .selection[data-target]":"updateAttribute"},constructor:function(e){return e&&_.isObject(e)&&_.extend(this,e),this.__subViews=[],Backbone.View.apply(this,arguments)},reg:function(t){return e.call(this.__subViews,t)>=0?t:t===this?t:(this.__subViews.push(t),_.extend(t,_.pick(this,"propertyPanel","panel","workspace")),t.__superView=this,t)},remove:function(){var e,t,n,r;r=this.__subViews;for(t=0,n=r.length;t<n;t++)e=r[t],e!=null&&typeof e.remove=="function"&&e.remove();return Backbone.View.prototype.remove.apply(this,arguments)},getRenderData:function(){return _.extend({},this.getExtendJson(),this.getModelJson())},getExtendJson:function(){return{modeIsApp:this.modeIsApp(),modeIsAppEdit:this.modeIsAppEdit(),modeIsStack:this.modeIsStack()}},getModelJson:function(){var e,t;switch(!1){case!this.modeIsStack():return this.model.toJSON();case!this.modeIsApp():return(e=this.appModel)!=null?e.toJSON():void 0;case!this.modeIsAppEdit():return _.extend(this.model.toJSON(),{app:(t=this.appModel)!=null?t.toJSON():void 0})}},updateAttribute:function(e){var t,n,r,i;t=$(e.currentTarget),n=t.data("target");if(!n)return;r=t.getValue(),(i=this.getModelForUpdateAttr(e))!=null&&i.set(n,r);if(n==="name")return this.setTitle(r)},getModelForUpdateAttr:function(){return this.model},getPanel:function(){var e;return this.panel||((e=this.__superView)!=null?e.panel:void 0)},getPropertyPanel:function(){var e;return this.propertyPanel||((e=this.__superView)!=null?e.propertyPanel:void 0)},getModelForMode:function(){return this.model},mode:function(){var e,t;return t=this.getModelForMode(),t?(e=Design.instance().mode(),e==="appedit"&&!t.get("appId")&&(e="stack"),e):""},modeIsApp:function(){return this.mode()==="app"},modeIsAppEdit:function(){return this.mode()==="appedit"},modeIsStack:function(){return this.mode()==="stack"},getTitle:function(){var e;return(e=this.model)!=null?e.get("name"):void 0},setTitle:function(){var e;return(e=this.getPropertyPanel())!=null?e.setTitle.apply(this.getPropertyPanel(),arguments):void 0},showFloatPanel:function(){var e;return(e=this.getPanel())!=null?e.showFloatPanel.apply(this.getPanel(),arguments):void 0},hideFloatPanel:function(){var e;return(e=this.getPanel())!=null?e.hideFloatPanel.apply(this.getPanel(),arguments):void 0},beforeRender:function(){var e;return(e=this.getPanel())!=null?e.hideFloatPanel():void 0},afterRender:function(){}},{extend:function(e,t){var r,i,s;return r=Backbone.View.extend.apply(this,arguments),delete r.register,delete r.getClass,_.isFunction(r.prototype.render)&&(r.prototype.originalRender=r.prototype.render,r.prototype.render=function(){var e;return this.beforeRender(),e=this.originalRender(),this.afterRender(),e}),t&&(s=t.handleTypes,i=t.handleModes,n.register(s,i,r)),r},register:function(e,t,n){var i,s,o,u,a,f;for(o=0,a=t.length;o<a;o++){i=t[o];for(u=0,f=e.length;u<f;u++)s=e[u],r[i][s]=n}return null},getClass:function(e,t){return r[e][t]}}),n})}).call(this);