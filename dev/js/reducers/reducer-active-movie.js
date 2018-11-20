export default function (state = null, action) {
  switch(action.type) {
    case 'MOVIE_SELECT':
    return action.payload;
    break;
  }
  return state;
}