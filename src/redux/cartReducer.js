const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const ADD_TO_CART = " ADD_TO_CART";

const initialState = {
  cartBooks: []
};




export const addToCartAC = (book) => {
  return {
    type: ADD_TO_CART,
    book
  };
};

export const deleteFromCartAC = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cartBooks.some((item) => item.id === action.book.product.id)) {
        // increase count if item already exists in cart
        return {
          ...state,
          cartBooks: state.cartBooks.map((item) =>
            item.id === action.book.product.id
              ? { ...item, count: item.count + 1 }
              : item
          )
        }; // else add the new item to cart
      }
      return {
        ...state,
        cartBooks: [...state.cartBooks, { ...action.book.product, count: 1 }]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartBooks: state.cartBooks
          .map((item) => {
            return item.id === action.id
              ? { ...item, count: item.count - 1 }
              : item;
          })
          .filter((item) => item.count > 0)
      };

    default:
      return state;
  }
};

export default cartReducer;
