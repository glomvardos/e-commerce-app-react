import styled from 'styled-components'

interface StyledProps {
  height?: number
  width?: number
}
export const StyledCircleAvatar = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  height: ${({ height }: StyledProps) => (height ? `${height}px` : '45px')};
  width: ${({ width }: StyledProps) => (width ? `${width}px` : '45px')};
  border-radius: 50%;
  cursor: pointer;
`
