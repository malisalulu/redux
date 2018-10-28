export default function counter(state = 0, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + action.n
    case 'DECREMENT':
      return state - action.n
    default:
      return state
  }
}
