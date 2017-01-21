export function changeInputName(name) {
  return {
    type: 'CHANGE_INPUT_NAME',
    payload: name
  }
}

export function changeInputTitle(newtitle) {
  return {
    type: 'CHANGE_INPUT_TITLE',
    payload: newtitle
  }
}

export function submitName() {
  return {
    type: 'CHANGE_USER'
  }
}

export function submitTitle() {
  return {
    type: 'CHANGE_TITLE'
  }
}
