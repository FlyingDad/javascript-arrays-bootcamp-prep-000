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
  array.unshift(val);
  return array;
}

function addElementToEndOfArray(array, val){
  var newArr = array.slice(0);
	newArr.push(val);
	return newArr;
} 

function destructivelyAddElementToEndOfArray(array, val){
  array.push(val);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}