window.FileVersions={"api/ApiRequest.js":"e5a508f7","component/exporter/Exporter.js":"7b4a47ad","component/jsonviewer/JsonDiffLib.js":"6a66427a","component/jsonviewer/JsonViewer.js":"1679fcd9","component/jsonviewer/diff.js":"c48f397c","component/jsonviewer/jqUi.js":"61d7e808","component/jsonviewer/view.js":"3d847baf","component/sgrule/SGRulePopup.js":"517a3d93","component/sharedrescomp.js":"9d0b9e00","component/stateeditor/stateeditor.js":"a0efd8f1","component/statestatus/main.js":"477ae84f","component/trustedadvisor/validation.js":"31c31a57","ide/AppBundle.js":"0b180e06","ide/Application.js":"0d577af7","ide/cloudres/CrBundle.js":"cd5ba000","ide/config.js":"63828014","ide/subviews/DebugTool.js":"d25f3559","lib/aws.js":"4e837b03","lib/lib.js":"5e50f132","nls/en-us/lang.js":"2a1fb0fd","nls/lang.js":"3093b83a","nls/zh-cn/lang.js":"5f21f307","service/service.js":"56f473e0","service/stack_model.js":"6c6a0ea2","ui/ui.js":"a5e645f5","user/main.js":"7a0aa399","vender/crypto-js/hmac-sha256.js":"c822cfb1","vender/handlebars/handlebars.js":"bec7085c","vender/jquery/jquery.1.0.js":"a202c669","vender/jquery/jquery.cookie.min.js":"35af54d1","vender/jsondiffpatch/bundle.js":"0ca30c27","vender/qunit/qunit.js":"302545f4","vender/requirejs/require.js":"374b3c99","vender/requirejs/requirelib.js":"35453d3b","vender/select2/select2.js":"a53745e4","vender/select2/select2.min.js":"f396992f","vender/select2/select2_locale_zh-CN.js":"6add3c52","vender/vender.js":"cc4b87bc","workspaces/Dashboard.js":"26efe72a","workspaces/OpsEditor.js":"6a6384f5","workspaces/editor/PropertyPanel.js":"8318da33","workspaces/editor/framework/DesignBundle.js":"9b9c797e","workspaces/editor/framework/connection/LcAsso.js":"22fa52d0","workspaces/editor/framework/util/DesignDebugger.js":"d6f7a9c1","workspaces/editor/property/acl/template/app.js":"1038cfbe","workspaces/editor/property/sgrule/template/app.js":"a7a2ae7d"};
(function() {
  (function() {
    var getCookie, ideHttps, l, s, scripts, shouldIdeHttps, version, _i, _len;
    if (!window) {
      return;
    }
    window.MC_DOMAIN = "visualops.io";
    window.MC_PROTO = "http";
    shouldIdeHttps = false;
    ideHttps = true;

    /* env:debug */
    window.MC_DOMAIN = "mc3.io";
    ideHttps = false;

    /* env:debug:end */

    /* env:dev                                                            env:dev:end */

    /* AHACKFORRELEASINGPUBLICVERSION */
    shouldIdeHttps = ideHttps;
    window.MC_PROTO = "https";

    /* AHACKFORRELEASINGPUBLICVERSION */
    l = window.location;
    window.language = window.version = "";
    if (shouldIdeHttps && l.protocol === "http:") {
      window.location = l.href.replace("http:", "https:");
      return;
    }
    getCookie = function(sKey) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    };
    if (!(getCookie('usercode') && getCookie('session_id'))) {
      window.location.href = "/login/";
      return;
    }
    scripts = document.getElementsByTagName("script");
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      s = scripts[_i];
      version = s.getAttribute("data-main");
      if (version) {
        window.version = version.split("?")[1];
        break;
      }
    }
    if (window.version === '#{version}') {
      window.version = "dev";
    }
    window.language = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + "lang\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || "en-us";
    return null;
  })();

  require.config({
    baseUrl: './',
    waitSeconds: 30,
    locale: language,
    urlArgs: "v=" + version,

    /* env:dev                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             env:dev:end */
    shim: {
      'canvon': {
        deps: ['jquery'],
        exports: 'Canvon'
      },
      'underscore': {
        exports: '_'
      },
      'handlebars': {
        exports: 'Handlebars'
      },
      'Meteor': {
        deps: ['underscore'],
        exports: 'Meteor'
      }
    },

    /* env:prod */
    bundles: {
      "vender/requirejs/requirelib": ["i18n"],
      "vender/vender": ["jquery", "backbone", "underscore", "handlebars", "sprintf", "Meteor", "canvon", "crypto", "q"],
      "lib/lib": ["MC", "constant", "MC.canvas", "MC.canvas.constant", 'MC.validate', "lib/handlebarhelpers", "event"],
      "ui/ui": ['UI.tooltip', 'UI.scrollbar', 'UI.bubble', 'UI.modal', 'UI.table', 'UI.tablist', 'UI.selectbox', 'UI.searchbar', 'UI.filter', 'UI.radiobuttons', 'UI.notification', 'UI.multiinputbox', 'UI.canvg', 'UI.sortable', 'UI.parsley', 'UI.errortip', 'UI.tour', "jqpagination", 'jquerysort', "UI.modalplus"],
      "ApiRequest": [],
      "service/service": ['base_model', 'state_model', 'keypair_model', 'instance_model', 'result_vo', 'stack_service', 'state_service', 'ami_service', 'ebs_service', 'instance_service', 'keypair_service', 'customergateway_service'],
      "component/exporter/Exporter": ["ThumbnailUtil", "JsonExporter"],
      "component/sgrule/SGRulePopup": [],
      "validation": ["component/trustedadvisor/main"],
      "state_status": [],
      "component/stateeditor/stateeditor": [],
      "component/sharedrescomp": ['kp_dropdown', 'kp_manage', 'kp_upload', 'sns_dropdown', 'sns_manage', 'combo_dropdown', 'toolbar_modal', 'dhcp', 'snapshotManager', 'sslcert_manage', 'sslcert_dropdown'],
      "ide/cloudres/CrBundle": ["CloudResources"],
      "ide/Application": ["Workspace", "OpsModel"],
      "workspaces/Dashboard": [],
      "workspaces/editor/PropertyPanel": ["workspaces/editor/subviews/PropertyPanel"],
      "workspaces/editor/framework/DesignBundle": ["Design", "CanvasManager"],
      "workspaces/OpsEditor": []
    },
    bundleExcludes: {
      "component/sgrule/SGRulePopup": ["Design"],
      "component/stateeditor/stateeditor": ["Design"],
      "component/sharedrescomp": ["Design"],
      "validation": ["Design"],
      "workspaces/editor/PropertyPanel": ["Design"],
      "workspaces/editor/framework/DesignBundle": ["Design", "CanvasManager"],
      "workspaces/editor/subviews/PropertyPanel": ["component/sgrule/SGRulePopup"]
    }

    /* env:prod:end */
  });

  requirejs.onError = function(err) {
    var i, _i, _len, _ref;
    err = err || {
      requireType: "timeout"
    };
    if (err.requireType === "timeout") {
      _ref = err.requireModules || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        requirejs.undef(i);
      }
      return require(err.requireModules || [], function() {});
    } else {
      return console.error("[RequireJS Error]", err, err.stack);
    }
  };

  require(['ide/Application', "ide/cloudres/CrBundle", "workspaces/Dashboard", "workspaces/OpsEditor", "MC", 'lib/aws'], function(Application, CrBundle, Dashboard, OpsEditor) {
    window.OpsEditor = OpsEditor;
    return (new Application()).initialize().then(function() {
      new Dashboard();
    });
  }, function(err) {
    err = err || {
      requireType: "timeout"
    };
    if (err.requireType === "timeout") {
      requirejs.onError = function() {};
      console.error("[RequireJS timeout] Reloading, error modules :", err.requireModules);
      window.location.reload();
    } else {
      console.error("[RequireJS Error]", err, err.stack);
    }
  });

}).call(this);
