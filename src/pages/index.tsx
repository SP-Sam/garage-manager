import { GetServerSideProps, NextPage } from 'next';

const Root: NextPage = () => {
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
  };
};

export default Root;
