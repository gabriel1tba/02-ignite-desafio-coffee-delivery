import { useTheme } from 'styled-components';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { RiTimerFill } from 'react-icons/ri';

import { useCartContext } from '../../hooks/useCart';

import Illustration from '../../assets/Illustration.png';

import * as S from './styles';

const ConfirmedOrder = () => {
  const theme = useTheme();
  const { address } = useCartContext();

  return (
    <S.Wrapper>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <S.BorderGradient>
          <S.BannerList>
            <S.BannerItem backgroundColor={theme.colors.purple.medium}>
              <div>
                <MdLocationOn />
              </div>
              <span>
                Entrega em
                <strong>{` Rua ${address.street}, ${address.number} `}</strong>{' '}
                <br />
                {`${address.neighborhood} - ${address.city}, ${address.uf}`}
              </span>
            </S.BannerItem>
            <S.BannerItem backgroundColor={theme.colors.yellow.medium}>
              <div>
                <RiTimerFill />
              </div>
              <div>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </S.BannerItem>
            <S.BannerItem backgroundColor={theme.colors.yellow.dark}>
              <div>
                <BsCurrencyDollar />
              </div>
              <div>
                Pagamento na entrega
                <br />
                <strong>{`${address.paymentMethod.typeName}`}</strong>
              </div>
            </S.BannerItem>
          </S.BannerList>
        </S.BorderGradient>

        <img src={Illustration} />
      </div>
    </S.Wrapper>
  );
};

export default ConfirmedOrder;
