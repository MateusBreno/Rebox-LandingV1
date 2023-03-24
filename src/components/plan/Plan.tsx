import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { PlanModal } from '..';
import { Container, Desc, KnowMoreButton, Price, Title, Wrapper } from './Styles';

interface Props {
  title: string;
  price: string;
  numberOfYearUtilizations: string;
  numberOfMonthUtilizations: string;
  vehicleType: string;
  year: string;
  grace: string;
  items: string[];
  bestSeller?: boolean;
  marginRight?: string;
  url: string;
}

interface ItemProps {
  text: string;
  numberOfYearUtilizations: string;
}

const Item: React.FC<ItemProps> = ({ text, numberOfYearUtilizations }) => {
  return (
    <Desc style={{ display: 'flex', justifyContent: 'center' }}>
      <FontAwesomeIcon
        icon={faCircleCheck}
        color="#00df1e"
        style={{ marginRight: '0.5rem', fontSize: '1.125rem' }}
      />
      {`${text}`}
    </Desc>
  );
};

const Plan: React.FC<Props> = ({
  title,
  price,
  numberOfYearUtilizations,
  numberOfMonthUtilizations,
  vehicleType,
  year,
  grace,
  items,
  bestSeller,
  marginRight,
  url,
}) => {
  const [showPlanModal, setShowPlanModal] = useState<boolean>(false);

  const handleShowPlanModal = (): void => {
    setShowPlanModal(true);
  };

  const handleClosePlanModal = (): void => {
    setShowPlanModal(false);
  };

  return (
    <>
      <Container bestSeller={bestSeller} style={{ marginRight }}>
        <Title>
          {title}
          {bestSeller && (
            <div className="ribbonPrice">
              <div className="ribbonInner">Mais vendido</div>
            </div>
          )}
        </Title>
        <Price>{price} por mês</Price>
        <Wrapper>
          <Desc>{numberOfYearUtilizations} Utilizações por ano</Desc>
          <Desc style={{ fontWeight: '900' }}>Cobertura:</Desc>
          {items.map(item => (
            <Item
              key={item || ''}
              numberOfYearUtilizations={numberOfYearUtilizations}
              text={item}
            />
          ))}
        </Wrapper>
        <KnowMoreButton onClick={handleShowPlanModal}>Clique e saiba mais</KnowMoreButton>
      </Container>
      <PlanModal
        show={showPlanModal}
        onClose={handleClosePlanModal}
        title={title}
        numberOfYearUtilizations={numberOfYearUtilizations}
        numberOfMonthUtilizations={numberOfMonthUtilizations}
        vehicleType={vehicleType}
        year={year}
        grace={grace}
        price={price}
        items={items}
        url={url}
      />
    </>
  );
};

export default Plan;
