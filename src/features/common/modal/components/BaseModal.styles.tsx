import styled, { css } from 'styled-components'

interface StyledProps {
  showModal: boolean
  background?: string
}

export const StyledBackdrop = styled.div`
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
    }
    return css`
        opacity: 0;
        visibility: hidden;
      `
  }}
`

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 500px;
  width: 90%;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background-color: ${({ background }: StyledProps) => (background || 'var(--light)')};
  z-index: 100;
  transition: var(--transition);
  ${({ showModal }: StyledProps) => {
    if (showModal) {
      return css`
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        transform-origin: center;
      `
    }
    return css`
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      `
  }}
`
