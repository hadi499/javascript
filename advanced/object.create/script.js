// // object literal
// let mahasiswa1 = {
//     nama : 'hadi',
//     energi : 10,
//     makan : function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}' selamat makan!`);
//     }

// }
// let mahasiswa2 = {
//     nama : 'eko',
//     energi : 12,
//     makan : function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}' selamat makan!`);
//     }

// }

// 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}' selamat makan!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama} selamat main!`);
//     }
//     return mahasiswa;
// }

// let hadi = Mahasiswa('hadi', 10)
// let eko = Mahasiswa('eko', 15);


// 3. constructor function
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}' selamat makan!`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${nama} selamat main!`);
//     }
    
// }

// let hadi = new Mahasiswa('hadi', 15);

// 4. Object.create mirip function declaration

const methodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}' selamat makan!`);
    },
    main : function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama} selamat main!`);
    },
    tidur : function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama} selamat tidur!`);
    }

}
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
       
    return mahasiswa;
}

let hadi = Mahasiswa('hadi', 10)
let eko = Mahasiswa('eko', 15);