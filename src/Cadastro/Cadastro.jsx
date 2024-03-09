import { Link } from "react-router-dom";
import Logo from "../assets/Btn-homepage.svg";
import line from "../assets/Line 5.png";
import Piloto from "../assets/Piloto Seguro sem fundo 7.svg";
import visa from "../assets/Visa.png";
import mastercard from "../assets/Mastercard.png";
import american from "../assets/AmericanExpress.png";
import profile from "../assets/Campo-ftPerfil.png";

export default function Cadastro() {
  return (
    <>
      <header className="p-4 bg-black text-white">
        <div className="p-2 max-w-[1500px] mx-auto flex items-center justify-between">
          <img src={Logo} alt="" />

          <div className="flex items-center gap-12">
            <img src={Piloto} alt="" />

            <nav>
              <ul className="flex items-center gap-5">
                <li className="px-4">BEM VINDO(A) MELISSA</li> |
                <li className="px-4">CURSO</li> |
                <li className="px-4">ESTOU APRENDENDO</li> |
                <li className="px-4">PERFIL</li> |
                <li className="px-4">SUPORTE</li> |
              </ul>
            </nav>

            <img src={Piloto} alt="" />
          </div>

          <Link to={"/"}>FAZER LOGIN</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-10 pb-10">
        <h1 className="text-3xl font-bold"> {">"} CRIAR CONTA</h1>
        <img src={line} className="mt-4 text-center w-full" alt="" />
        <form className="grid grid-cols-2 gap-10 mt-4">
          <div className="flex flex-col gap-3">
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
                placeholder="senha"
              />
            </div>

            <div>
              <h2>Cadastrar forma de pagamento</h2>
              <img src={line} className="mt-4 mb-4 text-center w-full" alt="" />
              <div className="flex flex-col items-start mt">
                <h2>Cartões</h2>
                <ul className="flex items-centes gap-4">
                  <li>
                    <img src={visa} alt="" />
                  </li>
                  <li>
                    <img src={mastercard} alt="" />
                  </li>
                  <li>
                    <img src={american} alt="" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-2xl block font-semibold">
                Número de cartao
              </label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="number"
                placeholder="... ... ... ..."
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-2xl block font-semibold">
                Data de validade
              </label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="text"
                placeholder="MM / YYYY"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-2xl block font-semibold">
                Codigo de segunda (3 digitos)
              </label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="number"
                placeholder="..."
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              style={{ height: "305px", width: "250px" }}
              src={profile}
              alt=""
            />

            <div className="flex flex-col w-full gap-3">
              <label className="text-2xl block font-semibold">
                Nome completo
              </label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="text"
              />
            </div>

            <div className="flex flex-col w-full gap-3">
              <label className="text-2xl block font-semibold">Email</label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="email"
              />
            </div>

            <div className="flex flex-col w-full gap-3">
              <label className="text-2xl block font-semibold">CPF</label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="number"
              />
            </div>

            <div className="flex flex-col w-full gap-3">
              <label className="text-2xl block font-semibold">Telefone</label>
              <input
                className="border outline-none w-full border-black text-base rounded p-2"
                type="number"
              />
            </div>
          </div>
        </form>
        <div className="flex items-center justify-end mt-10 gap-4">
          <button className="bg-transparent border border-black p-2 rounded font-bold px-20 cursor-pointer">
            CANCELAR
          </button>

          <button className="bg-[#FAB90E] text-black p-2 rounded font-bold px-20 cursor-pointer">
            CADASTRAR
          </button>
        </div>
      </main>
    </>
  );
}
