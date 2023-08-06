import { legacy_createStore } from "redux";

// reducer

const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        // masukan apapun yang ada dalam state sebelumnya
        ...state,
        // lalu lakukan perubahan yang ada pada cart (state.cart)
        // ditambah dengan data yang akan dimasukan (action.payload)
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store

const store = legacy_createStore(cartReducer);
console.log("on create store : ", store.getState());

// subscribe

store.subscribe(() => {
  console.log("on subscribe : ", store.getState());
});

// dispatch

const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 1,
    qty: 1,
  },
};

store.dispatch(action1);
