import React, { Component} from 'react';
import { Row, Col, Button, Modal  } from 'antd';
import LienzoEscritorio from '../Escritorio/LienzoEscritorio';
import Navbar from '../Layout/Navbar';
import Sidebar from '../Layout/Sidebar';

export default class LayoutSimple extends Component {
  constructor(props){
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="flex-row">
        <Modal
          title="Mensaje desde el Tartaro"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Navbar showModal={()=>{this.showModal()}}/>
        <Sidebar/>
        <LienzoEscritorio/>
      </div>
    )
  }
}