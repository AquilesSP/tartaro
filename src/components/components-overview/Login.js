import React from "react";
import { Redirect } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import Mispichoshelper from "../../utils/Mispichoshelper";
var jwtDecode = require('jwt-decode');



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      loginFailed:false,
      onLogin:false,
      logged:true,
      notification: {},
    };
  }
  render() {
      return <Redirect to="/blog-overview" push />;
      return (

      <ListGroup flush>

        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {this.state.logged?(<Redirect to="/blog-overview" push />):null}
                  {this.state.loginFailed?<Loginfailed />:null}

                  <Col md="12" className="form-group">
                    <label htmlFor="feEmailAddress">Usuario</label>
                    <FormInput
                      id="feEmailAddress"
                      type="email"
                      onChange={evt => this.setState({user:evt.target.value})}
                      placeholder="Email"
                    />
                  </Col>
                  <Col md="12">
                    <label htmlFor="fePassword">Contraseña</label>
                    <FormInput
                      id="fePassword"
                      type="password"
                      onChange={evt => this.setState({pass:evt.target.value})}
                      placeholder="Password"
                    />
                  </Col>
                </Row>
                <Button onClick={this.login.bind(this)}>Ingresar</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
const Loginfailed = () => (
  <Col md="12" className="form-group">
    <span >Usuario o contraseña incorrecto!</span>
  </Col>
)