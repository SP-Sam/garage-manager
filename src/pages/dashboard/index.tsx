import { ReactNode } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { Briefcase, UserCog, Users, Wrench } from 'lucide-react';
import { parseCookies } from 'nookies';
import { dashboardCards } from './dashboardCards';
import Layout from '@/components/layout';
import Head from 'next/head';

const icons: { [key: string]: ReactNode } = {
  briefcase: <Briefcase />,
  users: <Users />,
  'user-cog': <UserCog />,
  wrench: <Wrench />,
};

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard | Garage Manager</title>
      </Head>
    </Layout>
    // <div>
    //   {dashboardCards.map((card) => (
    //     <div key={card.title}>
    //       {icons[card.icon]}
    //       <h3>{card.title}</h3>
    //       <p>{card.description}</p>
    //     </div>
    //   ))}
    // </div>
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
