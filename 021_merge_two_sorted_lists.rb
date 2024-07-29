# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    new_lists = ListNode.new(-1)

    prev = new_lists

    while list1 != nil && list2 != nil 
        if list1.val <= list2.val 
            prev.next = list1
            list1 = list1.next
        else 
            prev.next = list2
            list2 = list2.next
        end
        prev = prev.next
    end

    prev.next = list1 == nil ? list2 : list1
    new_lists.next
end
