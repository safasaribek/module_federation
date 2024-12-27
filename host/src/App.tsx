import React, { useState } from 'react';
import './App.css';

const ProductList = React.lazy(() => import('products/ProductList'));
const Basket = React.lazy(() => import('basket/Basket'));

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';

// Product type definition
interface Product {
    id: number;
    name: string;
    price: number;
    quantity?: number;
}

function App() {
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [isBasketVisible, setIsBasketVisible] = useState<boolean>(false);

    // Add product to the basket
    const handleAddToBasket = (product: Product) => {
        setSelectedProducts((prev) => {
            const existingProduct = prev.find((p) => p.id === product.id);
            if (existingProduct) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // Update product quantity
    const handleQuantityChange = (id: number, quantity: number) => {
        setSelectedProducts((prev) =>
            prev.map((product) =>
                product.id === id ? { ...product, quantity } : product
            )
        );
    };

    // Remove product from the basket
    const handleRemoveProduct = (id: number) => {
        setSelectedProducts((prev) => prev.filter((product) => product.id !== id));
    };

    // Calculate total number of items in the basket
    const totalItems = selectedProducts.reduce(
        (total, product) => total + (product.quantity || 1),
        0
    );

    return (
        <div className="container">
            <div
                className="header"
                style={{
                    padding: '0 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                }}
            >
                <h1 className="header-title">Host Application</h1>
                <Badge count={totalItems} offset={[2, -2]} showZero>
                    <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        className="cart-button"
                        onClick={() => setIsBasketVisible(true)}
                    >
                    </Button>
                </Badge>
            </div>
            <ProductList onAddToBasket={handleAddToBasket} />
            <Basket
                isVisible={isBasketVisible}
                onClose={() => setIsBasketVisible(false)}
                selectedProducts={selectedProducts}
                onQuantityChange={handleQuantityChange}
                onRemoveProduct={handleRemoveProduct}
            />
        </div>
    );
}

export default App;
