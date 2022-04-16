import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";
// import { useDrawerContext } from "../shared/contexts";
// import { useEffect } from "react";
// import { Dashboard, ListagemDeCidade } from "../pages";
// import { ListagemDePessoas } from "../pages/pessoas/ListagemDePessoas";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            MudarTema
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
