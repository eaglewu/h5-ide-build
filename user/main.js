(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k;(function(){var e,t,n;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?e=t[t.length-2]+"."+t[t.length-1]:e=n.hostname,window.API_HOST="api."+e,window.API_PROTO=n.protocol+"//",window.language=window.version="",n.hostname.toLowerCase().indexOf("visualops.io")>=0&&n.protocol==="http:"&&(window.location=n.href.replace("http:","https:"))})(),h=function(){var e;e=window.location.pathname,e.length===1?e="":e=e.replace("/","#"),window.location="/500/"+e},k=null,s=function(e){return window.btoa(unescape(encodeURIComponent(e)))},i=function(e){return decodeURIComponent(escape(window.atob(e)))},o=function(){return!!$.cookie("usercode")&&!!$.cookie("session_id")},y=function(){return document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||"en-us"},f="reset",N=function(e){var t,n,r;t=window.location.hash.split("#").pop().split("/"),n=window.location.pathname.split("/"),n.shift(),typeof e[r=n[0]]=="function"&&e[r](n,t)},p=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t,n;return t=Math.random()*16|0,n=e==="x"?t:t&3|8,n.toString(16)}).toUpperCase()},r=function(e){return k=$.ajax({url:API_PROTO+API_HOST+e.url,dataType:"json",type:"POST",jsonp:!1,data:JSON.stringify({jsonrpc:"2.0",id:p(),method:e.method||"",params:e.data||{}}),success:function(t){return e.success(t.result[1],t.result[0])},error:function(t,n,r){if(n!=="abort")return e.error(n,-1)}}),k},Handlebars.registerHelper("i18n",function(e){return(typeof m=="function"?m(e):void 0)||e}),w=function(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))},l=function(){var e;return e=w("ref"),e.charAt(0)==="/"?e:"/"},c=function(){return window.location.search||""},b=function(e){return $.ajax({url:"/nls/"+y()+"/lang.js",jsonp:!1,dataType:"jsonp",jsonpCallback:"define",beforeSend:function(){var e;return e=Handlebars.compile($("#loading-template").html()),$("#main-body").html(e())},success:function(e){window.langsrc=e},error:function(e){return h(),void 0}}).done(function(){return e()})},window.onhashchange=function(){return g()},m=function(e){return langsrc[f][e]},E=function(e){var t;return t=Handlebars.compile($(e).html()),$("#main-body").html(t())},g=function(){var r,i,s,h;return h=navigator.userAgent.toLowerCase(),r=/(chrome)[ \/]([\w.]+)/.exec(h)||/(webkit)[ \/]([\w.]+)/.exec(h)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(h)||/(msie) ([\w.]+)/.exec(h)||h.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(h)||[],s={chrome:10,webkit:6,msie:10,mozilla:4,opera:10},r[1]==="webkit"&&(i=/version\/([\d\.]+).*safari/.exec(h),i&&(r[2]=i[1])),(parseInt(r[2],10)||0)<s[r[1]]&&$("header").after('<div id="unsupported-browser"><p>MadeiraCloud IDE does not support the browser you are using.</p> <p>For a better experience, we suggest you use the latest version of <a href="https://www.google.com/intl/en/chrome/browser/" target="_blank">Chrome</a>, <a href="http://www.mozilla.org/en-US/firefox/all/" target="_blank">Firefox</a> or <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie" target="_blank">IE</a>.</p></div>'),N({reset:function(t,n){var r;return f="reset",r=n[0],r==="password"?u(n[1],function(t,r){var i;if(!t)return void 0,E("#password-template"),$("form.box-body").find("input").eq(0).focus(),$("#reset-form").on("submit",function(t){return t.preventDefault(),C()&&($("#reset-password").attr("disabled",!0).val(langsrc.reset.reset_waiting),e(n,$("#reset-pw").val())),!1});i=i||langsrc.reset["expired-info"],langsrc.reset["expired-info"]=langsrc.service["RESET_PASSWORD_ERROR_"+t]||i,window.location.hash="expire"}):r==="expire"?(E("#expire-template"),$(".account-instruction a").attr("href","/login"+c())):r==="email"?(E("#email-template"),$("form.box-body").find("input").eq(0).focus()):r==="success"?(E("#success-template"),$(".account-instruction a").attr("href","/login"+c())):(E("#default-template"),$(".title-link").find("a").eq(0).attr("href","/register/"+c()),$(".title-link").find("a").eq(1).attr("href","/login/"+c()),$("#reset-pw-email").focus(),$("#reset-pw-email").keyup(function(){return this.value?$("#reset-btn").removeAttr("disabled"):$("#reset-btn").attr("disabled",!0)}),$("#reset-form").on("submit",function(){return $("#reset-pw-email").off("keyup"),$("#reset-btn").attr("disabled",!0),$("#reset-pw-email").attr("disabled",!0),$("#reset-btn").val(window.langsrc.reset.reset_waiting),S($("#reset-pw-email").val()),!1}))},login:function(e,n){var r,i,s,u;return o()&&(window.location=l()),f="login",E("#login-template"),$(".account-btn-wrap a").attr("href","/reset/"+c()),$("#login-register").find("a").attr("href","/register/"+c()),i=$("#login-user"),r=$("#login-password"),u=$("#login-btn").attr("disabled",!1),$("#login-form input").eq(0).focus(),s=function(){if($(this).val().trim())return $(this).parent().removeClass("error")},i.on("keyup",s),r.on("keyup",s),$("#login-form").on("submit",function(e){return e.preventDefault(),i.val()&&r.val()?($(".error-msg").hide(),$(".control-group").removeClass("error"),u.attr("disabled",!0).val(langsrc.reset.reset_waiting),t([i.val(),r.val()],function(e){return $("#error-msg-1").show(),u.attr("disabled",!1).val(langsrc.login["login-btn"])})):($("#error-msg-2").show(),i.val().trim()?i.parent().removeClass("error"):i.parent().addClass("error"),r.val().trim()?r.parent().removeClass("error"):r.parent().addClass("error"),!1)})},register:function(e,t){var r,i,s,u,h,p,d,v,m,g,y,b;return f="register",t[0]==="success"?(E("#success-template"),$("#register-get-start").click(function(){window.location=l()}),!1):(o()&&(window.location=l()),E("#register-template"),$(".title-link a").attr("href","/login/"+c()),i=$("#register-form"),i.find("input").eq(0).focus(),u=$("#register-username"),r=$("#register-email"),s=$("#register-password"),b=void 0,g=void 0,$("#register-btn").attr("disabled",!1),m=function(e,t){var n,r;return r=u.val(),n=$("#username-verification-status"),r.trim()!==""?/[^A-Za-z0-9\_]{1}/.test(r)!==!0?r.length>40?(n.removeClass("verification-status").addClass("error-status").text(langsrc.register.username_maxlength),t?t(0):!1):(n.hasClass("error-status")&&n.removeClass("verification-status").removeClass("error-status").text(""),t?p(r,n,t):!0):(n.removeClass("verification-status").addClass("error-status").text(langsrc.register.username_not_matched),t?t(0):!1):(n.removeClass("verification-status").addClass("error-status").text(langsrc.register.username_required),t?t(0):!1)},d=function(e,t,n){var i,s,o;return i=r.val(),o=$("#email-verification-status"),s=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i.trim()!==""?s.test(i)?(o.hasClass("error-status")&&o.removeClass("verification-status").removeClass("error-status").text(""),t?h(i,o,t):!0):(o.removeClass("verification-status").addClass("error-status").text(langsrc.register.email_not_valid),t?t(0):!1):(o.removeClass("verification-status").addClass("error-status").text(langsrc.register.email_required),t?t(0):!1)},v=function(e,t){var n,r;return n=s.val(),r=$("#password-verification-status"),n!==""?n.length>5?(r.removeClass("verification-status").removeClass("error-status").text(""),t?t(1):!0):(r.removeClass("verification-status").addClass("error-status").text(langsrc.register.password_shorter),t?t(0):!1):(r.removeClass("verification-status").addClass("error-status").text(langsrc.register.password_required),t?t():!1)},p=function(e,t,n){k!=null&&k.abort(),window.clearTimeout(b),b=window.setTimeout(function(){return a([e,null],function(e){return e?e==="error"?($(".error-msg").eq(0).text(langsrc.service.NETWORK_ERROR).show(),$("#register-btn").attr("disabled",!1).val(langsrc.register["register-btn"])):m()?(t.removeClass("verification-status").addClass("error-status").text(langsrc.register.username_taken),typeof n=="function"?n(0):void 0):typeof n=="function"?n(0):void 0:m()?(t.removeClass("error-status").addClass("verification-status").show().text(langsrc.register.username_available),typeof n=="function"?n(1):void 0):!1})},500)},h=function(e,t,n){k!=null&&k.abort(),window.clearTimeout(g),g=window.setTimeout(function(){return a([null,e],function(e){return e?e==="error"?($(".error-msg").eq(0).text(langsrc.service.NETWORK_ERROR).show(),$("#register-btn").attr("disabled",!1).val(langsrc.register["register-btn"])):(t.removeClass("verification-status").addClass("error-status").text(langsrc.register.email_used),typeof n=="function"?n(0):void 0):d()?(t.removeClass("error-status").addClass("verification-status").show().text(langsrc.register.email_available),typeof n=="function"?n(1):void 0):!1})},500)},y=function(e){return e&&($(".verification-status").removeAttr("style"),$(".error-status").removeClass("error-status")),$("#register-btn").attr("disabled",!1).val(langsrc.register["register-btn"])},u.on("keyup blur change",function(e){return m(e,function(e){return e||y(),e})}),r.on("keyup blur change",function(e){return d(e,function(e){return e||y(),e})}),s.on("keyup blur change",function(e){return v(e,function(e){return e||y(),e})}),i.on("submit",function(e){var t,i,o;return e.preventDefault(),$(".error-msg").removeAttr("style"),u.next().hasClass("error-status")||r.next().hasClass("error-status")?!1:(o=m(),t=d(),i=v(),o&&t&&i?($("#register-btn").attr("disabled",!0).val(langsrc.register.reginster_waiting),m(e,function(t){return t?d(e,function(i){return i?v(e,function(e){if(!e)return y(),!1;if(t&&i&&e)return n([u.val(),s.val(),r.val()],function(e){return y(!0),$("#register-status").show().text(langsrc.service["ERROR_CODE_"+e+"_MESSAGE"]),!1})}):(y(),!1)}):(y(),!1)})):!1)}))}})},C=function(){var e,t;return e=$("#password-verification-status"),t=$("#reset-pw").val(),e.removeClass("error-status"),t!==""?t.length>5?(e.hide(),!0):(e.addClass("error-status").show().text(langsrc.reset.reset_password_shorter),!1):(e.addClass("error-status").show().text(langsrc.reset.reset_password_required),!1)},T=function(){return $("#reset-pw-email").attr("disabled",!1),$("#reset-btn").attr("disabled",!1).val(window.langsrc.reset.reset_btn),$("#reset-status").removeClass("verification-status").addClass("error-msg").show().text(langsrc.reset.reset_error_state),!1},d=function(e){return void 0},v=function(e){return h(),void 0},u=function(e,t){return r({url:"/account/",method:"check_validation",data:[e,"reset"],success:function(e,n){return void 0,t(n)},error:function(e){return v(e),!1}})},x=function(e){var t,n,r,i,s;i={domain:window.location.hostname.replace("ide","")},s=$.cookie();for(r in s)n=s[r],r!=="stack_store_id_local"&&r!=="stack_store_id"&&$.removeCookie(r,i);return t={expires:30,path:"/"},$.cookie("usercode",e.username,t),$.cookie("session_id",e.session_id,t),$.cookie("has_session",!!e.session_id,{domain:window.location.hostname.replace("ide",""),path:"/",expires:30})},n=function(e,t){return r({url:"/account/",method:"register",data:e,success:function(e,n){if(!!n)return t(n);x(e),window.location.hash="success"},error:function(e){return v(e)}})},t=function(e,t){return r({url:"/session/",method:"login",data:e,success:function(e,n){if(!!n)return t(n);x(e),window.location=l()},error:function(e){return v(e)}})},S=function(e){return a([e,null],function(t){return t?r({url:"/account/",method:"reset_password",data:[e],success:function(e,t){return t?(d(t),T(),!1):(window.location.hash="email",!0)},error:function(e){return v(e)}}):(T(),!1)})},a=function(e,t){return r({url:"/account/",method:"check_repeat",data:e,success:function(e,n){return t(n)},error:function(e){return t("error")}})},e=function(e,t){return r({url:"/account/",method:"update_password",data:[e[1],t],success:function(e,t){if(!!t)return d(t);window.location.hash="success"},error:function(e){return v(e)}})},b(g)}).call(this);