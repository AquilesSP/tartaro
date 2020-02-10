import React, { Component} from 'react';
import { Input,Button,Badge } from 'antd';

const { Search } = Input;

export default class TapsAndMore extends Component {
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
				<div className="navbar-sidebar">
					<div className="flex-row">
					<Badge dot color="#108ee9">
						<Button shape="circle" icon="fire" />
					</Badge>
					<div style={{width:'20px'}}/>
					<Badge dot color="#108ee9" count={2}>
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
						this.state.items.map(()=>
						<div className="card-fire rosado">
							<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Smiley face" className="card-fire-img"/>
							<div>
								<p className="card-fire-hour">12hs</p>
								<h3 className="card-fire-name">Daniel</h3>
								<p className="card-fire-distance">a 706 mt de distancia</p>
							</div>
						</div>)
						:
						<div className="card-fire marmolFrio">
							<img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Smiley face" className="card-fire-img"/>
							<div>
								<p className="card-fire-hour"></p>
								<h3 className="card-fire-name">Aun sin Taps</h3>
								<p className="card-fire-distance">Nadie envio un tap aun</p>
							</div>
						</div>
					}
					<div className="card-fire marmolFrio">
						<img src="https://randomuser.me/api/portraits/women/85.jpg" alt="Smiley face" className="card-fire-img"/>
						<div>
							<p className="card-fire-hour"></p>
							<h3 className="card-fire-name">Aun sin Taps</h3>
							<p className="card-fire-distance">Nadie envio un tap aun</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}