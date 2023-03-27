/* eslint-disable react/no-array-index-key */
import { useLocation } from 'react-router-dom';
import {
  faCar,
  faCaretUp,
  faMotorcycle,
  faTruckPickup,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { Plan } from '../../components';
import {
  Body,
  Button,
  Container,
  Header,
  RowButtons,
  Separator,
  Title,
  Wrapper,
} from './Styles';
import { useScroll } from '../../hooks/useScroll';

interface ButtonProps {
  text: string;
  icon: IconDefinition;
  onClick: () => void;
}

const MyDivider: React.FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        textAlign: 'center',
        width: '280px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FontAwesomeIcon
        color={theme.colors.primary}
        icon={faCaretUp}
        style={{ marginRight: '10px' }}
        fontSize="20px"
      />
      <Separator />
    </div>
  );
};

export const MyButton: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: '5px', fontSize: '1.5rem' }} />
      {text}
    </Button>
  );
};

const MOTORCYCLE = 1;
const CAR = 0;
const UTILITY = 2;

const Plans: React.FC = () => {
  const [btnIndex, setBtnIndex] = useState<number>(0);
  const buttons = [
    <MyButton
      onClick={(): void => handleButtonClick(0)}
      text="CARRO DE PASSEIO"
      icon={faCar}
    />,
    <MyButton
      onClick={(): void => handleButtonClick(1)}
      text="MOTO / TRICICLO"
      icon={faMotorcycle}
    />,

    <MyButton
      onClick={(): void => handleButtonClick(2)}
      text="UTILITÁRIOS"
      icon={faTruckPickup}
    />,
  ];
  const motorcycle = [
    'Reboque (100km)',
    'Pane seca',
    'Carga na bateria',
  ];
  const car = [
    'Reboque (100km)',
    'Troca de pneu',
    'Chaveiro (abertura)',
    'Carga na bateria',
    'Pane seca',
  ];
  const carPlus = [
    'Reboque (200km)',
    'Troca de pneu',
    'Chaveiro (abertura)',
    'Carga na bateria',
    'Pane seca',
  ];
  const location = useLocation();
  useScroll(location);

  const handleButtonClick = (idx: number): void => {
    setBtnIndex(idx);
  };

  return (
    <Container id="planos">
      <Header>
        <Title>Escolha seu plano</Title>
        <MyDivider />
        <RowButtons>
          {buttons.map((b, idx) => (
            <div key={`id-${idx}`} className={btnIndex === idx ? 'btnActive' : ''}>
              {b}
            </div>
          ))}
        </RowButtons>
        <Body>
          <Wrapper className={btnIndex === CAR ? 'planActive' : ''}>
            <Plan
              title="REBOX AUTO"
              price="R$24,90"
              numberOfYearUtilizations="4"
              numberOfMonthUtilizations="02"
              vehicleType="Carro de passeio"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              marginRight="2rem"
              url="https://rebox.com.br/checkout?p=767e6f03-e998-49db-a72b-105c9bbf1153&e=mk"
              items={car}
            />
            <Plan
              title="REBOX AUTO SMART"
              price="R$29,90"
              numberOfYearUtilizations="6"
              numberOfMonthUtilizations="02"
              vehicleType="Carro de passeio"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              items={car}
              url="https://rebox.com.br/checkout?p=92e920ab-e668-4fd3-a95d-fd75e6705372&e=mk"
              bestSeller
            />
            <Plan
              title="REBOX AUTO+"
              price="R$39,90"
              numberOfYearUtilizations="6"
              numberOfMonthUtilizations="02"
              vehicleType="Carro de passeio"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              marginRight="2rem"
              url="https://rebox.com.br/checkout?p=7abdf916-9d73-4155-9a72-5e62bc46527e&e=mk"
              items={carPlus}
            />
            <Plan
              title="REBOX LIBERTY"
              price="R$39,90"
              numberOfYearUtilizations="12"
              numberOfMonthUtilizations="01"
              vehicleType="Carro de passeio"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              items={car}
              url="https://rebox.com.br/checkout?p=59f4dfd7-5a48-4105-86ff-cc7c1f54e8ea&e=mk"
            />
          </Wrapper>
          <Wrapper className={btnIndex === UTILITY ? 'planActive' : ''}>
            <Plan
              title="REBOX UTILITY"
              price="R$29,90"
              numberOfYearUtilizations="4"
              numberOfMonthUtilizations="02"
              vehicleType="SUV's e picapes pequenas"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              url="https://rebox.com.br/checkout?p=960c3fc7-99a7-4336-a476-e0d151d0d427&e=mk"
              items={car}
            />
          </Wrapper>
          <Wrapper className={btnIndex === MOTORCYCLE ? 'planActive' : ''}>
            <Plan
              title="REBOX MOTO"
              price="R$24,90"
              numberOfYearUtilizations="4"
              numberOfMonthUtilizations="02"
              vehicleType="moto"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              marginRight="2rem"
              url="https://rebox.com.br/checkout?p=3da14632-6725-4d7c-ac80-0d2e58c2e42f&e=mk"
              items={motorcycle}
            />
            <Plan
              title="REBOX MOTO SMART"
              price="R$29,90"
              numberOfYearUtilizations="6"
              numberOfMonthUtilizations="02"
              vehicleType="moto"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              url="https://rebox.com.br/checkout?p=ce604c2b-c4c0-4ad2-90de-4c9770646837&e=MARKETING"
              items={motorcycle}
            />
            <Plan
              title="REBOX MOTO LIBERTY"
              price="R$39,90"
              numberOfYearUtilizations="12"
              numberOfMonthUtilizations="01"
              vehicleType="moto"
              year="Até 30 anos de fabricação"
              grace="3 dias úteis após confirmação do pagamento"
              url="https://rebox.com.br/checkout?p=5374e65b-79a8-4543-86de-b9cb308f70da&e=mk"
              items={motorcycle}
            />
          </Wrapper>
        </Body>
      </Header>
    </Container>
  );
};

export default Plans;
