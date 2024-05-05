function merge(leftArray, rightArray) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        mergedArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {

        mergedArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
  

    return mergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
  }
  
  function mergeSort(array) {

    if (array.length === 1) {
      return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middleIndex);
    const rightHalf = array.slice(middleIndex);
  

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
  }
  

  const numbers = [6, 5, 3, 1, 8, 7, 2, 4];

  const sortedNumbers = mergeSort(numbers);

  console.log(sortedNumbers);
  