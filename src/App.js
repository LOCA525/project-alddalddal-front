import logo from "./logo.svg";
import "./App.css";
import "./styles/font.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import MainPage from "./pages/Mainpage";
import RecipeListPage from "./pages/RecipeListPage";
import LoungePage from "./pages/Loungepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/join" element={<div>회원가입페이지</div>} />
          <Route path="/login" element={<div>로그인페이지</div>} />
          <Route path="/mypage" element={<div>마이페이지</div>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe" element={<RecipeListPage />} />
          <Route path="/recipe/detail" element={<div>칵테일레시피상세페이지</div>} />
          <Route path="/lounge" element={<LoungePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
