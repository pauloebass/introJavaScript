function formatMask(campo){
	if(!campo.value){
		campo.value = 0;
	}
	var v = campo.value.replace(/\D/g,"");
	var arr = [];
	var counter;
	v = parseInt(v);
	v += '';
	console.log(v);
	var len = v.length;
	var temp = '';
	if(len < 7){
		for(var i=0; i<6-len; i++){
			temp += "0";
		}
		campo.value = "0," + temp + v;
		return;
	}
	if(len <= 9){
		campo.value = v.substring(0, len-6) + ',' + v.substring(len-6, len);
		return;
	}
	if(len > 9){
		counter = 1;
		for(var i=len-7; i>=0; i--){
			if(counter === 4){
				arr.push('.');
				counter = 1;
			}
			arr.push(v.substring(i, i+1));
			counter ++;
		}
		console.log(arr);
		arr.reverse();
		var retorno = arr.join();
		retorno = retorno.replace(/,/g, '');
		console.log(retorno);
		campo.value = retorno + ',' + v.substring(len-6, len);
	}
}
function formatMask2(campo){
	
	var v = campo.value.replace(/[^\d,]/g,"");
	campo.value = v;
}
function formatDecimal(campo){
	var v = campo.value;
	var parteInteira = '0';
	var parteDecimal = '000000';
	if(v === ''){
		campo.value = parteInteira + ',' + parteDecimal;
		return;
	}
	var arr = v.split(',');
	
	var index = v.indexOf(',');
	if(index === 0){
		parteDecimal = arr[1];
	}else if(index === -1){
		parteInteira = arr[0];
	}else if(index > 0){
		parteInteira = arr[0];
		parteDecimal = arr[1];
	}
	if(parteInteira.length > 3){
		var contador = 0;
		arr = [];
		for(i=parteInteira.length-1; i>=0; i-- ){
			arr.push(parteInteira.substr(i, 1));
			contador ++;
			if(contador === 3 && i > 0){
				arr.push('.');
				contador = 0;
			}
		}
		arr.reverse();
		parteInteira = arr.join();
		parteInteira = parteInteira.replace(/,/g,"");
	}
	if(parteDecimal.length < 6){
		for(i=0; i=6-parteDecimal.length; i++){
			parteDecimal += '0';
		}
	}else{
		parteDecimal = parteDecimal.substr(0, 6);
	}

	campo.value = parteInteira + ',' + parteDecimal;
}
var parameters = {
  target: '#myFunction',
  data: [{
	fn: 'sin(x)', 
	color: 'red'
 }       
		],
  grid: true,
  yAxis: {domain: [-1, 1]},
  xAxis: {domain: [0, 2*Math.PI]}
};

functionPlot(parameters);