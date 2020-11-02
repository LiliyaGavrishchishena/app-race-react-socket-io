const DEFAULT_STATE = {
  isAuth: false,
  isError: null,
};

function authReducers(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case 'AUTH_ON_SUCCESS':
      return { isAuth: true, isError: null }
    case 'AUTH_ON_INIT':
      return { isAuth: false, isError: null }

    case 'AUTH_ON_ERROR':
      return { isAuth: false, isError: payload }
    default: {
      return state;
    }
  }
}

export default authReducers;
