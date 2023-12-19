import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import '../assets/Product.scss'
import {Link} from 'react-router-dom';
const Product = () => {
    var data = useSelector(stateTong => stateTong.counter)

    return (
        <div className='product-page'>
            <Row>
                {data.map((item, index) => {
                    return <>
                        <Col span={6} key={index} className='item'>
                            <Link to={`/detailproduct?id=${item.id}`}>
                                <img src={item.img} alt="levent" />
                                <p>{item.name}</p>
                                <p className='price'>{item.price} <span>VND</span></p>
                            </Link>
                        </Col>
                    </>
                })}
            </Row>
        </div>
    );
};

export default Product;