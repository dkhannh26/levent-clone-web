import React from 'react';
import {Col, Row} from 'antd'
import '../assets/Customer.scss'
const Customer = () => {
    return (
       
            <div className="customer">
                <h4 className="care">CHĂM SÓC KHÁCH HÀNG</h4>
                <Row className='customer-content'>
                    <Col span={8} className='col'>
                        <div>
                            <p href='#'>LÌ VEN FABRIC</p>
                        </div>
                        <div>
                            <p href='#'>Chính sách Thành viên</p>
                        </div>
                        <div>
                            <p href='#'>Q &amp;. A</p>
                        </div>
                    </Col>

                    <Col span={8}  className='col'>
                        <div className="mid">
                            <div>
                                <p href='#'>Mua sắm dễ dàng</p>
                            </div>
                            <div>
                                <p href='#'>Chính sách vận
                                    chuyển</p>
                            </div>
                        </div>

                    </Col>

                    <Col span={8} className='col'>
                        <div>
                            <p href='#'>Chính
                                sách đổi trả &amp; bảo hành</p>
                        </div>
                        <div>
                            <p href='#'>Hướng
                                dẫn mua hàng &amp; bảo quản</p>
                        </div>
                    </Col>

                </Row>
            </div>
       
    );
};

export default Customer;