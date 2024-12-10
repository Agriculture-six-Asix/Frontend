import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Katalog from "../pages/Katalog";
import DetailKatalog from "../pages/DetailKatalog";
import Edukasi from "../pages/Edukasi";
import Forum from "../pages/Forum";
import DetailForum from "../pages/DetailForum";
import Ulasan from "../pages/Ulasan";
import Telusuri from "../pages/Telusuri";
import { AuthProvider } from "../context/AuthContext";

function RootLayout() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/katalog"} element={<Katalog />} />
          <Route path="/katalog/:parameter" element={<DetailKatalog />} />
          <Route path={"/edukasi"} element={<Edukasi />} />
          <Route path={"/forum"} element={<Forum />} />
          <Route path={"/forum/:parameter"} element={<DetailForum />} />
          <Route path={"/telusuri"} element={<Telusuri />} />
          <Route path={"/ulasan"} element={<Ulasan />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default RootLayout;
