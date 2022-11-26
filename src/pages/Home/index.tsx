import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import CatalogItem from '../../components/CatalogItem';

import * as S from './styles';

const formSchema = zod.object({
  quantity: zod.number(),
});

type FormValues = zod.infer<typeof formSchema>;

const Home = () => {
  const { control, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
    },
  });

  const quantity = watch('quantity');

  return (
    <S.Wrapper>
      <CatalogItem />
    </S.Wrapper>
  );
};

export default Home;
