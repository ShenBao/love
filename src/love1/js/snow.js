/*
 *particle animation by YasinYin QQ:619351349
 */

var Snow = function(canvas, img, width, number){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.number = number;
    this.particles = [];
    for (var n=0; n<number; n++) {
        var w = Snow.rand(width[0], width[1])
        this.particles.push(new Particle(canvas, img, w));
    }
}

Snow.prototype.start = function(){
    var particles = this.particles, c = this.canvas, ctx = this.ctx, n = this.number;

    this.timerId = setInterval(function(){
        ctx.clearRect(0, 0, c.width, c.height);

        for (var i=0; i<n; i++) {
            particles[i].update();
        }

    }, 1000/60);
}

Snow.rand = function (min, max){
    var range = max - min;
    var rand = Math.random();
    var num = min + Math.round(rand*range);
    return num;
}

Snow.prototype.stop = function(){
    clearInterval(this.timerId);
    var c = this.canvas;
    this.ctx.clearRect(0, 0, c.width, c.height);
}

var Particle = function(canvas, img, w){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.img = img
    this.w = w;
    var r = Math.random;
    this.t = 0;
    this.vx = r()*.05 + .01;
    this.vy = r()*1.2 + 2;
    this.a = 50;

    this.point = {x:r()*canvas.width, y:r()*canvas.height};

    // this.drawToCanvas();
}

Particle.prototype.drawToCanvas = function(){
    // var img = this.img, w = this.w, point = this.point;
    // var c = this.canvas, ctx = c.getContext("2d");
    // ctx.drawImage(img, point.x, point.y, w, w);
    // this.ctx = ctx;
}

Particle.prototype.update = function(){
    var p = this.point, c = this.canvas, ctx = this.ctx, w = this.w;
    if (p.y >= c.height) this._reset();
    else {
        var x = this.a*Math.sin(this.t+=this.vx) + p.x;
        ctx.drawImage(this.img, x, p.y+=this.vy, w, w);
    }
}

Particle.prototype._reset = function(){
    var p = this.point, r = Math.random, c = this.canvas;
    p.x = r()*c.width, p.y = -this.w;
}

