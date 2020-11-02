const DEFAULT_STATE = {
  items: []
};

function listReducers(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case 'CHATS_FETCH_SUCCESS':
      return { items: payload }
    default: {
      return state;
    }
  }
}

export default listReducers;