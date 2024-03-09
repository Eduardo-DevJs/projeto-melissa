import { Link } from "react-router-dom";
import LogoGoogle from "../src/assets/Google-Logo 1.svg";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-col gap-2">
        <h1 className="text-5xl text-[#FAB90E] mb-4 font-bold">
          Entre com sua conta
        </h1>
        <div className="flex flex-col gap-3">
          <label className="text-2xl block font-semibold">
            Nome de usuario
          </label>
          <input
            className="border outline-none w-full border-black text-base rounded p-2"
            type="text"
            placeholder="Nome de usuario"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-2xl block font-semibold">Senha</label>
          <input
            className="border outline-none w-full border-black text-base rounded p-2"
            type="password"
            placeholder="Digite a senha"
          />
        </div>
        <span className="text-center text-xl font-semibold">
          Esqueci minha senha
        </span>
        <h2 className="text-center text-2xl mt-3">
          Não possui conta?{" "}
          <Link to={"/cadastro"} className="underline text-[#FAB90E]">
            Crie agora
          </Link>
        </h2>

        <div className="flex items-center gap-4 mt-4">
          <button className="bg-black text-white p-2 rounded flex-1 font-bold cursor-pointer">
            VOLTAR
          </button>
          <button className="bg-[#FAB90E] p-2 rounded flex-1 font-bold cursor-pointer">
            ENTRAR
          </button>
        </div>

        <div className="flex items-center gap-4 justify-center mt-4">
          <h2 className="flex items-cente">Ou use sua conta</h2>
          <img src={LogoGoogle} alt="" />
        </div>
      </form>
    </div>
  );
}
