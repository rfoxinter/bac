function load() {
    let params = new URLSearchParams(document.location.search.substring(1));
    const home = params.get("home") == "f";
    const theme = params.get("theme") == "f";

    if (home) {
        document.getElementsByClassName("home")[0].setAttribute("style", "display: none;");
    }
    if (theme) {
        document.getElementById("theme-toggle").setAttribute("style", "display: none;");
    }
}