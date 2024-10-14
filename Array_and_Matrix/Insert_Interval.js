// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.


// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// link - https://leetcode.com/problems/insert-interval/description


//approach: interval merge
//it mentions 'intervals'

//we know for merging technique, we need to remember
//let a (1st interval), b (2nd interval)
//cases: 
//non-overlapping cases:
//'a' and 'b' --> do not overlap
//
//overlapping cases:
//(start time of 'a' < 'b' & end time of 'a' < 'b'), 'b' start time lies within 'a' --> [[4,7], [5,8]] (starts with 'a' & ends with 'b')
//(start time of 'a' < 'b' & end time of 'a' > 'b'), 'b' start time lies within 'a' --> [[4,7], [5,6]] ('a' completely overlaps 'b')
//(start time of 'a' > 'b' & end time of 'a' > 'b'), 'a' start time lies within 'b' --> [[5,8], [4,7]] (starts with 'b' & ends with 'a')
//(start time of 'a' > 'b' & end time of 'a' < 'b'), 'a' start time lies within 'b' --> [[5,6], [4,7]] ('b' completely overlaps 'a')
//
//drawing interval in the number line always helps



//we know there is a overlap when interval('a') end > newInterval('b') start 
//to tackle this however, we will work on the opposite of the above statement
//1st case: if interval('a') start > newInterval('b') end, we know there will not be any overlap
//          so, we will just add newInterval and then the remaining interval and return
//2nd case: if interval('a') end < newInterval('b') start, there is no overlap between those two, but newInterval could still over lap with other interval
//          so, we will just add interval and continue the loop
//3rd case: if interval('a') end > newInterval('b') start there's a overlap
//          so, we will change the newInterval[0] to be the min of start and newInterval[1] to be the max of start

var insert = function(intervals, newInterval) {
    let result = new Array();
    for(let i = 0; i < intervals.length; i++){
        if(newInterval[1] < intervals[i][0]){ //if the newInterval just doesnt over lap and can be added to far left
            result.push(newInterval);
            newInterval = intervals[i];    //since we already pushed the newInterval, we will make the current interval our new interval
        }else if(newInterval[0] > intervals[i][1]){ //if there is no overlap between two, and 
            result.push(intervals[i]);
        }else{
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
    }
    result.push(newInterval); // the newInterval has the largest value and hence we pushed all larger values in this
                              //  and at the end we will push into final array
    
    return result;
};