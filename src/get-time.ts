const getTimeLeft = (countDownDate: number | string | Date) => {
  let startTimestamp: number

  if (typeof countDownDate === 'string') {
    startTimestamp = new Date(countDownDate).getTime()
  } else if (countDownDate instanceof Date) {
    startTimestamp = countDownDate.getTime()
  } else {
    startTimestamp = Number(countDownDate)
  }

  const total = Math.round(
    parseFloat((Math.max(0, startTimestamp - Date.now()) / 1000).toFixed(0)) *
      1000
  )

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
    milliseconds: Number(((seconds % 1) * 1000).toFixed()),
    completed: total <= 0,
  }
}

export default getTimeLeft
