import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import Settings from './Settings';

const Wrapper = styled.header`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function Header(props: any) {
  return (
    <Wrapper>
      <Logo />
      <Navigation {...props} />
      <Settings />
    </Wrapper>
  );
}
