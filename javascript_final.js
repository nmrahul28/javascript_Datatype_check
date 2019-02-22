function check_datatype(datatype){
	if(datatype==undefined){
		console.log('undefined')
	}
	else if(datatype==null){
		console.log('This is null')
	}
	else if(datatype.constructor==Array){
		if(datatype[0].constructor==Object){
			console.log('Array of objects');
			datatype.map((x)=>{
				console.log(x)
			});
		}
		else{
			console.log('Array');
			datatype.map((x)=>{
				console.log(x)
			});
		}
	}
	else if(datatype.constructor==String){
		console.log('String');
		console.log(datatype);
	}
	else if(datatype.constructor==Number){
		if(!isNaN(datatype)){
			console.log('number');
			console.log(datatype);
		}
		else{
			console.log('number type with value NaN')
		}
	}
	else if(datatype.constructor==Boolean){
		console.log('Boolean');
		datatype.map((x)=>{
			console.log(x)
		});
	}
	else if(datatype.constructor==Object){
		console.log('Object');
		datatype.map((x)=>{
			console.log(x)
		});
	}
	else if(datatype.constructor==Function){
		console.log('Function')
	}
	
}
check_datatype([{a:1},{b:2}]);
check_datatype([1,2,3,4]);
check_datatype(NaN);
var b=function foo(){var a=5}
check_datatype(b);
