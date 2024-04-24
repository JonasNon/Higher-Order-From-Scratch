

//.map 

let testArr = [1,2,3,4,5]

const mappingFunc = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = callBack(array[i])
  }
  return array
}


const mapTest = mappingFunc(testArr, function(element) {
  //do something to item
  element += 1
  return element
}); 

console.log(mapTest)






//.reduce 

let foodArr = [
  {
    item: "pizza",
    price: 10
  },{
    item: "soda",
    price: 5
  },{
    item: "shake",
    price: 5
  },{
    item: "bread",
    price: 5
  }
  
]

const reducingFunc = (array, callBack, initialValue) => {
  let accumulator = initialValue
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    accumulator = callBack(currentValue.price, accumulator)
  }
  return accumulator
}


const reduceTest = reducingFunc(foodArr, function(element, accumulator) {
  return element + accumulator
}, 0); 

console.log(reduceTest)









//.filter 


let toFilter = [1,2,3,4,5,6,7,8]

const filteringFunc = (array, callBack) => {
  let even = []
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    if (callBack(currentValue)) {
      even.push(currentValue)
    }
  }
  return even
}
  
  
  

const filterTest = filteringFunc(toFilter, function(element) {
  if (element % 2 == 0) {
    return true
  } else {
    return false
  }
}); 

console.log(filterTest)

