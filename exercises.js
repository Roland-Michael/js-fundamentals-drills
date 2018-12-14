/* #doubleArray #1
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(x){
  var doubled = [];
  for(var i = 0; i < x.length; i++){
    doubled.push(x[i] *2);
  }
  return doubled;
}



/* #sumArrays #2
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function(x , y){
  //Otion 1: 
var sumX = 0;
for(i=0;i<x.length;i++){
  sumX += x[i];
}
var sumY = 0;
for(i=0;i<y.length;i++){
  sumY += y[i];
}
var totalSum = sumX + sumY;
return totalSum;

//Option 2: WORKS
//  var bothArrays = x.concat(y);
//   console.log(bothArrays);
//   var sumTotal = 0;
//   for(i=0; i < bothArrays.length; i++){
//     sumTotal += bothArrays[i];
//}
  return sumTotal;
} 

/* #stringCount #3
 *
 * Takes in a string and returns the length of the string.
 *85
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str){
  var strLength = str.length;
  return strLength;
}


/* #arrayLength #4
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr){
var arrLength = arr.length;
return arrLength;
}

/* #countAll #5
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arrSum){
  var totalSum = 0;
  for(i=0;i<arrSum.length;i++){
    totalSum += arrSum[i];
  }
  return totalSum;
}

/* #countStrings #6
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arrStrings){
  var NewArray = []; // creating solution array with one number of 0 (leaving blank wasn't working, maybe not recognizing that they are numbers)
  for(i=0; i<arrStrings.length; i++){
    NewArray[i] = arrStrings[i].length;
  }
  return NewArray;
}

/* #countAllStrings #7
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(arrStrings){
  var sumOfStrings = 0;
  for(i=0;i<arrStrings.length;i++){
    sumOfStrings += arrStrings[i].length;
  }
  return sumOfStrings;
}

/* #convertToArray #8
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
// NOT WORKING
// var convertToArray = function(object1){
//   return Object.values(object1);
// }
function convertToArray(object){
  return Object.values(object);
}

/* #objectSize #9
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(object){
  return Object.keys(object).length;
}

/* #createZeroFilledArray #10
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(number){
 var array1 = [];
 for(var i = 0; i < number; i++){
   array1.push(0);
 }
 return array1;
}

/* #poppedArray #11
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(array){
  array.pop();
return array;

  //FIRST TRY
  // var newLengthOfArray = array1.length - 1;
  // var array2 = splice.array1(0, newLengthOfArray);
  // return array2;

}

/* #splitString #12
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(string){
 return string.split("");
}

/* #lengthOfLast #13
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(string){
  var answer = string.splice('');
  return answer.length;
}

/* #sumBelowTen #14
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(array){
  var arrayUnderTen = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] < 10){
      arrayUnderTen.push(array[i]);
    }else{
      ;
    }
  }
  var sumOfArray = 0;
  for(var i = 0; i < arrayUnderTen.length; i++){
    sumOfArray += arrayUnderTen[i];
  }
  return sumOfArray;
}

/* #moreThanTenLetters #15
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i].length > 10){
      newArray.push(array[i]);
    }
  }
  return newArray.length;
}

/* #multiplyAll #16
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(array){
  var product = 1;
for(var i = 0; i < array.length; i++){
  product = product * array[i];
}
return product;
}

/* #sumAllPositive #17
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] > 0){
      newArray.push(array[i]);
    }
  }
  var sumOfArray = 0;
  for(var i = 0; i < newArray.length; i++){
    sumOfArray += newArray[i];
  }
  return sumOfArray;
}


/* #stringCountBelowThree #18
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i].length <= 3){
      newArray.push(array[i]);
    }
  }
  return newArray.length;
}

/* #countObjects #19
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(array){
  return array.length;
}

/* #getObjectKeys #20
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(object){
  return Object.keys(object);
}

/* #getObjectValues #21
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(object){
  return Object.values(object);
}

/* #makeObject #22
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
  var object = { };
  object[key] = value
  
  // object.key = value;
  return object;
}


/* #makeObjectReverse #23
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key){
  var object = { };
  object[key] = value
  // object.value = key;
  return object; 
}

/* #tupleToObject #24
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(array){
  var object = {};
  var key = array[0];
  var value = array[1];
  object[key]= value
  return object;
}

/* #tupleToObjectReverse #25
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(array){
  var object = {};
  var value = array[0];
  var key = array[1];
  object[key]= value
  return object;
}

/* #strToKeys #26
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(array){
  var object = {};
  for(var i = 0; i <array.length; i++){
    object[array[i]] = 0;
  }
  return object;
}

/* #getValues #27
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(object){
  var array = Object.values(object);
  return array;
}

/* #getKeys #28
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(object){
  var keys = Object.keys(object);
  return keys;
}

/* #objectToArray #29
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(object){
  var array = [];
  for(var key in object){ // 'key' acts similar to 'i' in for loop
    array.push([key, object[key]])
  }
  return array;
}
//   for( var i = 0; i < object.length; i++)
//   array.push([Object.keys(object[i]), Object.values(object[i])]);
//   return array;
// }

/* #arrayToObject #30
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(array){
  var object = {};
  for(var i = 0; i <array.length; i++){
    object[array[i]] = false;
  }
  return object;
}

/* #arraysToObject #31
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arrayKeys, arrayValues){
  var object = {};
  for(var i = 0; i <arrayKeys.length; i++){
    object[arrayKeys[i]] = arrayValues[i];
  }
  return object;
}

/* #objectsToTuples #32
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(object1, object2){
  var array = [];
  for(var key in object1){ // 'key' acts similar to 'i' in for loop
    array.push([key, object1[key]])
  }
  for(var key in object2){ // 'key' acts similar to 'i' in for loop
  array.push([key, object2[key]])
}
return array;
}

/* #mapArrayValues #33
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(array){
  var object = {};
  for(var i = 0; i <array.length; i++){
    object[array[i]] = true;
}
  return object;
}

/* #mapStringCounts #34
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(array){
  var object = {};
  for(var i = 0; i <array.length; i++){
    if(array[i].length >= 5){
      object[array[i]] = true;
    }else{
      object[array[i]] = false;
    }
}
  return object;
}

/* #arrayToObjectNums #35
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(array){
  var object = {};
  for(var i = 0; i < array.length; i++){
    object[array[i]] = true;
  }
  return object;
}

/* #stringToKeys #36
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(string){
  var object = {};
  for(var i = 0; i < string.length; i++){
    object[string.charAt(i)] = true;
    //cleaner way for viewing (CREATE MORE VARIABLES!!!)
  //var stringChar = string.charAt(i);
  //object[stringChar] = true;
}
return object;
}

/* #charCountMap #37
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(array){
  var object = {};
  for(var i = 0; i < array.length; i++){
    object[array[i]] = array[i].length;
  }
  return object;
}

/* #frequencyMap #38
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(array){
  array.sort();
  var objectKeys = [];
  var occurences = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] !== array[i-1]){
      objectKeys.push(array[i]);
      occurences.push(1);
    }else{
      occurences[occurences.length-1]++;
    }
  }
  var object = {};
  for(var i = 0; i < objectKeys.length; i++){
    object[objectKeys[i]] = occurences[i];
  }
  return object;
}


/* #tupleConvertToObject #39
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(tupleArray){ // [['a',1],['b',2],['c',3]]
var object = {};
for(var i = 0; i < array.length; i++){
  object[array[i]] = array[i].length;
}
return object;
} 
// {
//   'a': 1,
//   'b': 2,
//   'c': 3
// }


module.exports = { 
  // set these to themselves: ex. doubleArray = doubleArray,
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
