function books() {
    const b = document.getElementsByTagName("book");
    var i=0;
    while (i < b.length) {
        var a = document.createElement("a");
        a.setAttribute("href","books/"+b[i].className+".html");
        var img = document.createElement("img");
        img.setAttribute("src","covers/"+b[i].className+".jpg");
        img.setAttribute("class","books");
        img.setAttribute("alt",b[i].className);
        a.appendChild(img);
        b[i].appendChild(a);
        i=i+1;
    }
}

function book_id(str) {
    str = str.substring(0,str.length-5);
    while (str.indexOf("/") != -1) {
        str = str.substring(str.indexOf("/")+1,str.length);
    }
    return str
}

function online() {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    const a = document.getElementById("online");
    if (a != null) {
        a.setAttribute("href","https://rfoxinter.github.io/ebooks/bibi/?book="+title+" - "+author+".epub");
    }
}

function ebook(format) {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    var folder = "";
    if (format == "epub" ||  format == "mobi") {
        folder = "ebooks";
    } else if (format == "pdf") {
        folder = "pdfs";
    }
    const a = document.getElementById(format);
    if (a != null) {
        a.setAttribute("href","../"+folder+"/"+title+" - "+author+"."+format);
    }
}

function character_map() {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    const type = "character_maps";
    const url = book_id(window.location.href);
    const a = document.getElementById("map");
    if (a != null) {
        a.setAttribute("href","../locked.html?title="+title+"&author="+author+"&id="+url+"&type="+type);
    }
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
            div.style.background = "#A0A0A07E";
            div.style.position = "sticky";
            div.style.position = "-webkit-sticky";
            div.style.top = "15px";
            div.style.left = "100vw";
            div.style.width = "fit-content";
            div.style.height = "fit-content";
            div.id = "no_print";
            var p = document.createTextNode("Calculer sa moyenne au bac");
            var a = document.createElement("a");
            a.href = "https://rfoxinter.github.io/bac/Moyenne/?section=internationale";
            a.style.margin = "2px";
            a.style.opacity = 0.5;
            a.target = "_blank";
            a.appendChild(p);
            div.appendChild(a);
            document.getElementsByClassName("main-content")[0].prepend(div);
            document.getElementById("no_print").style.marginBottom = "-"+document.getElementById("no_print").clientHeight+"px";
            if (document.getElementsByTagName("h1").length == 5) {
                document.getElementsByTagName("h1")[1].style.marginTop = 0;
            }
        }
    }
});
