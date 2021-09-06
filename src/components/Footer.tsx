import styled from 'styled-components';

const Wrapper = styled.footer`
  /* margin: 0 auto; */
  /* margin-top: 2rem; */
  /* display: flex; */
  /* justify-content: space-around; */
  /* align-items: center; */
  /* text-align: center; */
  margin: 0 auto;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export default function Header(props: any) {
  return (
    <Wrapper>
      <p>Made with 🍵, 🌮, 🌞 | Ragnarok Wallet © {new Date().getFullYear()}</p>
    </Wrapper>
  );
}
