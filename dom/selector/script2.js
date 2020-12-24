const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = "Hadi Purnomo";


const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor = 'yellow';
for( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'yellow';
}
const h1 = document.getElementsByTagName('h1') [0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'diubah oleh javascript';
