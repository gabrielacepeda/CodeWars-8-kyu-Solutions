/**
  Details:
 Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
 */

function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  var sum = 0, count = 0;
  input.forEach(function (el) { if (el > 0) count++; else sum += el });
  return [count, sum];
}