import {Route, BrowserRouter  as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Alumno from "./pages/alumno/Alumno";
import Profesor from "./pages/profesor/Profesor";
import Cursos from "./pages/cursos/Cursos";
import Facultades from "./pages/facultades/Facultades";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/navbar/NavbarG";
import Curso from "./pages/curso/Curso";
import Alumnos from "./pages/alumnos/Alumnos";

function App() {
  return (
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/alumnos" element={<Alumnos />}/>
        <Route path="/alumnos/:id" element={<Alumno />}/>
        <Route path="/profesores" element={<Profesor />}/>
        {/* <Route path="/profesores/:id" element={<Profesor />}/> */}
        <Route path="/cursos" element={<Cursos />}/>
        <Route path="/cursos/:id" element={<Curso />}/>
        <Route path="/facultades" element={<Facultades/>}/>
        {/* <Route path="/facultades/:id" element={<Facultad />}/> */}

        <Route path="*" element={<NotFound />}/>
      </Routes>
     </Router>
  );
}
export default App;
