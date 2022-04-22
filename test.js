function evenNumers(nums) {
  const result = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] / 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenNumers);
