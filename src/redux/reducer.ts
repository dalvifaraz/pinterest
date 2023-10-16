import { combineReducers } from 'redux';

const initialState: any = {
  count: 0,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: appReducer,
});

export default rootReducer;
