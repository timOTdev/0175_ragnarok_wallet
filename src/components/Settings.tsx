import styled from 'styled-components';

const Div = styled.div`
  flex-basis: 33%;
  justify-content: 'space-between';
  * {
    margin: 0 0.5rem;
  }
`

export default function Settings() {
  return (
    <Div>
      <button>Connection 🔴 </button>
      <button>Settings ⚙️</button>
    </Div>
  )
}
