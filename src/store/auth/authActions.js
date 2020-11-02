import * as api from '../../api/auth'

const login = data => dispatch => {
  dispatch({ type: 'AUTH_ON_INIT' });

  return api
    .login(data)
    .then((res) => res.success ?
      dispatch({ type: 'AUTH_ON_SUCCESS' }) :
      dispatch({ type: 'AUTH_ON_ERROR', payload: res.err }))
};


export default {
  login,
};
