import { Inter } from 'next/font/google'
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation('pages/index');

  return (
    <>
      <Header />
      <div>
        <h1>{t('title')}</h1>
        <p>{t('identity.work')}</p>
      </div>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'id', [
      'common',
      'pages/index',
    ])),
  },
});