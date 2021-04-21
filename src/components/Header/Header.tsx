import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <ul>
        <li><NavLink exact to='/'>Главная</NavLink></li>
        <li><NavLink to='/about'>О нас</NavLink></li>
        <li><NavLink to='/createstrick'>Создать Стрик</NavLink></li>
      </ul>
  );
  }
}

export default Header;
