const img1 = document.querySelector('#container img:nth-child(1)');
const img2 = document.querySelector('#container img:nth-child(2)');
const img3 = document.querySelector('#container img:nth-child(3)');
const img4 = document.querySelector('#container img:nth-child(4)');
const img5 = document.querySelector('#container img:nth-child(5)');

let img1cycle = 0;
let img2cycle = 0;
let img3cycle = 0;
let img4cycle = 0;
let img5cycle = 0;

img1.addEventListener('click', () => {
    img1cycle++;
    if (img1cycle % 3 === 0) {
        img1.src = 'assets/field_1.png';
    } else if (img1cycle % 3 === 1) {
        img1.src = 'assets/boat_1.png';
    } else if (img1cycle % 3 === 2) {
        img1.src = 'assets/syd_1.png';
    }
});

img2.addEventListener('click', () => {
    img2cycle++;
    if (img2cycle % 3 === 0) {
        img2.src = 'assets/field_2.png';
    } else if (img2cycle % 3 === 1) {
        img2.src = 'assets/boat_2.png';
    } else if (img2cycle % 3 === 2) {
        img2.src = 'assets/syd_2.png';
    }
});

img3.addEventListener('click', () => {
    img3cycle++;
    if (img3cycle % 3 === 0) {
        img3.src = 'assets/field_3.png';
    } else if (img3cycle % 3 === 1) {
        img3.src = 'assets/boat_3.png';
    } else if (img3cycle % 3 === 2) {
        img3.src = 'assets/syd_3.png';
    }
});

img4.addEventListener('click', () => {
    img4cycle++;
    if (img4cycle % 3 === 0) {
        img4.src = 'assets/field_4.png';
    } else if (img4cycle % 3 === 1) {
        img4.src = 'assets/boat_4.png';
    } else if (img4cycle % 3 === 2) {
        img4.src = 'assets/syd_4.png';
    }
});

img5.addEventListener('click', () => {
    img5cycle++;
    if (img5cycle % 3 === 0) {
        img5.src = 'assets/field_5.png';
    } else if (img5cycle % 3 === 1) {
        img5.src = 'assets/boat_5.png';
    } else if (img5cycle % 3 === 2) {
        img5.src = 'assets/syd_5.png';
    }
});

const music = document.getElementById('music');

function startMusic() {
    music.play();
    window.removeEventListener('click', startMusic);
}

window.addEventListener('click', startMusic);