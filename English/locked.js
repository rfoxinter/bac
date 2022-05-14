function checkStart() {
    let params = new URLSearchParams(document.location.search.substring(1));
    const id = btoa(params.get("id"));
    const title = params.get("title");
    const author = params.get("author");
    const type = params.get("type");
    const pwd = btoa(atob(id).toUpperCase() + new Date().getFullYear());
    let x = document.cookie;

    if (x.search(atob(id)+"_"+type) != -1) {
        eval(x);
        if (eval(atob(id)+"_"+type) == pwd) {
            var exp = new Date();
            exp.setFullYear(exp.getFullYear()+1);
            document.cookie = atob(id)+"_"+type+"="+eval(atob(id)+"_"+type)+"; expires="+exp+";";
            var correct = 0;
            var incorrect = 0;
            window.open("./" + type + "/" + title + " - " + author + ".pdf", target="_self");
        }
    }
}

function checkPass() {
    let params = new URLSearchParams(document.location.search.substring(1));
    const id = btoa(params.get("id"));
    const title = params.get("title");
    const author = params.get("author");
    const type = params.get("type");
    const pwd = btoa(atob(id).toUpperCase() + new Date().getFullYear());

    if (btoa(document.f_pass.pass.value) == pwd) {
        var exp = new Date();
        exp.setFullYear(exp.getFullYear()+1);
        document.cookie = atob(id)+"_"+type+"='"+pwd+"'; expires="+exp+";";
        var correct = 0;
        var incorrect = 0;
        window.open("./" + type + "/" + title + " - " + author + ".pdf", target="_self");
    }
    else {
        document.getElementById("alert").innerHTML = "The password is not correct";
        document.f_pass.pass.value="";
    }
}
