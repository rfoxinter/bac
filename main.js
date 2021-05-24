function book_id(str) {
	str = str.substring(0,str.length-5);
	while (str.indexOf("/") != -1) {
		str = str.substring(str.indexOf("/")+1,str.length);
	}
	return str
}

function online(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","https://rfoxinter.github.io/ebooks/bibi/?book="+title+" - "+author+".epub");
}

function pdf(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../pdfs/"+title+" - "+author+".pdf");
}

function ebook(a,format) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../ebooks/"+title+" - "+author+"."+format);
}

function character_map(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../character_maps/"+title+" - "+author+".pdf");
}

function quotes(a) {
	var quizlet = {tiobe : "https://quizlet.com/_9lfo98?x=1jqt&i=3hrg84"};
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