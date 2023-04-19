const initialState = {
  data: [],
  success: false,
  loading: false,
  error: false
}

export const getByIdRequest = (namespace) => (state = initialState, action) => {
  switch (action.type) {
    case `${namespace}/GET_REQUEST_BY_ID_REQUEST`: {
      return {...initialState, loading: true}
    }
    case `${namespace}/GET_REQUEST_BY_ID_SUCCESS`: {
      return {...state, data: action.data, loading: false}
    }
    case `${namespace}/GET_REQUEST_BY_ID_FAILURE`: {
      return {...state, data: action.data, loading: false, error: true}
    }
      
    default:
      return state;
     
  }
}