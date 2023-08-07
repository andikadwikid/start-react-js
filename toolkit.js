import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const adduser = createAction("ADD_USER");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const userReducer = createReducer([], (builder) => {
  builder.addCase(adduser, (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

store.subscribe(() => {
  console.log("on subscribe : ", store.getState());
});

const action1 = addToCart({ id: 1, qty: 2 });

const action2 = adduser({ id: 1, name: "Rizky" });

store.dispatch(action1);
store.dispatch(action2);
