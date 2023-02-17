import { AiFillCloseCircle } from 'react-icons/ai'
import { TiWarning } from 'react-icons/ti'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { AxiosResponse } from 'axios'
import { useMutation } from '../../../../hooks'
import { BaseModal, StyledModalButton, useModalContext } from '../index'
import { ResourceIdType } from '../../../../interfaces'

interface Props {
  deleteFn: ({ id }: ResourceIdType) => Promise<AxiosResponse | null>
  service: any
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
export function ConfirmationModal({ deleteFn, service }: Props) {
  const { t } = useTranslation()
  const { modalState, closeModalHandler } = useModalContext()

  const { trigger: deleteResource } = useMutation<ResourceIdType>({
    mutateKey: modalState.mutateKey,
    mutateFn: (_, { arg }) => deleteFn.bind(service, arg)
  })

  const onDeleteHandler = async () => {
    await deleteResource(
      { id: modalState.resourceId! },
      {
        onSuccess: () => {
          closeModalHandler()
        }
      }
    )
  }

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
