var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, val){
	return ([val, ...array]);
}

function addElementToBeginningOfArray(array, val){
  var newArr = array.slice(0);
	newArr.unshift(val);
	return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, val){
  return array.unshift(val);
}
