import { Component } from 'react';
import './Home.scss';
import Calendar from '../Calendar/Calendar';

class Home extends Component {
  render() {
    return (
    <div>
      <Calendar />
    </div>
  );
  }
}

export default Home;
