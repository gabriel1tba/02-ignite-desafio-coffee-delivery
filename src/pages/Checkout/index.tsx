import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import CheckoutForm from './CheckoutForm';
import SelectedProducts from './SelectedProducts';

import * as S from './styles';
import { useCartContext } from '../../hooks/useCart';

const formSchema = zod.object({
  zipCode: zod.string().min(9, 'CEP inválido'),
  street: zod.string().min(3, 'Rua inválida'),
  number: zod.string().min(1, 'Informar o número da residência'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'Bairro inválido'),
  city: zod.string().min(3, 'Cidade inválida'),
  uf: zod.string().min(2, 'UF inválida'),
  paymentMethod: zod.object({
    type: zod.string().min(3, 'Forma de pagamento inválida'),
    typeName: zod.string().min(3, 'Forma de pagamento inválida'),
  }),
});

export type CheckoutFormData = zod.infer<typeof formSchema>;

const Checkout = () => {
  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: {
        type: '',
        typeName: '',
      },
    },
  });

  const { handleSubmit, reset } = methods;
  const navigate = useNavigate();
  const { setAddress, clearCart } = useCartContext();

  const onSubmit = handleSubmit((data) => {
    setAddress(data);
    reset();
    clearCart();
    navigate('/success-order');
  });

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <CheckoutForm />

          <SelectedProducts />
        </form>
      </FormProvider>
    </S.Wrapper>
  );
};

export default Checkout;
