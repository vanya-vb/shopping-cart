import { useContext } from "react";
import ProdctCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

export default function ProductList() {
    const { products, loading, error } = useContext(ProductContext);

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