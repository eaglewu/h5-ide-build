(function(){require.config({baseUrl:"./",waitSeconds:30,deps:["main"],locale:language,urlArgs:"v="+version,paths:{main:"js/register/main",router:"js/register/router",register:"module/register/main",reg_model:"module/register/model",reg_view:"module/register/view",jquery:[current_jquery,"vender/jquery/jquery"],underscore:"vender/underscore/underscore",backbone:"vender/backbone/backbone",handlebars:"vender/handlebars/handlebars",domReady:"vender/requirejs/domReady",i18n:"vender/requirejs/i18n",text:"vender/requirejs/text",crypto:"vender/crypto-js/hmac-sha256",base_main:"module/base/base_main",event:"event/ide_event","UI.notification":"ui/common/UI.notification",MC:"lib/MC.core",constant:"lib/constant",base_model:"model/base_model",account_model:"model/account_model",account_service:"service/account/account_service",session_model:"model/session_model",session_service:"service/session/session_service",result_vo:"service/result_vo",common_handle:"lib/common/main"},shim:{jquery:{exports:"$"},underscore:{exports:"_"},backbone:{deps:["underscore","jquery"],exports:"Backbone"},handlebars:{exports:"Handlebars"},MC:{deps:["jquery","constant"],exports:"MC"},register:{deps:["reg_view","reg_model","MC"]},main:{deps:["jquery"]}}})}).call(this);