import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Cadastro from "./src/Cadastro/Cadastro";

export const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
    ]
  }
]);
