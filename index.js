class CalendarGet {
  constructor(options = { date: new Date(), type: 'month', start: 1 }) {
    let { date, type, start } = options

    if (!date instanceof Date && date) {
      throw Error(`The 'date' argument must be an instance of Date`)
    }

    date = date ? date : new Date()
    type = type ? type : 'month'
    start = start ? start : 1

    if (start === 1) {
      this.weekArr = [1, 2, 3, 4, 5, 6, 0]
    } else if (start === 0) {
      this.weekArr = [0, 1, 2, 3, 4, 5, 6]
    } else {
      throw Error(`The 'start' argument must be either 1 or 0`)
    }

    if (type === 'month') {
      this.createMonthData(date)
    } else if (type === 'week') {
      this.createWeekData(date)
    } else {
      throw Error(`The 'start' argument must be either 'month' or 'week'`)
    }
  }

  // 创建月数据
  createMonthData(date) {
    let frontNum = 0
    let behindNum = 0
    this.mYear = date.getFullYear()
    this.mMonth = date.getMonth()
    this.fDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    this.daysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    this.monthData = []
    this.monthData42 = []

    for (let i = 1, mDay = this.fDay; i < this.daysOfMonth + 1; i++, mDay++) {
      let year = this.mYear
      let month = (this.mMonth + 1) < 10 ? `0${this.mMonth + 1}` : this.mMonth + 1
      let date = i < 10 ? `0${i}` : i

      if (mDay === 7) mDay = 0

      this.monthData.push({
        date: `${year}-${month}-${date}`,
        mYear: this.mYear,
        mMonth: this.mMonth,
        mDate: i,
        mDay
      })

      this.monthData42.push({
        date: `${year}-${month}-${date}`,
        mYear: this.mYear,
        mMonth: this.mMonth,
        mDate: i,
        mDay
      })
    }

    frontNum = this.weekArr.indexOf(this.fDay)

    for (let i = 0; i < frontNum; i++) {
      let prevDate = new Date(this.mYear, this.mMonth, -(i))
      let mYear = prevDate.getFullYear()
      let mMonth = prevDate.getMonth()
      let mDate = prevDate.getDate()
      let mDay = prevDate.getDay()
      let year = mYear
      let month = (mMonth + 1) < 10 ? `0${mMonth + 1}` : mMonth + 1
      let date = mDate < 10 ? `0${mDate}` : mDate
      this.monthData42.unshift({
        date: `${year}-${month}-${date}`,
        mYear: mYear,
        mMonth: mMonth,
        mDate: mDate,
        mDay: mDay
      })
    }

    behindNum = 42 - this.monthData42.length

    for (let i = 1; i < behindNum + 1; i++) {
      let nextDate = new Date(this.mYear, this.mMonth, this.daysOfMonth + i)
      let mYear = nextDate.getFullYear()
      let mMonth = nextDate.getMonth()
      let mDate = nextDate.getDate()
      let mDay = nextDate.getDay()
      let year = mYear
      let month = (mMonth + 1) < 10 ? `0${mMonth + 1}` : mMonth + 1
      let date = mDate < 10 ? `0${mDate}` : mDate
      this.monthData42.push({
        date: `${year}-${month}-${date}`,
        mYear: mYear,
        mMonth: mMonth,
        mDate: mDate,
        mDay: mDay
      })
    }
  }

  // 上一月
  prevMonth() {
    let date = new Date(this.mYear, this.mMonth, 0)
    this.createMonthData(date)
    return this
  }

  // 下一月
  nextMonth() {
    let date = new Date(this.mYear, this.mMonth + 1, 1)
    this.createMonthData(date)
    return this
  }

  // 创建周数据
  createWeekData(date) {
    let frontNum = 0
    let fDate = {}
    this.weekData = []
    this.mYear = date.getFullYear()
    this.mMonth = date.getMonth()
    this.mDate = date.getDate()
    this.mDay = date.getDay()

    frontNum = this.weekArr.indexOf(date.getDay())
    fDate = new Date(date.getTime() - 24 * 60 * 60 * 1000 * frontNum)
    console.log(fDate);

    for (let i = 0; i < 7; i++) {
      let mYear = fDate.getFullYear()
      let mMonth = fDate.getMonth()
      let mDate = fDate.getDate()
      let mDay = fDate.getDay()
      let year = mYear
      let month = (mMonth + 1) < 10 ? `0${mMonth + 1}` : mMonth + 1
      let date = mDate < 10 ? `0${mDate}` : mDate

      this.weekData.push({
        date: `${year}-${month}-${date}`,
        mYear: mYear,
        mMonth: mMonth,
        mDate: mDate,
        mDay: mDay
      })

      fDate = new Date(fDate.getTime() + 24 * 60 * 60 * 1000)
    }
  }

  // 上一周
  prevWeek() {
    let date = new Date(this.mYear, this.mMonth, this.mDate - 1)
    this.createWeekData(date)
    return this
  }

  // 下一周
  nextWeek() {
    let date = new Date(this.mYear, this.mMonth, this.mDate + 1)
    this.createWeekData(date)
    return this
  }
}