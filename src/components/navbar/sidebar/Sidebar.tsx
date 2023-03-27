import { TextLink, Ul } from './Styles';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

interface Props {
  open: boolean;
  onClick: () => void;
}

const Sidebar: React.FC<Props> = ({ open, onClick }) => {
  const { width } = useWindowDimensions();

  const handleClick = (): void => {
    if (width <= 980) {
      onClick();
    }
  };

  return (
    <Ul open={open}>
      <TextLink href="/#quemSomos" open={open} onClick={handleClick}>
        Quem somos
      </TextLink>
      <TextLink href="/#comoFunciona" open={open} onClick={handleClick}>
        Como funciona
      </TextLink>
      <TextLink href="/#depoimentos" open={open} onClick={handleClick}>
        Depoimentos
      </TextLink>
      <TextLink href="/#planos" open={open} onClick={handleClick}>
        Planos
      </TextLink>
      <TextLink href="/#faq" open={open} onClick={handleClick}>
        Dúvidas frequentes
      </TextLink>
      <TextLink href="https://rebox.com.br/boleto" open={open} onClick={handleClick}>
        Boleto
      </TextLink>
      <TextLink href="https://cliente.rebox.com.br/" open={open} onClick={handleClick}>
        Área do cliente
      </TextLink>

    </Ul>
  );
};

export default Sidebar;
