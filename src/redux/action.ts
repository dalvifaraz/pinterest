function increment() {
  return {
    type: 'INCREMENT',
  };
}

function decrement() {
  return {
    type: 'DECREMENT',
  };
}

function setPinSearch(value: string){
  return{
    type: 'SET_PIN_SEARCH',
    value,
  }
}

function setIsUserLogin(value: boolean){
  return{
    type: 'SET_IS_USER_LOGIN',
    value,
  }
}

export { increment, decrement, setPinSearch, setIsUserLogin };
