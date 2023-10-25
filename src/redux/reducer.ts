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

const initialPinterestState: any = {
  searchValue: '',
}

const pinterestReducer = (state = initialPinterestState, action: any) => {
  switch (action.type) {
    case 'SET_PIN_SEARCH':
      return { ...state, searchValue: action.value };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: appReducer,
  pinterest: pinterestReducer,
});

export default rootReducer;
