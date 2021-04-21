import { Component } from 'react';
import './Home.scss';
import CalendarLine from '../CalendarLine/CalendarLine';

class Home extends Component {
  render() {
    return (
    <div>
      <CalendarLine />
    </div>
  );
  }
}

export default Home;
