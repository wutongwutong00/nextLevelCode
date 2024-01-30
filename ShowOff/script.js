document.getElementById("expand1").addEventListener("click", (e) => {
    document.getElementById("intro1").classList.toggle("show");
});
document.getElementById("expand2").addEventListener("click", (e) => {
    document.getElementById("intro2").classList.toggle("show");
});
document.getElementById("expand3").addEventListener("click", (e) => {
    document.getElementById("intro3").classList.toggle("show");
});
document.getElementById("expand4").addEventListener("click", (e) => {
    let hueytab = window.open("", "hueywindow", "width=400,height=400");
    const hueydiv = document.createElement("div");
    const hueycontent = document.createTextNode("hi huey");
    hueydiv.appendChild(hueycontent);

});