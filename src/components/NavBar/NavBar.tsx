import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import autoAnimate from '@formkit/auto-animate';

import {
  MenuItemLink,
  MenuItemsContainer,
  MenuListItem,
  NavBarToggle,
  NavBarWrapper,
  PageTitle,
} from './styles';

import {
  Briefcase,
  Home,
  Menu,
  User2,
  UserCog,
  Users,
  Wrench,
  X,
} from 'lucide-react';

interface Props {
  pageTitle: string;
}

const NavBar: FC<Props> = ({ pageTitle }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const parent = useRef(null);
  let menuRef = useRef<any>();

  const router = useRouter();

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 150 });
  }, [parent]);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsNavMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
  });

  return (
    <NavBarWrapper ref={parent}>
      {router.pathname !== '/dashboard' && (
        <>
          <NavBarToggle
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className={isNavMenuOpen ? 'active' : ''}
            ref={menuRef}
          >
            {isNavMenuOpen ? <X /> : <Menu />}
          </NavBarToggle>

          {isNavMenuOpen && (
            <MenuItemsContainer ref={menuRef}>
              <MenuListItem>
                <MenuItemLink href="/dashboard">
                  <Home />
                  Início
                </MenuItemLink>
              </MenuListItem>

              <MenuListItem>
                <MenuItemLink
                  href="/services"
                  className={router.pathname === '/services' ? 'active' : ''}
                >
                  <Briefcase />
                  Serviços
                </MenuItemLink>
              </MenuListItem>

              <MenuListItem>
                <MenuItemLink
                  href="/car-parts"
                  className={router.pathname === '/car-parts' ? 'active' : ''}
                >
                  <Wrench />
                  Peças
                </MenuItemLink>
              </MenuListItem>

              <MenuListItem>
                <MenuItemLink
                  href="/customers"
                  className={router.pathname === '/customers' ? 'active' : ''}
                >
                  <Users />
                  Clientes
                </MenuItemLink>
              </MenuListItem>

              <MenuListItem>
                <MenuItemLink
                  href="/employees"
                  className={router.pathname === '/employees' ? 'active' : ''}
                >
                  <UserCog />
                  Colaboradores
                </MenuItemLink>
              </MenuListItem>
            </MenuItemsContainer>
          )}
        </>
      )}

      <PageTitle>{pageTitle}</PageTitle>

      <NavBarToggle>
        <User2 />
      </NavBarToggle>
    </NavBarWrapper>
  );
};

export default NavBar;
