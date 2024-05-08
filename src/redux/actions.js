import axios from 'axios';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY
} from './actionTypes';

export const fetchProduct = (productId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });

    try {
      const response = await axios.get(`http://localhost:8080/products/${productId}`);
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: response.data
      });
      
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCT_FAILURE,
        payload: error.message
      });
    }
  };
};

export const addToCart = (productId, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      
      quantity
    }
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  };
};

export const updateCartQuantity = (productId, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      productId,
      quantity
    }
  };
};
