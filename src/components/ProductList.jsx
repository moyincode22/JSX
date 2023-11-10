import products from "../products"
import ProductCard from "./ProductCard";
import "../App.css"

const ProductList = () => {
 console.log(products)
  return (
    <div className="container">
        <h1>E-Laptop shops Lagos</h1>

        <div className="grid">
            {/* {products.map((item) => {
                <ProductCard
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    imgUrl={item.imgUrl}
                />
            })} */}

            {products.map((item) => (
            <ProductCard
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    imgUrl={item.imgUrl}
                />
            ))}
        </div>
    </div>
  );
};

export default ProductList