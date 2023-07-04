import { FC, ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
