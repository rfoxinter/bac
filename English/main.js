function books_poems() {
    const b = document.getElementsByTagName("book");
    var i=0;
    while (i < b.length) {
        var title = b[i].getAttribute("title");
        var author = b[i].getAttribute("author");
        var a = document.createElement("a");
        a.setAttribute("href","books/?title="+title+"&author="+author);
        var img = document.createElement("img");
        if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
            img.setAttribute("src","covers/"+title+" - "+author+"_dark.webp");
        } else {
            img.setAttribute("src","covers/"+title+" - "+author+".webp");
        }
        img.setAttribute("class","books");
        img.setAttribute("alt",title);
        a.appendChild(img);
        b[i].appendChild(a);
        i=i+1;
    }
    const po = document.getElementsByTagName("poem");
    var i=0;
    while (i < po.length) {
        var authors = po[i].getAttribute("authors");
        var p = document.createElement("p");
        var a = document.createElement("a");
        a.setAttribute("href","poems/?authors="+authors);
        a.innerHTML=authors;
        p.appendChild(a);
        po[i].appendChild(p);
        if (i > 0) {
            p.style.marginTop = "10px";
        }
        i=i+1;
    }
}

function change_books() {
    const b = document.getElementsByClassName("books");
    var i=0;
    while (i < b.length) {
        var p = b[i].parentElement.parentElement;
        var title = p.getAttribute("title");
        var author = p.getAttribute("author");
        if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
            b[i].setAttribute("src","covers/"+title+" - "+author+"_dark.webp");
        } else {
            b[i].setAttribute("src","covers/"+title+" - "+author+".webp");
        }
        i=i+1;
    } 
}

function change_home() {
    const h = document.getElementsByClassName("home")[0];
    if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
        h.src = h.src.replace("home.svg", "home_dark.svg");
    } else {
        h.src = h.src.replace("home_dark.svg", "home.svg");
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