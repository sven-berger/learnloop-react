import Home from "./pages/Home.tsx";
import Impressum from "./pages/Impressum.tsx";
import TicTacToe from "./pages/TicTacToe.tsx";
import ProfileProps from "./pages/profiles.tsx";
import Useeffect from "./pages/snippets/Useeffect.tsx";
import Datenschutzerklaerung from "./pages/Datenschutzerklaerung.tsx";
import Navbar from "./components/navbar.tsx";
import Sidebar from "./components/sidebar.tsx";
import Footer from "./components/footer.tsx";
import Zahlenvergleich from "./pages/Zahlenvergleich.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="font-sans min-h-screen w-screen p-6 bg-gray-100">
      <Navbar />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-6">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/profiles" element={<ProfileProps />} />
            <Route path="/zahlenvergleich" element={<Zahlenvergleich />} />
            <Route path="/snippets/useeffect" element={<Useeffect />} />
            <Route
              path="/datenschutzerklaerung"
              element={<Datenschutzerklaerung />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}
