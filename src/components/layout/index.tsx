import { FC, ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

interface Props {
  children: ReactNode;
  pageTitle: string;
}

const Layout: FC<Props> = ({ children, pageTitle }) => {
  return (
    <>
      <NavBar pageTitle={pageTitle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
