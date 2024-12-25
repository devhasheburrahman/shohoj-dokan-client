import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) =>
          item._id === product._id &&
          (!product.variation ||
            product.selectedProductSize === item.selectedProductSize)
      );

      if (existingCartItem) {
        state.cartItems = state.cartItems.map((item) =>
          item.cartItemId === existingCartItem.cartItemId
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        state.cartItems.push({
          ...product,
          quantity: product.quantity || 1,
          cartItemId: uuidv4(),
        });
      }

      toast.success("Product Quantity Update To Card");
    },

    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
      toast.error("Removed From Cart", { position: "bottom-left" });
    },
    // decreaseQuantity(state, action) {
    //   const product = action.payload;
    //   if (product.quantity === 1) {
    //     state.cartItems = state.cartItems.filter(
    //       (item) => item.cartItemId !== product.cartItemId
    //     );
    //     toast.error("Product Quantity Removed From Cart", {
    //       position: "bottom-left",
    //     });
    //   } else {
    //     state.cartItems = state.cartItems.map((item) =>
    //       item.cartItemId === product.cartItemId
    //         ? { ...item, quantity: item.quantity - 1 }
    //         : item
    //     );
    //     toast("Item Quantity decrease From Cart", {
    //       icon: "⚠️ ❌",
    //     });
    //   }
    // },
    decreaseQuantity(state, action) {
      const product = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.cartItemId === product.cartItemId
      );

      if (!existingCartItem || existingCartItem.quantity === 1) {
        // Skip decreasing if the quantity is already 1
        return;
      }

      state.cartItems = state.cartItems.map((item) =>
        item.cartItemId === product.cartItemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      toast("Item quantity decreased", { icon: "⚠️" });
    },

    deleteAllFromCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  deleteAllFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
