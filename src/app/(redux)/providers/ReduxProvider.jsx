"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect } from "react";
import { fetchProfile } from "../features/auth/auth";

export function ReduxProvider({ children }) {
  useEffect(()=>{
    store.dispatch(fetchProfile())
  },[])
  return <Provider store={store}>{children}</Provider>;
}
