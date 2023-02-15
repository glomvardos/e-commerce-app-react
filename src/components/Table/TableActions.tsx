import styled from 'styled-components'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'

interface Props {
  onClickHandlerEdit?: () => void
  onClickHandlerDelete?: () => void
}
const TableActions = ({ onClickHandlerEdit, onClickHandlerDelete }: Props) => {
  return (
    <StyledContainer>
      {onClickHandlerEdit && <FiEdit className="edit" size={20} />}
      {onClickHandlerDelete && <MdDelete className="delete" size={20} />}
    </StyledContainer>
  )
}

export default TableActions

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--border);
      border-radius: 0.25rem;
    }
  }

  .edit {
    color: var(--primary);
  }

  .delete {
    color: var(--error);
  }
`
