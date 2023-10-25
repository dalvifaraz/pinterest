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

export { increment, decrement, setPinSearch };
