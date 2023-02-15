import { useMemo, useContext, useReducer } from 'react'
import { ChildrenTypes } from '../../../../interfaces'
import ModalContext from './modal-context'
import {
  ModalContextInterface,
  ModalStateInterface,
  OpenModalHandlerInterface
} from './modal-context.interface'
import modalContextReducer from './modal-context.reducer'

export const useModal = (): ModalContextInterface => useContext(ModalContext)

const initialState: ModalStateInterface = {
  showModal: false,
  modalMessage: '',
  resourceId: null,
  mutateKey: ''
}

const ModalProvider = ({ children }: ChildrenTypes) => {
  const [state, dispatch] = useReducer(modalContextReducer, initialState)

  const openModalHandler = ({
    message,
    resourceId,
    mutateKey
  }: OpenModalHandlerInterface) => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: {
        modalMessage: message,
        resourceId,
        mutateKey
      }
    })
  }

  const closeModalHandler = () => {
    dispatch({
      type: 'CLOSE_MODAL'
    })
  }

  const ctx = useMemo(
    () => ({
      state,
      openModalHandler,
      closeModalHandler
    }),
    [state, openModalHandler, closeModalHandler]
  )

  return <ModalContext.Provider value={ctx}>{children}</ModalContext.Provider>
}

export default ModalProvider
