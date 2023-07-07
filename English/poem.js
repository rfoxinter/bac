document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
            if (window.innerWidth >= 495 && window.innerWidth <= 505 && window.innerHeight >= 495 && window.innerHeight <= 505) {
            var div = document.createElement("div");
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.background = "#00000000";
            div.style.position = "fixed";
            div.style.top = "15px";
            div.style.right = "15px";
			div.className = "no_print";
            var img = document.createElement("img");
            img.alt = "Open in a new tab";
            img.src = "../new_tab.svg";
			img.id = "new_tab";
            img.style.align = "center";
            var a = document.createElement("a");
            a.href = window.location.href;
            a.target = "_blank";
            a.appendChild(img);
            div.appendChild(a);
            document.body.appendChild(div);
        }
    }
});

function change_home() {
    const h = document.getElementsByClassName("home")[0];
	if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
		h.src = h.src.replace("home.svg", "home_dark.svg");
	} else {
		h.src = h.src.replace("home_dark.svg", "home.svg");
	}
}

function change_nt() {
    const nt = document.getElementById("new_tab");
	if (document.getElementsByTagName('html')[0].attributes['data-theme'].value=='dark') {
		nt.src = nt.src.replace("new_tab.svg", "new_tab_dark.svg");
	} else {
		nt.src = nt.src.replace("new_tab_dark.svg", "new_tab.svg");
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	if (document.getElementsByClassName('home').length == 1){change_home();}
    change_nt();
});

var t = '';

window.onbeforeprint = (event) => {
    t = theme.value;
    theme.value = 'light';
    setPreference();
	changeImages();
};

window.onafterprint  = (event) => {
    theme.value = t;
    setPreference();
	changeImages();
};