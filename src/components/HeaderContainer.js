import Header from '../components/Header';
import {connect} from 'react-redux';

const mapStateToProps=state => ({
    data:state.cartItems
    // // cartData:state.data
    // cartData:state
})

const mapDispatchToProps=dispatch => ({
    // addToCartHandler:data => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

