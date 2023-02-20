import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const StyledBackButton = styled.button`
  all: unset;
  color: var(--primary);
  text-decoration: underline;
  font-size: 0.8rem;
  cursor: pointer;
`

export function BackButton() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return <StyledBackButton onClick={() => navigate(-1)}>{`< ${t('back')}`}</StyledBackButton>
}
