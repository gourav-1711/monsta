import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import Cookies from "js-cookie";
const initialState = {
    wishlistItems: Cookies.get("wishlist") ? JSON.parse(Cookies.get("wishlist")) : [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            if(state.wishlistItems.find(item => item.id === action.payload.id)) {
               return
            } else {
                state.wishlistItems.push(action.payload)
                toast.success("Item added to wishlist")
            }
            Cookies.set("wishlist", JSON.stringify(state.wishlistItems), {
                expires: 7,
            });
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id)
            Cookies.set("wishlist", JSON.stringify(state.wishlistItems), {
                expires: 7,
            });
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer