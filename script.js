function volume_sphere() {
    //Write your code here
	let inputrad = document.getElementById('radius');
	let inputvol =document.getElementById('volume');
	let rad= parseFloat(inputrad.value);
	const pi= Math.PI;
	let volume=(4 / 3) * pi * Math.pow(rad, 3);
	inputvol.value=volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
