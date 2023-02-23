import { AiFillCloseCircle } from 'react-icons/ai'
import { TiWarning } from 'react-icons/ti'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useNavigation, useSubmit } from 'react-router-dom'
import { useEffect } from 'react'
import { BaseModal, StyledModalButton, useModalContext } from '../index'

interface Props {
  actionRoute?: string
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .close-icon {
    margin-left: auto;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      opacity: 0.9;
    }
  }
  .message {
    text-align: center;
    color: #fff;
    font-size: 17px;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0.7rem;
`
export function ConfirmationModal({ actionRoute }:Props) {
  const { t } = useTranslation()
  const { modalState, closeModalHandler } = useModalContext()
  const navigation = useNavigation()
  const submit = useSubmit()
  const onDeleteHandler = () => {
    submit({ id: modalState.resourceId!.toString() }, { method: 'delete', action: actionRoute ?? undefined })
  }

  useEffect(() => {
    if (navigation.state === 'loading') {
      closeModalHandler()
    }
  }, [navigation.state, closeModalHandler])

  return (
    <BaseModal
      background="var(--primary)"
      backdropActionHandler={closeModalHandler}
      showModal={modalState.showModal}
    >
      <StyledContainer className="flex flex-col items-center justify-center w-full">
        <AiFillCloseCircle
          color="var(--secondary)"
          size={28}
          className="close-icon"
          onClick={closeModalHandler}
        />
        <TiWarning size={90} color="var(--error)" />
        <p className="message">{t(modalState.modalMessage)}</p>
        <StyledWrapper>
          <StyledModalButton
            onClick={closeModalHandler}
            background="var(--secondary)"
            type="button"
          >
            {t('noCancel')}
          </StyledModalButton>
          <StyledModalButton
            disabled={navigation.state === 'submitting'}
            onClick={onDeleteHandler}
            background="var(--error)"
            type="button"
          >
            {t('yesDelete')}
          </StyledModalButton>
        </StyledWrapper>
      </StyledContainer>
    </BaseModal>
  )
}
