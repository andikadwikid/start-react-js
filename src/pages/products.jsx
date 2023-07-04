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
    price: "Rp. 7.000.000",
  },
  {
    id: 2,
    image: "images/product1.jpg",
    name: "Smartphone 2",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit aut!`,
    price: "Rp. 7.000.000",
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
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
    </>
  );
};

export default ProductsPage;
