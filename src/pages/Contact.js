import React from 'react';
import { Row, Col } from 'antd';
import '../assets/Contact.scss'
import img1 from '../img/contact/img1.webp'
import img2 from '../img/contact/img2.webp'
import img3 from '../img/contact/img3.webp'

const Contact = () => {
    return (
        <div className='contact'>
            <Row className="map">
                
                <Col span={11}>
                    <iframe
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0533542574994!2d105.72985131073597!3d10.012451790052262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882139720a77%3A0x3916a227d0b95a64!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgQ-G6p24gVGjGoQ!5e0!3m2!1sen!2s!4v1698488213646!5m2!1sen!2s"
                        width="100%" height="100%" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col span={1}></Col>

                <Col className="info" span={12} >

                    <div >
                        <div>
                            <h2 className="support-title">THÔNG TIN LIÊN HỆ</h2>
                        </div>
                        <Row>
                            <Col span={12}><p>Hotline: <b >1900 888 888</b></p></Col>
                            <Col span={12}> <div className="contact">
                                <a href="#" >Gọi ngay</a>
                            </div> </Col>

                        </Row>
                        <Row>
                            <Col span={12}><p>Email: <b >Customercare@dotai.asia</b></p></Col>
                            <Col className="contact" span={12}>
                                <a href="#" >Gửi ngay</a>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}><p>Chatbxox: <b>Messenger</b></p></Col>
                            <Col span={12}><div className="contact">
                                <a href="#">Nhắn ngay</a>
                            </div></Col>

                        </Row>
                        <div>
                            <p>Open: <span >Thứ Hai - Chủ nhật | 09:30 ~ 21:30</span></p>
                        </div>
                    </div>


                    <Row >
                        <div>
                            <img src={img1}
                                alt="" />
                        </div>
                        <div className="shop-info">
                            <h3 >THE NEW PLAY GROUND, QUẬN 1</h3>
                            <p>The New Playground, 04 Phạm Ngũ Lão</p>
                            <p>Mở cửa: <span>Thứ 2 - Chủ nhật | 09:30 ~ 21:30</span></p>
                            <p>Số điện thoại: <span>1900 888 888</span></p>
                        </div>
                    </Row>

                    <Row >
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div className="shop-info">
                            <h3 >54 MẬU THÂN, CẦN THƠ</h3>
                            <p>54 Mậu Thân, Xuân Khánh, quận Ninh Kiều, Cần Thơ</p>
                            <p>Mở cửa: <span>Thứ 2 - Chủ nhật | 09:30 ~ 21:30</span></p>
                            <p>Số điện thoại: <span>1900 888 888</span></p>
                        </div>
                    </Row>

                    <Row >
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div className="shop-info">
                            <h3 >SƯ VẠN HẠNH, QUẬN 10</h3>
                            <p>842 Sư Vạn Hạnh, Phường 12, Quận 10, HCM</p>
                            <p>Mở cửa: <span>Thứ 2 - Chủ nhật | 09:30 ~ 21:30</span></p>
                            <p>Số điện thoại: <span>1900 888 888</span></p>
                        </div>
                    </Row>
                </Col>
            </Row>


            <Row>
            <Col span={12}></Col>
            <Col span={12} >
                

                <div className="support">
                    <div className="">
                        <h4 className="support-title">
                            GỬI TIN NHẮN NGAY CHO DOTAI <br />
                            KHI BẠN CẦN HỖ TRỢ HOẶC CÓ THẮC MẮC NHÉ!
                        </h4>
                    </div>

                    <div className="name">
                        <input type="text" placeholder="Họ và tên" />
                    </div>

                    <div className="">
                        <div className="mail">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="sdt">
                            <input type="text" placeholder="Số điện thoại" />
                        </div>
                    </div>

                    <div className="message">
                        <input placeholder="Lời nhắn"></input>
                    </div>

                    <div className="submit">
                        <input type="submit" value="Gửi đi" />
                    </div>
                </div>
            </Col>
            </Row>
        </div>
    );
};

export default Contact;