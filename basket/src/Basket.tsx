import React from 'react';
import { Drawer, List, Card, Button, InputNumber, Row, Col } from 'antd';
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const Basket = ({ isVisible, onClose, selectedProducts, onQuantityChange, onRemoveProduct }) => {
    const totalPrice = selectedProducts.reduce(
        (total, product) => total + product.price * (product.quantity || 1),
        0
    );

    return (
        <Drawer
            title="Sepetiniz"
            placement="right"
            onClose={onClose}
            open={isVisible}
            width={400}
        >
            {selectedProducts.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <ShoppingCartOutlined style={{ fontSize: '48px', color: '#aaa' }} />
                    <p style={{ fontSize: '18px', color: '#555' }}>Sepetiniz boş</p>
                </div>
            ) : (
                <>
                    <List
                        dataSource={selectedProducts}
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    style={{ width: '100%' }}
                                    cover={
                                        <img
                                            alt={item.title}
                                            src={item.image}
                                            style={{ width: '100px', objectFit: 'cover' }}
                                        />
                                    }
                                >
                                    <Row>
                                        <Col span={12}>
                                            <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{item.title}</p>
                                            <InputNumber
                                                min={1}
                                                max={99}
                                                value={item.quantity || 1}
                                                onChange={(value) => onQuantityChange(item.id, value)}
                                            />
                                        </Col>
                                        <Col span={6} style={{ textAlign: 'right' }}>
                                            <p style={{ fontWeight: 'bold' }}>{(item.price * (item.quantity || 1)).toFixed(2)} $</p>
                                        </Col>
                                        <Col span={6} style={{ textAlign: 'right' }}>
                                            <Button
                                                type="text"
                                                danger
                                                icon={<DeleteOutlined />}
                                                onClick={() => onRemoveProduct(item.id)}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </List.Item>
                        )}
                    />
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <h3>Toplam: {totalPrice.toFixed(2)} $</h3>
                    </div>
                </>
            )}
        </Drawer>
    );
};

export default Basket;
