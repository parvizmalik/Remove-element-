



from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        index = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[index] = nums[i]
                index += 1
        print(nums)
        return index
        
solution = Solution()
result = solution.removeElement([1,2,3,4], 4)
print(result)
