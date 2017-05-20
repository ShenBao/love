/**
 * slider.js
 * a simple and strong js plugin for all platform!
 *
 * @author 尹 qq:619351349
 * @time 2016-04-12 11:00
 *
 * @param {object}
 * direction : horizontal(default) and vertical : string
 * index : 0(default) : number
 * autoplay : false(default) : bool
 * interval : 1000ms(default) : number
 * speed : 500ms(default) : number
 * easing : linear(default) : string, support all easing same as jquery.easing.js
 * end : function, when view switch compeleted it's called
 * start : function, when start of view switch it's called
 * prevBtn : element(support dom obj, jquery obj and jquery selector), bind dom element to switch forward(left or up)
 * nextBtn : element(support dom obj, jquery obj and jquery selector), bind dom element to switch next(right or down)
 * key : false(default) : bool, support keyboard to switch
 * touch: false : bool, support touch to switch on phone device
 *
 * After initialized "slider" object, "slider" has some properties and method
 *
 * properties:
 * index : number
 *
 * method:
 * prev() : switch to prevent view
 * next() : switch to next view
 * to() : switch to view you want
 * autoPlay() : auto switch
 * stopPlay() : close auto switch
 */
jQuery = jQuery || $ || window.jQuery || window.$;
if (typeof jQuery == "undefined") throw "the jquery is undefined!";
else {
    jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
    (function($){

        function Slider(ele, settings){
            this._$e = ele;
            this.index = settings.index;
            this._d = settings.direction == "horizontal" ? 1 : 0;
            this._a = settings.autoplay;
            this._i = settings.interval;
            this._s = settings.speed;
            this._e = settings.easing;
            this._start = settings.start;
            this._end = settings.end;
            this._prevBtn = settings.prevBtn;
            this._nextBtn = settings.nextBtn;
            this._key = settings.key;
            this._touch = settings.touch;
            this._animate = false;
            this._();
        }

        Slider.prototype = {
            _:function(){
                var $e = this._$e,
                    $ul = $e.find("ul"),
                    $li = $e.find("li");

                if (1!=$ul.length) {
                    throw "the ul element only be one!";
                    return;
                }

                this.number = $li.length;
                if (0>=this.number) {
                    throw "the li element has not been null!";
                    return;
                }

                $ul.css({position:"absolute", width:"100%", height:"100%", "list-style-type":"none", padding:0, margin:0, overflow:"hidden"});

                if (this._d) { this._1 = "top"; this._2 = "left"; }
                else { this._1 = "left"; this._2 = "top"; }

                var _ = '{position:"absolute", overflow:"hidden", width:"100%", height:"100%", '+this._1+ ':"0%"}';
                _ = eval("("+_+")");
                $li.css(_);

                _ = '{'+this._2+':"0%"}';
                $li.eq(this.index).css(eval("("+_+")"));

                var _2 = this._2;
                var len = $e.find("li:lt("+this.index+")").length;
                $e.find("li:lt("+this.index+")").each(function(){
                    _ = '{'+_2+':"'+ (-100*len--) +'%"}';
                    $(this).css(eval("("+_+")"));
                })

                len = 1;
                $e.find("li:gt("+this.index+")").each(function(){
                    _ = '{'+_2+':"'+ (100*len++) +'%"}';
                    $(this).css(eval("("+_+")"));
                })

                if (this._a) this.autoplay();
                this._bind();

            },
            _bind:function(){
                var that = this;
                if (typeof this._prevBtn != "undefined") {
                    if (typeof this._prevBtn == "string") {
                        var $prevBtn = $(this._prevBtn);
                        if ($prevBtn) {$prevBtn.bind("click", function(){ that.prev(); });}
                    } else {
                        if (typeof this._prevBtn[0] != "undefined") {
                            this._prevBtn.bind("click", function(){ that.prev(); })
                        } else {this._prevBtn.onclick = function(){ that.prev(); }}
                    }
                }

                if (typeof this._nextBtn != "undefined") {
                    if (typeof this._nextBtn == "string") {
                        var $nextBtn = $(this._nextBtn);
                        if ($nextBtn) {$nextBtn.bind("click", function(){ that.next(); });}
                    } else {
                        if (typeof this._nextBtn[0] != "undefined") {
                            this._nextBtn.bind("click", function(){ that.next(); })
                        } else {this._nextBtn.onclick = function(){ that.next(); }}
                    }
                }

                if (that._key) {
                    $(document).bind("keydown", function(e){
                        var c = e.keyCode;
                        if (that._d && ((38==c) || (40==c))) {return;}
                        if (!that._d && ((37==c) || (39==c))) {return;}
                        switch (c) {
                            case 37:case 38: that.prev(); break;
                            case 39:case 40: that.next();
                        }
                    })
                }

                if (that._touch) {
                    var sx, ex, sy, ey, b1=false, b2=false, ts;
                    $(document).bind("touchstart", function(e){
                        e.preventDefault();
                        ts = e.originalEvent.touches[0];
                        sx = ts.pageX;
                        sy = ts.pageY;
                        b1 = true;
                    }).bind("touchmove", function(e){
                        e.preventDefault();
                        ts = e.originalEvent.touches[0];
                        ex = ts.pageX;
                        ey = ts.pageY;
                        b2 = true;
                    }).bind("touchend", function(){
                        var d, dx = ex - sx, dy = ey - sy, a = Math.abs;
                        that._d ? a(dx) > a(dy) ? d = dx : 0 : 0;
                        !that._d ? a(dy) > a(dx) ? d = dy : 0 : 0;
                        if ((Math.abs(d)>100) && b1 && b2) {
                            if (d<0) that.next();
                            else that.prev();
                        }
                        b1 = b2 = false;
                    })
                }
            },
            to:function(index){
                if (this._animate) return; this._animate = true;
                if (index >= this.number) index = this.number-1;
                if (0 > index ) index = 0;
                this.index = index;

                var $e = this._$e, s = this._s, e = this._e, _2 = this._2;
                var _ = '{'+_2+':'+'"0%"}';

                var that = this;
                if (typeof that._start == "function") { that._start(); }
                $e.find("li").eq(index).animate(eval("("+_+")"), s, e, function(){
                    that._animate = false;
                    if (typeof that._end == "function") { that._end(); }
                });

                var len = $e.find("li:lt("+index+")").length;
                $e.find("li:lt("+index+")").each(function(){
                    _ = '{'+_2+':"'+ (-100*len--) +'%"}';
                    $(this).animate(eval("("+_+")"), s, e);
                })

                len = 1;
                $e.find("li:gt("+index+")").each(function(){
                    _ = '{'+_2+':"'+ (100*len++) +'%"}';
                    $(this).animate(eval("("+_+")"), s, e);
                })
            },
            prev:function(){
                if (this._animate) return;
                var that = this, _, _1;
                if (this.index-1 < 0) {
                    this._d ? (_="left",_1="{"+_+ ":'100%'}"):(_="top",_1="{"+ _+":'100%'}");
                    var $e = this._$e;
                    $e.find("li").each(function(i){
                        $(this).css(_, -(that.number-i)*100+"%");
                    })
                    this.index = this.number;
                    $e.find("li").eq(0).clone()
                        .appendTo($e.find("ul")).css(_, "0%")
                        .animate(eval("("+_1+")"),this._s,this._e,function(){
                            $(this).remove();});
                    this.to(--this.index);
                    return;
                }
                this.to(--this.index);
            },
            next:function(){
                if (this._animate) return;
                var that = this, _, _1;
                if (this.index+1 >= this.number) {
                    this._d ? (_="left",_1="{"+_+":'-100%'}"):(_="top",_1="{"+_+":'-100%'}");
                    var $e = this._$e;
                    $e.find("li").each(function(i){
                        $(this).css(_, i*100+100+"%");
                    })
                    this.index = -1;
                    $e.find("li").eq(this.number-1).clone()
                        .appendTo($e.find("ul")).css(_, "0%")
                        .animate(eval("("+_1+")"),this._s,this._e,function(){
                            $(this).remove();});
                    this.to(++this.index);
                    return;
                }
                this.to(++this.index);
            },
            autoplay:function(){
                var that = this;
                this._timerId = setInterval(function(){
                    that.next();
                }, that._i);
            },
            stopPlay:function(){
                if (this._timerId) { clearInterval(this._timerId); }
            }
        }

        $.fn.slider = function(options){
            var defaults = {
                index:0,
                direction:"horizontal",
                autoplay:false,
                interval:1000,
                speed:500,
                easing:"linear",
                key:false,
                touch:false
            }
            var settings = $.extend({}, defaults, options);
            return new Slider(this, settings);
        }
    })(jQuery)
}
