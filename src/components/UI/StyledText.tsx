import styled from 'styled-components'

interface StyledProps {
  fontSize?: number
  fontWeight?: '400' | '500' | '600' | '700'
  color?: 'var(--primary-text)' | 'var(--secondary-text)'
}
export const StyledText = styled.p`
  font-weight: ${({ fontWeight }: StyledProps) =>
    fontWeight ? fontWeight : '400'};
  font-size: ${({ fontSize }: StyledProps) =>
    fontSize ? `${fontSize}px` : '16px'};
  color: ${({ color }: StyledProps) => (color ? color : 'var(--primary-text)')};
`
