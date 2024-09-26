import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItemList from "./CartItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center ">
      <h1 className="cart  flex justify-center text-2xl font-bold m-10 p-10">
        Cart
      </h1>

      <div className="w-6/12 m-auto ">
        <button
          onClick={handleClearCart}
          className="bg-black text-white p-2 m-2 rounded-lg"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart. </h1>
        )}
        <CartItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
