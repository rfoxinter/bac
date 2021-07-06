const quizlet = {ia : "https://quizlet.com/_9kcegz?x=1jqt&i=3hrg84", iom : "https://quizlet.com/_9w625w?x=1jqt&i=3hrg84", noans : "https://quizlet.com/_9w9akc?x=1jqt&i=3hrg84", tht : "https://quizlet.com/_9zvngk?x=1jqt&i=3hrg84", tiobe : "https://quizlet.com/_9lfo98?x=1jqt&i=3hrg84", tpos : "https://quizlet.com/_9vertz?x=1jqt&i=3hrg84", tt : "https://quizlet.com/_9zvnek?x=1jqt&i=3hrg84", tttc : "https://quizlet.com/_9zvnbk?x=1jqt&i=3hrg84", wp : "https://quizlet.com/_9w64y0?x=1jqt&i=3hrg84", yp : "https://quizlet.com/_9zvnhs?x=1jqt&i=3hrg84"};

function book_id(str) {
    str = str.substring(0,str.length-5);
    while (str.indexOf("/") != -1) {
        str = str.substring(str.indexOf("/")+1,str.length);
    }
    return str
}

function online(a) {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    a.setAttribute("href","https://rfoxinter.github.io/ebooks/bibi/?book="+title+" - "+author+".epub");
}

function pdf(a) {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    a.setAttribute("href","../pdfs/"+title+" - "+author+".pdf");
}

function ebook(a,format) {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    a.setAttribute("href","../ebooks/"+title+" - "+author+"."+format);
}

function character_map(a) {
    const title = document.getElementById("title").textContent;
    const author = document.getElementById("author").textContent;
    const type = "character_maps";
    var url = window.location.href;
    url = book_id(url);
    a.setAttribute("href","../locked.html?title="+title+"&author="+author+"&id="+url+"&type="+type);
}

function quotes(a) {
    var url = window.location.href;
    url = book_id(url)
    a.setAttribute("href",quizlet[url]);
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