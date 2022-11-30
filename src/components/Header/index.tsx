import { Link, useNavigate } from 'react-router-dom';
import { MdLocationOn, MdShoppingCart } from 'react-icons/md';

import { useCartContext } from '../../hooks/useCart';
import useGeoLocation from '../../hooks/useGeoLocation';

import LogoImg from '../../assets/Logo.svg';

import ActionButton from '../ActionButton';
import Button from '../Button';

import * as S from './styles';

const Header = () => {
  const navigate = useNavigate();
  const { totalProductsInCart } = useCartContext();
  const { city, regionCode, isLoading } = useGeoLocation();

  return (
    <S.Wrapper>
      <Link to="/">
        <img src={LogoImg} alt="Logo" />
      </Link>

      <div>
        <Button variant="common" color="purple" icon={MdLocationOn}>
          {isLoading ? 'Carregando...' : `${city}, ${regionCode}`}
        </Button>

        <ActionButton
          variant="common"
          icon={MdShoppingCart}
          pinContent={totalProductsInCart}
          onClick={() => navigate('/cart')}
        />
      </div>
    </S.Wrapper>
  );
};

export default Header;
