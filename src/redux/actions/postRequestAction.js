function request(namespace) {
    return {
      type: `${namespace}/POST_REQUEST_REQUEST`
    }
  }
  
  function success(namespace, data) {
    return {
      type: `${namespace}/POST_REQUEST_SUCCESS`,
      data
    }
  }
  
  function failure(namespace) {
    return {
      type: `${namespace}/POST_REQUEST_FAILURE`
    }
  }
  
  
  export const postRequest = (namespace, values) => async (dispatch) => {
    try {
        dispatch(request(namespace));
        const response = await fetch(`${process.env.REACT_APP_API_URL}/${namespace}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values) // values objesini JSON formatına dönüştürüp gövde olarak ekledik
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
  