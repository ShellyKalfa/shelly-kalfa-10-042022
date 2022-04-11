const data= {
  FaveritesChose:[{name:"Tel Aviv",code:215853},{name:"New York",code:349727},{name:"Paris",code:623},]
  ,
  currentCity:{
    nameCity:"Tel Aviv",
    cityCode:215854
  },
  key:"Zb9ODXB2JZdVT9KtPsMY0tBP31IblobH"
}

export default function reducer(state = data, action) {
  switch (action.type) {
    case 'add': {
      const tempState = {...state};
      const index = tempState.FaveritesChose.findIndex((name) => name === action.payload);
      if (index > -1) {
        return state;
      }
      tempState.FaveritesChose=[...tempState.FaveritesChose, action.payload]
      return tempState
    }
    case 'remove': {
      const tempState = {...state};
      const index = tempState.FaveritesChose.findIndex((code) => code.code === action.payload);
      if (index > -1) {
        tempState.FaveritesChose.splice(index, 1);
        return tempState;
      }
      return state;
    }
    case 'update': {
      const tempState = {...state};
      tempState.currentCity= {...tempState.currentCity, ...action.payload.input};
      return tempState;
    }
    default:
      return state;
  }
}