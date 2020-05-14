import {addToCartAC} from "./../redux/cartReducer"
import { connect } from "react-redux";
import BooksItem from "./BooksItem"


  

  
  const mapDispatchToProps = (dispatch) => {
    return {
     addToCart: (book) => {
      dispatch(addToCartAC(book));
    },
    }
  };
  
  export default connect( null, mapDispatchToProps)(BooksItem);