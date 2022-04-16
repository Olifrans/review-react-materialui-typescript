import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useDrawerContext } from "../shared/contexts";
// import { useEffect } from "react";
// import { Dashboard, ListagemDeCidade } from "../pages";
// import { ListagemDePessoas } from "../pages/pessoas/ListagemDePessoas";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Button variant="contained" color="primary">Acesso</Button>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
