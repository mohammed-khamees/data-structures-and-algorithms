function reverseArr(list) {
  let arr = [];
  for (let index = 0; index < list.length; index++) {
    arr[index] = list[list.length - index - 1];
  }
  return arr;
}


