import { createContext } from 'react'
import { ModalContextInterface } from './modal-context.interface'

const ModalContext = createContext<ModalContextInterface>({
  modalState: {
    showModal: false,
    modalMessage: '',
    resourceId: null,
    mutateKey: ''
  },
  openModalHandler: () => {},
  closeModalHandler: () => {}
})

export default ModalContext
