define(["handlebars"],function(e){var t=function(e,t,n,r,i){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{},'<!-- Design Module Overlay -->\r\n<div id="overlay-panel">\r\n</div>\r\n\r\n<!-- Resource Panel -->\r\n<div id="resource-panel" class="sidebar">\r\n	loading...\r\n</div>\r\n\r\n<!-- Property Panel -->\r\n<div id="property-panel" class="sidebar transition">\r\n	<a href="#" id="hide-property-panel" class="tooltip sidebar-hider icon-caret-right" data-tooltip="Show/Hide Property Panel">\r\n	</a>\r\n\r\n	<div class="property-wrap">\r\n		<section class="property-switcher">\r\n	      <div class="switch-btns">\r\n	        <a href="javascript:void(0)" class="btn-toolbar tooltip" data-tooltip="" id="btn-switch-property">Property</a>\r\n	        <a href="javascript:void(0)" class="btn-toolbar tooltip" data-tooltip="" id="btn-switch-state">State <b class="count"></b></a>\r\n	      </div>\r\n	    </section>\r\n		<div class="sub-property"></div>\r\n		<div class="sub-stateeditor"></div>\r\n	</div>\r\n</div>\r\n\r\n<!-- Canvas Panel -->\r\n<div id="canvas-panel">\r\n\r\n	<!-- Toolbar -->\r\n	<div id="main-toolbar"></div>\r\n\r\n	<!-- Canvas -->\r\n	<div id="canvas" class="scroll-wrap canvas-svg-group"></div>\r\n\r\n	<!-- Statusbar -->\r\n	<div id="main-statusbar" class="clearfix">\r\n		loading...\r\n	</div>\r\n\r\n</div>\r\n\r\n<!-- status bar modal -->\r\n<div id="status-bar-modal" style="display: none;"></div>'};return e.template(t)});