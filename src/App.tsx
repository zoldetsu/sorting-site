import { BrowserRouter } from "react-router-dom";
import "./Styles/App.css";

import HeaderUp from "./components/HeaderUp/Header";

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderUp /> */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
