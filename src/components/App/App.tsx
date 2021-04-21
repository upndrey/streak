import { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    const {children} = this.props;
    return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
  }
}

export default App;
