


class Solution {
    removeElement(nums, val) {
        let index = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[index] = nums[i];
                index++;
            }
        }
        return index;
    }
}

const solution = new Solution();
const result = solution.removeElement([1, 2, 3, 4], 4);
console.log(result);  // print the whole nums array
