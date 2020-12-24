// console.log(helo);

// var nama = 'hadi';
// var umur = 20;

// function helo(){
//   return `hello...nama saya ${nama} umur ${umur} tahun.`;
// }


function a(){
	console.log('ini a');
	function b(){
		console.log('ini b');
		function c (){
			console.log('ini c');	
		}
		c();
	}
	b();


}

a();