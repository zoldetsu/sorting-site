import MyButton from "../UI/Button/MyButton";
import InputSection from "../UI/Input/InputSection";
import "../Styles/App.css";
export default function Login() {
  return (
    <div className="main">
      <h1>Вход</h1>
      <form className="login-page">
        <InputSection type="text" placeholder="Введите логин" />
        <InputSection type="text" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}
