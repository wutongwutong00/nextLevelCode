window.addEventListener("load", (e) => {
    document.getElementById("text").classList.toggle("show");
    console.log('success');
  });

let hueyHide = document.getElementById("hueyHide");
let hueyHappy = document.getElementById("hueyHappy");

hueyHide.addEventListener("mouseenter", (e) => {
    let hueyTopPos = Math.floor(Math.random()*70);
    let hueyLeftPos = Math.floor(Math.random()*70);

    hueyHide.style.top = hueyTopPos + '%';
    hueyHide.style.left = hueyLeftPos + '%';
    hueyHappy.style.top = hueyTopPos + '%';
    hueyHappy.style.left = hueyLeftPos + '%';
    console.log('yeahhh');
});

let hueyMeows = [
    './audio/meow.mp3',
    './audio/meow2.mp3',
    './audio/meow3.mp3',
    './audio/meow4.mp3',
]

document.addEventListener("mousedown", (e) => {
	new Audio(hueyMeows[Math.floor(Math.random()*4)]).play()
});


document.addEventListener("keydown", (e) => {
	if (e.key === " "){
        console.log('treatime');
        
        hueyHide.classList.toggle("hueyShow");
        hueyHappy.classList.toggle("hueyShow");
        document.getElementById("text").innerHTML = 'he loves treats :-)';
        };
	}
);
document.addEventListener('mousemove', (e) => {
    let left = e.pageX;
    let top = e.pageY;
    hueyHappy.style.left = (left - 215) + 'px';
    hueyHappy.style.top = (top - 210) + 'px';
    hueyHappy.style.position = 'relative';
    
  });
