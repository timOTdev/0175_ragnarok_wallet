import styled from 'styled-components';
import Connect from './Connect';

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
      <Connect />
      <button>⚙️ Settings</button>
    </Div>
  );
}
