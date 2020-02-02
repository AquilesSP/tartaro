import React, { Component} from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
			items:[{},{},{},{},{},{},{},],
		};
  }
  render() {
    return (
			<div className="sidebar fondo-grisClaro fullAltoVH">
				<p>Sidebar</p>
				{this.state.items.map(()=><div className="card white">Hola</div>)}
			</div>
		)
	}
}