import Cart from "./Cart" 
import { connect } from "react-redux";
import {deleteFromCartAC} from "./../redux/cartReducer"
const mapStateToProps = (state) => {

    return {
    cartBooks:state.cart.cartBooks
    };
  };

  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteFromCart: (id) => {
        dispatch(deleteFromCartAC(id));
      }
    }
  };
  
  export default connect( mapStateToProps, mapDispatchToProps)(Cart);
    