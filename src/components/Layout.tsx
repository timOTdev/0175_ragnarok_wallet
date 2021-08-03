import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const ChildWrapper = styled.div`
  height: 100%;
`;

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <ChildWrapper>{children}</ChildWrapper>
      <Footer />
    </>
  );
}
