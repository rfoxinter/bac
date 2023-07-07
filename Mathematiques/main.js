function niveau() {
    const n = document.getElementsByTagName("li");
    var i=0;
    while (i < n.length) {
        var p = document.createElement("p");
        p.setAttribute("style","white-space: pre;");
        var t = "";
        for (var j = -Math.floor((n[i].className.search("<")+(n[i].className.length-n[i].className.search("<")-2)*0.5)/4) + 2; j >= 0; j--) {
            t += "&Tab;"
        }
        p.innerHTML = (n[i].className.substring(0,n[i].className.search("<"))+n[i].className.substring(n[i].className.search("<")+1,n[i].className.search(">")).sup()+t);
        delete m,t;
        var tex = document.createElement("img");
        if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
            tex.setAttribute("src","latex_dark.svg");
        } else {
            tex.setAttribute("src","latex.svg");
        }
        tex.setAttribute("class","latex");
        var a_tex = document.createElement("a");
        a_tex.setAttribute("href","Mathematiques"+(n[i].className).replace("<","").replace(">","").replace("è","e")+".zip");
        a_tex.setAttribute("target","_blank");
        a_tex.appendChild(tex);
        var pdf = document.createTextNode("pdf");
        var a_pdf = document.createElement("a");
        a_pdf.setAttribute("href","Mathematiques"+(n[i].className).replace("<","").replace(">","").replace("è","e")+".pdf");
        a_pdf.setAttribute("target","_blank");
        a_pdf.appendChild(pdf);
        p.appendChild(a_tex);
        p.innerHTML += "&Tab;&Tab;"
        p.appendChild(a_pdf);
        n[i].appendChild(p);
        i=i+1;
    }
}

function change_latex_img() {
    const l = document.getElementsByClassName("latex");
    var i=0;
    while (i < l.length) {
        if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
            l[i].setAttribute("src","latex_dark.svg");
        } else {
            l[i].setAttribute("src","latex.svg");
        }
        i=i+1;
    }
}
