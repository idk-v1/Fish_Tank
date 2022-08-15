var fCount = 10;
var bCount = 10;
var tLight = 10;
var fSpeed = 10;
var bSpeed = 10;
var fSize = 100;
var lScape = 1;
var maxR = 255;
var minR = 0;
var maxG = 255;
var minG = 0;
var maxB = 255;
var minB = 0;

var School = new Array();
var Bubbles = new Array();

var settings = false;

for (var u = 0; u < 1000; u++) {
    update();
}

var dlt = 0;
var lst = performance.now();
var int = setInterval(tick, 0);

function tick() {
    var now = performance.now();
    dlt += now - lst;
    lst = now;
    while (dlt >= 1000 / 60) {
        dlt -= 1000 / 60;
        if (dlt > 10000) dlt = 0;
        update();
    }
    render();
}

function FishClick(e) {
    School[e.currentTarget.id].s = 10;
}

function render() {
    for (var f = 0; f < School.length; f++) {
        School[f].e.style.left = (window.innerWidth / 2 + School[f].d * window.innerWidth / 1.5 - School[f].x - 100) + "px";
        School[f].e.style.top = (School[f].y - 7.5) + "%";
    }
    document.querySelector("body").style.backgroundImage = "linear-gradient(rgb(" + (154 * tLight / 10) + "," + (188 * tLight / 10) + "," + (222 * tLight / 10) + "), rgb(" + (18 * tLight / 10) + "," + (52 * tLight / 10) + "," + (86 * tLight / 10) + "))";
}

function update() {

    if (School.length < fCount) School.push(new Fish());
    if (Bubbles.length > fCount) Bubbles.pop();
    if (Bubbles.length < fCount) Bubbles.push(new Bubble());

    for (var f = 0; f < School.length; f++) {

        School[f].x += School[f].s * School[f].d * fSpeed / 10;

        if ((School[f].d == 1 && School[f].x >= window.innerWidth * 1.5) || 
        (School[f].d == -1 && School[f].x <= -window.innerWidth * 1.5)) {
            School[f].e.remove(); 
            if (School.length > fCount) {
                School.splice(f, 1);
            } else {
                School[f] = new Fish();
                School[f].e.appendChild(School[f].efm); School[f].e.appendChild(School[f].efb); 
                School[f].e.appendChild(School[f].eft); School[f].e.appendChild(School[f].ee); School[f].e.appendChild(School[f].t);
                document.querySelector("body").appendChild(School[f].e);
                if (School[f].d != 1) School[f].e.style.transform = "scaleX(-1)";
                School[f].efm.classList.add("fin-mid"); School[f].ee.classList.add("eye"); School[f].e.classList.add("body");
                School[f].efb.style = "position: absolute; left: 74%; top: 13%; width: 50px; height: 25px; border-top: 25px solid transparent; border-right: 38px solid rgb(" + School[f].r / 2 + "," + School[f].g / 2 + "," + School[f].b / 2 + "); border-bottom: 25px solid transparent;";
                School[f].eft.style = "position: absolute; left: 38%; top: -24%; width: 50px; height: 25px; background: rgb(" + School[f].r / 2 + "," + School[f].g / 2 + "," + School[f].b / 2 + "); transform: skew(-20deg);";
                School[f].e.style.backgroundColor = "rgb(" + School[f].r + "," + School[f].g + "," + School[f].b + ")";
                School[f].t.classList.add("text");
                School[f].t.style.transform = "scaleX(" + School[f].d + ")";
                School[f].t.innerText = " " + School[f].e.style.backgroundColor;
                School[f].e.addEventListener("click", FishClick);
                School[f].e.id = f;
            }
        }
    }
}

function Fish() {
    this.s = ((Math.random() * 2) + 1);
    this.d = (Math.floor(Math.random() * 2) == 1 ? -1 : 1);
    this.x = 0;
    this.y = Math.floor(Math.random() * 62) + 25;
    this.r = Math.floor(Math.random() * (maxR - minR)) + minR;
    this.g = Math.floor(Math.random() * (maxG - minG)) + minG;
    this.b = Math.floor(Math.random() * (maxB - minB)) + minB;
    this.e = document.createElement("div");
    this.efm = document.createElement("div");
    this.efb = document.createElement("div");
    this.eft = document.createElement("div");
    this.ee = document.createElement("div");
    this.t = document.createElement("div");
}

function Bubble() {
    this.s = ((Math.random() * 2) + 1);
    this.x = -((Math.random() * 5) - 1);
    this.y = Math.floor(Math.random() * 51) + 25;
    this.e = document.createElement("div");
}
