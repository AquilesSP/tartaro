import React, { Component} from 'react';
import { Icon } from 'antd';

export default class Perfil extends Component {
  constructor(props){
    super(props);
    this.state = {
//		items:[],
		items:[{},],
		};
  }
  render() {
    return (
			<div className={this.props.darkMode?"sidebar fondo-oscuro fullAltoVH":"sidebar fondo-grisClaro fullAltoVH"}>

			</div>
		)
	}
}