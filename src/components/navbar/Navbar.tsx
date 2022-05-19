import Burger from './burger/Burger';
import { Container, Logo } from './Styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo src="https://rebox.com.br/planos/wp-content/uploads/2020/10/logo_rebox.png" />
      <Burger />
    </Container>
  );
};

export default Navbar;
