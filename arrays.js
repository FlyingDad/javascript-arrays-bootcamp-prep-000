var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, val){
	return ([val, ...array]);
}

function addElementToBeginningOfArray(array, val){
  
  array.unshift(val);
	return array;
}

// function destructivelyAddElementToBeginningOfArray(array, val){
//   return array.unshift(val);
// }
