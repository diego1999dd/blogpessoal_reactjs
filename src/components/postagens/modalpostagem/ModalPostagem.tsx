import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css';

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button
            className="
                  rounded-full
                  border-white
                  border-solid
                  border-5
                  py-2
                  px-4
                  text-white
                  font-medium
                  bg-black
                  transition
                  delay-150
                  duration-300
                  ease-in-out
                  hover:-translate-y-1
                  hover:scale-110
                hover:bg-blue-700
                  cursor-pointer
                  "
          >
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;
