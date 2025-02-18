import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div
        className="
          flex 
          justify-center
        bg-gradient-to-r from-black via-blue-400 to-black"
      >
        <div
          className="
          container 
          grid 
          grid-cols-2
        text-white"
        >
          <div
            className="
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-4 
            py-4"
          >
            <h2
              className="
            text-5xl
            font-bold
            "
            >
              Seja Bem Vindo!
            </h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <div
              className="
                flex
                justify-around
                gap-4
            "
            >
              <div
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
              "
              >
                <Link to="/">Nova Postagem</Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="src\assets\images\Innovation-amico.svg"
              alt="Imagem da Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
