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
          <li className={this.props.sectionSelected==='homePage'?"lista-navbar-item lista-navbar-item-active":"lista-navbar-item"} onClick={()=>{this.props.changeSection('homePage')}}>
            <Icon type="home" />
          </li>
          <li className={this.props.sectionSelected==='mensajes'?"lista-navbar-item lista-navbar-item-active":"lista-navbar-item"} onClick={()=>{this.props.changeSection('mensajes')}}>
            <Icon type="message" />
          </li>
          <li className={this.props.sectionSelected==='grupos'?"lista-navbar-item lista-navbar-item-active":"lista-navbar-item"} onClick={()=>{this.props.changeSection('grupos')}}>
            <Icon type="team" />
          </li>
          <li className={this.props.sectionSelected==='perfil'?"lista-navbar-item lista-navbar-item-active":"lista-navbar-item"} onClick={()=>{this.props.changeSection('perfil')}}>
            <Icon type="user" />
          </li>
          <li className={this.props.sectionSelected==='sitios'?"lista-navbar-item lista-navbar-item-active":"lista-navbar-item"} onClick={()=>{this.props.changeSection('sitios')}}>
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