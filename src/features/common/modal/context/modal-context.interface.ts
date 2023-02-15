export interface ModalContextInterface {
  state: ModalStateInterface
  openModalHandler: ({
    message,
    resourceId,
    mutateKey
  }: OpenModalHandlerInterface) => void
  closeModalHandler: () => void
}

export interface ModalStateInterface {
  showModal: boolean
  modalMessage: string
  resourceId: number | null
  mutateKey: string
}

export type ModalActionTypes =
  | {
      type: 'OPEN_MODAL'
      payload: {
        modalMessage: ModalStateInterface['modalMessage']
        resourceId: ModalStateInterface['resourceId']
        mutateKey: ModalStateInterface['mutateKey']
      }
    }
  | { type: 'CLOSE_MODAL' }

export interface OpenModalHandlerInterface {
  message: ModalStateInterface['modalMessage']
  resourceId: ModalStateInterface['resourceId']
  mutateKey: ModalStateInterface['mutateKey']
}
