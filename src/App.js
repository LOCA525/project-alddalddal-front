// import logo from "./logo.svg";
import "./App.css";
import "./styles/font.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import MainPage from "./pages/Mainpage";
import RecipeListPage from "./pages/RecipeListPage";
import LoungePage from "./pages/Loungepage";
import Mypage from "./pages/Mypage";
import Loginpage from "./pages/Loginpage";
import Joinpage from "./pages/Joinpage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="users/signup" element={<Joinpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe" element={<RecipeListPage />} />
          <Route path="/recipe/detail" element={<RecipeDetailPage />} />
          <Route path="/lounge" element={<LoungePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
