import React from 'react';
import { Col, Row, Form, Button, Input, InputNumber} from 'antd'
import '../assets/DetailProduct.scss'
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const DetailProduct = () => {
    const  data = useSelector(stateTong => stateTong.counter)
    const params = useParams()
    const [query, setQuery] = useSearchParams()
    var id = query.get('id')
    
    const getProduct = () => {
        for ( let i = 0 ; i < data.length ; i++ ) {
            if ( id === data[i].id) {
                var obj = data[i]
                return obj
            }
        }
    }
    const product = getProduct() 
    const formattedPrice = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // console.log(product)
   
    
    return (
        <div>
            <Row className='buy'>
                <Col span={12} className='pic'>
                    <img src={product.img} alt=''></img>
                </Col>
                <Col span={12} className='form'>
                    <h1>{product.name}</h1>
                    <h1 className='price'>{formattedPrice} VND</h1>
                    <p>Số lượng: <InputNumber min={1} max={10} defaultValue={1}  /></p>
                    
                    <Form
                     layout="vertical"
                    >
                    <Form.Item label="Số điện thoại" required tooltip="This is a required field">
                        
                        <Input placeholder="Nhập số điện thoại" />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        tooltip={{ title: 'Tooltip with customize icon'}}
                    >
                        <Input  placeholder="Nhập địa chỉ" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" disabled>Submit</Button>
                    </Form.Item>
                </Form>



                </Col>
               
            </Row>
        </div>
    );
};

export default DetailProduct;