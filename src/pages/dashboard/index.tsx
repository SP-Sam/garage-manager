import { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

const Dashboard: NextPage = () => {
  return <div>Dashboard</div>;
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
