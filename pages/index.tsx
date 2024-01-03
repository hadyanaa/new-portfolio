import { Inter } from 'next/font/google'
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/components/layout/header';
import Image from 'next/image';
import ProjectCard from '@/components/card';

const inter = Inter({ subsets: ['latin'] })

type cardProps = {
  map: Function;
};

type itemCardProps = {
  projects: string;
  id: string;
}

export default function Home() {
  const { t } = useTranslation('pages/index');
  
  const myProjects = t<'projects', {returnObjects: true}, any>('projects', {returnObjects: true});
  // .map(({projects}: itemCardProps) => {
  //   console.log(projects);
  // });
  return (
    <>
      <Header />
      {/* jumbotron */}
      <div className="h-screen flex flex-col items-center justify-center">
        <Image
          className="rounded-full"
          src={"/image/hadyan.jpg"}
          width={120}
          height={120}
          alt='Foto Hadyan'
        />
        <h1 className="text-lg">{t('identity.name')}</h1>
        <p>{t('identity.work')}</p>
      </div>
      {/* about */}
      <div className="h-screen flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <h2>About Me</h2>
        </div>
        <div className="mx-auto grid grid-cols-2 gap-8 w-[60%]">
          <div className="flex justify-center items-center text-center">
            <p>Saya adalah seorang fresh graduate jurusan Sistem Informasi yang berkuliah di Sekolah Tinggi Teknologi Terpadu <a href="https://nurulfikri.ac.id/" target="_blank">Nurul Fikri</a>.</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <p>Aktivitas saat ini adalah menjadi asisten dosen mata kuliah basis data dan junior frontend developer. Untuk profile lebih lanjut bisa cek di <a href="https://www.linkedin.com/in/hadyanaa/" target="_blank">Linkedin</a> saya.</p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="grid grid-cols-3 gap-4 px-8">
        {myProjects.map((projects: itemCardProps) => (
          <ProjectCard
            key={`my-projects-${projects?.id}`}
            {...projects}
          />
        ))}
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