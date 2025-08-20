import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
    wishlistItems: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            if(state.wishlistItems.find(item => item.id === action.payload.id)) {
                toast.error("Item already in wishlist")
            } else {
                state.wishlistItems.push(action.payload)
                toast.success("Item added to wishlist")
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer