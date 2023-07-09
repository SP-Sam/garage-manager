import Layout from '@/components/layout';
import { NextPage } from 'next';
import Head from 'next/head';

const Profile: NextPage = () => {
  return (
    <Layout pageTitle="Perfil">
      <Head>
        <title>Perfil | Garage Manager</title>
      </Head>
      <h1>Perfil</h1>
    </Layout>
  );
};

export default Profile;
