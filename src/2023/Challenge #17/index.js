function optimizeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals
  }

  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0])

  let mergedIntervals = [intervals[0]]

  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i]
    let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1]

    if (currentInterval[0] <= lastMergedInterval[1]) {
      // Overlapping intervals, merge them
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      )
    } else {
      // Non-overlapping interval, add it to the result
      mergedIntervals.push(currentInterval)
    }
  }

  return mergedIntervals
}

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]
