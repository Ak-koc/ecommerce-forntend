const initialState = {
    data: [],
    success: false,
    loading: false,
    error: false
  }
  
  export const deleteRequest = (namespace) => (state = initialState, action) => {
    switch (action.type) {
      case `${namespace}/DELETE_REQUEST_BY_ID_REQUEST`: {
        return {...initialState, loading: true}
      }
      case `${namespace}/DELETE_REQUEST_BY_ID_SUCCESS`: {
        return {...state, data: action.data, loading: false, error: false, success: true}
      }
      case `${namespace}/DELETE_REQUEST_BY_ID_FAILURE`: {
        return {...state, data: action.data, loading: false, error: true, success: false}
      }
        
      default:
        return state;
       
    }
  }