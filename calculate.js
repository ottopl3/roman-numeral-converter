var szam = 0;
var romai = "";
let gombok = new Array(7).fill(0);

//attributum beallitasahoz
var i = document.getElementById("i");
var v = document.getElementById("v");
var x = document.getElementById("x");
var l = document.getElementById("l");
var c = document.getElementById("c");
var d = document.getElementById("d");
var m = document.getElementById("m");

function hozzaad(id) {
    console.log(gombok[0]);
    if (id == "i") {
        gombok[0]++;
        console.log(gombok[0]);
        if (gombok[0] == 1) {
            l.disabled = true;
            c.disabled = true;
            d.disabled = true;
            m.disabled = true;
            if (gombok[1] == 0)
                x.disabled = false;
            szam += 1;
        }
        if (gombok[0] == 2) {
            v.disabled = true;
            x.disabled = true;
            szam += 1;
        }
        if (gombok[0] == 3) {
            i.disabled = true;
            szam += 1;
        }
        romai += id;
    }
    if (id == "v") {
        gombok[1]++;
        console.log(gombok[1]);
        if (gombok[1] == 1) {
            v.disabled = true;
            x.disabled = true;
            l.disabled = true;
            c.disabled = true;
            d.disabled = true;
            m.disabled = true;
            if (gombok[0] > 0) {
                szam -= 2;
                i.disabled = true;
            }
            szam += 5;
        }
        romai += id;
    }
    if (id == "x") {
        gombok[2]++;
        if (gombok[2] == 1) {
            d.disabled = true;
            m.disabled = true;
            if (gombok[0] > 0) {
                szam -= 2;
                i.disabled = true;
                v.disabled = true;
                x.disabled = true;
            }
            if (gombok[4] > 0 && gombok[2] == 1 && gombok[3] == 0 && gombok[0] == 0) {
                c.disabled = false;
            }
            szam += 10;
        }
        if (gombok[2] == 2) {
            l.disabled = true;
            c.disabled = true;
            if (gombok[0] > 0) {
                i.disabled = true;
                v.disabled = true;
                x.disabled = true;
                szam -= 2;
            }
            szam += 10;
        }
        if (gombok[2] == 3) {
            x.disabled = true;
            if (gombok[0] > 0) {
                i.disabled = true;
                v.disabled = true;
                x.disabled = true;
                szam -= 2;
            }
            szam += 10;
        }
        if (gombok[2] == 4) {
            x.disabled = true;
            if (gombok[0] > 0) {
                i.disabled = true;
                v.disabled = true;
                x.disabled = true;
                szam -= 2;
            }
            szam += 10;
        }
        romai += id;
    }
    if (id == "l") {
        gombok[3]++;
        if (gombok[3] == 1) {
            l.disabled = true;
            c.disabled = true;
            d.disabled = true;
            m.disabled = true;
            if (gombok[2] > 0) {
                szam -= 20;
                x.disabled = true;
            }
        }
        szam += 50;
        romai += id;
    }
    if (id == "c") {
        gombok[4]++;
        if (gombok[4] == 2) {
            m.disabled = true;
            d.disabled = true;
        }
        if (gombok[4] == 3) {
            c.disabled = true;
        }
        if (gombok[2] == 1) {
            x.disabled = true;
            l.disabled = true;
            c.disabled = true;
            szam -= 20;
        }
        if (gombok[6] == 3 && gombok[4] == 1 && gombok[5] == 0) {
            m.disabled = false;
        }
        romai += id;
        szam += 100;
    }
    if (id == "d") {
        gombok[5]++;
        d.disabled = true;
        m.disabled = true;
        if (gombok[4] == 1) {
            c.disabled = true;
            szam -= 200;
        }
        romai += id;
        szam += 500;
    }
    if (id == "m") {
        gombok[6]++;
        if (gombok[6] == 3) {
            m.disabled = true;
        }
        if (gombok[4] == 1) {
            szam -= 200;
            m.disabled = true;
            d.disabled = true;
            c.disabled = true;
        }
        romai += id;
        szam += 1000;
    }
    document.getElementById("romai").innerHTML = romai.toUpperCase();
    document.getElementById("szam").innerHTML = szam;

}

function reset() {
    console.log("reset");
    szam = 0;
    gombok.fill(0);
    romai = "";
    document.getElementById("romai").innerHTML = "";
    document.getElementById("szam").innerHTML = "";
    for (let e of document.getElementsByTagName("button")) {
        e.disabled = false;
    }
}