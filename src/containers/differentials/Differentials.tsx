import { useLocation } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendarAlt,
  faCaretUp,
  faEdit,
  faLockOpen,
  faMapMarkedAlt,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'styled-components';
import { useScroll } from '../../hooks/useScroll';
import {
  Container,
  Header,
  Separator,
  Title,
  CardWrapper,
  CardText,
  Wrapper,
} from './Styles';

interface CardProps {
  text: string | JSX.Element;
  isColorSecondary?: boolean;
  icon: IconProp;
}

const MyDivider: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        textAlign: 'center',
        width: '228px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon
        color={theme.colors.secondary}
        icon={faCaretUp}
        style={{ marginRight: '10px' }}
        fontSize="20px"
      />
      <Separator />
    </div>
  );
};

const Card: React.FC<CardProps> = ({ text, isColorSecondary, icon }) => {
  const theme = useTheme();

  return (
    <CardWrapper
      style={{
        backgroundColor: !isColorSecondary
          ? theme.colors.primary
          : theme.colors.secondary,
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          fontSize: '50px',
          marginBottom: '1rem',
          color: isColorSecondary ? theme.colors.primary : theme.colors.secondary,
        }}
      />
      <CardText
        style={{
          color: isColorSecondary ? theme.colors.primary : theme.colors.secondary,
        }}
      >
        {text}
      </CardText>
    </CardWrapper>
  );
};

const Differentials: React.FC = () => {
  const location = useLocation();
  useScroll(location);

  return (
    <Container id="diferenciais">
      <Header>
        <Title>Diferenciais</Title>
        <MyDivider />
      </Header>
      <Wrapper>
        <Card
          isColorSecondary
          icon={faLockOpen}
          text={
            <div>
              Sem fidelidade <br />
              (Contrate e cancele quando quiser)
            </div>
          }
        />
        <Card icon={faMapMarkedAlt} text="Atendimento em todo o Brasil" />
        <Card
          isColorSecondary
          icon={faCalendarAlt}
          text="Maior número de utilizações no ano"
        />
        <Card icon={faPercent} text="Desconto de até 80% em farmácias de todo o país" />
        <Card
          isColorSecondary
          icon={faEdit}
          text="Assinatura mensal no boleto ou cartão de crédito"
        />
      </Wrapper>
    </Container>
  );
};

export default Differentials;
