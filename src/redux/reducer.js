const initialState = {
  created: false,
  updated: false,
  deleted: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATED': {
      return {
        ...state,
        created: true,
        updated: false,
        deleted: false,
      };
    }
    case 'UPDATED': {
      return {
        ...state,
        created: false,
        updated: true,
        deleted: false,
      };
    }
    case 'DELETED': {
      return {
        ...state,
        created: false,
        updated: false,
        deleted: true,
      };
    }
    default:
      return state;
  }
}
