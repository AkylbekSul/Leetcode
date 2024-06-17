# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
    map = {}

    nums.each_with_index do |num, i|
        if map.key?(num) 
            return true if (map[num] - i).abs <= k
        end
        map[num] = i
    end
    false
end
