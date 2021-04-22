import { Component } from 'react';
import './CalendarDay.scss';

type CalendarDayProps = {
  onClick: any,
  day: number,
  month: number,
  year: number,
  isCurrent: boolean,
  isSelected: boolean,
}

class CalendarDay extends Component<CalendarDayProps> {
  render() {
    let setClass = "calendarDay";
    setClass += this.props.isCurrent ? " isCurrent" : "";

    let setWrapperClass = "calendarWrapperDay";
    setWrapperClass += this.props.isSelected ? " isSelected" : "";
    return (
    <div className={setWrapperClass}>
      <div
        className={setClass}
        onClick={this.props.onClick}
        data-day={this.props.day}
        data-month={this.props.month}
        data-year={this.props.year}
      >
        {this.props.day}
      </div>
    </div>
  );
  }
}

export default CalendarDay;
