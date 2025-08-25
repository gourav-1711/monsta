"use client";

import { Provider } from "react-redux";
import { useEffect } from "react";
import { fetchProfile } from "../features/auth/auth";
import { makeStore } from "../store/store";

export function ReduxProvider({ children, preloadedState }) {
  useEffect(() => {
    store.dispatch(fetchProfile());
  }, []);

  const store = makeStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
}
