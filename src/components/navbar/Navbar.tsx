import { ReactNode, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'sucesso');
    navigate('/');
  }

  let component: ReactNode;

  if (usuario.token !== '') {
    component = (
      <div className="flex w-full h-17 bg-gradient-to-r from-black via-blue-400 to-black border-b-5 border-black justify-center font-family">
        <div className="container flex p-5 justify-between">
          <Link to="/home" className="flex font-bold space-x-3 items-center">
            <img
              className="w-10 h-10 "
              src="/images/technology_4257487.svg"
              alt="Logo do React"
            />
            <h2 className="text-white font-bold">Blog Pessoal</h2>
          </Link>
          <div className="text-white">
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/postagens"
                  className="relative text-lg font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Postagens
                </Link>
              </li>
              <li>
                <Link
                  to="/temas"
                  className="relative text-lg font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Temas
                </Link>
              </li>
              <li>
                <Link
                  to="/cadastrartema"
                  className=" font-bold relative text-lg before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Cadastrar Tema
                </Link>
              </li>
              <li>
                <Link
                  to="/perfil"
                  className=" relative text-lg font-bold before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
                >
                  Perfil
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  onClick={logout}
                  className="font-bold relative text-lg  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 before:bg-white before:transition-all before:duration-300 before:ease-in-out hover:before:w-full pb-2"
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
  return <>{component}</>;
}

export default Navbar;
