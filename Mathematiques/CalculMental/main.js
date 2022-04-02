function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var diff = 1;
if (decodeURIComponent(document.cookie)!="") {
    eval(decodeURIComponent(document.cookie));
}


function change_diff(lvl) {
    diff = lvl;
    aff_diff();
    document.cookie = "diff="+diff+"; expires="+exp+";";
    operation();
}

function aff_diff(){
    if (diff == 1) {
        document.getElementById("d1").style.display = "unset";
    } else {
        document.getElementById("d1").style.display = "none";
    }
    if (diff == 2) {
        document.getElementById("d2").style.display = "unset";
    } else {
        document.getElementById("d2").style.display = "none";
    }
    if (diff == 3) {
        document.getElementById("d3").style.display = "unset";
    } else {
        document.getElementById("d3").style.display = "none";
    }
}

var exp = new Date();
exp.setFullYear(exp.getFullYear()+1);
document.cookie = "diff="+diff+"; expires="+exp+";";
var correct = 0;
var incorrect = 0;

var r = 0;

function randint(max,min=0) {
    return Math.floor((max-min)*Math.random()+min);
}
l=[]
for (var i = 0; i <= 1000; i++) {
    r=randint(min=1,max=15);
    if (r<1 || r>15) {
        alert(r);
    }
}

function operation() {
    var o = randint(0,4);
    var op = "";
    if (diff == 1) {
        if (o==0) {
            var a = randint(0,101);
            var b = randint(0,101);
            r = a+b;
            op = a+"+"+b;
        }
        else if (o==1) {
            var a = randint(0,101);
            var b = randint(0,101);
            r = a-b;
            op = a+"-"+b;
        }
        else if (o==2) {
            var a = randint(2,20);
            var b = randint(2,20);
            r = a*b;
            op = a+"×"+b;
        }
        else if (o==3) {
            var a = randint(2,20);
            var b = randint(2,20);
            var prod = a*b;
            r = b;
            op = prod+"/"+a;
        }
    }
    if (diff == 2) {
        if (o==0) {
            var a = randint(0,1001);
            var b = randint(0,1001);
            r = a+b;
            op = a+"+"+b;
        }
        else if (o==1) {
            var a = randint(0,1001);
            var b = randint(0,1001);
            r = a-b;
            op = a+"-"+b;
        }
        else if (o==2) {
            var a = randint(2,100);
            var b = randint(2,100);
            r = a*b;
            op = a+"×"+b;
        }
        else if (o==3) {
            var a = randint(2,100);
            var b = randint(2,100);
            var prod = a*b;
            r = b;
            op = prod+"/"+a;
        }
    }
    if (diff == 3) {
        if (o==0) {
            var a = randint(0,1001);
            var b = randint(0,1001);
            var c = randint(0,1001);
            r = a+b-c;
            op = a+"+"+b+"-"+c;
        }
        else if (o==1) {
            var a = randint(0,1001);
            var b = randint(0,1001);
            var c = randint(0,1001);
            r = a-b-c;
            op = a+"-"+b+"-"+c;
        }
        else if (o==2) {
            var a = randint(2,100);
            var b = randint(50,1000);
            r = a*b;
            op = a+"×"+b;
        }
        else if (o==3) {
            var a = randint(2,100);
            var b = randint(50,1000);
            var prod = a*b;
            if (randint(0,2) == 0) {
                r = b;
                op = prod+"/"+a;
            } else {
                r = a;
                op = prod+"/"+b;
            }
        }
    }
    p.textContent=op;
}

function verifier() {
    if (document.f_pass.result.value == r) {
        correct += 1;
        document.getElementById("corr").textContent=correct;
        rep.textContent="Correct : "+p.textContent+"="+r;
        rep.setAttribute("style","color: #159957");
    }
    else {
        incorrect += 1;
        document.getElementById("incorr").textContent=incorrect;
        rep.textContent="Incorrect : "+p.textContent+"="+r;
        rep.setAttribute("style","color: #EC7063");
    }
    document.f_pass.result.value="";
    operation();
}