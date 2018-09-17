// 変更を検知するたびにreducerが発行される
export default (state = { place: 'hoge' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_PLACE':
      return Object.assign({}, state, { place: action.place })
    default:
      return state;
  }
};


/*
storeをつくって、dispatchをすると、reducerが動き、viewが更新される。
*/
