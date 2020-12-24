// // function expression
// // const tampilNama = function (nama) {
// // 	return `halo, ${nama};`
// // }
// // console.log(tampilNama('hadi'));

// // satu parameter
// // const tampilNama = (nama) => {return `halo, ${nama}`;}
// // console.log(tampilNama('hadi'));

// // dua parameter atau lebih
// // const tampilNama = (nama, waktu) => {
// // 	return `selamat ${waktu}, ${nama}`;
// // }
// // console.log(tampilNama('hadi', 'pagi'));

// // implisit Return
// // const tampilNama = nama => `halo, ${nama}`;
// // console.log(tampilNama('hadi'));

// // tanpa parameter
// // const tampilNama = () => 'helo world';
// // console.log(tampilNama());


// // let mahasiswa = ['hadi purnomo', 'alex bb', 'eko'];
// // // let jumlahHuruf = mahasiswa.map(nama => nama.length);
// // // console.log(jumlahHuruf);
// // let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// // console.table(jumlahHuruf);

// const Mahasiswa = function() {
// 	this.nama = 'eko';
// 	this.umur = 33;
// 	this.sayHello = function() {
// 		console.log(`hello nama saya ${nama}, umur saya ${umur};`)
// 	}
// 	setInterval( () => {
// 		console.log(this.umur++)
// 	}, 500)
// }

// const eko = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
	let satu = 'size';
	let dua = 'caption';
	

	if(this.classList.contains(satu)) {
		
		[satu, dua] = [dua, satu]; 
		// satu dua menjadi dua satu 
	}

	this.classList.toggle(satu);

	setTimeout( () => {
		this.classList.toggle(dua);
	}, 600);
});
