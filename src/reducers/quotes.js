export default (state = [], action) => {
  let idx
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [Object.assign({}, state[idx], {votes: state[idx].votes += 1})]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if (state[idx].votes > 0) {
        return [Object.assign({}, state[idx], {votes: state[idx].votes -= 1})]
      }
    default:
      return state;
  }
}
