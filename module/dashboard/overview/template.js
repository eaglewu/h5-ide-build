define(["handlebars"],function(e){var t=function(e,t,n,r,i){function l(e,t){var n="",r;return n+='\r\n			<li data-region="'+a((r=(r=e&&e["long"],r==null||r===!1?r:r.id),typeof r===u?r.apply(e):r))+'">'+a((r=(r=e&&e["long"],r==null||r===!1?r:r.name),typeof r===u?r.apply(e):r))+" - "+a((r=(r=e&&e["short"],r==null||r===!1?r:r.name),typeof r===u?r.apply(e):r))+"</li>\r\n		",n}function c(e,t){var n="",r;return n+='\r\n					<li data-region="'+a((r=(r=e&&e["long"],r==null||r===!1?r:r.id),typeof r===u?r.apply(e):r))+'">\r\n						<a href="javascript:void(0)">'+a((r=(r=e&&e["short"],r==null||r===!1?r:r.name),typeof r===u?r.apply(e):r))+"</a>\r\n					</li>\r\n				",n}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<header id="global-region-header">\r\n	<button id="global-refresh" class="icon-refresh">just now</button>\r\n\r\n	<button id="global-create-stack" class="btn btn-primary icon-new-stack" disabled>'+a(n.i18n.call(t,"DASH_CREATE_NEW_STACK",{hash:{},data:i}))+'<i class="icon-caret-down"></i></button>\r\n	<div class="dropdown-menu">\r\n		<ul id="global-region-create-stack-list">',o=n.each.call(t,t&&t.region_names,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;s+='</ul>\r\n	</div>\r\n\r\n	<button id="global-import-stack" class="btn btn-primary icon-import" disabled data-analytics-plus="import_json">'+a(n.i18n.call(t,"DASH_IMPORT_JSON",{hash:{},data:i}))+'</button>\r\n\r\n	<!-- Visualize unmanaged VPC -->\r\n	<button id="global-region-visualize-VPC" class="btn btn-blue icon-visualize" disabled data-analytics-plus="visualize_vpc">'+a(n.i18n.call(t,"DASH_VISUALIZE_VPC",{hash:{},data:i}))+'\r\n<!-- 	<div class="help-tip-body">\r\n		<p><b>Visualize custom VPC resources you have created outside VisualOps.</b></p>\r\n		<p>Once the VPC you select has been visualized, you can manually fine-tune the auto-generated diagram.\r\n		<p>Currently we support to save the visualization as PNG. Future version will include the feature to import VPC resource as an app.</p>\r\n	</div> -->\r\n	</button>\r\n</header>\r\n\r\n\r\n<div id="global-region-wrap" class="scroll-wrap">\r\n<div class="scrollbar-veritical-wrap" style="display: block;"><div class="scrollbar-veritical-thumb"></div></div>\r\n\r\n<div class="scroll-content">\r\n	<!-- Global Map -->\r\n	<div id="global-region-map-wrap">\r\n		<div id="global-region-map-content">\r\n			<ul id="global-region-spot">\r\n				<!-- will be filled -->\r\n			</ul>\r\n\r\n			<div id="global-region-status-widget">\r\n				<!-- will be filled -->\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<!-- Global Map -->\r\n\r\n	<div id="global-region-tabbar-wrap">\r\n		<a id="region-switch" class="disabled btn-blue btn" href="javascript:void(0)">\r\n			<span>'+a(n.i18n.call(t,"DASH_BTN_GLOBAL",{hash:{},data:i}))+'</span>\r\n			<i class="icon-caret-down"></i>\r\n		</a>\r\n\r\n		<div id="region-switch-list" class="dropdown-menu">\r\n			<ul>\r\n				<li data-region="global">\r\n					<a href="javascript:void(0)">'+a(n.i18n.call(t,"DASH_BTN_GLOBAL",{hash:{},data:i}))+"</a>\r\n				</li>\r\n\r\n				",o=n.each.call(t,t&&t.region_names,{hash:{},inverse:f.noop,fn:f.program(3,c,i),data:i});if(o||o===0)s+=o;return s+='\r\n\r\n			</ul>\r\n		</div>\r\n	</div>\r\n\r\n	<!-- Global view -->\r\n		<div id="global-view">\r\n			<!-- loading -->\r\n				<div class="dashboard-loading clearfix">\r\n					<div class="loading-spinner"></div>\r\n				</div>\r\n			<!-- will be filled -->\r\n		</div>\r\n	<!-- Global view -->\r\n\r\n	<!-- Region view -->\r\n		<div id="region-view" style="display:none;">\r\n\r\n			<div id="region-app-stack-wrap">\r\n				<div class="dashboard-loading clearfix">\r\n					<div class="loading-spinner"></div>\r\n				</div>\r\n			</div>\r\n\r\n			<div id="region-resource-wrap">\r\n				<div class="dashboard-loading clearfix">\r\n					<div class="loading-spinner"></div>\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n	<!-- Region view -->\r\n</div>\r\n</div>\r\n</div>',s};return e.template(t)});