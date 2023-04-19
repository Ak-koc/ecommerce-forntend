function request(namespace) {
  return {
    type: `${namespace}/GET_REQUEST_BY_ID_REQUEST`
  }
}

function success(namespace, data) {
  return {
    type: `${namespace}/GET_REQUEST_BY_ID_SUCCESS`,
    data
  }
}

function failure(namespace) {
  return {
    type: `${namespace}/GET_REQUEST_BY_ID_FAILURE`
  }
}


export const getByIdRequest = (namespace, id) => async (dispatch) => {
  try {
    dispatch(request(namespace));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${namespace}/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    dispatch(success(namespace, data)); 
  } catch (error) {
    dispatch(failure(namespace, error));
  }
};

