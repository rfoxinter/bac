function pdf(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../pdf/"+title+" - "+author+".pdf")
}
