import { GithubLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react';
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {
  let data = new Date().getFullYear();

  const { usuario } = useContext(AuthContext);

  let component: ReactNode;

  if (usuario.token !== '') {
    component = (
      <div className="flex w-full bg-gradient-to-r from-black via-blue-400 to-black justify-center text-black border-t-5 border-black ">
        <div className="flex flex-col text-center mt-4 mb-4">
          <h2 className="font-bold text-white">
            Blog Pessoal Diego Rodrigues do Nascimento | Copyright: {data}
          </h2>
          <p className="font-normal text-white">Acessa nossas redes socias</p>
          <div className="flex flex-row justify-center space-x-2">
            <a href="https://github.com/diego1999dd" target="_blank">
              <GithubLogo
                size={40}
                className="hover:fill-white transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/diego-rodrigues-do-nascimento-b6a7641a3/"
              target="_blank"
            >
              <LinkedinLogo
                size={40}
                className="hover:fill-white transition-colors duration-300"
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookLogo
                size={40}
                className="hover:fill-white transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return <>{component}</>;
}

export default Footer;
