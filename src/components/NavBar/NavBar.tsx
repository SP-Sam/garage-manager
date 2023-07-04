import { FC, useState } from 'react';
import { NavBarItemsWrapper, NavBarWrapper, PageTitle } from './styles';
import { Menu, User2, X } from 'lucide-react';

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBarWrapper>
      <NavBarItemsWrapper onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </NavBarItemsWrapper>

      <PageTitle>{document.title.replace(' | Garage Manager', '')}</PageTitle>

      <NavBarItemsWrapper>
        <User2 />
      </NavBarItemsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
