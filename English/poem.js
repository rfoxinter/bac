document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
            if (window.innerWidth == "500" && window.innerHeight == "500") {
            var div = document.createElement("div");
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.background = "#00000000";
            div.style.position = "fixed";
            div.style.top = "15px";
            div.style.right = "15px";
            var img = document.createElement("img");
            img.alt = "Open in a new tab";
            img.srcset = "../new_tab.svg";
            img.style.align = "center";
            var a = document.createElement("a");
            a.href = window.location.href;
            a.target = "_blank";
            a.appendChild(img);
            div.appendChild(a);
            document.body.appendChild(div);
        }
    } else {
        alert(window.innerWidth);
        alert(window.innerHeight);
    }
});