/* setTimeout(function() {
    console.log(parseInt($("#counter").html()))
    blackhole('#blackhole', parseInt($("#counter").html()), 220, 220, 135)

}, 2000)
 */

export function blackhole(element, count, gh, gw, maxOrbit) {
    $("#blackhole").html("")

    var h = gh,
        w = gw,
        cw = 2 * w,
        ch = 2 * h,
        maxorbit = maxOrbit / 1.2, // distance from center
        centery = ch / 2,
        centerx = cw / 2;
    var startTime = new Date().getTime();
    var currentTime = 0;

    var stars = [],
        collapse = false, // if hovered
        expanse = false; // if clicked

    var canvas = $('<canvas/>').attr({ width: cw, height: ch }).appendTo(element),
        context = canvas.get(0).getContext("2d");

    context.globalCompositeOperation = "multiply";

    function setDPI(canvas, dpi) {
        // Set up CSS size if it's not set up already
        if (!canvas.get(0).style.width)
            canvas.get(0).style.width = canvas.get(0).width + 'px';
        if (!canvas.get(0).style.height)
            canvas.get(0).style.height = canvas.get(0).height + 'px';

        var scaleFactor = dpi / 106;
        canvas.get(0).width = Math.ceil(canvas.get(0).width * scaleFactor);
        canvas.get(0).height = Math.ceil(canvas.get(0).height * scaleFactor);
        var ctx = canvas.get(0).getContext('2d');
        ctx.scale(scaleFactor, scaleFactor);
    }

    function rotate(cx, cy, x, y, angle) {
        var radians = angle,
            cos = Math.cos(radians),
            sin = Math.sin(radians),
            nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
            ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        return [nx, ny];
    }

    setDPI(canvas, 192);

    var star = function() {

        // Get a weighted random number, so that the majority of stars will form in the center of the orbit
        var rands = [];
        rands.push(Math.random() * (maxorbit / 2) + 1);
        rands.push(Math.random() * (maxorbit / 2) + maxorbit);

        this.orbital = (rands.reduce(function(p, c) {
            return p + c;
        }, 0) / rands.length);
        // Done getting that random number, it's stored in this.orbital

        this.x = centerx; // All of these stars are at the center x position at all times
        this.y = centery + this.orbital; // Set Y position starting at the center y + the position in the orbit

        this.yOrigin = centery + this.orbital; // this is used to track the particles origin

        this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180; // The rate at which this star will orbit
        this.rotation = 0; // current Rotation
        this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180; // Starting rotation.  If not random, all stars will be generated in a single line.  

        this.id = stars.length; // This will be used when expansion takes place.

        this.collapseBonus = this.orbital - (maxorbit * 0.7); // This "bonus" is used to randomly place some stars outside of the blackhole on hover
        if (this.collapseBonus < 0) { // if the collapse "bonus" is negative
            this.collapseBonus = 0; // set it to 0, this way no stars will go inside the blackhole
        }


        var red = getRndInteger(250, 255)
        var green = getRndInteger(250, 255)
        var blue = getRndInteger(250, 255)
        stars.push(this);
        this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        // Color the star white, but make it more transparent the further out it is generated

        this.hoverPos = centery + (maxorbit / 2) + this.collapseBonus; // Where the star will go on hover of the blackhole
        this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1); // Where the star will go when expansion takes place


        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;

        // The reason why I have yOrigin, hoverPos and expansePos is so that I don't have to do math on each animation frame.  Trying to reduce lag.
    }
    star.prototype.draw = function() {
        // the stars are not actually moving on the X axis in my code.  I'm simply rotating the canvas context for each star individually so that they all get rotated with the use of less complex math in each frame.



        if (!expanse) {
            this.rotation = this.startRotation + (currentTime * this.speed);
            if (!collapse) { // not hovered
                if (this.y > this.yOrigin) {
                    this.y -= 2.5;
                }
                if (this.y < this.yOrigin - 4) {
                    this.y += (this.yOrigin - this.y) / 10;
                }
            } else { // on hover
                this.trail = 1;
                if (this.y > this.hoverPos) {
                    this.y -= (this.hoverPos - this.y) / -5;
                }
                if (this.y < this.hoverPos - 4) {
                    this.y += 2.5;
                }
            }
        } else {
            this.rotation = this.startRotation + (currentTime * (this.speed / 2));
            if (this.y > this.expansePos) {
                this.y -= Math.floor(this.expansePos - this.y) / -140;
            }
        }

        context.save();
        context.strokeStyle = this.color;
        context.beginPath();
        var oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerx, centery);
        context.rotate(this.rotation);
        context.translate(-centerx, -centery);
        context.lineTo(this.x, this.y);
        context.lineWidth = 2;
        context.stroke();
        context.restore();


        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
    }




    window.requestFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    function loop() {
        var now = new Date().getTime();
        currentTime = (now - startTime) / 50;

        context.fillStyle = 'rgba(252, 92, 92,1)'; // somewhat clear the context, this way there will be trails behind the stars
        context.fillRect(0, 0, cw, ch);

        for (var i = 0; i < stars.length; i++) { // For each star
            if (stars[i] != stars) {
                stars[i].draw(); // Draw it
            }
        }

        requestFrame(loop);
    }

    function addCommonz() {
        for (var i = 0; i <
            10; i++) { // create 2500 stars
            new star();

        }


    }
    var addComBut = document.getElementById("add-commons");
    if (addComBut) {
        addComBut.addEventListener('click', addCommonz, false);

    }



    function updateStar(i) {
        if (i < 40) {
            new star()
        }

        setTimeout(function() {
            updateStar(i + 1);

        }, 2000);
    }

    function init(time) {
        context.fillStyle = 'rgba(251, 51, 51,0.93)'; // Initial clear of the canvas, to avoid an issue where it all gets too dark
        context.fillRect(0, 0, cw, ch);
        for (var i = 0; i < 0; i++) { // create 2500 stars
            new star();
        }




        loop();
    }
    setTimeout(updateStar(0), 1000);
    init();
}
export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}