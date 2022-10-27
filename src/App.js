import {Route, BrowserRouter  as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Alumno from "./pages/alumno/Alumno";
import Profesor from "./pages/profesor/Profesor";
import Cursos from "./pages/cursos/Cursos";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/General/navbar/NavbarG";

function App() {
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/alumnos" element={<Alumno />}/>
        <Route path="/profesores" element={<Profesor />}/>
        <Route path="/cursos" element={<Cursos />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
     </Router>
  );
}
export default App;
