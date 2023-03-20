import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { LoginStyle } from "./style";
import * as yup from "yup";
import api from "../../../Services/Api";

export interface iUserLogin {
    name: string;
    password: string;
}

export interface iUserInfo {
  name: string;
  password: string;
}

const Login = () => {
    // const { loginFunction } = useUserContext();

    const loginFunction = async (formLogin: iUserInfo) => {
      try {
        const { data } = await api.post("/login", formLogin);
        localStorage.setItem("@pandaToken", data.accessToken);
        // setUser(data.user);
        // navigate("/dashboard", { replace: true });
      } catch (error) {
        console.error(error)
      }
    }
  
    const formSchema = yup.object().shape({
      name: yup.string().required("nome obrigatório"),
      password: yup.string().required("senha obrigatória"),
    });
  
    const { register, handleSubmit, formState: { errors } } = useForm<iUserLogin>({
      resolver: yupResolver(formSchema),
    });
  
    return (
      <div>
        <LoginStyle>
          
          <div className="divLogin">
            <div className="logoHeader">
            <div className="divReturn">
              <Link to="/" className="return">
                Pagina inicial
              </Link>
            </div>
              <h1>Naruto RP</h1>
              <h2>Registro</h2>
            </div>
            <form action="" onSubmit={handleSubmit(loginFunction)}>
              <input type="text" placeholder="Nome do personagem" {...register("name")} />
              {errors.name?.message}
              <input
                type="password"
                placeholder="Senha"
                {...register("password")}
              />
              {errors.password?.message}
              <Link to="/Register">
                Não possuí uma conta? Registre-se aqui
              </Link>
  
              <button>Entrar</button>
            </form>
          </div>
        </LoginStyle>
      </div>
    );
  };

  export default Login;