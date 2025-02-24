import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { PencilSimple, Trash } from '@phosphor-icons/react';

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl shadow-black/60">
      <header className="py-2 px-6 bg-black text-white font-bold text-3xl">
        Tema
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>

      <div className="flex">
        <Link
          to={`/editartema/${tema.id}`}
          className="w-full text-white bg-sky-900 hover:bg-green-400
    flex items-center justify-center py-2 delay-150 md:delay-150 font-medium"
        >
          <button className=" cursor-pointer">
            <PencilSimple size={25} />
          </button>
        </Link>

        <Link
          to={`/deletartema/${tema.id}`}
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

export default CardTemas;
