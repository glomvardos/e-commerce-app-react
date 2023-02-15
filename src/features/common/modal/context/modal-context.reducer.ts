import {
  ModalActionTypes,
  ModalStateInterface
} from './modal-context.interface'

const modalContextReducer = (
  state: ModalStateInterface,
  action: ModalActionTypes
) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        showModal: true,
        modalMessage: action.payload.modalMessage,
        resourceId: action.payload.resourceId
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        modalMessage: '',
        resourceId: null
      }
    default:
      return state
  }
}

export default modalContextReducer
