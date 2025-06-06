import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
           const filteredItems = state.cartItems.filter(item => item.id !== action.payload.id)
           state.cartItems = filteredItems
        },
        totalAmount: (state,action) => {
                let total = 0
                state.cartItems.forEach(item => {
                    total += item.price * item.quantity
                })
                state.totalPrice = total
        },  
        
        totalQuantity: (state) => {
            let total = 0
            state.cartItems.forEach(item => {
                total += item.quantity
            })
            state.totalQuantity = total
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.cartItems.find(item => item.id === id)
            if (item) {
                item.quantity = quantity
            }
        }
        
    }
})

export const { addToCart, removeFromCart, totalQuantity, updateQuantity, totalAmount } = cartSlice.actions
export default cartSlice.reducer