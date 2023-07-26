import Head from "next/head";
import { useAuth } from "../contexts/Auth";

export default function LoginForm() {
    const { login } = useAuth();
    const handleClick = (e) => {
        e.preventDefault();
        login(e.target.username.value, e.target.password.value)
    }
  return (
    <div className="flex formcontainer justify-center">
        <form onSubmit={handleClick} className="input_container">
            <p>USER NAME</p>
            <input type="text" name="username"/>
            <p>PASSWORD</p>
            <input type="password" name="password"/>
            <button className="btn_green" type="submit">Login</button>
        </form>
    </div>
  );
}
