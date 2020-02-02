import React, { Component} from 'react';
import { Icon } from 'antd';

export default class LienzoEscritorio extends Component {
  constructor(props){
    super(props);
    this.state = {
      // 29 items xq 1 mas es el de compra
			items:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},],
		};
  }
  render() {
    return (
      <div className="lienzoEscritorio fullAltoVH white">
        <p>LienzoEscritorio</p>
        <div className="grid-lienzoEscritorio">
          {this.state.items.map(()=>
            <div className="tile-avatar">
              <Icon type="user" className="tile-avatar-iconSize"/>
            </div>
          )}
        </div>
      </div>
    )
  }
}