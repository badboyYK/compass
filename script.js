const box = document.getElementById('box');
function run(){
	for(let j=0;j<36;j++)
	{
		const x = document.createElement('span');
		x.style=`--i:${j}`;
		box.appendChild(x);	
	}
}
run()