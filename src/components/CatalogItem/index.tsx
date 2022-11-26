import * as S from './styles';

interface CatalogItemProps {
  id: number;
  image: string;
  label: string[];
  title: string;
  description: string;
  price: number;
  amount: number;
}

const CatalogItem = () => {
  return (
    <S.Wrapper>
      <h1>CatalogItem</h1>
    </S.Wrapper>
  );
};

export default CatalogItem;
