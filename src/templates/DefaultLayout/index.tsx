import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';

import * as S from './styles';

const DefaultLayout = () => {
  return (
    <S.Wrapper>
      <Header />

      <Outlet />
    </S.Wrapper>
  );
};

export default DefaultLayout;
