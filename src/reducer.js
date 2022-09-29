export const initialState = {
  basket: [],
  quantity: 0,
  user: null,
  shippingData: {},
  paymentMessage: "",
};

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_USER: "SET_USER",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
  SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  
  
  //TO DO: find which method or function is executing 2 times reducer. 
  console.log(action);
  switch (action.type) {
    // //action.item indicate the payload item.
    case "ADD_TO_BASKET":
        let nBasket;
        //Finding  in the basket if the product is already in there.
        let product = state.basket.find(
          (product) => product.id === action.item.id
        );

        if (product) {
          //When the product is already in the basket we only increment the quantity counter.
          product.quantity += 1;
          nBasket = [...state.basket];
        } else {
          nBasket = [...state.basket, action.item];
        }

        return {
          ...state,
          basket: [...nBasket],
        };
      // return {
      //   ...state,
      //   basket: [...state.basket, action.item],
      // };

    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`Cant remove product (id: ${action.id})!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shippingData: action.shippingData,
      };
    case "SET_PAYMENT_MESSAGE":
      return {
        ...state,
        paymentMessage: action.paymentMessage,
      };
    default:
      return state;
  }
};

export default reducer;
