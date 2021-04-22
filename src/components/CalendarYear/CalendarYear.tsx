import { Component } from 'react';
import './CalendarYear.scss';

type CalendarYearProps = {
  onClick: any,
  day: number,
  month: number,
  year: number,
  isCurrent: boolean,
  isSelected: boolean,
}
class CalendarYear extends Component<CalendarYearProps> {
  render() {
    let setClass = "CalendarYear";
    setClass += this.props.isCurrent ? " currentYear" : "";

    let setWrapperClass = "CalendarYearWrapper";
    setWrapperClass += this.props.isSelected ? " selectedYear" : "";
    return(
      <div className={setWrapperClass}>
        <div
          className={setClass}
          onClick={this.props.onClick}
          data-day={this.props.day}
          data-month={this.props.month}
          data-year={this.props.year}
        >
          {this.props.year}
        </div>
      </div>
    )
  }
}

export default CalendarYear;
