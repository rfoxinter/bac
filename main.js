function pdf(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../pdfs/"+title+" - "+author+".pdf")
}
