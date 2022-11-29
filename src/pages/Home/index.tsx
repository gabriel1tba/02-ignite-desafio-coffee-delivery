import { useTheme } from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';
import { GiCardboardBoxClosed, GiCoffeeCup } from 'react-icons/gi';
import { RiTimerFill } from 'react-icons/ri';

import { useCartContext } from '../../hooks/useCart';

import BannerImage from '../../assets/Coffee Delivery.png';

import CatalogItem from '../../components/CatalogItem';

import * as S from './styles';

const Home = () => {
  const theme = useTheme();
  const { products } = useCartContext();

  return (
    <S.Wrapper>
      <S.Banner>
        <S.BannerInfos>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
            <S.BannerItem backgroundColor={theme.colors.yellow.dark}>
              <div>
                <MdShoppingCart />
              </div>
              Compra simples e segura
            </S.BannerItem>
            <S.BannerItem backgroundColor={theme.colors.bases.text}>
              <div>
                <GiCardboardBoxClosed />
              </div>
              Embalagem mantém o café intacto
            </S.BannerItem>
            <S.BannerItem backgroundColor={theme.colors.yellow.medium}>
              <div>
                <RiTimerFill />
              </div>
              Entrega rápida e rastreada
            </S.BannerItem>
            <S.BannerItem backgroundColor={theme.colors.purple.medium}>
              <div>
                <GiCoffeeCup />
              </div>
              O café chega fresquinho até você
            </S.BannerItem>
          </div>
        </S.BannerInfos>

        <img src={BannerImage} />
      </S.Banner>

      <S.CatalogItemsList>
        <h2>Nossos cafés</h2>

        <div>
          {products.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </div>
      </S.CatalogItemsList>
    </S.Wrapper>
  );
};

export default Home;
