import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "images/product1.jpg",
    name: "Smartphone 1",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit
    aut! Error nisi asperiores harum, magnam illo repellat, consectetur
    enim reprehenderit minus culpa sequi odio dolores. Quas consectetur
    cupiditate perferendis.`,
  },
  {
    id: 2,
    image: "images/product1.jpg",
    name: "Smartphone 2",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit aut!`,
  },
];
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => {
        return (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductsPage;
