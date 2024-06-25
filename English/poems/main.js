function urlExists(url, existsfun, failfun) {   
    var http = new XMLHttpRequest();
    http.open('HEAD', url);
    http.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            if (this.status !== 404) {
                existsfun();
            } else {
                failfun();
            }
        }
    };
    http.send();
}

function change_home() {
    const h = document.getElementsByClassName("home")[0];
    if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
        h.src = h.src.replace("home.svg", "home_dark.svg");
    } else {
        h.src = h.src.replace("home_dark.svg", "home.svg");
    }
}

async function online_poems() {
    var response = await fetch("./"+authors+".txt");
    var poems;
    if (response.status == 200) {
        poems = await response.text();
        poems = poems.replaceAll("\r", "");
        poems = poems.split('\n');
    }
    var holder = document.getElementById("poems");
    for (let i = 0; i < poems.length / 2; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.innerHTML = "<i>" + poems[2*i] + "</i> - " + poems[2*i+1];
        a.setAttribute("href", "./reader?title="+poems[2*i]+"&author="+poems[2*i+1]+"&parent="+authors);
        li.appendChild(a);
        holder.appendChild(li);
    }
}

function online() {
    urlExists("../ebooks/" + authors + " - " + authors + ".epub", () => {
        const a = document.getElementById("online");
        if (a != null) {
            a.setAttribute("href","https://rfoxinter.github.io/ebooks/bibi/?book="+authors+" - "+authors+".epub");
        }
    }, () => {
        const a = document.getElementById("online");
        a.style.display = "none";
    });
}

function ebook(format) {
    var folder = "";
    if (format !== "pdf") {
        folder = "ebooks";
    } else {
        folder = "pdfs";
    }
    urlExists("../"+folder+"/"+authors+" - "+authors+"."+format, () => {
        if (format !== "pdf") {
            document.getElementById("ebooksa").style.display = "block";
        }
        const a = document.getElementById(format);
        if (a != null) {
            a.setAttribute("href","../"+folder+"/"+authors+" - "+authors+"."+format);
        }
    }, () => {
        var a;
        if (format !== "pdf") {
            a = document.getElementById("li" + format);
        } else {
            a = document.getElementById(format);
        }
        a.style.display = "none";
    });
    
}

function ebooks() {
    if (document.getElementById("ebooks").style.display === "none") {
        document.getElementById("ebooks").style.display = "block";
    }
    else {
        document.getElementById("ebooks").style.display = "none";
    }
}

function poems() {
    if (document.getElementById("poems").style.display === "none") {
        document.getElementById("poems").style.display = "block";
    }
    else {
        document.getElementById("poems").style.display = "none";
    }
}

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
        let displayMode = 'browser';
        const mqStandAlone = '(display-mode: standalone)';
        if (navigator.standalone === false || window.matchMedia(mqStandAlone).matches === false) {
            var div = document.createElement("div");
            div.style.border = "solid";
            div.style.borderColor = "#7F7F7F";
            div.style.borderRadius = "5px";
            div.style.zIndex = "999";
            div.style.position = "sticky";
            div.style.position = "-webkit-sticky";
            div.style.top = "15px";
            div.style.left = "100vw";
            div.style.width = "fit-content";
            div.style.height = "fit-content";
            div.style.backgroundColor = "rgba(255,255,255,0.9)";
            div.className = "no_print";
            div.id = "no_print";
            var p = document.createTextNode("Calculer sa moyenne au bac");
            var a = document.createElement("a");
            var date = new Date();
            var year = date.getFullYear();
            if (date.getMonth() >= 8) {
                year += 1;
            }
            a.href = "https://rfoxinter.github.io/bac/Moyenne/"+year+"/?section=internationale";
            a.style.margin = "0.25em";
            a.target = "_blank";
            a.appendChild(p);
            div.appendChild(a);
            document.getElementsByClassName("main-content")[0].prepend(div);
            document.getElementById("no_print").style.marginBottom = "-"+document.getElementById("no_print").offsetHeight+"px";
            if (document.getElementsByTagName("h1").length === 5) {
                document.getElementsByTagName("h1")[1].style.marginTop = 0;
            }
        }
    }
});

var t;
var eb;
var pm;

function unfold_all() {
    if (document.getElementById('ebooks') !== null) {
        eb = document.getElementById('ebooks').style.display;
        document.getElementById('ebooks').style.display = "block";
    }
    if (document.getElementById('poems') !== null) {
        pm = document.getElementById('poems').style.display;
        document.getElementById('poems').style.display = "block";
    }
}

function refold_all() {
    if (document.getElementById('ebooks') !== null) {
        document.getElementById('ebooks').style.display = eb;
    }
    if (document.getElementById('poems') !== null) {
        document.getElementById('poems').style.display = pm;
    }
}

window.onbeforeprint = (event) => {
    t = theme.value;
    theme.value = 'light';
    setPreference();
    changeImages();
	unfold_all();
};

window.onafterprint  = (event) => {
    theme.value = t;
    setPreference();
    changeImages();
	refold_all();
};

document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementsByClassName('home').length == 1){change_home();}
    if (window.location.href !== "https://rfoxinter.github.io/bac/English/" && window.location.href !== "https://rfoxinter.github.io/bac/English/index.html") {
        var hr = document.createElement("hr");
        hr.className = "print_only";
        document.getElementsByTagName("main")[0].prepend(hr);
        var hr = hr.cloneNode(true);
        document.getElementsByTagName("main")[0].appendChild(hr);
    }
});