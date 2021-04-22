import { Component } from 'react';
import './CalendarMonth.scss';

type CalendarMonthProps = {
  onClick: any,
  day: number,
  month: number,
  year: number,
  monthStr: string,
  isCurrent: boolean,
  isSelected: boolean,
}
class CalendarMonth extends Component<CalendarMonthProps> {
  render() {
    let setClass = "calendarMonth";
    setClass += this.props.isCurrent ? " currentMonth" : "";

    let setWrapperClass = "CalendarMonthWrapper";
    setWrapperClass += this.props.isSelected ? " selectedMonth" : "";
    return(
      <div className={setWrapperClass}>
        <div
          className={setClass}
          onClick={this.props.onClick}
          data-day={this.props.day}
          data-month={this.props.month}
          data-year={this.props.year}
        >
          {this.props.monthStr}
        </div>
      </div>
    )
  }
}

export default CalendarMonth;
