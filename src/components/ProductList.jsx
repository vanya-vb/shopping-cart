import { useProducts } from "../context/ProductContext";
import ProdctCard from "./ProductCard";

export default function ProductList() {
    const { products, loading, error } = useProducts();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {products.map(product => (
                <ProdctCard key={product.id} product={product} />
            ))}
        </div>
    );
};