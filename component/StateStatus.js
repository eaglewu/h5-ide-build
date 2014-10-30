define("component/statestatus/template",["handlebars"],function(e){var t,n={};return t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="modal-header">\n	<h3>Failed State</h3>\n	<i class="modal-close">×</i>\n</div>\n<div class="modal-body">\n	<div class="modal-state-statusbar">\n	</div>\n</div>'},n.modal=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<div class="state-status-content">\n\n	<div class="scroll-wrap scroll-wrap-validation" style="height:200px;">\n		<div class="scrollbar-veritical-wrap" style="display: block;"><div class="scrollbar-veritical-thumb"></div></div>\n		<div class="content_wrap scroll-content">\n			<div class="update-tip"></div>\n			<div class="status-item">\n				<p class="no-item">No failed item.</p>\n			</div>\n		</div>\n	</div>\n</div>'},n.content=e.template(t),t=function(e,t,n,r,i){function l(e,t){var n="",r;return n+=a((r=e&&e.parent,typeof r===u?r.apply(e):r))+"'s ",n}function c(e,t){return"<s>has failed</s> is updated."}function h(e,t){return"has failed"}function p(e,t){return"State log will update after change is applied."}function d(e,t){return a(n.UTC.call(e,e&&e.time,{hash:{},data:t}))}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="state-status-item-icon">\n	<i class="status status-red"></i>\n</div>\n<div class="state-status-item-info">\n	<div class="state-status-item-desc truncate">\n		',o=n["if"].call(t,t&&t.parent,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+=a((o=t&&t.name,typeof o===u?o.apply(t):o))+" 's state "+a((o=t&&t.stateId,typeof o===u?o.apply(t):o))+" ",o=n["if"].call(t,t&&t.updated,{hash:{},inverse:f.program(5,h,i),fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;s+='\n	</div>\n	<div class="timestamp">\n		',o=n["if"].call(t,t&&t.updated,{hash:{},inverse:f.program(9,d,i),fn:f.program(7,p,i),data:i});if(o||o===0)s+=o;return s+="\n	</div>\n</div>",s},n.item=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<dl class="state-status-pending">\n	<dt>All states are pending.</dt>\n	<dd>A message will show here when a state succeeds or fails.</dd>\n</dl>'},n.pending=e.template(t),t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<ul class="state-status-list">\n</ul>'},n.container=e.template(t),t=function(e,t,n,r,i){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o="function",u=this.escapeExpression;return s+='<div class="state-status-update">\n	'+u(typeof t===o?t.apply(t):t)+" states has updated status.\n</div>",s},n.update=e.template(t),n}),function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define("component/statestatus/view",["event","./template","backbone","jquery","handlebars"],function(t,n){var r,i;return r=Backbone.View.extend({tagName:"li",className:"state-status-item",initialize:function(){return this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(n.item(this.model.toJSON())),this},events:{"click .state-status-item-detail":"openStateEditor"},openStateEditor:function(){return t.trigger(t.SHOW_STATE_EDITOR,this.model.get("uid")),null}}),i=Backbone.View.extend({events:{"click .modal-close":"closePopup","click .state-status-update":"renderNew"},initialize:function(){return this.items=this.model.get("items"),this.listenTo(this.model,"change:items",this.renderAllItem),this.listenTo(this.model,"change:stop",this.renderAllItem),this.listenTo(this.model,"change:new",this.renderUpdate),this.itemView=r,null},render:function(){return this.$statusModal=this.$el,this.$el.html(n.modal()),this.$(".modal-state-statusbar").html(n.content()),this.renderAllItem(),$(".status-bar-modal").html(this.el).show(),this},renderUpdate:function(e){var t;return t=e.get("new").length,t&&this.$(".update-tip").html(n.update(t)),scrollbar.scrollTo(this.$(".scroll-wrap"),{top:0})},renderNew:function(){return this.$(".update-tip div").hide(),this.renderAllItem(),this.model.flushNew()},renderAllItem:function(){var e;e=this.items;if(this.model.get("stop")){this.renderPending();return}if(e.length)return this.renderContainer(),e.each(this.renderItem,this)},renderItem:function(t,n){var r;return r=new this.itemView({model:t}),r.render(),r.$el.hide(),this.$(".state-status-list").append(r.el),e.call(this.model.get("new"),t)>=0?_.defer(function(){return r.$el.fadeIn(300)}):r.$el.show()},renderContainer:function(){return this.$(".status-item").html(n.container())},renderPending:function(){return this.$(".status-item").html(n.pending())},closePopup:function(){return $(".status-bar-modal").hide(),this.trigger("CLOSE_POPUP")}}),i})}.call(this),function(){define("component/statestatus/model",["constant","event","backbone","jquery","underscore","MC"],function(e,t){var n;return n=Backbone.Model.extend({initialize:function(){var e;return this.collection=new(this.__customCollection()),e=App.WS.collection.status.find().fetch(),this.collection.set(this.__dispose(e).models,{silent:!0}),this.set("items",this.collection),this.set("new",[]),this.set("stop",Design.instance().get("state")==="Stopped")},__collectNew:function(e){var t;return t=this.get("new"),this.set("new",this.get("new").concat(e)),this},flushNew:function(){return this.set("new",[])},__customCollection:function(){var e;return e=this,Backbone.Collection.extend({comparator:function(e){return-e.get("time")},initialize:function(){return this.on("add",e.__collectNew,e)}})},__genId:function(e,t){return""+e+"|"+t},__dispose:function(e){var t,n,r,i,s,o,u,a,f,l;t=new Backbone.Collection,void 0,_.isArray(e)||(e=[e]);for(o=0,a=e.length;o<a;o++){i=e[o];if(i.status){l=i.status;for(r=u=0,f=l.length;u<f;r=++u){s=l[r];if(i.app_id!==Design.instance().get("id"))continue;n={id:this.__genId(i.res_id,s.id),appId:i.app_id,resId:i.res_id,stateId:r+1,time:s.time,result:s.result},_.extend(n,this.__extendComponent(n.resId)),n.name||(n.name="unknown"),n.result==="failure"&&t.add(new Backbone.Model(n))}}}return t},__extendComponent:function(e){var t,n;return n={},t=MC.aws.aws.getCompByResIdForState(e),t.parent?(t.self?n.name=t.self.get("name"):(n.parent=t.parent.get("name"),n.name=e),n.uid=t.parent.id):t.self?(n.name=t.self.get("name"),n.uid=t.self.id):n.name=e,n},listenStateStatusUpdate:function(e,t,n){var r;return r=this.__dispose(t),this.collection.add(r.models),null},listenStateEditorUpdate:function(e){var t,n,r,i,s,o;n=e.resId,i=e.stateIds;for(s=0,o=i.length;s<o;s++)r=i[s],t=this.__genId(n,r),this.collection.get(t)&&this.collection.get(t).set("updated",!0);return null},listenUpdateAppState:function(e){return e==="Stopped"?this.set("stop",!0):this.set("stop",!1)}}),n})}.call(this),function(){define("state_status",["jquery","event","./component/statestatus/view","./component/statestatus/model"],function(e,t,n,r){var i,s,o,u;return s=null,u=null,i=function(){return s=new r,u=new n({model:s}),u.on("CLOSE_POPUP",this.unLoadModule,this),t.onLongListen(t.UPDATE_STATE_STATUS_DATA,s.listenStateStatusUpdate,s),t.onLongListen(t.STATE_EDITOR_DATA_UPDATE,s.listenStateEditorUpdate,s),u.render()},o=function(){return u.remove(),s.destroy(),t.offListen(t.UPDATE_STATE_STATUS_DATA,s.listenStateStatusUpdate),t.offListen(t.STATE_EDITOR_DATA_UPDATE)},{loadModule:i,unLoadModule:o}})}.call(this),define("component/StateStatus",function(){});