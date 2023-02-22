import { ReactNode } from 'react'

interface Props {
  isTrue: boolean;
  children: ReactNode;
}
export function RenderIf({ isTrue, children }:Props) {
  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    isTrue ? <>{children}</> : null
  );
}
