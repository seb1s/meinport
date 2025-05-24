function fallingstar(){
    let count = 5;
    let scene = document.querySelector('.scene');
    let a = 0;
    while(a < count){
        let star = document.createElement("a");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 2;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 70+size+'px';
        star.style.height = 0.5+size+'px';

        star.style.animationDuration = 8+duration+'s';
        star.style.animationDelay = 's';

        scene.appendChild(star);
        a++
    }
}
fallingstar();