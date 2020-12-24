// prototype = class

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= porsi;
//     return `halo ${this.nama}, selamat main`;
// }

// let hadi = new Mahasiswa('hadi', 10);
// let eko = new Mahasiswa('eko', 12);

//  versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;

    }
    makan(porsi) {
        this.energi += porsi;
        return `halo ${this.nama}, selamat makan`;
    }
    main(jam) {
        this.energi -= porsi;
        return `halo ${this.nama}, selamat main`;
    }
}

let hadi = new Mahasiswa('hadi', 10);
let eko = new Mahasiswa('eko', 12);