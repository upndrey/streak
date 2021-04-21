import { Component } from 'react';
import './CalendarCell.scss';

type CalendarCellProps = {
  onClick: any,
  day: number,
  month: number,
  year: number,
  isCurrent: boolean,
  isSelected: boolean,
}

class CalendarCell extends Component<CalendarCellProps> {
  render() {
    let setClass = "calendarCell";
    setClass += this.props.isCurrent ? " isCurrent" : "";

    let setWrapperClass = "calendarWrapperCell";
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

export default CalendarCell;
