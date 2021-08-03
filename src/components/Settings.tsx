import styled from 'styled-components';

const Div = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: flex-end;
  * {
    margin: 0 0.5rem;
  }
`;

export default function Settings() {
  return (
    <Div>
      <button>Connection 🔴 </button>
      <button>Settings ⚙️</button>
    </Div>
  );
}
