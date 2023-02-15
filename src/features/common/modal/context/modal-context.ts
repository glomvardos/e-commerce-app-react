import { createContext } from 'react'
import { ModalContextInterface } from './modal-context.interface'

const ModalContext = createContext<ModalContextInterface>({
  state: {
    showModal: false,
    modalMessage: '',
    resourceId: null,
    mutateKey: ''
  },
  openModalHandler: ({ message, resourceId, mutateKey }) => {},
  closeModalHandler: () => {}
})

export default ModalContext
