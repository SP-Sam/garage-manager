import { FC, useEffect, useState } from 'react';
import { NavBarItemsWrapper, NavBarWrapper, PageTitle } from './styles';
import { Menu, User2, X } from 'lucide-react';
import { useRouter } from 'next/router';

interface Props {
  pageTitle: string;
}

const NavBar: FC<Props> = ({ pageTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <NavBarWrapper>
      {router.pathname !== '/dashboard' && (
        <NavBarItemsWrapper onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </NavBarItemsWrapper>
      )}

      <PageTitle>{pageTitle}</PageTitle>

      <NavBarItemsWrapper>
        <User2 />
      </NavBarItemsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
