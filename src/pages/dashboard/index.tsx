import { ReactNode } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { parseCookies } from 'nookies';

import { dashboardCards } from './dashboardCards';

import Layout from '@/components/layout';
import { GridContainer, MainContainer } from './styles';
import DashboardCard from '@/components/DashboardCard/DashboardCard';

const Dashboard: NextPage = () => {
  return (
    <Layout pageTitle="Dashboard">
      <Head>
        <title>Dashboard | Garage Manager</title>
      </Head>

      <MainContainer>
        <GridContainer>
          {dashboardCards.map((card) => (
            <DashboardCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              toPage={card.toPage}
            />
          ))}
        </GridContainer>
      </MainContainer>
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

export default Dashboard;
