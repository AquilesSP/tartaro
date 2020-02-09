import React, { Component} from 'react';
import { Dropdown,Menu,Button,Tabs,Icon,Tooltip,Tag } from 'antd';

const { TabPane } = Tabs;
const ButtonGroup = Button.Group;

function handleMenuClick(e) {console.log('click', e);}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">El Salvador 5218</Menu.Item>
    <Menu.Item key="2">Pte Peron 3162</Menu.Item>
    <Menu.Item key="3">Agregar otra</Menu.Item>
  </Menu>
);

export default class LienzoEscritorio extends Component {
  constructor(props){
    super(props);
    this.state = {
      // 29 items xq 1 mas es el de compra
			items:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},],
      visible: true,
    };
  }
  render() {
    return (
      <div className={this.props.darkMode?"lienzoEscritorio fullAltoVH negroProfundo":"lienzoEscritorio fullAltoVH white"}>
        <div className="navbar-lienzoEscritorio">
          <ButtonGroup>
            <Dropdown overlay={menu}>
              <Button>
                Ubicacion actual <Icon type="environment" />
              </Button>
            </Dropdown>
            <Button icon="filter" />
            <Button icon="sync" />
          </ButtonGroup>
          <div className="flex-row">
            <Tag closable color="dimgrey" visible={this.state.visible} onClose={() => this.setState({ visible: false })}>
              Chicas
            </Tag>
            <Tag closable color="dimgrey" visible={this.state.visible} onClose={() => this.setState({ visible: false })}>
              hasta 35 años
            </Tag>
          </div>
        </div>
        <Tabs defaultActiveKey="1" tabPosition={'bottom'} size={'large'}>
          <TabPane key="1"
            tab={
              <span>
                <Icon type="user" />
                Cerca de mi
					    </span>

          }>
            <div className="grid-lienzoEscritorio">
              {this.state.items.map(()=>
                <div className="tile-avatar">
                  <Icon type="user" className="tile-avatar-iconSize"/>
                  <div className="tile-avatar-options">
                    <ButtonGroup>
                      <Tooltip placement="bottom" title={'Tap'}>
                        <Button icon="fire" />
                      </Tooltip>
                      <Tooltip placement="bottom" title={'Mensajear'}>
                        <Button icon="message" />
                      </Tooltip>
                      <Tooltip placement="bottom" title={'Ver Perfil'}>
                        <Button icon="eye" />
                      </Tooltip>
                      <Tooltip placement="bottom" title={'Bloquear'}>
                        <Button icon="stop" />
                      </Tooltip>
                    </ButtonGroup>
                  </div>
                </div>
              )}
              <div style={{width:'100%', height:'32px'}}/>
            </div>
          </TabPane>
          <TabPane key="2"
            tab={
              <span>
                <Icon type="environment" />
                Lugares
              </span>
            }>
            <div className="grid-lienzoEscritorio">
              {this.state.items.map(()=>
                <div className="tile-avatar">
                  <Icon type="environment" className="tile-avatar-iconSize"/>
                </div>
              )}
              <div style={{width:'100%', height:'32px'}}/>
            </div>
          </TabPane>
          <TabPane key="3"
            tab={
              <span>
                <Icon type="eye" />
                12 Te han visto!
              </span>
            }>
            <div className="grid-lienzoEscritorio">
              {this.state.items.map(()=>
                <div className="tile-avatar">
                  <Icon type="eye" className="tile-avatar-iconSize"/>
                </div>
              )}
              <div style={{width:'100%', height:'32px'}}/>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}