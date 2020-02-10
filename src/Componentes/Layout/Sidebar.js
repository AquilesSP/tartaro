import React, { Component} from 'react';
import TapsAndMore from '../Escritorio/HomePage/TapsAndMore';
import Mensajes from '../Escritorio/Mensajes/Mensajes';
import Grupos from '../Escritorio/Grupos/Grupos';
import Perfil from '../Escritorio/Perfil/Perfil';
import Sitios from '../Escritorio/Sitios/Sitios';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
//		items:[],
		items:[{},],
		};
  }
  render() {
		if(this.props.sectionSelected === 'homePage'){
			return <TapsAndMore darkMode={this.props.darkMode}/>
		}else if(this.props.sectionSelected === 'mensajes'){
			return <Mensajes darkMode={this.props.darkMode}/>
		}else if(this.props.sectionSelected === 'grupos'){
			return <Grupos darkMode={this.props.darkMode}/>
		}else if(this.props.sectionSelected === 'perfil'){
			return <Perfil darkMode={this.props.darkMode}/>
		}else if(this.props.sectionSelected === 'sitios'){
			return <Sitios darkMode={this.props.darkMode}/>
		}else{
			return <div>Algo salio mal.</div>
		}
	}
}