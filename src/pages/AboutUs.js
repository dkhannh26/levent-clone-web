import React from 'react';
import '../assets/AboutUs.scss'
import { Row, Col } from 'antd'
import img1 from '../img/aboutus/collection-summer-banner.webp'
import img2 from '../img/aboutus/homepage-ngang-4-1920x988_1.webp'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='title'>
                <h1>ABOUT US</h1>
                <p>WHO WE ARE</p>
                <p>Levents® - Share your Color</p>
                <p>/ Lì - ven /</p>
                <p className='title-content'>Levents là thương hiệu thời trang đường phố dẫn dầu xu hướng với phong cách thiết kế đơn giản, hiện đại,
                    sản phẩm tiêu chuẩn cao dành cho giới trẻ toàn cầu tự tin thể hiện cá tính.</p>

            </div>

            <div>
                <img src={img1} 
                alt='https://levents.asia/wp-content/uploads/elementor/thumbs/Untitled-3-1-prb4bhjxpwu6l1zt2rxzmkhvra4hmkcrfkewp4nzfk.png'></img>
            </div>
            <div className='passion'>
                <Row className='passion-row'>
                    <Col span={12} className='passion-title-col'>
                        <div className='passion-title'>
                            <p>WHAT WE DO</p>
                            <p>Young generation ally</p>
                        </div>

                    </Col>
                    <Col span={12}>
                        <div className='passion-content'>
                            <p>Sứ mệnh của Levents® là Cổ vũ cho thế hệ trẻ toàn thế giới tự do thể hiện phong cách thông qua thời trang, thương hiệu vượt qua ranh giới của thời trang đường phố bằng cách không ngừng sáng tạo các trang phục trong các bộ sưu tập độc đáo. Levents® mong muốn đồng hành và tôn vinh thế hệ trẻ tài năng qua những xu hướng thời trang và hoạt động cộng đồng sáng tạo. Từ đó tạo dấu ấn cho giá trị bền vững để cùng các tài năng trẻ phát triển.
                            </p>
                        </div>

                    </Col>

                </Row>
            </div>
            <div>
                <img src={img2} 
                alt='https://levents.asia/wp-content/uploads/elementor/thumbs/Untitled-3-1-prb4bhjxpwu6l1zt2rxzmkhvra4hmkcrfkewp4nzfk.png'></img>
            </div>
        </div>
    );
};

export default AboutUs;