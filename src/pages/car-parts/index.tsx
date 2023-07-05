import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';

import { CarPartListContainer, CarPartsContainer, NoPartsText } from './styles';

import Layout from '@/components/layout';
import CarPartCard from '@/components/CarPartCard';

const CarParts: NextPage = () => {
  return (
    <Layout pageTitle="Peças">
      <Head>
        <title>Peças | Garage Manager</title>
      </Head>

      <CarPartsContainer>
        <NoPartsText>Não há peças cadastradas ainda</NoPartsText>
        <CarPartListContainer>
          <CarPartCard
            id={1}
            name="Amortecedor dianteiro Amortecedor dianteiro dianteiro Amortecedor dianteiro"
            price={999999.99}
          />
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
