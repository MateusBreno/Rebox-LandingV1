import { FacebookRounded } from '@mui/icons-material';
import React, {memo} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import {
  Blog,
  Bottom,
  Container,
  Copyright,
  Divider,
  Facebook,
  Instagram,
  Logo,
  Top,
} from './Styles';
import instagram from '../../assets/svg/instagram.svg';

const Footer: React.FC = () => {
  return (
    <Container>
      <Logo
        src="https://rebox.com.br/planos/wp-content/uploads/2020/10/logo_rebox.png"
        loading="lazy"
      />
      <Top>
        <span>CNPJ: 37.667.543/0001-77</span>
        <span>
          AV. DAS AMÉRICAS, 3443 – BLOCO 3, SALA 202 – BARRA DA TIJUCA – RIO DE JANEIRO –
          RJ
        </span>
        <span>E-mail: faleconosco@rebox.com.br</span>
        <span>Ligue grátis: 0800 100 1100</span>
      </Top>
      <Bottom>
        <span>Siga-nos nas redes sociais:</span>
        <Facebook href="https://www.facebook.com/rebox.assistencia24h" target="_blank">
          <FacebookRounded color="inherit" style={{ color: '#fff' }} />
        </Facebook>
        <Instagram
          href="https://instagram.com/reboxassistencia24h?igshid=10c4f0cqee090"
          target="_blank"
        >
          <img
            src={instagram}
            width={24}
            height={24}
            alt=""
            style={{
              filter:
                'invert(100%) sepia(0%) saturate(7477%) hue-rotate(107deg) brightness(101%) contrast(105%)',
            }}
          />
        </Instagram>
        <Blog href="https://blog.rebox.com.br" target="_blank">
          <FontAwesomeIcon icon={faBlog} color="#fff" fontSize={24} />
        </Blog>
      </Bottom>
      <Divider />
      <Copyright>Copyright ©2020 Rebox – Todos os direitos reservados </Copyright>
    </Container>
  );
};

export default memo(Footer);
