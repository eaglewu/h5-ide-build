(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C;(function(){var e,t,n;n=window.location;if(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(n.hostname)){void 0;return}t=n.hostname.split("."),t.length>=3?e=t[t.length-2]+"."+t[t.length-1]:e=n.hostname,window.API_HOST="api."+e,window.API_PROTO=n.protocol+"//",window.language=window.version="",n.hostname.toLowerCase().indexOf("visualops.io")>=0&&n.protocol==="http:"&&(window.location=n.href.replace("http:","https:"))})(),l=function(){var e;e=window.location.pathname,e.length===1?e="":e=e.replace("/","#"),window.location="/500/"+e},C=null,i=function(){return!!$.cookie("usercode")&&!!$.cookie("session_id")},m=function(){return document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*lang\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1")||"zh-cn"},u="RESET",x=(new Date).getTimezoneOffset()/-60,T=function(e){var t,n,r;t=window.location.hash.split("#").pop().split("/"),n=window.location.pathname.split("/"),n.shift(),typeof e[r=n[0]]=="function"&&e[r](n,t)},c=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t,n;return t=Math.random()*16|0,n=e==="x"?t:t&3|8,n.toString(16)}).toUpperCase()},r=function(e){return C=$.ajax({url:API_PROTO+API_HOST+e.url,dataType:"json",type:"POST",jsonp:!1,data:JSON.stringify({jsonrpc:"2.0",id:c(),method:e.method||"",params:e.data||{}}),success:function(t){return e.success(t.result[1],t.result[0])},error:function(t,n,r){if(n!=="abort")return e.error(n,-1)}}),C},Handlebars.registerHelper("i18n",function(e){return(typeof d=="function"?d(e):void 0)||e}),y=function(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))},a=function(){var e;return e=y("ref"),e.charAt(0)==="/"?e:"/"},f=function(){return window.location.search||""},g=function(e){return $.ajax({url:"/nls/"+m()+"/lang.js",jsonp:!1,dataType:"jsonp",jsonpCallback:"define",beforeSend:function(){var e;return e=Handlebars.compile($("#loading-template").html()),$("#main-body").html(e())},success:function(e){window.langsrc=e},error:function(e){return l(),void 0}}).done(function(){var t;return t=$("[type='text/x-language-template']"),t.size()&&t.each(function(e,t){var n;return t=$(t),n=Handlebars.compile(t.html()),$("#"+t.data("target")).html(n(window.langsrc))}),e()})},window.onhashchange=function(){return v()},d=function(e){return langsrc[u][e]},b=function(e){var t;return t=Handlebars.compile($(e).html()),$("#main-body").html(t())},v=function(){var r,l,c,h;return h=navigator.userAgent.toLowerCase(),r=/(chrome)[ \/]([\w.]+)/.exec(h)||/(webkit)[ \/]([\w.]+)/.exec(h)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(h)||/(msie) ([\w.]+)/.exec(h)||h.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(h)||[],c={chrome:10,webkit:6,msie:10,mozilla:4,opera:10},r[1]==="webkit"&&(l=/version\/([\d\.]+).*safari/.exec(h),l&&(r[2]=l[1])),(parseInt(r[2],10)||0)<c[r[1]]&&$("header").after("<div id='unsupported-browser'><p>"+langsrc.LOGIN.browser_not_support_1+"</p> <p>"+langsrc.LOGIN.browser_not_support_2+"<a href='https://www.google.com/intl/en/chrome/browser/' target='_blank'>Chrome</a>, <a href='http://www.mozilla.org/en-US/firefox/all/' target='_blank'>Firefox</a> or <a href='http://windows.microsoft.com/en-us/internet-explorer/download-ie' target='_blank'>IE</a>"+langsrc.LOGIN.browser_not_support_3+"</p></div>"),T({reset:function(t,n){var r;return u="RESET",r=n[0],r==="password"?s(n[1],function(t,r){var i;if(!t)return void 0,b("#password-template"),$("form.box-body").find("input").eq(0).focus(),$("#reset-form").on("submit",function(t){return t.preventDefault(),N()&&($("#reset-password").attr("disabled",!0).val(langsrc.RESET.reset_waiting),e(n,$("#reset-pw").val())),!1});i=i||langsrc.RESET["expired-info"],langsrc.RESET["expired-info"]=langsrc.SERVICE["RESET_PASSWORD_ERROR_"+t]||i,window.location.hash="expire"}):r==="expire"?(b("#expire-template"),$(".account-instruction a").attr("href","/login"+f())):r==="email"?(b("#email-template"),$("form.box-body").find("input").eq(0).focus()):r==="success"?(b("#success-template"),$(".account-instruction a").attr("href","/login"+f())):(b("#default-template"),$(".title-link").find("a").eq(0).attr("href","/register/"+f()),$(".title-link").find("a").eq(1).attr("href","/login/"+f()),$("#reset-pw-email").focus(),$("#reset-pw-email").keyup(function(){return this.value?$("#reset-btn").removeAttr("disabled"):$("#reset-btn").attr("disabled",!0)}),$("#reset-form").on("submit",function(){return $("#reset-pw-email").off("keyup"),$("#reset-btn").attr("disabled",!0),$("#reset-pw-email").attr("disabled",!0),$("#reset-btn").val(window.langsrc.RESET.reset_waiting),w($("#reset-pw-email").val()),!1}))},login:function(e,n){var r,s,o,l;return i()&&(window.location=a()),u="LOGIN",b("#login-template"),$(".account-btn-wrap a").attr("href","/reset/"+f()),$("#login-register").find("a").attr("href","/register/"+f()),s=$("#login-user"),r=$("#login-password"),l=$("#login-btn").attr("disabled",!1),$("#login-form input").eq(0).focus(),o=function(){if($(this).val().trim())return $(this).parent().removeClass("error")},s.on("keyup",o),r.on("keyup",o),$("#login-form").on("submit",function(e){return e.preventDefault(),s.val()&&r.val()?($(".error-msg").hide(),$(".control-group").removeClass("error"),l.attr("disabled",!0).val(langsrc.RESET.reset_waiting),t([s.val(),r.val(),{timezone:x}],function(e){return e===100?($("#error-msg-1").hide(),$("#error-msg-3").show().text(langsrc.SERVICE.ERROR_CODE_100_MESSAGE)):($("#error-msg-1").show(),$("#error-msg-3").hide()),l.attr("disabled",!1).val(langsrc.LOGIN["login-btn"])})):($("#error-msg-2").show(),s.val().trim()?s.parent().removeClass("error"):s.parent().addClass("error"),r.val().trim()?r.parent().removeClass("error"):r.parent().addClass("error"),!1)})},register:function(e,t){var r,s,l,c,h,p,d,v,m,g,y,w,E,S,T;return u="REGISTER",t[0]==="success"?(b("#success-template"),$("#register-get-start").click(function(){window.location=a()}),!1):(i()&&(window.location=a()),b("#register-template"),$(".title-link a").attr("href","/login/"+f()),l=$("#register-form"),l.find("input").eq(0).focus(),s=$("#register-firstname"),c=$("#register-lastname"),p=$("#register-username"),r=$("#register-email"),h=$("#register-password"),T=void 0,E=void 0,$("#register-btn").attr("disabled",!1),g=function(e,t){var n,r,i;return i=$("#fullname-verification-status"),n=s.val(),r=c.val(),n.trim()===""||r.trim()===""?(i.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.firstname_and_lastname_required),!1):(i.removeClass("verification-status").removeClass("error-status").text(""),!0)},w=function(e,t){var n,r;return r=p.val(),n=$("#username-verification-status"),r.trim()!==""?/[^A-Za-z0-9\_]{1}/.test(r)!==!0?r.length>40?(n.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.username_maxlength),t?t(0):!1):(n.hasClass("error-status")&&n.removeClass("verification-status").removeClass("error-status").text(""),t?v(r,n,t):!0):(n.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.username_not_matched),t?t(0):!1):(n.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.username_required),t?t(0):!1)},m=function(e,t,n){var i,s,o;return i=r.val(),o=$("#email-verification-status"),s=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i.trim()!==""?s.test(i)?(o.hasClass("error-status")&&o.removeClass("verification-status").removeClass("error-status").text(""),t?d(i,o,t):!0):(o.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.email_not_valid),t?t(0):!1):(o.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.email_required),t?t(0):!1)},y=function(e,t){var n,r;return n=h.val(),r=$("#password-verification-status"),n!==""?n.length>5?(r.removeClass("verification-status").removeClass("error-status").text(""),t?t(1):!0):(r.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.password_shorter),t?t(0):!1):(r.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.password_required),t?t():!1)},v=function(e,t,n){C!=null&&C.abort(),window.clearTimeout(T),T=window.setTimeout(function(){return o([e,null],function(e){return e?e==="error"?($(".error-msg").eq(0).text(langsrc.SERVICE.NETWORK_ERROR).show(),$("#register-btn").attr("disabled",!1).val(langsrc.REGISTER["register-btn"])):w()?(t.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.username_taken),typeof n=="function"?n(0):void 0):typeof n=="function"?n(0):void 0:w()?(t.removeClass("error-status").addClass("verification-status").show().text(langsrc.REGISTER.username_available),typeof n=="function"?n(1):void 0):!1})},500)},d=function(e,t,n){C!=null&&C.abort(),window.clearTimeout(E),E=window.setTimeout(function(){return o([null,e],function(e){return e?e==="error"?($(".error-msg").eq(0).text(langsrc.SERVICE.NETWORK_ERROR).show(),$("#register-btn").attr("disabled",!1).val(langsrc.REGISTER["register-btn"])):(t.removeClass("verification-status").addClass("error-status").text(langsrc.REGISTER.email_used),typeof n=="function"?n(0):void 0):m()?(t.removeClass("error-status").addClass("verification-status").show().text(langsrc.REGISTER.email_available),typeof n=="function"?n(1):void 0):!1})},500)},S=function(e){return e&&($(".verification-status").removeAttr("style"),$(".error-status").removeClass("error-status")),$("#register-btn").attr("disabled",!1).val(langsrc.REGISTER["register-btn"])},p.on("keyup blur change",function(e){return w(e,function(e){return e||S(),e})}),s.on("keyup blur change",function(){return g()}),c.on("keyup blur change",function(){return g()}),r.on("keyup blur change",function(e){return m(e,function(e){return e||S(),e})}),h.on("keyup blur change",function(e){return y(e,function(e){return e||S(),e})}),l.on("submit",function(e){var t,i,o,u;return e.preventDefault(),$(".error-msg").removeAttr("style"),p.next().hasClass("error-status")||r.next().hasClass("error-status")?!1:(i=g(),u=w(),t=m(),o=y(),u&&t&&o&&i?($("#register-btn").attr("disabled",!0).val(langsrc.REGISTER.reginster_waiting),w(e,function(t){return t?m(e,function(i){return i?y(e,function(e){if(!e)return S(),!1;if(t&&i&&e)return n([p.val(),h.val(),r.val(),{first_name:s.val(),last_name:c.val(),timezone:x}],function(e){return S(!0),$("#register-status").show().text(langsrc.SERVICE["ERROR_CODE_"+e+"_MESSAGE"]),!1})}):(S(),!1)}):(S(),!1)})):!1)}))}})},N=function(){var e,t;return e=$("#password-verification-status"),t=$("#reset-pw").val(),e.removeClass("error-status"),t!==""?t.length>5?(e.hide(),!0):(e.addClass("error-status").show().text(langsrc.RESET.reset_password_shorter),!1):(e.addClass("error-status").show().text(langsrc.RESET.reset_password_required),!1)},S=function(){return $("#reset-pw-email").attr("disabled",!1),$("#reset-btn").attr("disabled",!1).val(window.langsrc.RESET.reset_btn),$("#reset-status").removeClass("verification-status").addClass("error-msg").show().text(langsrc.RESET.reset_error_state),!1},h=function(e){return void 0},p=function(e){return l(),void 0},s=function(e,t){return r({url:"/account/",method:"check_validation",data:[e,"reset"],success:function(e,n){return void 0,t(n)},error:function(e){return p(e),!1}})},E=function(e){var t,n,r,i,s;i={domain:window.location.hostname.replace("ide","")},s=$.cookie();for(r in s)n=s[r],r!=="stack_store_id_local"&&r!=="stack_store_id"&&$.removeCookie(r,i);return t={expires:30,path:"/"},$.cookie("usercode",e.username,t),$.cookie("session_id",e.session_id,t),$.cookie("has_session",!!e.session_id,{domain:window.location.hostname.replace("ide",""),path:"/",expires:30})},n=function(e,t){return r({url:"/account/",method:"register",data:e,success:function(e,n){if(!!n)return t(n);E(e),window.location.hash="success"},error:function(e){return p(e)}})},t=function(e,t){return r({url:"/session/",method:"login",data:e,success:function(e,n){if(!!n)return t(n);E(e),window.location=a()},error:function(e){return p(e)}})},w=function(e){return o([e,null],function(t){return t?r({url:"/account/",method:"reset_password",data:[e],success:function(e,t){return t?(h(t),S(),!1):(window.location.hash="email",!0)},error:function(e){return p(e)}}):(S(),!1)})},o=function(e,t){return r({url:"/account/",method:"check_repeat",data:e,success:function(e,n){return t(n)},error:function(e){return t("error")}})},e=function(e,t){return r({url:"/account/",method:"update_password",data:[e[1],t],success:function(e,t){if(!!t)return h(t);window.location.hash="success"},error:function(e){return p(e)}})},g(v)}).call(this);