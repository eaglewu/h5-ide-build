(function(){define(["backbone"],function(e){return e.View.extend({toggleWSStatus:function(e){if(e)return $(".disconnected-msg").remove();if($(".disconnected-msg").show().length>0)return;return $(MC.template.disconnectedMsg()).appendTo("body").on("mouseover",function(){$(".disconnected-msg").addClass("hovered"),$("body").on("mousemove.disconnectedmsg",function(e){var t,n,r,i;t=$(".disconnected-msg"),n=t.offset(),r=e.pageX,i=e.pageY;if(r<n.left||i<n.top||r>=n.left+t.outerWidth()||i>=n.top+t.outerHeight())$("body").off("mousemove.disconnectedmsg"),t.removeClass("hovered")})})}})})}).call(this);