var School = new Array();
var Bubbles = new Array(20).fill(new Bubble());

for (var i = 0; i < 20; i++) {
    School[i] = new Fish();
}

var dlt = 0;
var lst = performance.now();
update();
var int = setInterval(tick, 0);

function tick() {
    var now = performance.now();
    dlt += now - lst;
    lst = now;
    while(dlt >= 1000 / 60) {
        dlt -= 1000 / 60;
        update();
    }
    render();
}

function render() {

}

function update() {
    for (var f = 0; f < School.length; f++) {
        School[f].e.id = f;
        School[f].e.style.position = "fixed";
        School[f].e.style.left = (window.innerWidth / 2 + School[f].d * window.innerWidth / 2 - School[f].x - 100) + "px";
        School[f].e.style.top = School[f].y + "%";
        School[f].e.style.width = "200px";
        School[f].e.style.height = "100px";
        School[f].e.style.background = "rgb(" + School[f].r + "," + School[f].g + "," + School[f].b + ")";
        document.querySelector("body").appendChild(School[f].e);
        School[f].x += School[f].s * School[f].d;
        if (School[f].d == 1 && School[f].x >= window.innerWidth) {
            School[f].e.remove();
            School[f] = new Fish();
        }
        if (School[f].d == -1 && School[f].x <= -window.innerWidth) {
            School[f].e.remove();
            School[f] = new Fish();
        }
    }
}

function Fish() {
    this.s = (Math.random() * 2) + 1;
    this.d = (Math.floor(Math.random() * 2) == 1 ? -1 : 1);
    this.x = 0;
    this.y = Math.floor(Math.random() * 51) + 25;
    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
    this.e = document.createElement("div");
}

function Bubble() {

}