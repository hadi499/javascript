// function init() {
// 	let nama = 'hadi';
// 	function tampilNama() {
// 		console.log(nama);
// 	}
// 	console.dir(tampilNama);
// }
// init();

// menjalankan function secara penuh tanpa harus disimpan di variabel

let add = (function() {
	let counter = 0;
	return function() {
		return ++counter;
	}
})();

let counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());