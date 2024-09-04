import * as C from './style';

import logoIcon from '../../assets/brand/logo.svg';
import { MapPin } from 'phosphor-react';
import { ButtonCart } from '../buttons/cart';

const Header = () => {
  return (
    <C.HeaderMain>
      <C.HeaderWrapper>
        <img src={logoIcon} alt="" />

        <C.HeaderRow>
          <C.ButtonPlace>
            <MapPin size={22} weight='fill' />
            Belo Horizonte, MG
          </C.ButtonPlace>
          <ButtonCart quantity={2}/>
        </C.HeaderRow>
      </C.HeaderWrapper>
    </C.HeaderMain>
  )
};

export { Header };