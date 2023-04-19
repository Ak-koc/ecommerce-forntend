function request(namespace) {
    return {
      type: `${namespace}/POST_REQUEST_BY_ID_REQUEST`
    }
  }
  
  function success(namespace, data) {
    return {
      type: `${namespace}/POST_REQUEST_BY_ID_SUCCESS`,
      data
    }
  }
  
  function failure(namespace) {
    return {
      type: `${namespace}/POST_REQUEST_BY_ID_FAILURE`
    }
  }
  
  
  export const postByIdRequest = (namespace, variable, id) => async (dispatch) => {
    try {
        dispatch(request(namespace));
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${namespace}/${variable}/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData);
        dispatch(success(namespace, responseData));
    } catch (error) {
        dispatch(failure(namespace, error));
    }
};
  
  