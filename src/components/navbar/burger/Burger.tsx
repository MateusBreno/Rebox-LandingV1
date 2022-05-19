import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { StyledBurger } from './Styles';

const Burger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Sidebar open={open} onClick={(): void => setOpen(false)} />
      <StyledBurger open={open} onClick={(): void => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Burger;
