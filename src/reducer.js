


const basketFromLocalStorage =  JSON.parse(localStorage.getItem('previous_cart' ) ||  '[]')

export const initialState = {
  productSidebar: false,
  gridView: true, 
  basket: basketFromLocalStorage,
  quantity: 0,
  user: null,
  shippingData: {},
  paymentMessage: "",
};

export const actionTypes = {
  SET_PRODUCT_SIDEBAR: "SET_PRODUCT_SIDEBAR",
  CHANGE_GRID_VIEW: "CHANGE_GRID_VIEW",
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_ITEM: "REMOVE_ITEM",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_USER: "SET_USER",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
  SET_PAYMENT_MESSAGE: "SET_PAYMENT_MESSAGE",
};



export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price * item.quantity)  + amount, 0);

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
        localStorage.setItem('previous_cart', JSON.stringify(nBasket))
        return {
          ...state,
          basket: [...nBasket],
        };
 

    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const productToRemove = state.basket.filter(
        (basketItem) => basketItem.id != action.id
      );
      console.log(productToRemove)
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        localStorage.setItem("previous_cart",JSON.stringify(newBasket))
      } else {
        console.log(`Cant remove product (id: ${action.id})!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      localStorage.setItem("previous_cart", [])
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
    case "SET_PRODUCT_SIDEBAR": 
      return {
        productSidebar: !state.productSidebar
      }
    case "CHANGE_GRID_VIEW":
      return {
         gridView: !state.gridView
      }
    default:
      return state;
  }
};

export default reducer;
