function stars2(){
    let count = 750;
    let scene = document.querySelector('.scene');
    let i = 0;
    while(i < count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * 550);
        let duration = Math.random() * 10;
        let size = Math.random() * 0.6;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 10+duration+'s';
        star.style.animationDelay = duration+'s';

        scene.appendChild(star);
        i++
    }
}
stars2();
function fallingstar(){
    let count = 5;
    let scene = document.querySelector('.scene');
    let a = 0;
    while(a < count){
        let star = document.createElement("a");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * 550);
        let duration = Math.random() * 2;
        let size = Math.random() * 1;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 100+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 8+duration+'s';
        star.style.animationDelay = 's';

        scene.appendChild(star);
        a++
    }
}
fallingstar();