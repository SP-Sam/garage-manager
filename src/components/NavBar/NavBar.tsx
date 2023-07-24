import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import autoAnimate from '@formkit/auto-animate';
import {
  Briefcase,
  Home,
  LogOut,
  Menu,
  User,
  User2,
  UserCog,
  Users,
  Wrench,
  X,
} from 'lucide-react';

import {
  MenuItemLink,
  MenuItemsContainer,
  MenuListItem,
  NavBarToggle,
  NavBarWrapper,
  PageTitle,
} from './styles';

interface Props {
  pageTitle: string;
}

const NavBar: FC<Props> = ({ pageTitle }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
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
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mouseup', handler);
  });

  return (
    <NavBarWrapper ref={parent}>
      {router.pathname !== '/dashboard' && (
        <>
          <NavBarToggle
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
            className={isNavMenuOpen ? 'active' : ''}
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

      <NavBarToggle
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        className={isProfileMenuOpen ? 'active' : ''}
      >
        <User2 />
      </NavBarToggle>

      {isProfileMenuOpen && (
        <MenuItemsContainer className="profile" ref={menuRef}>
          <MenuListItem>
            <MenuItemLink
              href="/profile"
              className={router.pathname === '/profile' ? 'active' : ''}
            >
              <User />
              Minha conta
            </MenuItemLink>
          </MenuListItem>

          <MenuListItem>
            <MenuItemLink href="/auth/login">
              <LogOut />
              Sair
            </MenuItemLink>
          </MenuListItem>
        </MenuItemsContainer>
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
