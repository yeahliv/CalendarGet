# calendar-get

一个仅获取月数据或周数据的类，适用于课程表或月计划表等项目。

A class that retrieves only monthly or weekly data, suitable for items such as class schedules or monthly schedules.

## 安装 install

```bash
npm i calendar-get --save
```

## 用法 use

### 基本使用
`new CalendarGet(optinos)` options 可不传默认是 `{date: new Date, type: 'month', start: 1}`。

### 参数
`options.date` 默认值是 `new Date()`。
`options.type` 默认值是 `'month'`，支持传 `'month'` 和 `'week'`，传入其他值报错。
`options.start` 默认值是 `1`，支持传 `1` 和 `0`，传入其他值报错。

### options.start
当 `options.start` 值是 `1` 时，按照（周一-周二-周三-周四-周五-周六-周日）的规则生成数据。
当 `options.start` 值是 `0` 时，按照（周日-周一-周二-周三-周四-周五-周六）的规则生成数据。
`options.start` 默认值是 `1`。

### CalendarGet 实例
```js
// type 为 'month' 的实例
calendar.monthData // 当月所有天数数据
calendar.weekData // 当月所有天数数据
calendar.monthData42 // 6*7 适用于 42 天显示方式的月历数据
calendar.mYear // 年份
calendar.mMonth // 月份
calendar.mDate // 日期
calendar.mDay // 星期
...省略
```

### 示例 example

月 month
```js
let calendar = new CalendarGet({ type: 'month', start: 1})
console.log(calendar.monthData)
// [
//   {
//     date: '2021-11-01',
//     mYear: 2021,
//     mMonth: 10,
//     mDate: 1
//     mDay: 1
//   },
//   ...
//   {
//     date: '2021-11-30',
//     mYear: 2021,
//     mMonth: 10,
//     mDate: 30
//     mDay: 2
//   }
// ]
console.log(calendar.monthData42)
// [
//   {
//     date: '2021-11-01',
//     mYear: 2021,
//     mMonth: 10,
//     mDate: 1
//     mDay: 1
//   },
//   ...
//   {
//     date: '2021-11-30',
//     mYear: 2021,
//     mMonth: 10,
//     mDate: 30
//     mDay: 2
//   }
//   ...
// ]
```

周 week
```js
let calendar = new CalendarGet({ type: 'week', start: 1})
console.log(calendar.weekData)
// [
//   {
//     date: '2021-11-15',
//     mYear: 2021,
//     mMonth: 10,
//     mDate: 15
//     mDay: 1
//   },
//   ...
//   {
//     date: '2021-11-21',
//     mYear: 2021,
//     mMonth: 10,
//     mDate: 21
//     mDay: 0
//   }
// ]
```