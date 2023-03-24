/* eslint-disable react/no-array-index-key */
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '..';
import { Desc } from '../plan/Styles';
import {
  Benefit,
  BenefitsTitle,
  BenefitsWrapper,
  Button,
  Container,
  Footer,
  Header,
  Price,
  PriceDesc,
  Title,
  Wrapper,
  WrapperPrice,
  WrapperTitle,
} from './Styles';

interface Props {
  show: boolean;
  title: string;
  numberOfYearUtilizations: string;
  numberOfMonthUtilizations: string;
  vehicleType: string;
  year: string;
  grace: string;
  price: string;
  items: string[];
  url: string;
  onClose: () => void;
}

interface BenefitsProps {
  title: string;
  benefitNumber?: string;
  items: string[];
  forYou?: boolean;
}

interface ItemProps {
  text: string;
  numberOfYearUtilizations: string | undefined;
  forYou?: boolean;
}

const Item: React.FC<ItemProps> = ({ text, forYou, numberOfYearUtilizations }) => {
  return (
    <Desc
      style={{
        borderBottom: '1px solid rgba(221,221,221,.63)',
        textAlign: 'left',
      }}
    >
      <FontAwesomeIcon
        icon={faCircleCheck}
        color="#00df1e"
        style={{ marginRight: '0.5rem', fontSize: '1.125rem' }}
      />
      {!forYou ? `${numberOfYearUtilizations || ''} ${text}` : text}
    </Desc>
  );
};

const Benefits: React.FC<BenefitsProps> = ({ title, benefitNumber, items, forYou }) => {
  return (
    <BenefitsWrapper>
      <span className="benefitSeparator">
        <BenefitsTitle>{title}</BenefitsTitle>
      </span>
      <div className="list">
        {items.map((item, i) => {
          if (!forYou) {
            return (
              !item.includes('Hospedagens') && (
                <Benefit key={title + i.toString()}>
                  <Item text={item} numberOfYearUtilizations={benefitNumber} />
                </Benefit>
              )
            );
          }
          return !item.includes('Hospedagens') ? (
            <Benefit key={title + i.toString()}>
              <Item text={item} numberOfYearUtilizations={benefitNumber} forYou />
            </Benefit>
          ) : (
            <Benefit key={title + i.toString()}>
              <Item text={item} numberOfYearUtilizations={benefitNumber} />
            </Benefit>
          );
        })}
      </div>
    </BenefitsWrapper>
  );
};

const PlanModal: React.FC<Props> = ({
  show,
  title,
  numberOfYearUtilizations,
  numberOfMonthUtilizations,
  vehicleType,
  year,
  grace,
  price,
  items,
  url,
  onClose,
}) => {
  const forYou = ['Hospedagem'];

  return (
    <Modal show={show} onClose={onClose} width="628px" height="100vh">
      <Container>
        <Title>{title}</Title>
        <Header>
          <span className="headerTitle">REGRAS DE UTILIZAÇÃO:</span>
          <div style={{ textAlign: 'center' }}>
            <div className="headerDescWrapper">
              <span className="headerLabel">Utilizações no ano: </span>
              <span className="headerDesc">0{numberOfYearUtilizations}</span>
            </div>
            <div className="headerDescWrapper">
              <span className="headerLabel">Utilizações no mês: </span>
              <span className="headerDesc">{numberOfMonthUtilizations}</span>
              <span className="headerLabel"> com intervalo de 15 dias</span>
            </div>
            <div className="headerDescWrapper">
              <span className="headerLabel">Tipo de veículo: </span>
              <span className="headerDesc">{vehicleType}</span>
            </div>
            <div className="headerDescWrapper">
              <span className="headerLabel">Ano: </span>
              <span className="headerDesc">{year}</span>
            </div>
            <div className="headerDescWrapper">
              <span className="headerLabel">Carência: </span>
              <span className="headerDesc">{grace}</span>
            </div>
            <div className="headerDescWrapper">
              <span className="headerLabel"> Proibido remoção intermunicipal até o segundo acionamento.</span>
            </div>
          </div>
        </Header>
        <Wrapper>
          <WrapperTitle>Nunca foi tão barato cuidar do seu carro!</WrapperTitle>
          <WrapperPrice>
            <Price>{price}</Price>
            <PriceDesc>Por mês</PriceDesc>
          </WrapperPrice>
          <Benefits
            items={items}
            // benefitNumber={numberOfYearUtilizations}
            title={
              vehicleType === 'Carro de passeio' ? 'PARA SEU CARRO' : 'PARA SUA MOTO'
            }
          />
          <Benefits
            title="PARA VOCÊ"
            // benefitNumber={numberOfYearUtilizations}
            items={forYou}
            forYou
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={(): Window => window.open(url, '_blank') as Window}>
              CLIQUE AQUI E CONTRATE AGORA
            </Button>
            <img
              src="https://rebox.com.br/planos/wp-content/uploads/2020/12/egex_meios_de_pagamento_fundo_transparente-300x34.png"
              alt=""
              style={{ marginBottom: '1rem', width: 274 }}
              loading="lazy"
            />
            <img
              width={164}
              src="https://rebox.com.br/planos/wp-content/uploads/2020/12/rebox_site_seguro-300x76.png"
              alt=""
              loading="lazy"
            />
          </div>
          <Footer>
            <span className="footerText">Ficou alguma dúvida?</span>
            <span className="footerText">
              Clique no WhatsApp e fale com algum atendente
            </span>
            <span className="footerText">ou Ligue grátis: 0800 100 1100</span>
          </Footer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default PlanModal;
