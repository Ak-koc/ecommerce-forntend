const initialState = {
    data: [],
    success: false,
    loading: false,
    error: false
  }
  
  export const postRequest = (namespace) => (state = initialState, action) => {
    switch (action.type) {
      case `${namespace}/POST_REQUEST_REQUEST`: {
        return {...initialState, loading: true}
      }
      case `${namespace}/POST_REQUEST_SUCCESS`: {
        return {...state, data: action.data, loading: false, error: false}
      }
      case `${namespace}/POST_REQUEST_FAILURE`: {
        return {...state, data: action.data, loading: false, error: true}
      }
        
      default:
        return state;
       
    }
  }