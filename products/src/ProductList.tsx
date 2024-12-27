import React from 'react';
import { useGetProductsQuery } from './api/productsApi';
import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductListProps {
    onAddToBasket: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onAddToBasket }) => {
    const { data: products, error, isLoading } = useGetProductsQuery({});

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;

    return (
        <div style={{ padding: '20px' }}>
            <Row gutter={[16, 16]}>
                {products.map((product: Product) => (
                    <Col key={product.id} xs={24} sm={12} md={8}>
                        <Card
                            key={product.id}
                            title={product.title}
                            style={{ marginBottom: 16 }}
                            hoverable
                            cover={
                                <img
                                    alt={product.title}
                                    src={product.image}
                                    style={{ height: '200px', objectFit: 'contain' }}
                                />
                            }
                        >
                            <Meta
                                title={product.title}
                                description={
                                    <div>
                                        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                                            {product.price} $
                                        </p>
                                        <Button type="primary" block onClick={() => onAddToBasket(product)}>
                                            Sepete Ekle
                                        </Button>
                                    </div>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductList;
