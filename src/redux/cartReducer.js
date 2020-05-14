
const REMOVE_FROM_CART= "REMOVE_FROM_CART";

const ADD_TO_CART= " ADD_TO_CART";



const initialState = {
    cartBooks: []
 }





 export const addToCartAC = (book)=>{
    return {
        type: ADD_TO_CART, book
      };
 }

 export const  deleteFromCartAC =(id)=>{
  return {
    type:  REMOVE_FROM_CART, id
  };
 }

const cartReducer = (state = initialState, action) => {
    switch(action.type){
   
 
        case ADD_TO_CART:
          return{
              ...state,
              cartBooks: [...state.cartBooks, action.book]
          }
          case REMOVE_FROM_CART:
            return{
                ...state,
                cartBooks: state.cartBooks.filter((b)=>{
                  return  b.id != action.id
                })
            }
      
       default:
          return state;
          }
}

export default cartReducer



