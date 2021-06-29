import React, { FC } from 'react';
import { Container, HeaderContainer } from './Header.styled';
import SiteTitle from './SiteTitle/SiteTitle';

interface HeaderProps {
  isSearchPage: boolean;
}

const Header: FC<HeaderProps> = ({ isSearchPage, children }) => {
  return (
    <HeaderContainer>
      <Container>
        <SiteTitle isSearchPage={isSearchPage} />
      </Container>
      <Container>{children}</Container>
    </HeaderContainer>
  );
};

export default Header;
