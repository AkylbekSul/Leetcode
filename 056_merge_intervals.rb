# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
    non_overlapping = [];
    intervals.sort_by! do |interval|
        interval[0]
    end

    intervals.each do |interval| 
        if non_overlapping.empty? || non_overlapping.last[1] < interval[0]
            non_overlapping << interval 
        else
            non_overlapping.last[1] = [non_overlapping.last[1], interval[1]].max
        end
    end
    non_overlapping
end
