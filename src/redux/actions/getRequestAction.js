function request(namespace) {
    return {
      type: `${namespace}/GET_REQUEST_BY_REQUEST`
    }
  }
  
  function success(namespace, data) {
    return {
      type: `${namespace}/GET_REQUEST_BY_SUCCESS`,
      data
    }
  }
  
  function failure(namespace) {
    return {
      type: `${namespace}/GET_REQUEST_BY_FAILURE`
    }
  }
  
  
  export const getRequest = (namespace) => async (dispatch) => {
    try {
      dispatch(request(namespace));
      const response = await fetch(`${process.env.REACT_APP_API_URL}/${namespace}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(success(namespace, data)); 
    } catch (error) {
      dispatch(failure(namespace, error));
    }
  };
  
  