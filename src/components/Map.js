import React from 'react';
import '../assets/Map.scss'

import { Row, Col, Button } from 'antd';
const Map = () => {
    return (
        <Row className='map-total'>
            <Col span={1}></Col>
            <Col className='map-col' span={11}>
                <div className='map' >
                    <iframe
                    width={"80%"}
                    height={"100%"}
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0533542574994!2d105.72985131073597!3d10.012451790052262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgQ-G6p24gVGjGoQ!5e0!3m2!1sen!2s!4v1698488213646!5m2!1sen!2s"
                        loading="lazy"
                        ></iframe>
                </div>
            </Col>
            <Col className="support" span={11}>
                <div>
                    <h2 className="support-title">
                        GỬI TIN NHẮN NGAY CHO DOTAI <br />
                        KHI BẠN CẦN HỖ TRỢ HOẶC CÓ THẮC MẮC NHÉ!
                    </h2>
                </div>

                <div className="name">
                    <input type="text" placeholder="Họ và tên" />
                </div>

                <Row  >
                    <Col className="mail" span={11}>
                        <input type="text" placeholder="Email" />
                    </Col>
                    <Col span={1}></Col>
                    <Col className="phone" span={12}>
                        <input type="text" placeholder="Số điện thoại" />
                    </Col>
                </Row>

                <div className="message">
                    <textarea name="" id="chat" placeholder="Lời nhắn"></textarea>
                </div>

                <Button  color='' >Gửi đi</Button>
            </Col>
            <Col span={1}></Col>

        </Row>
    );
};

export default Map;