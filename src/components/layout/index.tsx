import { FC, ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
