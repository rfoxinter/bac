function books() {
    const b = document.getElementsByTagName("book");
    var i=0;
    while (i < b.length) {
        var a = document.createElement("a");
        a.setAttribute("href","books/"+b[i].className+".html");
        var img = document.createElement("img");
        if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
            img.setAttribute("src","../covers/"+b[i].className+"_dark.webp");
        } else {
            img.setAttribute("src","../covers/"+b[i].className+".webp");
        }
        img.setAttribute("class","books");
        img.setAttribute("alt",b[i].className);
        a.appendChild(img);
        b[i].appendChild(a);
        i=i+1;
    } 
}

function change_books() {
    const b = document.getElementsByClassName("books");
    var i=0;
    while (i < b.length) {
        if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
            b[i].setAttribute("src","../covers/"+b[i].alt+"_dark.webp");
        } else {
            b[i].setAttribute("src","../covers/"+b[i].alt+".webp");
        }
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
    if (format === "pdf") {
        folder = "pdfs";
    } else {
        folder = "ebooks";
    }
    const a = document.getElementById(format);
    if (a != null) {
        a.setAttribute("href","../../"+folder+"/"+title+" - "+author+"."+format);
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

var t = '';

window.onbeforeprint = (event) => {
    t = theme.value;
    theme.value = 'light';
    setPreference()
    change_books()
};

window.onafterprint  = (event) => {
    theme.value = t;
    setPreference()
    change_books()
};

document.addEventListener("DOMContentLoaded", function(event) {
    var hr = document.createElement("hr");
    hr.className = "print_only";
    document.getElementsByTagName("main")[0].prepend(hr);
	var hr = hr.cloneNode(true);
    document.getElementsByTagName("main")[0].appendChild(hr);
});