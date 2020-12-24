// buat elemen baru
const pbaru = document.createElement('p');
const teks = document.createTextNode('paragraf baru');

// simpan teks kedalam paragraf
pbaru.appendChild(teks);

//  simpan pbaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pbaru);

// membuat li baru di antara li 1 dan 2
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);