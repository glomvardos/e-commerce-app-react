import { BaseModal } from '../index'

interface Props {
  showModal: boolean
}
const ConfirmationModal = ({ showModal }: Props) => {
  return <BaseModal showModal={showModal}>test</BaseModal>
}

export default ConfirmationModal
