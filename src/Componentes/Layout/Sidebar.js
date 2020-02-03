import React, { Component} from 'react';
import { Input,Alert,Button,Badge } from 'antd';

const { Search } = Input;

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
//		items:[],
		items:[{},{},{},{},{},{},{},],
		};
  }
  render() {
    return (
			<div className="sidebar fondo-grisClaro fullAltoVH">
				<div className="navbar-sidebar">
					<div className="flex-row">
					<Badge count={2}>
						<Button shape="circle" icon="fire" />
					</Badge>
					<div style={{width:'20px'}}/>
					<Badge count={7}>
						<Button shape="circle" icon="notification" />
					</Badge>
					</div>
					<Search
						placeholder="input search text"
						onSearch={value => console.log(value)}
						style={{ width: 200 }}
					/>
				</div>
				<div>
					{this.state.items.length>0?
						this.state.items.map(()=><div className="card white">Hola</div>)
						:
						<Alert
							message="Informational Notes"
							description="Additional description and information about copywriting."
							type="info"
							showIcon
						/>
					}
				</div>
			</div>
		)
	}
}