import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

import Layout from '@/components/layout';
import Head from 'next/head';

const Customers: NextPage = () => {
  return (
    <Layout pageTitle="Clientes">
      <Head>
        <title>Peças | Garage Manager</title>
      </Head>

      <h1>Em desenvolvimento</h1>
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

export default Customers;
