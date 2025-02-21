import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto m-2 rounded-2xl overflow-hidden max-w-[1880px]">
      <img
        className="w-full h-130 object-cover border-b-8 border-white"
        src="/images/imagem_1.jpeg"
        alt="Capa do Perfil"
      />

      <img
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div
        className="relative mt-[-6rem] h-72 flex flex-col 
    bg-gradient-to-r from-black via-blue-400 to-black text-white text-2xl items-center justify-center font-bold"
        style={{ textShadow: '0px 4px 5px rgba(0, 0, 0, 0.75)' }}
      >
        <p className="mt-9">Nome: {usuario.nome} </p>
        <p className="mb-2">Email: {usuario.usuario}</p>
        <button
          className="
              rounded-full
            text-white
              border-blue-900
              hover:-translate-y-1
              hover:scale-110
              transition
              delay-150
              py-2
              px-3
              duration-300
              ease-in-out
             bg-black
             hover:bg-green-400"
        >
          <Link to="/atualizar/">Editar Informações</Link>
        </button>
      </div>
    </div>
  );
}

export default Perfil;
