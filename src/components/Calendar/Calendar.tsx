import { Component } from 'react';
import './Calendar.scss';
import CalendarDay from '../CalendarDay/CalendarDay';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import CalendarYear from '../CalendarYear/CalendarYear';

const DAYS_COUNT = 7;
const YEARS_COUNT = 15;

const MONTH_LIST = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const TODAY = new Date();
const CURRENT_DAY = TODAY.getDate();
const CURRENT_MONTH = TODAY.getMonth();
const CURRENT_YEAR = TODAY.getFullYear();


class Calendar extends Component {
  state = {
    selectedDay: CURRENT_DAY,
    selectedMonth: CURRENT_MONTH,
    selectedYear: CURRENT_YEAR,
  }


  selectedYearLeap = (year: number) => {
    return (
      year % 400 !== 0 && (year % 4 === 0 || year % 100 === 0)
    ) ? true : false;
  }

  monthLastDays = [
    31, this.selectedYearLeap(this.state.selectedYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  handleClickCalendarDay = (e: any) => {
    this.setState({
      selectedDay: +e.target.dataset.day,
      selectedMonth: +e.target.dataset.month,
      selectedYear: +e.target.dataset.year,
    });
  }

  handleClickCalendarMonth = (e: any) => {
    this.setState({
      selectedDay: this.monthLastDays[+e.target.dataset.month] < +e.target.dataset.day ?
        this.monthLastDays[+e.target.dataset.month] : +e.target.dataset.day,
      selectedMonth: +e.target.dataset.month,
    });
  }

  handleClickCalendarYear = (e: any) => {
    this.monthLastDays[1] = this.selectedYearLeap(+e.target.dataset.year) ? 29 : 28;
    this.setState({
      selectedDay: this.monthLastDays[+e.target.dataset.month] < +e.target.dataset.day ?
        this.monthLastDays[+e.target.dataset.month] : +e.target.dataset.day,
      selectedYear: +e.target.dataset.year,
    });
  }


  render() {
    const { selectedDay, selectedMonth, selectedYear } = this.state;


    let nextDay = selectedDay - Math.floor(DAYS_COUNT/2);
    let nextMonth = selectedMonth;
    let nextYear = selectedYear - Math.floor(YEARS_COUNT/2);

    let yearsArr = new Array(YEARS_COUNT)
      .fill(0)
      .map(() => (nextYear++));

    nextYear = selectedYear;
    if(nextDay <= 0) {
      nextMonth--;
      if(nextMonth < 0) {
        nextYear--;
        nextMonth = 11;
      }
      nextDay = this.monthLastDays[nextMonth] + nextDay;
    }



    let daysArr = new Array(DAYS_COUNT)
      .fill({})
      .map(() => {
        if(nextDay > this.monthLastDays[nextMonth] && nextMonth === 11) {
          nextDay = 1;
          nextMonth = 0;
          nextYear++;
        }
        if(nextDay > this.monthLastDays[nextMonth]) {
          nextDay = 1;
          nextMonth++;
        }

        return {
          'day': nextDay++,
          'month': nextMonth,
          'year': nextYear,
        };
      });


    return (
    <div className="Calendar">
      <div className="CalendarYearsList">
        {
          yearsArr.map((elem, id) => {
            return (
              <CalendarYear
                onClick={this.handleClickCalendarYear.bind(this)}
                key={id}
                day={selectedDay}
                month={selectedMonth}
                year={elem}
                isCurrent={CURRENT_YEAR === elem ? true : false}
                isSelected={selectedYear === elem ? true : false}
              />
            );
          })
        }
      </div>
      <div className="CalendarMonthList">
        {
          MONTH_LIST.map((elem, id) => {
            return (
              <CalendarMonth
                onClick={this.handleClickCalendarMonth.bind(this)}
                key={id}
                day={selectedDay}
                month={id}
                year={selectedYear}
                monthStr={elem}
                isCurrent={CURRENT_MONTH === id && CURRENT_YEAR === selectedYear ? true : false}
                isSelected={selectedMonth === id ? true : false}
              />
            );
          })
        }
      </div>
      <div className="CalendarDaysList">
        {
          daysArr.map((elem, id) => {
            return (
              <CalendarDay
                onClick={this.handleClickCalendarDay.bind(this)}
                key={id}
                day={elem.day}
                month={elem.month}
                year={elem.year}
                isCurrent={CURRENT_DAY === elem.day && CURRENT_MONTH === elem.month && CURRENT_YEAR === elem.year ? true : false}
                isSelected={selectedDay === elem.day ? true : false}
              />
            );
          })
        }
      </div>
    </div>
  );
  }
}

export default Calendar;
