import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { PencilSimple, Trash } from '@phosphor-icons/react';

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagens({ postagem }: CardPostagensProps) {
  return (
    <div
      className="border-slate-900 border-8 rounded-bl-lg rounded-tl-lg
      rounded-br-lg flex flex-col overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-black text-white py-2 px-4 items-center gap-4">
          <img
            src={postagem.usuario?.foto}
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
          <p>{postagem.texto}</p>
          <p>Tema: {postagem.tema?.descricao}</p>
          <p>
            Data:
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: 'full',
              timeStyle: 'medium',
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-white bg-black hover:bg-green-400
    flex items-center justify-center py-2 delay-150 md:delay-150 font-medium"
        >
          <button className=" cursor-pointer">
            <PencilSimple size={25} />
          </button>
        </Link>

        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center delay-150 md:delay-150 font-medium"
        >
          <button className=" cursor-pointer">
            <Trash size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagens;
