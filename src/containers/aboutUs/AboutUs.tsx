import { useLocation, useNavigate } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
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
            Na Rebox, você paga poucos centavos por dia e tem tudo que seu carro precisa
            no momento da emergência.
          </Desc>
          <Desc style={{ marginBottom: '1.5rem' }}>
            CONTRATE AGORA e CANCELE quando quiser. Na Rebox não tem FIDELIDADE.
          </Desc>
          <Body>
            <ImageWrapper>
              <ImageWrapperColumn>
                <ImageWrapper>
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3chaveiro.png" />
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3reboque.png" />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3hospedagem.png" />
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3troca-de-pneu.png" />
                </ImageWrapper>
              </ImageWrapperColumn>
            </ImageWrapper>
            <ImageWrapper>
              <ImageWrapperColumn>
                <ImageWrapper>
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3pane-eletrica.png" />
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3comb.png" />
                </ImageWrapper>
                <ImageWrapper>
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/3Carga-de-Bateria.png" />
                  <Image src="https://rebox.com.br/planos/wp-content/uploads/2022/03/4descontos.png" />
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
