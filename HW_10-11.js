function rand(max, min, length){
	var result = [],
		resultSorted = [];

	if(typeof max !== 'number') return Math.random();
	if(typeof min !== 'number') return Math.floor(Math.random() * ++max);

	if(min > max) min = [max, max = min][0];                 

	if(!length || typeof length !== 'number') return Math.floor(Math.random() * (max - min + 1)) + min;

		for(var j = 0, random, index; j < length; j++, max--){
		random = Math.floor(Math.random() * (max - min + 1)) + min;

		for(index = j; index && resultSorted[index-1] <= random; index--) random++; 

		result.push(random);
		resultSorted.splice(index, 0, random);
	}

	return result;
}
console.log(rand(1,7,7));

function rand(max, min, length){
	var result = [],
		resultSorted = [];

	if(typeof max !== 'number') return Math.random();
	if(typeof min !== 'number') return Math.floor(Math.random() * ++max);

	if(min > max) min = [max, max = min][0];                 

	if(!length || typeof length !== 'number') return Math.floor(Math.random() * (max - min + 1)) + min;

		for(var j = 0, random, index; j < length; j++, max--){
		random = Math.floor(Math.random() * (max - min + 1)) + min;

		for(index = j; index && resultSorted[index-1] <= random; index--) random++; 

		result.push(random);
		resultSorted.splice(index, 0, random);
	}
  result.sort();
  return result;
  
}
console.log(rand(1,7,7));
