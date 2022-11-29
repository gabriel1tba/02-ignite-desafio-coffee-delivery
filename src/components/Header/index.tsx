import { Link } from 'react-router-dom';
import { MdLocationOn, MdShoppingCart } from 'react-icons/md';

import { useCartContext } from '../../hooks/useCart';

import LogoImg from '../../assets/Logo.svg';

import ActionButton from '../ActionButton';
import Button from '../Button';

import * as S from './styles';

const Header = () => {
  const { totalProductsInCart } = useCartContext();

  return (
    <S.Wrapper>
      <Link to="/">
        <img src={LogoImg} alt="Logo" />
      </Link>

      <div>
        <Button variant="common" color="purple" icon={MdLocationOn}>
          Itabuna, BA
        </Button>

        <ActionButton
          variant="common"
          icon={MdShoppingCart}
          pinContent={totalProductsInCart}
        />
      </div>
    </S.Wrapper>
  );
};

export default Header;
