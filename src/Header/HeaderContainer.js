
import { connect } from "react-redux";
import Header from "./Header"



const mapStateToProps = (state) => {
    return {
      totalPrice: state.cart.cartBooks.reduce((total, book)=>{ 
  return total + book.price
      },0),
      count: state.cart.cartBooks.length
    }
  
  };
  
  
  
  export default connect(mapStateToProps)(Header);