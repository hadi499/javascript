// const mhs = {
//     nama: 'hadi',
//     umur: 33,
//     nrp: '123244'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
    
// </div>`;


const mhs = [
    {
        nama: 'hadi',
        email: 'hadi@gmail.com'
    },
    {
        nama: 'eko',
        email: 'eko@gmail.com'
    },
    {
        nama: 'emon',
        email: 'emon@gmail.com'
    }
];

const el = `<div class="mhs">
                ${mhs.map(m => ` <ul>

                    <li>${m.nama}</li>
                    <li>${m.email}</li>
        
                </ul>`).join('')} 
    
            </div>`;
// join('') menghilangkan koma di html

document.body.innerHTML = el;