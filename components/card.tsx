type ProjectCardProps = {
  key: string;
  id: string;
  nama_project: string;
  image_url: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const {
    key, nama_project, image_url, description
  } = props;
  return (
    <>
      <div key={key} className="flex h-full w-full flex-col items-center gap-2 rounded-2xl p-8 shadow-md">
        <h1>{nama_project}</h1>
        <p>{description}</p>
        <button className="border border-transparent px-8 text-sm py-3 focus:outline-none bg-red-500 rounded-full ">Lihat Project</button>
      </div>
    </>
  )
}