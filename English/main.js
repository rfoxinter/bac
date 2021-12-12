const quizlet = {ia : "https://quizlet.com/_9kcegz?x=1jqt&i=3hrg84", iom : "https://quizlet.com/_9w625w?x=1jqt&i=3hrg84", noans : "https://quizlet.com/_9w9akc?x=1jqt&i=3hrg84", tht : "https://quizlet.com/_9zvngk?x=1jqt&i=3hrg84", tiobe : "https://quizlet.com/_9lfo98?x=1jqt&i=3hrg84", tpos : "https://quizlet.com/_9vertz?x=1jqt&i=3hrg84", tt : "https://quizlet.com/_9zvnek?x=1jqt&i=3hrg84", tttc : "https://quizlet.com/_9zvnbk?x=1jqt&i=3hrg84", wp : "https://quizlet.com/_9w64y0?x=1jqt&i=3hrg84", yp : "https://quizlet.com/_9zvnhs?x=1jqt&i=3hrg84"};

function books() {
    const b = document.getElementsByTagName("book");
    var i=0;
    while (i < b.length) {
        var a = document.createElement("a");
        a.setAttribute("href","books/"+b[i].className+".html");
        var img = document.createElement("img");
        img.setAttribute("src","covers/"+b[i].className+".jpg");
        img.setAttribute("class","books");
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

function quotes() {
    const url = book_id(window.location.href);
    const a = document.getElementById("quotes");
    if (a != null) {
        a.setAttribute("href",quizlet[url]);
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
        var div = document.createElement("div");
        div.style.background = "#A0A0A07E";
        div.style.position = "fixed";
        div.style.top = "15px";
        div.style.right = "15px";
        div.id = "no_print";
        var p = document.createTextNode("Calculer sa moyenne au bac");
        var a = document.createElement("a");
        a.href = "https://rfoxinter.github.io/bac/Moyenne/?section=internationale";
        a.style.margin = "2px";
        a.style.opacity = 0.5;
        a.target = "_blank";
        a.appendChild(p);
        div.appendChild(a);
        document.body.appendChild(div);
    }
});
