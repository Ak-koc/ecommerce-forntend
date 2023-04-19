import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {getByIdRequest, getRequest, postByIdRequest, deleteRequest, postRequest} from './redux/reducers'

const reducer = combineReducers({

    productList: getByIdRequest('product/list'),
    categoryList: getRequest('category/list'),
    getCardId: getRequest('cart/get/0'),
    addToCart: postByIdRequest('cart/add'),
    cartList: getByIdRequest('cart/get'),
    productDetail: getByIdRequest('product/get'),
    cartRemoveItem: deleteRequest('cart/remove')

});





const store = createStore(reducer, applyMiddleware( thunk));

export default store; 
