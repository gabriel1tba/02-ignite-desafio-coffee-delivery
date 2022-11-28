import CatalogItem from '../../components/CatalogItem';
import productsMocked from '../../mocks/products';

import * as S from './styles';

const Home = () => {
  return (
    <S.Wrapper>
      <CatalogItem key={productsMocked[0].id} product={productsMocked[0]} />
    </S.Wrapper>
  );
};

export default Home;
