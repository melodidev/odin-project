function merge(arr1, arr2) {
  let newArr = [];

  while (arr1.length && arr2.length) {
    if ( arr1[0] <= arr2[0] ) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }

  if (arr2.length ) {
    arr2.forEach(el => newArr.push(el));
  }
  if (arr1.length ) {
    arr1.forEach(el => newArr.push(el));
  }

  return newArr;
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;

  if (arr.length == 2) {
    if (arr[0] < arr[1]) {
      return arr;
    } else {
      return [arr[1], arr[0]];
    }
  }

  let mid = arr.length / 2;
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return merge(leftArr, rightArr);
}

let array = [6, 1, 8, 2, 3, 5, 4, 7];
console.log(mergeSort(array));
