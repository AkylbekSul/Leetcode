func reverse(nums []int, start int, end int) {
    for start < end {
        temp := nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}

func rotate(nums []int, k int)  {
    n := len(nums)
    k = k % n
    if k == 0 {
        return
    }

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
}
