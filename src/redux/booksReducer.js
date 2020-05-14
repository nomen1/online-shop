import {booksAPI} from "./../api"



const SET_BOOKS = "SET_BOOKS";





const initialState = {
    books: []
 }

 export const setBooksAC = (books)=>{
    return {
        type: SET_BOOKS, books
      };
 }

 export const getBooksTC = () =>{
    return async (dispatch) => {
      let response = await booksAPI.getBooks()
       dispatch(setBooksAC(response.data))
    }
}
const booksReducer = (state = initialState, action) => {
   switch(action.type){
  

  case SET_BOOKS:
    return{
        books: action.books
    }
  
  

 default:
    return state;
    }
    
}

export default booksReducer