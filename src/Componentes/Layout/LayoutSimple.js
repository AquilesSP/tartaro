import React, { Component, Suspense } from 'react';
import { Row, Col } from 'antd';

export default class LayoutSimple extends Component {
    render() {
        return (
    <div>
        <p>Layout</p>
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
    </div>
    );}
}