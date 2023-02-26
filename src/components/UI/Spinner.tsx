import styled from 'styled-components'

const StyledSpinner = styled.div`
  width: 30px;
  text-align: center;
  margin: 0 auto;

  & > div {
    width: 10px;
    height: 10px;
    background-color: var(--light);
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`
export function Spinner() {
  return (
    <StyledSpinner>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </StyledSpinner>
  )
}

export default Spinner
