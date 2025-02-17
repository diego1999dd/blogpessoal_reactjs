import { GithubLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react';

function Footer() {
  let data = new Date().getFullYear();

  return (
    <div className="flex w-full bg-gradient-to-r from-blue-950 to-slate-500 justify-center text-white border-t-5 border-black ">
      <div className="flex flex-col text-center mt-4 mb-4">
        <h2 className="font-bold">
          Blog Pessoal Diego Rodrigues do Nascimento | Copyright: {data}
        </h2>
        <p className="font-normal">Acessa nossas redes socias</p>
        <div className="flex flex-row justify-center space-x-2">
          <a href="https://github.com/diego1999dd" target="_blank">
            <GithubLogo size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/diegorodriguesdonascimento99-ti/"
            target="_blank"
          >
            <LinkedinLogo size={40} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookLogo size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
