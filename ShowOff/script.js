document.getElementById("expand1").addEventListener("click", (e) => {
    document.getElementById("intro1").classList.toggle("show");
});
document.getElementById("expand2").addEventListener("click", (e) => {
    document.getElementById("intro2").classList.toggle("show");
    document.getElementById("expand2").classList.toggle("names");
    document.getElementById("expand3").classList.toggle("names");
    document.getElementById("wavy").classList.toggle("names");
});
document.getElementById("expand3").addEventListener("click", (e) => {
    document.getElementById("intro3").classList.toggle("show");
});
document.getElementById("expand4").addEventListener("click", (e) => {
    document.getElementById("huey").classList.toggle("show");
    document.getElementById("huey1").classList.toggle("show");
});

// document.getElementById("huey").addEventListener("mousedown", (e) => {
//     window.open("https://wutongwutong00.github.io/nextLevelCode/ShowOff/huey.html");
// });