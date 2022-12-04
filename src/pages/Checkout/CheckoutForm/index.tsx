import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineCreditCard } from 'react-icons/hi';
import { CiBank } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import useCep from '../../../hooks/useCep';

import formatCep from '../../../utils/formatCep';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import * as S from './styles';

import { CheckoutFormData } from '..';

type PaymentMethod = {
  type: string;
  typeName: string;
};

const CheckoutForm = () => {
  const theme = useTheme();
  const { address, fetchAddress, hasFatched, setHasFatched, isLoading } =
    useCep();

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  const watchCep = watch('zipCode');
  const watchPaymentMethod = watch('paymentMethod');

  const handleChangePaymentMethod = (paymentMethod: PaymentMethod) => {
    if (watchPaymentMethod.type === paymentMethod.type) {
      setValue('paymentMethod', {} as PaymentMethod);
      return;
    }

    setValue('paymentMethod', paymentMethod);
  };

  useEffect(() => {
    if (watchCep.length === 9 && !hasFatched) {
      try {
        fetchAddress(watchCep);
        setHasFatched(true);
      } catch (err) {
        console.log(err);
      }
    }
  }, [fetchAddress, hasFatched, setHasFatched, watchCep]);

  useEffect(() => {
    if (watchCep.length === 9 && !address?.erro) {
      setValue('street', address.logradouro);
      setValue('neighborhood', address.bairro);
      setValue('city', address.localidade);
      setValue('uf', address.uf);
    }

    if (watchCep.length < 9) {
      setValue('street', '');
      setValue('neighborhood', '');
      setValue('city', '');
      setValue('uf', '');
      setValue('number', '');
      setValue('complement', '');
      setHasFatched(false);
    }
  }, [
    address.bairro,
    address?.erro,
    address.localidade,
    address.logradouro,
    address.uf,
    setHasFatched,
    setValue,
    watchCep.length,
  ]);

  return (
    <S.Wrapper>
      <h1>Complete seu pedido</h1>
      <S.FormSection>
        <S.FormHeader fillSvg={theme.colors.yellow.dark}>
          <SlLocationPin />
          <div>
            <p>Endereço de Entrega</p>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
        </S.FormHeader>
        <S.Col size={40}>
          <Input
            placeholder="CEP"
            error={errors.zipCode?.message}
            value={watchCep}
            onChange={(e) => setValue('zipCode', formatCep(e.target.value))}
          />
        </S.Col>

        <S.Col>
          <Input
            placeholder="Rua"
            error={errors.street?.message}
            disabled={!hasFatched}
            isLoading={isLoading}
            {...register('street')}
          />
        </S.Col>

        <S.Row>
          <S.Col size={40}>
            <Input
              placeholder="Número"
              error={errors.number?.message}
              disabled={!hasFatched}
              isLoading={isLoading}
              {...register('number')}
            />
          </S.Col>

          <S.Col size={60}>
            <Input
              placeholder="Complemento"
              error={errors.complement?.message}
              disabled={!hasFatched}
              isLoading={isLoading}
              {...register('complement')}
            />
          </S.Col>
        </S.Row>

        <S.Row>
          <S.Col size={40}>
            <Input
              placeholder="Bairro"
              error={errors.neighborhood?.message}
              disabled={!hasFatched}
              isLoading={isLoading}
              {...register('neighborhood')}
            />
          </S.Col>

          <S.Col size={50}>
            <Input
              placeholder="Cidade"
              error={errors.city?.message}
              disabled={!hasFatched}
              isLoading={isLoading}
              {...register('city')}
            />
          </S.Col>

          <S.Col size={10}>
            <Input
              placeholder="UF"
              error={errors.uf?.message}
              disabled={!hasFatched}
              isLoading={isLoading}
              {...register('uf')}
            />
          </S.Col>
        </S.Row>
      </S.FormSection>

      <S.FormSection>
        <S.FormHeader fillSvg={theme.colors.purple.medium}>
          <SlLocationPin />
          <div>
            <p>Pagamento</p>
            <small>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </small>
          </div>
        </S.FormHeader>

        <S.ButtonSelect hasError={!!errors.paymentMethod}>
          <Button
            className={watchPaymentMethod.type === 'creditCard' ? 'active' : ''}
            variant="common"
            color="purple"
            icon={HiOutlineCreditCard}
            onClick={() =>
              handleChangePaymentMethod({
                type: 'creditCard',
                typeName: 'Cartão de Crédito',
              })
            }
          >
            CARTÃO DE CRÉDITO
          </Button>

          <Button
            className={watchPaymentMethod.type === 'debitCard' ? 'active' : ''}
            variant="common"
            color="purple"
            icon={CiBank}
            onClick={() =>
              handleChangePaymentMethod({
                type: 'debitCard',
                typeName: 'Cartão de Débito',
              })
            }
          >
            CARTÃO DE DÉBITO
          </Button>

          <Button
            className={watchPaymentMethod.type === 'money' ? 'active' : ''}
            variant="common"
            color="purple"
            icon={FaRegMoneyBillAlt}
            onClick={() =>
              handleChangePaymentMethod({
                type: 'money',
                typeName: 'Dinheiro',
              })
            }
          >
            DINHEIRO
          </Button>
        </S.ButtonSelect>
      </S.FormSection>
    </S.Wrapper>
  );
};

export default CheckoutForm;
