import styled from 'styled-components';

const Wrapper = styled.footer`
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function Header(props: any) {
  return <Wrapper>Footer</Wrapper>;
}
