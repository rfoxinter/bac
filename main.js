function pdf(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../pdfs/"+title+" - "+author+".pdf")
}


function character_map(a) {
	var title = document.getElementById("title").textContent;
	var author = document.getElementById("author").textContent;
	a.setAttribute("href","../character_maps/"+title+" - "+author+".pdf")
}