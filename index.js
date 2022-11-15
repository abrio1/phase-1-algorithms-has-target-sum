// example array [19, 4, 22, 10] 27
function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
  //for the current num, identify a complement that adds to the target (complement = target - current num)
  const complement = target - array[i]
  //iterate through the rest of the array
  for (let j = i + 1; j <array.length; j++) {
  //check if any number is out complement
  //is so, return true
  if (array[j] === complement) return true;
    }
  }
  //if I reach the end of the array, return false
return false;
}

// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}
/* 
  Write the Big O time complexity of your function here:
  Runtime: O(n^2) pronounced O of n squared
  Space: O(n) o of n space complexity
*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25)
  iterate through each number in the array
  for the current num, identify a complement that adds to the target (complement = target - current num)
    check if any number is out complement
    is fo, return true

  if I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
