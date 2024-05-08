import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from './actionTypes';

const initialState = {
  cartItems: [] // Initial cart items array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId, quantity } = action.payload;
      // Check if the item is already in the cart
      const existingCartItemIndex = state.cartItems.findIndex(item => item.productId === productId);
      if (existingCartItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingCartItemIndex].quantity += quantity;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the item is new, add it to the cart
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }

    case REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(item => item.productId !== action.payload);
      return { ...state, cartItems: updatedCartItems };

    case UPDATE_CART_QUANTITY:
      const { productId: updatedProductId, quantity: updatedQuantity } = action.payload;
      const updatedItems = state.cartItems.map(item => {
        if (item.productId === updatedProductId) {
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      return { ...state, cartItems: updatedItems };

    default:
      return state;
  }
};

export default cartReducer;
