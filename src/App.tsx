import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router";
import Error from "./components/Error";
import { pathTo } from "./utils/constants";
import ComingSoon from "./components/ComingSoon";
import ButtonPage from "./pages/docs/components/Button/ButtonPage";
import InputPage from "./pages/docs/components/Input/InputPage";
import SelectPage from "./pages/docs/components/Select/SelectPage";
import ModalPage from "./pages/docs/components/Modal/ModalPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route errorElement={<Error />} element={<MainLayout />}>
          <Route path={pathTo.HOME} element={<HomePage />} />
          <Route path={pathTo.ABOUT} element={<ComingSoon />} />
          <Route path="components">
            <Route path="button" element={<ButtonPage />} />
            <Route path="input" element={<InputPage />} />
            <Route path="select" element={<SelectPage />} />
            <Route path="modal" element={<ModalPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
