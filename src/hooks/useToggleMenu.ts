import { useRef, useState, useEffect } from 'react'

const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const checkClickOutside = (e: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  const toggleMenuHandler = () => setIsOpen((prevValue) => !prevValue)

  useEffect(() => {
    document.addEventListener('mousedown', checkClickOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkClickOutside)
    }
  }, [isOpen])

  return {
    isOpen,
    toggleMenuHandler,
    ref
  }
}

export default useToggleMenu
