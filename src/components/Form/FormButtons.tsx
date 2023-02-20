import styled, { css } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface StyleProps {
  buttonType?: 'primary' | 'secondary'
}
const StyledFormButton = styled.button`
  all: unset;
  height: 3.1rem;
  padding: 0.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  color: var(--light);
  
  ${({ buttonType }:StyleProps) => {
    if (buttonType === 'primary') {
      return css`
        background-color: var(--primary);
      `
    }
    return css`
        background-color: var(--secondary);
      `
  }
}}

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`

const StyledFormButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.25rem;
  margin-top: 2rem;
`

interface Props {
  primaryText: string
}

export function FormButtons({ primaryText }:Props) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <StyledFormButtonWrapper>
      <StyledFormButton type="button" onClick={() => navigate(-1)}>{t('cancel')}</StyledFormButton>
      <StyledFormButton type="submit" buttonType="primary">{t(primaryText)}</StyledFormButton>
    </StyledFormButtonWrapper>
  )
}
