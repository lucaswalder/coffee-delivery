import { ShoppingCartSimple } from 'phosphor-react';
import * as C from './style';

interface ButtonProps {
  quantity?: number;
}

const ButtonCart: React.FC<ButtonProps> = ({ quantity }) => {
  return (
    <C.ButtonMain>
      <ShoppingCartSimple weight='fill' size={22} color='#C47F17' />
      {quantity &&
        <span>{quantity}</span>
      }
    </C.ButtonMain>
  )
};

export { ButtonCart };
