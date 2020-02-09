import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'
import { Icon, Switch  } from 'antd';

export default class Navbar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={this.props.darkMode?"navbar fullAnchoVW negroProfundo":"navbar fullAnchoVW marmolDos"}>
        <ul className="lista-navbar">
          <li className="lista-navbar-item lista-navbar-item-active .rosado">
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
        <Switch
          checkedChildren={<FontAwesomeIcon icon={faSun} />}
          unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
          onChange={()=>{this.props.tougleDarkMode()}}
        />
      </div>
  )}
}