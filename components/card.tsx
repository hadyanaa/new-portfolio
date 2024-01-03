/* eslint-disable @next/next/no-img-element */

type ProjectCardProps = {
  nama_project: string;
  image_url: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    nama_project, image_url, description
  } = props;
  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center gap-2 rounded-2xl p-8 shadow-md">
        <img src={image_url} className="w-full border h-[200px]" alt="image-projects" />
        <h1 className="text-center font-bold text-lg">{nama_project}</h1>
        <p>{description}</p>
        <button className="absolute bottom-5 border border-transparent px-8 text-sm py-3 focus:outline-none bg-red-500 rounded-full ">Lihat Project</button>
      </div>
    </>
  )
}