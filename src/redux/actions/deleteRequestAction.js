function request(namespace) {
    return {
      type: `${namespace}/DELETE_REQUEST_BY_ID_REQUEST`
    }
  }
  
  function success(namespace, data) {
    return {
      type: `${namespace}/DELETE_REQUEST_BY_ID_SUCCESS`,
      data
    }
  }
  
  function failure(namespace) {
    return {
      type: `${namespace}/DELETE_REQUEST_BY_ID_FAILURE`
    }
  }
  
  
  export const deleteRequest = (namespace, variable, id) => async (dispatch) => {

    try {
        dispatch(request(namespace));
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${namespace}/${variable}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {

        }
        console.log(response);

        const responseData = response.json();
        dispatch(success(namespace, responseData));
    } catch (error) {
        dispatch(failure(namespace, error));
    }
};
  
  