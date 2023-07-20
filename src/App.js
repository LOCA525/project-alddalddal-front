import "./App.css";
import "./styles/font.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import MainPage from "./pages/Mainpage";
import RecipeListPage from "./pages/RecipeListPage";
import LoungePage from "./pages/Loungepage";
import Mypage from "./pages/Mypage";
import Loginpage from "./pages/Loginpage";
import Joinpage from "./pages/Joinpage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="users/signup" element={<Joinpage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/recipe" element={<RecipeListPage />} />
            <Route path="/recipe/detail/:id" element={<RecipeDetailPage />} />
            <Route path="/lounge" element={<LoungePage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
