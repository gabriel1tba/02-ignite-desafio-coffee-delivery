import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import OrderForm from './OrderForm';
import SelectedProducts from './SelectedProducts';

import * as S from './styles';

const formSchema = zod.object({
  zipCode: zod.string().min(9, 'CEP inválido'),
  street: zod.string().min(3, 'Rua inválida'),
  number: zod.string().min(1, 'Informar o número da residência'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'Bairro inválido'),
  city: zod.string().min(3, 'Cidade inválida'),
  uf: zod.string().min(2, 'UF inválida'),
  paymentMethod: zod.string().min(1, 'Selecione um método de pagamento'),
});

export type OrderFormData = zod.infer<typeof formSchema>;

const Cart = () => {
  const methods = useForm<OrderFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <OrderForm />

          <SelectedProducts />
        </form>
      </FormProvider>
    </S.Wrapper>
  );
};

export default Cart;
