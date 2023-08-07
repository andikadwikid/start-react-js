import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

store.subscribe(() => {
  console.log("on subscribe : ", store.getState());
});

const action1 = cartSlice.actions.addToCart({ id: 1, qty: 2 });

store.dispatch(action1);
