import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import Cookies from "js-cookie";

const initialState = {
  cartItems: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Item quantity increased");
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success("Item added to cart");
      }
      Cookies.set("cart", JSON.stringify(state.cartItems), {
        expires: 7,
      });
    },
    removeFromCart: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = filteredItems;
      Cookies.set("cart", JSON.stringify(state.cartItems), {
        expires: 7,
      });
    },
    totalAmount: (state, action) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.totalPrice = total;
    },

    totalQuantity: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity;
      });
      state.totalQuantity = total;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      Cookies.set("cart", JSON.stringify(state.cartItems), {
        expires: 7,
      });
    },
    updateFullCart: (state, action) => {
      state.cartItems = action.payload;
      Cookies.set("cart", JSON.stringify(state.cartItems), { expires: 7 });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  totalQuantity,
  updateQuantity,
  totalAmount,
  updateFullCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const addCart = () => async (dispatch) => {
  const user = Cookies.get("user");
  const cart = Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [];

  if (!user) return;

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/add`,
      { fullCart: cart },
      { headers: { Authorization: `Bearer ${user}` } }
    );

    console.log(res.data);

    // assuming backend returns updated cart
  } catch (err) {
    console.error(err);
  }
};
