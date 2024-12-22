export function getMonth() {
  let month = ''

  switch(new Date().getMonth()) {
    case 0:
      return month = 'JANUARY'

    case 1:
      return month = 'FEBRUARY'

    case 2:
      return month = 'MARCH'

    case 3:
      return month = 'APRIL'

    case 4:
      return  month = 'MAY'

    case 5:
      return month = 'JUNE'

    case 6:
      return month = 'JULY'

    case 7:
      return month = 'AUGUST'

    case 8:
      return month = 'SEPTEMBER'

    case 9:
      return month = 'OCTOBER'

    case 10:
      return month = 'NOVEMBER'

    case 11:
      return month = 'DECEMBER'
  }
}