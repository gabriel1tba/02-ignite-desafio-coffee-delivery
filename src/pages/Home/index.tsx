import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

import * as S from './styles';
import Input from '../../components/Input';

const formSchema = zod.object({
  quantity: zod.number(),
  name: zod.string().min(1, 'Name is required'),
});

type FormValues = zod.infer<typeof formSchema>;

const Home = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 0,
      name: '',
    },
  });

  const count = watch('quantity');

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log(data);
  });

  return (
    <S.Wrapper>
      <h1>Coffee Delivery</h1>
      <p>Count: {count}</p>

      <form onSubmit={onSubmit}>
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <QuantitySelector
              quantity={field.value}
              onDecrement={(value) => setValue('quantity', value)}
              onIncrement={(value) => setValue('quantity', value)}
            />
          )}
        />

        <Input
          placeholder="Name"
          error={errors.name?.message}
          {...register('name')}
        />

        <Button type="submit">Atualizar contador</Button>
      </form>
    </S.Wrapper>
  );
};

export default Home;
