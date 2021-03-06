import format from 'date-fns/format'

export const isDate = (date) => {
  return Object.prototype.toString.call(date) === '[object Date]'
}

export const formatDate = (date) => {
  if (!date) {
    return ''
  }

  return format(date, 'MMMM Do, YYYY')
}

export const formatDateTime = (date) => {
  if (!isDate(date)) {
    return ''
  }

  return format(date, 'MMMM Do, YYYY h:mm A')
}

export const isSameDay = (date1, date2) => {
  if (!isDate(date1) || !isDate(date2)) {
    return false
  }

  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}
