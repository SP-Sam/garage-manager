import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';

import { CarPartListContainer, CarPartsContainer, NoPartsText } from './styles';

import Layout from '@/components/layout';
import CarPartCard from '@/components/CarPartCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { useEffect } from 'react';
import { fetchCarParts } from '@/store/carParts';

const CarParts: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: carParts } = useSelector((state: RootState) => state.carParts);

  useEffect(() => {
    dispatch(fetchCarParts({}));
  }, [dispatch]);

  return (
    <Layout pageTitle="Peças">
      <Head>
        <title>Peças | Garage Manager</title>
      </Head>

      <CarPartsContainer>
        <NoPartsText>Não há peças cadastradas ainda</NoPartsText>
        <CarPartListContainer>
          {carParts.map((carPart) => (
            <CarPartCard
              key={carPart.id}
              id={carPart.id}
              name={carPart.name}
              price={carPart.price}
            />
          ))}
        </CarPartListContainer>
      </CarPartsContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { garageManagerToken } = parseCookies(ctx);

  if (!garageManagerToken) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default CarParts;
