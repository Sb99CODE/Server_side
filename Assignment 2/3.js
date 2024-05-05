function swapValues(data, indexA, indexB) {
    const temporaryValue = data[indexA];
    data[indexA] = data[indexB];
    data[indexB] = temporaryValue;
  }
  

  function partitionArray(data, lowIndex, highIndex) {

    const pivotIndex = lowIndex;
    let leftIndex = lowIndex;
    let rightIndex = highIndex;
  
   
    while (leftIndex < rightIndex) {
     
      while (leftIndex < highIndex && data[leftIndex] <= data[pivotIndex]) {
        leftIndex++;
      }
    
      while (rightIndex > lowIndex && data[rightIndex] > data[pivotIndex]) {
        rightIndex--;
      }
    
      if (leftIndex < rightIndex) {
        swapValues(data, leftIndex, rightIndex);
      }
    }
   
    swapValues(data, pivotIndex, rightIndex);
  
  
    return rightIndex;
  }

  function quickSort(data, lowIndex, highIndex) {
    if (lowIndex < highIndex) {

      const pivotIndex = partitionArray(data, lowIndex, highIndex);
  

      quickSort(data, lowIndex, pivotIndex - 1);
      quickSort(data, pivotIndex + 1, highIndex);
    }
  }
  
  const numbers = [10, 9, 7, 6, 5, 2, 1];

  quickSort(numbers, 0, numbers.length - 1);

  console.log(numbers);
  