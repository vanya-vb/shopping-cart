import ProdctCard from "./ProductCard";

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
            {products.map(product => (
                <ProdctCard key={product.id} product={product} />
            ))}
        </div>
    );
};