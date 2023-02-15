import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import { ChildrenTypes } from '../../../../interfaces'

interface Props extends ChildrenTypes {
  backdropActionHandler?: () => void
  background?: string
  showModal: boolean
}
const BaseModal = ({
  children,
  showModal,
  backdropActionHandler,
  background
}: Props) => {
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

export default BaseModal

interface StyledProps {
  showModal: boolean
  background?: string
}

const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
  ${({ showModal }: StyledProps) => {
    if (showModal) {
      return css`
        opacity: 1;
        visibility: visible;
      `
    } else {
      return css`
        opacity: 0;
        visibility: hidden;
      `
    }
  }}
`

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: ${({ background }: StyledProps) =>
    background ? background : 'var(--light)'};
  z-index: 100;
  transition: var(--transition);
  ${({ showModal }: StyledProps) => {
    if (showModal) {
      return css`
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        transform-origin: center;
      `
    } else {
      return css`
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      `
    }
  }}
`
