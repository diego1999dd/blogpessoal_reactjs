import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex w-full h-17 bg-gradient-to-r from-blue-950 to-slate-500 border-b-2 border-white justify-center">
      <div className="container flex p-5 text-white justify-between">
        <Link to="/home" className="flex font-bold space-x-3 items-center">
          <img
            className="w-10 h-10 "
            src="src\assets\images\technology_4257487.svg"
            alt="Logo do React"
          />
          <h2>Blog Pessoal</h2>
        </Link>
        <div className="">
          <ul className="flex gap-4 ">
            <li>
              <Link
                to=""
                className="relative text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Postagens
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="relative text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Temas
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="relative text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Cadastrar Tema
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="relative text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="relative text-lg font-semibold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
