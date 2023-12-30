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
      <div className="mt-8 flex flex-col items-center justify-center">
        <img className="w-20 h-20 rounded-full" src="/image/hadyan.jpg" alt="Foto Hadyan" />
        <h1 className="text-lg">{t('identity.name')}</h1>
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