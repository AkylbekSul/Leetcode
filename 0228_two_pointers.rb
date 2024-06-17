# @param {Integer[]} nums
# @return {String[]}
def summary_ranges(nums)
    array = []
    p1 = 0
    p2 = 0

    nums.each_with_index do |num, i| 
        if num + 1 == nums[i + 1]
            p2 += 1
        else
            if p1 != p2
                array << "#{nums[p1]}->#{nums[i]}"
            else 
                array << "#{nums[i]}"
            end
            p1 = p2 += 1
        end
    end
    return array
end
