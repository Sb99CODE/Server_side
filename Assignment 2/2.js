function findItemByIndex(data, targetItem) {
    for (let currentIndex = 0; currentIndex < data.length; currentIndex++) {
      if (data[currentIndex] === targetItem) {
        return currentIndex;
      }
    }
    return -1;
  }
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const searchValue = 5;
  console.log(findItemByIndex(numbers, searchValue));
  