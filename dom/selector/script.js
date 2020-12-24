const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'lightblue';

const p = document.querySelectorAll('p');
// p[0].style.backgroundColor = 'orange';
for( let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'yellow';
}