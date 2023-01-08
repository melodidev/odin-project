function fibs(num, arr = [0]) {
  if (num < 1) return false;
  if (num == 1) return arr;

  if (arr.length == 1) {
    arr.push(1);
  } else {
    let index = arr.length - 1;
    arr.push(arr[index] + arr[index - 1]);
  }

  return fibs(num - 1, arr);
}

console.log(fibs(8));