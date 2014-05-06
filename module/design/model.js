(function(){define(["Design","MC","event","constant","app_model","stack_model","state_model","instance_service","ami_service","i18n!nls/lang.js","underscore","backbone"],function(e,t,n,r,i,s,o,u,a,f,l){var c,h;return c=Backbone.Model.extend({defaults:{snapshot:null},initialize:function(){var e;return e=this,e.on("APP_RESOURCE_RETURN",function(e){var r,i,s;r=e.param[4],void 0;if(!e.is_error)try{r===t.data.current_tab_id?(this.setCurrentResource(e),t.canvas.event.clearList(),$canvas.trigger("CANVAS_NODE_SELECTED","")):this.setOriginResource(e,r)}catch(o){s=o,i=t.forge.app.getNameById(r),notification("error",sprintf(f.ide.TOOL_MSG_INFO_APP_REFRESH_FAILED,i?i:r+"(closed)")),void 0}return r===t.data.current_tab_id&&n.trigger(n.GET_STATE_MODULE),null}),e.on("APP_INFO_RETURN",function(e){var n;return void 0,n=e.param[4][0],n===t.data.current_tab_id?(this.setCanvasData(e.resolved_data[0]),this.setOriginData(e.resolved_data[0]),t.data.running_app_list&&t.data.running_app_list[n]&&t.data.running_app_list[n].state==="stopped"&&t.common.other.canvasData.save(t.common.other.canvasData.data(!0)),t.common.other.canvasData.set("state",t.common.other.canvasData.data("origin").state)):(this.updateAppTabDate(e.resolved_data[0],n),this.updateAppTabOriginDate(e.resolved_data[0],n)),this.getAppResourcesService(e.param[3],n),null})},addTab:function(e,n,r,i,s,o,u){return void 0,t.tab[e]={snapshot:n,design_model:r,data:i,origin_data:s,property_panel:o,origin_ta_valid:u},null},deleteTab:function(e){var n;return void 0,delete t.tab[e],void 0,t.process[e]&&e.split("-")[0]==="process"&&t.common.other.deleteProcess(e),void 0,n=t.common.other.getCacheMap(e),(n&&n.state==="ERROR"||e.split("-")[0]==="appview")&&t.common.other.delCacheMap(e),null},getTab:function(e,r){return void 0,this.set("snapshot",Math.round(+(new Date))),n.trigger(n.SWITCH_WAITING_BAR),this.set("snapshot",t.tab[r].snapshot),this.setDesignModel(t.tab[r].design_model),this.setCanvasData(t.tab[r].data),this.setOriginData(t.tab[r].origin_data),t.tab[r].origin_resource&&this.setCurrentResource(t.tab[r].origin_resource),this.setPropertyPanel(t.tab[r].property_panel),this.setTAValidation(t.tab[r].origin_ta_valid),null},updateAppTabDate:function(e,n){return void 0,t.tab[n]&&(t.tab[n].data=$.extend(!0,{},e),t.tab[n].design_model.save(e),t.tab[n].design_model.set("state",e.state)),null},updateAppTabOriginDate:function(e,n){return void 0,t.tab[n]&&(t.tab[n].origin_data=$.extend(!0,{},e)),null},updateTab:function(e,n){var r;void 0,r=$.extend(!0,{},t.tab[n]);if(r)return r.data.id=e,r.origin_data.id=e,r.design_model.set("id",e),t.tab[e]=$.extend(!0,{},r),delete t.tab[n]},setCanvasData:function(e){return void 0,t.common.other.canvasData.init(e),null},getCanvasData:function(){return void 0,t.common.other.canvasData.data()},setPropertyPanel:function(e){return void 0,this.trigger("SET_PROPERTY_PANEL",e),null},setOriginData:function(e){return void 0,t.common.other.canvasData.origin(e),null},getOriginData:function(){return void 0,t.common.other.canvasData.origin()},setTAValidation:function(e){return void 0,t.ta.list=$.extend(!0,[],e),null},getTAValidation:function(){return void 0,$.extend(!0,[],t.ta.list)},setOriginResource:function(e,n){return void 0,t.tab[n]&&(t.tab[n].origin_resource=$.extend(!0,{},e)),null},setDesignModel:function(e){return void 0,e.use(),null},getDesignModel:function(){return void 0,e.instance()},describeInstancesOfASG:function(n){var i,s,o,a,f,c,h,p,d,v,m,g,y,b;void 0,h=[];try{o=e.modelClassForType(r.RESTYPE.ASG).allObjects();for(v=0,g=o.length;v<g;v++){i=o[v],s=i.get("appId"),a=t.data.resource_list[n][s],p=a&&a.Instances?a.Instances.member:null,b=p||[];for(m=0,y=b.length;m<y;m++)c=b[m],h.push(c.InstanceId)}d={},d.sender=this,d.model=null,h.length>0&&u.DescribeInstances(d,$.cookie("usercode"),$.cookie("session_id"),n,h,null,function(e){return e.is_error?void 0:(void 0,e.resolved_data&&l.map(e.resolved_data,function(e,r){return t.data.resource_list[n][e.instanceId]=e,null}),null)})}catch(w){f=w,void 0}return null},appInfoService:function(e,t){return void 0,i.info({sender:this},$.cookie("usercode"),$.cookie("session_id"),e,[t])},getAppResourcesService:function(e,t){return void 0,i.resource({sender:this},$.cookie("usercode"),$.cookie("session_id"),e,t)},returnAppState:function(e,t){var n;void 0;if(t)n=t;else switch(e){case"START_APP":n=r.APP_STATE.APP_STATE_STARTING;break;case"STOP_APP":n=r.APP_STATE.APP_STATE_STOPPING;break;case"TERMINATE_APP":n=r.APP_STATE.APP_STATE_TERMINATING;break;default:void 0,void 0}return n},setCurrentResource:function(n){var r,i,s,o,u,a;return void 0,u=$.extend(!0,{},n),r=u.param[4],s=u.param[3],o=u.resolved_data,t.data.running_app_list&&t.data.running_app_list[r]&&t.data.running_app_list[r].state==="running"&&(void 0,$("#vpc_layer, #az_layer, #subnet_layer, #asg_layer, #line_layer, #node_layer").empty(),i={mode:"app"},new e(t.common.other.canvasData.origin(),i)),delete t.data.running_app_list[r],o&&(e.instance().clearResourceInCache(),t.aws.aws.cacheResource(o,s,!1),this.describeInstancesOfASG(s)),t.common.other.canvasData.set("layout",{connection:{}}),a=$canvas.selected_node()[0],a&&t.canvas.select(a),e.instance().trigger(e.EVENT.AwsResourceUpdated),this.setOriginData(t.common.other.canvasData.data()),t.tab&&t.tab[r]&&t.tab[r].origin_resource&&(t.tab[r].origin_resource=null),void 0},getStateModule:function(){var e,r,i,s,u;return void 0,r=this,r.off("STATE_MODULE_RETURN"),e=t.common.other.canvasData.get("agent"),i=e.module.repo,s=e.module.tag,u=i+":"+s,t.data.state.module||(t.data.state.module={}),t.data.state.module[u]?(void 0,n.trigger(n.SWITCH_MAIN)):(o.module({sender:r,mod_version:u},$.cookie("usercode"),$.cookie("session_id"),i,s),r.on("STATE_MODULE_RETURN",function(e,r){return void 0,e.is_error||(t.data.state.module[r.mod_version]=e.resolved_data,void 0,n.trigger(n.SWITCH_MAIN)),null}))}}),h=new c,h})}).call(this);