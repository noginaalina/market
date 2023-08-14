
import ProductCard from './components/product/product-card.component';
import { productListData } from './data/product.data';
import './index.css'

function App() {
    return (
        <ProductCard product={productListData[0]} />
    );
}

export default App;
