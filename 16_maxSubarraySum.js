function maxSubarraySum(nums, length) {
  if (nums.length < length) return null;
  let sum = 0;
  let temp = 0;
  let start = 0;
  let end = length;

  for (let i = 0; i < length; i++) {
    sum += nums[i];
  }
  temp = sum;
  while (end <= nums.length) {
    if (sum > temp) temp = sum;
    sum = sum - nums[start] + nums[end];
    // console.log(nums[start],nums[end])
    start++;
    end++;
  }
  return temp;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
