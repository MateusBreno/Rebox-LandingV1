import { useLocation, useNavigate } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
import images from '../../constants/images';

import {
  Body,
  Button,
  Container,
  Desc,
  Image,
  ImageWrapper,
  ImageWrapperColumn,
  Title,
  Wrapper,
} from './Styles';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useScroll(location);

  return (
    <Container id="quemSomos">
      <Wrapper>
        <div>
          <Title>O que fazemos?</Title>
          <Desc style={{ marginBottom: '1rem' }}>
            Conheça nossos planos de assistência veicular 24h
          </Desc>
          <Desc>Pague apenas alguns centavos por dia e fique tranquilo!</Desc>
          <Desc style={{ marginBottom: '1.5rem' }}>
            CONTRATE AGORA e CANCELE quando quiser.
          </Desc>
          <Desc>Na Rebox não tem FIDELIDADE, caso você não use nenhuma assistência.</Desc>
          <br/>
          <Body>
            <ImageWrapper>
              <ImageWrapperColumn>
                <ImageWrapper>
                  <Image src={images.reboque} loading="lazy" />;
                  <Image src={images.chaveiro} loading="lazy" />
                </ImageWrapper>
              </ImageWrapperColumn>
            </ImageWrapper>
            <ImageWrapper>
              <ImageWrapperColumn>
                <ImageWrapper>
                  <Image src={images.combustivel} loading="lazy" />
                  <Image src={images.mecanico} loading="lazy" />
                </ImageWrapper>
              </ImageWrapperColumn>
            </ImageWrapper>
            <ImageWrapper>
              <ImageWrapperColumn>
                <ImageWrapper>
                  <Image src={images.pneu} loading="lazy" />
                  <Image src={images.bateria} loading="lazy" />;
                </ImageWrapper>
              </ImageWrapperColumn>
            </ImageWrapper>
          </Body>
        </div>
        <Button onClick={(): void => navigate('/#planos')}>Saiba mais</Button>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
