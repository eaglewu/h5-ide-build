(function(){"SVGPathSeg"in window||(window.SVGPathSeg=function(e,t,n){this.pathSegType=e,this.pathSegTypeAsLetter=t,this._owningPathSegList=n},SVGPathSeg.PATHSEG_UNKNOWN=0,SVGPathSeg.PATHSEG_CLOSEPATH=1,SVGPathSeg.PATHSEG_MOVETO_ABS=2,SVGPathSeg.PATHSEG_MOVETO_REL=3,SVGPathSeg.PATHSEG_LINETO_ABS=4,SVGPathSeg.PATHSEG_LINETO_REL=5,SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,SVGPathSeg.PATHSEG_ARC_ABS=10,SVGPathSeg.PATHSEG_ARC_REL=11,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(e){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CLOSEPATH,"z",e)},SVGPathSegClosePath.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},SVGPathSegClosePath.prototype.clone=function(){return new SVGPathSegClosePath(undefined)},window.SVGPathSegMovetoAbs=function(e,t,n){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_MOVETO_ABS,"M",e),this._x=t,this._y=n},SVGPathSegMovetoAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegMovetoAbs.prototype.clone=function(){return new SVGPathSegMovetoAbs(undefined,this._x,this._y)},Object.defineProperty(SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(e,t,n){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_MOVETO_REL,"m",e),this._x=t,this._y=n},SVGPathSegMovetoRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegMovetoRel.prototype.clone=function(){return new SVGPathSegMovetoRel(undefined,this._x,this._y)},Object.defineProperty(SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(e,t,n){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_ABS,"L",e),this._x=t,this._y=n},SVGPathSegLinetoAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegLinetoAbs.prototype.clone=function(){return new SVGPathSegLinetoAbs(undefined,this._x,this._y)},Object.defineProperty(SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(e,t,n){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_REL,"l",e),this._x=t,this._y=n},SVGPathSegLinetoRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegLinetoRel.prototype.clone=function(){return new SVGPathSegLinetoRel(undefined,this._x,this._y)},Object.defineProperty(SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(e,t,n,r,i,s,o){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",e),this._x=t,this._y=n,this._x1=r,this._y1=i,this._x2=s,this._y2=o},SVGPathSegCurvetoCubicAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new SVGPathSegCurvetoCubicAbs(undefined,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(e){this._x1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(e){this._y1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(e){this._x2=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(e){this._y2=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(e,t,n,r,i,s,o){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",e),this._x=t,this._y=n,this._x1=r,this._y1=i,this._x2=s,this._y2=o},SVGPathSegCurvetoCubicRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new SVGPathSegCurvetoCubicRel(undefined,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(e){this._x1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(e){this._y1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(e){this._x2=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(e){this._y2=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(e,t,n,r,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",e),this._x=t,this._y=n,this._x1=r,this._y1=i},SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticAbs(undefined,this._x,this._y,this._x1,this._y1)},Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(e){this._x1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(e){this._y1=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(e,t,n,r,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",e),this._x=t,this._y=n,this._x1=r,this._y1=i},SVGPathSegCurvetoQuadraticRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticRel(undefined,this._x,this._y,this._x1,this._y1)},Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(e){this._x1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(e){this._y1=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(e,t,n,r,i,s,o,u){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_ARC_ABS,"A",e),this._x=t,this._y=n,this._r1=r,this._r2=i,this._angle=s,this._largeArcFlag=o,this._sweepFlag=u},SVGPathSegArcAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},SVGPathSegArcAbs.prototype.clone=function(){return new SVGPathSegArcAbs(undefined,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(e){this._r1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(e){this._r2=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(e){this._largeArcFlag=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(e){this._sweepFlag=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(e,t,n,r,i,s,o,u){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_ARC_REL,"a",e),this._x=t,this._y=n,this._r1=r,this._r2=i,this._angle=s,this._largeArcFlag=o,this._sweepFlag=u},SVGPathSegArcRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},SVGPathSegArcRel.prototype.clone=function(){return new SVGPathSegArcRel(undefined,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(e){this._r1=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(e){this._r2=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(e){this._largeArcFlag=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(e){this._sweepFlag=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(e,t){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",e),this._x=t},SVGPathSegLinetoHorizontalAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new SVGPathSegLinetoHorizontalAbs(undefined,this._x)},Object.defineProperty(SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(e,t){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",e),this._x=t},SVGPathSegLinetoHorizontalRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new SVGPathSegLinetoHorizontalRel(undefined,this._x)},Object.defineProperty(SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(e,t){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",e),this._y=t},SVGPathSegLinetoVerticalAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new SVGPathSegLinetoVerticalAbs(undefined,this._y)},Object.defineProperty(SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(e,t){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",e),this._y=t},SVGPathSegLinetoVerticalRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new SVGPathSegLinetoVerticalRel(undefined,this._y)},Object.defineProperty(SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(e,t,n,r,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",e),this._x=t,this._y=n,this._x2=r,this._y2=i},SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new SVGPathSegCurvetoCubicSmoothAbs(undefined,this._x,this._y,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(e){this._x2=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(e){this._y2=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(e,t,n,r,i){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",e),this._x=t,this._y=n,this._x2=r,this._y2=i},SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new SVGPathSegCurvetoCubicSmoothRel(undefined,this._x,this._y,this._x2,this._y2)},Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(e){this._x2=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(e){this._y2=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(e,t,n){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",e),this._x=t,this._y=n},SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined,this._x,this._y)},Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(e,t,n){SVGPathSeg.call(this,SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",e),this._x=t,this._y=n},SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(SVGPathSeg.prototype),SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new SVGPathSegCurvetoQuadraticSmoothRel(undefined,this._x,this._y)},Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._segmentChanged()},enumerable:!0}),Object.defineProperty(SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._segmentChanged()},enumerable:!0}),SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new SVGPathSegClosePath(undefined)},SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(e,t){return new SVGPathSegMovetoAbs(undefined,e,t)},SVGPathElement.prototype.createSVGPathSegMovetoRel=function(e,t){return new SVGPathSegMovetoRel(undefined,e,t)},SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(e,t){return new SVGPathSegLinetoAbs(undefined,e,t)},SVGPathElement.prototype.createSVGPathSegLinetoRel=function(e,t){return new SVGPathSegLinetoRel(undefined,e,t)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(e,t,n,r,i,s){return new SVGPathSegCurvetoCubicAbs(undefined,e,t,n,r,i,s)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(e,t,n,r,i,s){return new SVGPathSegCurvetoCubicRel(undefined,e,t,n,r,i,s)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(e,t,n,r){return new SVGPathSegCurvetoQuadraticAbs(undefined,e,t,n,r)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(e,t,n,r){return new SVGPathSegCurvetoQuadraticRel(undefined,e,t,n,r)},SVGPathElement.prototype.createSVGPathSegArcAbs=function(e,t,n,r,i,s,o){return new SVGPathSegArcAbs(undefined,e,t,n,r,i,s,o)},SVGPathElement.prototype.createSVGPathSegArcRel=function(e,t,n,r,i,s,o){return new SVGPathSegArcRel(undefined,e,t,n,r,i,s,o)},SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(e){return new SVGPathSegLinetoHorizontalAbs(undefined,e)},SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(e){return new SVGPathSegLinetoHorizontalRel(undefined,e)},SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(e){return new SVGPathSegLinetoVerticalAbs(undefined,e)},SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(e){return new SVGPathSegLinetoVerticalRel(undefined,e)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(e,t,n,r){return new SVGPathSegCurvetoCubicSmoothAbs(undefined,e,t,n,r)},SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(e,t,n,r){return new SVGPathSegCurvetoCubicSmoothRel(undefined,e,t,n,r)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(e,t){return new SVGPathSegCurvetoQuadraticSmoothAbs(undefined,e,t)},SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(e,t){return new SVGPathSegCurvetoQuadraticSmoothRel(undefined,e,t)}),"SVGPathSegList"in window||(window.SVGPathSegList=function(e){this._pathElement=e,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},Object.defineProperty(SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},SVGPathSegList.prototype._updateListFromPathMutations=function(e){if(!this._pathElement)return;var t=!1;e.forEach(function(e){e.attributeName=="d"&&(t=!0)}),t&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))},SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},SVGPathSegList.prototype.segmentChanged=function(e){this._writeListToPath()},SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(e){e._owningPathSegList=null}),this._list=[],this._writeListToPath()},SVGPathSegList.prototype.initialize=function(e){return this._checkPathSynchronizedToList(),this._list=[e],e._owningPathSegList=this,this._writeListToPath(),e},SVGPathSegList.prototype._checkValidIndex=function(e){if(isNaN(e)||e<0||e>=this.numberOfItems)throw"INDEX_SIZE_ERR"},SVGPathSegList.prototype.getItem=function(e){return this._checkPathSynchronizedToList(),this._checkValidIndex(e),this._list[e]},SVGPathSegList.prototype.insertItemBefore=function(e,t){return this._checkPathSynchronizedToList(),t>this.numberOfItems&&(t=this.numberOfItems),e._owningPathSegList&&(e=e.clone()),this._list.splice(t,0,e),e._owningPathSegList=this,this._writeListToPath(),e},SVGPathSegList.prototype.replaceItem=function(e,t){return this._checkPathSynchronizedToList(),e._owningPathSegList&&(e=e.clone()),this._checkValidIndex(t),this._list[t]=e,e._owningPathSegList=this,this._writeListToPath(),e},SVGPathSegList.prototype.removeItem=function(e){this._checkPathSynchronizedToList(),this._checkValidIndex(e);var t=this._list[e];return this._list.splice(e,1),this._writeListToPath(),t},SVGPathSegList.prototype.appendItem=function(e){return this._checkPathSynchronizedToList(),e._owningPathSegList&&(e=e.clone()),this._list.push(e),e._owningPathSegList=this,this._writeListToPath(),e},SVGPathSegList._pathSegArrayAsString=function(e){var t="",n=!0;return e.forEach(function(e){n?(n=!1,t+=e._asPathString()):t+=" "+e._asPathString()}),t},SVGPathSegList.prototype._parsePath=function(e){if(!e||e.length==0)return[];var t=this,n=function(){this.pathSegList=[]};n.prototype.appendSegment=function(e){this.pathSegList.push(e)};var r=function(e){this._string=e,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};r.prototype._isCurrentSpace=function(){var e=this._string[this._currentIndex];return e<=" "&&(e==" "||e=="\n"||e=="	"||e=="\r"||e=="\f")},r.prototype._skipOptionalSpaces=function(){while(this._currentIndex<this._endIndex&&this._isCurrentSpace())this._currentIndex++;return this._currentIndex<this._endIndex},r.prototype._skipOptionalSpacesOrDelimiter=function(){return this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&this._string.charAt(this._currentIndex)!=","?!1:(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)==","&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},r.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},r.prototype.peekSegmentType=function(){var e=this._string[this._currentIndex];return this._pathSegTypeFromChar(e)},r.prototype._pathSegTypeFromChar=function(e){switch(e){case"Z":case"z":return SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return SVGPathSeg.PATHSEG_LINETO_REL;case"C":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return SVGPathSeg.PATHSEG_ARC_ABS;case"a":return SVGPathSeg.PATHSEG_ARC_REL;case"H":return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return SVGPathSeg.PATHSEG_UNKNOWN}},r.prototype._nextCommandHelper=function(e,t){return(e=="+"||e=="-"||e=="."||e>="0"&&e<="9")&&t!=SVGPathSeg.PATHSEG_CLOSEPATH?t==SVGPathSeg.PATHSEG_MOVETO_ABS?SVGPathSeg.PATHSEG_LINETO_ABS:t==SVGPathSeg.PATHSEG_MOVETO_REL?SVGPathSeg.PATHSEG_LINETO_REL:t:SVGPathSeg.PATHSEG_UNKNOWN},r.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var e=this.peekSegmentType();return e==SVGPathSeg.PATHSEG_MOVETO_ABS||e==SVGPathSeg.PATHSEG_MOVETO_REL},r.prototype._parseNumber=function(){var e=0,t=0,n=1,r=0,i=1,s=1,o=this._currentIndex;this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="+"?this._currentIndex++:this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="-"&&(this._currentIndex++,i=-1);if(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&this._string.charAt(this._currentIndex)!=".")return undefined;var u=this._currentIndex;while(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9")this._currentIndex++;if(this._currentIndex!=u){var a=this._currentIndex-1,f=1;while(a>=u)t+=f*(this._string.charAt(a--)-"0"),f*=10}if(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)=="."){this._currentIndex++;if(this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return undefined;while(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9")r+=(this._string.charAt(this._currentIndex++)-"0")*(n*=.1)}if(this._currentIndex!=o&&this._currentIndex+1<this._endIndex&&(this._string.charAt(this._currentIndex)=="e"||this._string.charAt(this._currentIndex)=="E")&&this._string.charAt(this._currentIndex+1)!="x"&&this._string.charAt(this._currentIndex+1)!="m"){this._currentIndex++,this._string.charAt(this._currentIndex)=="+"?this._currentIndex++:this._string.charAt(this._currentIndex)=="-"&&(this._currentIndex++,s=-1);if(this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return undefined;while(this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9")e*=10,e+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var l=t+r;return l*=i,e&&(l*=Math.pow(10,s*e)),o==this._currentIndex?undefined:(this._skipOptionalSpacesOrDelimiter(),l)},r.prototype._parseArcFlag=function(){if(this._currentIndex>=this._endIndex)return undefined;var e=!1,t=this._string.charAt(this._currentIndex++);if(t=="0")e=!1;else{if(t!="1")return undefined;e=!0}return this._skipOptionalSpacesOrDelimiter(),e},r.prototype.parseSegment=function(){var e=this._string[this._currentIndex],n=this._pathSegTypeFromChar(e);if(n==SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==SVGPathSeg.PATHSEG_UNKNOWN)return null;n=this._nextCommandHelper(e,this._previousCommand);if(n==SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;this._previousCommand=n;switch(n){case SVGPathSeg.PATHSEG_MOVETO_REL:return new SVGPathSegMovetoRel(t,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_MOVETO_ABS:return new SVGPathSegMovetoAbs(t,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_REL:return new SVGPathSegLinetoRel(t,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_ABS:return new SVGPathSegLinetoAbs(t,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new SVGPathSegLinetoHorizontalRel(t,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new SVGPathSegLinetoHorizontalAbs(t,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new SVGPathSegLinetoVerticalRel(t,this._parseNumber());case SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new SVGPathSegLinetoVerticalAbs(t,this._parseNumber());case SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new SVGPathSegClosePath(t);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var r={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicRel(t,r.x,r.y,r.x1,r.y1,r.x2,r.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:var r={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicAbs(t,r.x,r.y,r.x1,r.y1,r.x2,r.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:var r={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicSmoothRel(t,r.x,r.y,r.x2,r.y2);case SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:var r={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoCubicSmoothAbs(t,r.x,r.y,r.x2,r.y2);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:var r={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoQuadraticRel(t,r.x,r.y,r.x1,r.y1);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:var r={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegCurvetoQuadraticAbs(t,r.x,r.y,r.x1,r.y1);case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new SVGPathSegCurvetoQuadraticSmoothRel(t,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new SVGPathSegCurvetoQuadraticSmoothAbs(t,this._parseNumber(),this._parseNumber());case SVGPathSeg.PATHSEG_ARC_REL:var r={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegArcRel(t,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep);case SVGPathSeg.PATHSEG_ARC_ABS:var r={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new SVGPathSegArcAbs(t,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep);default:throw"Unknown path seg type."}};var i=new n,s=new r(e);if(!s.initialCommandIsMoveTo())return[];while(s.hasMoreData()){var o=s.parseSegment();if(!o)return[];i.appendSegment(o)}return i.pathSegList})})();