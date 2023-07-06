import { useEffect, useState } from "react";
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
    price: 7000000,
  },
  {
    id: 2,
    image: "images/product1.jpg",
    name: "Smartphone 2",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit aut!`,
    price: 7000000,
  },
  {
    id: 3,
    image: "images/product1.jpg",
    name: "Smartphone 3",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, fugit aut!`,
    price: 7000000,
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    // check if item already in cart
    const checkCart = cart.find((item) => item.id === id);
    if (checkCart) {
      // update qty
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // add to cart
      setCart([...cart, { id, qty: 1 }]);
    }
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
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-2/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                // find product
                const product = products.find(
                  (product) => product.id === item.id
                );

                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
