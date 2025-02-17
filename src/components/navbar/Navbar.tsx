import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('O Usuário foi desconectado com sucesso!');
    navigate('/');
  }

  return (
    <div className="flex w-full h-17 bg-gradient-to-r from-blue-950 to-slate-500 border-b-4 border-black justify-center">
      <div className="container flex p-5 justify-between">
        <Link to="/home" className="flex font-bold space-x-3 items-center">
          <img
            className="w-10 h-10 "
            src="src\assets\images\technology_4257487.svg"
            alt="Logo do React"
          />
          <h2 className="text-white font-bold">Blog Pessoal</h2>
        </Link>
        <div className="">
          <ul className="flex gap-4">
            <li>
              <Link
                to=""
                className="text-emerald-400 relative text-lg font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Postagens
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white relative text-lg font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Temas
              </Link>
            </li>
            <li>
              <Link
                to=""
                className=" text-emerald-400 font-bold relative text-lg before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Cadastrar Tema
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-white relative text-lg font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={logout}
                className="text-emerald-400 font-bold relative text-lg  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
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
