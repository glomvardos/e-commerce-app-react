import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { StyledTablePagination } from './TablPagination.styles'

interface PaginationProps {
  pageSize: number
  pageIndex: number
  pageLength: number
  previousPage: () => void
  canPreviousPage: boolean
  nextPage: () => void
  canNextPage: boolean
  pageOptions: number[]
}

export function TablePagination({
  pageSize,
  pageIndex,
  pageLength,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageOptions
}: PaginationProps) {
  const { t } = useTranslation()
  const pageNumName = pageOptions.length > 1 ? t('pages') : t('page')
  const borderClasses = 'border bg-white border-solid border-[#BEBEBE] rounded-md w-[30px] h-[30px] flex items-center justify-center hover:opacity-70 transition-opacity duration-200'
  const borderDisableClasses = 'disabled:border-[#E2E2E2]'

  return (
    <StyledTablePagination>
      <p>
        {`${pageSize * pageIndex + 1} - ${
          pageSize * pageIndex + pageLength
        } ${t('of')} ${pageOptions.length} ${pageNumName}`}
      </p>

      <div className="flex gap-2">
        <button
          className={`${borderClasses} ${borderDisableClasses}`}
          type="button"
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          <BsChevronLeft
            className={`${
              !canPreviousPage ? 'text-light-gray' : 'text-dark-gray'
            }`}
          />
        </button>
        <button
          className={`${borderClasses} ${borderDisableClasses}`}
          type="button"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          <BsChevronRight
            className={`${!canNextPage ? 'text-light-gray' : 'text-dark-gray'}`}
          />
        </button>
      </div>
    </StyledTablePagination>
  )
}
