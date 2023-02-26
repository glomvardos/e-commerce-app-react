import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useNavigation } from 'react-router-dom'
import { Spinner } from '../UI'

interface Props {
  message: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 158px);
  gap: 0.8rem;
  
  .retry {
    all: unset;
    background-color: var(--primary);
    color: var(--light);
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 0.5rem 1.5rem;
    font-size: 1.2rem;
    transition: var(--transition);
    
    &:hover {
        opacity: 0.9;
    }
  }
`

export function ReFetchData({ message }:Props) {
  const { t } = useTranslation()
  return (
    <Container>
      <h2>{t(message)}</h2>
      <button type="submit" className="retry" onClick={() => window.location.reload()}>
        { t('retry')}
      </button>
    </Container>
  )
}
