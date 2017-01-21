export default function reducer(state={
    user: '',
    inputName: '',
    newtitle: '',
    inputTitle: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_USER':
        return {...state, user: state.inputName, inputName: ''}
      case 'CHANGE_INPUT_NAME':
        return {...state, inputName: action.payload}
      case 'CHANGE_TITLE':
        return {...state, newtitle: state.inputTitle, inputTitle: ''}
      case 'CHANGE_INPUT_TITLE':
        return {...state, inputTitle: action.payload}




      default:
        return state;
    }
}
