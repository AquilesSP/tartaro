import React, { Component, Suspense } from 'react';
import { Col,Card  } from 'antd';

export default class Login extends Component {
    render() {
        return (
            <Col span={24} className="frio fullAltoVH fullAnchoVW">
                <Card style={{ width: 300 }}>
                    <a href="/login">Login</a>
                    <a href="/home">Home</a>
                    <a href="/settings">Setings</a>
                </Card>
            </Col>
        );
    }
}