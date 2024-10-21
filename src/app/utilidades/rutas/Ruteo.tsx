import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { ArtRegistrar } from "../../componentes/artistas/ArtRegistrar";
import { ArtListar } from "../../componentes/artistas/ArtListar";
import { ArtAdmin } from "../../componentes/artistas/ArtAdmin";
import { Acerca } from "../../componentes/contenedor/Acerca";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="*" element={<NoEncontrado/>} />
            <Route path="/" element={<Inicio/>} />
            <Route path="/artreg" element={<ArtRegistrar/>} />
            <Route path="/artlist" element={<ArtListar/>} />
            <Route path="/artadmin" element={<ArtAdmin/>} />
            <Route path="/acerca" element={<Acerca/>} />
        </Routes>
    )
}
