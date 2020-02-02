import React, { Component} from 'react';
import { Icon  } from 'antd';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar fullAnchoVW deepskyblue">
        <p>Navbar</p>
        <ul className="lista-navbar">
          <li className="lista-navbar-item lista-navbar-item-active">
            <Icon type="home" />
          </li>
          <li className="lista-navbar-item">
            <Icon type="message" />
          </li>
          <li className="lista-navbar-item">
            <Icon type="team" />
          </li>
          <li className="lista-navbar-item">
            <Icon type="user" />
          </li>
          <li className="lista-navbar-item">
            <Icon type="environment" />
          </li>
        </ul>
      </div>
  )}
}