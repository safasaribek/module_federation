import './App.css';
import Button from './Button';
import ProductList from "./ProductList.tsx";

const App = () => {
    return (
        <div className="content">
            <h1>Product</h1>
            <ProductList />
            {/*<Button />*/}
        </div>
    );
};

export default App;