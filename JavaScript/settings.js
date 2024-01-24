const gearJS = document.getElementById("gear");
const body = document.getElementById("body");

function gearSettings() {
    let icons = document.getElementById("icons");
    const c = document.getElementById("canvas");
    if (c.style.display === "none") {
        c.style.display = "block";
        icons.style.display = "none";
        body.style.backgroundColor = "white";

    } else {
        c.style.display = "none";
        icons.style.display = "block";
        body.style.backgroundColor = "grey";
    }
}
