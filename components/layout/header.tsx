export default function Header(){
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-4 px-16 bg-white">
        <a href="#">Hadyan Abdul Aziz</a>
        <div className="flex">
          <ul className="flex flex-row gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Projects</a>
            </li>
            <li>
              <a href="#home">Certificates</a>
            </li>
            <li>
              <a href="#home">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
  )
}