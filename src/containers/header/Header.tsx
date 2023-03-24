import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Container,
  InnerWrapper,
  SubTitle,
  Title,
  IconWrapper,
  Wrapper,
} from './Styles';
import { Divider, Navbar } from '../../components';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Navbar />
      <InnerWrapper>
        <div />
        <div style={{ marginBottom: '4rem'}}>
          <Container>
            <Title>Faça como</Title>
            <Title>Stênio Garcia</Title>
            <SubTitle>Contrate um plano da Rebox e fique tranquilo!</SubTitle>
            <Button onClick={(): void => navigate('/#planos')}>Conheça agora</Button>
          </Container>
          <IconWrapper>
            <FontAwesomeIcon
              onClick={(): void => navigate('/#quemSomos')}
              icon={faArrowDown}
              color="white"
              fontSize="32px"
            />
          </IconWrapper>
        </div>
      </InnerWrapper>
      <Divider />
    </Wrapper>
  );
};

export default Header;
