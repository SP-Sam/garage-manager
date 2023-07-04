import { FC } from 'react';
import { FooterLink, FooterText, FooterWrapper } from './styles';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterText>
        &copy; Desenvolvido por{' '}
        <FooterLink href="https://www.linkedin.com/in/spsam/" target="_blank">
          Samuel Pereira
        </FooterLink>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
