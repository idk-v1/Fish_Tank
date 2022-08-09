var School = new Array(10).fill(new Fish());
var Bubbles = new Array(20).fill(new Bubble());
var dlt = 0;
var lst = performance.now();
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

function FishClick(e) {
    School[e.currentTarget.id].s = 10;
}

function render() {
    for (var f = 0; f < School.length; f++) {
        School[f].e.style.left = (window.innerWidth / 2 + School[f].d * window.innerWidth / 1.5 - School[f].x - 100) + "px";
        School[f].e.style.top = (School[f].y - 7.5) + "%";
    }
}

function update() {
    for (var f = 0; f < School.length; f++) {

        School[f].x += School[f].s * School[f].d;
        if ((School[f].d == 1 && School[f].x >= window.innerWidth * 1.5) || (School[f].d == -1 && School[f].x <= -window.innerWidth * 1.5)) {
            School[f].e.remove();
            School[f] = new Fish();
            School[f].e.appendChild(School[f].efm);
            School[f].e.appendChild(School[f].efb);
            School[f].e.appendChild(School[f].eft);
            School[f].e.appendChild(School[f].ee);
            document.querySelector("body").appendChild(School[f].e);
            if (School[f].d == 1) {
                School[f].efm.classList.add("fin-mid-l");
                School[f].ee.classList.add("eye-l");
                School[f].efb.style = "position: absolute; left: 75%; top: 12.5%; width: 50px; height: 25px; border-top: 25px solid transparent; border-right: 38px solid rgb(" + School[f].r / 2 + "," + School[f].g / 2 + "," + School[f].b / 2 + "); border-bottom: 25px solid transparent;";
                School[f].eft.style = "position: absolute; left: 37.5%; top: -25%; width: 50px; height: 25px; background: rgb(" + School[f].r / 2 + "," + School[f].g / 2 + "," + School[f].b / 2 + "); transform: skew(-20deg);";
            } else {
                School[f].efm.classList.add("fin-mid-r");
                School[f].ee.classList.add("eye-r");
                School[f].efb.style = "position: absolute; right: 75%; top: 12.5%; width: 50px; height: 25px; border-top: 25px solid transparent; border-left: 38px solid rgb(" + School[f].r / 2 + "," + School[f].g / 2 + "," + School[f].b / 2 + "); border-bottom: 25px solid transparent;";
                School[f].eft.style = "position: absolute; right: 37.5%; top: -25%; width: 50px; height: 25px; background: rgb(" + School[f].r / 2 + "," + School[f].g / 2 + "," + School[f].b / 2 + "); transform: skew(20deg);";
            }
            School[f].e.classList.add("body");
            School[f].e.style.backgroundColor = "rgb(" + School[f].r + "," + School[f].g + "," + School[f].b + ")";
            School[f].e.addEventListener("click", FishClick);
            School[f].e.id = f;
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
    this.efm = document.createElement("div");
    this.efb = document.createElement("div");
    this.eft = document.createElement("div");
    this.ee = document.createElement("div");
}

function Bubble() {

}
