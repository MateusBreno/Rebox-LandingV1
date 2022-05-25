import Burger from './burger/Burger';
import { Container, Logo } from './Styles';
import {memo} from 'react';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo
        src="https://rebox.com.br/planos/wp-content/uploads/2020/10/logo_rebox.png"
        loading="lazy"
      />
      <Burger />
    </Container>
  );
};

export default memo(Navbar);
