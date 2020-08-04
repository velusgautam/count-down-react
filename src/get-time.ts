interface Time {
  completed: boolean
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
  total: number
}

/**
 * Get Time Left
 * @param {Date|string|number} countDownDate
 */
const getTimeLeft = (countDownDate: number | string | Date): Time => {
  let startTimestamp: number
  // If string Date converting to milliseconds
  if (typeof countDownDate === 'string') {
    startTimestamp = new Date(countDownDate).getTime()
  } else if (countDownDate instanceof Date) {
    // getting milliseconds from Date object
    startTimestamp = countDownDate.getTime()
  } else {
    // setting the date in milliseconds
    startTimestamp = Number(countDownDate)
  }

  // getting the date into total seconds
  const total = Math.round(
    parseFloat((Math.max(0, startTimestamp - Date.now()) / 1000).toFixed(0)) *
      1000
  )

  // if total is NaN then the time format has error
  if (isNaN(total)) {
    throw new TypeError('Error in date format passed to Count Down Component')
  }
  const seconds = total / 1000

  return {
    total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor((seconds / 3600) % 24),
    minutes: Math.floor((seconds / 60) % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: total,
    completed: total <= 0,
  }
}

export default getTimeLeft
