import { Component } from 'react';
import './CalendarLine.scss';
import CalendarCell from '../CalendarCell/CalendarCell';

const LINE_SIZE = 7;


const TODAY = new Date();
const CURRENT_DAY = TODAY.getDate();
const CURRENT_MONTH = TODAY.getMonth();
const CURRENT_YEAR = TODAY.getFullYear();
const CURRENT_YEAR_LEAP = (
  CURRENT_YEAR % 400 !== 0 &&
  CURRENT_YEAR % 4 === 0 &&
  CURRENT_YEAR % 100 === 0
) ? true : false;

const MONTH_LAST_DAYS = [
  31, CURRENT_YEAR_LEAP ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

class CalendarLine extends Component {
  state = {
    selectedDay: CURRENT_DAY,
    selectedMonth: CURRENT_MONTH,
    selectedYear: CURRENT_YEAR,
  }

  handleClickCalendarCell = (e: any) => {

    this.setState({
      selectedDay: +e.target.dataset.day,
      selectedMonth: +e.target.dataset.month,
      selectedYear: +e.target.dataset.year,
    });
  }


  render() {
    const { selectedDay, selectedMonth, selectedYear } = this.state;

    let nextDay = selectedDay - Math.floor(LINE_SIZE/2);
    let nextMonth = selectedMonth;
    let nextYear = selectedYear;

    if(nextDay <= 0) {
      nextMonth--;
      if(nextMonth < 0) {
        nextYear--;
        nextMonth = 11;
      }
      nextDay = MONTH_LAST_DAYS[nextMonth] + nextDay;
    }

    let lineArr = new Array(LINE_SIZE)
      .fill({})
      .map((elem) => {
        if(nextDay > MONTH_LAST_DAYS[nextMonth] && nextMonth === 11) {
          nextDay = 1;
          nextMonth = 0;
          nextYear++;
        }
        if(nextDay > MONTH_LAST_DAYS[nextMonth]) {
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
    <div className="calendarLine">
      {
        lineArr.map((elem, id) => {
          return (
            <CalendarCell
              onClick={this.handleClickCalendarCell.bind(this)}
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
  );
  }
}

export default CalendarLine;
