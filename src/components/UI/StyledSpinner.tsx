import styled from 'styled-components'

export const StyledSpinner = styled.span`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    top: -10px;
    animation: bblFadInOut 1.8s infinite ease-in-out;
  }
  & {
    color: var(--primary);
    font-size: 5px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0px;
  }
  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }

  @keyframes bblFadInOut {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`
