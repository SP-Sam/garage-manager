import { useEffect, useRef } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';
import { useDispatch, useSelector } from 'react-redux';
import autoAnimate from '@formkit/auto-animate';

import { AppDispatch, RootState } from '@/store';
import { fetchCarParts } from '@/store/carParts';

import Layout from '@/components/layout';
import CarPartCard from '@/components/CarPartCard';
import TableToolsBar from '@/components/TableToolsBar';

import { CarPartListContainer, CarPartsContainer, NoPartsText } from './styles';

const CarParts: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: carParts } = useSelector((state: RootState) => state.carParts);
  const parent = useRef(null);

  useEffect(() => {
    dispatch(fetchCarParts({}));
  }, [dispatch]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 350 });
  }, [parent]);

  return (
    <Layout pageTitle="Peças">
      <Head>
        <title>Peças | Garage Manager</title>
      </Head>

      <CarPartsContainer ref={parent}>
        <TableToolsBar />
        {carParts.length === 0 ? (
          <NoPartsText>Não há peças cadastradas ainda</NoPartsText>
        ) : (
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
        )}
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
