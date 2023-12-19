import React, { useState } from 'react';
import '../assets/Home.scss'
import { Button, Col, Row } from 'antd';
import Map from '../components/Map'
import { Link } from 'react-router-dom';
const Home = ({ data }) => {

    const [numberOfProduct, setNumberOfProduct] = useState(8)
    const [buttonValue, setButtonValue] = useState('Xem thêm')
    return (
        <>
            <div className='background'>
                <video autoPlay muted loop>
                    <source
                        src="https://levents.asia/wp-content/uploads/2023/10/Ban-ngang-web-18mb.mp4"
                        type='video/mp4'
                    >

                    </source>
                </video>
                <div className='title-video'>
                    <p className='btn-pri-whi'>NEW PRODUCT LINE LEVENTS® CLASSIC</p>
                </div>
            </div>

            <div className="product">
                <h3>NEW PRODUCT LINE DOTAI® CLASSIC</h3>
                <div >
                    <Row>
                        {data.slice(0, numberOfProduct).map((item, index) => {
                            return  <Col span={6}  className='item' key={index}>
                                    <Link to={`/detailproduct?id=${item.id}`}>
                                        <img src={item.img} alt="levent" />
                                        <p>{item.name}</p>
                                        <p className='price'>{item.price} <span>VND</span></p>
                                    </Link>
                                </Col>

                           
                        })}
                    </Row>
                </div>
                <Button className='more' onClick={() => {
                    if (numberOfProduct > 8) {
                        setNumberOfProduct(8)
                        setButtonValue('Xem Thêm')
                    } else {
                        setNumberOfProduct(data.length)
                        setButtonValue('Rút gọn')
                    }

                }}>{buttonValue}</Button>
            </div>
            <div className='background'>
                <video autoPlay muted loop>
                    <source
                        src="https://levents.asia/wp-content/uploads/2023/09/Final_ba%CC%89n-web-17mb.mp4"
                        type='video/mp4'
                    >

                    </source>
                </video>
                <div className='title-video'>
                    <p className='btn-pri-whi'>NEW PRODUCT LINE LEVENTS® CLASSIC</p>
                </div>
            </div>
            <Row>
                <Col span={12} className='model'>
                    <div>
                        <img src="https://levents.asia/wp-content/uploads/2023/07/Male-7-Front-1000x1500.png" alt='xc' />
                        <p>LEVENTS® BASIC BOXY HOODIE/ BROWN</p>
                    </div>
                </Col>
                <Col span={12} className='model'>
                    <div>
                        <img src="https://levents.asia/wp-content/uploads/2023/07/Famale-4-Front-1000x1500.png" alt='xc' />
                        <p>LEVENTS® BASIC BOXY HOODIE/ BROWN</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={12} className='model'>
                    <div>
                        <img src="https://levents.asia/wp-content/uploads/2023/07/Male-5-Front-1000x1500.png" alt='xc' />
                        <p>LEVENTS® BASIC BOXY HOODIE/ BROWN</p>
                    </div>
                </Col>
                <Col span={12} className='model'>
                    <div>
                        <img src="https://levents.asia/wp-content/uploads/2023/07/Famale-7-Front-1000x1500.png" alt='xc' />
                        <p>LEVENTS® BASIC BOXY HOODIE/ BROWN</p>
                    </div>
                </Col>
            </Row>
            <Map></Map>
        </>
    );
};

export default Home;