function findMinAndRemove(array){
  let minNum = array[0];
  let minIndex = 0;

  for(let i=0; i < array.length; i++) {
    let currEl = array[i]
    if (currEl < minNum) {
      minNum = currEl
      minIndex = i
    }
  }
  array.splice(minIndex,1)
  
  return minNum
}

function insertionSort(array){
  let sArray = []

  while(array.length !== 0) {
    let newMin = findMinAndRemove(array)
    sArray.push(newMin)
  }

  return sArray;
}
