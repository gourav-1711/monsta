import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [
    {
      id: 1,
      name: "Stools",
      price: 100,
      oldPrice: 150,
      quantity: 1,
      image: "/HomePageImgs/stool.jpg",
    },
    {
      id: 2,
      name: "Sofa",
      price: 200,
      oldPrice: 250,
      quantity: 1,
      image: "/HomePageImgs/sofa1.jpg",
    },
    {
      id: 3,
      name: "Sofa",
      price: 300,
      oldPrice: 350,
      quantity: 1,
      image: "/HomePageImgs/sofa2.jpg",
    },
    {
      id: 4,
      name: "Sofa",
      price: 400,
      oldPrice: 450,
      quantity: 1,
      image: "/HomePageImgs/sofa3.jpg",
    },
  ],
};

export const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productData.push(action.payload);
    },
  },
});

export const { addProduct } = productDataSlice.actions;
