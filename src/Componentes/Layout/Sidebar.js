import React, { Component} from 'react';
import { Input,Alert } from 'antd';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
		items:[],
//		items:[{},{},{},{},{},{},{},],
		};
  }
  render() {
    return (
			<div className="sidebar fondo-grisClaro fullAltoVH">
				<p>Sidebar</p>
				{this.state.items.length>0?
					this.state.items.map(()=><div className="card white">Hola</div>)
					:
					<Alert
						message="Informational Notes"
						description="Additional description and information about copywriting."
						type="info"
						showIcon
					/>}
			</div>
		)
	}
}