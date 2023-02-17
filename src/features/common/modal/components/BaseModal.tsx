import ReactDOM from 'react-dom'
import { ChildrenTypes } from '../../../../interfaces'
import { StyledBackdrop, StyledModal } from './BaseModal.styles'

interface Props extends ChildrenTypes {
  backdropActionHandler?: () => void
  background?: string
  showModal: boolean
}

export function BaseModal({
  children,
  showModal,
  backdropActionHandler,
  background
}: Props) {
  const modalRoot = document.getElementById('modal') as HTMLDivElement
  return ReactDOM.createPortal(
    <>
      <StyledBackdrop showModal={showModal} onClick={backdropActionHandler} />
      <StyledModal showModal={showModal} background={background}>
        {children}
      </StyledModal>
    </>,
    modalRoot
  )
}
