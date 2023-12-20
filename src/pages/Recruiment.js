import React from 'react';
import '../assets/Recruitment.scss'
import {Col, Row} from 'antd'
import img from '../img/recruit/Image_15_1024x1024.webp'
const Recruiment = () => {
    return (
        <div>
            <div className="recruit">
                <div className="recruit-image">
                    <img src={img} alt='zxc'></img>
                </div>
                <div className="recruit-intro">
                    <div className='recruit-content'>
                        <h2>VĂN HOÁ</h2>
                        <p>DOTAI luôn chú trọng đến văn hoá làm việc tại công ty . Tôn trọng sự sáng tạo và đột phá trong từng cá nhân, chúng tôi xây dựng văn hoá làm việc hiện đại, tiên tiến và lành mạnh, luôn hướng tới công ty hàng đầu trong lĩnh vực thời trang.</p>
                        <p>Tài sản lớn nhất của DOTAI là con người, vì vậy chúng tôi luôn có các chính sách để phát triển năng lực của từng cá nhân, và tạo điều kiện phát triển cho các nhân sự có tài năng, chúng tôi ưu tiên nhiều cho các tài năng trẻ, đào tạo các bạn từ còn đang học trên ghế nhà trường đến lúc bạn có thể làm việc trực tiếp tại công ty.</p>
                    </div>
                    <div className='recruit-content '>
                        <h2 >GIÁ TRỊ CỐT LÕI CỦA DOTAI</h2>
                        <p>SÁNG TẠO: Vì là trong lĩnh vực thời trang dành cho giới trẻ và cập nhật xu hương mới nhất nên luôn hướng đến sự sáng tạo để tạo nên những giá trị mới cho khách hàng và cho chính nhân viên. Vì lẽ đó, không gian làm việc tại  Levents  luôn được ban lãnh đạo đầu tư, thiết kế với thật nhiều không gian mở để các thành viên thỏa sức sáng tạo với cơ sở vật chất hiện đại, thân thiện môi trường.</p>
                        <p>TỬ TẾ: Công ty luôn dành sự tôn trọng đến đội ngũ nhân viên, xây dựng tính nhân văn trong mỗi suy nghĩ và hành động.</p>
                        <p>CHĂM CHỈ : Chúng tôi không ngại thử thách, hết lòng làm việc một cách hăng hái, luôn có trách nhiệm hoàn thành sứ mệnh của mình. Song đó, chúng tôi luôn tạo ra sân chơi, sự kiện lành mạnh cho các thành viên tại công ty.</p>
                        <p>KỶ LUẬT: Với tiêu chí “Kỷ luật là sợi dây kết nối giữa ước mơ và hiện thực”, DOTAI luôn nâng cao tinh thần tự giác, tuân thủ quy định, ý thức trách nhiệm của mỗi cá nhân với trọng trách được giao.</p>
                    </div>
                </div>

                <div className="recruit-apply" >
                    <h2>TUYỂN DỤNG</h2>
                    <Row className="apply-list">
                        <Col span={12}  >
                            <p>MARKETING EXECUTIVE (E-commerce)</p>
                            <p>PR - PUBLIC RELATIONS</p>
                            <p>MANUFACTURING ASSISTANT</p>
                            <p>CHIEF CUSTOMER OFFICER</p>
                            <p>HUMAN RESOURCES MANAGEMENT</p>
                        </Col>
                        <Col span={12}  >
                            <p>ACCOUNTANT (General)</p>
                            <p>SALE IN-STORE STAFF</p>
                            <p>SALE ONLINE STAFF</p>
                            <p>WAREHOUSE STAFF</p>
                            <p>MARKETING MANAGER</p>
                        </Col>
                    </Row>
                </div>
            </div>

           
        </div>
    );
};

export default Recruiment;