import Button from "../components/Elements/button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images/product1.jpg" />
        <CardProduct.Body title="Smartphone">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit
          aut! Error nisi asperiores harum, magnam illo repellat, consectetur
          enim reprehenderit minus culpa sequi odio dolores. Quas consectetur
          cupiditate perferendis.
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp. 7.000.000"} />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="images/product1.jpg" />
        <CardProduct.Body title="Smartphone">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit
          aut! Error nisi asperiores harum, magnam illo repellat, consectetur
          enim reprehenderit minus culpa sequi odio dolores. Quas consectetur
          cupiditate perferendis.
        </CardProduct.Body>
        <CardProduct.Footer price={"Rp. 7.000.000"} />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
