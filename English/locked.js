function checkPass() {
    let params = new URLSearchParams(document.location.search.substring(1));
    const id = btoa(params.get("id"));
    const title = params.get("title");
    const author = params.get("author");
    const type = params.get("type");
    const pwd = btoa(atob(id).toUpperCase() + new Date().getFullYear());

    if (btoa(document.f_pass.pass.value) == pwd) {
        window.open("./" + type + "/" + title + " - " + author + ".pdf", target="_self");
    }
    else {
        document.getElementById("alert").innerHTML = "The password is not correct";
        document.f_pass.pass.value="";
    }
}
