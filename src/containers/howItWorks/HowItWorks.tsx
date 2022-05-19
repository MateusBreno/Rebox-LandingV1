import { useLocation } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'styled-components';
import { Divider } from '../../components';
import { useScroll } from '../../hooks/useScroll';
import {
  Body,
  BodyWrapper,
  Container,
  Desc,
  Header,
  InfoDesc,
  InfoImage,
  InfoTextWrapper,
  InfoTitle,
  InfoWrapper,
  Separator,
  SubTitle,
  Title,
} from './Styles';

interface InfoProps {
  title: string;
  desc: string;
  desc2?: string;
  imgUrl: string;
}

export const InfoItem: React.FC<InfoProps> = ({ title, desc, desc2, imgUrl }) => {
  return (
    <InfoWrapper>
      <InfoImage src={imgUrl} />
      <InfoTextWrapper>
        <InfoTitle>{title}</InfoTitle>
        <InfoDesc style={{ marginBottom: '1rem' }}>{desc}</InfoDesc>
        {desc2 && <InfoDesc>{desc2}</InfoDesc>}
      </InfoTextWrapper>
    </InfoWrapper>
  );
};

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
        color={theme.colors.secondary}
        icon={faCaretDown}
        style={{ marginRight: '10px' }}
        fontSize="20px"
      />
      <Separator />
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const location = useLocation();
  useScroll(location);

  return (
    <Container id="comoFunciona">
      <Header>
        <Title>Como funciona?</Title>
        <MyDivider />
        <SubTitle>Não vendemos seguros para carros!</SubTitle>
        <Desc>
          Nossos planos dão direito a assistência veicular 24 horas em todo o Brasil e uma
          rede de benefícios para nossos clientes!
        </Desc>
      </Header>
      <Body>
        <BodyWrapper>
          <InfoItem
            imgUrl="https://rebox.com.br/planos/wp-content/uploads/2021/01/escolha.svg"
            title="1) Escolha um dos nossos planos"
            desc="Com nossos planos, você poderá solicitar 04 (quatro), 6 (seis) ou 12 (doze) assistências 24h por ano. Elas podem ser do mesmo serviço ou variadas."
            desc2="Temos planos para carros de passeio, motos, SUVs, picapes pequenas e médias com atendimento em todo o Brasil e a maior e mais qualificada rede de prestadores."
          />
          <InfoItem
            imgUrl="https://rebox.com.br/planos/wp-content/uploads/2021/01/cadastro.svg"
            title="2) Complete seu cadastro"
            desc="SEM BUROCRACIA e SEM PEGADINHAS, você contrata seu plano em apenas 2 minutos."
          />
          <InfoItem
            imgUrl="https://rebox.com.br/planos/wp-content/uploads/2021/01/forma-de-pagamento.svg"
            title="3) Escolha a forma de pagamento"
            desc="Você pode pagar através do cartão de crédito ou boleto, ambos em forma de assinatura mensal. Não comprometemos o limite de seu cartão, só cobramos o valor de sua mensalidade. Já o boleto, enviamos todo mês para seu e-mail, na data escolhida para pagamento."
          />
          <InfoItem
            imgUrl="https://rebox.com.br/planos/wp-content/uploads/2021/01/relogio.svg"
            title="4) Carência para usar o serviço"
            desc="Após a confirmação do pagamento da primeira mensalidade, você aguarda 3 (três) dias úteis para começar a usar os serviços de assistência 24h."
          />
          <InfoItem
            imgUrl="https://rebox.com.br/planos/wp-content/uploads/2021/01/ligacao-de-emergencia.svg"
            title="5) E pronto! Agora é só usar."
            desc="Após a carência, você poderá solicitar os serviços quando precisar, através de um dos nossos canais."
          />
        </BodyWrapper>
      </Body>
      <Divider />
    </Container>
  );
};

export default HowItWorks;
