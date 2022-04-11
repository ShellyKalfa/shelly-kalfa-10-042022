export const add = (input) => {
  return (dispatch) => {
    dispatch({
      type: 'add',
      payload: input

    })
  }
}

export const remove = (input) => {
  return (dispatch) => {
    dispatch({
      type: 'remove',
      payload:input
    })
  }
}

export const update = ({...input}) => {
  return (dispatch) => {
    dispatch({
      type: 'update',
      payload: {input}
    })
  }
}